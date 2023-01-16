---
id: account-link
title: Link an Account to a KILT DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/01_did_link.ts';
import AccountLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/02_account_link.ts';

An account can be linked to a DID in one of two ways:

1. The account to be linked generates a signature over the payload `<Bytes>(SubmitterDid, BlockNumberExpiration)</Bytes>`, which is the default encoding of the PolkadotJS extension:

<TsJsBlock>
  {DidLink}
</TsJsBlock>

2. The account submitting the linking transaction is linked to the DID authorizing such transaction:

<TsJsBlock>
  {AccountLink}
</TsJsBlock>