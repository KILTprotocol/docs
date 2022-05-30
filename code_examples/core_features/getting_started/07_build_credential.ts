import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  endpointRequestData: Kilt.IRequestForAttestation
): Promise<Kilt.Credential | null> {
  const attestation = await Kilt.Attestation.query(endpointRequestData.rootHash)
  if (!attestation) {
    console.log(`The credential doesn't have an attestation`)
    return null
  }

  const credential = Kilt.Credential.fromRequestAndAttestation(
    endpointRequestData,
    attestation
  )
  console.log('John Doe credential:')
  console.log(JSON.stringify(credential, undefined, 2))

  return credential
}
