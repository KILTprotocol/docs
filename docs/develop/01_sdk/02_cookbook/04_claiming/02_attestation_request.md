---
id: attestation-request
title: Request an Attestation
---
import TsJsBlock from '@site/src/components/TsJsBlock';

import RequestAttestationTs from '!!raw-loader!@site/code_examples/core_features/claiming/02_request_attestation.ts';
import RequestAttestationJs from '!!raw-loader!@site/code_examples/core_features/_js/claiming/02_request_attestation.js';

To obtain Credentials, Claimers have to request an Attestation for a set of Claims from an Attester.
The resulting object is a `Credential`, which can be created following the snippet below.

This process does not involve any interaction with the KILT blockchain, but simply a communication channel where the Claimer and the Attester can communicate.

<TsJsBlock tsSnippet={RequestAttestationTs} jsSnippet={RequestAttestationJs} />

:::note
The structure of the Claims must respect the schema defined in the specified CType.
Attesters (and Verifiers) will reject Claims that fail to verify correctly.
:::