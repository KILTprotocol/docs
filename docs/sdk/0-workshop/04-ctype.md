---
id: ctype
title: 💠 CTYPE
---

Before the <span class="label-role claimer">claimer</span> can make a claim about themselves, they first need a claim type (CTYPE for short).

A claim type (CTYPE for short) is a KILT-specific term, but the concept is simple:  
A CTYPE defines the structure of a claim. You can think of it as the data model for your claim.

For example, a very basic CTYPE for a driver's license could look like this:

<!-- copy and paste 🚧 full content of ctype.json -->

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

<!-- copy and paste 🚧 full content of ctype.json -->

```json
{
  "schema": {
      "$id": "kilt:ctype:0x4ova3hGbw6129rp1B4bzV5WckCUd3BbLHGotpD3zmmYDHfr9",
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
  "hash": "0x4ova3hGbw6129rp1B4bzV5WckCUd3BbLHGotpD3zmmYDHfr9"
}
```

OK, now you've got all you need to create a claim: an identity and a CTYPE.

Let's move on!

### Side note: How to create a `CType` from a schema

This step is **not part of the tutorial** and should be regarded as additional information on how to create a CType in the first place.
Normally, you would start with a schema which does not have a defined `$id` yet:

<!-- copy and paste 🚧 ctypeFromSchema_example from 2_ctypeFromSchema.ts -->

```javascript
const Kilt = require('@kiltprotocol/sdk-js')

const ctype = Kilt.CType.fromSchema({
  $schema: 'http://kilt-protocol.org/draft-01/ctype#',
  title: 'Drivers License',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'integer',
    },
  },
  type: 'object',
})
```
