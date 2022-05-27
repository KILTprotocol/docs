import type { KeyringPair } from '@kiltprotocol/types'

import { AccountLinks } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function unlinkDidFromAccount(
  linkOwnerAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  // The tx does not need to be authorized by a DID, but the submitter account removes its own link.
  const accountUnlinkTx = await AccountLinks.getLinkRemovalByAccountTx()

  await BlockchainUtils.signAndSubmitTx(accountUnlinkTx, linkOwnerAccount, {
    resolveOn
  })
}
