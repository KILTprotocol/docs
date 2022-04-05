import { AccountLinks, DemoKeystore, FullDidDetails } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { KeyringPair } from '@kiltprotocol/types'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function main(
  keystore: DemoKeystore,
  submitterAccount: KeyringPair,
  linkedAccount: KeyringPair['address'],
  did: FullDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  // The DID owner removes the link between itself and the specified account.
  const accountUnlinkTx = await AccountLinks.getLinkRemovalByDidTx(
    linkedAccount
  ).then((tx) => did.authorizeExtrinsic(tx, keystore, submitterAccount.address))

  await BlockchainUtils.signAndSubmitTx(accountUnlinkTx, submitterAccount, {
    reSign: true,
    resolveOn
  })
}
