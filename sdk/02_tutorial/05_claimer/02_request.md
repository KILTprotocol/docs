---
id: request
title: Request an Attestation
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CreateClaim from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/claimer/createClaim.ts';
import GenerateCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/claimer/generateCredential.ts';

This section covers creating a `Claim` and a `Credential`.

KILT is a premissionless system.
Anyone or anything can claim something and attest to it.
But an attested credential only has value if the <span className="label-role verifier">Verifier</span> of the credential _trusts_ the <span className="label-role issuer">Issuer</span> of the credential.


## Create Credential

Use the previously created `light DID`, `ctype`, and <span className="label-role claimer">Claimer</span> provided `content` to generate the `Claim` object.

A claim consists of attributes that we claim to be true about us.

<TsJsBlock fileName="claimer/createClaim">
  {CreateClaim}
</TsJsBlock>

The `fromCTypeAndClaimContents` function takes the `lightDid`, `ctype`, and `content` values and generates a `Claim` object.

## Receive attestation for claim

Since you want to receive an attestation for those claims, build a `Credential` in the `generateCredential` function below.

The credential contains all necessary information so the <span className="label-role issuer">Issuer</span> can attest it.

<TsJsBlock fileName="claimer/generateCredential">
  {GenerateCredential}
</TsJsBlock>


The `main` function takes the Claimer mnemonic and generates the light DID following the steps outlined in the [DID section](./01_did.md).
It then calls the `generateCredential` function using the supplied claim attributes.
It then uses the `createClaim` method from the previous step to create the `Claim` object and the `Kilt.Credential.fromClaim` method takes the claim and returns the `Credential` object.

When <span className="label-role issuer">Issuers</span> issue `Attestations`, they are written to the chain, which requires a deposit.
Each new `Credential` is unique.
During testing, you can store and reuse credentials into `./claimer/_credential.json` to avoid multiple attestations.
<!-- TODO: ?? -->
You can share this credential with others following the workshop to see how they get denied from fraudulent senders.

## Run

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node claimer/generateCredential.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```bash
  node claimer/generateCredential.js
  ```

  </TabItem>
</Tabs>

OK, you've made a claim as a <span className="label-role claimer">Claimer</span> and created a credential from it.
The next step is to finish the <span className="label-role issuer">Issuer</span> and get the credential attested!
