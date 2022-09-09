import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyPresentation(
  presentation: Kilt.ICredential,
  challenge: string | undefined = undefined
): Promise<void> {
  // Verify the presentation with the provided challenge.
  await Kilt.Credential.verify(presentation, { challenge })
}
