import { mnemonicGenerate } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'

export function getAccount(mnemonic) {
  // setup keyring
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'sr25519',
  })

  // use the mnemonic from .env or make a new one
  const phrase = mnemonic || mnemonicGenerate()
  const account = keyring.addFromMnemonic(phrase)

  if (!mnemonic) {
    // save the mnemonic and address in .env to we keep the same account
    console.log('save to mnemonic and address to .env to continue!\n\n')
    console.log(`CLAIMER_MNEMONIC="${phrase}"`)
    console.log(`CLAIMER_ADDRESS=${account.address}\n\n`)
    process.env.CLAIMER_MNEMONIC = phrase
    process.env.CLAIMER_ADDRESS = account.address
  }

  return account
}
