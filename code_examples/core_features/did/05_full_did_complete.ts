import type { Keyring } from '@polkadot/api'

import { blake2AsU8a, randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createCompleteFullDid(
  keyring: Keyring,
  submitterAccount: Kilt.KiltKeyringPair,
  authenticationSeed: Uint8Array = randomAsU8a(32),
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<Kilt.DidDetails> {
  // Create the encryption key seed by hasing the provided authentication seed.
  const encryptionSeed = blake2AsU8a(authenticationSeed)
  // Create the attestation key seed by hasing the generated encryption key seed.
  const attestationSeed = blake2AsU8a(encryptionSeed)
  // Create the delegation key seed by hasing the generated attestation key seed.
  const delegationSeed = blake2AsU8a(attestationSeed)

  // Ask the keyring to generate the new keypairs.
  const { publicKey: authPublicKey } = keyring.addFromSeed(
    authenticationSeed,
    {},
    'ed25519'
  )
  const { publicKey: encPublicKey } = keyring.addFromSeed(encryptionSeed)
  const { publicKey: attPublicKey } = keyring.addFromSeed(
    attestationSeed,
    {},
    'sr25519'
  )
  const { publicKey: delPublicKey } = keyring.addFromSeed(
    delegationSeed,
    {},
    'ecdsa'
  )

  const fullDidCreationTx = await Kilt.Did.Chain.getStoreTx(
    {
      authentication: [
        {
          publicKey: authPublicKey,
          type: 'ed25519'
        }
      ],
      keyAgreement: [
        {
          publicKey: encPublicKey,
          type: 'x25519'
        }
      ],
      assertionMethod: [
        {
          publicKey: attPublicKey,
          type: 'sr25519'
        }
      ],
      capabilityDelegation: [
        {
          publicKey: delPublicKey,
          type: 'ecdsa'
        }
      ],
      service: [
        {
          id: '#my-service',
          type: ['service-type'],
          serviceEndpoint: ['https://www.example.com']
        }
      ]
    },
    submitterAccount.address,
    signCallback
  )

  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount, {
    resolveOn
  })

  // The new information is fetched from the blockchain and returned.
  const fullDid = await Kilt.Did.query(
    Kilt.Did.Utils.getFullDidUriFromKey({
      publicKey: authPublicKey,
      type: 'ed25519'
    })
  )

  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }

  return fullDid
}
