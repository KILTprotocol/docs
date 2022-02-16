const Kilt = require('@kiltprotocol/sdk-js');
const generateKeypairs = require('./generateKeypairs');
const createFullDid = require('./createFullDid');

async function getFullDid(didUri, keystore, mnemonic, account) {
  // generate the keypairs and load the DID if we have it
  const keypairs = await generateKeypairs(keystore, mnemonic);

  // if we don't have the didUri create the on chain DID
  if (!didUri) return await createFullDid(keystore, keypairs, account);

  // make sure the did is already on chain
  const onChain = await Kilt.Did.DidChain.queryById(account.address)
  if (!onChain) throw Error(`failed to find on chain: ${didUri}\n`)

  // load and return the DID using the default resolver
  return await Kilt.Did.DefaultResolver.resolveDoc(didUri);
}

module.exports = getFullDid;
