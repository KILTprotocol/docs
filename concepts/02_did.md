---
id: did
title: KILT Decentralized Identifiers (DIDs)
---

A KILT decentralized identifier (DID) is a string of letters and numbers uniquely identifying each KILT user.

Think of a DID as a container of different keys all under the control of the same DID subject.

:::info DID spec

For the official W3C DID spec, read the [DID Core spec page](https://www.w3.org/TR/did-core/); for the official KILT DID method specification, read the [KILT DID spec page](https://github.com/KILTprotocol/spec-kilt-did).

:::

The simplest type of KILT DID is a **[light DID](#light-dids)**, because you can generate and use it offline and no connection with the KILT blockchain.
Although cheap, light DIDs aren't flexible and are only suitable for low-security use cases.
In more complex use cases, you need an on-chain **[full DID](#full-dids)**, which allow the subject to store different keys and key types and replace them over time by using the KILT blockchain.

## Light DIDs

The following is an example of a light KILT DID:

```
did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS
```

Beyond the standard prefix `did:kilt:`, the `light:` component indicates that this DID is a light DID, hence it can be resolved and used offline.

<!-- TODO: What is a service? -->

Light DIDs optionally support the specification of an **encryption key** (of one of the supported key types) and services, which are both serialized, encoded, and added at the end of the DID, like the following:

```
did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS:z1ERkVVjngcarMbJn6YssB1PYULescQneSSEfCTJwYbzT2aK8fzH5WPsp3G4UVuLWWfsTayketnFV74YCnyboHBUvqEs6J8jdYY5dK2XeqCCs653Sf9XVH4RN2WvPrDFZXzzKf3KigvcaE7kkaEwLZvcas3U1M2ZDZCajDG71winwaRNrDtcqkJL9V6Q5yKNWRacw7hJ58d
```

## Full DIDs

The creation of a full DID requires interaction with the KILT blockchain.
Therefore, a KILT address with enough funds to pay the transaction fees and the required deposit must submit the DID creation operation.

The following is an example of a full KILT DID:

```
did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e
```

Above, there is no `light:` component.
This indicates that the DID is a full DID and that you can't derive the keys associated with it from the DID identifier, but retrieve them from the KILT blockchain.

Along with an authentication key, encryption key, and services, a full DID also supports an **attestation key**, which you must use to write CTypes and attestations on the blockchain, and a **delegation key** to write delegations on the blockchain.

## Migrating a light DID to a full DID

The **migration** of a DID means that a light, off-chain DID is anchored to the KILT blockchain, supporting all the features that full DIDs provide.
In the current version (v1) of the KILT DID protocol, a light DID of the form `did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS` would become a full DID of the form `did:kilt:4nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS`.

:::note

The identifier of the two DIDs, apart from the initial `01` sequence of the light DID, are the same since both DIDs are derived from the same seed.

:::

**Once you migrate a light DID, you can only present all the credentials collected by the light DID using the migrated on-chain full DID.**

This restriction is by design, as it's assumed that the user had valid reasons to migrate the DID, as on-chain DIDs offer greater security guarantees.
KILT thus rejects light DID signatures even if the original claim in the credential was generated with that off-chain DID.

:::tip

For a detailed developer-oriented guide to KILT DIDs, read the [DID Cookbook section](/develop/sdk/cookbook/dids/light-did-creation).

:::

## Storing a DID

Storing a DID on the KILT blockchain requires a deposit, consisting of a base deposit and an additional fee. The base deposit is a fixed amount of 2 KILT, while the additional fee is 0.05 KILT.

In addition to the base deposit and fee, the total deposit increases based on the storage space used by the DID. Each byte of storage occupied by the DID requires a deposit of 50 micro KILT (0.000005 KILT).

The inclusion of services and keys determines the overall size of the DID.
The more services and keys in the DID, the larger the storage space required and, consequently, the higher the additional deposit.

When updating the DID, the deposit is automatically adjusted to match the updated size. This ensures that the deposit accurately reflects the current storage requirements of the DID, whether they increase or decrease.

You can reclaim the deposit when the DID is deleted from the blockchain, allowing users to retrieve the deposited amount. However, the additional fee can't be refunded once paid.
