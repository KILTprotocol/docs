import type { Keyring } from '@polkadot/api'

import { randomAsHex } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateKeypairs(
  keyring: Keyring,
  mnemonic: string = randomAsHex(32)
): Promise<{
  authenticationKey: Kilt.NewDidVerificationKey
  encryptionKey: Kilt.NewDidEncryptionKey
}> {
  // signing keypair
  const { publicKey: signingPk } = await keyring.addFromMnemonic(
    mnemonic,
    {},
    'sr25519'
  )

  // encryption keypair
  const { publicKey: encryptionPk } = await keyring.addFromMnemonic(mnemonic)

  // build the keys object
  return {
    authenticationKey: {
      publicKey: signingPk,
      type: 'sr25519'
    },
    encryptionKey: {
      publicKey: encryptionPk,
      type: 'x25519'
    }
  }
}
