---
id: claiming
title: Claims
---

As KILT is an open system, entities can make claims about any other entities, including themselves.
A Claim (as in the real world) can only be trusted if another trusted entity (we call them Attesters) *certifies* this Claim.
Therefore, Verifiers might trust different Attesters for distinct scenarios.

## Creating a Claim

In KILT, Claims are based on claim types (CTypes).
Hence, given a CType, a Claimer only needs to create a Claim with the properties specified in the CType schema.
The resulting Claim contains a reference to the CType by its hash and includes the identity of the Claim subject (identified by the `owner` property).

<!-- TODO: Replace with dynamically-generated JSON -->
```js title="Claim example"
{
  cTypeHash: '0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5',
  contents: { name: 'Alice', age: 29 },
  owner: 'did:kilt:light:004rVETkZQcK9aBr6SHZXaHQSDyqFFMW2rN5HtEooWgdB92JMg'
}
```

## Requesting a Credential

Once the Claimer has created a Claim, they need to get it *certified*, i.e., attested, by an Attester.
The resulting `RequestForAttestation` must then be sent to the chosen Attester using any messaging system.

The `RequestForAttestation` contains the original Claim, data needed for future selective disclosure (more on that in the [Verification section](./05_verification.md)) of the claim contents, the legitimation and / or delegation ID of the Attester and the Claim root hash, which is used to identify the request for attestation and to store it on the KILT blockchain.

For a detailed developer-oriented guide to KILT Claims, please refer to our [Claim Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/02_attestation_request.md).
