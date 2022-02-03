const { mnemonicGenerate } = require('@polkadot/util-crypto');
const Kilt = require('@kiltprotocol/sdk-js');

function getAccount(mnemonic) {
  // setup keyring
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'sr25519',
  });
  
  // use the mnemonic from .env or make a new one
  const phrase = mnemonic || mnemonicGenerate();
  const account = keyring.addFromMnemonic(phrase);

  if (!mnemonic) {
    // save the mnemonic and address in .env to we keep the same account
    console.log('save to mnemonic and address to .env to continue!\n\n');
    console.log(`ATTESTER_MNEMONIC="${phrase}"`);
    console.log(`ATTESTER_ADDRESS=${account.address}\n\n`);
    process.exit();
  }

  return account;
}

module.exports = getAccount
