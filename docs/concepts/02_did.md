---
id: did
title: KILT Decentralized Identifiers (DIDs)
---

A KILT decentralized identifier (DID) is a string of letters and numbers uniquely identifying each KILT user.
A DID can be thought of as a container of different keys that are all under the control of the same DID subject.
For the official W3C DID spec, please visit the [DID Core spec page](https://www.w3.org/TR/did-core/); for the official KILT DID method specification, see the [KILT DID spec page](https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md).

The simplest type of KILT DID is called a **light DID**, because it can be generated and used offline without any internet connection (hence any connection with the KILT blockchain at all).
Although very cheap, light DIDs are not very flexible and are only suitable for low-security use cases.
In more complex use cases, an on-chain **full DID** is indicated, which allows the subject to store several different keys (and key types) and replace them over time, with the help of the KILT blockchain.

## Light DIDs

The following is an example of a light KILT DID:

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
While transaction fees cannot be refunded, the deposit is returned if the DID is later deleted from the blockchain: this is to incentivize users to clean the data from the blockchain once such data is no longer required.

The following is an example of a full KILT DID:

```
did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e
```

Here, there is no `light:` component, which indicates that the DID is a full DID and that the keys associated with it must not be derived from the DID identifier, but must be retrieved from the KILT blockchain.

Along with an authentication key, an encryption key, and service endpoints, a full DID also supports an **attestation key**, which must be used to write CTypes and attestations on the blockchain, and a **delegation key**, which must be used to write delegations on the blockchain.

## Migrating a Light DID to a Full DID

The **migration** of a DID means that a light, off-chain DID is anchored to the KILT blockchain, supporting all the features that full DIDs provide.
In the current version (v1) of the KILT DID protocol, a light DID of the form `did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS` would become a full DID of the form `did:kilt:4nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS`.
Note that the identifier of the two DIDs, apart from the initial `01` sequence of the light DID, are the same since both DIDs are derived from the same KILT account.

**Once a light DID is migrated, all the credentials collected by the light DID can only be presented using the migrated on-chain DID.**
This is by design, as it is assumed that the user had valid reasons to migrate the DID onto the chain, and as on-chain DIDs offer greater security guarantees.
KILT will thus reject light DID signatures even if the original claim in the credential was generated with that off-chain DID.

For a detailed developer-oriented guide to KILT DIDs, see our [DID Cookbook section](../develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md).