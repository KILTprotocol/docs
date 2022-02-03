---
id: ctype
title: CType
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '../../../../src/components/SnippetBlock';
import CType from '!!raw-loader!../../../../code-examples/workshop/attester/createCtype.js';
import GetCType from '!!raw-loader!../../../../code-examples/workshop/attester/getCtype.js';
import Attester from '!!raw-loader!../../../../code-examples/workshop/attester/index.js';
import Index from '!!raw-loader!../../../../code-examples/workshop/index.js';

A claim type (CType for short) is a KILT-specific term, but the concept is simple:
A CType defines the structure of a claim.
You can think of it as the data model for your claim.


Before the <span class="label-role attester">Attester</span> can issue attestations, they need to decide which CType they support.
A traffic authority will only issue drivers licenses (=> CType for drivers license) and not trade register excerpts.
Since CTypes enable interoperability between attesters, it is highly recommended to use existing CTypes instead of creating new once.
But in this workshop we create our own CType.

:::info CType

A CType ensures that a claim contains all required attributes.
E.g. a drivers license has to contain a name, date of birth, the type of vehicle that can be driven by the claimer.
The CType is especially important since a verifier would request attestations for a specific CType (e.g. the traffic police wants to see your drivers license and not your gym membership).

If you want to learn more about CTypes take a look at our [in depth CType documentation](/docs/sdk/core-feature/ctypes).
:::

Creating CTypes requires an account and a full DID.
Make sure your account holds tokes so that you can pay the fees for creating a CType.

For example, a very basic CType for a driver's license could look like this:

```json
{
  "schema": {
    "$id": "kilt:ctype:0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5",
    "$schema": "http://kilt-protocol.org/draft-01/ctype#",
    "title": "Drivers License",
    "properties": {
      "name": {
        "type": "string"
      },
      "age": {
        "type": "integer"
      }
    },
    "type": "object"
  },
  "owner": "5DD7fAZKSpgctg1ZQigAYuk3ypBtr2Q9RPKJBx5UpUwQw4vB",
  "hash": "0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5"
}
```

Let's have a look at these attributes.

| Key                     | Value                                                                    |
| ----------------------- | ------------------------------------------------------------------------ |
| `schema` > `$id`        | The KILT id of this CType.                                               |
| `schema` > `$schema`    | The JSON schema on which the CType is based.                             |
| `schema` > `title`      | The title of the CType.                                                  |
| `schema` > `properties` | The properties that a claim of type in `$schema` should have.            |
| `owner`                 | The public address of the user who created this CType.                   |
| `hash`                  | Most important attribute, the hash is the CType's **digital footprint**. |

A CType is stored on the KILT blockchain.

In a real-life setup, a user would simply retrieve an existing CType from the chain or a repository of CTypes for example via a Credential Registry's REST API.

In this tutorial, we'll have the <span class="label-role attester">Attester</span> create and attempt to store a CType on the KILT test blockchain.

## Create CType

Now we have our entry ready, create a new file `attester/createCtype.js`. Copy the following to create a `CType` from a schema:

<CodeBlock title="attester/createCtype.js" className="language-js">
  {CType}
</CodeBlock>

## Get CType

Create a new file `attester/getCtype.js`. We'll use this to check if the `CType` is on-chain already. If yes we'll
return it, otherwise we'll store it on-chain. Remember, an account must have the require amount to pay the Angel's fee and deposit.

<CodeBlock title="attester/getCtype.js" className="language-js">
  {GetCType}
</CodeBlock>

## Index

Let's add a function called `getCtype` in our `attester/index.js` file.
In the real world <span class="label-role claimer">claimers</span> will be calling this from another device, let's mimic this by exporting the function.
We can also make use of the `initialize` function we built earlier.

<SnippetBlock
  title="attester/index.js"
  className="language-js"
  snippets='[
    [0,18],
    [19,38],
    [45,47]
  ]'
>
  {Attester}
</SnippetBlock>

## Run

To run it, let's call it from our main `index.js`. First we import our <span class="label-role attester">Attester</span>.
Then simple call `attester.getCType`, we can store the result in `ctype.json` for reference.

<SnippetBlock
  title="index.js"
  className="language-js"
  snippets='[
    [0, 11],
    [12,13],
    [14,24],
    "  const ctype = JSON.parse(ctypeJSON);",
    "  console.log(JSON.stringify(ctype, null, 2));\n",
    [49,54]
  ]'
>
  {Index}
</SnippetBlock>

```bash
node ./index.js
```

OK, now before we can issue credentials, we need a  <span class="label-role claimer">Claimer</span> to request one! Let's move on!
