---
id: verify
title: Verifier Verifies a Credential
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';
import TsJsBlock from '@site/src/components/TsJsBlock';

import DecryptCredentialMessageTs from '!!raw-loader!@site/code_examples/dapp/src/verifier/decryptCredentialMessage.ts';
import DecryptCredentialMessageJs from '!!raw-loader!@site/code_examples/dapp/_js/verifier/decryptCredentialMessage.js';
import VerifyCredentialTs from '!!raw-loader!@site/code_examples/dapp/src/verifier/verifyCredential.ts';
import VerifyCredentialJs from '!!raw-loader!@site/code_examples/dapp/_js/verifier/verifyCredential.js';

After sending the `request-credential` message to the extension, the verifier listens for a message of type `submit-credential` in response.

When a message is received, decrypt it and check that it has the expected type:

<TsJsSnippet tsSnippet={DecryptCredentialMessageTs} jsSnippet={DecryptCredentialMessageJs} />

Finally the message content (the credential that was requested) can be verified using the request challenge that was previously stored on the server side. This function will return `true` if the verification is successful.

<TsJsBlock tsSnippet={VerifyCredentialTs} jsSnippet={VerifyCredentialJs} />

That's it! Your verifier has successfully requested and verified a credential.
