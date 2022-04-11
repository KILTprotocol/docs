import { AccountLinks } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { KeyringPair } from '@kiltprotocol/types'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function main(
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  // The tx does not need to be authorized by a DID, but the submitter account removes its own link.
  const accountUnlinkTx = await AccountLinks.getLinkRemovalByAccountTx()

  await BlockchainUtils.signAndSubmitTx(accountUnlinkTx, kiltAccount, {
    reSign: true,
    resolveOn
  })
}
