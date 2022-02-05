---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '../../../../src/components/SnippetBlock';
import GenerateKeypairs from '!!raw-loader!../../../../code-examples/workshop/claimer/generateKeypairs.js';
import GetLightDid from '!!raw-loader!../../../../code-examples/workshop/claimer/getLightDid.js';
import Index from '!!raw-loader!../../../../code-examples/workshop/claimer/index.js';

Time to make a light DID using the previously created account for the <span class="label-role claimer">Claimer</span>.
Since a light DID is not registered on the blockchain, you don't need funds for creating one.
Remember light DIDs can:

- Sign claims and attestations with the authentication keys
- Encrypting messages with the encryption keys

Take a look at our [DID documentation](/docs/sdk/core-feature/did) if you want to learn more about DIDs and the difference between their light and full versions.

## generateKeypairs

As before we'll first create our signing and encryption `keypairs`. We'll use an inbound keystore to generate them.
Create a file `claimer/generateKeypairs.js` and copy the code below.

<CodeBlock className="language-js" title="claimer/generateKeypairs.js">
  {GenerateKeypairs}
</CodeBlock>

## getFullDid

Once our `keypairs` are generated we can create our light DID. Because it's off-chain
we can just create the DID object everytime, no need to resolve. But we'll still accept
`didUri` and prompt to save it in `.env` for our reference.

<CodeBlock className="language-js" title="claimer/getLightDid.js">
  {GetLightDid}
</CodeBlock>

## Claimer Index

Ok let's update our `claimer/index.js`. We bring in the `CLAIMER_DID_URI` form `.env` and our `getLightDid` function.
Finally we'll return the `keystore`, `account` and `lightDid` for use elsewhere later.

<SnippetBlock
  title="claimer/index.js"
  className="language-js"
  snippets='[
    [0, 17],
    [20,31],
    "initialize();"
  ]'
>
  {Index}
</SnippetBlock>

## Run

```bash
node ./claimer/index.js
```

Your output will provide you with `CLAIMER_DID_URI`. Be sure to save it in your `.env`
file, it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine-stg.kilt.io/para-public-ws

ATTESTER_MNEMONIC="gold upset segment ca...
ATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...
ATTESTER_DID_URI=did:kilt:4pjUYTbttjJHqT...

CLAIMER_MNEMONIC="gold upset segment cak...
CLAIMER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMes...
CLAIMER_DID_URI=did:kilt:light:004tTDugL...
```

Well done - You've successfully generated a light DID!
