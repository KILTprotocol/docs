---
id: web3name-release
title: Release a web3name
---

import CodeBlock from '@theme/CodeBlock';
import Release from '!!raw-loader!@site/code_examples/core_features/web3names/04_release.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/core_features/web3names/05_reclaim_deposit.ts';

If a web3name is no longer needed, either the DID owner or the deposit payer can release it, with the previously reserved deposit going back to the original payer.

In the case of the DID owner willing to release the web3name, the following snippet provides a reference implementation on how to achieve that.

<CodeBlock className="language-ts">
  {Release}
</CodeBlock>

If the web3name is being released by the deposit payer, the signature of the DID owner is not required; a regular signed extrinsic can be submitted to the KILT blockchain, as shown below.

<CodeBlock className="language-ts">
  {ReclaimDeposit}
</CodeBlock>