---
id: ctypes
title: CTypes
---

CTypes are data types specific to KILT that define the structure of a claim (i.e., its data model).
CTypes are based on JSON Schema, a standard used to annotate and validate JSON documents.
The schema defines which properties exist and what their type should be, e.g., a string, a number, an object, etc.

## JSON Schema

KILT uses [JSON Schema](https://json-schema.org/) (currently draft-07) to validate and annotate data in a strict format.
This data format is used to define [CType models](https://github.com/KILTprotocol/sdk-js/blob/develop/packages/core/src/ctype/CTypeSchema.ts).
The following are all required properties of the schema, with no additional properties allowed:

- **Identifier**: `$id` in the format `kilt:ctype:0x{cTypeHash}`.
- **KILT specific JSON-Schema**: Accessible at [http://kilt-protocol.org/draft-01/ctype-input](http://kilt-protocol.org/draft-01/ctype-input#).
- **Title**: Defines a user-friendly name for the CType that makes it easier for users to contextualize.
- **Properties**: Set of fields (e.g., name, birthdate) that the CType can contain, and hence that the Claimer can have attested.

### Properties

When creating a new CType schema, the following properties are required:

- One of the following fields: `type` or `$ref`
- A type of `string`, `integer`, `number` or `boolean` to define the attribute
- Nested JSON schemas can be referenced by a `uri` using `$ref` (giving the advantage of being able to reference previously-created CTypes)
- The format field is optionally:
  - *Date* format e.g., 2012-04-23T18:25:43.511Z
  - *Time* format e.g., T18:25:43.511Z
  - *URI* format e.g., https://www.example.com

<!-- TODO: Replace with dynamically-generated JSON -->
```js title="CType schema example"
{
  $id: 'kilt:ctype:0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d5101',
  $schema: 'http://kilt-protocol.org/draft-01/ctype#',
  title: 'CtypeModel 2',
  properties: {
    name: { type: 'string' },
    age: { $ref: `kilt:ctype:0x0147d10ef72a1b0c4a8e0147d10ef72a1b0c4a8e0147d10ef72a1b0c4a8e82af` },
    },
  type: 'object'
}
```

The CType schema is afterwards wrapped into the full CType object:

<!-- TODO: Replace with dynamically-generated JSON -->
```js title="Full CType example"
{
  schema:  {...} // as defined in the example above,
  owner: null, // DID of the owner, or null
  hash: '0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d5101' // For looking up on-chain. It matches the `$id` property defined above
}
```

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

The `$id` property, if present, is excluded from the hashing process since it represents the result of such a process, and is overwritten with the resulting hash, prepended with `kilt:ctype:` to form a URI.
Hence, a typical CType ID would look like this: `kilt:ctype:0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d5101`.

## Storing and Querying CTypes

CTypes can be stored on the blockchain.
After creating a CType, its full content is included only in the blockchain block history, while its hash is anchored to the blockchain state.

Querying the full content of a CType is not trivial, since the transaction would have to be found in the blockchain history. This functionality can be and is offered by indexing services, such as [Subscan](https://spiritnet.subscan.io/).

For a detailed developer-oriented guide to KILT CTypes, see our [CType Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md).
