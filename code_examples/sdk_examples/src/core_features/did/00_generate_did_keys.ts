import * as Kilt from '@kiltprotocol/sdk-js'

import {
  blake2AsU8a,
  keyExtractPath,
  keyFromPath,
  mnemonicGenerate,
  mnemonicToMiniSecret,
  sr25519PairFromSeed
} from '@polkadot/util-crypto'

// Because there is no first-class support for this class of keys,
// we need to use a workaround to generate a key we can use for encryption/decryption.
function generateKeyAgreement(mnemonic: string): Kilt.KiltEncryptionKeypair {
  const secretKeyPair = sr25519PairFromSeed(mnemonicToMiniSecret(mnemonic))
  const { path } = keyExtractPath('//did//keyAgreement//0')
  const { secretKey } = keyFromPath(secretKeyPair, path, 'sr25519')
  return Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(blake2AsU8a(secretKey))
}

export function generateKeypairs(mnemonic = mnemonicGenerate()): {
  authentication: Kilt.KiltKeyringPair & {
    type: 'sr25519'
  }
  keyAgreement: Kilt.KiltEncryptionKeypair
  assertionMethod: Kilt.KiltKeyringPair
  capabilityDelegation: Kilt.KiltKeyringPair
} {
  const account = Kilt.Utils.Crypto.makeKeypairFromSeed(
    mnemonicToMiniSecret(mnemonic),
    'sr25519'
  )

  const authentication = {
    ...account.derive('//did//0'),
    type: 'sr25519'
  } as Kilt.KiltKeyringPair & {
    type: 'sr25519'
  }

  const assertionMethod = {
    ...account.derive('//did//assertion//0'),
    type: 'sr25519'
  } as Kilt.KiltKeyringPair

  const capabilityDelegation = {
    ...account.derive('//did//delegation//0'),
    type: 'sr25519'
  } as Kilt.KiltKeyringPair

  const keyAgreement = generateKeyAgreement(mnemonic)

  return {
    authentication: authentication,
    keyAgreement: keyAgreement,
    assertionMethod: assertionMethod,
    capabilityDelegation: capabilityDelegation
  }
}
