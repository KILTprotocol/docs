import * as Kilt from '@kiltprotocol/sdk-js'
import { useEncryptionSignCallback } from '../signCallback/useEncryptionSignCallback'

export async function encryptMessage(
  message: Kilt.IMessage,
  senderUri: Kilt.DidUri,
  receiverUri: Kilt.DidUri,
  keyAgreement: Kilt.KiltEncryptionKeypair
): Promise<Kilt.IEncryptedMessage> {
  const senderDidDocument = await Kilt.Did.resolve(senderUri)

  const receiverDidDocument = await Kilt.Did.resolve(receiverUri)

  const receiverKeyAgreement =
    `${receiverUri}${receiverDidDocument.document.keyAgreement?.[0].id}` as Kilt.DidResourceUri
  // encrypt the message
  const encryptedMessage = await Kilt.Message.encrypt(
    message,
    useEncryptionSignCallback({
      keyAgreement,
      didDocument: senderDidDocument.document
    }),
    receiverKeyAgreement
  )

  console.log(JSON.parse(JSON.stringify(encryptedMessage)))

  return encryptedMessage
}
