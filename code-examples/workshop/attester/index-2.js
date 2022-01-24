// make environment variables available in process.env
require('dotenv').config();

// load dependencies
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

// initialize the Attester account
async function initialize() {
  await cryptoWaitReady();
  await Kilt.init({ address });
  const account = getAccount(mnemonic);
  const keystore = new Kilt.Did.DemoKeystore();
  const fullDid = await getFullDid(didUri, keystore, mnemonic, account);
  return { keystore, account, fullDid }
}

initialize();
