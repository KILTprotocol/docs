---
id: presentation-creation
title: Present a credential
---
import CodeBlock from '@theme/CodeBlock';
import CreatePresentation from '!!raw-loader!@site/code_examples/core_features/claiming/04_create_presentation.ts';

With a valid credential, claimers can now go to verifiers to request some service upon providing proof of validity for a certain credential.
The process of presenting one or more credentials to a verifier is called `presentation`.

This step, similarly to the [attestation request](./02_attestation_request.md), requires that a communication channel exist between the claimer and the verifier so that information about the presentation can be shared.
To verify the revocation status of the presented credential(s), a verifier must be able to interact with a KILT full node.

:::info
KILT supports selective disclosure of claims when creating presentations.
This means that given a credential, it is possible for the claimer to reveal only a subset of its claims, depending on the requirements set by the verifier.
Check the snippet below to see how that is done using the KILT SDK.
:::

The claimer can generate a presentation starting from a credential, optionally specifying the fields to reveal and a presentation challenge, which is useful to proof freshness of the generated presentation.

<CodeBlock className="language-js">
  {CreatePresentation}
</CodeBlock>