// make environment variables available in process.env
require('dotenv').config();

// bring in dependencies
const Kilt = require('@kiltprotocol/sdk-js');
const { cryptoWaitReady } = require('@polkadot/util-crypto');

// bring in environment variables
const {
  WSS_ADDRESS: address,
  CLAIMER_MNEMONIC: mnemonic,
  CLAIMER_DID_URI: didUri,
} = process.env

// load Claimer helper functions
const getAccount = require('./getAccount');
const getLightDid = require('./getLightDid');
const createClaim = require('./createClaim');
const createRequest = require('./createRequest');
const createPresentation = require('./createPresentation');

// initialize the Claimer account
async function initialize() {
  await cryptoWaitReady();
  await Kilt.init({ address });
  const keystore = new Kilt.Did.DemoKeystore();
  const account = getAccount(mnemonic);
  const lightDid = await getLightDid(didUri, keystore, mnemonic);
  return { keystore, account, lightDid }
}

// export convenience functions
module.exports = {
  // creates claim from a CType and content returning data
  async createClaim(ctypeJSON, content) {
    const ctype = JSON.parse(ctypeJSON);
    const { lightDid } = await initialize();
    const claim = createClaim(lightDid, ctype, content);
    return JSON.stringify(claim);
  },
  // creates claim request from claim returning data
  async createRequest(claimJSON) {
    // parse claim, load account, build request return data
    const claim = JSON.parse(claimJSON);
    const { lightDid, keystore } = await initialize();

    try {
      // use test request if it exists
      const oldRequest = require('./_request.json');
      return JSON.stringify(oldRequest);
    } catch(e) {
      // otherwise create a new one
      const newRequest = await createRequest(lightDid, keystore, claim);
      return JSON.stringify(newRequest);
    }
  },
  async createPresentation(credentialJSON, challenge) {
    const credential = JSON.parse(credentialJSON);
    const { lightDid, keystore } = await initialize();
    const presentation = await createPresentation(credential, challenge, lightDid, keystore);
    return JSON.stringify(presentation);
  },
}
