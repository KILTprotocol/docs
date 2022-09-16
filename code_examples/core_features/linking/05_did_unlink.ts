import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function unlinkAccountFromDid(
  api: ApiPromise,
  did: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccountAddress: KeyringPair['address'],
  signCallback: Kilt.SignCallback
): Promise<void> {
  // The DID owner removes the link between itself and the specified account.
  const accountUnlinkTx =
    api.tx.didLookup.removeAccountAssociation(linkedAccountAddress)
  const authorizedAccountUnlinkTx = await Kilt.Did.authorizeExtrinsic(
    did,
    accountUnlinkTx,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAccountUnlinkTx,
    submitterAccount
  )
}
