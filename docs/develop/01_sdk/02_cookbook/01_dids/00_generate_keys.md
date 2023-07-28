---
id: key-generation
title: Generate DID keys
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import GenerateKeys from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/00_generate_did_keys.ts';

Creating a DID ([Full DID Creation](./02_full_did_creation.md)) requires the generation of some keying material for keys that are to be used for authentication and encryption.

The following is an example of how to create a a set of keypairs suitable for generating a KILT DID from it.

<TsJsBlock>
  {GenerateKeys}
</TsJsBlock>

:::info
This example doesn't show how to store the keys.
It is recommended to store the keys in a secure manner, e.g. only storing the private keys encrypted on disk.
The mnemonic seed phrase can be used to regenerate the keys, so it is recommended to also store the mnemonic in a secure manner and create a backup of it.
:::