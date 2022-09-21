import * as Kilt from '@kiltprotocol/sdk-js'

export async function createPresentation(
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback,
  challenge?: string
): Promise<Kilt.ICredentialPresentation> {
  // creates the presentation from credential, did and challenge
  return Kilt.Credential.createPresentation({
    credential,
    signCallback,
    challenge
  })
}
