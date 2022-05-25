---
id: full-did-delete
title: Delete a full DID
---

import CodeBlock from '@theme/CodeBlock';
import Example6 from '!!raw-loader!@site/code-examples/core_features/did/6_did.ts';
import Example7 from '!!raw-loader!@site/code-examples/core_features/did/7_did.ts';

Once not needed anymore, it is recommended to remove the DID details from the KILT blockchain. The following snippet shows how to do it:

<CodeBlock className="language-js">
  {Example6}
</CodeBlock>

:::warning
Please note that once deleted, a full DID becomes unusable and cannot be created anymore, meaning that all credentials obtained with that DID must be re-obtained with a different one if needed.
:::

## Claim back a DID deposit

Claiming back the deposit of a DID is semantically equivalent to deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require any interaction with the DID subject:

<CodeBlock className="language-js">
  {Example7}
</CodeBlock>