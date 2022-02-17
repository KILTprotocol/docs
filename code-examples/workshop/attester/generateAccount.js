import 'dotenv/config'
import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateAccount() {
  await cryptoWaitReady()
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  // setup keyring
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'sr25519',
  })

  // use the mnemonic from .env or make a new one
  const mnemonic = mnemonicGenerate()
  const account = keyring.addFromMnemonic(mnemonic)

  // save the mnemonic and address in .env to we keep the same account
  return { account, mnemonic }
}

export async function getAccount(mnemonic) {
  await cryptoWaitReady()
  await Kilt.init({ address: process.env.WSS_ADDRESS })
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'sr25519',
  })
  return keyring.addFromMnemonic(mnemonic)
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAccount()
    .catch((e) => {
      console.log('Error while setting up attester account', e)
      process.exit(1)
    })
    .then(({ mnemonic, account }) => {
      console.log('save to mnemonic and address to .env to continue!\n\n')
      console.log(`ATTESTER_MNEMONIC="${mnemonic}"`)
      console.log(`ATTESTER_ADDRESS=${account.address}\n\n`)
    })
}
