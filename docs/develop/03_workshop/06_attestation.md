---
id: attestation
title: 🧾 Attestation
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import AttestCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/attester/attestCredential.ts';

This section covers how the <span className="label-role attester">Attester</span> receives and processes a `Credential` and how you can:

- Attest or deny it
- Store the attestation information on the chain

## Attest a Credential

<TsJsBlock fileName="attester/attestCredential">
  {AttestCredential}
</TsJsBlock>

The `attestCredential` function loads the account and DID of the <span className="label-role attester">Attester</span> and issues an attestation for the credential received from the <span className="label-role claimer">Claimer</span>.
The credential is valid from the time an Attester attests it on chain until the time it is revoked.

In the `attestingFlow` function, the <span className="label-role claimer">Claimer</span> generates the demo credential and sends it to the <span className="label-role attester">Attester</span>.
The <span className="label-role attester">Attester</span> checks the attributes and either attests or denies the attestation if the attributes are invalid.
Once the attestation is written on the chain, the Attester can share all or part of the attested credentials with verifiers.

## Run

Run the code from the command line:

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

## Summary

Your job as an <span className="label-role attester">Attester</span> is complete. You've attested a credential and written the attestation hash onto the chain.

Let's move on to set up the Verifier</span>!
