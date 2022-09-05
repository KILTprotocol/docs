import * as Kilt from '@kiltprotocol/sdk-js'
export async function linkDidToAccount(
  keystore,
  did,
  submitterAccount,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Authorizing the extrinsic with the full DID and submitting it with the provided account
  // results in the submitter's account being linked to the DID authorizing the operation.
  const accountLinkingTx =
    await Kilt.Did.AccountLinks.getAssociateSenderExtrinsic().then((tx) =>
      did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )
  await Kilt.BlockchainUtils.signAndSubmitTx(
    accountLinkingTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
