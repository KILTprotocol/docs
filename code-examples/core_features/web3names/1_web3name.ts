import { KeyringPair } from '@kiltprotocol/types'

import { DemoKeystore, FullDidDetails, Web3Names } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function main(
  keystore: DemoKeystore,
  didOwner: FullDidDetails,
  kiltAccount: KeyringPair,
  web3Name: Web3Names.Web3Name,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  const web3NameClaimTx = await Web3Names.getClaimTx(web3Name).then((tx) =>
    didOwner.authorizeExtrinsic(tx, keystore, kiltAccount.address)
  )
  await BlockchainUtils.signAndSubmitTx(web3NameClaimTx, kiltAccount, {
    resolveOn
  })
}
