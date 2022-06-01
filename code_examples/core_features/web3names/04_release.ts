import type { KeyringPair } from '@kiltprotocol/types'

import { DemoKeystore, FullDidDetails, Web3Names } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function releaseWeb3Name(
  keystore: DemoKeystore,
  did: FullDidDetails,
  submitterAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  const web3NameReleaseTx = await Web3Names.getReleaseByOwnerTx().then((tx) =>
    did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
  )
  await BlockchainUtils.signAndSubmitTx(web3NameReleaseTx, submitterAccount, {
    resolveOn
  })
}
