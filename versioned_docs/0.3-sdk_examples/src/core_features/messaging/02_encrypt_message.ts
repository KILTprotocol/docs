import * as Kilt from '@kiltprotocol/sdk-js'
import { useEncryptionCallback } from '../signCallback/useEncryptionCallback'

export async function encryptMessage(
  message: Kilt.IMessage,
  senderUri: Kilt.DidUri,
  receiverUri: Kilt.DidUri,
  keyAgreement: Kilt.KiltEncryptionKeypair
): Promise<Kilt.IEncryptedMessage> {
  const { document: senderDocument } = await Kilt.Did.resolve(senderUri)

  const { document: receiverDocument } = await Kilt.Did.resolve(receiverUri)

  const receiverKeyAgreementUri =
    `${receiverUri}${receiverDocument.keyAgreement?.[0].id}` as Kilt.DidResourceUri
  const senderKeyAgreeementUri =
    `${senderUri}${senderDocument.keyAgreement?.[0].id}` as Kilt.DidResourceUri
  // encrypt the message
  const encryptedMessage = await Kilt.Message.encrypt(
    message,
    useEncryptionCallback({
      keyAgreement,
      keyAgreementUri: senderKeyAgreeementUri
    }),
    receiverKeyAgreementUri
  )

  console.log(`Encrypted Message: ${JSON.stringify(encryptedMessage, null, 4)}`)

  return encryptedMessage
}
