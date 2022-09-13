import { naclBoxPairFromSecret, randomAsU8a } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'
export function createCompleteLightDid(
  keyring,
  authenticationSeed = randomAsU8a(32)
) {
  const authKey = keyring.addFromSeed(authenticationSeed)
  // Generate the encryption key.
  const { publicKey: encPublicKey } = naclBoxPairFromSecret(randomAsU8a(32))
  const service = [
    {
      id: '#my-service',
      type: ['KiltPublishedCredentialCollectionV1'],
      serviceEndpoint: ['http://example.domain.org']
    }
  ]
  // Create the KILT light DID with the information generated.
  const lightDID = Kilt.Did.createLightDidDocument({
    authentication: [authKey],
    keyAgreement: [
      {
        publicKey: encPublicKey,
        type: 'x25519'
      }
    ],
    service
  })
  console.log(lightDID.uri)
  return lightDID
}
