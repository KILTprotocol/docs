import { config as envConfig } from 'dotenv'

import { mnemonicGenerate } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs'

export async function generateLightDid(): Promise<{
  lightDid: Kilt.Did.LightDidDetails
  mnemonic: string
}> {
  // init
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  // create secret and DID public keys
  const keystore = new Kilt.Did.DemoKeystore()
  const mnemonic = mnemonicGenerate()
  const keys = await generateKeypairs(keystore, mnemonic)

  // create the DID
  const lightDid = Kilt.Did.LightDidDetails.fromDetails({
    ...keys,
    authenticationKey: {
      publicKey: keys.authenticationKey.publicKey,
      type: Kilt.VerificationKeyType.Sr25519
    }
  })

  return {
    lightDid,
    mnemonic
  }
}

// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  generateLightDid()
    .catch((e) => {
      console.log('Error while setting up claimer DID', e)
      process.exit(1)
    })
    .then(({ lightDid, mnemonic }) => {
      console.log('\nsave following to .env to continue\n')
      console.log(`CLAIMER_MNEMONIC="${mnemonic}"`)
      console.log(`CLAIMER_DID_URI="${lightDid.did}"`)
    })
}
