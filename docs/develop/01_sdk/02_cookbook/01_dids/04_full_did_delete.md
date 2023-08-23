---
id: full-did-delete
title: Delete a Full DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidDelete from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/08_full_did_delete.ts';
import FullDidDepositReclaim from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/10_full_did_deposit_reclaim.ts';

Once a DID is no longer needed, it is recommended to deactivate it by removing it from the KILT blockchain.
The following snippet shows how to do it:

<TsJsBlock>
  {FullDidDelete}
</TsJsBlock>

:::warning
Please note that once deleted, a full DID becomes unusable and cannot be re-created anymore.
This means that all credentials obtained with that DID are no longer valid and must be obtained with a different DID if needed.
:::

## Claim back a DID deposit

Claiming back the deposit of a DID is semantically equivalent to deactivating and deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require a signature by the DID subject:

<TsJsBlock>
  {FullDidDepositReclaim}
</TsJsBlock>
