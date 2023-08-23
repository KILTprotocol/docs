---
id: full-did-creation
title: Create a Full DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidSimple from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/04_full_did_simple.ts';
import FullDidComplete from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/05_full_did_complete.ts';
import LightDidMigrate from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/03_light_did_migrate.ts';

The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key.

<TsJsBlock>
  {FullDidSimple}
</TsJsBlock>

If additional keys or services are to be specified, they can be passed as parameters to the creation transaction.

<TsJsBlock>
  {FullDidComplete}
</TsJsBlock>
