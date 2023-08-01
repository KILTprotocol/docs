---
id: key-generation
title: Generate DID keys
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import GenerateKeys from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/00_generate_did_keys.ts';

Creating a Decentralized Identifier (DID) in the KILT network involves generating keying material for authentication and encryption.
In this guide, we'll demonstrate how to create a set of key pairs suitable for generating a KILT DID.

Before we proceed, it's important to note that this example assumes the usage of the `@kiltprotocol/sdk-js` library along with the `@polkadot/util-crypto` library for cryptographic operations.
Additionally, we want to emphasize the significance of securely storing keys and the mnemonic seed phrase.
For production use, ensure that private keys are encrypted and stored safely, while also creating a backup of the mnemonic seed phrase.

In the example provided, we derive different types of keys from a single account using derivation paths.
This approach allows us to generate various key pairs for authentication, key agreement, assertion methods, and capability delegation from one mnemonic seed phrase.
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
