const Kilt = require('@kiltprotocol/sdk-js')

async function main(requestForAttestation) {
  await Kilt.connect()

  const isDataValid = requestForAttestation.verifyData()
  const isSignatureValid = await requestForAttestation.verifySignature()
  console.log('isDataValid: ', isDataValid)
  console.log('isSignatureValid: ', isSignatureValid)

  await Kilt.disconnect()

  return isDataValid && isSignatureValid
}
