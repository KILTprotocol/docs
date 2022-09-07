import { config as envConfig } from 'dotenv'

import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs'

export async function generateLightDid(keyring: Keyring): Promise<{
  lightDid: Kilt.DidDetails
  mnemonic: string
}> {
  // create secret and DID public keys
  const mnemonic = mnemonicGenerate()
  const { authenticationKey, encryptionKey } = await generateKeypairs(
    keyring,
    mnemonic
  )

  // create the DID
  const lightDid = Kilt.Did.createLightDidDetails({
    authentication: [
      {
        publicKey: authenticationKey.publicKey,
        type: 'sr25519'
      }
    ],
    keyAgreement: [
      {
        publicKey: encryptionKey.publicKey,
        type: 'x25519'
      }
    ]
  })

  return {
    lightDid,
    mnemonic
  }
}

// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  cryptoWaitReady().then(() => {
    const keyring = new Keyring({ ss58Format: Kilt.Utils.ss58Format })

    generateLightDid(keyring)
      .catch((e) => {
        console.log('Error while setting up claimer DID', e)
        process.exit(1)
      })
      .then(({ lightDid, mnemonic }) => {
        console.log('\nsave following to .env to continue\n')
        console.log(`CLAIMER_MNEMONIC="${mnemonic}"`)
        console.log(`CLAIMER_DID_URI="${lightDid.uri}"`)
      })
  })
}
