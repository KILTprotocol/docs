import {
  naclBoxPairFromSecret,
  randomAsHex,
  randomAsU8a
} from '@polkadot/util-crypto'
export function generateKeypairs(keyring, mnemonic = randomAsHex(32)) {
  // signing keypair
  const authKey = keyring.addFromMnemonic(mnemonic)
  // encryption keypair
  const { publicKey: encryptionPk } = naclBoxPairFromSecret(randomAsU8a(32))
  // build the keys object
  return {
    authenticationKey: authKey,
    encryptionKey: {
      publicKey: encryptionPk,
      type: 'x25519'
    }
  }
}
