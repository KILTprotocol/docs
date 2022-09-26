import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimWeb3NameDeposit(
  api: ApiPromise,
  depositPayerAccount: KeyringPair,
  web3Name: Kilt.Did.Web3Name
): Promise<void> {
  // Release the web3name by the deposit payer.
  const web3NameReleaseTx = api.tx.web3Names.reclaimDeposit(web3Name)
  await Kilt.Blockchain.signAndSubmitTx(web3NameReleaseTx, depositPayerAccount)
}
