import * as Kilt from '@kiltprotocol/sdk-js'
export async function unlinkAccountFromDid(
  keystore,
  did,
  submitterAccount,
  linkedAccountAddress,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // The DID owner removes the link between itself and the specified account.
  const accountUnlinkTx =
    await Kilt.Did.AccountLinks.getLinkRemovalByDidExtrinsic(
      linkedAccountAddress
    ).then((tx) =>
      did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )
  await Kilt.BlockchainUtils.signAndSubmitTx(
    accountUnlinkTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
