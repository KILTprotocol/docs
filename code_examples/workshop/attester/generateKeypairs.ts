import type { Keypair } from '@polkadot/util-crypto/types'

import { mnemonicGenerate, mnemonicToMiniSecret } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateKeypairs(mnemonic = mnemonicGenerate()): {
  authentication: Kilt.KiltKeyringPair
  encryption: Keypair & { type: Kilt.EncryptionKeyType }
  attestation: Kilt.KiltKeyringPair
  delegation: Kilt.KiltKeyringPair
} {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromSeed(
    mnemonicToMiniSecret(mnemonic)
  )
  const encryption = Kilt.Utils.Crypto.makeEncryptionKeyFromSeed(
    mnemonicToMiniSecret(mnemonic)
  )
  const attestation = authentication.derive(
    '//attestation'
  ) as Kilt.KiltKeyringPair
  const delegation = authentication.derive(
    '//delegation'
  ) as Kilt.KiltKeyringPair

  return {
    authentication,
    encryption,
    attestation,
    delegation
  }
}
