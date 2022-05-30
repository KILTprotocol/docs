---
id: full-did-update
title: Update a full DID
---

import CodeBlock from '@theme/CodeBlock';
import FullDidUpdate from '!!raw-loader!@site/code_examples/core_features/did/06_full_did_update.ts';

Once anchored to the KILT blockchain, a full DID can be updated.
For instance, the following snippet shows how to use the `FullDidUpdateBuilder` to update the authentication key to a new `ed25519` key and remove a service endpoint for a full DID.

<CodeBlock className="language-js">
  {FullDidUpdate}
</CodeBlock>