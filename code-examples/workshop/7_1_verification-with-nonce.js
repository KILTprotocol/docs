const Kilt = require('@kiltprotocol/sdk-js')

exports = async function createPresentation(
  claimerLightDid,
  credential,
  nonce,
  keystore
) {
  // sign the nonce as the claimer with the claimer's DID
  const presentation = await credential.createPresentation({
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
  return presentation
}
