const Kilt = require('@kiltprotocol/sdk-js')

exports = async function verifyRequest(requestForAttestation) {
  await Kilt.connect()

  const isDataValid = requestForAttestation.verifyData()
  const isSignatureValid = await requestForAttestation.verifySignature()
  console.log('isDataValid: ', isDataValid)
  console.log('isSignatureValid: ', isSignatureValid)

  await Kilt.disconnect()

  return isDataValid && isSignatureValid
}
