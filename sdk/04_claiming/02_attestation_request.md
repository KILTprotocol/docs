---
id: attestation-request
title: Request an Attestation
---
import TsJsBlock from '@site/src/components/TsJsBlock';

import RequestAttestation from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/03_request_attestation.ts';

To obtain credentials, Claimers have to request an attestation for a set of claims from an Issuer.
The resulting object is a `Credential`, which can be created following the snippet below.

This process does not involve any interaction with the KILT blockchain, but is simply a communication channel where the Claimer and the Issuer can communicate.

<TsJsBlock>
  {RequestAttestation}
</TsJsBlock>

:::note
The structure of the claims must respect the schema defined in the specified CType.
Issuers (and Verifiers) will reject claims that fail to verify correctly.
:::