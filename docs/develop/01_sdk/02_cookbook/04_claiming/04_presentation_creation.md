---
id: presentation-creation
title: Present a Credential
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import CreatePresentationTs from '!!raw-loader!@site/code_examples/core_features/claiming/04_create_presentation.ts';
import CreatePresentationJs from '!!raw-loader!@site/code_examples/core_features/_js/claiming/04_create_presentation.js';

With a valid Credential, Claimers can now go to Verifiers to request some service upon providing proof of validity for a certain Credential.
The process of presenting one or more Credentials to a Verifier is called `Presentation`.

This step, similarly to the [Attestation request](./02_attestation_request.md), requires that a communication channel exist between the Claimer and the Verifier so that information about the Presentation can be shared.
To verify the revocation status of the presented Credential(s), a Verifier must be able to interact with a KILT full node.

:::info
KILT supports selective disclosure of Claims when creating Presentations.
This means that given a Credential, it is possible for the Claimer to reveal only a subset of its Claims, depending on the requirements set by the Verifier.
Check the snippet below to see how that is done using the KILT SDK.
:::

The Claimer can generate a Presentation starting from a Credential, optionally specifying the fields to reveal and a Presentation challenge, which is useful to proof freshness of the generated Presentation.

<TsJsBlock tsSnippet={CreatePresentationTs} jsSnippet={CreatePresentationJs} />