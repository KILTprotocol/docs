import type { Keyring } from '@polkadot/api'

import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createSimpleLightDid(
  keyring: Keyring,
  authenticationSeed: Uint8Array = randomAsU8a(32)
): Promise<Kilt.DidDetails> {
  // Ask the keyring to generate a new keypair to use for authentication with the generated seed.
  const { publicKey } = keyring.addFromSeed(authenticationSeed, {}, 'ed25519')

  // Create a light DID from the generated authentication key.
  const lightDID = Kilt.Did.createLightDidDetails({
    authentication: [
      {
        publicKey,
        type: 'ed25519'
      }
    ]
  })
  console.log(lightDID.uri)

  return lightDID
}
