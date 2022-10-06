import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function generateKeypairs(mnemonic = randomAsU8a(32)) {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromSeed(mnemonic)
  const encryption = Kilt.Utils.Crypto.makeEncryptionKeyFromSeed(mnemonic)
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

export default generateKeypairs
