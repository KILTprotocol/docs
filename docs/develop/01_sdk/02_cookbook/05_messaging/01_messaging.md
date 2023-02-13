---
id: messaging_book
title: Generate a Message
---

import SnippetBlock from '@site/src/components/SnippetBlock';

import GenerateMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/01_generate_message.ts';
import EncryptMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/02_encrypt_message.ts';
import DecryptMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/03_decrypt_message.ts';

Messaging enables users of the KILT protocol to communicate via a 1:1 messaging protocol. The message types are defined by the actions that will be resolved by the receiver. Each of the messages sent are encrypted using the DID key agreement keys (see DID keys). The keys of both receiver and sender must be verifiable by querying the given DID of both parties.

Messages are constructed with a specific structure defined in the messaging types. This structure is checked and validated on the protocol level to ensure the users are sending correctly structured messages. There are several types of structure for the demo will be generating a `request-credential` type.

<SnippetBlock
  className="language-ts"
>
  {GenerateMessage}
</SnippetBlock>

## Encryption

The messages data are encrypted and decrypted using nacl's 'x25519-xsalsa20-poly1305' algorithm, which provides repudiable authenticated encryption based on an x25519 key agreement. The DID holds the keys for the encryption and decryptions. These keys are called `KeyAgreement` keys (reference the keys). Sometimes known as encryption keys.

The content of the object is converted from a serialised string to a unit 8 array, which is passed into the callback function along with the senders DID and key agreement public key of the receiver.

<SnippetBlock
  className="language-ts"
>
  {EncryptMessage}
</SnippetBlock>

The encrypted data is converted into a Hex string which is known as the ciphertext along with the nonce that was generated during encryption.

## Decryption

These are required for decryption.

<SnippetBlock
  className="language-ts"
>
  {DecryptMessage}
</SnippetBlock>
