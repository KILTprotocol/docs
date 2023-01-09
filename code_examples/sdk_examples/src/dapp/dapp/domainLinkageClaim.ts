import * as Kilt from '@kiltprotocol/sdk-js'
export type Parameter = {
  domainLinkageCType: Kilt.ICType
  didUri: Kilt.DidUri
}
export function main({
  domainLinkageCType,
  didUri
}: Parameter) {
  const claimContents: Kilt.IClaimContents = {
    id: didUri,
    origin: 'https://example.com'
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    domainLinkageCType,
    claimContents,
    didUri
  )

  return { domainLinkageCredential: Kilt.Credential.fromClaim(claim) }
}
