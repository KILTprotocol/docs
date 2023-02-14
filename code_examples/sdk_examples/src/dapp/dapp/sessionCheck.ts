import * as Kilt from '@kiltprotocol/sdk-js'

export interface Param {
  session: {
    encryptionKeyUri: Kilt.DidResourceUri
    encryptedChallenge: string
    nonce: string
  }
  keyAgreementKeyPair: Kilt.KiltEncryptionKeypair
  originalChallenge: `0x{string}`
}

export async function main({
  session,
  keyAgreementKeyPair,
  originalChallenge
}: Param) {
  const { encryptionKeyUri, encryptedChallenge, nonce } = session
  const encryptionKey = await Kilt.Did.resolveKey(encryptionKeyUri)
  if (!encryptionKey) {
    throw new Error('an encryption key is required')
  }

  const decryptedBytes = Kilt.Utils.Crypto.decryptAsymmetric(
    { box: encryptedChallenge, nonce },
    encryptionKey.publicKey,
    keyAgreementKeyPair.secretKey // derived from your seed phrase
  )
  // If it fails to decrypt, return.
  if (!decryptedBytes) {
    throw new Error('Could not decode')
  }

  const decryptedChallenge = Kilt.Utils.Crypto.u8aToHex(decryptedBytes)

  // Compare the decrypted challenge to the challenge you stored earlier.
  if (decryptedChallenge !== originalChallenge) {
    throw new Error('Invalid challenge')
  }
  return session
}
