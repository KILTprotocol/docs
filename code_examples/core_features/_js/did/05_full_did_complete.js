import { blake2AsHex, randomAsHex } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'
export async function createCompleteFullDid(
  keystore,
  api,
  submitterAccount,
  authenticationSeed = undefined,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  authenticationSeed = authenticationSeed || randomAsHex(32)
  // Create the attestation key seed by hasing the provided authentication seed.
  const attestationSeed = blake2AsHex(authenticationSeed)
  // Create the delegation key seed by hasing the generated attestation key seed.
  const delegationSeed = blake2AsHex(attestationSeed)
  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: Kilt.Did.SigningAlgorithms.Ed25519
  })
  const encryptionSeed = randomAsHex(32)
  // Ask the keystore to generate a new keypar to use for encryption.
  const encryptionKeyPublicDetails = await keystore.generateKeypair({
    seed: encryptionSeed,
    alg: Kilt.Did.EncryptionAlgorithms.NaclBox
  })
  const attestationKeyPublicDetails = await keystore.generateKeypair({
    seed: attestationSeed,
    alg: Kilt.Did.SigningAlgorithms.Sr25519
  })
  const delegationKeyPublicDetails = await keystore.generateKeypair({
    seed: delegationSeed,
    alg: Kilt.Did.SigningAlgorithms.EcdsaSecp256k1
  })
  const fullDid = await new Kilt.Did.FullDidCreationBuilder(api, {
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: Kilt.VerificationKeyType.Ed25519
  })
    .addEncryptionKey({
      publicKey: encryptionKeyPublicDetails.publicKey,
      type: Kilt.EncryptionKeyType.X25519
    })
    .setAttestationKey({
      publicKey: attestationKeyPublicDetails.publicKey,
      type: Kilt.VerificationKeyType.Sr25519
    })
    .setDelegationKey({
      publicKey: delegationKeyPublicDetails.publicKey,
      type: Kilt.VerificationKeyType.Ecdsa
    })
    .addServiceEndpoint({
      id: 'my-service',
      types: ['service-type'],
      urls: ['https://www.example.com']
    })
    .buildAndSubmit(keystore, submitterAccount.address, async (creationTx) => {
      await Kilt.BlockchainUtils.signAndSubmitTx(creationTx, submitterAccount, {
        resolveOn
      })
    })
  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }
  return fullDid
}
