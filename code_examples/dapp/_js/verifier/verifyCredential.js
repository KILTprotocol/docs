import * as Kilt from '@kiltprotocol/sdk-js'
export async function verify(credentials) {
  return Kilt.Credential.verify(credentials[0])
}
