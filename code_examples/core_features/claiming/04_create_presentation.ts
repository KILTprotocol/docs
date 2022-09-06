import * as Kilt from '@kiltprotocol/sdk-js'

export async function createPresentation(
  claimer: Kilt.DidDetails,
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback,
  selectedAttributes: string[] | undefined = undefined,
  challenge: string | undefined = undefined
): Promise<Kilt.ICredential> {
  // Create a presentation with only the specified fields revealed, if specified.
  return Kilt.Credential.createPresentation({
    claimerDid: claimer,
    credential,
    signCallback,
    selectedAttributes,
    challenge,
  })
}
