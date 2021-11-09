import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  attestedClaim: Kilt.AttestedClaim,
  nonce: string,
  signedNonce: string
) {
  // verify the signed nonce (<nonce> is the uuid you've generated as the verifier)
  const isSenderOwner = Kilt.Utils.Crypto.verify(
    nonce,
    signedNonce,
    attestedClaim.request.claim.owner
  )
  console.log('isSenderOwner: ', isSenderOwner)

  // proceed with verifying the attestedClaim itself
  // --> see simple "Verification" step in this tutorial
  return isSenderOwner
}
