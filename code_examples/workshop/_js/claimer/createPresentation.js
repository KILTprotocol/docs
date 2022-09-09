import * as Kilt from '@kiltprotocol/sdk-js'
export async function createPresentation(
  credential,
  lightDid,
  signCallback,
  challenge
) {
  // creates the presentation from credential, did and challenge
  return Kilt.Credential.createPresentation({
    credential,
    claimerDid: lightDid,
    signCallback,
    challenge
  })
}
