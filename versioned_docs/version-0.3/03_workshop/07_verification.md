---
id: verification
title: 🤝 Verification
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Verify from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/workshop/verify.ts';
import CreatePresentation from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/workshop/claimer/createPresentation.ts';

In this section, you play the role of a <span className="label-role verifier">Verifier</span> that does the following:

1. Take a `Presentation` object supplied by a <span className="label-role claimer">Claimer</span>
2. Verify that its data is correct
3. Verify that the attestation is valid, i.e., its hash exists on-chain and the attestation has not been revoked
4. Verify that the <span className="label-role claimer">Claimer</span> sending the `Credential` owns it

:::info Presentation object

The <span className="label-role claimer">Claimer</span> uses a Credential to create the `Presentation` object.
Unlike the credential, a `Presentation` can hide some attributes that are not required by the <span className="label-role verifier">Verifier</span> and can contain a claimer-signed challenge.
A `Presentation` also contains a proof that the <span className="label-role claimer">Claimer</span> owns the credential.

:::

## Create Presentation

A <span className="label-role claimer">Claimer</span> needs to send more than a credential, as they also need to prove ownership of the credential.
A <span className="label-role claimer">Claimer</span> does this by creating a presentation and signing the <span className="label-role verifier">Verifier</span>'s challenge.

<TsJsBlock fileName="claimer/createPresentation">
  {CreatePresentation}
</TsJsBlock>

The `createPresentation` method returns a presentation, taking the credential, a callback to sign data, and the <span className="label-role verifier">Verifier</span>'s challenge as input.

## Verify

The verification code exposes the `getChallenge` method which returns a random and unique challenge for the <span className="label-role claimer">Claimer</span> to sign.
This unique challenge is used to prove ownership.

<TsJsBlock fileName="verify">
  {Verify}
</TsJsBlock>

The `verifyPresentation` method performs the actual verification, taking a presentation and the <span className="label-role claimer">Claimer</span>'s challenge as input.

## Run

Run the code from the command line:

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node verify.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node verify.js
  ```

  </TabItem>
</Tabs>

That's it! All done :-)