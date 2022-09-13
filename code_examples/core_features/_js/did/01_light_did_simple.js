import { randomAsU8a } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'
export function createSimpleLightDid(
  keyring,
  authenticationSeed = randomAsU8a(32)
) {
  // Ask the keyring to generate a new keypair to use for authentication with the generated seed.
  const authKey = keyring.addFromSeed(authenticationSeed)
  // Create a light DID from the generated authentication key.
  const lightDID = Kilt.Did.createLightDidDocument({
    authentication: [authKey]
  })
  console.log(lightDID.uri)
  return lightDID
}
