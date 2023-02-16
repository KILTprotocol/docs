import * as Kilt from '@kiltprotocol/sdk-js'
import { createCompleteFullDid } from '../did/05_full_did_complete'
import { createDriversLicenseCType } from '../claiming/01_create_ctype'
import { decryptMessage } from './03_decrypt_message'
import { encryptMessage } from './02_encrypt_message'
import generateKeypairs from '../utils/generateKeypairs'
import { generateMessage } from './01_generate_message'

// Runs through the messaging encryption and decryption of messages
export async function runAll(submitterAccount: Kilt.KiltKeyringPair) {
  console.log('Running messaging flow...')
  console.log(`1 Messaging) Generating a sender's DID`)
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
  console.log(`2 Messaging) Generating a receiver's DID`)
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

  console.log(
    '3 Messaging) Generating a ctype for the message passing'
    )
    const { $id } = await createDriversLicenseCType(
    senderFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: sender.attestation.sign(data),
      keyType: sender.attestation.type
    })
  )

  const cTypeHash = Kilt.CType.idToHash($id)

  console.log('4 Messaging) Generating the message to encrypt and decrypt')
  const message = await generateMessage(
    senderFullDid.uri,
    receiverFullDid.uri,
    cTypeHash
  )

  console.log('5 Messaging) Encrypting the message for sender to receiver')
  const encryptedMessage = await encryptMessage(
    message,
    senderFullDid.uri,
    receiverFullDid.uri,
    sender.encryption
  )

  console.log('6 Messaging) Decrypting the message from sender for the receiver')
  await decryptMessage(encryptedMessage, receiver.encryption)

  console.log('Messagin flow completed!')
}
