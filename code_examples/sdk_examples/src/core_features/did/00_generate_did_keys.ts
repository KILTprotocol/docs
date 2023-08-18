import * as Kilt from '@kiltprotocol/sdk-js'

import { mnemonicGenerate } from '@polkadot/util-crypto'

const signingKeyPairType = 'sr25519'

export function generateKeypairs(mnemonic = mnemonicGenerate()): {
  authentication: Kilt.KiltKeyringPair
  keyAgreement: Kilt.KiltEncryptionKeypair
  assertionMethod: Kilt.KiltKeyringPair
  capabilityDelegation: Kilt.KiltKeyringPair
} {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromUri(
    mnemonic,
    signingKeyPairType
  )

  const assertionMethod = Kilt.Utils.Crypto.makeKeypairFromUri(
    mnemonic,
    signingKeyPairType
  )

  const capabilityDelegation = Kilt.Utils.Crypto.makeKeypairFromUri(
    mnemonic,
    signingKeyPairType
  )

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
