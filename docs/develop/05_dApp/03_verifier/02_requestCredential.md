---
id: request
title: Requesting a  Credential
---

import CodeBlock from '@theme/CodeBlock';
import RequestCredentials from '!!raw-loader!@site/code_examples/workshop/verifier/requestCredential.ts';

To request a credential, a message has to be sent from the dApp to the extension with ctype and session ID. The following code block shows, how to add a challenge, ctype hash and the message body type to the request message. The updated request is then sent to the extension. This example uses the socialkyc email ctype. Many other ctypes could also be used.

<CodeBlock className="language-ts" title="backendReqHandler.ts">
  {RequestCredentials}
</CodeBlock>
