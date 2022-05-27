---
id: full-did-creation
title: Create a full DID
---

import CodeBlock from '@theme/CodeBlock';
import Example3 from '!!raw-loader!@site/code-examples/core_features/did/3_did.ts';
import Example4 from '!!raw-loader!@site/code-examples/core_features/did/4_did.ts';
import Example8 from '!!raw-loader!@site/code-examples/core_features/did/8_did.ts';

The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key, by using the FullDidCreationBuilder class.

<CodeBlock className="language-js">
  {Example3}
</CodeBlock>

If additional keys or service endpoints are to be specified, then they can be batched into the builder before building the creation transaction.

<CodeBlock className="language-js">
  {Example4}
</CodeBlock>

## Upgrade a light DID to a full DID

Another way to obtain a full DID is by upgrading a previously-created light DID.
KILT supports this operation in a way that does not invalidate any credentials that have been issued to the light DID before being upgraded.

The following code shows how to migrate a light DID to a full DID.
Credentials, presentations, and verifications remain unchanged as adding support for DID migration does not affect the public API that the SDK exposes.

<CodeBlock className="language-js">
  {Example8}
</CodeBlock>