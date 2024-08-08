---
id: messaging_book
title: Generate a Message
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import GenerateRequestCredentialMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/01_generate_request_credential_message.ts';
import EncryptMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/02_encrypt_message.ts';
import DecryptMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/03_decrypt_message.ts';

KILT defines a [unicast](https://en.wikipedia.org/wiki/Unicast) messaging protocol

Each of the messages sent is encrypted using the [DID key agreement key](https://www.w3.org/TR/did-core/#key-agreement).
A message consists of the sender's DID URI, the receiver's DID URI, the message type and the body.
There are multiple different message types, each of them with a different structure and containing different information.
In this example we are going to build a `request-credential` message.
The message structure is checked and validated on by the KILT SDK to ensure the users are sending correctly structured messages.

The following example here will generate a message by constructing the message content.
The message content includes a valid `cTypeHash` and a list of `trusted attesters`.
The message requires a `messageBody`, sender and receiver uri.

<TsJsBlock>
  {GenerateRequestCredentialMessage}
</TsJsBlock>

## Encryption

The messages data are encrypted and decrypted using [nacl's](https://github.com/dchest/tweetnacl-js) 'x25519-xsalsa20-poly1305' algorithm, which provides repudiable authenticated encryption based on an x25519 key agreement protocol.
The DID holds keys for the encryption and decryption.
The key is called `KeyAgreement` keys.
They may also be known as encryption keys.

The content of the object is converted from a serialized string to a byte array, which is passed into the callback function along with the sender's DID and key agreement public key of the receiver.

The following example here will take a generated message and encrypt the message for the receiver to decrypt later.

<TsJsBlock>
  {EncryptMessage}
</TsJsBlock>

The encrypted data is converted into a hex string which is known as the ciphertext along with the nonce that was generated during encryption.

## Decryption

The decryption takes the encrypted message and decyphers its content.
The following example here will take a encrypted message and decrypt using the private key of the receiver.
Once decrypted, it checks the content is a valid message.
The decrypted data can be used for additional steps.
After decrypting, the receiver may wish to present a credential from the trusted attester list with a given CType.

<TsJsBlock>
  {DecryptMessage}
</TsJsBlock>
