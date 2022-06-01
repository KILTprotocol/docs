import * as Kilt from '@kiltprotocol/sdk-js'

export async function createPresentation(
  keystore: Kilt.KeystoreSigner,
  claimerDid: Kilt.Did.DidDetails,
  credential: Kilt.Credential,
  selectedAttributes: string[] | undefined = undefined,
  challenge: string | undefined = undefined
): Promise<Kilt.Credential> {
  // Create a presentation with only the specified fields revealed, if specified.
  return credential.createPresentation({
    claimerDid,
    signer: keystore,
    selectedAttributes,
    challenge
  })
}
