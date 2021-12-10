const Kilt = require('@kiltprotocol/sdk-js')

function main(encodedRequestForAttestation) {
  const requestForAttestationStruct = JSON.parse(encodedRequestForAttestation)

  return Kilt.RequestForAttestation.fromRequest(requestForAttestationStruct)
}
