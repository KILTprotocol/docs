---
id: account-link
title: Link an account to a KILT DID
---

import CodeBlock from '@theme/CodeBlock';
import Example5 from '!!raw-loader!@site/code-examples/core_features/linking/1_account_linking.ts';
import Example6 from '!!raw-loader!@site/code-examples/core_features/linking/2_account_linking.ts';

An account can be linked to a DID in one of two ways:

1. The account to be linked generates a signature over the payload `<Bytes>(SubmitterDid, BlockNumberExpiration)</Bytes>`, which is the default encoding of the PolkadotJS extension:

<CodeBlock className="language-js">
  {Example5}
</CodeBlock>

2. The account submitting the linking transaction is linked to the DID authorizing such transaction:

<CodeBlock className="language-js">
  {Example6}
</CodeBlock>