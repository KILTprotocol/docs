import type { Keyring } from '@polkadot/api'

import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createSimpleLightDid(
  keyring: Keyring,
  authenticationSeed: Uint8Array = randomAsU8a(32)
): Promise<Kilt.DidDocument> {
  // Ask the keyring to generate a new keypair to use for authentication with the generated seed.
  const authKey = keyring.addFromSeed(
    authenticationSeed
  ) as Kilt.NewLightDidVerificationKey

  // Create a light DID from the generated authentication key.
  const lightDID = Kilt.Did.createLightDidDocument({
    authentication: [authKey]
  })
  console.log(lightDID.uri)

  return lightDID
}
