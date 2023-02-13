import * as Kilt from '@kiltprotocol/sdk-js'
import { createAttestation } from '../claiming/03_create_attestation'
import { createCompleteFullDid } from '../did/05_full_did_complete'
import { createDriversLicenseCType } from '../claiming/01_create_ctype'
import { decryptMessage } from './03_decrypt_message'
import { encryptMessage } from './02_encrypt_message'
import generateKeypairs from '../utils/generateKeypairs'
import { generateMessage } from './01_generate_message'
import { requestAttestation } from '../claiming/02_request_attestation'

// Runs through the messaging encryption and decryption of messages
export async function runAll(submitterAccount: Kilt.KiltKeyringPair) {
  console.log('Running messaging flow...')
  console.log('Generating a sender DID')
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
  console.log('Generating a receiver DID')
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
    'Generating a receiver credential for the encrypting and decrypting of the message'
  )
  const ctype = await createDriversLicenseCType(
    senderFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: sender.attestation.sign(data),
      keyType: sender.attestation.type
    })
  )

  const credential = requestAttestation(receiverFullDid, ctype)

  await createAttestation(
    senderFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: sender.attestation.sign(data),
      keyType: sender.attestation.type
    }),
    credential
  )

  console.log('Generating the message to encrypt and decrypt')
  const message = await generateMessage(
    senderFullDid.uri,
    receiverFullDid.uri,
    credential.claim.cTypeHash
  )

  console.log(message)

  console.log('Encrypting the message from two users')
  const encryptedMessage = await encryptMessage(
    message,
    senderFullDid.uri,
    receiverFullDid.uri,
    sender.encryption
  )

  console.log('Decrypting the message from two users')
  await decryptMessage(encryptedMessage, receiver.encryption, credential)

  await Kilt.disconnect()
}
