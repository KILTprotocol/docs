---
id: ctype
title: 💠 CTYPE
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/workshop/ctype.txt';
import Example2 from '!!raw-loader!../../../code-examples/workshop/3_1_ctypeFromSchema.ts';
import Example3 from '!!raw-loader!../../../code-examples/workshop/3_2_ctypeFromSchema.ts';

Before the <span class="label-role claimer">claimer</span> can make a claim about themselves, first a claim type (CType for short) needs to be found or created.
It requires an account and a full DID with tokens in order to pay the Angel's fee and deposit of a CType.

A claim type (CTYPE for short) is a KILT-specific term, but the concept is simple:  
A CTYPE defines the structure of a claim. You can think of it as the data model for your claim.

For example, a very basic CTYPE for a driver's license could look like this:

<CodeBlock className="language-json">
  {Example1}
</CodeBlock>

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

In a real-life setup, a user would simply retrieve an existing CTYPE from the chain or a repository of CTYPEs for example via a REST API.

In this tutorial, we'll create and try to store a CTYPE on the KILT test blockchain.

## Code

Create a new file `ctype.js`

Copy the following to create a `CType` from a schema:

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

Once you have constructed the schema, pass the attester, attestersFullDid, keystore and ctype.

Creating a new file `storedCtype.js`

Copy the following to store the `CType` on-chain, an account must have the require amount to pay the Angel's fee and deposit:

<CodeBlock className="language-ts">
  {Example2}
</CodeBlock>

Create a new file `ctype.json` and store the ctype.

OK, now you've got all you need to create a claim: a light DID and a CTYPE.

Let's move on!
