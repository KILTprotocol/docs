---
id: what-is-kilt
title: What is KILT?
---

KILT is a protocol for self-sovereign data and interoperability built on top of the permissionless KILT blockchain.
The core component of KILT is a digital identity protocol for 1. generating and managing **decentralized identifiers (DIDs)**, and 2. issuing and presenting digital **verifiable credentials (VCs)**.
In contrast to other centralized alternatives, KILT features self-sovereign data as well as revocable credentials anchored to the KILT blockchain.

KILT was built to be a business enabler, not only for the software industry but also for any entity.
Such entities can establish a business model based on the trust infrastructure KILT provides, which will be an essential building block of Web 3.0.

In particular KILT provides:

* A **universal identity protocol** for individuals, organizations, objects, and intelligent agents to obtain credentials for arbitrary attributes about themselves issued by trusted Attesters.
* A **self-sovereign mechanism** for putting credential holders in control of their own data, allowing them to choose if and where they make their credentials public and how much information from those credentials they wish to share.
* A **Trust Market for Attesters** of such credentials, which allows widely trusted entities to be compensated for their valuable attestation work.

KILT's main goal is to generate a level playing field for companies to explore new business models related to trust relationships and data sovereignty.
KILT enables businesses and governments to rely on a common standard which is owned by everyone participating and not by a single company or set thereof.

## The Problem

In the beginning, identity and trust between entities was organized in a fully decentralized way: trust relationships were created directly between individuals based on their own observations.
Of course this had major drawbacks:

* The size of the personal social network is limited
* It is not trivial to judge the trustworthiness of an individual
* It is hard to prove one's own identity to outsiders

When people started to organize themselves in bigger groups, founding villages and cities, those drawbacks were amplified and needed to be addressed.
Therefore mechanisms were introduced to create trust relationships between groups by issuing some form of attestation.
In this way, certain properties about an individual could be verified by people who do not know the individual directly, but who trusted the group that gave the attestation, for example, a carpenter's guild, a monastery or a Scottish clan.
When the organizational structures grew further and big bureaucratic nations emerged, the authorities issuing those attestations and the scope of the trust relationships also grew.

Though we can now see a more and more centralized way of organizing trust, the actual information that makes up an identity is still handed out directly to the individual, who is still responsible for their own data.
Take official personal documents like passports as an example.
They are issued by trusted entities and handed out to the holder.
That holder then has full control of their credential (their passsport) and can use it wherever needed.

However, with the invention of the internet, and later of Web 2.0, services evolved and merged into totally centralized solutions including Google, Meta, and Twitter among others.
They no longer simply attest someone's email account, but due to their business model, our personal data (i.e., our identity) is stored and controlled by those same service providers.
For instance, they could stop allowing us to log into a certain website if they decide to.
More often than not, companies store the data not only out of necessity, but also for their own business purpose: every time users log into any service, they generate new data points which are then aggregated and sold for advertising purposes.

KILT Protocol aims to change that and give users back the control over their data.

## The Solution

KILT provides a protocol and the tools for people to manage their own data, and to build a digital identity by collecting credentials issued by trusted entities.
Such credentials are not publicly available, but stay within the user's control.
This is similar to the approach used for centuries before our data was being monetized by big corporations.

The core ideas are:

* Managing user's identities in the form of [decentralized identifiers (DIDs)](https://w3c-ccg.github.io/did-spec/), with the support of the KILT blockchain
* Obtaining digital verifiable credentials about user-specified claims
* Supporting revocation of verifiable credentials by their Attesters
* Presenting and verifying verifiable credentials in a privacy-preserving and user-controlled way
