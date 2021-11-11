import * as Kilt from '@kiltprotocol/sdk-js'
import { mnemonicGenerate } from '@polkadot/util-crypto'

export function main() {
  const mnemonic = mnemonicGenerate()
  console.log('mnemonic:', mnemonic)

  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'ed25519',
  })
  const account = keyring.addFromMnemonic(mnemonic)
  console.log('address:', account.address)
  return [account, mnemonic]
}
