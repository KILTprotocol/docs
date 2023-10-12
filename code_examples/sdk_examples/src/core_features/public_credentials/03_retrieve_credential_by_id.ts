import * as Kilt from '@kiltprotocol/sdk-js'

export async function fetchCredentialById(
  credentialId: Kilt.IPublicCredential['id']
): Promise<Kilt.IPublicCredential> {
  return Kilt.PublicCredential.fetchCredentialFromChain(credentialId)
}
