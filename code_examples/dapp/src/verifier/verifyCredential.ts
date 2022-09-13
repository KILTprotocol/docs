import * as Kilt from '@kiltprotocol/sdk-js'

export async function verify(credentials: Kilt.ICredentialPresentation[]) {
  return Kilt.Credential.verifyPresentation(credentials[0])
}
