import * as Kilt from '@kiltprotocol/sdk-js'
export async function claimWeb3Name(
  keystore,
  did,
  submitterAccount,
  name,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  const web3NameClaimTx = await Kilt.Did.Web3Names.getClaimTx(name).then((tx) =>
    did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
  )
  await Kilt.BlockchainUtils.signAndSubmitTx(
    web3NameClaimTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
