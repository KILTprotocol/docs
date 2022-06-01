import type { KeyringPair } from '@kiltprotocol/types'

import { AccountLinks, DemoKeystore, FullDidDetails } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function linkDidToAccount(
  keystore: DemoKeystore,
  did: FullDidDetails,
  submitterAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  // Authorizing the extrinsic with the full DID and submitting it with the provided account
  // results in the submitter's account being linked to the DID authorizing the operation.
  const accountLinkingTx = await AccountLinks.getAssociateSenderTx().then(
    (tx) => did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
  )

  await BlockchainUtils.signAndSubmitTx(accountLinkingTx, submitterAccount, {
    resolveOn
  })
}
