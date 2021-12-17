const Kilt = require('@kiltprotocol/sdk-js')

function requestForAttestationReconstructed(signedRequestForAttestation) {
  return Kilt.RequestForAttestation.fromRequest(signedRequestForAttestation)
}

module.exports.requestForAttestationReconstructed =
  requestForAttestationReconstructed
