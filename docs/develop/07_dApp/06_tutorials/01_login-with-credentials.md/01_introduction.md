---
id: introduction
title: Introducing Login in with Credentials
---

## Motivation

Holders of a [KILT DID][concept-did] can get [Credentials][concept-credntials] with attested information about themselves.
Third parties can verify credentials gaining trustworthy information about it's owner.

A **Decentralized Application** can manage the access to their services based on specific **Credentials**.
Virtually making every holder of a valid credential a smooth potential user.

In this tutorial we will show you how to implement logging in with web3 credentials using the KILT Protocol.
We will show you how to **turn your website in to a DApp.**

> [!IMPORTANT]
> TODO: avoid repetitions between new (above) and old (below) versions.

During [the login procedure][login-process], the user is required to present a credential.
You can decide which credentials to accept.
They could be issued by yourself or by other attesters.

If you require the credentials to be attested by yourself, the credentials become similar to membership cards.
If you also accept credentials from other attesters, you open your system up to also accept other membership cards.

This means that users don't not need to setup an account and password just for your website.
Additionally, this avoids third parties (usually powerful data-collecting companies) from tracking your interactions with your clients.
There is no trace on the KILT blockchain about the interaction between you and your client.

## Related Projects

This tutorial is heavily related to the project [Web3-Login-Demo][web3-login-demo].
We recommend you to fork the repository and set it up as you follow tutorial.

After setting up and running [Web3-Login-Demo][web3-login-demo] locally on your computer, you will have a representation of how the [login process][login-process] works.
You are free to copy code from there, but we do encourage you to customize the code for your specific use case.
Just keep in mind to follow the [specifications][extension-api-spec] to retain compatibility with the wallets/extensions.

If you are rather looking for a Plug-and-Play solution, we provide [the openDID project][openDID-repo] which implements the [OpenID-Connect implicit flow][openID-flow] to authenticate your users.
[OpenDID ][openDID-repo] substantially reduces the complexity of integration.

## DApp Requirements

In order for a **dApp** to support logging in with KILT Credentials, it needs:

1. It's [on-chain DID][concept-did]

- This DID is used so that the user knows the parties to whom they talk.

2. It's [Domain Linkage Credential][well-known-did-config]

- Bind your DID to a specific domain.
- This prevents Man-in-the-Middle attacks.
- Also known as the _well-known-did-configuration_.

3. A CType to request from the user

- The type of credentials the dApp considers valid.
- The CType defines the structure and semantics of the credential you accept.
- The issuer of this credentials is important.
  Anyone can issue a credential of a CType, but not everybody can be trusted as a source of truth.
- To be secure, your dApp should accept credentials coming from it's _trusted attesters_.

If you don't have some of the above, don't worry, we help you get them on the sections below.

[web3-login-demo]: https://github.com/KILTprotocol/web3-login-demo
[concept-did]: ../../../../concepts/02_did.md
[concept-credentials]: ../../../../concepts/05_credentials/01_overview.md
[well-known-did-config]: ../../02_well-known-did-config.md
[login-process]: ../../05_login.md
[extension-api-spec]: https://github.com/KILTprotocol/spec-ext-credential-api
[openDID-repo]: https://github.com/KILTprotocol/openDID
[openID-flow]: https://openid.net/specs/openid-connect-implicit-1_0.html#ImplicitFlow
