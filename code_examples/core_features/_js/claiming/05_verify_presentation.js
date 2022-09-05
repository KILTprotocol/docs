export async function verifyPresentation(presentation, challenge = undefined) {
  // Verify the presentation with the provided challenge.
  return presentation.verify({ challenge })
}
