import * as Kilt from '@kiltprotocol/sdk-js'

// create a Claim object from lightDid, ctype and given content
export function createClaim(lightDid, ctype, content) {
  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    content,
    lightDid.did
  )

  return claim
}
