import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  presentation: Kilt.Credential,
  nonce: string,
  keystore: Kilt.KeyringPair
) {
  await Kilt.connect()
  // verify the presentation from the nonce (<nonce> is the uuid you've generated as the verifier)
  const isSenderOwner = await Kilt.Credential.verify(presentation, {
    signer: keystore,
    challenge: nonce,
  })
  console.log('isSenderOwner: ', isSenderOwner)

  // proceed with verifying the credential itself
  // --> see simple "Verification" step in this tutorial

  // disconnect from the chain
  await Kilt.disconnect()
  return isSenderOwner
}
