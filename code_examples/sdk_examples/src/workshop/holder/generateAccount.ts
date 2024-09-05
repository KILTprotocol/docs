import { mnemonicGenerate } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateAccount(mnemonic = mnemonicGenerate()): {
  account: Kilt.KiltKeyringPair
  mnemonic: string
} {
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'sr25519'
  })
  return {
    account: keyring.addFromMnemonic(mnemonic) as Kilt.KiltKeyringPair,
    mnemonic
  }
}
