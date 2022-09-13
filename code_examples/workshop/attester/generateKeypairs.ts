import {
  naclBoxPairFromSecret,
  randomAsHex,
  randomAsU8a
} from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

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
  const { publicKey: encryptionPk } = naclBoxPairFromSecret(randomAsU8a(32))

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
