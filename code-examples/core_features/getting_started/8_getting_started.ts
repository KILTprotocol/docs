import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(request, attestation) {
  const credential = Kilt.Credential.fromRequestAndAttestation(
    request,
    attestation
  )

  console.log('John Doe:', credential)
  
  return credential
}
