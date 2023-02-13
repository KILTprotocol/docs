import * as Kilt from '@kiltprotocol/sdk-js'
import { createCompleteFullDid } from '../did/05_full_did_complete'
import { decryptMessage } from './03_decryptMessage'
import { encryptMessage } from './02_encryptMessage'
import generateKeypairs from '../utils/generateKeypairs'
import { generateMessage } from './01_generateMessage'

// Runs through the messaging encryption and decryption of messages
export async function runAll(submitterAccount: Kilt.KiltKeyringPair) {
  console.log('Running messaging flow...')
  const sender = generateKeypairs()
  const senderFullDid = await createCompleteFullDid(
    submitterAccount,
    {
      ...sender
    },
    async ({ data }) => ({
      signature: sender.authentication.sign(data),
      keyType: sender.authentication.type
    })
  )

  const receiver = generateKeypairs()
  const receiverFullDid = await createCompleteFullDid(
    submitterAccount,
    {
      ...receiver
    },
    async ({ data }) => ({
      signature: receiver.authentication.sign(data),
      keyType: receiver.authentication.type
    })
  )
  console.log('Generating the message to encrypt and decrypt')
  const message = await generateMessage(senderFullDid.uri, receiverFullDid.uri)

  console.log(message)

  console.log('Encrypting the message from two users')
  const encryptedMessage = await encryptMessage(
    message,
    senderFullDid.uri,
    receiverFullDid.uri,
    sender.encryption
  )

  console.log(encryptedMessage)

  console.log('Decrypting the message from two users')
  const decryptedMessage = await decryptMessage(
    encryptedMessage,
    receiver.encryption
  )

  console.log(decryptedMessage)
}
