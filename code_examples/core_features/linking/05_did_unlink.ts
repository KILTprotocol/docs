import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function unlinkAccountFromDid(
  keystore: Kilt.Did.DemoKeystore,
  did: Kilt.Did.FullDidDetails,
  submitterAccount: KeyringPair,
  linkedAccountAddress: KeyringPair['address'],
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  // The DID owner removes the link between itself and the specified account.
  const accountUnlinkTx =
    await Kilt.Did.AccountLinks.getLinkRemovalByDidExtrinsic(
      linkedAccountAddress
    ).then((tx) =>
      did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )

  await Kilt.BlockchainUtils.signAndSubmitTx(
    accountUnlinkTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
