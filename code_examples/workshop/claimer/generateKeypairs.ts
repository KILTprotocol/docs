import type { Keypair } from '@polkadot/util-crypto/types'

import { mnemonicGenerate, mnemonicToMiniSecret } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateKeypairs(mnemonic = mnemonicGenerate()): {
  authentication: Kilt.KiltKeyringPair
  encryption: Keypair & { type: Kilt.EncryptionKeyType }
} {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromSeed(
    mnemonicToMiniSecret(mnemonic)
  )
  const encryption = Kilt.Utils.Crypto.makeEncryptionKeyFromSeed(
    mnemonicToMiniSecret(mnemonic)
  )

  return {
    authentication,
    encryption
  }
}
