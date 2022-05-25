---
id: account-unlink
title: Unlink an account from a KILT DID
---

import CodeBlock from '@theme/CodeBlock';
import Example4 from '!!raw-loader!@site/code-examples/core_features/linking/4_account_linking.ts';
import Example5 from '!!raw-loader!@site/code-examples/core_features/linking/5_account_linking.ts';
import Example6 from '!!raw-loader!@site/code-examples/core_features/linking/6_account_linking.ts';

Similarly to how a new account <-> DID link is created, removing a link can happen in one of three ways:

1. The DID owner submits a transaction indicating which account to unlink:

<CodeBlock className="language-js">
  {Example4}
</CodeBlock>

2. The linked account submits a transaction indicating that the link with the DID should be removed:

<CodeBlock className="language-js">
  {Example5}
</CodeBlock>

3. The deposit payer submits a transaction indicating that they want to reclaim their deposit, which in turn removes the existing link between the specified account and DID:

<CodeBlock className="language-js">
  {Example6}
</CodeBlock>