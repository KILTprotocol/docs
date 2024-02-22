---
id: what-is-kilt
title: What is KILT?
---

KILT is a protocol for self-sovereign data and interoperability built on top of the permissionless KILT blockchain.

The core component of KILT is a digital identity protocol for:

1. Generating and managing [**decentralized identifiers (DIDs)**](./10_glossary.md#Decentralized-Identifiers-(DID))
2. Issuing and presenting digital [**verifiable credentials (VCs)**](./10_glossary.md#verifiable-credentials).

In contrast to other centralized alternatives, KILT features self-sovereign data as well as revocable [credentials](./10_glossary.md#credential) anchored to the KILT blockchain.

KILT was built to be a business enabler, not only for the software industry but also for any entity.
Such entities can establish a business model based on the trust infrastructure KILT provides, which is an essential building block of Web 3.0.

## What KILT Provides

In particular, KILT provides:

* A **universal identity protocol** for individuals, organizations, objects, and intelligent agents to obtain credentials for arbitrary attributes about themselves issued by trusted [Attesters](./10_glossary.md#attester).
* A **self-sovereign mechanism** for putting credential holders in control of their own data, allowing them to choose if and where they make their credentials public and how much information from those credentials they wish to share.
* A **[Trust Market](./10_glossary.md#trust-market) for [Attesters](./10_glossary.md#attester)** of such credentials, allowing widely trusted entities to be compensated for their valuable attestation work.

KILT's main goal is to generate a level playing field for companies to explore new business models related to trust relationships and data sovereignty.
KILT enables businesses and governments to rely on a common standard owned by everyone participating and not by a single company or set thereof.

## The Problem

In the beginning, identity and trust between entities were organized in a fully decentralized way.
Individuals created trust relationships directly between them based on their observations.
Of course, this had major drawbacks:

* The size of the personal social network is limited
* It is not trivial to judge the trustworthiness of an individual
* It is hard to prove one's own identity to outsiders

When people started to organize themselves in bigger groups, founding villages and cities, those drawbacks were amplified and people needed to address them.
People introduced mechanisms to create trust relationships between groups by issuing some form of attestation.
In this way, people who do not know the individual directly but who trusted the group that gave the attestation, for example, a carpenter's guild, a monastery or a Scottish clan, could verify certain properties about another individual.
When the organizational structures grew further and large bureaucratic nations emerged, the authorities issuing those attestations and the scope of the trust relationships also grew.

Though we can now see a more and more centralized way of organizing trust, the actual information that makes up an identity is still handed out directly to the individual, who is still responsible for their data.
Take official personal documents like passports as an example.
Trusted entities issue them and hand them out to the holder.
That holder then has full control of their credential (their passport) and can use it wherever needed.

With the invention of the internet, and later of Web 2.0, services evolved and merged into totally centralized solutions including Google, Meta, and X among others.
They no longer attest to someone's email account, but due to their business model, those same service providers store and control our personal data (i.e., our identity).
For instance, they could stop allowing us to log into a certain website if they decide to.
More often than not, companies store the data out of necessity and for their own business purpose.
Every time users log into any service, they generate new data points which are then aggregated and sold for advertising purposes.

KILT Protocol aims to change that and give users back control over their data.

## The Solution

KILT provides a protocol and the tools for people to manage their own data, and to build a [digital identity](./10_glossary.md#digital-identity) by collecting credentials issued by trusted entities.
Such credentials are not publicly available but stay within the user's control.
This is similar to the approach used for centuries before big corporations monetized our data.

The core ideas are:

* Managing user identities in the form of [decentralized identifiers (DIDs)](https://w3c-ccg.github.io/did-spec/), with the support of the KILT blockchain
* Obtaining digital [verifiable credentials](./10_glossary.md#verifiable-credentials) for user-specified claims
* Supporting revocation of verifiable credentials by their Attesters
* Presenting and verifying verifiable credentials in a privacy-preserving and user-controlled way
