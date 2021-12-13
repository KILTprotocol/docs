const Kilt = require('@kiltprotocol/sdk-js')

const { mnemonicGenerate } = require('@polkadot/util-crypto')

function account() {
  const mnemonic = mnemonicGenerate()
  console.log('mnemonic:', mnemonic)

  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'ed25519',
  })
  const account = keyring.addFromMnemonic(mnemonic)
  console.log('address:', account.address)
}

account()
