---
id: presentation-verification
title: Verify a Credential or a Presentation
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import VerifyPresentation from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/06_verify_presentation.ts';

Whether a presentation involves selective disclosure or a whole credential is not technically relevant to Verifiers.
This is because in KILT a presentation **is** a credential.
This means that the logic for Verifiers does not change depending on the case, thus verifying a presentation is as easy as calling one SDK function, like the following code snippet:

<TsJsBlock>
  {VerifyPresentation}
</TsJsBlock>

:::warning Check if the presenter is the credential subject
Verifying a presentation provides proof that all the information is correct and authentic, and that the credential has not been revoked.
Verifiers still need to match the subject of the credential to the entity that is presenting it.
One way of achieving this is by asking the Claimer to include a challenge in the presentation signature, as shown in the snippet above.
Without a challenge, Verifiers must implement other measures to be certain about the identity of the presenter.
:::

:::warning Evaluation of the issuer's trust is up to the Verifiers
Verifiers must also have a registry of issuers they trust, and verify that the issuer of the credential they are verifying belongs to such list and, where necessary, whether it is still in operation or not, i.e., whether its DID still exists or has been deleted.
:::