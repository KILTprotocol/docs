---
id: presentation
title: Create a presentation
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CreateClaim from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/holder/createClaim.ts';
import GenerateCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/holder/generateCredential.ts';
<!-- Explain that info mmight come from holder or come from other sources, but code shows create a presentation -->

This section covers creating a presentation of a credential.

KILT is a premissionless system.
Anyone or anything can claim something and attest to it.
But a verified credential only has value if the <span className="label-role verifier">Verifier</span> of the credential _trusts_ the <span className="label-role issuer">Issuer</span> of the credential.

## Derive proof

A verifier doesn't need to see all the data in a credential to verify only the parts relevant to a claim.

The KILT SDK provides the `deriveProof` method from the `Holder` class to create a derived credential for presentation. It takes the following parameters:

- The `credential` to derive the proof from.
- The `includeClaims` parameter of the `proofOptions` object where you add the credential paths to include in the proof.

The method returns the derived credential as a `VerifiableCredential` object.

## Create presentation


The KILT SDK provides the `createPresentation` method from the `Holder` class to create a credential presentation. It takes the following parameters:

- `credential`: The derived credential.
- `holder`: The details object of the Holder.
- `presentationOptions`: An optional object holding parameters that allow defining when (e.g., how long) and under which circumstances the Credential Presentation is to be considered valid. These are important to ensure that a presentation is not taken out of context or (re-)used without your permission. 

The method returns a `VerifiablePresentation` that a Verifier can now verify.

<TsJsBlock>
  {createPresentation}
</TsJsBlock>

<TsJsBlock>

```typescript
export async function runAll() {
  …
  const presentation = await createPresentation(
    credential,
    holderDid.didDocument,
    holderDid.signers
  )
}
```

</TsJsBlock>

## Run code

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node ./index.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node ./index.js
  ```

  </TabItem>
</Tabs>

OK, you've made a claim as a <span className="label-role holder">Holder</span> and created a presentation from it.
The next step is to finish the <span className="label-role verifier">Verifier</span> and get the credential verified!
