import * as Kilt from '@kiltprotocol/sdk-js'

export async function requestAttestation(
  keystore: Kilt.KeystoreSigner,
  claimer: Kilt.Did.DidDetails,
  ctype: Kilt.CType
): Promise<Kilt.RequestForAttestation> {
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
  // The attestation request must be signed by the claimer to provide non-repudiation.
  const requestForAttestation = Kilt.RequestForAttestation.fromClaim(claim)
  return requestForAttestation.signWithDidKey(
    keystore,
    claimer,
    // The authentication key of the claimer is used to generate the signature.
    claimer.authenticationKey.id
  )
}
