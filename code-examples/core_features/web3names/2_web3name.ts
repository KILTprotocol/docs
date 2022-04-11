import { ApiPromise } from '@polkadot/api'
import { KeyringPair } from '@kiltprotocol/types'

import { DemoKeystore, FullDidDetails, Web3Names } from '@kiltprotocol/did'
import { SubscriptionPromise } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function main(
  api: ApiPromise,
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  didOwner: FullDidDetails,
  web3Name: Web3Names.Web3Name,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  const web3NameReleaseTx = await Web3Names.getReleaseByOwnerTx().then((tx) =>
    didOwner.authorizeExtrinsic(tx, keystore, kiltAccount.address)
  )
  await BlockchainUtils.signAndSubmitTx(web3NameReleaseTx, kiltAccount, {
    reSign: true,
    resolveOn
  })
}
