import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  requestForAttestation: Kilt.RequestForAttestation
): Promise<boolean> {
  const isDataValid = requestForAttestation.verifyData()
  const isSignatureValid = await requestForAttestation.verifySignature()
  console.log('isDataValid: ', isDataValid)
  console.log('isSignatureValid: ', isSignatureValid)

  return isDataValid && isSignatureValid
}
