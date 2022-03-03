---
id: ctypes
title: CTypes
---

**CTypes are standardised structures for credentials: the JSON scheme which describes the fields in a claim type. These fields are filled out by the claimer, indicating the information that needs to be attested. A CType (and subsequently when attested, the credential) may contain several “attributes”, for example, full name, date of birth, access level and id number.**

## JSON-Schema

KILT uses [JSON-Schema](https://json-schema.org/) (currently draft-07) to validate and annotate data in a strict format. This data format for [CType models](https://github.com/KILTprotocol/sdk-js/blob/develop/packages/core/src/ctype/CTypeSchema.ts) forms a CType with the definition of its characteristics. The following are all required properties of the schema, with no additional properties allowed:

- Identifier: `$id` in the format `kilt:ctype:0x{cTypeHash}`
- KILT specific JSON-Schema: '[http://kilt-protocol.org/draft-01/ctype-input#](http://kilt-protocol.org/draft-01/ctype-input#)'
- Title: defines a user-friendly name for the CType that makes it easier for users to contextualise
- Properties: Each property is the attribute the claimer wishes to have attested by the attester.

### Properties

When making a claim for a CType, all the following properties are required:

- One of the following fields: `type` or `$ref`
- A type of 'string', 'integer', 'number' and 'boolean' to define the attribute
- Nested JSON schemas can be referenced by a `uri` using `$ref`(giving the advantage of being able to reference other CTypes)
- The format field is optionally:
  - Date format e.g. 2012-04-23T18:25:43.511Z
  - Time format e.g. T18:25:43.511Z
  - URI format e.g. https://www.example.com

```js
{
  $id: 'kilt:ctype:0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010',
  $schema: 'http://kilt-protocol.org/draft-01/ctype#',
  title: 'CtypeModel 2',
  properties: {
    name: { type: 'string' },
    age: { $ref: `kilt:ctype:0x1`, },
    },
  type: 'object',
}
```

### Referencing

JSON-schema provides a referencing keyword `$ref` that can be used as a pointer from other JSON schemas. This allows CTypes to either reference fields in other CTypes or nest entire CTypes within one another, providing flexibility for several different use cases.

This facility requires all JSON objects to build the schema and allows the reuse of previous schemas, reducing the need for copy-and-paste.

A claim from a nested CType requires the given CType, a list of comprised schemas, the claim content and the address of the owner.

```js
nested = {
  $id: 'kilt:ctype:0xda3861a45e0197f3ca145c2c20f9f126e5053fas503e459af4255cf8011d51010',
  $schema: 'http://kilt-protocol.org/draft-01/ctype#',
  title: 'KYC and Passport',
  type: 'object',
  properties: {
    fullName: {
      $ref: `${passport.schema.$id}#/properties/fullName`,
    },
    passportIdentifer: {
      $ref: `${passport.schema.$id}#/properties/passportIdentifer`,
    },
    streetAddress: {
      $ref: `${passport.schema.$id}#/properties/streetAddress`,
    },
    city: {
      $ref: `${passport.schema.$id}#/properties/city`,
    },
    state: {
      $ref: `${passport.schema.$id}#/properties/state`,
    },
    ID: {
      $ref: `${kyc.schema.$id}#/properties/ID`,
    },
    number: {
      $ref: `${kyc.schema.$id}#/properties/number`,
    },
    name: {
      $ref: `${kyc.schema.$id}#/properties/name`,
    },
  },
}
```

## CType Metadata

CType Metadata can be linked to a given CType to give the context of its intended use-case: These include the:

- Title
- Description
- Properties
  - Title
  - Description

## Hashing

The hash of the CType is used to identify and anchor it to the chain. This `hash` is stored on-chain via the store method.

### Constructing the `hash` for the `$id`

KILT uses the hashing algorithm blake2b as a hex string. The object is sorted by a canonicalization algorithm before hashing to ensure that semantically equivalent CTypes with different order of their properties would produce the same output hash.

The `hash` is made from the schema object from the following values:

- `$schema`
- `properties`
  - `$id`
  - `$ref`
  - `type`
- `title`
- `type`

The `$id` property, if present, is excluded from the hashing process since it represents the result of such a process.

```js
hashVal = {
  $schema: schema.$schema,
  properties: schema.properties,
  title: schema.title,
  type: schema.type,
}
```

The hash has a prefix of `kilt:ctype` followed by the hex string. A typical `CTypeHash` value would look like: `kilt:ctype:0xba15bf4960766b0a6ad7613aa3338edce95df6b22ed29dd72f6e72d740829b84`

## Storing CTypes

CTypes are not stored in a centralised storage database. When a credential is created, the schema `$id`/`cTypeHash` is stored on-chain. The hash can then be verified and referenced at any time by making a call to the KILT blockchain to check if the corresponding CType matches the stored `$id`.

A Nested CType is a hierarchical composite schema that includes other simpler CTypes as substructures. The Nested CType needs to list all the included sub-CTypes. This allows verification of the owners of the included CTypes on-chain using the CType hash. For example, a company could use a Nested CType that includes the required credentials, qualifications, health and safety certs, etc of its current employees.

## Exchange of CTypes with different actors

There are three actors in the KILT workflow: Claimers (the holder of the credential), Attesters (who do the work and approve or reject the credential) and Verifiers (who require a credential from a Claimer).

A Claimer can apply for a new credential by requesting a CType from the Attester. The Claimer then completes the CType and sends the information to be attested to the Attester. The Attester confirms the information and returns a credential.

A Verifier can request a credential from a Claimer that follows a given CType/schema. For example, a gaming company may request a specific credential to verify the gamer's ranking. Depending on how this credential was created initially, this can be done with the software development kit (SDK) messaging, or in other ways independent of the protocol (e.g., via email, QR code, etc.)

Each actor in the system can verify the ownership and validity of the given CType at any time.
