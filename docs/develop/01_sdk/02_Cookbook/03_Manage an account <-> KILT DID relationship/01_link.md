---
id: account-link
title: Link an account to a KILT DID
---

import CodeBlock from '@theme/CodeBlock';
import Example5 from '!!raw-loader!@site/code-examples/core_features/linking/1_account_linking.ts';
import Example6 from '!!raw-loader!@site/code-examples/core_features/linking/2_account_linking.ts';

Beyond linking a Web3 name, KILT allows DID owners to link multiple accounts under the same DID.
These accounts are not specific to the KILT blockchain but can reference any chain within the Kusama ecosystem.
Each account <-> DID link requires the payment of a small deposit, which is returned whenever the link is removed.

For DIDs that have also claimed a Web3 name, the linking feature opens up the way to a host of possibilities, e.g., showing the Web3 name of a collator's account on the [KILT stakeboard](https://stakeboard.kilt.io/).

An account can be linked to a DID in one of two ways:

1. The account to be linked generates a signature over the payload `<Bytes>(SubmitterDid, BlockNumberExpiration)</Bytes>`, which is the default encoding of the PolkadotJS extension:

<CodeBlock className="language-js">
  {Example5}
</CodeBlock>

2. The account submitting the linking transaction is linked to the DID authorizing such transaction:

<CodeBlock className="language-js">
  {Example6}
</CodeBlock>