---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '@site/src/components/SnippetBlock';
import GenerateKeypairs from '!!raw-loader!@site/code-examples/workshop/claimer/generateKeypairs.ts';
import GenerateLightDid from '!!raw-loader!@site/code-examples/workshop/claimer/generateLightDid.ts';

Time to make a light DID using the previously created account for the <span className="label-role claimer">Claimer</span>.
Since a light DID is not registered on the blockchain, you don't need funds for creating one.
Remember light DIDs can:

- Sign claims and attestations with the authentication keys
- Encrypting messages with the encryption keys

Take a look at our [DID documentation](./../../../develop/01_sdk/02_Cookbook/01_Manage%20a%20KILT%20DID/01_did.md) if you want to learn more about DIDs and the difference between their light and full versions.

## Generate Keys

Similar to the attester, the claimer must set up the DID keys.
Create a file `claimer/generateKeypairs.ts` and copy the code below.

<CodeBlock className="language-js" title="claimer/generateKeypairs.ts">
  {GenerateKeypairs}
</CodeBlock>

The claimer only needs an authentication key and an encryption key.
Here the keys are both derived from the same seed, but they could also have two different seeds.

## Generate Light DID

Once our `keypairs` are generated we can create our light DID.
Because it's off-chain we can just create the DID object every time, we don't need to resolve them before using it.
But we'll still accept `didUri` and prompt to save it in `.env` for our reference.

<CodeBlock className="language-js" title="claimer/generateLightDid.ts">
  {GenerateLightDid}
</CodeBlock>

After everything is initialized, we create a mnemonic that will be used to create the light DID.
As you may have noticed the claimer doesn't have an `account`.
The claimer doesn't need to hold funds and also doesn't need a blockchain account.

## Run

```bash
yarn ts-node ./claimer/generateLightDid.ts
```

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
