---
id: ctype-creation
title: Create a CType
---

import CodeBlock from '@theme/CodeBlock';
import CreateCType from '!!raw-loader!@site/code_examples/core_features/claiming/01_create_ctype.ts';

The creation of a CType in KILT involves two steps: the definition of a CType and the anchoring of its hash on the KILT blockchain.

:::info
The creator of a CType is required to have a full DID with an attestation key.
To see how to manage DIDs, please refer to the [DID section](../01_dids/03_full_did_update.md).
:::

The following snippets shows how:

<CodeBlock className="language-js">
  {CreateCType}
</CodeBlock>

:::note
The creation of a new CType requires the CType hash to be unique.
Before writing a new CType, attesters should check whether there is already an existing CType which matches their requirements.
Visit our [CType index repository](https://github.com/KILTprotocol/ctype-index) for a non-exhaustive list of existing CTypes. 
:::