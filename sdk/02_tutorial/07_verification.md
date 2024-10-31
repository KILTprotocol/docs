---
id: verification
title: 🤝 Verification
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Verify from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/verify.ts';
import CreatePresentation from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/holder/createPresentation.ts';

<!-- Verficiation criteria, expect it  to be tied to Verifier DID, tied to the verficationCriteria, based on four options -->

In this section, you play the role of a <span className="label-role verifier">Verifier</span> that does the following:

:::info

The Verifier also needs an account and DID, but the tutorial omits these steps.

:::

1. Take a `VerifiablePresentation` object supplied by a <span className="label-role holder">Holder</span>
2. Verify that its data is correct
3. Verify that the <span className="label-role holder">Holder</span> of the `Credential` has authorised and consented to its use in the current context by checking the presentation's signature and attributes.  
4. Verify the authenticity and validity of the credential by checking its on-chain proof created by the Issuer and ensuring it hasn't been revoked since.

:::info A VerifiablePresentation object

The <span className="label-role holder">Holder</span> uses a Credential to create an array of `VerifiablePresentation` objects as .

A `VerifiablePresentation` object contains an array of `VerifiableCredential` objects, a `holder` value, and a `proof` that the <span className="label-role holder">Holder</span> owns the credential.

Each `VerifiableCredential` can hide or show properties, allowing for selective disclosure.

:::

## Verify presentation

The KILT SDK provides the `verifyPresentation` method from the `Verifier` class to verify a credential presentation. It takes the following parameters:

- `presentation`: The `VerifiableCredential` to verify.
- `verficationCriteria`: An object of criteria that need to pass to verify the presentation. These can be any combination of criteria.
<!-- TODO: Find out more link -->

The method returns an object with a `verified` boolean that  indicates whether the presentation is valid.


<TsJsBlock>
  {VerifyPresentation}
</TsJsBlock>

<TsJsBlock>

```typescript
export async function runAll() {
  …
  await verifyPresentation(presentation, verifierDid.didDocument)
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

That's it! All done :-)