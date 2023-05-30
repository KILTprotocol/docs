import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyPresentation(
  presentation: Kilt.ICredentialPresentation,
  {
    challenge,
    trustedAttesterUris = []
  }: {
    challenge?: string
    trustedAttesterUris?: Kilt.DidUri[]
  } = {}
): Promise<void> {
  // Verify the presentation with the provided challenge.
  const { revoked, attester } = await Kilt.Credential.verifyPresentation(
    presentation,
    { challenge }
  )

  if (revoked) {
    throw new Error("Credential has been revoked and hence it's not valid.")
  }
  if (!trustedAttesterUris.includes(attester)) {
    throw `Credential was issued by ${attester} which is not in the provided list of trusted attesters: ${trustedAttesterUris}.`
  }
}
