---
id: verify
title: Verifier Verifies a Credential
---

After sending the `REQUEST_CREDENTIAL` message to the extension, the verifier listens for a message of type `SUBMIT_CREDENTIAL` in response.

When a message is received, decrypt it and check that it has the expected type:

```ts
import { Message } from '@kiltprotocol/messaging'
import { IEncryptedMessage, MessageBodyType } from '@kiltprotocol/types'

await session.listen(async (message: IEncryptedMessage) => {
  const did = 'did:kilt:example'
  const fullDid = await FullDidDetails.fromChainInfo(did)

  const decryptedMessage = await Message.decrypt(
    message,
    encryptionKeystore,
    fullDid
  )

  if (decryptedMessage.body.type !== MessageBodyType.SUBMIT_CREDENTIAL) {
    throw new Error('Unexpected message type')
  }

  verify(decryptedMessage.content)
})
```

Finally the message content (the credential that was requested) can be verified using the request challenge that was previously stored on the server side.
This function will return `true` if the verification is successful.

```ts
import { ICredential } from '@kiltprotocol/types'

function verify(credential: ICredential[]) {
  const credential = Credential.fromCredential(credential[0])

  return await credential.verify({ challenge: requestChallenge })
}
```

That's it! Your verifier has successfully requested and verified a credential.
