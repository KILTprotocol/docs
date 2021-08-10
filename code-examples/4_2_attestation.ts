import * as Kilt from '@kiltprotocol/sdk-js'

export function main(
  requestForAttestation: Kilt.RequestForAttestation
): boolean {
  const isDataValid = requestForAttestation.verifyData()
  const isSignatureValid = requestForAttestation.verifySignature()
  console.log('isDataValid: ', isDataValid)
  console.log('isSignatureValid: ', isSignatureValid)

  return isDataValid && isSignatureValid
}
