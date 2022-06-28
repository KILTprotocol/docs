import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkDidToAccount(
  keystore: Kilt.Did.DemoKeystore,
  did: Kilt.Did.FullDidDetails,
  submitterAccount: KeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  // Authorizing the extrinsic with the full DID and submitting it with the provided account
  // results in the submitter's account being linked to the DID authorizing the operation.
  const accountLinkingTx =
    await Kilt.Did.AccountLinks.getAssociateSenderExtrinsic().then((tx) =>
      did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )

  await Kilt.BlockchainUtils.signAndSubmitTx(
    accountLinkingTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
