---
id: presentation-creation
title: Present a Credential
---
import CodeBlock from '@theme/CodeBlock';
import CreatePresentation from '!!raw-loader!@site/code_examples/core_features/claiming/04_create_presentation.ts';

With a valid credential, Claimers can now go to Verifiers to request some service upon providing proof of validity of a certain credential.
The process of presenting one or more credentials to a Verifier is called `Presentation`.

This step, similar to the [attestation request](./02_attestation_request.md), requires that a communication channel exist between the Claimer and the Verifier so that information about the presentation can be shared.
To verify the revocation status of the presented credential(s), a Verifier must be able to interact with a KILT full node.

:::info
KILT supports selective disclosure of claims when creating presentations.
This means that given a credential, it is possible for the Claimer to reveal only a subset of its claims, depending on the requirements set by the Verifier.
Check the snippet below to see how that is done using the KILT SDK.
:::

The Claimer can generate a presentation starting from a credential, optionally specifying the fields to reveal and a presentation challenge, which is useful to prove freshness of the generated presentation.

<CodeBlock className="language-ts">
  {CreatePresentation}
</CodeBlock>