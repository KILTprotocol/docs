---
id: full-did-delete
title: Delete a Full DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidDeleteTs from '!!raw-loader!@site/code_examples/core_features/did/09_full_did_delete.ts';
import FullDidDeleteJs from '!!raw-loader!@site/code_examples/core_features/_js/did/09_full_did_delete.js';
import FullDidDepositReclaimTs from '!!raw-loader!@site/code_examples/core_features/did/10_full_did_deposit_reclaim.ts';
import FullDidDepositReclaimJs from '!!raw-loader!@site/code_examples/core_features/_js/did/10_full_did_deposit_reclaim.js';

Once not needed anymore, it is recommended to remove the DID details from the KILT blockchain.
The following snippet shows how to do it:

<TsJsBlock tsSnippet={FullDidDeleteTs} jsSnippet={FullDidDeleteJs} />

:::warning
Please note that once deleted, a full DID becomes unusable and cannot be created anymore, meaning that all Credentials obtained with that DID must be re-obtained with a different one if needed.
:::

## Claim back a DID deposit

Claiming back the deposit of a DID is semantically equivalent to deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require any interaction with the DID subject:

<TsJsBlock tsSnippet={FullDidDepositReclaimTs} jsSnippet={FullDidDepositReclaimJs} />