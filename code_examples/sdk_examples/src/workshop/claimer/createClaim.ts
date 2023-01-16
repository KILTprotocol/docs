import * as Kilt from '@kiltprotocol/sdk-js'

// Create a Claim object from light DID, CType and given content.
export function createClaim(
  lightDid: Kilt.DidUri,
  ctype: Kilt.ICType,
  content: Kilt.IClaim['contents']
): Kilt.IClaim {
  const claim = Kilt.Claim.fromCTypeAndClaimContents(ctype, content, lightDid)

  return claim
}
