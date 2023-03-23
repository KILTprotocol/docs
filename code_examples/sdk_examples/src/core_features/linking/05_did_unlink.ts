import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function unlinkAccountFromDid(
  did: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccountAddress: KeyringPair['address'],
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // The DID owner removes the link between itself and the specified account.
  const accountUnlinkTx =
    api.tx.didLookup.removeAccountAssociation({AccountId32: linkedAccountAddress})
  const authorizedAccountUnlinkTx = await Kilt.Did.authorizeTx(
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
