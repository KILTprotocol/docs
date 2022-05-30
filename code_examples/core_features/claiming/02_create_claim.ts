import type { IClaim, IDidDetails } from '@kiltprotocol/types'

import { CType, Claim } from '@kiltprotocol/core'

export async function createClaim(
  ctype: CType,
  claimerDid: IDidDetails['did']
): Promise<IClaim> {
  const rawClaim = {
    name: 'Alice',
    age: 29
  }

  return Claim.fromCTypeAndClaimContents(ctype, rawClaim, claimerDid)
}
