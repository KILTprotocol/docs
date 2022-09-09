import { Keyring } from '@polkadot/api'
import { randomAsHex } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateKeypairs(
  keyring: Keyring,
  mnemonic: string = randomAsHex(32)
): {
  authentication: Kilt.NewDidVerificationKey
  keyAgreement: Kilt.NewDidEncryptionKey
  assertionMethod: Kilt.NewDidVerificationKey
  capabilityDelegation: Kilt.NewDidVerificationKey
} {
  // signing keypair
  const authKey = keyring.addFromMnemonic(mnemonic) as Kilt.KiltKeyringPair

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
