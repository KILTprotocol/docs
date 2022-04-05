import { DemoKeystore, FullDidDetails, Web3Names } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { KeyringPair } from '@kiltprotocol/types'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function main(
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
