---
id: web3names
title: web3names
---

web3names are user-friendly aliases for KILT DIDs.
They serve the same purpose that domain names do for IP addresses: who knows the IP address under the `kilt.io` domain name? 🤷🏽‍♀️
There is a one-to-one relationship between DIDs and web3names.
This means that a KILT DID can be linked to at most one web3name, and a web3name can be claimed only by one DID.

Each web3name is globally unique within the KILT space, and is composed of a sequence of a minimum of 3 to a maximum of 32 characters taken from a specific character set to enhance human redability and reduce the chances of *two web3names looking the same, despite being different*.
The character set include only:
- *lowercase letters*, from `a` to `z`
- *digits* from `0` to `9`
- the symbols `-` and `_`

A regex that would match all and only the allowed web3names would be the following:

```
^[a-z0-9\_\-]{3,32}$
```

In the global URI space, web3names are prefixed with the `w3n:` URI namespace.
For example, the full URI for the web3name `example-web3name` is `w3n:example-web3name`.

### Linking accounts to a web3name

Beyond linking a web3name, KILT allows DID owners to link multiple accounts to a single DID.
These accounts are not specific to the KILT blockchain but can reference any chain within the Dotsama ecosystem.
Each account <-> DID link requires the payment of a small deposit, which is returned whenever the link is removed.

For DIDs that have also claimed a web3name, the linking feature opens up the way to a host of possibilities, e.g., showing the web3name of a collator's account on the [KILT stakeboard](https://stakeboard.kilt.io/).

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

A DID `did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e` is not to be considered the same as the account `4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e`, although they share the same identifier.
There is no (immediate) relationship between the two, thus the DID should always be considered a DID and never used as an account.
Therefore, if instructed to "*send some funds to the DID by using the account after the `did:kilt` prefix*", please ignore the advice, as sending funds to a DID can result in those funds being lost without the required technical expertise.
