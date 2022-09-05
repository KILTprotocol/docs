---
id: presentation-verification
title: Verify a Credential or a Presentation
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import VerifyPresentationTs from '!!raw-loader!@site/code_examples/core_features/claiming/05_verify_presentation.ts';
import VerifyPresentationJs from '!!raw-loader!@site/code_examples/core_features/_js/claiming/05_verify_presentation.js';

Whether a Presentation involves selective disclosure or a whole Credential is not technically relevant to Verifiers.
This is because in KILT a Presentation **is** a Credential.
This means that the logic for Verifiers does not change depending on the case, thus verifying a Presentation is as easy as calling one SDK function like in the following code snippet:

<TsJsBlock tsSnippet={VerifyPresentationTs} jsSnippet={VerifyPresentationJs} />

:::warning
Verifying a Presentation provides proof that all the information is correct and authentic, and that the Credential has not been revoked.
Verifiers still need to match the subject of the Credential to the entity that is presenting it.
One way of achieving this is by asking the Claimer to include a challenge in the Presentation signature, as shown in the snippet above.
Without a challenge, Verifiers must implement other measures to be certain about the identity of the presenter.
:::