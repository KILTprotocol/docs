---
id: did-query
title: Resolve a DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidQuery from '!!raw-loader!@site/code_examples/core_features/did/06_full_did_query.ts';

Querying the state of a DID is called **resolution**.
The entity that queries the DID Document for a given DID, i.e., resolves it, is called a **resolver**.

The KILT SDK provides such a resolver to use with KILT DIDs, as the snippet below shows:

<TsJsBlock>
  {FullDidQuery}
</TsJsBlock>

:::note
The DID resolver can resolve both light and full DIDs.
For a more in-depth explanation about the KILT DID method and resolution, refer to our [specification](https://github.com/KILTprotocol/spec-kilt-did).
:::
