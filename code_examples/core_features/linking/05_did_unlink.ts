import type { KeyringPair } from '@kiltprotocol/types'

import { AccountLinks, DemoKeystore, FullDidDetails } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function unlinkAccountFromDid(
  keystore: DemoKeystore,
  did: FullDidDetails,
  submitterAccount: KeyringPair,
  linkedAccountAddress: KeyringPair['address'],
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  // The DID owner removes the link between itself and the specified account.
  const accountUnlinkTx = await AccountLinks.getLinkRemovalByDidTx(
    linkedAccountAddress
  ).then((tx) => did.authorizeExtrinsic(tx, keystore, submitterAccount.address))

  await BlockchainUtils.signAndSubmitTx(accountUnlinkTx, submitterAccount, {
    resolveOn
  })
}
