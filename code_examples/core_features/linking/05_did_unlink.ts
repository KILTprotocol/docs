import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function unlinkAccountFromDid(
  did: Kilt.DidDetails,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccountAddress: KeyringPair['address'],
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  // The DID owner removes the link between itself and the specified account.
  const accountUnlinkTx =
    await Kilt.Did.AccountLinks.getLinkRemovalByDidExtrinsic(
      linkedAccountAddress
    ).then((tx) =>
      Kilt.Did.authorizeExtrinsic(
        did,
        tx,
        signCallback,
        submitterAccount.address
      )
    )

  await Kilt.Blockchain.signAndSubmitTx(accountUnlinkTx, submitterAccount, {
    resolveOn
  })
}
