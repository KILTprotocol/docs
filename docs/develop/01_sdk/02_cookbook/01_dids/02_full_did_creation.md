---
id: full-did-creation
title: Create a Full DID
---

import CodeBlock from '@theme/CodeBlock';
import FullDidSimple from '!!raw-loader!@site/code_examples/core_features/did/04_full_did_simple.ts';
import FullDidComplete from '!!raw-loader!@site/code_examples/core_features/did/05_full_did_complete.ts';
import LightDidMigrate from '!!raw-loader!@site/code_examples/core_features/did/03_light_did_migrate.ts';

The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key, by using the FullDidCreationBuilder class.

<CodeBlock className="language-ts">
  {FullDidSimple}
</CodeBlock>

If additional keys or service endpoints are to be specified, then they can be batched into the builder before building the creation transaction.

<CodeBlock className="language-ts">
  {FullDidComplete}
</CodeBlock>

## Upgrade a light DID to a full DID

Another way to obtain a full DID is by upgrading a previously-created light DID.
KILT supports this operation in a way that does not invalidate any Credentials that have been issued to the light DID before being upgraded.

The following code shows how to migrate a light DID to a full DID.
Credentials, Presentations, and verifications remain unchanged as adding support for DID migration does not affect the public API that the SDK exposes.

<CodeBlock className="language-ts">
  {LightDidMigrate}
</CodeBlock>