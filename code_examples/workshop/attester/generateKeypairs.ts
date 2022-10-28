import { mnemonicGenerate, mnemonicToMiniSecret } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateKeypairs(mnemonic = mnemonicGenerate()) {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromSeed(
    mnemonicToMiniSecret(mnemonic)
  )
  const encryption = Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(
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
