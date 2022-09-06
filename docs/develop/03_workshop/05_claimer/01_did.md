---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateKeypairsTs from '!!raw-loader!@site/code_examples/workshop/claimer/generateKeypairs.ts';
import GenerateKeypairsJs from '!!raw-loader!@site/code_examples/workshop/_js/claimer/generateKeypairs.js';
import GenerateLightDidTs from '!!raw-loader!@site/code_examples/workshop/claimer/generateLightDid.ts';
import GenerateLightDidJs from '!!raw-loader!@site/code_examples/workshop/_js/claimer/generateLightDid.js';

Time to make a light DID using the previously created account for the <span className="label-role claimer">Claimer</span>.
Since a light DID is not registered on the blockchain, you don't need funds for creating one.
Remember light DIDs can:

- Sign claims and attestations with the authentication keys
- Encrypting messages with the encryption keys

Take a look at our [DID documentation](../../../develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md) if you want to learn more about DIDs and the difference between their light and full versions.

## Generate Keys

Similar to the Attester, the Claimer must set up the DID keys.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Create a file `claimer/generateKeypairs.ts` and copy the code below.

  <CodeBlock className="language-ts" title="claimer/generateKeypairs.ts">
    {GenerateKeypairsTs}
  </CodeBlock>

  </TabItem>
  <TabItem value='js' label='Javascript'>

  Create a file `claimer/generateKeypairs.js` and copy the code below.

  <CodeBlock className="language-js" title="claimer/generateKeypairs.js">
    {GenerateKeypairsJs}
  </CodeBlock>

  </TabItem>
</Tabs>

The Claimer only needs an authentication key and an encryption key.
Here the keys are both derived from the same seed, but they could also have two different seeds.

## Generate Light DID

Once our `keypairs` are generated we can create our light DID.
Because it's off-chain we can just create the DID object every time, we don't need to resolve them before using it.
But we'll still accept `didUri` and prompt to save it in `.env` for our reference.

<TsJsBlock tsSnippet={GenerateLightDidTs} jsSnippet={GenerateLightDidJs} />

After everything is initialized, we create a mnemonic that will be used to create the light DID.
As you may have noticed the Claimer doesn't have an `account`.
The Claimer doesn't need to hold funds and also doesn't need a blockchain account.

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

Your output will provide you with `CLAIMER_MNEMONIC` and `CLAIMER_DID_URI`.
Be sure to save it in your `.env` file, it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws

ATTESTER_MNEMONIC="warrior icon use cry...
ATTESTER_ADDRESS=4ohMvUHsyeDhMVZF...
ATTESTER_DID_URI=did:kilt:4ohMvUHsyeDhMVZF...

CLAIMER_MNEMONIC="danger awkward wrestle snap...
CLAIMER_DID_URI=did:kilt:light:004tTDugL...
```

Well done - You've successfully generated a light DID!
