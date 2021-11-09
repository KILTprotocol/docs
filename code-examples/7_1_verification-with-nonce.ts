import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  nonce: string,
  attestedClaim: Kilt.AttestedClaim,
  claimer: Kilt.Identity
): Promise<string> {
  // sign the nonce as the claimer with the claimer's private key
  const signedNonce = claimer.signStr(nonce)

  // this is the message to send to the verifier
  const dataToVerify = {
    signedNonce,
    attestedClaim,
  }

  console.log('Attested claim:\n', attestedClaim.request.claim)

  console.log(
    'dataToVerifyJSONString:\n',
    JSON.stringify(dataToVerify, undefined, 2)
  )
  return signedNonce
}
