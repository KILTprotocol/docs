---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateKeypairs from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/claimer/generateKeypairs.ts';
import GenerateLightDid from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/claimer/generateLightDid.ts';

This section covers creating a light DID using the account you created for the <span className="label-role claimer">Claimer</span>.

Since a light DID is not registered on the blockchain, you don't need funds to create one.

:::info

Remember, light DIDs can do the following:

- Sign attestation requests and presentation with the authentication keys
- Encrypt messages with the encryption keys

Read the [DID documentation](/develop/sdk/cookbook/dids/light-did-creation) to learn more about DIDs and the difference between their light and full versions.

:::

## Generate Keys

Like the Attester, the Claimer must also set up the DID keys.

<TsJsBlock fileName="claimer/generateKeypairs">
  {GenerateKeypairs}
</TsJsBlock>

The code above is similar to the `generateKeyAgreement` function used in the Attester section but simpler, as the Claimer only needs an authentication key and an encryption key.

Both the keys are derived from the same seed, but they could also have two different seeds.

## Generate Light DID

With the `keypairs` generated, you can create the light DID.
Because it's off-chain you can create the DID object every time, but you still need to save the mnemonic to the `.env` file with a different variable name.

<TsJsBlock fileName="claimer/generateLightDid">
  {GenerateLightDid}
</TsJsBlock>

The Claimer doesn't have an `account`, as the Claimer doesn't need to hold funds.

The `generateKeypairs` function takes the `mnemonic` value and generates the `authentication` and `keyAgreement` keys.

The `createLightDidDocument` method takes these two values and generates the light DID.

## Run

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node ./claimer/generateLightDid.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node ./claimer/generateLightDid.js
  ```

  </TabItem>
</Tabs>

Well done - You successfully generated a light DID!
