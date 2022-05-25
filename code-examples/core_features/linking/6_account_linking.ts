import { AccountLinks } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { KeyringPair } from '@kiltprotocol/types'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function main(
  kiltAccount: KeyringPair,
  linkedAccount: KeyringPair['address'],
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  // The tx does not need to be authorized by a DID, but the deposit payer's account claims the deposit and removes the link.
  const accountUnlinkTx = await AccountLinks.getReclaimDepositTx(linkedAccount)

  await BlockchainUtils.signAndSubmitTx(accountUnlinkTx, kiltAccount, {
    resolveOn
  })
}
