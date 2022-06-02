import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyPresentation(
  presentation: Kilt.Credential,
  challenge: string | undefined = undefined
): Promise<boolean> {
  // Verify the presentation with the provided challenge.
  return presentation.verify({ challenge })
}
