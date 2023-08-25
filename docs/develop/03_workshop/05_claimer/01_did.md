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

Time to make a DID using the previously created account for the <span className="label-role claimer">Claimer</span>.
Since a DID is not registered on the blockchain, you need funds for creating one.
Remember DIDs can:

- Sign attestation requests and presentation with the authentication keys
- Encrypt messages with the encryption keys
- TODO

Take a look at our [DID documentation](../../../develop/01_sdk/02_cookbook/01_dids/01_full_did_creation.md) to learn more about DIDs.

## Generate Keys

Similar to the Attester, the Claimer must set up the DID keys.

<TsJsBlock fileName="claimer/generateKeypairs">
  {GenerateKeypairs}
</TsJsBlock>

The Claimer only needs an authentication key and an encryption key.
Here the keys are both derived from the same seed, but they could also have two different seeds.

## Generate a DID

Once our `keypairs` are generated we can create our DID.
Because it's off-chain we can just create the DID object every time, we don't need to resolve them before using it.
But we'll still accept the `mnemonic` and prompt to save it in `.env` for our reference.

<TsJsBlock fileName="claimer/generateLightDid">
  {GenerateLightDid}
</TsJsBlock>

After everything is initialized, we create a mnemonic that will be used to create the DID.
As you may have noticed the Claimer doesn't have an `account`.
The Claimer doesn't need to hold funds.

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

Your output will provide you with `CLAIMER_DID_MNEMONIC`.
Be sure to save it in your `.env` file, it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry...
ATTESTER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...
ATTESTER_DID_MNEMONIC="beyond large galaxy...

CLAIMER_DID_MNEMONIC="danger awkward wrestle snap...
```

Well done - You've successfully generated a DID!
