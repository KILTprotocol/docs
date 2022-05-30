import { Credential } from '@kiltprotocol/core'

export async function verifyPresentation(
  presentation: Credential,
  challenge: string | undefined = undefined
): Promise<boolean> {
  // Verify the presentation with the provided challenge.
  return presentation.verify({ challenge })
}
