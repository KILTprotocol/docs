import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(endpointRequestData: Kilt.IRequestForAttestation) {
  const attestation = await Kilt.Attestation.query(endpointRequestData.rootHash)
  if (!attestation) {
    return console.log(`The credential doesn't have an attestation`)
  }
    

  const credential = Kilt.Credential.fromRequestAndAttestation(
    endpointRequestData,
    attestation
  )
  console.log('John Doe credential:')
  console.log(JSON.stringify(credential, undefined, 2))
  
  return credential
}
