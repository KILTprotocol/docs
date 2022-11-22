import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimWeb3NameDeposit(
  depositPayerAccount: KeyringPair,
  web3Name: Kilt.Did.Web3Name
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Release the web3name by the deposit payer.
  const web3NameReleaseTx = api.tx.web3Names.reclaimDeposit(web3Name)
  await Kilt.Blockchain.signAndSubmitTx(web3NameReleaseTx, depositPayerAccount)
}
