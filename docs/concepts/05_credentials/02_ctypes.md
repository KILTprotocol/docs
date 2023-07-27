---
id: ctypes
title: CTypes
---
import CodeBlock from '@theme/CodeBlock';

<!-- Taken from https://github.com/webpack-contrib/raw-loader/issues/91#issuecomment-648830498 -->
import ctypeSchema from '@site/scripts/out/ctype-schema.json.raw!=!raw-loader!@site/scripts/out/ctype-schema.json';
import ctype from '@site/scripts/out/ctype.json.raw!=!raw-loader!@site/scripts/out/ctype.json';

CTypes are data types specific to KILT that define the structure of a claim (i.e., its data model).
CTypes are based on JSON Schema, a standard used to annotate and validate JSON documents.
The schema defines which properties exist and what their type should be, e.g., a string, a number, an object, etc.

## JSON Schema

KILT uses [JSON Schema](https://json-schema.org/) (currently draft-07) to validate and annotate data in a strict format.
This data format is used to define [CType models](https://github.com/KILTprotocol/sdk-js/blob/master/packages/core/src/ctype/CType.schemas.ts).
The following are all required properties of the schema:

- **Identifier**: `$id` in the format `kilt:ctype:0x{cTypeHash}`.
- **Reference to CType metaschema (`$schema`)**: Describes what a valid CType must looks like. The latest metaschema is accessible at [ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/](ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/).
- **Title**: Defines a user-friendly name for the CType that makes it easier for users to contextualize.
- **Properties**: Set of fields (e.g., name, birthdate) that the CType can contain, and hence that the Claimer can have attested.
- **Type**: The CType is an object an must be declared.
- **Additional properties**: The *additionalProperties* is set to false per default, this restriction ensures that unwanted and malicious attesters cannot add properties to the CType without the user's consent.

:::warning
 Deprecation Warning: Property Swap

Warning: The following CType Schema property value is deprecated.
Please update your code accordingly to avoid any issues.
It will mean you should update existing CTypes.
The previous version of the CType will work, however, it is advised to upgrade.

Old Property Value:  `"$schema": "http://kilt-protocol.org/draft-01/ctype#"`

New Property Value:  `"$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/"`

**Migration instructions:** 

Attesters are recommended to transition to issuing credentials using upgraded versions of CTypes currently in use.

Using sdk version `0.33.0` or later, you can produce a copy of an existing CType `oldCType` as follows:

``` js
const newCType = CType.fromProperties(oldCType.title, oldCType.properties, 'V1')
```

The new CType will have the same title and properties as the existing one, but will be based on the new metaschema, resulting in a different hash and id.
After [registering the new CType on the Kilt blockchain](../../develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md), you can use the new CType as a drop-in replacement in issuing credentials.
Depending verifiers are recommended to accept both the old and new CType during a transition period.
Test thoroughly to ensure the correct behaviour and functionality of the new CTypes in your application.

If you encounter any issues during the migration process or have questions, refer to the documentation or seek support from the relevant community.
:::

### Properties

When creating a new CType schema, the following properties are required:

- One of the following fields: `type` or `$ref`
- A type of `string`, `integer`, `number` or `boolean` to define the attribute
- Nested JSON schemas can be referenced by a `uri` using `$ref` (giving the advantage of being able to reference previously-created CTypes)
- The format field is optionally:
  - *Date* format e.g., 2012-04-23T18:25:43.511Z
  - *Time* format e.g., T18:25:43.511Z
  - *URI* format e.g., <https://www.example.com>

<CodeBlock className="language-json" title="CType schema example">
  {ctypeSchema}
</CodeBlock>

The CType schema is afterwards hashed to generate its own identifier, and it becomes the full CType object:

<CodeBlock className="language-json" title="Full CType example">
  {ctype}
</CodeBlock>

## CType Metadata

CType Metadata can be linked to a given CType to provide title and descriptions in different languages for the whole CType and its properties.

<!-- TODO: Add example of CType metadata -->

## Hashing

The hash of the CType is used to identify and anchor it to the KILT blockchain.

### Constructing the `hash` for the `$id`

KILT uses the hashing algorithm `blake2b256` to compute the hash of CTypes.
Before hashing, the CType object is sorted by a canonicalization algorithm to ensure that semantically equivalent CTypes with different order of their properties result in the same final hash.

The hash is computed from the following fields of the CType schema:

- `$schema`
- `properties`
  - `key`
  - `$ref`
  - `type`
  - `format`
- `title`
- `type`

A typical CType ID would look like this: `kilt:ctype:0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d5101`.

## Storing and Querying CTypes

As of the [KILT runtime 1.9.0][kilt-runtime-1.9.0], CTypes can be queried directly from any KILT archive node!

After creating a CType, its full content is included only in the blockchain block history, while its hash and creation block number is anchored to the blockchain state.

Querying the full content of a CType then becomes trivial, since the CType hash can be used to look up its creation block number, and then that information can be used to ask any KILT archive node for the extrinsic information about the CType creation.
The information includes the whole CType, which is now available for the user to, e.g., verify credentials against it.

For adding a CType, a constant fee of 0.001 KILT is required.

For a detailed developer-oriented guide to KILT CTypes, see our [CType Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md).

[kilt-runtime-1.9.0]: https://github.com/KILTprotocol/kilt-node/releases/tag/1.9.0
