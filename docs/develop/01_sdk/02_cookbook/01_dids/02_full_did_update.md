---
id: full-did-update
title: Update a DID keys and service endpoints
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidUpdate from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/04_full_did_update.ts';

Once anchored to the KILT blockchain, a DID can be updated.
For instance, the following snippet shows how to use the `authorizeBatch` function to update the authentication key, remove an old service *and* add a new one for a DID in the same transaction.

<TsJsBlock>
  {FullDidUpdate}
</TsJsBlock>
