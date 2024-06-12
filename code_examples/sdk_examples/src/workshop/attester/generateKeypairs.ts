import * as Kilt from '@kiltprotocol/sdk-js'

import { mnemonicGenerate } from '@polkadot/util-crypto'

export function generateKeypairs(mnemonic = mnemonicGenerate()): {
  authentication: Kilt.KiltKeyringPair
  keyAgreement: Kilt.KiltEncryptionKeypair
  assertionMethod: Kilt.KiltKeyringPair
  capabilityDelegation: Kilt.KiltKeyringPair
} {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic)

  const assertionMethod = Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic)

  const capabilityDelegation = Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic)

  const keyAgreement = Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(
    Kilt.Utils.Crypto.mnemonicToMiniSecret(mnemonic)
  )

  return {
    authentication: authentication,
    keyAgreement: keyAgreement,
    assertionMethod: assertionMethod,
    capabilityDelegation: capabilityDelegation
  }
}
