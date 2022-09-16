import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkDidToAccount(
  api: ApiPromise,
  did: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback
): Promise<void> {
  // Authorizing the extrinsic with the full DID and submitting it with the provided account
  // results in the submitter's account being linked to the DID authorizing the operation.
  const accountLinkingTx = await api.tx.didLookup.associateSender()
  const authorizedAccountLinkingTx = await Kilt.Did.authorizeExtrinsic(
    did,
    accountLinkingTx,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAccountLinkingTx,
    submitterAccount
  )
}
