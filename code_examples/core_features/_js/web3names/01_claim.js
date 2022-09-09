import * as Kilt from '@kiltprotocol/sdk-js'
export async function claimWeb3Name(
  did,
  submitterAccount,
  name,
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  const web3NameClaimTx = await Kilt.Did.Web3Names.getClaimTx(name)
  const authorisedWeb3NameClaimTx = await Kilt.Did.authorizeExtrinsic(
    did,
    web3NameClaimTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedWeb3NameClaimTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
