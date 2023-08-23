import * as Kilt from '@kiltprotocol/sdk-js'

// Create a Claim object from DID, CType and given content.
export function createClaim(
  did: Kilt.DidUri,
  ctype: Kilt.ICType,
  content: Kilt.IClaim['contents']
): Kilt.IClaim {
  const claim = Kilt.Claim.fromCTypeAndClaimContents(ctype, content, did)

  return claim
}
