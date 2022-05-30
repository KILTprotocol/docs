---
id: terms-and-quote
title: Terms and Quote
---

The Claimer may request and / or the Attester may send the Terms of the attestation, i.e., the requirements set by the participants (the Claimer and the Attester) for the conditions of the attestation.

These Terms are defined and agreed upon before the attestation is created. This part of the process requires interaction and communication between both parties. This communication can be done independently, e.g. in person, via messaging, on social media etc., or via the KILT software development kit (SDK).

## Sending Terms using the KILT SDK

Both “request terms” and “submit terms” are part of the messaging system: the message is sent as “request terms” and received as “submit terms”.

The interaction is as follows:

- The Claimer creates a partial `Claim` (optionally) and sends a message to the Attester, requesting the Terms
- An Attester creates a `Terms` object and sends it, as part of a "submit terms" message, back to the Claimer.
- The Claimer receives the message, checks the Terms and, if all is in order, agrees to them

## How to create a Terms object

When creating a Terms object, at least one of the following must be set: Legitimations, Quote or Delegations.

- **Legitimations**: Legitimations are Credentials, issued to the Attester the Claimer wants to interact with, showing that the Attester has the authority or legitimacy to attest the claim requested. This is a way of establishing trust between the participants.

- **Quote**: Details on how to create a Quote are outlined here. In brief, the Quote could include any or all of the following:

  - The time frame the claim will be completed in
  - The public address of the Attester completing the attestation
  - The hash of the corresponding CType
  - A breakdown of all the (net and gross) costs, the currency quoted, and any taxes associated with the attestation.
  - A link to the terms and conditions of the attestation.

- **Delegations**: An Attester may include the right to attest to a specific claim from a top-down trust authority e.g. a business giving the right to their employee to attest the claim on their behalf. This is a delegation. If the Attester is delegating their attestation rights to another entity, this should be stated clearly at this point. See [here](/docs/concepts/distributed_trust) for details on how to create a delegation.

## How to create a Terms object using the KILT SDK

A CType hash is required to create a “request for terms”, along with at least one of the following: a Quote, a delegation, or a legitimation.

Claims, PrerequisiteClaims and delegation IDs are optional (as an Attester might submit Terms from a Claimer and will not have all the necessary information to create the claim. They can just send the required CType for the Claimer to build the claim).

```js
const termsMessageBody = {
  content: {
    claim: {
      cTypeHash:
        "0xf53f460a9e96cf7ea3321ac001a89674850493e12fad28cbc868e026935436d2",
      contents: {},
      owner: "did:kilt:4siJtc4dYq2gPre8Xj6KJcSjVAdi1gmjctUzjf3AwrtNnhvy",
    },
    legitimations: [[AttestedClaim]],
    quote: {
      attesterAddress: "did:kilt:4r99cXtVR72nEr9d6o8NZGXmPKcpZ9NQ84LfgHuVssy91nKb",
      cTypeHash:
        "0xf87dd9c5979e92ae7281279f60ee1925d4fc8904cd4700b966764f179e877891",
      cost: [Object],
      currency: "Euro",
      termsAndConditions: "https://coolcompany.io/terms.pdf",
      timeframe: "2019-12-09T23:00:00.000Z",
      attesterSignature: {
        keyId: "did:kilt:4r99cXtVR72nEr9d6o8NZGXmPKcpZ9NQ84LfgHuVssy91nKb#0xc56f8c8bc70d4d772eee184ce252b603a2122fa29b15f900e7d614cf8deb5c183",
        signature: "0x01a4d9c3395113ce76d2830a4fb436bdd04c7ca9442a152cd18eca1ba029c9a07c56f8c8bc70d4d772eee184ce252b603a2122fa29b15f900e7d614cf8deb5c183"
      },
    },
    prerequisiteClaims: undefined,
    cTypes: undefined,
  },
  type: "submit-terms",
};
```

The Terms object is sent via the messaging in the SDK using the interface “ISubmitTerms”.

## How to create a Quote

A Quote consists of costs, a timeframe and the terms and conditions of the work to be performed. It may be sent to the Claimer by the Attester. In cases where multiple Attesters provide the same attestation (for example, a car inspection) the Claimer may request a Quote from several Attesters to choose the Attester with the best conditions.

To come to an agreement on the Quote, the participants may message back and forth, signing the object.

If the Attester wishes to add a Quote to their Terms, the Attester signs the `Quote` object before sending it as part of the "submit terms" message to the Claimer.

```js title="Quote object, signed by the Attester"
{
  attesterAddress: "did:kilt:4r99cXtVR72nEr9d6o8NZGXmPKcpZ9NQ84LfgHuVssy91nKb",
  cTypeHash:
    "0xf53f460a9e96cf7ea3321ac001a89674850493e12fad28cbc868e026935436d2",
  cost: { gross: 233, net: 23.3, tax: { vat: 3.3 } },
  currency: "Euro",
  timeframe: "2020-12-03T23:00:00.000Z",
  termsAndConditions: "www.example.de/helpful-terms-&-conditions",
  attesterSignature: {
    keyId: "did:kilt:4r99cXtVR72nEr9d6o8NZGXmPKcpZ9NQ84LfgHuVssy91nKb#0xda663c7e282f98565e4dbf8072267e9b1165779159f83842dbf090d14dcd0f04",
    signature: "0x002e57ac55f23112a9d837c23874441fc8eb0e708a02c1bb26e631c6661741f482da663c7e282f98565e4dbf8072267e9b1165779159f83842dbf090d14dcd0f04"
  },
}
```

After the Claimer has received the signed Quote and accepts it, the Claimer will sign it on their side, too.

```js title="Quote, signed by Attester and Claimer"
{
  attesterAddress: "did:kilt:4r99cXtVR72nEr9d6o8NZGXmPKcpZ9NQ84LfgHuVssy91nKb",
  cTypeHash:
    "0xf53f460a9e96cf7ea3321ac001a89674850493e12fad28cbc868e026935436d2",
  cost: { gross: 233, net: 23.3, tax: { vat: 3.3 } },
  currency: "Euro",
  timeframe: "2020-12-03T23:00:00.000Z",
  termsAndConditions: "www.example.de/helpful-terms-&-conditions",
  attesterSignature: {
    keyId: "did:kilt:4r99cXtVR72nEr9d6o8NZGXmPKcpZ9NQ84LfgHuVssy91nKb#0xda663c7e282f98565e4dbf8072267e9b1165779159f83842dbf090d14dcd0f04",
    signature: "0x002e57ac55f23112a9d837c23874441fc8eb0e708a02c1bb26e631c6661741f482da663c7e282f98565e4dbf8072267e9b1165779159f83842dbf090d14dcd0f04"
  },
  rootHash:
    "0x43c756b5a92413e7d804fcfaa76eb27dcd58fc61f18dd1baac185a86ee0ea89f",
  claimerSignature: {
    keyId: "did:kilt:4siJtc4dYq2gPre8Xj6KJcSjVAdi1gmjctUzjf3AwrtNnhvy#0xda663c7e282f98565e4dbf8072267e9b1165779159f83842dbf090d14dcd0f04",
    signature: "0x018c0c21d5545648f4a8d3604991710718b9fc02956c5d98b13b9e4d029ed8505dc2b1bbd62f9af52cc3b1a28e9ce78e8f311baa118f389ee05f92f0512fd9f382"
  }
};
```

## Agreeing to Terms and Quote

If the Claimer agrees to the `Terms`, they include the information for it in the `Request for Attestation` object.
If the Attester has sent a Quote as part of the Terms, the Claimer must also sign and agree to the Quote, by signing it.

The request and the signed Quote are than sent to the Attester.

After the final exchange, the Attester checks all the information and attests the `Claim`.
