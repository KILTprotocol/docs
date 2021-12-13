const Kilt = require('@kiltprotocol/sdk-js')

exports = function requestReconstructed(signedRequestForAttestation) {
  const requestForAttestationStruct = JSON.parse(signedRequestForAttestation)

  return Kilt.RequestForAttestation.fromRequest(requestForAttestationStruct)
}
