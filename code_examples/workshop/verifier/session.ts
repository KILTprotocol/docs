import { DidResourceUri, IEncryptedMessage } from '@kiltprotocol/types'

interface PubSubSession {
  listen: (
    callback: (message: IEncryptedMessage) => Promise<void>
  ) => Promise<void>
  close: () => Promise<void>
  send: (message: IEncryptedMessage) => Promise<void>
  encryptionKeyId: DidResourceUri
  encryptedChallenge: string
  nonce: string
}

interface InjectedWindowProvider {
  startSession: (
    dAppName: string,
    dAppEncryptionKeyUri: DidResourceUri,
    challenge: string
  ) => Promise<PubSubSession>
  name: string
  version: string
  specVersion: '0.1'
}

export const apiWindow = window as unknown as {
  kilt: Record<string, InjectedWindowProvider>
}

export type Session = PubSubSession & {
  sessionId: string
  name: string
  wallet: string
}

export async function getSession(
  provider: InjectedWindowProvider,
  wallet: string
): Promise<Session> {
  if (!provider) {
    throw new Error('No provider')
  }

  window.sessionStorage.setItem('wallet', wallet)

  // get dAppEncryptionKeyUri, challenge, challenge from backend

  const dAppName = 'Your dApp Name '

  const session = await provider.startSession(
    dAppName,
    dAppEncryptionKeyUri, // from backend
    challenge // from backend
  )

  async function send(message: IEncryptedMessage): Promise<void> {
    message.receiverKeyId = message.receiverKeyUri
    message.senderKeyId = message.senderKeyUri
    return session.send(message)
  }

  async function listen(
    callback: (message: IEncryptedMessage) => Promise<void>
  ) {
    return session.listen(async (message: IEncryptedMessage) => {
      message.senderKeyUri = message.senderKeyUri || message.senderKeyId
      message.receiverKeyUri = message.receiverKeyUri || message.receiverKeyId
      return callback(message)
    })
  }

  const { name } = provider

  return { ...session, listen, send, sessionId, name, wallet }
}
