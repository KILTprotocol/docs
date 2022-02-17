import 'dotenv/config'
import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs.js'

export async function generateLightDid() {
  // init
  await cryptoWaitReady()
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  // create secret and DID public keys
  const keystore = new Kilt.Did.DemoKeystore()
  const mnemonic = mnemonicGenerate()
  const keys = await generateKeypairs(keystore, mnemonic)

  // create the DID
  const lightDid = new Kilt.Did.LightDidDetails(keys)

  console.log('\nsave following to .env to continue\n')
  console.log(`CLAIMER_MNEMONIC="${mnemonic}"`)
  console.log(`CLAIMER_DID_URI="${lightDid.didUri}"`)
  process.env.CLAIMER_DID_URI = lightDid.didUri
  process.env.CLAIMER_MNEMONIC = mnemonic

  return {
    lightDid,
    mnemonic,
  }
}

export async function getLightDid(keystore, mnemonic) {
  const keys = await generateKeypairs(keystore, mnemonic)
  const lightDid = new Kilt.Did.LightDidDetails(keys)

  return lightDid
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateLightDid().catch((e) => {
    console.log('Error while setting up claimer DID', e)
    process.exit(1)
  })
}
