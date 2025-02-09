import * as Kilt from '@kiltprotocol/sdk-js'

export async function createPresentation(
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback,
  challenge?: string
): Promise<Kilt.ICredentialPresentation> {
  // Create the presentation from credential, DID and challenge.
  return Kilt.Credential.createPresentation({
    credential,
    signCallback,
    challenge
  })
}
