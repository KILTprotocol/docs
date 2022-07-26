
import { DidResourceUri } from '@kiltprotocol/types';

interface PubSubSession {
    encryptionKeyId: DidResourceUri;
    encryptedChallenge: string;
    nonce: string;
  }
  
  interface InjectedWindowProvider {
    startSession: (
      dAppName: string,
      dAppEncryptionKeyUri: DidResourceUri,
      challenge: string,
    ) => Promise<PubSubSession>;
    name: string;
    version: string;
    specVersion: '0.1';
  }
  
  export const apiWindow = window as unknown as {
    kilt: Record<string, InjectedWindowProvider>;
  };

  export type Session = PubSubSession & {
    sessionId: string;
    name: string;
    wallet: string;
  };

  

  export async function getSession(
    provider: InjectedWindowProvider,
    wallet: string,
  ): Promise<Session> {
    if (!provider) {
      throw new Error('No provider');
    }
    try {
      window.sessionStorage.setItem('wallet', wallet);
  
      // get dAppEncryptionKeyUri, challenge, challenge from backend

      const dAppName = 'Your dApp Name ';
  
      const session = await provider.startSession(
        dAppName,
        dAppEncryptionKeyUri, // from backend
        challenge, // from backend
      );
  
      async function send(message: CompatibleMessage): Promise<void> {
        message.receiverKeyId = message.receiverKeyUri;
        message.senderKeyId = message.senderKeyUri;
        return session.send(message);
      }
  
      async function listen(
        callback: (message: CompatibleMessage) => Promise<void>,
      ) {
        return session.listen(async (message: CompatibleMessage) => {
          message.senderKeyUri = message.senderKeyUri || message.senderKeyId;
          message.receiverKeyUri =
            message.receiverKeyUri || message.receiverKeyId;
          return callback(message);
        });
      }

      
      const { name } = provider;
  
      return { ...session,sessionId, name, wallet };
    } catch (exception) {
      throw exception;
    }
  }
