---
id: request
title: Verifier Requests a Credential
---

The job of the verifier is to request and verify credentials.
Your verifier can request one or more credentials of a specific CType.
For example, if you want to verify an email credential, you would use the email CType:

```ts
const emailCType = CType.fromCType({
  schema: {
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: 'Email',
    properties: {
      Email: {
        type: 'string',
      },
    },
    type: 'object',
    $id: 'kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac',
  },
  owner: null,
  hash: '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac',
})
```

First, generate a request challenge and store it on the server side:

```ts
import { randomAsHex } from '@polkadot/util-crypto'

// store somewhere in the backend
const requestChallenge = randomAsHex(24)
```

Then construct the `REQUEST_CREDENTIAL` message using the message body, sender DID and receiver DID:

```ts
import { MessageBodyType } from '@kiltprotocol/types'
import { Message } from '@kiltprotocol/messaging'
import { Utils } from '@kiltprotocol/did'

const messageBody = {
  content: {
    cTypes: [{ cTypeHash: emailCType.hash }],
    challenge: requestChallenge,
  },
  type: MessageBodyType.REQUEST_CREDENTIAL,
}

const did = 'did:kilt:example'
const { did: receiverDid } = Utils.parseDidUri(encryptionKeyUri)

const message = new Message(messageBody, did, receiverDid)
```

Next, encrypt the message:

```ts
const fullDid = await FullDidDetails.fromChainInfo(did)

const encryptedMessage = message.encrypt(
  fullDid.encryptionKey.id,
  fullDid,
  encryptionKeystore,
  session.encryptionKeyUri
)
```

Finally, send the encrypted message to the extension:

```ts
await session.send(encryptedMessage)
```
