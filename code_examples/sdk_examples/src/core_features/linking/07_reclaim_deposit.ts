import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimLinkDeposit(
  submitterAddress: KeyringPair,
  linkedAccountAddress: KeyringPair['address']
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // The tx does not need to be authorized by a DID, but the deposit payer's account claims the deposit and removes the link.
  const accountUnlinkTx = api.tx.didLookup.reclaimDeposit({AccountId32: linkedAccountAddress})

  await Kilt.Blockchain.signAndSubmitTx(accountUnlinkTx, submitterAddress)
}
