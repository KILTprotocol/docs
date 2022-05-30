import { Credential } from '@kiltprotocol/core'

export async function verifyCredential(
  credential: Credential
): Promise<boolean> {
  return credential.verify()
}
