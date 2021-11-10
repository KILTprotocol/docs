import {
  DemoKeystore,
  LightDidDetails,
  SigningAlgorithms,
} from '@kiltprotocol/did'

export async function main() {
  // Instantiate the demo keystore.
  const keystore = new DemoKeystore()

  // Generate seed for the authentication key.
  // For random mnemonic generation, refer to the `UUID` module of the `@kiltprotocol/utils` package.
  const authenticationSeed = '0x123456789'

  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: SigningAlgorithms.Ed25519,
    seed: authenticationSeed,
  })

  // Create a light DID from the generated authentication key.
  const lightDID = new LightDidDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(
        authenticationKeyPublicDetails.alg
      ),
    },
  })
  // Will print `did:kilt:light:014sxSYXakw1ZXBymzT9t3Yw91mUaqKST5bFUEjGEpvkTuckar`.
  console.log(lightDID.did)
}
