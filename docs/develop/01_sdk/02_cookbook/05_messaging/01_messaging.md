---
id: messaging_book
title: Generate a Message
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import GenerateMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/01_generate_message.ts';
import EncryptMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/02_encrypt_message.ts';
import DecryptMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/03_decrypt_message.ts';

KILT defines a [unicast](https://en.wikipedia.org/wiki/Unicast) [messaging protocol](../../../../concepts/06_messaging.md).
The message types are defined by the actions that will be resolved by the receiver.
Each of the messages sent are encrypted using the DID key agreement keys (see DID keys).
The key agreement key of a DID can be queried from the KILT blockchain.

A message consists of the senders DID URI, the receivers DID URI, the message type and the body.
There are multiple different message types.
In this example we are going to build a `request-credential` message.
The message structure is checked and validated on by the KILT SDK to ensure the users are sending correctly structured messages.

<TsJsBlock>
  {GenerateMessage}
</TsJsBlock>

## Encryption

The messages data are encrypted and decrypted using [nacl's](https://github.com/dchest/tweetnacl-js) 'x25519-xsalsa20-poly1305' algorithm, which provides repudiable authenticated encryption based on an x25519 key agreement.
The DID holds the keys for the encryption and decryptions.
These keys are called `KeyAgreement` keys this key can be also known as encryption keys.
The different keys are found within the [DID Spec](https://www.w3.org/TR/did-core/#verification-relationships).

The content of the object is converted from a serialized string to a byte array, which is passed into the callback function along with the senders DID and key agreement public key of the receiver.

<TsJsBlock>
  {EncryptMessage}
</TsJsBlock>

The encrypted data is converted into a Hex string which is known as the ciphertext along with the nonce that was generated during encryption.

## Decryption

The decryption takes the encrypted message and decypher the content.
The function takes a credential from the receiver and checks it against the request credentials content to see if they have a valid credential to send back.

<TsJsBlock>
  {DecryptMessage}
</TsJsBlock>
