---
id: presentation-verification
title: Verify a credential or a presentation
---
import CodeBlock from '@theme/CodeBlock';
import VerifyPresentation from '!!raw-loader!@site/code_examples/core_features/claiming/05_verify_presentation.ts';

Whether a presentation includes a selective disclosure or a whole credential is irrelevant for verifiers.
This is because in KILT terms a presentation **is** a credential.
This means that the logic for verifiers does not change depending on the case, and is as easy as the following code snippet:

<CodeBlock className="language-js">
  {VerifyPresentation}
</CodeBlock>

:::warning
Verifying a presentation provides proof that all the information is correct and authentic, and that the credential has not been revoked.
Verifiers still need to match the subject of the credential to the entity that is presenting it.
One way of achieving this is by asking the claimer to include a challenge in the presentation, as shown in the snippet above.
Without a challenge, verifiers must implement other measures to be certain about the identity of the presenter.
:::