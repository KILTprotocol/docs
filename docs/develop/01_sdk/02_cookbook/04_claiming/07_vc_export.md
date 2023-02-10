
---
id: vc-export
title: Convert a KILT Credential to a Verifiable Credential
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import ExportCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/08_export_credential.ts';
import VerifyVC from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/09_verify_vc.ts';
import VerifyVcJs from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/10_vcjs_verification.ts';

KILT credentials can be converted to the popular [Verifiable Credential](https://www.w3.org/TR/vc-data-model/) format and structure.

## Presenting a KILT `Credential` as a `VerifiableCredential`

Given we are in possession of an attested KILT claim and the associated KILT identity:

<TsJsBlock>
  {ExportCredential}
</TsJsBlock>

A verifier can now check the proofs attached to the VerifiableCredential but can only see the disclosed attributes:

<TsJsBlock>
  {VerifyVC}
</TsJsBlock>

### Verifying a KILT VC with `vc-js`

Assuming we have a KILT credential expressed as a VC (`credential`), for example as produced by the example above.

<TsJsBlock>
  {VerifyVcJs}
</TsJsBlock>