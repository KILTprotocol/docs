import * as Kilt from '@kiltprotocol/sdk-js'

export async function createPresentation(
  credentialObj: Kilt.ICredential,
  lightDid: Kilt.Did.LightDidDetails,
  keystore: Kilt.Did.DemoKeystore,
  challenge?: string,
): Promise<Kilt.ICredential> {
  // creates a Credential from object
  const credential = new Kilt.Credential(credentialObj)

  // creates the presentation from credential, keystore, did and challenge
  const presentation = await credential.createPresentation({
    signer: keystore,
    claimerDid: lightDid,
    challenge: challenge
  })

  return presentation
}
