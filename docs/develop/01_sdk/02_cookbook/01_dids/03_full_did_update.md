---
id: full-did-update
title: Update a Full DID keys and service endpoints
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidUpdate from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/07_full_did_update.ts';

Once anchored to the KILT blockchain, a full DID can be updated.
For instance, the following snippet shows how to use the `authorizeBatch` function to update the authentication key, remove an old service endpoint *and* add a new one for a full DID in the same transaction.

<TsJsBlock>
  {FullDidUpdate}
</TsJsBlock>