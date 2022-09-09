import * as Kilt from '@kiltprotocol/sdk-js'

export async function verify(credentials: Kilt.ICredential[]) {
  return Kilt.Credential.verify(credentials[0])
}
