import * as Kilt from '@kiltprotocol/sdk-js'
export function requestAttestation(claimer, ctype) {
  // The claimer generates the claim they would like to get attested.
  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    {
      name: 'Alice',
      age: 29,
      id: '123456789987654321'
    },
    claimer.uri
  )
  const credential = Kilt.Credential.fromClaim(claim)
  return credential
}
