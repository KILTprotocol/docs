---
id: full-did-update
title: Update a Full DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidUpdate from '!!raw-loader!@site/code_examples/core_features/did/06_full_did_update.ts';

Once anchored to the KILT blockchain, a full DID can be updated.
For instance, the following snippet shows how to use the `authorizeBatch` function to update the authentication key *and* remove a service endpoint for a full DID in the same transaction.

<TsJsBlock>
  {FullDidUpdate}
</TsJsBlock>