---
id: account-unlink
title: Unlink an account from a KILT DID
---

import CodeBlock from '@theme/CodeBlock';
import Example8 from '!!raw-loader!@site/code-examples/core_features/linking/4_account_linking.ts';
import Example9 from '!!raw-loader!@site/code-examples/core_features/linking/5_account_linking.ts';

Similarly to how a new account <-> DID link is created, removing a link can happen in one of two ways:

1. The DID owner submits a transaction indicating which account to unlink:

<CodeBlock className="language-js">
  {Example8}
</CodeBlock>

2. The linked account submits a transaction indicating that the link with the DID should be removed:

<CodeBlock className="language-js">
  {Example9}
</CodeBlock>
