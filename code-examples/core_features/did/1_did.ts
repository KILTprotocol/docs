import {
  DemoKeystore,
  LightDidDetails,
  SigningAlgorithms,
} from '@kiltprotocol/did'
import {
  VerificationKeyType,
} from '@kiltprotocol/types'

export async function main(keystore: DemoKeystore): Promise<void> {
  // Generate seed for the authentication key.
  // For random mnemonic generation, refer to the `UUID` module of the `@kiltprotocol/utils` package.
  const authenticationSeed = '0x123456789'

  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: SigningAlgorithms.Ed25519,
    seed: authenticationSeed,
  })

  // Create a light DID from the generated authentication key.
  const lightDID = LightDidDetails.fromDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Ed25519
    },
  })
  console.log(lightDID.did)
}
