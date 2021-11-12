import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  claimerLightDid: Kilt.Did.LightDidDetails,
  credential: Kilt.Credential,
  nonce: string,
  keystore: Kilt.Did.DemoKeystore
): Promise<string> {
  // sign the nonce as the claimer with the claimer's DID
  const presentation = credential.createPresentation({
    signer: keystore,
    claimerDid: claimerLightDid,
    challenge: nonce,
  })

  // this is the message to send to the verifier
  const dataToVerify = {
    presentation,
    nonce,
  }

  console.log('KILT Credential:\n', presentation.request.claim)

  console.log(
    'dataToVerifyJSONString:\n',
    JSON.stringify(dataToVerify, undefined, 2)
  )
  return { ...presentation, keystore }
}
