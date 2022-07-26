---
id: verify
title: Verify Credential
---

import CodeBlock from '@theme/CodeBlock';
import VerifyCredentials from '!!raw-loader!@site/code_examples/workshop/verifier/verifyCredentials.ts';

Request should be sent from the frontend with message from extension and session ID. This code block will use <a href="https://kiltprotocol.github.io/sdk-js/modules/_kiltprotocol_messaging.html" target="_blank"> Decrypt Messages</a> protocols from KILT SDK and returns the verified credentials. This information can be displayed through the frontend.
<CodeBlock className="language-ts" title="backendVerificationHandler.ts">
  {VerifyCredentials}
</CodeBlock>
