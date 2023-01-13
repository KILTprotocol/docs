import { u8aToHex } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

let session: {
  encryptionKeyId: Kilt.DidResourceUri
  encryptedChallenge: string
  nonce: string
}
let keyAgreementKey: Kilt.DidEncryptionKey
let originalChallenge: `0x{string}`

export async function main() {
  const { encryptionKeyId, encryptedChallenge, nonce } = session
  const encryptionKey = await Kilt.Did.resolveKey(encryptionKeyId)
  if (!encryptionKey) {
    throw 'an encryption key is required'
  }

  const decryptedBytes = Kilt.Utils.Crypto.decryptAsymmetric(
    { box: encryptedChallenge, nonce },
    encryptionKey.publicKey,
    keyAgreementKey.publicKey // derived from your seed phrase
  )
  // If it fails to decrypt, return.
  if (!decryptedBytes) {
    return
  }

  const decryptedChallenge = u8aToHex(decryptedBytes)

  // Compare the decrypted challenge to the challenge you stored earlier.
  if (decryptedChallenge === originalChallenge) {
    return session
  }
}
