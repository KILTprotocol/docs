---
id: account-link
title: Link an Account to a KILT DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/01_did_link.ts';
import AccountLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/02_account_link.ts';

An account can be linked to a DID in one of two ways.
Either the account that sends the transaction links itself to the DID or the sender is unrelated to the DID and a third account is linked.
In that case a challenge needs to be signed with the third account, to proof ownership.

The second option is useful in cases where the account that should be linked doesn't own KILT tokens or the transaction is paid for by a third party.

## Linking an account to a DID

The account to be linked generates a signature over the payload `<Bytes>(SubmitterDid, BlockNumberExpiration)</Bytes>`, which is the default encoding of the PolkadotJS extension:

<TsJsBlock>
  {DidLink}
</TsJsBlock>


## Linking the sender to a DID

The account submitting the linking transaction is linked to the DID authorizing such transaction:

<TsJsBlock>
  {AccountLink}
</TsJsBlock>
