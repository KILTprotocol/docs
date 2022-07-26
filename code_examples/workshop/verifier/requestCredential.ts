const cType = 'email'
const session = getSession(request.headers) // get session from session id
const { encryptionKeyUri } = session

const cTypeHash = getCTypeHash(cType)

const challenge = randomAsHex(24)
setSession({ ...session, requestChallenge: challenge })
const output = await encryptMessageBody(encryptionKeyUri, {
  content: {
    cTypes: [{ cTypeHash }],
    challenge
  },
  type: MessageBodyType.REQUEST_CREDENTIAL
})
