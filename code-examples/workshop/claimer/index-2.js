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

// initialize the Claimer account
async function initialize() {
  await cryptoWaitReady();
  await Kilt.init({ address });
  const keystore = new Kilt.Did.DemoKeystore();
  const account = await getAccount(mnemonic);
  const lightDid = await getLightDid(didUri, keystore, mnemonic);
  return { keystore, account, lightDid }
}

initialize();