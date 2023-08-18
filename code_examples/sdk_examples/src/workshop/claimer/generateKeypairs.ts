import * as Kilt from '@kiltprotocol/sdk-js'
import { mnemonicGenerate } from '@polkadot/util-crypto'

export function generateKeypairs(mnemonic = mnemonicGenerate()) {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromUri(
    mnemonic,
    'sr25519'
  )

  const keyAgreement = Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(
    Kilt.Utils.Crypto.mnemonicToMiniSecret(mnemonic)
  )

  return {
    authentication: authentication,
    keyAgreement: keyAgreement
  }
}
