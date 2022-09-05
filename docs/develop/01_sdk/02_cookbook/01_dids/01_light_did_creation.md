---
id: light-did-creation
title: Create a Light DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import LightDidSimpleTs from '!!raw-loader!@site/code_examples/core_features/did/01_light_did_simple.ts';
import LightDidSimpleJs from '!!raw-loader!@site/code_examples/core_features/_js/did/01_light_did_simple.js';
import LightDidCompleteTs from '!!raw-loader!@site/code_examples/core_features/did/02_light_did_complete.ts';
import LightDidCompleteJs from '!!raw-loader!@site/code_examples/core_features/_js/did/02_light_did_complete.js';

The creation of a light DID requires the generation of some keying material for keys that are to be used for authentication, encryption, attestation, or delegation.
For the sake of ease of use, the example snippets below show how to use a Keyring, provided also by the `@polkadot/api` library, to generate key pairs that are kept in memory and disappear at the end of the program execution, unless saved to some persistent storage.

:::warning
Using the default keyring in production is highly discouraged as all the keys are kept in the memory and easily retrievable by malicious actors.
:::

The following is an example of how to create a light DID after creating an instance of the demo keyring.

<TsJsBlock tsSnippet={LightDidSimpleTs} jsSnippet={LightDidSimpleJs} />

For cases in which also an encryption key and some service endpoints need to be added to a light DID:

<TsJsBlock tsSnippet={LightDidCompleteTs} jsSnippet={LightDidCompleteJs} />

:::info
In KILT, light DIDs are meant to be used in one of two cases:

1. As *ephemeral, one-time identifiers* when establishing new communication channels with untrusted parties.
2. As an *entrypoint into the KILT ecosystem*, i.e., to obtain the first Credentials and getting acquainted with KILT.

As such, light DIDs do not support updates of any sort, but they retain the same identifier until they are upgraded to full DIDs.
They are not supposed to be used in complex and/or high-security use cases.
For those, a full DID should be used.
You can visit the [next section](./02_full_did_creation.md) to see how to create and manage full DIDs.
:::