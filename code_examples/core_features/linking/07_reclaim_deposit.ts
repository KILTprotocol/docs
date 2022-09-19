import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimLinkDeposit(
  api: ApiPromise,
  depositPayerAccountAccount: KeyringPair,
  linkedAccountAddress: KeyringPair['address']
): Promise<void> {
  // The tx does not need to be authorized by a DID, but the deposit payer's account claims the deposit and removes the link.
  const accountUnlinkTx = api.tx.didLookup.reclaimDeposit(linkedAccountAddress)

  await Kilt.Blockchain.signAndSubmitTx(
    accountUnlinkTx,
    depositPayerAccountAccount
  )
}
