import { config as envConfig } from 'dotenv'

import { BN } from '@polkadot/util'
import { Keyring } from '@polkadot/api'
import { cryptoWaitReady } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { attestingFlow } from './attester/attestCredential'
import { createFullDid } from './attester/generateDid'
import { ensureStoredCtype } from './attester/generateCtype'
import { generateAccount } from './attester/generateAccount'
import { generateCredential } from './claimer/generateCredential'
import { generateLightDid } from './claimer/generateLightDid'
import { verificationFlow } from './verify'

import { signCallbackForKeyring } from './utils'

const SEED_ENV = 'FAUCET_SEED'

async function testWorkshop() {
  envConfig()
  process.env.WSS_ADDRESS = 'wss://peregrine.kilt.io/parachain-public-ws'
  await Kilt.init({ address: process.env.WSS_ADDRESS })
  // Although cryptoWaitReady() is called from within Kilt.init, it is not properly awaited
  await cryptoWaitReady()

  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format,
    type: 'sr25519'
  })

  // setup attester account
  const { account: attesterAccount, mnemonic: attesterMnemonic } =
    await generateAccount(keyring)
  process.env.ATTESTER_MNEMONIC = attesterMnemonic
  process.env.ATTESTER_ADDRESS = attesterAccount.address

  // setup claimer & create a credential
  const { lightDid: claimerDid, mnemonic: claimerMnemonic } =
    await generateLightDid(keyring)
  process.env.CLAIMER_DID_URI = claimerDid.uri
  process.env.CLAIMER_MNEMONIC = claimerMnemonic

  await generateCredential(
    keyring,
    {
      age: 27,
      name: 'Karl'
    },
    signCallbackForKeyring(keyring)
  )

  const faucetSeed = process.env[SEED_ENV]
  if (!faucetSeed) {
    console.log(
      `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
    )
    throw 'Account seed is missing'
  }

  const faucetAccount = keyring.createFromUri(faucetSeed)

  await Kilt.Balance.getTransferTx(attesterAccount.address, new BN(5), 0)
    .then((tx) => Kilt.Blockchain.signAndSubmitTx(tx, faucetAccount))
    .then(() => console.log('Successfully transferred tokens'))

  // create attester did & ensure ctype
  const attesterDid = await createFullDid(
    keyring,
    signCallbackForKeyring(keyring)
  )
  process.env.ATTESTER_DID_URI = attesterDid.uri

  await ensureStoredCtype(keyring, signCallbackForKeyring(keyring))

  // do attestation & verification
  process.env.CLAIMER_CREDENTIAL = JSON.stringify(await attestingFlow())
  await verificationFlow()
}

testWorkshop()
  .catch((e) => {
    console.log('Error in the workshop', e)
    process.exit(1)
  })
  .then(() => {
    process.exit()
  })
