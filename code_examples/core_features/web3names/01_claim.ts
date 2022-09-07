import * as Kilt from '@kiltprotocol/sdk-js'

export async function claimWeb3Name(
  did: Kilt.DidDetails,
  submitterAccount: Kilt.KiltKeyringPair,
  name: Kilt.Did.Web3Names.Web3Name,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  const web3NameClaimTx = await Kilt.Did.Web3Names.getClaimTx(name).then((tx) =>
    Kilt.Did.authorizeExtrinsic(did, tx, signCallback, submitterAccount.address)
  )
  await Kilt.Blockchain.signAndSubmitTx(web3NameClaimTx, submitterAccount, {
    resolveOn
  })
}
