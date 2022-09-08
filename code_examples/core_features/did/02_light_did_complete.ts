import type { Keyring } from '@polkadot/api'

import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createCompleteLightDid(
  keyring: Keyring,
  authenticationSeed: Uint8Array = randomAsU8a(32)
): Promise<Kilt.DidDetails> {
  const authKey = keyring.addFromSeed(authenticationSeed) as Kilt.NewLightDidVerificationKey

  // Generate the encryption key.
  const { publicKey: encPublicKey } = keyring.addFromSeed(randomAsU8a(32))

  const service: Kilt.DidServiceEndpoint[] = [
    {
      id: '#my-service',
      type: ['KiltPublishedCredentialCollectionV1'],
      serviceEndpoint: ['http://example.domain.org']
    }
  ]

  // Create the KILT light DID with the information generated.
  const lightDID = Kilt.Did.createLightDidDetails({
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
