---
id: claiming
title: Claiming
---
There are three actors in the KILT workflow: Claimers, Attesters and Verifiers.

As KILT is an open system, any entity can make a claim about anything. Therefore, as in the real world, a claim only has value if the verifier trusts the attester.

In KILT, claims are based on claim types (CTypes). A claimer can either create a new CType or, when KILT is established and standard CTypes are available, may use an existing CType when creating their claim.

## CTypes

CTypes are data types specific to KILT that define the structure of a claim (e.g., the data model for your claim). They are based on JSON Schema, a standard used to annotate and validate JSON documents. The schema defines which properties exist and what their type should be, e.g., a string, a number, an object, etc.

For more information, refer to our [CType section](./ctypes)

```js title="Example CType"
{
  schema: {
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
    $id: 'kilt:ctype:0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5',
  },
  owner: null,
  hash: '0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5',
}
```

## Create your Claim from a CType

Once you have a CType, you only need to fill it with content to create your claim, i.e. supply the values for all fields of the CType.
The resulting claim is referencing the ctype by its hash and includes the DID of the owner of the claim.

```js title="Example Claim"
{
  cTypeHash: '0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5',
  contents: { name: 'Alice', age: 29 },
  owner: 'did:kilt:light:004rVETkZQcK9aBr6SHZXaHQSDyqFFMW2rN5HtEooWgdB92JMg'
}
```

## Request an Attestation

After creating your claim, you can request an attestation by creating another object called `RequestForAttestation`, which you can send to the attester of your choice via any messaging system.

We recommend encrypting this object before sending it, since it contains privacy concerning information.

```js title="Example RequestForAttestation"
{
  claim: {
    cTypeHash: '0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5',
    contents: { name: 'Alice', age: 29 },
    owner: 'did:kilt:light:004rVETkZQcK9aBr6SHZXaHQSDyqFFMW2rN5HtEooWgdB92JMg'
  },
  claimHashes: [
    '0xbb92db44d232becea86b8a1082f09174693a1fd8052bb62d687200385193f108',
    '0xc972d522f76fabce5f35034ad62435e7635cb72cbcc344625862e488467cb111',
    '0xd2d37eae8bd39590453ce09b0de605a5c007dd7bc6494db65cfc9910468cb2da'
  ],
  claimNonceMap: {
    '0xf1c40621f317b4e0b67f72fbe8f7b179d938f8e6442d150b27ef8b77332b9090': '57ce56af-b278-4f17-b191-fd7179af627e',
    '0xa919076ce52e7a5e3d90fb3b8b7d0f8931cbfb3c8ab92d25369bb977948e6b71': 'a73eeb42-21bb-474c-ba76-51006d5c8f64',
    '0x9848c59c5ec1e05bf60e49736623ee1eb531496a53f04322d9442cf49d96333c': '9ce4a717-9896-4d1c-96e3-20499910dba7'
  },
  legitimations: [],
  delegationId: null,
  rootHash: '0x9f1d98c9cbe7bcfa8e46b314ecb62eac7c42f7cbbeac0dea17edfce3ee68dee9',
  claimerSignature: {
    signature: '0x44b8fe2210e1ca29bbdfaadc469c968369a35537a984f223f0806c2b27fb666641de4154649ed47732556d17862304ee9d27a74453d703097506d73c70d7dd8a',
    keyId: 'did:kilt:light:004rVETkZQcK9aBr6SHZXaHQSDyqFFMW2rN5HtEooWgdB92JMg#authentication',
  }
}
```
