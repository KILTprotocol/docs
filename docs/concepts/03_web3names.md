---
id: web3names
title: web3names
---

import ThemedImage from '@theme/ThemedImage';

web3names are user-friendly aliases for KILT DIDs.
They serve the same purpose as domain names for IP addresses.
Do you know the IP address for the "kilt.io" domain name? 🤷🏽‍♀️
There is a one-to-one relationship between DIDs and web3names.
This means that you can link a KILT DID to only one web3name, and a web3name can only claim one DID.

Each web3name is globally unique within the KILT blockchain and consists of a sequence of a minimum of 3 to a maximum of 32 characters taken from a specific character set to enhance human readability and reduce the chances of *two web3names looking the same, despite being different*.

The character set includes only:

- *lowercase letters*, from `a` to `z`
- *digits* from `0` to `9`
- the symbols `-` and `_`

A regex that matches all and only the allowed web3names is the following:

```
^[a-z0-9_-]{3,32}$
```

In the global URI space, web3names are prefixed with the `w3n:` URI namespace.
For example, the full URI for the web3name `example-web3name` is `w3n:example-web3name`.

### Linking multiple accounts to a web3name

Beyond linking a web3name, KILT lets DID owners link multiple accounts to a single DID.
These accounts aren't specific to the KILT blockchain.
They can reference any chain within the Polkadot ecosystem.
Each account to DID link requires paying a small deposit.

For DIDs that have also claimed a web3name, the linking feature opens the way to a host of possibilities. For example, showing the web3name of a collator's account on the [KILT Stakeboard](https://stakeboard.kilt.io/).

<ThemedImage
  alt="DID lookup diagram"
  sources={{
    light: '/img/concepts/did/did-lookup-light.png',
    dark: '/img/concepts/did/did-lookup-dark.png',
  }}
/>

For a detailed developer-oriented guide to web3names and account linking, read the [web3name Cookbook section](../develop/01_sdk/02_cookbook/02_web3names/01_claim.md) and the [account linking Cookbook section](../develop/01_sdk/02_cookbook/03_account_linking/01_link.md).

## KILT DIDs vs. KILT accounts

While you can link multiple accounts to a DID, it's important to notice the difference between the two.

KILT *accounts* are classical blockchain accounts, that can hold and send KILT tokens, and sign and submit transactions.

KILT *DIDs* are a higher level construct derived from KILT accounts, but are completely separated from them.

This means that **KILT DIDs can't hold any KILT tokens**.

You use DIDs to authorize (sign) some operations, but you must submit the resulting signature to the KILT blockchain with a KILT account, which must pay for the transaction fees.

Don't consider a DID `did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e` the same as the account `4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e`, although they share the same identifier.

:::caution

There's no (immediate) relationship between the two, so you should consider a DID **only as a DID** and never as an account.
If instructed to "*send some funds to the DID by using the account after the `did:kilt` prefix*". Ignore the advice, as without the required technical expertise, sending funds to a DID can result in loss of those funds.

:::

### The cost for storing a web3name

Storing a web3name on the KILT blockchain requires providing a constant deposit, which is currently around 0.11 KILT. The deposit amount is calculated based on the worst-case scenario for a web3name, which is when a user provides a name with 32 characters.
The deposit serves as a security measure to ensure the integrity of the KILT blockchain and incentivize users to manage their web3names responsibly.
A deposit discourages spamming or unnecessary creation of web3names. You can reclaim the deposit can by deleting a web3name.
