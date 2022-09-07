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
  const { publicKey: signingPk } = keyring.addFromMnemonic(
    mnemonic,
    {},
    'sr25519'
  )

  // encryption keypair
  const { publicKey: encryptionPk } = keyring.addFromMnemonic(mnemonic, {})

  // build the Attester keys object
  return {
    authentication: {
      publicKey: signingPk,
      type: 'sr25519'
    },
    keyAgreement: {
      publicKey: encryptionPk,
      type: 'x25519'
    },
    assertionMethod: {
      publicKey: signingPk,
      type: 'sr25519'
    },
    capabilityDelegation: {
      publicKey: signingPk,
      type: 'sr25519'
    }
  }
}
