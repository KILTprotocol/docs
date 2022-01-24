// make environment variables available in process.env
require('dotenv').config();

// bring in dependencies
const Kilt = require('@kiltprotocol/sdk-js');
const { cryptoWaitReady } = require('@polkadot/util-crypto');

// bring in environment variables
const { 
  WSS_ADDRESS: address,
  ATTESTER_MNEMONIC: mnemonic,
  ATTESTER_DID_URI: didUri,
} = process.env

// load Attester helper functions
const getAccount = require('./getAccount');
const getFullDid = require('./getFullDid');
const getCType = require('./getCType');
const attestCredential = require('./attestCredential');

// initialize the Attester account
async function initialize() {
  await cryptoWaitReady();
  await Kilt.init({ address });
  const account = getAccount(mnemonic);
  const keystore = new Kilt.Did.DemoKeystore();
  const fullDid = await getFullDid(didUri, keystore, mnemonic, account);
  return { keystore, account, fullDid }
}

// export for the outside world
module.exports = {
  async getCType() {
    // load the account, get the CType, return as data
    const { fullDid, account, keystore } = await initialize();
    const ctype = await getCType(fullDid, keystore, account);
    return JSON.stringify(ctype);
  },
  async attestCredential(requestJSON) {
    // parse, load account, attest credential, return as data
    const request = JSON.parse(requestJSON);
    const { account, fullDid, keystore } = await initialize();
    const credential = await attestCredential(account, fullDid, keystore, request);
    return JSON.stringify(credential);
  },
}
