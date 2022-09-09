---
id: request
title: Verifier Requests a Credential
---

import SnippetBlock from '@site/src/components/SnippetBlock';
import EmailCtype from '!!raw-loader!@site/code_examples/dapp/src/verifier/emailCtype.ts';
import GenerateChallenge from '!!raw-loader!@site/code_examples/dapp/src/verifier/generateChallenge.ts';
import CreateRequestCredentialMessage from '!!raw-loader!@site/code_examples/dapp/src/verifier/createRequestCredentialMessage.ts';
import EncryptRequestCredentialMessage from '!!raw-loader!@site/code_examples/dapp/src/verifier/encryptRequestCredentialMessage.ts';

The job of the verifier is to request and verify credentials. Your verifier can request one or more credentials of a specific CType. For example, if you want to verify an email credential, you would use the email CType:

<SnippetBlock className="language-ts">
  {EmailCtype}
</SnippetBlock>

First, generate a request challenge and store it on the server side:

<SnippetBlock className="language-ts">
  {GenerateChallenge}
</SnippetBlock>

Then construct the `REQUEST_CREDENTIAL` message using the message body, sender DID and receiver DID:

<SnippetBlock className="language-ts">
  {CreateRequestCredentialMessage}
</SnippetBlock>

Next, encrypt the message:

<SnippetBlock className="language-ts">
  {EncryptRequestCredentialMessage}
</SnippetBlock>
