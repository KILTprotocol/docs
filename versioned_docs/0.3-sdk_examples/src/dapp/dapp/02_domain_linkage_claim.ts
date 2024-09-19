import * as Kilt from '@kiltprotocol/sdk-js'

export function main({
  domainLinkageCType,
  didUri
}: {
  domainLinkageCType: Kilt.ICType
  didUri: Kilt.DidUri
}) {
  const claimContents: Kilt.IClaimContents = {
    id: didUri,
    origin: 'https://example.com'
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    domainLinkageCType,
    claimContents,
    didUri
  )
  const domainLinkageCredential = Kilt.Credential.fromClaim(claim)

  return { domainLinkageCredential }
}
