// make environment variables available in process.env
require('dotenv').config();

// bring in dependencies
const Kilt = require('@kiltprotocol/sdk-js');
const { cryptoWaitReady } = require('@polkadot/util-crypto');
const attester = require('./attester')

// load the node address from .env
const { WSS_ADDRESS: address } = process.env

// bring in dependencies
async function main() {
  // wait for the crypto library to be ready
  await cryptoWaitReady();

  // connect to the KILT wss node
  await Kilt.init({ address });

  const json = await attester.getCType();
  const ctype = JSON.parse(json);
  console.log(JSON.stringify(ctype, null, 2));

  // we can disconnect
  await Kilt.disconnect();
}

main();