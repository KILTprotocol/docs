---
id: claiming
title: Claiming
---
As KILT is an open system, any entity can make a claim about themselves. A claim (as in the real world) can only be trusted, if another trusted entity (we call them Attesters) confirms this claim. A Verifier therefore trusts specific Attesters, who attest Claims from Claimers.

In KILT, claims are based on claim types (CTypes). A claimer can either create a new CType or, when KILT is established and standard CTypes are available, may use an existing CType when creating their claim.

## Create your Claim from a CType

Once you have a CType, you only need to fill it with content to create your claim, i.e. supply the values for all fields of the CType.
The resulting claim is referencing the ctype by its hash and includes the DID of the owner (i.e., the subject) of the claim.

```js title="Example Claim"
{
  cTypeHash: '0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5',
  contents: { name: 'Alice', age: 29 },
  owner: 'did:kilt:light:004rVETkZQcK9aBr6SHZXaHQSDyqFFMW2rN5HtEooWgdB92JMg'
}
```

## Request an Attestation

After creating your claim, you can request an attestation by creating another object called `RequestForAttestation`, which you can send to the attester of your choice via any messaging system.
The object contains the original claim, data needed for selective disclosure (more on that in the [verification section](/docs/concepts/Credentials/verification)) of the claim contents, the legitimations and / or delegation id of the attester and the root hash, with which this object can be identified.

We recommend encrypting this object before sending it, since it contains privacy concerning information.

