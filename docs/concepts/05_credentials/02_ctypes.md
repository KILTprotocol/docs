---
id: ctypes
title: CTypes
---

import CodeBlock from '@theme/CodeBlock';

<!-- Taken from https://github.com/webpack-contrib/raw-loader/issues/91#issuecomment-648830498 -->

import ctypeSchema from '@site/scripts/out/ctype-schema.json.raw!=!raw-loader!@site/scripts/out/ctype-schema.json';
import ctype from '@site/scripts/out/ctype.json.raw!=!raw-loader!@site/scripts/out/ctype.json';

Claim types (CTypes) are data types specific to KILT that define the structure of a claim (i.e., its data model).
CTypes are based on [JSON Schema](https://json-schema.org/), a standard used to annotate and validate JSON documents.
The schema defines which properties exist and what their type should be, e.g., a string, a number, an object, etc.

## CType model JSON schema

The following are all required properties of the JSON schema for [CType models](https://github.com/KILTprotocol/sdk-js/blob/master/packages/core/src/ctype/CType.schemas.ts):

-   `$id`: An **identifier**: in the format `kilt:ctype:0x{cTypeHash}`.
-   `$schema`: A **reference to CType metaschema**: Describes what a valid CType must looks like. You can find the latest metaschema on IPFS at the following address [ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/](ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/).
-   `title`: A user-friendly name for the CType that makes it easier for users to contextualize.
-   `properties`: A set of fields (e.g., name, birth date) that the CType can contain, and that the Claimer can have attested. [Read more details about properties below](#properties).
-   `type`: An object containing properties for a claim about the Claimer in the credential.
-   `additionalProperties`: A boolean added since version 1 of CTypes, that must be set and allows or disallows any properties in addition to those in `properties`. If set to `false`, the CType validation will fail if there are any additional properties.

### Properties

When creating the accepted properties of a new CType schema, you define each property as a key-value pair.
The **key** is the property name (such as "age") and the **value** is an object that has a "type" property whose property defines which type the credential property should have (e.g., "number") or a `$ref` property whose value is a reference to another CType or one of its properties. Using a `$ref` allows for nested CTypes

Each property must have:

-   One of the following fields: `type` or `$ref`
-   A type of `string`, `integer`, `number` or `boolean` to define the attribute
-   Reference nested JSON schemas from previously created CTypes with a `uri` using `$ref`.
-   The format field is optionally:
    -   _Date_ format e.g., 2012-04-23T18:25:43.511Z
    -   _Time_ format e.g., T18:25:43.511Z
    -   _URI_ format e.g., "https://www.example.com"

<CodeBlock className="language-json" title="CType schema example">
  {ctypeSchema}
</CodeBlock>

When submitted, the CType schema is hashed to generate its own identifier, and it becomes the full CType object:

<CodeBlock className="language-json" title="Full CType example">
  {ctype}
</CodeBlock>

## CType metadata

You can link CType Metadata to a given CType to provide title and descriptions in different languages for the whole CType and its properties.

<!-- TODO: Add example of CType metadata -->

## Hashing

Use the hash of the CType to identify and anchor it to the KILT blockchain. Once this is done, it's no longer possible to change or delete the CType schema.

### Constructing the `hash` for the `$id`

KILT uses the `blake2b256` hashing algorithm to compute the hash of CTypes, after sorting the CType object by a canonicalization algorithm to ensure that semantically equivalent CTypes with different orders of their properties result in the same final hash.

KILT computes the hash from the following fields of the CType schema:

-   `$schema`
-   `properties`
    -   `key`
    -   `$ref`
    -   `type`
    -   `format`
-   `title`
-   `type`

A typical CType ID looks like this: `kilt:ctype:0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d5101`.

## Storing and querying CTypes

As of the [KILT runtime 1.9.0][kilt-runtime-1.9.0], you can query CTypes directly from any KILT archive node.

After creating a CType, its full content is only included in the blockchain block history and its hash and creation block number anchored to the blockchain state.

To query the full content of a CType, use its hash to look up the creation block number, and use that to query any KILT archive node for the extrinsic information about the CType.

The returned information includes the whole CType, which is now available for the user to, for example, verify credentials against it.

:::info CType creation cost

Currently, it costs 0.001 KILT to create a CType on the KILT blockchain.

:::

For a detailed developer-oriented guide to KILT CTypes, read the [CType Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md).

[kilt-runtime-1.9.0]: https://github.com/KILTprotocol/kilt-node/releases/tag/1.9.0

<!-- TODO: Do we still need this? -->

:::danger Deprecation Warning: CType metaschema draft-01

CTypes based on the [Draft 01](http://kilt-protocol.org/draft-01/ctype) metaschema are susceptible to faulty or malicious attester integrations that may introduce unexpected properties to a claim.
Due to this vulnerability, this version of the metaschema is deprecated and its use is discouraged when creating new CTypes.
For optimal security and functionality, use SDK version `0.33.0` or later for creating CTypes.
This newer version defaults to using the updated metaschema available at [`ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/`](ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq).

This also means you should update existing CTypes.

While existing CTypes continue to work in the short term, we advise to upgrade to the latest metaschema at your earliest convenience.

Old Property Value: `"$schema": "http://kilt-protocol.org/draft-01/ctype"`
New Property Value: `"$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/"`

## Migration instructions

Attesters should transition to issuing credentials using upgraded versions of CTypes currently in use.

Using sdk version `0.33.0` or later, you can produce a copy of an existing CType `oldCType` as follows:

```js
const newCType = CType.fromProperties(oldCType.title, oldCType.properties, 'V1')
```

The new CType has the same title and properties as the existing one, but be based on the new metaschema, resulting in a different hash and id.
After [registering the new CType on the KILT blockchain](../../develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md), you can use the new CType as a drop-in replacement in issuing credentials.

Verifiers depending on these CTypes should accept both the old and new CType during a transition period.
Test thoroughly to ensure the correct behavior and functionality of the new CTypes in your application.
:::
