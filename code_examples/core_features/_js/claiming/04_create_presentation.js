import * as Kilt from '@kiltprotocol/sdk-js'
export async function createPresentation(
  claimer,
  credential,
  signCallback,
  selectedAttributes = undefined,
  challenge = undefined
) {
  // Create a presentation with only the specified fields revealed, if specified.
  return Kilt.Credential.createPresentation({
    claimerDid: claimer,
    credential,
    signCallback,
    selectedAttributes,
    challenge
  })
}
