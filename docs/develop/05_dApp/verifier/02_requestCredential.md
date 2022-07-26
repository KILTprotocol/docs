---
id: request
title: Request Credential
---

import CodeBlock from '@theme/CodeBlock';
import RequestCredentials from '!!raw-loader!@site/code_examples/workshop/verifier/requestCredential.ts';

Request has to be sent from the frontend with ctype and session ID. This code block will add challenge, ctype hash and the message body type to the request. The updated request is then sent to the extension. This example uses email ctype. Many other ctypes could also be used.

<CodeBlock className="language-ts" title="backendReqHandler.ts">
  {RequestCredentials}
</CodeBlock>
