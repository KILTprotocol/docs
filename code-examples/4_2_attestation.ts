import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  address: string,
  requestForAttestation: Kilt.RequestForAttestation
): Promise<boolean> {
  await Kilt.init({ address })
  const isDataValid = requestForAttestation.verifyData()
  const isSignatureValid = requestForAttestation.verifySignature()
  console.log('isDataValid: ', isDataValid)
  console.log('isSignatureValid: ', isSignatureValid)

  return isDataValid && isSignatureValid
}
