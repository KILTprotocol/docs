import * as Kilt from '@kiltprotocol/sdk-js'

export async function createPresentation(
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback,
  selectedAttributes: string[] | undefined = undefined,
  challenge: string | undefined = undefined
): Promise<Kilt.ICredentialPresentation> {
  // Create a presentation with only the specified fields revealed, if specified.
  return Kilt.Credential.createPresentation({
    credential,
    signCallback,
    selectedAttributes,
    challenge
  })
}
