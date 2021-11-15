import * as Kilt from '@kiltprotocol/sdk-js'

export function main(
  claimerLightDid: Kilt.Did.LightDidDetails,
  ctype: Kilt.CType
): Kilt.Claim {
  const claimContents = {
    name: 'Alice',
    age: 25,
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    claimContents,
    claimerLightDid.did
  )

  return claim
}
