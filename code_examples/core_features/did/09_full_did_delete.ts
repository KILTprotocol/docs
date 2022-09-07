import * as Kilt from '@kiltprotocol/sdk-js'

export async function deleteFullDid(
  submitterAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidDetails,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  // Create a DID deletion operation. We specify the number of endpoints currently stored under the DID because
  // of the upper computation limit required by the blockchain runtime.
  const endpointsCountForDid = await Kilt.Did.Chain.queryEndpointsCounts(
    fullDid.uri
  )
  const didDeletionExtrinsic = await Kilt.Did.Chain.getDeleteDidExtrinsic(
    endpointsCountForDid
  )

  // Sign the DID deletion operation using the DID authentication key.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didSignedDeletionExtrinsic = await Kilt.Did.authorizeExtrinsic(
    fullDid,
    didDeletionExtrinsic,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(
    didSignedDeletionExtrinsic,
    submitterAccount,
    {
      resolveOn
    }
  )
}
