// make environment variables available in process.env
import 'dotenv/config'

// bring in dependencies
import * as Kilt from '@kiltprotocol/sdk-js'
import { cryptoWaitReady } from '@polkadot/util-crypto'

// load Claimer helper functions
import { getAccount } from './getAccount.js'
import { getLightDid } from './getLightDid.js'
import { createClaim as innerCreateClaim } from './createClaim.js'
import { createRequest as innerCreateRequest } from './createRequest.js'
import { createPresentation as innerCreatePresentation } from './createPresentation.js'

// bring in environment variables
const { WSS_ADDRESS: address, CLAIMER_MNEMONIC: mnemonic, CLAIMER_DID_URI: didUri } = process.env

// initialize the Claimer account
async function initialize() {
  await cryptoWaitReady()
  await Kilt.init({ address })
  const keystore = new Kilt.Did.DemoKeystore()
  const account = getAccount(mnemonic)
  const lightDid = await getLightDid(didUri, keystore, mnemonic)
  return { keystore, account, lightDid }
}

// creates claim from a CType and content returning data
export async function createClaim(ctypeJSON, content) {
  const ctype = JSON.parse(ctypeJSON)
  const { lightDid } = await initialize()
  const claim = innerCreateClaim(lightDid, ctype, content)
  return JSON.stringify(claim)
}

// creates claim request from claim returning data
export async function createRequest(claimJSON) {
  // parse claim, load account, build request return data
  const claim = JSON.parse(claimJSON)
  const { lightDid, keystore } = await initialize()

  try {
    // use test request if it exists
    const oldRequest = require('./_request.json')
    return JSON.stringify(oldRequest)
  } catch (e) {
    // otherwise create a new one
    const newRequest = await innerCreateRequest(lightDid, keystore, claim)
    return JSON.stringify(newRequest)
  }
}

export async function createPresentation(credentialJSON, challenge) {
  const credential = JSON.parse(credentialJSON)
  const { lightDid, keystore } = await initialize()
  const presentation = await innerCreatePresentation(credential, challenge, lightDid, keystore)
  return JSON.stringify(presentation)
}
