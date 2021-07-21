import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  address: string,
  encodedRequestForAttestation: string
) {
  await Kilt.init({ address })
  const requestForAttestationStruct = JSON.parse(encodedRequestForAttestation)

  return Kilt.RequestForAttestation.fromRequest(requestForAttestationStruct)
}
