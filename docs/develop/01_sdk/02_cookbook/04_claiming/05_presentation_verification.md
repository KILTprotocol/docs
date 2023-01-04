---
id: presentation-verification
title: Verify a Credential or a Presentation
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import VerifyPresentation from '!!raw-loader!@site/code_examples/core_features/claiming/05_verify_presentation.ts';

Whether a presentation involves selective disclosure or a whole credential is not technically relevant to Verifiers.
This is because in KILT a presentation **is** a credential.
This means that the logic for Verifiers does not change depending on the case, thus verifying a presentation is as easy as calling one SDK function, like the following code snippet:

<TsJsBlock>
  {VerifyPresentation}
</TsJsBlock>

:::warning
Verifying a presentation provides proof that all the information is correct and authentic, and that the credential has not been revoked.
Verifiers still need to 1. match the subject of the credential to the entity that is presenting it, and 2. make a judgment about the credential attester.
For the former, one way of achieving this is by asking the Claimer to include a challenge in the presentation signature, as shown in the snippet above.
Without a challenge, Verifiers must implement other measures to be certain about the identity of the presenter.
For the latter, Verifiers must have a registry of attesters they trust, and verify that the issuer of the credential they are verifying belongs to such list and, where necessary, whether it is still in operation or not, i.e., whether its DID still exists or has been deleted.
:::