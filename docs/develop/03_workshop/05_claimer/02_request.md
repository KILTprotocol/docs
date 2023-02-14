---
id: request
title: Request an Attestation
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CreateClaim from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/claimer/createClaim.ts';
import GenerateCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/claimer/generateCredential.ts';

In this section, we'll create a `Claim` and a `Credential`.
But a credential in itself has no value.
To become valid in the eyes of <span className="label-role verifier">Verifiers</span>, it needs to be attested by an entity they can trust: an <span className="label-role attester">Attester</span>.

:::info

 KILT is an open system.
 Anyone/anything can make a claim about themselves and attest it.
 But a credential only has value if the Verifier _trusts_ the Attester.

:::

## Create Credential

We'll use provided `light DID`, `ctype` and <span className="label-role claimer">Claimer</span> provided `content` to generate the `Claim` object.

A claim is composed of attributes that we claim to be true about us.

<TsJsBlock fileName="claimer/createClaim">
  {CreateClaim}
</TsJsBlock>

Since we want to receive an attestation for those claims, we build a `Credential`, which happens in the `generateCredential` function below.
The credential contains all necessary information, so that the <span className="label-role attester">Attester</span> can attest it for us.

The `main` function puts it all together.
There we load our light DID, create a claim and finally the credential.

<TsJsBlock fileName="claimer/generateCredential">
  {GenerateCredential}
</TsJsBlock>

When `Attestations` are issued by <span className="label-role attester">Attesters</span>, they are written to chain which requires a deposit.
Each new `Credential` is unique.
While we're testing, we can store and reuse credentials to avoid multiple attestations.
To do this store the output into `./claimer/_credential.json`.
You can also share this credential with others in the workshop to see how they get denied from fraudulent senders.

## Run

Run it from command line:

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
Let's finish up our <span className="label-role attester">Attester</span> and get the credential attested!
