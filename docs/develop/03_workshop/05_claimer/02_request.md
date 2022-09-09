---
id: request
title: Request an Attestation
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CreateClaimTs from '!!raw-loader!@site/code_examples/workshop/claimer/createClaim.ts';
import CreateClaimJs from '!!raw-loader!@site/code_examples/workshop/_js/claimer/createClaim.js';
import GenerateCredentialTs from '!!raw-loader!@site/code_examples/workshop/claimer/generateCredential.ts';
import GenerateCredentialJs from '!!raw-loader!@site/code_examples/workshop/_js/claimer/generateCredential.js';

In this section, we'll create a `Claim` and a `Credential`.
But a credential in itself has no value.
To become valid in the eyes of <span className="label-role verifier">Verifiers</span>, it needs to be attested by an entity they can trust: an <span className="label-role attester">Attester</span>.

:::info

 KILT is an open system.
 Anyone/anything can make a claim about themselves and attest it.
 But a credential only has value if the verifier _trusts_ the attester.

:::

## Create Claim

We'll use provided `light DID`, `ctype` and <span className="label-role claimer">Claimer</span> provided `content` to generate the `Claim` object.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Create a file `claimer/createClaim.ts` and copy the code below.

  <CodeBlock className="language-ts" title="claimer/createClaim.ts">
    {CreateClaimTs}
  </CodeBlock>

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  Create a file `claimer/createClaim.js` and copy the code below.

  <CodeBlock className="language-js" title="claimer/createClaim.js">
    {CreateClaimJs}
  </CodeBlock>

  </TabItem>
</Tabs>

The magic is happening in the `generateCredential` function.
There we create a credential from a claim.
Attestations can only be created for attributes that the <span className="label-role claimer">Claimer</span> wants to publish.
To ensure that the Claimer also approves the attestation of the attributes in the credential, he has to digitally sign the credential.
The signature makes sure that the Attester doesn't change the attributes and the attestation is created for the agreed values.

The `main` function puts it all together.
There we load our light DID, create a claim and finally the credential.

## Create Credential

A claim is composed of attributes that we claim to be true about us.
Since we want to receive an attestation for those claims, we build a `Credential`.
The credential contains all necessary information, so that the <span className="label-role attester">Attester</span> can attest it for us.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Create a file `claimer/generateCredential.ts` and copy the code below.

  <CodeBlock className="language-ts" title="claimer/generateCredential.ts">
    {GenerateCredentialTs}
  </CodeBlock>

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  Create a file `claimer/generateCredential.js` and copy the code below.

  <CodeBlock className="language-js" title="claimer/generateCredential.js">
    {GenerateCredentialJs}
  </CodeBlock>

  </TabItem>
</Tabs>

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
