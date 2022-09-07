import * as Kilt from '@kiltprotocol/sdk-js'

export async function releaseWeb3Name(
  did: Kilt.DidDetails,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  const web3NameReleaseTx = await Kilt.Did.Web3Names.getReleaseByOwnerTx().then(
    (tx) =>
      Kilt.Did.authorizeExtrinsic(
        did,
        tx,
        signCallback,
        submitterAccount.address
      )
  )
  await Kilt.Blockchain.signAndSubmitTx(web3NameReleaseTx, submitterAccount, {
    resolveOn
  })
}
