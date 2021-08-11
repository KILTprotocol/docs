import * as Kilt from '@kiltprotocol/sdk-js'

export function main(encodedRequestForAttestation: string) {
  const requestForAttestationStruct = JSON.parse(encodedRequestForAttestation)

  return Kilt.RequestForAttestation.fromRequest(requestForAttestationStruct)
}
