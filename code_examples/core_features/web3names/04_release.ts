import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function releaseWeb3Name(
  keystore: Kilt.Did.DemoKeystore,
  did: Kilt.Did.FullDidDetails,
  submitterAccount: KeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  const web3NameReleaseTx = await Kilt.Did.Web3Names.getReleaseByOwnerTx().then(
    (tx) => did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
  )
  await Kilt.BlockchainUtils.signAndSubmitTx(
    web3NameReleaseTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
