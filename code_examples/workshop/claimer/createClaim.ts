import * as Kilt from '@kiltprotocol/sdk-js'

// create a Claim object from lightDid, ctype and given content
export function createClaim(
  lightDid: Kilt.DidDetails,
  ctype: Kilt.ICType,
  content: Kilt.IClaim['contents']
): Kilt.IClaim {
  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    content,
    lightDid.uri
  )

  return claim
}
