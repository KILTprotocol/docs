import * as Kilt from '@kiltprotocol/sdk-js'
export async function releaseWeb3Name(
  did,
  submitterAccount,
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  const web3NameReleaseTx = await Kilt.Did.Web3Names.getReleaseByOwnerTx()
  const authorisedWeb3NameReleaseTx = await Kilt.Did.authorizeExtrinsic(
    did,
    web3NameReleaseTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedWeb3NameReleaseTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
