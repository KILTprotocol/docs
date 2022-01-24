// make environment variables available in process.env
require('dotenv').config();

// load dependencies
const Kilt = require('@kiltprotocol/sdk-js');
const { cryptoWaitReady } = require('@polkadot/util-crypto');

// bring in environment variables
const { 
  WSS_ADDRESS: address,
  ATTESTER_MNEMONIC: mnemonic,
} = process.env

// load Attester helper functions
const getAccount = require('./getAccount');

// initialize the Attester account
async function initialize() {
  await cryptoWaitReady();
  await Kilt.init({ address });
  const account = getAccount(mnemonic);
  console.log(account);
}

initialize();
