---
id: verification
title: 🤝 Verification
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Verify from '!!raw-loader!@site/code_examples/workshop/verify.ts';
import CreatePresentation from '!!raw-loader!@site/code_examples/workshop/claimer/createPresentation.ts';

In this section, you'll play the role of a <span className="label-role verifier">Verifier</span>:

- You'll take an `Presentation` object given to you by a <span className="label-role claimer">Claimer</span>;
- You'll verify that its data is correct;
- You'll verify that the attestation is valid, i.e., its hash exists on-chain and the attestation has not been revoked.
- You'll verify that the `Credential` is owned by the <span className="label-role claimer">Claimer</span> sending it

:::info Credential

A `Credential` object is also called an Attested Claim: it is what <span className="label-role claimer">claimers</span> need to create `Presentations`.

:::

:::info Presentation

A Credential is used to create the `Presentation` object by the <span className="label-role claimer">claimer</span>.
Unlike the credential, a `presentation` can hide some attributes that are not required by the <span className="label-role verifier">verifiers</span>.
A `presentation` also contains a proof that the <span className="label-role claimer">claimer</span> owns the credential.

:::

## Create Presentation

It's not enough to just send our credential as a <span className="label-role claimer">Claimer</span> as we also need to prove ownership of it.
This is done by creating a presentation by signing the <span className="label-role verifier">Verifier</span>'s challenge.

<TsJsBlock title="claimer/createPresentation">
  {CreatePresentation}
</TsJsBlock>

## Verify

Let's write our verification script.
Here we'll expose `getChallenge` which returns a random and unique
challenge for the <span className="label-role claimer">Claimer</span> to sign; this is used to prove ownership.
We'll also expose `verifyCredential` which will do the actual verification.
Copy the code below, this completes the <span className="label-role verifier">Verifier</span> code!

<TsJsBlock title="verify">
  {Verify}
</TsJsBlock>

## Run

Run the verification flow on command line:

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
