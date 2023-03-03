import { mnemonicGenerate, mnemonicToMiniSecret } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateKeypairs(mnemonic = mnemonicGenerate()): {
  authentication: Kilt.KiltKeyringPair
  attestation: Kilt.KiltKeyringPair
  delegation: Kilt.KiltKeyringPair
  encryption: Kilt.KiltEncryptionKeypair
} {
  // At first we generate a signer keypair and an encrytion keypair from the mnemonic
  const baseSignerKey = Kilt.Utils.Crypto.makeKeypairFromSeed(
    mnemonicToMiniSecret(mnemonic)
  )
  const encryptionKey = Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(
    mnemonicToMiniSecret(mnemonic)
  )

  // Now we derive the authentication, attestation and delegation keypairs from the signer keypair
  // by using different derivation paths
  const authenticationKey = baseSignerKey.derive(
    '//authentication'
  ) as Kilt.KiltKeyringPair
  const attestationKey = authenticationKey.derive(
    '//attestation'
  ) as Kilt.KiltKeyringPair
  const delegationKey = authenticationKey.derive(
    '//delegation'
  ) as Kilt.KiltKeyringPair

  return {
    authentication: authenticationKey,
    encryption: encryptionKey,
    attestation: attestationKey,
    delegation: delegationKey
  }
}
