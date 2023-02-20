import * as Kilt from '@kiltprotocol/sdk-js'
// Just a helper to get an extrinsic
import getExtrinsic from '../utils/getExtrinsic'

export async function signAndSendDidExtrinsic(
  submitterAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidUri,
  signCallback: Kilt.SignExtrinsicCallback,
): Promise<void> {
  const extrinsic = getExtrinsic();

  // This results in a DID-signed tx that can be signed and submitted to
  // the KILT blockchain by the account authorized in this operation (the `submitterAccount`).
  const didSignedExtrinsic = await Kilt.Did.authorizeTx(
    fullDid,
    extrinsic,
    signCallback,
    submitterAccount.address
  )

  // wrap the DID extrinsic in an account extrinsic
  await Kilt.Blockchain.signAndSubmitTx(didSignedExtrinsic, submitterAccount)
}
