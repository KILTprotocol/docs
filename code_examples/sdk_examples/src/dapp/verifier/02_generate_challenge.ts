import { randomAsHex } from '@polkadot/util-crypto'

// Store somewhere in the backend.
export function generateRequestChallenge() {
  return randomAsHex(24)
}
