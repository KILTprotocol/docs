import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

const { WSS_ADDRESS: address } = process.env

export async function generateAccount() {
  await cryptoWaitReady()
  await Kilt.init({ address })

  // setup keyring
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'sr25519',
  })

  // use the mnemonic from .env or make a new one
  const phrase = mnemonicGenerate()
  const account = keyring.addFromMnemonic(phrase)

  // save the mnemonic and address in .env to we keep the same account
  console.log('save to mnemonic and address to .env to continue!\n\n')
  console.log(`ATTESTER_MNEMONIC="${phrase}"`)
  console.log(`ATTESTER_ADDRESS=${account.address}\n\n`)
  process.env.ATTESTER_MNEMONIC = phrase
  process.env.ATTESTER_ADDRESS = account.address

  return account
}

// don't execute if we are imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAccount().catch((e) => {
    console.log('Error while setting up attester account', e)
  })
}
