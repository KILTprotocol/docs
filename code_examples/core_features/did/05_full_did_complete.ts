import type { Keyring } from '@polkadot/api'

import {
  blake2AsU8a,
  naclBoxPairFromSecret,
  randomAsU8a
} from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createCompleteFullDid(
  keyring: Keyring,
  submitterAccount: Kilt.KiltKeyringPair,
  authenticationSeed: Uint8Array = randomAsU8a(32)
): Promise<Kilt.DidDocument> {
  // Create the encryption key seed by hasing the provided authentication seed.
  const encryptionSeed = blake2AsU8a(authenticationSeed)
  // Create the attestation key seed by hasing the generated encryption key seed.
  const attestationSeed = blake2AsU8a(encryptionSeed)
  // Create the delegation key seed by hasing the generated attestation key seed.
  const delegationSeed = blake2AsU8a(attestationSeed)

  // Ask the keyring to generate the new keypairs.
  const authKey = keyring.addFromSeed(
    authenticationSeed
  ) as Kilt.KiltKeyringPair
  const { publicKey: encPublicKey } = naclBoxPairFromSecret(randomAsU8a(32))
  const attKey = keyring.addFromSeed(attestationSeed) as Kilt.KiltKeyringPair
  const delKey = keyring.addFromSeed(delegationSeed) as Kilt.KiltKeyringPair

  const fullDidCreationTx = await Kilt.Did.getStoreTx(
    {
      authentication: [authKey],
      keyAgreement: [
        {
          publicKey: encPublicKey,
          type: 'x25519'
        }
      ],
      assertionMethod: [attKey],
      capabilityDelegation: [delKey],
      service: [
        {
          id: '#my-service',
          type: ['service-type'],
          serviceEndpoint: ['https://www.example.com']
        }
      ]
    },
    submitterAccount.address,
    async ({ data }) => ({ data: authKey.sign(data), keyType: authKey.type })
  )

  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)

  // The new information is fetched from the blockchain and returned.
  const fullDid = await Kilt.Did.query(
    Kilt.Did.getFullDidUriFromKey(authKey)
  )

  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }

  return fullDid
}
