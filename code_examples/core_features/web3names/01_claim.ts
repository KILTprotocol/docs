import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function claimWeb3Name(
  keystore: Kilt.Did.DemoKeystore,
  did: Kilt.Did.FullDidDetails,
  submitterAccount: KeyringPair,
  name: Kilt.Did.Web3Names.Web3Name,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  const web3NameClaimTx = await Kilt.Did.Web3Names.getClaimTx(name).then((tx) =>
    did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
  )
  await Kilt.BlockchainUtils.signAndSubmitTx(
    web3NameClaimTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
