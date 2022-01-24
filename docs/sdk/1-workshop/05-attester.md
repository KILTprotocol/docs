---
id: attester-ctype
title: 👤 Attester CTYPE
---

import CodeBlock from '@theme/CodeBlock';
import CType from '!!raw-loader!../../../code-examples/workshop/attester/createCType.js';
import GetCType from '!!raw-loader!../../../code-examples/workshop/attester/getCType.js';
import Attester from '!!raw-loader!../../../code-examples/workshop/attester/index-3.js';
import Index from '!!raw-loader!../../../code-examples/workshop/index-2.js';

Before the <span class="label-role claimer">claimer</span> can make a claim about themselves, first a claim type (CType for short) needs to be found or created.
It requires an account and a full DID with tokens in order to pay the Angel's fee and deposit of a CType.

A claim type (CTYPE for short) is a KILT-specific term, but the concept is simple:  
A CTYPE defines the structure of a claim. You can think of it as the data model for your claim.

For example, a very basic CTYPE for a driver's license could look like this:

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

:::info CType

CTYPEs are based on JSON Schema, a standard used to annotate and validate JSON documents.
A schema defines which properties exist and what their type should be, i.e. is it a `string`, a `number`, an `object`, etc.

When you create a CType from a schema, it is checked whether your CType aligns with the underlying schema.
Think of checking whether a cook (user) followed a certain recipe (schema) when preparing a meal (creating a CType).

We don't need to dive into it in this tutorial, for now we can think of CTYPE as JSON objects.

:::

Let's have a look at these attributes.

| Key                     | Value                                                                    |
| ----------------------- | ------------------------------------------------------------------------ |
| `schema` > `$id`        | The KILT id of this CTYPE.                                               |
| `schema` > `$schema`    | The JSON schema on which the CTYPE is based.                             |
| `schema` > `title`      | The title of the CTYPE.                                                  |
| `schema` > `properties` | The properties that a claim of type in `$schema` should have.            |
| `owner`                 | The public address of the user who created this CTYPE.                   |
| `hash`                  | Most important attribute, the hash is the CTYPE's **digital footprint**. |

A CTYPE is stored on the KILT blockchain.

In a real-life setup, a user would simply retrieve an existing CTYPE from the chain or a repository of CTYPEs for example via a a Credential Registry's REST API.

In this tutorial, we'll have the `Attester` create and attempt to store a CTYPE on the KILT test blockchain.

## Index

Let's add a function called `getCtype` in our `attester/index.js` file. In the real world `Claimers` will
be calling this from another device, let's mimic this by exporting the function. We can also make use of the
`initialize` function we built earlier. 

<CodeBlock className="language-js" title="attester/index.js">
  {Attester}
</CodeBlock>

## Create CTYPE

Now we have our entry ready, create a new file `attester/ctype.js`. Copy the following to create a `CType` from a schema:

<CodeBlock className="language-js">
  {CType}
</CodeBlock>

## Get CTYPE

Create a new file `attester/getCType.js`. We'll use this to check if the `CType` is on-chain already. If yes we'll 
return it, otherwise we'll store it on-chain. Remember, an account must have the require amount to pay the Angel's fee and deposit.

<CodeBlock className="language-js">
  {GetCType}
</CodeBlock>

## Run

To run it, let's call it from our main `index.js`. First we import our `attester`.
Then simple call `attester.getCType`, we can store the result in `ctype.json` for reference.

<CodeBlock className="language-js" title="index.js">
  {Index}
</CodeBlock>

```bash
node ./index.js
```

OK, now before we can issue credentials, we need a `Claimer` to request one! Let's move on!
