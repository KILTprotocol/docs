import * as Kilt from '@kiltprotocol/sdk-js'
import { useEncryptionCallback } from '../signCallback/useEncryptionCallback'

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
    useEncryptionCallback({
      keyAgreement,
      didUri: senderDidDocument.document.uri
    }),
    receiverKeyAgreement
  )
  console.log(`Encrypted Message: ${JSON.stringify(encryptedMessage, null, 4)}`)

  return encryptedMessage
}
