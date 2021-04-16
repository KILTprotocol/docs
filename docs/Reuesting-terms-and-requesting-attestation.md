---
id: requesting-terms
title: Requesting Terms and Requesting an Attestation
---
If an attester has an established reputation for issuing attestations, the claimer may choose to submit a claim to be attested without going through the process of agreeing terms.
In that case, they may submit a request following this process.  

Otherwise, either the attester or the claimer may request the terms of the attestation, i.e., the requirements set by the participants (the claimer and the attester) that set the conditions to attest a claim.

These terms are defined and agreed before the attestation is created. This part of the process requires interaction and communication between both parties. This communication can be done independently, e.g. in person, via messaging, on social media etc., or via the KILT software development kit (SDK).

# Sending terms using the KILT SDK

Both “request terms” and “submit terms” are part of the messaging: the message is sent as “request terms” and received as “submit terms”.

The interaction is as follows:
*   The claimer creates an `IPartialClaims` from an attester and sends an `IRequestTerms` message
*   An attester creates an `ITerms` object and sends it as part of a submit terms message `ISubmitTerms` to the claimer.
*   The claimer receives the submit terms message, checks the terms and, if all is in order, agrees to them.  

Either a claimer or an attester can initiate a request for terms.

## How to create a terms object

When creating a terms object, at least one of the following must be complete: Legitimations, Quote or Delegations.

*   **Legitimations**:  Legitimations are attested claims that the attester has issued previously, showing that the attester has the authority or legitimacy to attest the claim requested. This is a way of establishing trust between the participants.

```
        <CODE EXAMPLE: a complete attested claim object>
```

*   **Quote**: Details on how to create a quote are outlined here. In brief, the quote could include any or all of the following:
    *   The time frame the claim will be completed in
    *   The digital public address of the attester completing the attestation
    *   A CType hash -- The corresponding CType
    *   A breakdown of all the (net and gross) costs, the currency quoted, and any taxes associated with the attestation.
    *   A link to the terms and conditions of the attestation.

*   **Delegations**: An attester may include the right to attest to a specific claim from a top-down trust authority e.g. a business giving the right to their employee to attest the claim on their behalf. This is a delegation. If the attester is delegating their attestation rights to another entity, this should be stated clearly at this point. See here for details on how to create a delegation.

## How to create a terms object using the KILT SDK

A CType hash is required to create a “request for terms”, along with at least one of the following:  a quote, a delegation, or a legitimation.

Claims, PrerequisiteClaims and delegationIds are optional (as an attester might submit terms from a claimer and will not have all the necessary information to create the claim. They can just send the required CType for the claimer to build the claim).

```
        <CODE EXAMPLE: creating the terms object with the messaging>
```

The terms object is sent via the messaging in the SDK using the interface “ISubmitTerms”.

# How to create a quote

A quote is a description of the terms and conditions of the work to be performed. It may be sent to the attester from the claimer, but may also be sent from a claimer to an attester. In cases where multiple attesters provide the same attestation (for example, a car inspection) the claimer may send a quote to several attesters in order to choose the attester with the best conditions.

To come to an agreement on the quote, the participants may message back and forth, signing the object.

If the attester wishes to quote their terms, the attester signs the `IQuote` object before sending it as part of the `ISubmitTerms` to the Claimer.

 When agreement is reached, the SDK is used to create a quote object.

```
              <CODE EXAMPLE: create a simple quote object>
```

If a quote has been accepted, the attester signs the object and sends the signed object.

```
              <CODE EXAMPLE: sign the same simple quote object above>
```

After the claimer has received the signed object, then the claimer will request the attestation.

```
            <CODE EXAMPLE: Claimer signs the Attester signed quote object above>
```

# How to create a request for attestation

Once the terms have been agreed, the claimer must accept the conditions in order to move into the request for attestation. The claimer needs to submit a complete claim using the following process:

*   If the claimer agrees to the terms the claimer signs the `IRequestForAttestation` object.
*   If the attester sent a quote as part of the agreement, the claimer must also sign and agree to the attester signed quote &lt;IQuoteAttesterSigned>.

The claimer uses the SDK to create a request for attestation. This request must have a claim matching the specified CType. It may have a legitimation, quote, delegation or prerequisite claim.

```
          <CODE EXAMPLE: creating the RequestForAttestation object using the objects in the previous steps>
```

The request for attestation object is then sent to the claimer `IRequestAttestationForClaim`.

```
          <CODE EXAMPLE: sending a request for attestation, signing the object>
```

After the final exchange, the process is then attested by the attester. See the attesting and claiming process here.
