/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'

let did: Kilt.DidUri
let message: Kilt.IMessage
let session: {
  encryptionKeyUri: Kilt.DidResourceUri
  send: (message: Kilt.IEncryptedMessage) => Promise<void>
}
let senderDid: Kilt.DidDocument
let senderSecretKey: Kilt.Utils.Crypto.CryptoInput

export async function main() {
  const senderEncryptionKey = senderDid.keyAgreement?.[0]
  if (!senderEncryptionKey) {
    return
  }

  // Create a callback that uses the DID encryption key to encrypt the message
  const encryptCallback: Kilt.EncryptCallback = async ({
    data,
    peerPublicKey
  }) => {
    const { box, nonce } = Kilt.Utils.Crypto.encryptAsymmetric(
      data,
      peerPublicKey,
      senderSecretKey
    )
    return {
      data: box,
      nonce,
      keyUri: `${senderDid.uri}${senderEncryptionKey.id}`
    }
  }

  const encryptedMesage = await Kilt.Message.encrypt(
    message,
    encryptCallback,
    session.encryptionKeyUri
  )

  // Finally, send the encrypted message to the extension.
  await session.send(encryptedMesage)
}
