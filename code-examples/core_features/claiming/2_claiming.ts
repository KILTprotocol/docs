import type { IClaim, IDidDetails } from '@kiltprotocol/sdk-js'

import { Claim, CType } from '@kiltprotocol/core'

export async function main(
  ctype: CType,
  claimerDid: IDidDetails['did']
): Promise<IClaim> {
  const rawClaim = {
    name: 'Alice',
    age: 29
  }

  return Claim.fromCTypeAndClaimContents(ctype, rawClaim, claimerDid)
}
