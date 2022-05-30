import type { KeyringPair } from '@kiltprotocol/types'

import { DemoKeystore, FullDidDetails, Web3Names } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function claimWeb3Name(
  keystore: DemoKeystore,
  did: FullDidDetails,
  submitterAccount: KeyringPair,
  name: Web3Names.Web3Name,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  const web3NameClaimTx = await Web3Names.getClaimTx(name).then((tx) =>
    did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
  )
  await BlockchainUtils.signAndSubmitTx(web3NameClaimTx, submitterAccount, {
    resolveOn
  })
}
