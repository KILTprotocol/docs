---
id: light-did-creation
title: Create a light DID
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!@site/code-examples/core_features/did/1_did.ts';
import Example2 from '!!raw-loader!@site/code-examples/core_features/did/2_did.ts';

The creation of a light DID require a keystore instance that conforms to the [Keystore interface](https://github.com/KILTprotocol/sdk-js/blob/develop/packages/types/src/Keystore.ts). For the sake of ease of use, the SDK provides a [demo keystore](https://github.com/KILTprotocol/sdk-js/blob/develop/packages/did/src/DemoKeystore/DemoKeystore.ts) which can be used to generate key pairs that are kept in memory and disappear at the end of the program execution.

:::warning
Using the demo keystore in production is highly discouraged as all the keys are kept in the memory and easily retrievable by malicious actors.
:::

The following is an example of how to create a light DID after creating an instance of the demo keystore.

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

For cases in which also an encryption key and some service endpoints need to be added to a light DID:

<CodeBlock className="language-js">
  {Example2}
</CodeBlock>

:::info
In KILT, light DIDs are meant to be used in one of two cases:

1. As *ephemeral, one-time identifiers* when establishing new communication channels with untrusted parties.
2. As an *entrypoint into the KILT ecosystem*, i.e., to obtain the first credentials and getting acquainted with KILT.

As such, they do not support updates of some sort, but they are the same until either they are not unused anymore or they are upgraded to full DIDs.
They are not supposed to be used in complex and/or high-security use cases.
For those, a full DID should be used.
You can visit the [next section](./02_full_did_creation.md) to see how to create and manage full DIDs.
:::