---
id: ctype-creation
title: Create a CType
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import CreateCType from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/01_create_ctype.ts';
import FetchCType from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/02_fetch_ctype.ts';

Every KILT credential has to conform to a CType.
A CType describes which properties a credential has and what type these properties have.
CTypes must be registered on the Spiritnet blockchain.
To learn more about CTypes, see the [CType concept section](/concepts/credentials/ctypes).

The creation of a CType in KILT involves two steps: the definition of a CType and the anchoring of its hash on the KILT blockchain.

:::info DID required
The creator of a CType is required to have a full DID with an attestation key.
To see how to manage DIDs, please refer to the [DID section](../02_dids/03_full_did_update.md).
:::

:::info CTypes are unique
The creation of a new CType requires the CType hash to be unique.
Before writing a new CType, Attesters should check whether there is already an existing CType which matches their requirements.

Visit our [CType index repository](https://github.com/KILTprotocol/ctype-index) for a non-exhaustive list of existing CTypes.
:::

The following snippets show how to create a CType:

<TsJsBlock>
  {CreateCType}
</TsJsBlock>


## Retrieve a CType from its ID

CTypes can be queried directly from any KILT archive nodes.
The following example shows how to query a CType using the SDK:

<TsJsBlock>
  {FetchCType}
</TsJsBlock>
