import type { Keyring } from '@polkadot/api'

import {
  naclBoxPairFromSecret,
  randomAsHex,
  randomAsU8a
} from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateKeypairs(
  keyring: Keyring,
  mnemonic: string = randomAsHex(32)
): Promise<{
  authenticationKey: Kilt.NewDidVerificationKey
  encryptionKey: Kilt.NewDidEncryptionKey
}> {
  // signing keypair
  const authKey = (await keyring.addFromMnemonic(
    mnemonic
  )) as Kilt.KiltKeyringPair

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
