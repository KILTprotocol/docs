import 'dotenv/config'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateRequest } from '../claimer/generateRequest.js'
import { getAccount } from './generateAccount.js'
import { getFullDid } from './generateDid.js'
import { generateKeypairs } from './generateKeypairs.js'

const { WSS_ADDRESS: address, ATTESTER_MNEMONIC: mnemonic, ATTESTER_DID_URI: didUri } = process.env

export async function attestClaim(request) {
  // Init
  await cryptoWaitReady()
  await Kilt.init({ address })

  // load account & DID
  const account = await getAccount(mnemonic)
  const keystore = new Kilt.Did.DemoKeystore()
  await generateKeypairs(keystore, mnemonic)
  const fullDid = await getFullDid(didUri)

  // build the attestation object
  const attestation = Kilt.Attestation.fromRequestAndDid(request, fullDid.details.did)

  // check the request content and deny based on your business logic.
  // e.g. verify age with other credentials (birth certificate, passport, ...)

  // form tx and authorized extrinsic
  const tx = await attestation.store()
  const extrinsic = await fullDid.details.authorizeExtrinsic(tx, keystore, account.address)

  // write to chain
  console.log('Attester -> submit attestation...')
  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
  })

  return attestation
}

export async function attestingFlow() {
  // first the claimer
  const request = await generateRequest({
    age: 27,
    name: 'Mia Musterfrau',
  })

  // send the request to the attester 🕊

  // the attester checks the attributes and issues an attestation
  let attestation = await attestClaim(request)

  // send the attestation back to the claimer 🕊

  // build the credential and return it
  const credential = Kilt.Credential.fromRequestAndAttestation(request, attestation)

  return credential
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  attestingFlow()
    .catch((e) => {
      console.log('Error while going throw attesting workflow', e)
      process.exit(1)
    })
    .then((c) => {
      console.log(`The attester issued the credential: ${JSON.stringify(c, null, 2)}`)
      process.exit(0)
    })
}
