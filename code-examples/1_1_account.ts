import * as Kilt from '@kiltprotocol/sdk-js'
import { mnemonicGenerate } from '@polkadot/util-crypto'

export function main(): Kilt.Identity {
  const mnemonic = mnemonicGenerate()
  console.log('mnemonic:', mnemonic)

  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'ed25519',
  })
  const identity = keyring.addFromMnemonic(mnemonic)
  console.log('address:', identity.address)
  return identity
}
