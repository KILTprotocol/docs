---
id: full-did-batch
title: Sign Extrinsics with a Full DID
---

import CodeBlock from '@theme/CodeBlock';
import FullDidBatch from '!!raw-loader!@site/code_examples/core_features/did/07_full_did_batch.ts';

Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID subject.
For instance, a batch could include the creation of two different CTypes in the same operation.
This would save the user the time of producing one additional block and generating one additional signature, as multiple extrinsics are batched and signed at once, and they are submitted and executed in the same block.
For more information, refer to the [official Substrate documentation](https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html).

An example of a batched creation of two CTypes using a `DidBatchBuilder` is provided below.

<CodeBlock className="language-ts">
  {FullDidBatch}
</CodeBlock>