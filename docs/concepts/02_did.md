---
id: did
title: Decentralized Identifiers (DIDs)
---

import ThemedImage from '@theme/ThemedImage';

A KILT Decentralized Identifier (DID) is a string uniquely identifying each KILT user.
A DID can be thought of as a container of different keys that are all under the control of the same DID subject.
For the official W3C DID spec, please visit the [DID Core spec page](https://www.w3.org/TR/did-core/), while for the official KILT DID method specification, please visit the [KILT DID spec page](https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md).

The simplest type of KILT DID is a **light DID**, called this way because it can be generated and used offline without requiring any Internet connection (hence any connection with the KILT blockchain at all).
Although very cheap, light DIDs are not very flexible and are suitable for lower-security use cases.
In more complex use cases, a **full DID** is more indicated, which allows the subject to store several different keys (and key types) and replace them over time, with the help of the KILT blockchain.

## Light DIDs

An example of a light KILT DID is the following:

```
did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS
```

Beyond the standard prefix `did:kilt:`, the `light:` component indicates that this DID is a light DID, hence it can be resolved and utilized offline.

Light DIDs optionally support the specification of an **encryption key** (of one of the supported key types) and some service endpoints, which are both serialized, encoded and added at the end of the DID, like the following:

```
did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS:z1ERkVVjngcarMbJn6YssB1PYULescQneSSEfCTJwYbzT2aK8fzH5WPsp3G4UVuLWWfsTayketnFV74YCnyboHBUvqEs6J8jdYY5dK2XeqCCs653Sf9XVH4RN2WvPrDFZXzzKf3KigvcaE7kkaEwLZvcas3U1M2ZDZCajDG71winwaRNrDtcqkJL9V6Q5yKNWRacw7hJ58d
```

## Full DIDs

As mentioned above, the creation of a full DID requires interaction with the KILT blockchain.
Therefore, the DID creation operation must be submitted by a KILT address with enough funds to pay the transaction fees and the required deposit.
While transaction fees cannot be refunded, the deposit is returned when the DID is deleted from the blockchain: this is to incentivize users to clean the data from the blockchain once such data is not needed anymore.

An example of a full DID is the following:

```
did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e
```

Here, there is no `light:` component, which indicates that the DID is a full DID and that the keys associated with it must not be derived from the DID identifier but must be retrieved from the KILT blockchain.

Beyond an authentication key, an encryption key, and service endpoints, a full DID also supports an **attestation key**, which must be used to write CTypes and attestations on the blockchain, and a **delegation key**, which must be used to write delegations on the blockchain.

## Migrating a light DID to a full DID

The **migration** of a DID means that a light, off-chain DID is anchored to the KILT blockchain, supporting all the features that full DIDs provide.
In the current version (v1) of the KILT DID protocol, a light DID of the form `did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS` would become a full DID of the form `did:kilt:4nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS`.
Note that the identifier of the two DIDs, apart from the initial `01` sequence of the light DID, are equal since both DIDs are derived from the same KILT account.

Once a light DID is migrated, all the credentials collected by the light DID can only be presented using the migrated on-chain DID.
This is by design, as it is assumed that the user had valid reasons to migrate the DID on the chain, and as on-chain DIDs offer greater security guarantees, KILT will reject light DID signatures even in case the original claim in the attestation was generated with that off-chain DID.

## DIDs and web3names

Since KILT DIDs are very machine-friendly, they are not very human-friendly.
For this reason, KILT allows DIDs to be linked to human-friendly web3names that can be used in many places where a DID would be required.
For more information about web3names, please refer to the [next paragraph](./03_web3names.md).