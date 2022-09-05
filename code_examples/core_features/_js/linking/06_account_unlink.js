import * as Kilt from '@kiltprotocol/sdk-js'
export async function unlinkDidFromAccount(
  linkOwnerAccount,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // The tx does not need to be authorized by a DID, but the submitter account removes its own link.
  const accountUnlinkTx =
    await Kilt.Did.AccountLinks.getLinkRemovalByAccountTx()
  await Kilt.BlockchainUtils.signAndSubmitTx(
    accountUnlinkTx,
    linkOwnerAccount,
    {
      resolveOn
    }
  )
}
