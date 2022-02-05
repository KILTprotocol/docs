---
id: account
title: Account
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '../../../../src/components/SnippetBlock';
import Index from '!!raw-loader!../../../../code-examples/workshop/claimer/index.js';
import GetAccount from '!!raw-loader!../../../../code-examples/workshop/claimer/getAccount.js';

Now we'll create an account for a  <span class="label-role claimer">Claimer</span>.

## Account

To generate an account, we'll repeat the steps from the `Attester Account`.

Open `claimer/getAccount.js` and paste the following code:

<CodeBlock className="language-js" title="claimer/getAccount.js">
  {GetAccount}
</CodeBlock>

## Index

Let's setup our  <span class="label-role claimer">Claimer</span> index. Copy the below into `claimer/index.js`

<SnippetBlock
  title="claimer/index.js"
  className="language-js"
  snippets='[
    [0, 16],
    [20,25],
    [26,27],
    "  console.log(account);",
    [29,31],
    "initialize();"
  ]'
>
  {Index}
</SnippetBlock>


Now run it to get your  <span class="label-role claimer">Claimer</span> `<address>` and `<mnenomic>`.
```bash
node ./claimer/index.js
```

Your output will provide you with `CLAIMER_MNEMONIC` and `CLAIMER_ADDRESS`. Be sure to save it in your `.env` file, it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine-stg.kilt.io/para-public-ws

ATTESTER_MNEMONIC="gold upset segment ca...
ATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...
ATTESTER_DID_URI=did:kilt:4pjUYTbttjJHqT...

CLAIMER_MNEMONIC="gold upset segment cak...
CLAIMER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMes...
```

That's it - You've successfully generated your  <span class="label-role claimer">Claimer</span> account! Let's setup the  <span class="label-role claimer">Claimer</span>'s off-chain `DID` next!
