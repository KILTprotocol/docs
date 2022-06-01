import * as Kilt from '@kiltprotocol/sdk-js'

export async function createClaim(
  ctype: Kilt.CType,
  claimerDid: Kilt.IDidDetails['did']
): Promise<Kilt.IClaim> {
  const rawClaim = {
    name: 'Alice',
    age: 29
  }

  return Kilt.Claim.fromCTypeAndClaimContents(ctype, rawClaim, claimerDid)
}
