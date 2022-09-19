import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function unlinkDidFromAccount(
  api: ApiPromise,
  linkOwnerAccount: KeyringPair
): Promise<void> {
  // The tx does not need to be authorized by a DID, but the submitter account removes its own link.
  const accountUnlinkTx = api.tx.didLookup.removeSenderAssociation()

  await Kilt.Blockchain.signAndSubmitTx(accountUnlinkTx, linkOwnerAccount)
}
