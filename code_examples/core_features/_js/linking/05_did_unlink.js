import * as Kilt from '@kiltprotocol/sdk-js'
export async function unlinkAccountFromDid(
  did,
  submitterAccount,
  linkedAccountAddress,
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // The DID owner removes the link between itself and the specified account.
  const accountUnlinkTx =
    await Kilt.Did.AccountLinks.getLinkRemovalByDidExtrinsic(
      linkedAccountAddress
    )
  const authorisedAccountUnlinkTx = await Kilt.Did.authorizeExtrinsic(
    did,
    accountUnlinkTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedAccountUnlinkTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
