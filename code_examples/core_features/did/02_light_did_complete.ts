import type { Keyring } from '@polkadot/api'

import { hexToU8a } from '@polkadot/util'
import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createCompleteLightDid(
  keyring: Keyring,
  authenticationSeed: Uint8Array = randomAsU8a(32)
): Promise<Kilt.DidDetails> {
  const { publicKey: authPublicKey } = keyring.addFromSeed(
    authenticationSeed,
    {},
    'ed25519'
  )

  // Generate the seed for the encryption key.
  const encryptionSeed = hexToU8a('0x987654321')
  const { publicKey: encPublicKey } = keyring.addFromSeed(encryptionSeed)

  const service: Kilt.DidServiceEndpoint[] = [
    {
      id: '#my-service',
      type: ['KiltPublishedCredentialCollectionV1'],
      serviceEndpoint: ['http://example.domain.org']
    }
  ]

  // Create the KILT light DID with the information generated.
  const lightDID = Kilt.Did.createLightDidDetails({
    authentication: [
      {
        publicKey: authPublicKey,
        type: 'ed25519'
      }
    ],
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
