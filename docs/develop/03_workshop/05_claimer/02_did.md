---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateKeypairs from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/claimer/generateKeypairs.ts';
import GenerateDid from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/claimer/generateDid.ts';

Time to make a DID using the previously created account for the <span className="label-role claimer">Claimer</span>.
When creating a DID, it's anchored to the blockchain, and the submitting account requires funds for the process.

Remember DIDs can:

- Sign attestation requests and presentation with the authentication keys
- Encrypt messages with the encryption keys
- Write CTypes and attestation to the blockchain with assertion keys
- Write delegation to the blockchain with the delegation keys

Take a look at our [documentation](../../../develop/01_sdk/02_cookbook/01_dids/01_full_did_creation.md) to learn more about DIDs.

## Generate Keys

Similar to the Attester, the Claimer must set up the DID keys.

<TsJsBlock fileName="claimer/generateKeypairs">
  {GenerateKeypairs}
</TsJsBlock>

The Claimer only needs an authentication key and an encryption key.
Here the keys are both derived from the same seed, but they could also have two different seeds.

## Generate a DID

Once our `keypairs` are generated we can create our DID.
Similar to the Attester, the DID has to be anchored to the blockchain.
To create a DID we first initialize everything.
The account will be used to pay for the DID registration.
Finally, we create and submit the extrinsic (aka transaction) that will register our DID.

<TsJsBlock fileName="claimer/generateDid">
  {GenerateDid}
</TsJsBlock>

## Run

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node ./claimer/generateDid.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node ./claimer/generateDid.js
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
ATTESTER_DID_URI="did:kilt:4ohMvUHsyeD..."

CLAIMER_DID_MNEMONIC="danger awkward wrestle snap...
CLAIMER_ACCOUNT_MNEMONIC="house apple snake star...
CLAIMER_DID_URI="did:kilt:4jiLnMNaeqS..."
```

Well done - You've successfully generated a DID!
