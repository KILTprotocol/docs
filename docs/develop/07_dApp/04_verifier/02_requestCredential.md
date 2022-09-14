---
id: request
title: Verifier Requests a Credential
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';

import EmailCtype from '!!raw-loader!@site/code_examples/dapp/src/verifier/emailCtype.ts';
import GenerateChallenge from '!!raw-loader!@site/code_examples/dapp/src/verifier/generateChallenge.ts';
import CreateRequestCredentialMessage from '!!raw-loader!@site/code_examples/dapp/src/verifier/createRequestCredentialMessage.ts';
import EncryptRequestCredentialMessage from '!!raw-loader!@site/code_examples/dapp/src/verifier/encryptRequestCredentialMessage.ts';

The job of the verifier is to request and verify credentials. Your verifier can request one or more credentials of a specific CType. For example, if you want to verify an email credential, you would use the email CType:

<TsJsSnippet>
  {EmailCtype}
</TsJsSnippet>

First, generate a request challenge and store it on the server side:

<TsJsSnippet>
  {GenerateChallenge}
</TsJsSnippet>

Then construct the `REQUEST_CREDENTIAL` message using the message body, sender DID and receiver DID:

<TsJsSnippet>
  {CreateRequestCredentialMessage}
</TsJsSnippet>

Next, encrypt the message:

<TsJsSnippet>
  {EncryptRequestCredentialMessage}
</TsJsSnippet>
