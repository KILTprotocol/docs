---
id: attestation-request
title: Request an Attestation
---
import CodeBlock from '@theme/CodeBlock';
import RequestAttestation from '!!raw-loader!@site/code_examples/core_features/claiming/02_request_attestation.ts';

To obtain Credentials, Claimers have to request an Attestation for a set of Claims from an Attester.
The resulting object is a `RequestForAttestation`, which can be created following the snippet below.

This process does not involve any interaction with the KILT blockchain, but simply a communication channel where the Claimer and the Attester can communicate.

<CodeBlock className="language-ts">
  {RequestAttestation}
</CodeBlock>

:::note
The structure of the Claims must respect the schema defined in the specified CType.
Attesters (and Verifiers) will reject Claims that fail to verify correctly.
:::