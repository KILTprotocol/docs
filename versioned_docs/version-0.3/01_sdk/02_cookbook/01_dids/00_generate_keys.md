---
id: key-generation
title: Generate DID keys
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import GenerateKeys from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/did/00_generate_did_keys.ts';

Creating a Decentralized Identifier (DID) on the KILT network involves generating keying material for authentication and encryption.
This guide shows how to create a set of key pairs suitable for generating a KILT DID.

Before proceeding, it's important to note that this example assumes the usage of the `@kiltprotocol/sdk-js` library along with the `@polkadot/util-crypto` library for cryptographic operations.

Additionally, it's important to securely store keys and the mnemonic seed phrase.
For production use, ensure that private keys are encrypted and stored safely, while also creating a backup of the mnemonic seed phrase.

## Derivation paths

The code example below derives different types of keys from a single account using derivation paths.

A derivation path is a way to derive a new key from a parent key and is a sequence of indices separated by a delimiter.
The most common delimiter is `/` (forward slash).

KILT uses the same derivation paths as the underlying Polkadot libraries, using soft and hard key derivation.

## Soft derivation

A soft derivation allows someone to potentially figure out the initial account's private key if they know the derived account's private key.
It is also possible to determine that different accounts generated from the same seed are linked to that seed.

A `/` (single slash) indicates a soft derivation path.
For example, `deal rice sunny now boss cluster team use wreck electric wing deliver/0` is a soft derivation path.

## Hard derivation

A hard derivation path does not allow someone to do either of these.
Even if you know a derived private key, it's not possible to figure out the private key of the root address, and it's impossible to prove that the first account is linked with the second.

A `//` (double slash) indicates a hard derivation path.
For example, `deal rice sunny now boss cluster team use wreck electric wing deliver//0` is a hard derivation path.

## Creating new accounts from a seed

This approach allows you to generate various key pairs for authentication, key agreement, assertion methods, and capability delegation from one mnemonic seed phrase.

To create another account using the same seed, change the number at the end of the string. For example, `/1`, `/2`, and `/3` create different derived accounts.

Using derivation paths simplifies key management, ensuring that a single mnemonic seed serves as the basis for multiple keys associated with a DID.
This method improves efficiency while maintaining security.
However, it's essential to handle and store private keys securely to prevent unauthorized access and ensure the overall integrity and privacy of the decentralized identity system.

Below is an example code snippet illustrating the key pair generation for a KILT DID:

<TsJsBlock>
  {GenerateKeys}
</TsJsBlock>

:::info
This example doesn't show how to store the keys.
It is recommended to store the keys in a secure manner, e.g. only storing the private keys encrypted on disk.
The mnemonic seed phrase can be used to regenerate the keys, so it is recommended to also store the mnemonic in a secure manner and create a backup of it.
:::
