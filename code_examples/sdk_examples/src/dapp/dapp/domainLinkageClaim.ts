import * as Kilt from '@kiltprotocol/sdk-js'

export function main(domainLinkageCtype: Kilt.ICType, didUri: Kilt.DidUri) {

  const claimContents: Kilt.IClaimContents = {
    id: didUri,
    origin: 'https://example-dApp.com'
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    domainLinkageCtype,
    claimContents,
    didUri
  )

  return Kilt.Credential.fromClaim(claim)
}
