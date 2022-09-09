/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'
let did
let message
let session
export async function main() {
  const fullDid = await Kilt.Did.query(did)
  if (!fullDid) {
    return
  }
  const senderEncryptionKey = fullDid.keyAgreement?.[0]
  if (!senderEncryptionKey) {
    return
  }
  // Create a callback that uses the DID encryption key to encrypt the message
  const encryptCallback = async ({ alg, data, peerPublicKey, publicKey }) => {
    const { box, nonce } = await Kilt.Utils.Crypto.encryptAsymmetric(
      data,
      peerPublicKey,
      publicKey
    )
    return {
      alg,
      data: box,
      nonce
    }
  }
  const encryptedMesage = await Kilt.Message.encrypt(
    message,
    senderEncryptionKey.id,
    fullDid,
    encryptCallback,
    session.encryptionKeyUri
  )
  // Finally, send the encrypted message to the extension.
  await session.send(encryptedMesage)
}
