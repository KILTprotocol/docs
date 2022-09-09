import { blake2AsU8a, randomAsU8a } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'
export async function createCompleteFullDid(
  keyring,
  submitterAccount,
  authenticationSeed = randomAsU8a(32),
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // Create the encryption key seed by hasing the provided authentication seed.
  const encryptionSeed = blake2AsU8a(authenticationSeed)
  // Create the attestation key seed by hasing the generated encryption key seed.
  const attestationSeed = blake2AsU8a(encryptionSeed)
  // Create the delegation key seed by hasing the generated attestation key seed.
  const delegationSeed = blake2AsU8a(attestationSeed)
  // Ask the keyring to generate the new keypairs.
  const authKet = keyring.addFromSeed(authenticationSeed)
  const { publicKey: encPublicKey } = keyring.addFromSeed(encryptionSeed)
  const attKey = keyring.addFromSeed(attestationSeed)
  const delKey = keyring.addFromSeed(delegationSeed)
  const fullDidCreationTx = await Kilt.Did.Chain.getStoreTx(
    {
      authentication: [authKet],
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
    signCallback
  )
  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount, {
    resolveOn
  })
  // The new information is fetched from the blockchain and returned.
  const fullDid = await Kilt.Did.query(
    Kilt.Did.Utils.getFullDidUriFromKey(authKet)
  )
  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }
  return fullDid
}
