import { config as envConfig } from 'dotenv'

import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateAccount(keyring: Keyring): Promise<{
  account: Kilt.KiltKeyringPair
  mnemonic: string
}> {
  // use the mnemonic from .env or make a new one
  const mnemonic = mnemonicGenerate()
  const account = keyring.addFromMnemonic(mnemonic) as Kilt.KiltKeyringPair

  // save the mnemonic and address in .env so we keep the same account
  return { account, mnemonic }
}

export function getAccount(
  keyring: Keyring,
  mnemonic: string
): Kilt.KiltKeyringPair {
  return keyring.addFromMnemonic(mnemonic) as Kilt.KiltKeyringPair
}

// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  cryptoWaitReady().then(() => {
    const keyring = new Keyring({
      ss58Format: Kilt.Utils.ss58Format,
    })

    generateAccount(keyring)
      .catch((e) => {
        console.log('Error while setting up attester account', e)
        process.exit(1)
      })
      .then(({ mnemonic, account }) => {
        console.log('save to mnemonic and address to .env to continue!\n\n')
        console.log(`ATTESTER_MNEMONIC="${mnemonic}"`)
        console.log(`ATTESTER_ADDRESS=${account.address}\n\n`)
      })
  })
}
