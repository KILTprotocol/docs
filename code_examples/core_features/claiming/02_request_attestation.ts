import * as Kilt from '@kiltprotocol/sdk-js'

export async function requestAttestation(
  claimer: Kilt.DidDocument,
  signCallback: Kilt.SignCallback,
  ctype: Kilt.ICType
): Promise<Kilt.ICredential> {
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
  // The credential must be signed by the claimer to provide non-repudiation.
  const credential = Kilt.Credential.fromClaim(claim)
  await Kilt.Credential.sign(
    credential,
    signCallback,
    claimer,
    // The authentication key of the claimer is used to generate the signature.
    claimer.authentication[0].id
  )

  return credential
}
