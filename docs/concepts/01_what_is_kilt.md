---
id: what-is-kilt
title: What is KILT?
---

KILT is a protocol for self-sovereign data and interoperability built on top of the permissionless KILT blockchain.
The core component of KILT is a digital identity protocol for 1. generating and managing **Decentralized Identifiers (DID)**, and 2. issuing and presenting digital **Verifiable Credentials (VC)**.
In contrast to other centralized alternatives, KILT features self-sovereign data as well as revocable credentials anchored to the KILT blockchain.

KILT was built to be a business enabler, not only for the software industry but also for any entity.
Such entities can establish a business model based on the trust infrastructure KILT provides, which will be an essential building block of Web 3.0.

In particular KILT provides:

* A **universal identity protocol** for individuals, organizations, objects, and intelligent agents to obtain credentials for arbitrary attributes about themselves issued by trusted Attesters.
* A **Self-Sovereign mechanism** for putting credential holders in control of their own data by letting them store credentials onto their own favorite storage and by giving them the choice to select which information from those credentials to share with whom.
* A **Trust Market for Attesters** of such credentials, which allows widely trusted entities to get compensated for their valuable attestation work.

KILT main goal is to generate a level playing field for companies to explore new business models related to trust relationships and data sovereignty.
KILT enables businesses and governments to rely on a common standard which is owned by everyone participating and not by a single company or set thereof.

## The Problem

In the beginning, identity and trust between entities had been organized in a fully decentralized way: trust relationships were created directly between individuals based on their own observations.
Of course this had major drawbacks:

* The size of the personal social network is limited
* It is not trivial to judge the trustworthiness of an individual
* It is hard to prove one own's identity to outsiders

When people started to organize themselves in bigger groups, founding villages and cities, those drawbacks were amplified and needed to be addressed.
Therefore mechanisms were introduced to create trust relationships between groups by giving out some form of attestation so certain properties about an individual could be verified by people who do not know the individual directly but trust the group that gave out the attestation.
Think about a carpenter's guild, a monastry or a Scottish clan.
When the organizational structures grew further and big bureaucratic nations emerged, also the authorities issuing those attestations and the scope of the trust relationships grew.

Though we can now see a more and more centralized way of organising trust, the actual information that make up an identity are still handed out directly to the individuals, who are still responsible for their own data.
Take official personal documents like passports as an example.
They were issued by trusted entities and handed out to the holders.
Those holders were then under full control of their credentials and could use them wherever needed.

However, with the invention of the Internet and later of the Web 2.0, services evolved and merged into totally centralized solutions including Google, Meta, and Twitter among others.
They do not only simply attest someone's email account anymore, but due to their business model, our personal data (i.e., our identity), is stored and controlled by those same service providers.
For instance, they could stop allowing us to log into a certain website if they decide so.
Most often than noe, those companies do not only store the data out of necessity but also for their own business purpose: every time users log into any service, they generate new data points which are then aggregated and sold for advertising purposes.

KILT Protocol aims to change that and give users back the control over their data.

## The Solution

KILT provides a protocol and the tools for people to manage their own data, and to build a digital identity by collecting credentials issued by trusted entities.
Such credentials are not publicly available, but stay within the user's control.
This is somehow very similar to the approach used for centuries before our data was being monetized by big corporations.

The core ideas are:

* Managing user's identities in the form of [Decentralized Identifiers (DID)](https://w3c-ccg.github.io/did-spec/), with the support of the KILT blockchain.
* Obtaining digital Verifiable credentials about user-specified claims.
* Supporting revocation of Verifiable credentials by their attesters.
* Presenting and verifying Verifiable credentials in a privacy-preserving and user-controlled way.