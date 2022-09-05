---
id: account-link
title: Link an Account to a KILT DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidLinkTs from '!!raw-loader!@site/code_examples/core_features/linking/01_did_link.ts';
import DidLinkJs from '!!raw-loader!@site/code_examples/core_features/_js/linking/01_did_link.js';
import AccountLinkTs from '!!raw-loader!@site/code_examples/core_features/linking/02_account_link.ts';
import AccountLinkJs from '!!raw-loader!@site/code_examples/core_features/_js/linking/02_account_link.js';

An account can be linked to a DID in one of two ways:

1. The account to be linked generates a signature over the payload `<Bytes>(SubmitterDid, BlockNumberExpiration)</Bytes>`, which is the default encoding of the PolkadotJS extension:

<TsJsBlock tsSnippet={DidLinkTs} jsSnippet={DidLinkJs} />

2. The account submitting the linking transaction is linked to the DID authorizing such transaction:

<TsJsBlock tsSnippet={AccountLinkTs} jsSnippet={AccountLinkJs} />