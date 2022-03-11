import { DemoKeystore, LightDidDetails, SigningAlgorithms, EncryptionAlgorithms } from '@kiltprotocol/did'
import type { DidServiceEndpoint } from '@kiltprotocol/types'
import { VerificationKeyType, EncryptionKeyType } from '@kiltprotocol/types'

export async function main(keystore: DemoKeystore): Promise<void> {
  const authenticationSeed = '0x123456789'

  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: SigningAlgorithms.Ed25519,
    seed: authenticationSeed,
  })

  // Generate the seed for the encryption key.
  const encryptionSeed = '0x987654321'

  // Use the keystore to generate a new keypair to use for encryption.
  const encryptionKeyPublicDetails = await keystore.generateKeypair({
    alg: EncryptionAlgorithms.NaclBox,
    seed: encryptionSeed,
  })

  const serviceEndpoints: DidServiceEndpoint[] = [
    {
      id: 'my-service',
      types: ['CollatorCredential'],
      urls: ['http://example.domain.org'],
    },
  ]

  // Generate the KILT light DID with the information generated.
  const lightDID = LightDidDetails.fromDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Ed25519
    },
    encryptionKey: {
      publicKey: encryptionKeyPublicDetails.publicKey,
      type: EncryptionKeyType.X25519
    },
    serviceEndpoints,
  })
  console.log(lightDID.did)
}
