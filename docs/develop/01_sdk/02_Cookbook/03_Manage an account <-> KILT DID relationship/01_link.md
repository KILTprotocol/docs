---
id: account-link
title: Link an account to a KILT DID
---

import CodeBlock from '@theme/CodeBlock';
import DidLink from '!!raw-loader!@site/code_examples/core_features/linking/01_did_link.ts';
import AccountLink from '!!raw-loader!@site/code_examples/core_features/linking/02_account_link.ts';

An account can be linked to a DID in one of two ways:

1. The account to be linked generates a signature over the payload `<Bytes>(SubmitterDid, BlockNumberExpiration)</Bytes>`, which is the default encoding of the PolkadotJS extension:

<CodeBlock className="language-js">
  {DidLink}
</CodeBlock>

2. The account submitting the linking transaction is linked to the DID authorizing such transaction:

<CodeBlock className="language-js">
  {AccountLink}
</CodeBlock>