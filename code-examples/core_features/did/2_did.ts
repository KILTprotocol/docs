import { DemoKeystore, LightDidDetails, SigningAlgorithms, EncryptionAlgorithms } from '@kiltprotocol/did'
import type { IDidServiceEndpoint } from '@kiltprotocol/types'

export async function main() {
  const keystore = new DemoKeystore()

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

  const serviceEndpoints: IDidServiceEndpoint[] = [
    {
      id: 'my-service',
      types: ['CollatorCredential'],
      urls: ['http://example.domain.org'],
    },
  ]

  // Generate the KILT light DID with the information generated.
  const lightDID = new LightDidDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(authenticationKeyPublicDetails.alg),
    },
    encryptionKey: {
      publicKey: encryptionKeyPublicDetails.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(encryptionKeyPublicDetails.alg),
    },
    serviceEndpoints,
  })

  // Will print `did:kilt:light:014sxSYXakw1ZXBymzT9t3Yw91mUaqKST5bFUEjGEpvkTuckar:omFlomlwdWJsaWNLZXlYILu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7ZHR5cGVmeDI1NTE5YXOBo2JpZHNteS1zZXJ2aWNlLWVuZHBvaW50ZXR5cGVzgnZDb2xsYXRvckNyZWRlbnRpYWxUeXBlbVNvY2lhbEtZQ1R5cGVkdXJsc4J1aHR0cHM6Ly9teV9kb21haW4ub3JnbXJhbmRvbV9kb21haW4`.
  console.log(lightDID.did)
}
