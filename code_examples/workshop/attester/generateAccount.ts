import { config as envConfig } from 'dotenv'

import { mnemonicGenerate, mnemonicToMiniSecret } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateAccount(): {
  account: Kilt.KiltKeyringPair
  mnemonic: string
} {
  const mnemonic = mnemonicGenerate()
  const account = Kilt.Utils.Crypto.makeKeypairFromSeed(
    mnemonicToMiniSecret(mnemonic),
    'sr25519'
  )

  // Save the mnemonic and address in .env so we keep the same account
  return { account, mnemonic }
}

export function getAccount(mnemonic: string): Kilt.KiltKeyringPair {
  return Kilt.Utils.Crypto.makeKeypairFromSeed(mnemonicToMiniSecret(mnemonic))
}

// Don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.init()

      const { mnemonic, account } = generateAccount()
      console.log('save to mnemonic and address to .env to continue!\n\n')
      console.log(`ATTESTER_ACCOUNT_MNEMONIC="${mnemonic}"`)
      console.log(`ATTESTER_ACCOUNT_ADDRESS=${account.address}\n\n`)
      process.exit(0)
    } catch (e) {
      console.log('Error while setting up attester account', e)
      process.exit(1)
    }
  })()
}
