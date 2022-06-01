import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyCredential(
  credential: Kilt.Credential
): Promise<boolean> {
  return credential.verify()
}
