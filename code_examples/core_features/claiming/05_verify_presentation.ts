import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyPresentation(
  presentation: Kilt.ICredentialPresentation,
  challenge: string | undefined = undefined
): Promise<void> {
  // Verify the presentation with the provided challenge.
  await Kilt.Credential.verifyPresentation(presentation, { challenge })
}
