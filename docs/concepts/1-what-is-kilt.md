---
id: what-is-kilt
title: What is KILT?
---

KILT is a protocol for self-sovereign data and interoperability built on top of the permissionless KILT blockchain. 
It's a simple protocol for creating, claiming, issuing, presenting and verifying digital credentials attached to a decentralised identifier. 
In contrast to other centralised or peer-to-peer solutions for this, KILT features self-sovereign data as well as revocable credentials using blockchain technology.
KILT was built to be a business enabler, not only for the software industry but also for any entity.
The entity can establish a business model based on trust through KILT. 
We believe trust and truth will be essential building blocks of Web 3.0.
Therefore, KILT and similar credential-based protocols will play an important part in the decentralisation of the current Web 2.

In particular KILT provides:

* A universal blockchain protocol for individuals, organisations, objects, and artificial intelligences to claim arbitrary attributes about themselves and get them attested by trusted entities
* Mechanisms for putting claim holders in control of their data by storing the information on their storage and by giving them the choice which information they want to disclose to whom
* A Trust Market for the Attesters of such claims, which allows trusted entities to attach prices to their valuable attestation work and get paid

Our main goal with KILT is to generate a level playing field for companies to explore new business models related to trust relationships and data sovereignty.
With KILT we enable businesses and governments to rely on a common standard which is owned by everyone participating and not by a single company.

## The problem


In the beginning, identity and trust between entities has been organized in a fully decentralised way: Trust relationships were created directly between individuals based on their own observations.
Of course this has major drawbacks:

* The size of the personal social network is limited
* Judging the trustworthiness of an individual is difficult
* It's hard to prove the own identity to outsiders

When people started to organise themselves in bigger groups, founding villages and cities, those drawbacks were amplified and needed to be addressed.
Therefore mechanisms were introduced to create trust relationships between groups by giving out some form of attestation so certain properties about an individual could be verified by people who don't know the individual but trust the group that gave out the attestation. 
Think about a carpenter's guild, a monastry or a scottish clan. 
When the organisational structures grew further and big bureaucratic nations emerged, also the authorities that are issuing the credendials and the scope of the trust relationships grew.
Though we can now see a more and more centralised way of organising trust, the actual information that make up an identity are still handed out directly to the individual and the individual is still responsible for their own data. 
Take official personal documents like passports as an example. 
They were issued by trusted entities and handed out to the holders. 
Those holders were then under full control of their credentials and could use them where ever they wanted. 
This was a simple and secure way to get information about a person and the person itself always had full control over it.

However, with the invention of the internet and especially the Web 2.0, services evolved and merged into totally centralised solutions like Google, Meta, Twitter among others.
They no longer only attest that we have for example a email account at a specific provider, but due to the business model of those organisations, our personal data, our identity, is now stored and under the control of centralised service providers.
We even used this "identity" to login to other websites and services.
It's even worse because those companies do not only store the data out of necessity but also for the purpose of the business model.
Every time we log into one of such services, we generate new data points about our identity which are then aggregated and sold mostly for advertising purposes.

KILT Protocol aims to change that and give users back the control over their data.

## The solution

We provide a protocol for managing your identity on the blockchain and to attach digital credentials to it which are attested by trusted entities. 
Those credentials are not stored on the chain, but stay with the user, so they can be used for any purpose and always stay under their control. 
This is somehow very similar to the approach used for centuries before our data was being monetarized by big corporations.

The core ideas are:

* Managing your identity on the blockchain in form of a [DID](https://w3c-ccg.github.io/did-spec/#id)
* Claiming digital credentials
* Facilitating revocable attestations
* Presenting and verifying digital credentials
* Not storing any personal data on the chain