---
id: session
title: Setting Up the Communication Session
---

The first step in creating your dApp is to set up the communication session. The purpose of the session is to pass encrypted messages back and forth between your dApp and the extension.

## DApp indicates credential API support

In order to indicate its support of the extension's API, the dApp creates the `window.kilt` object as soon as possible. For example:

```html
<head>
  <script>
    window.kilt = {}
  </script>
</head>
```

## DApp introduces itself

The dApp introduces itself to the extension with its name, encryption key URI, and a challenge. A copy of the challenge should be stored on the server side. For example:

```ts
import { FullDidDetails } from '@kiltprotocol/did'

const did = 'did:kilt:example'
const dAppName = 'Your dApp Name'

const fullDid = await FullDidDetails.fromChainInfo(did)

const dAppEncryptionKeyUri = fullDid.assembleKeyUri(fullDid.encryptionKey.id)

// generate and store challenge on the server side for the next step
const challenge = await fetch('/challenge')

const session = await window.kilt.sporran.startSession(
  dAppName,
  dAppEncryptionKeyUri,
  challenge
)
```

At this point the extension has received the introduction of the dApp and returned a new session along with the encrypted challenge.

## DApp checks the session values

The extension has provided the session along with an encrypted challenge. The dApp decrypts the challenge and verifies that it matches the original challenge. This should happen on the server side:

```ts
import { Crypto } from '@kiltprotocol/utils'
import { DidResolver } from '@kiltprotocol/did'

const { encryptionKeyUri, encryptedChallenge, nonce } = session

const encryptionKey = await DidResolver.resolveKey(encryptionKeyUri)

const { data } = await encryptionKeystore.decrypt({
  data: Crypto.coToUInt8(encryptedChallenge),
  nonce: Crypto.coToUInt8(nonce),
  publicKey: keyAgreement.publicKey, // derived from your seed phrase
  peerPublicKey: encryptionKey.publicKey,
  alg: 'x25519-xsalsa20-poly1305',
})

const decryptedChallenge = Crypto.u8aToHex(data)

// Compare the decrypted challenge to the challenge you stored earlier
if (decryptedChallenge === originalChallenge) {
  return session
}
```

That's it! The communication session has been securely established and you're ready to start sending and receiving messages.
