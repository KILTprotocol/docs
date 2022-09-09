import { randomAsHex } from '@polkadot/util-crypto'
export async function generateKeypairs(keyring, mnemonic = randomAsHex(32)) {
  // signing keypair
  const authKey = await keyring.addFromMnemonic(mnemonic)
  // encryption keypair
  const { publicKey: encryptionPk } = await keyring.addFromMnemonic(mnemonic)
  // build the keys object
  return {
    authenticationKey: authKey,
    encryptionKey: {
      publicKey: encryptionPk,
      type: 'x25519'
    }
  }
}
