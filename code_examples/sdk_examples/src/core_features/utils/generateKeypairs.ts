import { mnemonicGenerate, mnemonicToMiniSecret } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateKeypairs(mnemonic = mnemonicGenerate()): {
  authentication: Kilt.KiltKeyringPair & {
    type: 'ed25519'
  }
  encryption: Kilt.KiltEncryptionKeypair
  attestation: Kilt.KiltKeyringPair
  delegation: Kilt.KiltKeyringPair
} {
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

// Required for the raw-loader to successfully import this code snippet as text.
export default generateKeypairs
