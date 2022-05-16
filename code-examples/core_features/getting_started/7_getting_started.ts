import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(request) {
  const attestation = await Kilt.Attestation.query(request.rootHash)

  const credential = Kilt.Credential.fromRequestAndAttestation(
    request,
    attestation
  )

  console.log('John Doe:', credential)

  return credential
}
