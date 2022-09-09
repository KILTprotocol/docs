import { config as envConfig } from 'dotenv'
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'
import * as Kilt from '@kiltprotocol/sdk-js'
import { generateKeypairs } from './generateKeypairs'
export async function generateLightDid(keyring) {
  // create secret and DID public keys
  const mnemonic = mnemonicGenerate()
  const { authenticationKey, encryptionKey } = await generateKeypairs(
    keyring,
    mnemonic
  )
  // create the DID
  const lightDid = Kilt.Did.createLightDidDocument({
    authentication: [authenticationKey],
    keyAgreement: [encryptionKey]
  })
  return {
    lightDid,
    mnemonic
  }
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
      const { lightDid, mnemonic } = await generateLightDid(keyring)
      console.log('\nsave following to .env to continue\n')
      console.log(`CLAIMER_MNEMONIC="${mnemonic}"`)
      console.log(`CLAIMER_DID_URI="${lightDid.uri}"`)
      process.exit(0)
    } catch (e) {
      console.log('Error while setting up claimer DID', e)
      process.exit(1)
    }
  })()
}
