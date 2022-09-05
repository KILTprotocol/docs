import * as Kilt from '@kiltprotocol/sdk-js'
export async function releaseWeb3Name(
  keystore,
  did,
  submitterAccount,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  const web3NameReleaseTx = await Kilt.Did.Web3Names.getReleaseByOwnerTx().then(
    (tx) => did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
  )
  await Kilt.BlockchainUtils.signAndSubmitTx(
    web3NameReleaseTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
