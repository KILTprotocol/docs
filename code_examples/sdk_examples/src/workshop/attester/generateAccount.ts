import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateAccount(
  mnemonic = Kilt.Utils.Crypto.mnemonicGenerate()
): {
  account: Kilt.KiltKeyringPair & { type: 'ed25519' }
  mnemonic: string
} {
  return {
    account: Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic),
    mnemonic
  }
}

// Don't execute if this is imported by another file.
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.init()

      const { mnemonic, account } = generateAccount()
      console.log('save to mnemonic and address to .env to continue!\n\n')
      console.log(`ATTESTER_ACCOUNT_MNEMONIC="${mnemonic}"`)
      console.log(`ATTESTER_ACCOUNT_ADDRESS="${account.address}"\n\n`)
    } catch (e) {
      console.log('Error while setting up attester account')
      throw e
    }
  })()
}
