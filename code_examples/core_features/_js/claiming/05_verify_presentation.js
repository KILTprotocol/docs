import * as Kilt from '@kiltprotocol/sdk-js'
export async function verifyPresentation(presentation, challenge = undefined) {
  // Verify the presentation with the provided challenge.
  await Kilt.Credential.verifyPresentation(presentation, { challenge })
}
