import * as Kilt from '@kiltprotocol/sdk-js'
export async function linkDidToAccount(
  did,
  submitterAccount,
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // Authorizing the extrinsic with the full DID and submitting it with the provided account
  // results in the submitter's account being linked to the DID authorizing the operation.
  const accountLinkingTx =
    await Kilt.Did.AccountLinks.getAssociateSenderExtrinsic()
  const authorisedAccountLinkingTx = await Kilt.Did.authorizeExtrinsic(
    did,
    accountLinkingTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedAccountLinkingTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
