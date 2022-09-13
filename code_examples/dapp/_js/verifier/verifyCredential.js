import * as Kilt from '@kiltprotocol/sdk-js'
export async function verify(credentials) {
  return Kilt.Credential.verifyPresentation(credentials[0])
}
