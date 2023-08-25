---
id: did
title: KILT Decentralized Identifiers (DIDs)
---

A KILT decentralized identifier (DID) is a string of letters and numbers uniquely identifying each KILT user.
A DID can be thought of as a container of different keys that are all under the control of the same DID subject.
For the official W3C DID spec, please visit the [DID Core spec page](https://www.w3.org/TR/did-core/); for the official KILT DID method specification, see the [KILT DID spec page](https://github.com/KILTprotocol/spec-kilt-did).

## DIDs

The following is an example of a DID:

```
did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e
```


The creation of a DID requires interaction with the KILT blockchain.
Therefore, the DID creation operation must be submitted by a KILT address with enough funds to pay the transaction fees and the required deposit.

The keys associated with with the DID must not be derived from the DID identifier, but must be retrieved from the KILT blockchain.

Along with an authentication key, an encryption key, and services, a DID also supports an **attestation key**, which must be used to write CTypes and attestations on the blockchain, and a **delegation key**, which must be used to write delegations on the blockchain.

## Storing a DID

Storing a DID in the blockchain requires a deposit, consisting of a base deposit and an additional fee. The base deposit is a fixed amount of 4 KILT, while the additional fee is 0.05 KILT.

In addition to the base deposit and fee, the total deposit increases based on the storage space used by the DID. Each byte of storage occupied by the DID requires a deposit of 50 micro KILT (0.000005 KILT).
The overall size of the DID is determined by the inclusion of services and keys. The more services and keys in the DID, the larger the storage space required and, consequently, the higher the additional deposit.

When updating the DID, the deposit is automatically adjusted to match the updated size. This ensures that the deposit accurately reflects the current storage requirements of the DID, whether they increase or decrease.

The deposit can be reclaimed when the DID is deleted from the blockchain, allowing users to retrieve the deposited amount. However, please note that the additional fee cannot be refunded once it has been paid.
