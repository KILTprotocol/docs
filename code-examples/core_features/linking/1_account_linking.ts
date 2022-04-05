import { u8aToHex } from '@polkadot/util'

import { AccountLinks, DemoKeystore, FullDidDetails } from '@kiltprotocol/did'
import { KeyringPair, SubscriptionPromise } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function main(
  did: FullDidDetails,
  keystore: DemoKeystore,
  submitterAccount: KeyringPair,
  linkedAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  // Authorizing the extrinsic with the full DID and including a signature of the linked account
  // results in the provided account being linked to the DID authorizing the operation.
  const accountLinkingTx = await AccountLinks.authorizeLinkWithAccount(
    linkedAccount.address,
    did.identifier,
    async (encodingDetails) => u8aToHex(linkedAccount.sign(encodingDetails))
  ).then((tx) => did.authorizeExtrinsic(tx, keystore, submitterAccount.address))

  await BlockchainUtils.signAndSubmitTx(accountLinkingTx, submitterAccount, {
    reSign: true,
    resolveOn
  })
}
