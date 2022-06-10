---
id: full-did-delete
title: Delete a Full DID
---

import CodeBlock from '@theme/CodeBlock';
import FullDidDelete from '!!raw-loader!@site/code_examples/core_features/did/09_full_did_delete.ts';
import FullDidDepositReclaim from '!!raw-loader!@site/code_examples/core_features/did/10_full_did_deposit_reclaim.ts';

Once not needed anymore, it is recommended to remove the DID details from the KILT blockchain.
The following snippet shows how to do it:

<CodeBlock className="language-ts">
  {FullDidDelete}
</CodeBlock>

:::warning
Please note that once deleted, a full DID becomes unusable and cannot be created anymore, meaning that all Credentials obtained with that DID must be re-obtained with a different one if needed.
:::

## Claim back a DID deposit

Claiming back the deposit of a DID is semantically equivalent to deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require any interaction with the DID subject:

<CodeBlock className="language-ts">
  {FullDidDepositReclaim}
</CodeBlock>