---
id: send
title: Send Request
---

import CodeBlock from '@theme/CodeBlock';
import SendRequest from '!!raw-loader!@site/code_examples/workshop/verifier/sendRequest.ts';

Credential Request should be sent from the frontend to extension. Extension sends back the requested credential. That credential is then sent for verification to the backend.
<CodeBlock className="language-ts" title="frontendRequest.ts">
  {SendRequest}
</CodeBlock>
