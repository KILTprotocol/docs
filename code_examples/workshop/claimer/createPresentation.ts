import * as Kilt from '@kiltprotocol/sdk-js'

export async function createPresentation(
  credential: Kilt.ICredential,
  lightDid: Kilt.DidDocument,
  signCallback: Kilt.SignCallback,
  challenge?: string
): Promise<Kilt.ICredentialPresentation> {
  // creates the presentation from credential, did and challenge
  return Kilt.Credential.createPresentation({
    credential,
    claimerDid: lightDid,
    signCallback,
    challenge
  })
}
