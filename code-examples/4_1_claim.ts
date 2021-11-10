import * as Kilt from '@kiltprotocol/sdk-js'
import { KeyringPair } from '@polkadot/keyring/types'

export function main(claimer: KeyringPair, ctype: Kilt.CType): Kilt.Claim {
  const claimContents = {
    name: 'Alice',
    age: 25,
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    claimContents,
    claimer.address
  )

  return claim
}
