import * as Kilt from '@kiltprotocol/sdk-js'

import { mnemonicGenerate } from '@polkadot/util-crypto'

export function main() {
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'ed25519',
  })
  const claimerMnemonic = mnemonicGenerate()
  console.log('claimer mnemonic:', claimerMnemonic)
  const claimer = keyring.addFromMnemonic(claimerMnemonic)
  console.log('claimer address:', claimer.address)

  const attesterMnemonic = mnemonicGenerate()
  console.log('attester mnemonic:', attesterMnemonic)
  const attester = keyring.addFromMnemonic(attesterMnemonic)
  console.log('attester address:', attester.address)
  return { claimer, attester, attesterMnemonic }
}
