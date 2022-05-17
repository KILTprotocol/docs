import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(request: Kilt.IRequestForAttestation) {
  const attestation = await Kilt.Attestation.query(request.rootHash)

  if (!attestation) return console.log('The request didnt have an attestation')

  const credential = Kilt.Credential.fromRequestAndAttestation(
    request,
    attestation
  )

  console.log('John Doe:', credential)

  return credential
}
