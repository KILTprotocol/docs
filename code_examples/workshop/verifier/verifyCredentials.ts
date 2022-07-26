import { ICredential, MessageBodyType } from '@kiltprotocol/types'
import { Credential } from '@kiltprotocol/core'

async function verifyCredentials() {
  const content = await decryptMessageContent<ICredential[]>(
    request,
    MessageBodyType.SUBMIT_CREDENTIAL
  )

  const session = getSession(request.headers) // get session from session id
  if (!session.requestChallenge) {
    throw new Error('No request challenge')
  }
  const challenge = session.requestChallenge

  const credential = Credential.fromCredential(content[0])

  const isAttested = await credential.verify({ challenge })

  return { credential, isAttested }
}
