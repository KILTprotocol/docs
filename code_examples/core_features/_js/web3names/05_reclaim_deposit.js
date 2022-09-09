import * as Kilt from '@kiltprotocol/sdk-js'
export async function reclaimWeb3NameDeposit(
  depositPayerAccount,
  web3Name,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // Release the web3name by the deposit payer.
  const web3NameReleaseTx = await Kilt.Did.Web3Names.getReclaimDepositTx(
    web3Name
  )
  await Kilt.Blockchain.signAndSubmitTx(
    web3NameReleaseTx,
    depositPayerAccount,
    {
      resolveOn
    }
  )
}
