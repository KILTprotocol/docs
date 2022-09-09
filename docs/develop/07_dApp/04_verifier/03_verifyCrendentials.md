---
id: verify
title: Verifier Verifies a Credential
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '@site/src/components/SnippetBlock';
import DecryptCredentialMessage from '!!raw-loader!@site/code_examples/dapp/src/verifier/decryptCredentialMessage.ts';
import VerifyCredential from '!!raw-loader!@site/code_examples/dapp/src/verifier/verifyCredential.ts';

After sending the `REQUEST_CREDENTIAL` message to the extension, the verifier listens for a message of type `SUBMIT_CREDENTIAL` in response.

When a message is received, decrypt it and check that it has the expected type:

<SnippetBlock className="language-ts">
  {DecryptCredentialMessage}
</SnippetBlock>

Finally the message content (the credential that was requested) can be verified using the request challenge that was previously stored on the server side. This function will return `true` if the verification is successful.

<CodeBlock className="language-ts">
  {VerifyCredential}
</CodeBlock>

That's it! Your verifier has successfully requested and verified a credential.
