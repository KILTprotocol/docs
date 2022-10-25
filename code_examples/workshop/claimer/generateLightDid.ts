import { config as envConfig } from 'dotenv'

import { mnemonicGenerate } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs'

export function generateLightDid(mnemonic: string): Kilt.DidDocument {
  const { authentication, encryption } = generateKeypairs(mnemonic)
  return Kilt.Did.createLightDidDocument({
    authentication: [authentication],
    keyAgreement: [encryption]
  })
}

// Don't execute if this is imported by another file.
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.init()

      const mnemonic = mnemonicGenerate()
      console.log('\nsave following to .env to continue\n')
      console.log(`CLAIMER_DID_MNEMONIC="${mnemonic}"`)
    } catch (e) {
      console.log('Error while setting up claimer DID')
      throw e
    }
  })()
}
