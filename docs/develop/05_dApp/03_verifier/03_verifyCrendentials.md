---
id: verify
title: Verify Credential
---

import CodeBlock from '@theme/CodeBlock';
import VerifyCredentials from '!!raw-loader!@site/code_examples/workshop/verifier/verifyCredentials.ts';

 This code block will use <a href="https://kiltprotocol.github.io/sdk-js/modules/_kiltprotocol_messaging.html" target="_blank"> Decrypt Messages</a> protocols from KILT SDK and returns the verified credentials from backend. This information is then displayed by the frontend.
<CodeBlock className="language-ts" title="backendVerificationHandler.ts">
  {VerifyCredentials}
</CodeBlock>
