import {
  DemoKeystore,
  LightDidDetails,
  SigningAlgorithms
} from '@kiltprotocol/did'
import { VerificationKeyType } from '@kiltprotocol/types'

export async function createSimpleLightDid(
  keystore: DemoKeystore,
  authenticationSeed: string | undefined = undefined
): Promise<LightDidDetails> {
  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.
  // If no `authenticationSeed` is provided, a random one will be generated.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: SigningAlgorithms.Ed25519,
    seed: authenticationSeed
  })

  // Create a light DID from the generated authentication key.
  const lightDID = LightDidDetails.fromDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Ed25519
    }
  })
  console.log(lightDID.did)

  return lightDID
}
