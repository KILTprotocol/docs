export async function createPresentation(
  keystore,
  claimerDid,
  credential,
  selectedAttributes = undefined,
  challenge = undefined
) {
  // Create a presentation with only the specified fields revealed, if specified.
  return credential.createPresentation({
    claimerDid,
    signer: keystore,
    selectedAttributes,
    challenge
  })
}
