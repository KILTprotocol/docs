---
id: request
title: Verifier Requests a Credential
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';

import EmailCtypeTs from '!!raw-loader!@site/code_examples/dapp/src/verifier/emailCtype.ts';
import EmailCtypeJs from '!!raw-loader!@site/code_examples/dapp/_js/verifier/emailCtype.js';
import GenerateChallengeTs from '!!raw-loader!@site/code_examples/dapp/src/verifier/generateChallenge.ts';
import GenerateChallengeJs from '!!raw-loader!@site/code_examples/dapp/_js/verifier/generateChallenge.js';
import CreateRequestCredentialMessageTs from '!!raw-loader!@site/code_examples/dapp/src/verifier/createRequestCredentialMessage.ts';
import CreateRequestCredentialMessageJs from '!!raw-loader!@site/code_examples/dapp/_js/verifier/createRequestCredentialMessage.js';
import EncryptRequestCredentialMessageTs from '!!raw-loader!@site/code_examples/dapp/src/verifier/encryptRequestCredentialMessage.ts';
import EncryptRequestCredentialMessageJs from '!!raw-loader!@site/code_examples/dapp/_js/verifier/encryptRequestCredentialMessage.js';

The job of the verifier is to request and verify credentials. Your verifier can request one or more credentials of a specific CType. For example, if you want to verify an email credential, you would use the email CType:

<TsJsSnippet tsSnippet={EmailCtypeTs} jsSnippet={EmailCtypeJs} />

First, generate a request challenge and store it on the server side:

<TsJsSnippet tsSnippet={GenerateChallengeTs} jsSnippet={GenerateChallengeJs} />

Then construct the `REQUEST_CREDENTIAL` message using the message body, sender DID and receiver DID:

<TsJsSnippet tsSnippet={CreateRequestCredentialMessageTs} jsSnippet={CreateRequestCredentialMessageJs} />

Next, encrypt the message:

<TsJsSnippet tsSnippet={EncryptRequestCredentialMessageTs} jsSnippet={EncryptRequestCredentialMessageJs} />
