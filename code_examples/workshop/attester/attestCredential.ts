import { config as envConfig } from 'dotenv'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateCredential } from '../claimer/generateCredential'
import { generateKeypairs } from './generateKeypairs'
import { getAccount } from './generateAccount'
import { getFullDid } from './generateDid'

export async function attestCredential(
  keyring: Keyring,
  request: Kilt.ICredential,
  signCallback: Kilt.SignCallback
): Promise<void> {
  // load account & DID
  const mnemonic = process.env.ATTESTER_MNEMONIC as string
  const attesterDid = process.env.ATTESTER_DID_URI as Kilt.DidUri
  const account = await getAccount(keyring, mnemonic)
  await generateKeypairs(keyring, mnemonic)
  const fullDid = await getFullDid(attesterDid)

  // build the attestation object
  const attestation = Kilt.Attestation.fromCredentialAndDid(
    request,
    fullDid.uri
  )

  // check the request content and deny based on your business logic.
  // e.g., verify age with other credentials (birth certificate, passport, ...)

  // form tx and authorized extrinsic
  const tx = await Kilt.Attestation.getStoreTx(attestation)
  const extrinsic = await Kilt.Did.authorizeExtrinsic(
    fullDid,
    tx,
    signCallback,
    account.address
  )

  // write to chain
  console.log('Attester -> create attestation...')
  await Kilt.Blockchain.signAndSubmitTx(extrinsic, account)
}

export async function attestingFlow(): Promise<Kilt.ICredential> {
  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format,
    type: 'sr25519'
  })
  const signCallbackForKeyring = (keyring: Keyring): Kilt.SignCallback => {
    return async ({ data, alg, publicKey }) => {
      const address = encodeAddress(
        alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey,
        Kilt.Utils.ss58Format
      )
      const key = keyring.getPair(address)

      return { data: key.sign(data), alg }
    }
  }

  // first the claimer
  const credential = await generateCredential(
    keyring,
    {
      age: 27,
      name: 'Mia Musterfrau'
    },
    signCallbackForKeyring(keyring)
  )

  // send the request to the attester

  // the attester checks the attributes and issues an attestation
  await attestCredential(keyring, credential, signCallbackForKeyring(keyring))

  // send the attestation back to the claimer

  return credential
}

// don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()
    await Kilt.init({ address: process.env.WSS_ADDRESS })

    try {
      const c = await attestingFlow()
      console.log('The claimer build their credential and now has to store it.')
      console.log('  add the following to your .env file. ')
      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(c)}'`)
      process.exit(0)
    } catch (e) {
      console.log('Error while going throw attesting workflow', e)
      process.exit(1)
    }
  })()
}
