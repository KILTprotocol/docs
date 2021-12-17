const Kilt = require('@kiltprotocol/sdk-js')
const { mnemonicGenerate } = require('@polkadot/util-crypto')

function accounts() {
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'ed25519',
  })
  const claimerMnemonic = mnemonicGenerate()
  console.log('claimer mnemonic:', claimerMnemonic)
  const claimer = keyring.addFromMnemonic(claimerMnemonic)
  console.log('claimer address:', claimer.address)

  const attesterMnemonic = mnemonicGenerate()
  console.log('attester mnemonic:', attesterMnemonic)
  const attester = keyring.addFromMnemonic(attesterMnemonic)
  console.log('attester address:', attester.address)
  return { claimer, claimerMnemonic, attester, attesterMnemonic }
}

module.exports.accounts = accounts
