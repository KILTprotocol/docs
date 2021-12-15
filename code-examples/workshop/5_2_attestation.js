const Kilt = require('@kiltprotocol/sdk-js')

async function verifyRequest(requestForAttestation) {
  await Kilt.connect('wss://peregrine.kilt.io')

  const isDataValid = requestForAttestation.verifyData()
  const isSignatureValid = await requestForAttestation.verifySignature()
  console.log('isDataValid: ', isDataValid)
  console.log('isSignatureValid: ', isSignatureValid)

  await Kilt.disconnect()

  return isDataValid && isSignatureValid
}

module.exports.verifyRequest = verifyRequest
