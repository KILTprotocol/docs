import * as Kilt from '@kiltprotocol/sdk-js'
import { useDecryptionSignCallback } from '../signCallback/useDecryptionSignCallback'

export async function decryptMessage(
  encryptedMessage: Kilt.IEncryptedMessage,
  keyAgreement: Kilt.KiltEncryptionKeypair
): Promise<Kilt.IMessage> {
  // Decrypting the message to retrieve the content
  const decryptedMessage = await Kilt.Message.decrypt(
    encryptedMessage,
    useDecryptionSignCallback(keyAgreement)
  )

  // Verifying this is a message
  Kilt.Message.verify(decryptedMessage)

  console.log(`Decrypted Message: ${JSON.stringify(decryptedMessage, null, 4)}`)

  // Checking if the message type matches the expected checks
  if (decryptedMessage.body.type !== 'request-credential') {
    throw new Error('Not the correct body type')
  }

  // Destructing the message to receive the cTypes array to see what credentials
  // Are valid for the given request
  const { cTypes } = decryptedMessage.body.content

  const { cTypeHash, trustedAttesters } = cTypes[0]

  // The receiver can check if they have a valid credential that matches the cTypeHash
  console.log('The sent cType hash :', cTypeHash)

  // The trusted attesters is an array that includes the list of trusted entities
  // The receiver can check if they have a given credential from the trusted list
  console.log(`A list of trusted attesters DID :${trustedAttesters}`)

  return decryptedMessage
}
