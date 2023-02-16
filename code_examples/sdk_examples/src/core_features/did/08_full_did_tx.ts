import * as Kilt from '@kiltprotocol/sdk-js'

export async function signAndSendDidExtrinsic(
  submitterAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidUri,
  signCallback: Kilt.SignExtrinsicCallback,
  extrinsic: Kilt.SubmittableExtrinsic
): Promise<void> {
  // This results in a DID-signed tx that can be signed and submitted to
  // the KILT blockchain by the account authorized in this operation (the `submitterAccount`).
  const didSignedExtrinsic = await Kilt.Did.authorizeTx(
    fullDid,
    extrinsic,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(didSignedExtrinsic, submitterAccount)
}
