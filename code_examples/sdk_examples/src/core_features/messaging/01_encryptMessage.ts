import * as Kilt from '@kiltprotocol/sdk-js'
import { useEncryptionSignCallback } from './core_features/signCallback/useEncryptionSignCallback'
import generateKeypairs from './core_features/utils/generateKeypairs'

const handle = generateKeypairs(
  'prevent modify win search fatigue panther glue message cloud review arena outside'
)

async function encryptMessage(
  receiveUri: Kilt.DidUri,
  senderUri: Kilt.DidUri,
  keyAgreement: Kilt.KiltEncryptionKeypair
) {
  await Kilt.connect('wss://peregrine.kilt.io')
  const challenge = Kilt.Utils.UUID.generate()

  Kilt.CType.isICType(
    '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac'
  )

  Kilt.Did.validateUri(
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )

  const requestCredentialContent = {
    cTypeHash:
      '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac' as `0x${string}`,
    trustedAttesters: [
      'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g' as Kilt.DidUri
    ]
  }

  const messageBody: Kilt.IRequestCredential = {
    type: 'request-credential',
    content: { cTypes: [requestCredentialContent], challenge: challenge }
  }

  const message = Kilt.Message.fromBody(messageBody, senderUri, receiveUri)

  if (!message) {
    console.log('message', message)
    throw new Error('Invalid message')
  }

  const senderDidDocument = await Kilt.Did.resolve(senderUri)

  const receiverDidDocument = await Kilt.Did.resolve(receiveUri)

  const receiverKeyAgreement =
    `${receiveUri}${receiverDidDocument.document.keyAgreement?.[0].id}` as Kilt.DidResourceUri
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
}

encryptMessage(
  'did:kilt:4rTp8S2uNFxshHPKsm1gRdUQRU1RwSV4HGnVQmDuwwpaMFVm',
  'did:kilt:4onLir6gKafuugdFW8BhLhUA3kcK8ihriefB2TvVJHLoxhgK',
  handle.encryption
)
