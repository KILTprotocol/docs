import * as Kilt from '@kiltprotocol/sdk-js'
export async function createCompleteLightDid(
  keystore,
  authenticationSeed = undefined
) {
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: Kilt.Did.SigningAlgorithms.Ed25519,
    seed: authenticationSeed
  })
  // Generate the seed for the encryption key.
  const encryptionSeed = '0x987654321'
  // Use the keystore to generate a new keypair to use for encryption.
  const encryptionKeyPublicDetails = await keystore.generateKeypair({
    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,
    seed: encryptionSeed
  })
  const serviceEndpoints = [
    {
      id: 'my-service',
      types: ['KiltPublishedCredentialCollectionV1'],
      urls: ['http://example.domain.org']
    }
  ]
  // Create the KILT light DID with the information generated.
  const lightDID = Kilt.Did.LightDidDetails.fromDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: Kilt.VerificationKeyType.Ed25519
    },
    encryptionKey: {
      publicKey: encryptionKeyPublicDetails.publicKey,
      type: Kilt.EncryptionKeyType.X25519
    },
    serviceEndpoints
  })
  console.log(lightDID.uri)
  return lightDID
}
