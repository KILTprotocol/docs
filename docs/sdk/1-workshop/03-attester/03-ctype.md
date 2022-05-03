---
id: ctype
title: CType
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '../../../../src/components/SnippetBlock';
import CtypeSchema from '!!raw-loader!../../../../code-examples/workshop/attester/ctypeSchema.ts';
import GenerateCtype from '!!raw-loader!../../../../code-examples/workshop/attester/generateCtype.ts';

A claim type (CType for short) is a KILT-specific term, but the concept is simple:
A CType defines the structure of a claim.
You can think of it as the data model for your claim.


Before the <span class="label-role attester">Attester</span> can issue attestations, they need to decide which CType they support.
A traffic authority will only issue driver's licenses (=> CType for drivers license) and not trade register excerpts.
Since CTypes enable interoperability between attesters, it is highly recommended to use existing CTypes instead of creating new ones.
But in this workshop, we create our own CType.

:::info CType

A CType ensures that a claim contains all required attributes.
E.g. a driver's license has to contain a name, date of birth, the type of vehicle that can be driven by the claimer.
The CType is especially important since a verifier would request attestations for a specific CType (e.g. the traffic police wants to see your driver's license and not your gym membership).

If you want to learn more about CTypes take a look at our [in depth CType documentation](/docs/sdk/core-feature/ctypes).
:::

Creating CTypes requires an account and a full DID.
Make sure your account holds tokes so that you can pay the fees for creating a CType.

For example, a very basic CType for a driver's license could look like this:

```json
{
  "schema": {
    "$id": "kilt:ctype:0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5",
    "$schema": "ipns://k51qzi5uqu5dkglos1mtdukd4axyhwav7e98bga8g2nptrkgcbj9506ruoadiz/v1/ctype.json",
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
  "owner": "did:kilt:4rDtLxs1PKzeKvxoMUv8NwhugYiSqTvKBwaPfv8xCLsghKaf",
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
| `owner`                 | The DID of the user who created this CType.                              |
| `hash`                  | Most important attribute, the hash is the CType's **digital footprint**. |

A CType is stored on the KILT blockchain.

In a real-life setup, a user would simply retrieve an existing CType from the chain or a repository of CTypes for example via a Credential Registry's REST API.

In this tutorial, we'll have the <span class="label-role attester">Attester</span> create and attempt to store a CType on the KILT test blockchain.

## Create CType

Now we have our entry ready, create a new file `attester/ctypeSchema.ts`. Copy the following to create a `CType` from a schema:

<CodeBlock title="attester/ctypeSchema.ts" className="language-js">
  {CtypeSchema}
</CodeBlock>

## Get CType

Create a new file `attester/generateCtype.ts`. We'll use this to check if the `CType` is on-chain already. If yes we'll
return it, otherwise we'll store it on-chain. Remember, an account must have the required amount to pay the Angel's fee and deposit.

<CodeBlock title="attester/generateCtype.ts" className="language-js">
  {GenerateCtype}
</CodeBlock>

## Run

To run it, just execute the `attester/generateCtype.ts` file.

```bash
yarn ts-node attester/generateCtype.ts
```

OK, now before we can issue credentials, we need a <span class="label-role claimer">Claimer</span> to request one! Let's move on!
