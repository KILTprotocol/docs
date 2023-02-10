import * as Kilt from '@kiltprotocol/sdk-js'
import { createCompleteFullDid } from '../did/05_full_did_complete'
import { decryptMessage } from './03_decryptMessage'
import { encryptMessage } from './02_encryptMessage'
import generateKeypairs from '../utils/generateKeypairs'
import { generateMessage } from './01_generateMessage'

// Runs through the messaging encryption and decryption of messages
export async function runAll(submitterAccount: Kilt.KiltKeyringPair) {
  console.log('Running messaging flow...')
  const user1 = generateKeypairs()
  const fullDidUser1 = await createCompleteFullDid(
    submitterAccount,
    {
      ...user1
    },
    async ({ data }) => ({
      signature: user1.authentication.sign(data),
      keyType: user1.authentication.type
    })
  )

  const user2 = generateKeypairs()
  const fullDidUser2 = await createCompleteFullDid(
    submitterAccount,
    {
      ...user2
    },
    async ({ data }) => ({
      signature: user2.authentication.sign(data),
      keyType: user2.authentication.type
    })
  )
  console.log('Generating the message to encrypt and decrypt')
  const message = await generateMessage(fullDidUser1.uri, fullDidUser2.uri)

  console.log(message)

  console.log('Encrypting the message from two users')
  const encryptedMessage = await encryptMessage(
    message,
    fullDidUser1.uri,
    fullDidUser2.uri,
    user1.encryption
  )

  console.log(encryptedMessage)

  console.log('Decrypting the message from two users')
  const decryptedMessage = await decryptMessage(
    user2.encryption,
    encryptedMessage
  )

  console.log(decryptedMessage)
}
