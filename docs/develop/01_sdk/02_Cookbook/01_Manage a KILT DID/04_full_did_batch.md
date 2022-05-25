---
id: full-did-batch
title: Sign extrinsics with a full DID
---

import CodeBlock from '@theme/CodeBlock';
import Example9 from '!!raw-loader!@site/code-examples/core_features/did/9_did.ts';

Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID subject.
For instance, a batch could include the creation of two different CTypes in the same operation.
This would save the user one block time and one signature, as multiple extrinsics are batched and signed once, and they are submitted and executed in the same block.
For more information, refer to the [official Substrate documentation](https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html).

An example of a batched creation of two CTypes using a `DidBatchBuilder` is provided below.

<CodeBlock className="language-js">
  {Example9}
</CodeBlock>