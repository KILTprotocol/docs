---
id: attestation
title: 🧾 Attestation
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import AttestCredential from '!!raw-loader!@site/code_examples/workshop/attester/attestCredential.ts';

In this section, your <span className="label-role attester">Attester</span> will receive and process a `Credential` where you'll

- Attest or deny it;
- Store the attestation information on the chain;

## Attest a Credential

The `attestCredential` function loads the account and DID of the <span className="label-role attester">Attester</span>.
When everything is prepared, we can issue an attestation for the credential we received from the <span className="label-role claimer">Claimer</span>.
The credential becomes valid once it is attested onto the chain.

<TsJsBlock fileName="attester/attestClaim">
  {AttestCredential}
</TsJsBlock>

The function `attestingFlow` shows the process from the beginning to the end.
First the <span className="label-role claimer">Claimer</span> generates the credential and sends it to the <span className="label-role attester">Attester</span>.
After that the <span className="label-role attester">Attester</span> checks the attributes and either attests or denies the attestation because the attributes are invalid.
Once the attestation is written on the chain, they can share all or part of the attested credentials with verifiers.

## Run

Run it from command line:

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node attester/attestCredential.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node attester/attestCredential.js
  ```

  </TabItem>
</Tabs>

You can copy the `Credential` object if you want to test with other `Verifiers` in the workshop :-)

Your job as an <span className="label-role attester">Attester</span> is done: you've successfully attested a credential and written the attestation hash onto the chain.

Let's move on to setup our <span className="label-role verifier">Verifier</span>!
