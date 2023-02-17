---
id: ctype-creation
title: Create a CType
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import CreateCType from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/01_create_ctype.ts';
import FetchCType from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/02_fetch_ctype.ts';

The creation of a CType in KILT involves two steps: the definition of a CType and the anchoring of its hash on the KILT blockchain.

:::info
The creator of a CType is required to have a full DID with an attestation key.
To see how to manage DIDs, please refer to the [DID section](../01_dids/03_full_did_update.md).
:::

The following snippets show how to create a CType:

<TsJsBlock>
  {CreateCType}
</TsJsBlock>

:::note
The creation of a new CType requires the CType hash to be unique.
Before writing a new CType, Attesters should check whether there is already an existing CType which matches their requirements.
Visit our [CType index repository](https://github.com/KILTprotocol/ctype-index) for a non-exhaustive list of existing CTypes.
:::

## Retrieve a CType from its ID

As of the [KILT runtime 1.9.0][kilt-runtime-1.9.0], CTypes can be queried directly from any KILT archive nodes.

This is possible because the creation of a new CType now writes on chain its creation block number, that can be used as a "pointer" to query the full block content, including its list of transactions.

The SDK makes it easy to use this feature:

<TsJsBlock>
  {FetchCType}
</TsJsBlock>

[kilt-runtime-1.9.0]: https://github.com/KILTprotocol/kilt-node/releases/tag/1.9.0