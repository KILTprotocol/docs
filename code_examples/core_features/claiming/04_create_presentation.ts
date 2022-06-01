import * as Kilt from '@kiltprotocol/sdk-js'

export async function createPresentation(
  keystore: Kilt.KeystoreSigner,
  claimerDid: Kilt.Did.DidDetails,
  credential: Kilt.Credential,
  selectedAttributed: string[],
  challenge: string | undefined = undefined
): Promise<Kilt.Credential> {
  // Create a presentation with only the specified fields revealed.
  return credential.createPresentation({
    claimerDid,
    signer: keystore,
    selectedAttributes: selectedAttributed,
    challenge
  })
}
