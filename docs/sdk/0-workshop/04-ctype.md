---
id: ctype
title: 💠 CTYPE
---
import CodeBlock from '@theme/CodeBlock';
import Example2 from '!!raw-loader!../../../code-examples/2_ctypeFromSchema.ts';

<!-- import Example1 from '!!raw-loader!../../../code-examples/ctype.json'; -->

Before the <span class="label-role claimer">claimer</span> can make a claim about themselves, they first need a claim type (CTYPE for short).

A claim type (CTYPE for short) is a KILT-specific term, but the concept is simple:  
A CTYPE defines the structure of a claim. You can think of it as the data model for your claim.

For example, a very basic CTYPE for a driver's license could look like this:

<!-- <CodeBlock className="language-json">
  {Example1}
</CodeBlock> -->

> 💡 CTYPEs are based on JSON Schema, a standard used to annotate and validate JSON documents.
> A schema defines which properties exist and what their type should be, i.e. is it a `string`, a `number`, an `object`, etc.
>
> When you create a CType from a schema, it is checked whether your CType aligns with the underlying schema.
> Think of checking whether a cook (user) followed a certain recipe (schema) when preparing a meal (creating a CType).
>
> We don't need to dive into it in this tutorial, for now we can think of CTYPE as JSON objects.

Let's have a look at these attributes.

| Key                     | Value                                                                    |
| ----------------------- | ------------------------------------------------------------------------ |
| `schema` > `$id`        | The KILT id of this CTYPE.                                               |
| `schema` > `$schema`    | The JSON schema on which the CTYPE is based.                             |
| `schema` > `title`      | The title of the CTYPE.                                                  |
| `schema` > `properties` | The properties that a claim of type in `$schema` should have.            |
| `owner`                 | The public address of the user who created this CTYPE.                   |
| `hash`                  | Most important attribute, the hash is the CTYPE's **digital footprint**. |

A CTYPE is stored on the KILT blockchain - more exactly, the CTYPE's hash is stored on the KILT blockchain.
The full CTYPE can be stored elsewhere, e.g., on a regular web service.

In a real-life setup, a user would simply retrieve an existing CTYPE from a repository of CTYPEs for example via a REST API.

In this tutorial, to keep it simple we'll use a CTYPE that we already know exists on the KILT test blockchain.

## Code

Create a new file `ctype.json`.

Open it and paste the following:

<!--TODO: This needs to be updated with the correct CTYPE saved on the testnet after it is restarted. -->

<!-- <CodeBlock className="language-json">
  {Example1}
</CodeBlock> -->

OK, now you've got all you need to create a claim: an identity and a CTYPE.

Let's move on!

### Side note: How to create a `CType` from a schema

This step is **not part of the tutorial** and should be regarded as additional information on how to create a CType in the first place.
Normally, you would start with a schema which does not have a defined `$id` yet:

<CodeBlock className="language-ts">
  {Example2}
</CodeBlock>
