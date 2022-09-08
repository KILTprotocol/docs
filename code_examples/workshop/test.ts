import { config as envConfig } from 'dotenv'

import {
  blake2AsU8a,
  cryptoWaitReady,
  encodeAddress
} from '@polkadot/util-crypto'
import { BN } from '@polkadot/util'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { attestingFlow } from './attester/attestCredential'
import { createFullDid } from './attester/generateDid'
import { ensureStoredCtype } from './attester/generateCtype'
import { generateAccount } from './attester/generateAccount'
import { generateCredential } from './claimer/generateCredential'
import { generateLightDid } from './claimer/generateLightDid'
import { verificationFlow } from './verify'

const SEED_ENV = 'FAUCET_SEED'

async function testWorkshop() {
  envConfig()
  process.env.WSS_ADDRESS = 'wss://peregrine.kilt.io/parachain-public-ws'
  await Kilt.init({ address: process.env.WSS_ADDRESS })
  // Kilt.init calls cryptoWaitReady() internally, but if a different version of polkadot is used, then manual waiting must be called
  // FIXME: remove this once the same version of @polkadot/wasm-crypto is used in @polkadot/api and in the SDK
  await cryptoWaitReady()

  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format,
    type: 'sr25519'
  })
  const signCallbackForKeyring = (keyring: Keyring): Kilt.SignCallback => {
    return async ({ data, alg, publicKey }) => {
      const address = encodeAddress(
        alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey
      )
      const key = keyring.getPair(address)

      return { data: key.sign(data), alg }
    }
  }

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

  await Kilt.Balance.getTransferTx(attesterAccount.address, new BN(5), 0).then(
    (tx) => Kilt.Blockchain.signAndSubmitTx(tx, faucetAccount)
  )

  console.log('Successfully transferred tokens')

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

; (async () => {
  try {
    await testWorkshop()
    process.exit(0)
  } catch (e) {
    console.log('Error in the workshop', e)
    process.exit(1)
  }
})()
