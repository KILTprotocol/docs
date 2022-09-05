import * as Kilt from '@kiltprotocol/sdk-js'
export async function createSimpleLightDid(
  keystore,
  authenticationSeed = undefined
) {
  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.
  // If no `authenticationSeed` is provided, a random one will be generated.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: Kilt.Did.SigningAlgorithms.Ed25519,
    seed: authenticationSeed
  })
  // Create a light DID from the generated authentication key.
  const lightDID = Kilt.Did.LightDidDetails.fromDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: Kilt.VerificationKeyType.Ed25519
    }
  })
  console.log(lightDID.uri)
  return lightDID
}
