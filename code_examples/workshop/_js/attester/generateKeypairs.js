import { randomAsHex } from '@polkadot/util-crypto'
export function generateKeypairs(keyring, mnemonic = randomAsHex(32)) {
  // signing keypair
  const authKey = keyring.addFromMnemonic(mnemonic)
  // encryption keypair
  const { publicKey: encryptionPk } = keyring.addFromMnemonic(mnemonic)
  // build the Attester keys object
  return {
    authentication: authKey,
    keyAgreement: {
      publicKey: encryptionPk,
      type: 'x25519'
    },
    assertionMethod: authKey,
    capabilityDelegation: authKey
  }
}
