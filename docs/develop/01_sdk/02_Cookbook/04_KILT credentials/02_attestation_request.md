---
id: attestation-request
title: Request an attestation
---
import CodeBlock from '@theme/CodeBlock';
import RequestAttestation from '!!raw-loader!@site/code_examples/core_features/claiming/02_request_attestation.ts';

To obtain credentials, claimers have to request an attestation for a set of claims from an attester.
The resulting object is a `RequestForAttestation`, which can be created following the snippet below.

<!-- TODO: Link to messaging section, once merged -->
This process does not involve any interaction with the KILT blockchain, but simply a communication channel where the claimer and the attester can communicate.

<CodeBlock className="language-js">
  {RequestAttestation}
</CodeBlock>

:::note
The structure of the claims must respect the schema defined in the specified CType.
Attesters (and verifiers) will reject claims that fail to verify correctly.
:::