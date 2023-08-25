---
id: full-did-creation
title: Create a DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidSimple from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/01_full_did_simple.ts';
import FullDidComplete from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/02_full_did_complete.ts';

The following is an example of how to create and write on the blockchain a DID that specifies only an authentication key.

<TsJsBlock>
  {FullDidSimple}
</TsJsBlock>

If additional keys or services are to be specified, they can be passed as parameters to the creation transaction.

<TsJsBlock>
  {FullDidComplete}
</TsJsBlock>
