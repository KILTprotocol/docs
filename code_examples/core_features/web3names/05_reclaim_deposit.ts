import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimWeb3NameDeposit(
  depositPayerAccount: KeyringPair,
  web3Name: Kilt.Did.Web3Names.Web3Name,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  // Release the web3name by the deposit payer.
  const web3NameReleaseTx = await Kilt.Did.Web3Names.getReclaimDepositTx(
    web3Name
  )
  await Kilt.BlockchainUtils.signAndSubmitTx(
    web3NameReleaseTx,
    depositPayerAccount,
    {
      resolveOn
    }
  )
}
