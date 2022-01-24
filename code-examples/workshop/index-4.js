// make environment variables available in process.env
require('dotenv').config();

// bring in dependencies
const Kilt = require('@kiltprotocol/sdk-js');
const { cryptoWaitReady } = require('@polkadot/util-crypto');

// load the node address from .env
const { WSS_ADDRESS: address } = process.env

// load actors for the workshop
const claimer = require('./claimer');
const attester = require('./attester');

async function main() {
  // wait for the crypto library to be ready
  await cryptoWaitReady();

  // connect to the KILT wss node
  await Kilt.init({ address });

  // Claimer gets ctype from Attester
  const ctypeJSON = await attester.getCtype();

  // Claimer forms a claim for the ctype
  const content = { name: 'Alice', age: 25 };
  const claimJSON = await claimer.createClaim(ctypeJSON, content);

  // Claimer creates an attestation request
  const requestJSON = await claimer.createRequest(claimJSON);

  // Claimer sends request to the Attester for approval or rejection
  const credentialJSON = await attester.attestCredential(requestJSON);
  if (!credentialJSON) throw Error('credential denied'); 
  console.log(credentialJSON);

  // we can disconnect
  await Kilt.disconnect();
}

main();