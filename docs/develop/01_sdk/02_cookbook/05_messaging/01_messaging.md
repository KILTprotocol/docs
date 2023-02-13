---
id: messaging_book
title: Generate a Message
---

import SnippetBlock from '@site/src/components/SnippetBlock';

import GenerateMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/01_generate_message.ts';
import EncryptMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/02_encrypt_message.ts';
import DecryptMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/03_decrypt_message.ts';

KILT uses a custom [Messaging protocol](../../../../concepts/06_messaging.md) that enables users of the KILT protocol to communicate via [unicast network](https://en.wikipedia.org/wiki/Unicast).
The message types are defined by the actions that will be resolved by the receiver.
Each of the messages sent are encrypted using the DID key agreement keys (see DID keys).
The keys of both receiver and sender must be verifiable by querying the given DID of both parties.

A message is formed from a message body that is a specific type along with the DID's URI senders and receivers.
There are several types of structure for the demo will be generating a `request-credential` type.
The message structure is checked and validated on the protocol level to ensure the users are sending correctly structured messages.

<SnippetBlock
  className="language-ts"
>
  {GenerateMessage}
</SnippetBlock>

## Encryption

The messages data are encrypted and decrypted using nacl's 'x25519-xsalsa20-poly1305' algorithm, which provides repudiable authenticated encryption based on an x25519 key agreement.
The DID holds the keys for the encryption and decryptions.
These keys are called `KeyAgreement` keys this key can be also known as encryption keys.
The different keys are found within the [DID Spec](https://www.w3.org/TR/did-core/#verification-relationships).

The content of the object is converted from a serialised string to a unit 8 array, which is passed into the callback function along with the senders DID and key agreement public key of the receiver.

<SnippetBlock
  className="language-ts"
>
  {EncryptMessage}
</SnippetBlock>

The encrypted data is converted into a Hex string which is known as the ciphertext along with the nonce that was generated during encryption.

## Decryption

The decryption takes the encrypted message and decypher the content.
The function takes a credential from the receiver and checks it against the request credentials content to see if they have a valid credential to send back.

<SnippetBlock
  className="language-ts"
>
  {DecryptMessage}
</SnippetBlock>
