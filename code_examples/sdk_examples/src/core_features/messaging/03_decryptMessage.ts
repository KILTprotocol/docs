import * as Kilt from '@kiltprotocol/sdk-js'
import { useDecryptionSignCallback } from '../signCallback/useDecryptionSignCallback'

export async function decryptMessage(
  keyAgreement: Kilt.KiltEncryptionKeypair,
  message: Kilt.IEncryptedMessage
): Promise<Kilt.IMessage> {
  await Kilt.connect('wss://peregrine.kilt.io')

  // encrypt the message
  const decryptedMessage = await Kilt.Message.decrypt(
    message,
    useDecryptionSignCallback({
      keyAgreement
    })
  )

  console.log(JSON.parse(JSON.stringify(decryptedMessage)))

  return decryptedMessage
}
