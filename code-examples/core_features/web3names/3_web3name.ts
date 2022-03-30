import { KeyringPair } from '@kiltprotocol/types'

import { Web3Names } from '@kiltprotocol/did'
import { SubscriptionPromise } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function main(
  kiltAccount: KeyringPair,
  web3Name: Web3Names.Web3Name,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  // Release the Web3 name by the deposit payer.
  const web3NameReleaseTx = await Web3Names.getReclaimDepositTx(web3Name)
  await BlockchainUtils.signAndSubmitTx(web3NameReleaseTx, kiltAccount, {
    reSign: true,
    resolveOn
  })
}
