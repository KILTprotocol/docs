---
id: light-did-creation
title: Create a Light DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import LightDidSimple from '!!raw-loader!@site/code_examples/core_features/did/01_light_did_simple.ts';
import LightDidComplete from '!!raw-loader!@site/code_examples/core_features/did/02_light_did_complete.ts';

The creation of a light DID requires the generation of some keying material for keys that are to be used for authentication and encryption.
For the sake of ease of use, the example snippets below show how to use keys generated with a `Keyring`, provided also by the `@polkadot/api` library, to generate key pairs that are kept in memory and disappear at the end of the program execution, unless saved to some persistent storage.

:::warning
Using the default keyring in production is highly discouraged as all the keys are kept in the memory and are more vulnerable to attacks by malicious actors.
:::

The following is an example of how to create a light DID after creating an authentication keypair.

<TsJsBlock>
  {LightDidSimple}
</TsJsBlock>

For cases in which an encryption key and some service endpoints also need to be added to a light DID:

<TsJsBlock>
  {LightDidComplete}
</TsJsBlock>

:::info
In KILT, light DIDs are meant to be used in one of two cases:

1. As *ephemeral, one-time identifiers* when establishing new communication channels with untrusted parties.
2. As an *entrypoint into the KILT ecosystem*, i.e., to obtain one's first credentials and get acquainted with KILT.

As such, light DIDs do not support updates of any sort, but they retain the same identifier until they are upgraded to full DIDs.
They are not intended for use in complex and/or high-security use cases.
In those situations, a full DID should be used.
Visit the [next section](./02_full_did_creation.md) to see how to create and manage full DIDs.
:::