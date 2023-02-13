import * as Kilt from '@kiltprotocol/sdk-js'
import { useDecryptionSignCallback } from '../signCallback/useDecryptionSignCallback'

export async function decryptMessage(
  encryptedMessage: Kilt.IEncryptedMessage,
  keyAgreement: Kilt.KiltEncryptionKeypair
): Promise<void> {
  // encrypt the message
  const decryptedMessage = await Kilt.Message.decrypt(
    encryptedMessage,
    useDecryptionSignCallback(keyAgreement)
  )
  console.log(`Decrypted Message: ${JSON.stringify(decryptedMessage, null, 4)}`)
}
