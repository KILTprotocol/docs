---
id: did
title: DIDs
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

Beyond the standard prefix `did:kilt:`, the `light:` component indicates that this DID is a light DID, hence it can be resolved and utilised offline.

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

## DIDs and Web3 names

Web3 names are user-friendly aliases for KILT DIDs.
They serve the same purpose that domain names do for IP addresses: who knows the IP address under the `kilt.io` domain name? 🤷🏽‍♀️
There is a one-to-one relationship between DIDs and Web3 names.
This means that a KILT DID can be linked to at most one Web3 name, and a Web3 name can be claimed only by one DID.

Each Web3 name is globally unique within the KILT space, and is composed of a sequence of a minimum of 3 to a maximum of 32 characters taken from a specific character set to enhance human redability and reduce the chances of "two Web3 names looking the same, despite being different".
The character set include only:
- *lowercase letters*, from `a` to `z`
- *digits* from `0` to `9`
- the symbols `-` and `_`

A regex that would match all and only the allowed Web3 names would be the following:

```
^[a-z0-9\_\-]{3,32}$
```

In the global URI space, Web3 names are prefixed with the `w3n:` URI namespace. 
For example, the full URI for the Web3 name `example-web3name` is `w3n:example-web3name`.

### Linking accounts to a Web3 name

Beyond linking a Web3 name, KILT allows DID owners to link multiple accounts to a single DID.
These accounts are not specific to the KILT blockchain but can reference any chain within the Dotsama ecosystem.
Each account <-> DID link requires the payment of a small deposit, which is returned whenever the link is removed.

For DIDs that have also claimed a Web3 name, the linking feature opens up the way to a host of possibilities, e.g., showing the Web3 name of a collator's account on the [KILT stakeboard](https://stakeboard.kilt.io/).

<ThemedImage
  alt="DID lookup diagram"
  sources={{
    light: '/img/concepts/did/did-lookup-light.png',
    dark: '/img/concepts/did/did-lookup-dark.png',
  }}
/>

:::caution
While multiple accounts can be linked to a DID, it is important to notice the difference between the two.

KILT *accounts* are classical blockchain accounts, that can be used to hold and send KILT tokens, as well as signing and submitting transactions.
On the other hand, KILT *DIDs* are a higher level construct which are derived from KILT accounts, but are completely separated from them.
This means that **KILT DIDs cannot hold any KILT tokens**.
DIDs are used to authorize (sign) some operations, but the resulting signature must then be submitted to the blockchain by a KILT account, which must pay for the transaction fees.

Hence, even though a DID has the format `did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e` with `4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e` being a valid KILT account, there is no (immediate) relationship between the DID and this account and hence this account should not be considered in isolation as a KILT account, but only with its `did:kilt` prefix, which makes it a valid DID.
Hence, if instructed to "*send some funds to the DID by using the account after the `did:kilt` prefix*", please ignore the advice, as sending funds to a DID can result in those funds being lost without the required technical expertise.