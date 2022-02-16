// make environment variables available in process.env
import 'dotenv/config'

// bring in dependencies
import * as Kilt from '@kiltprotocol/sdk-js'
import { cryptoWaitReady } from '@polkadot/util-crypto'

// load Attester helper functions
import { getAccount } from './getAccount.js'
import { getFullDid } from './getFullDid.js'
import { getCtype as innerGetCtype } from './getCtype.js'
import { attestCredential as innerAttestCredential } from './attestCredential.js'

// bring in environment variables
const { WSS_ADDRESS: address, ATTESTER_MNEMONIC: mnemonic, ATTESTER_DID_URI: didUri } = process.env

// initialize the Attester account
async function initialize() {
  await cryptoWaitReady()
  await Kilt.init({ address })
  const account = getAccount(mnemonic)
  const keystore = new Kilt.Did.DemoKeystore()
  const fullDid = await getFullDid(didUri, keystore, mnemonic, account)
  return { keystore, account, fullDid }
}

export async function getCtype() {
  // load the account, get the CType, return as data
  const { fullDid, account, keystore } = await initialize()
  const ctype = await innerGetCtype(fullDid, keystore, account)
  return JSON.stringify(ctype)
}

export async function attestCredential(requestJSON) {
  // parse, load account, attest credential, return as data
  const request = JSON.parse(requestJSON)
  const { account, fullDid, keystore } = await initialize()
  const credential = await innerAttestCredential(account, fullDid, keystore, request)
  return JSON.stringify(credential)
}
