import { Claim, CType } from '@kiltprotocol/core'
import { DidDetails } from '@kiltprotocol/did'

export async function main(ctype: CType, claimer: DidDetails) {
  const rawClaim = {
    name: 'Alice',
    age: 29,
  }

  const claim = Claim.fromCTypeAndClaimContents(ctype, rawClaim, claimer.did)
  return claim
}
