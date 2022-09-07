import { config as envConfig } from 'dotenv'

import { Keyring } from '@polkadot/api'
import { blake2AsU8a } from '@polkadot/util-crypto'

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
  await Kilt.Blockchain.signAndSubmitTx(extrinsic, account, {
    resolveOn: Kilt.Blockchain.IS_FINALIZED
  })
}

export async function attestingFlow(): Promise<Kilt.ICredential> {
  const keyring = new Keyring({ ss58Format: Kilt.Utils.ss58Format })
  const signCallbackForKeyring = (keyring: Keyring): Kilt.SignCallback => {
    return async ({ data, alg, publicKey }) => {
      const address =
        alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey
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
  envConfig()
  attestingFlow()
    .catch((e) => {
      console.log('Error while going throw attesting workflow', e)
      process.exit(1)
    })
    .then((c) => {
      console.log('The claimer build their credential and now has to store it.')
      console.log('  add the following to your .env file. ')
      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(c)}'`)
      process.exit()
    })
}
