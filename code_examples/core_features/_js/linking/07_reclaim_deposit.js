import * as Kilt from '@kiltprotocol/sdk-js'
export async function reclaimLinkDeposit(
  depositPayerAccountAccount,
  linkedAccountAddress,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // The tx does not need to be authorized by a DID, but the deposit payer's account claims the deposit and removes the link.
  const accountUnlinkTx = await Kilt.Did.AccountLinks.getReclaimDepositTx(
    linkedAccountAddress
  )
  await Kilt.Blockchain.signAndSubmitTx(
    accountUnlinkTx,
    depositPayerAccountAccount,
    {
      resolveOn
    }
  )
}
