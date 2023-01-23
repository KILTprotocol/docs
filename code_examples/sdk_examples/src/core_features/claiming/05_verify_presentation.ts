import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyPresentation(
  presentation: Kilt.ICredentialPresentation,
  {
    challenge,
    trustedAttesterUris = [],
  }: {
    challenge?: string,
    trustedAttesterUris?: Kilt.DidUri[]
  } = {}
): Promise<void> {
  // Verify the presentation with the provided challenge.
  await Kilt.Credential.verifyPresentation(presentation, { challenge })

  // Verify the credential attestation by checking on the blockchain.
  const api = Kilt.ConfigService.get('api')
  const attestationChain = await api.query.attestation.attestations(
    presentation.rootHash
  )
  const attestation = Kilt.Attestation.fromChain(
    attestationChain,
    presentation.rootHash
  )
  if (attestation.revoked) {
    throw 'Credential has been revoked and hence it\'s not valid.'
  }
  if (!trustedAttesterUris.includes(attestation.owner)) {
    throw `Credential was issued by ${attestation.owner} which is not in the provided list of trusted attesters: ${trustedAttesterUris}.`
  }
}
