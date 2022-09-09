import { config as envConfig } from 'dotenv'
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'
import * as Kilt from '@kiltprotocol/sdk-js'
export async function generateAccount(keyring) {
  // use the mnemonic from .env or make a new one
  const mnemonic = mnemonicGenerate()
  const account = keyring.addFromMnemonic(mnemonic)
  // save the mnemonic and address in .env so we keep the same account
  return { account, mnemonic }
}
export function getAccount(keyring, mnemonic) {
  return keyring.addFromMnemonic(mnemonic)
}
// don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()
    await cryptoWaitReady()
    const keyring = new Keyring({
      ss58Format: Kilt.Utils.ss58Format
    })
    try {
      const { mnemonic, account } = await generateAccount(keyring)
      console.log('save to mnemonic and address to .env to continue!\n\n')
      console.log(`ATTESTER_MNEMONIC="${mnemonic}"`)
      console.log(`ATTESTER_ADDRESS=${account.address}\n\n`)
      process.exit(0)
    } catch (e) {
      console.log('Error while setting up attester account', e)
      process.exit(1)
    }
  })()
}
