import { u8aToHex } from '@polkadot/util'
import * as Kilt from '@kiltprotocol/sdk-js'
let session
let keyAgreementKey
let originalChallenge
export async function main() {
  const { encryptionKeyUri, encryptedChallenge, nonce } = session
  const encryptionKey = await Kilt.Did.resolveKey(encryptionKeyUri)
  if (!encryptionKey) {
    return
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
  // Compare the decrypted challenge to the challenge you stored earlier
  if (decryptedChallenge === originalChallenge) {
    return session
  }
}
