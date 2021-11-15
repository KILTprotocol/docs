import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  requestForAttestation: Kilt.RequestForAttestation
): Promise<boolean> {
  await Kilt.connect()

  const isDataValid = requestForAttestation.verifyData()
  const isSignatureValid = await requestForAttestation.verifySignature()
  console.log('isDataValid: ', isDataValid)
  console.log('isSignatureValid: ', isSignatureValid)

  await Kilt.disconnect()

  return isDataValid && isSignatureValid
}
