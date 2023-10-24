---
id: glossary
title: KILT Glossary
---

Here is a glossary of terms related to the KILT Protocol:

## W3C: Self-Sovereign Identity (SSI)

**Decentralized Identifier (DID)** – a unique digital identifier for entities (people, machines, services, and anything that identities can be built on) which can be anchored to a blockchain to provide the core of a verifiable digital identity.
For example, **did:kilt:4sxSYXakw1ZXBymzT9t3Yw91mUaqKST5bFUEjGEpvkTuckar**.
In KILT, identity is built by adding credentials to the DID.

**DID Authentication** – the process of proving that an entity has control over a DID, typically by using a digital signature or other cryptographic mechanism.

**DID Communication** – the use of DIDs to enable secure and decentralized communication between two or more parties, without the need for a central intermediary.

**DID Controller** – an entity that has control over a DID.
This may be the entity that generated the DID or an entity that has been authorized by the DID owner to manage the DID.

**DID Document** – a JSON-LD document that contains information about a DID, including public keys, services, and other metadata.

**DID Method** – a set of rules and specifications for how a DID is created, resolved, and managed on a particular network or platform.

**DID Resolver** – a software component that can resolve a DID to a DID Document, which contains information about the DID, such as public keys, services, and other metadata.

**Self-Sovereign Identity (SSI)** - a decentralized digital identity management system that enables individuals to own and control their identity information using secure digital technologies, such as blockchain.
SSI eliminates the need for intermediaries and provides individuals with greater privacy, security, and control over their personal data.
It is an emerging concept that has the potential to transform how identity is managed and verified across various sectors.

**Verifiable Credentials (VCs)** - digital credentials that can be used to prove claims about a person, organization, or thing, and are designed to be portable, interoperable, and privacy-preserving.
Verifiable credentials are often associated with DIDs and can be stored and managed using a DID-based identity system.

## KILT Protocol Specific Terms

**Attestation** -the act of formally confirming and certifying the validity of the data within a claim, typically performed by a trusted Attester.

**Attester** - a trusted entity or organization that attests claims and issues credentials on the KILT Protocol.
The Attester confirms e truth of the claim requested based on the information presented by the Claimer.

**Claimer** - an individual or entity that asserts a claim or statement about their identity or qualifications.
The Claimer can use credentials to provide evidence of their claims, which can be verified by third-party entities or systems.

**Claim Type (CType)** - a specific type of claim that can be made about an individual, such as their education, work experience, or identity information.
Each claim type has a defined set of attributes that must be provided to support the claims data type and structure.
It can be used to generate verifiable credentials that can be shared with others. [See the CTypes concept page for more details](https://docs.kilt.io/docs/concepts/credentials/ctypes)

**Credential** - a verifiable digital representation of a claim made by a Claimer, which has been attested to by a trusted entity, such as an Attester or Issuer.
It consists of a set of attributes that describe the claim and the proof of its validity, and can be shared with third parties to provide verifiable proof of the claim.

**KILT Digital Identity** - a self-sovereign identity that is owned and controlled by the individual or entity it represents.
It consists of verifiable credentials that are issued by trusted entities, such as Attesters, and can be used to prove claims about the individual or entity's identity, qualifications, or other attributes.

**KILT Coin** - the native token of the KILT blockchain used for paying for attestations and DIDs. It can also be used for governance, staking, transaction fees and as a means of exchange on the network.

**KILT Protocol** - an open-source blockchain protocol for issuing self-sovereign, and verifiable credentials for Web3, the next generation of the Internet.
KILT’s mission is to return control over personal data to its owner, restoring privacy to the individual.

### Request for Attestation


**Trust Anchors** - entities that are trusted to issue or verify claims on the KILT network, such as governments, educational institutions, or professional organizations.

**Trust Market** - a market that operates on trust and reputation in addition to financial incentives, where buyers and sellers exchange goods or services based on established reputation through digital platforms.
While trust markets offer benefits such as reducing the need for intermediaries, they also face challenges that need to be addressed to maintain trust and fairness in transactions.

**Transport-Agnostic Messaging Layer** - a messaging system that is not dependent on any particular communication protocol or technology.
It allows different systems or applications to communicate with each other regardless of the underlying transport protocol used, providing a standardized way of exchanging messages across different platforms and technologies.

**Verifier** - a person, organization, or system that checks the validity and authenticity of an individual's credentials or qualifications.
Verifiers play a critical role in building trust and ensuring that credentials are accurate and reliable.

## Ecosystem Terms

**Blockchain Technology** - a type of distributed ledger technology that allows multiple parties to have a synchronized, transparent, and immutable record of transactions.
It uses cryptographic techniques to secure and verify transactions, and it does not require a central authority or intermediaries.

**Decentralized Network** - a network of computers or nodes that operate without a central authority or control.
In a decentralized network, each node has equal control over the network, and decisions are made through a consensus mechanism, rather than by a single entity or group.

**Distributed Ledger Technology (DLT)** - a type of digital database that stores information across a network of computers or nodes.
It allows multiple parties to have a synchronized, transparent, and immutable record of transactions, without the need for a central authority or intermediaries.

**Extrinsic** - a transaction that originates from an external account and affects the state of the blockchain.
It can be used to execute actions on the network, such as transferring funds, making governance decisions, using functionality of the parachain, or interacting with smart contracts. More details about Extrinsics can be found in the [official Polkadot documentation](https://wiki.polkadot.network/docs/learn-extrinsics)

**Parachains** - sovereign blockchains running in parallel within the Kusama or Polkadot networks, connected via the Relay Chain of that network.
KILT launched as a parachain on the Kusama network in September 2021 and moved to Polkadot in September 2022.
More details about parachains can be found in the [offical Polkadot documentation](https://wiki.polkadot.network/docs/learn-parachains)

**Polkadot** - a multi-chain network that allows for interoperability between different blockchain protocols, including the KILT Protocol.
More details about Polkadot can be found in the [official Polkadot documentation](https://wiki.polkadot.network/docs/getting-started#what-is-polkadot)

**polkadot.js** - a JavaScript library that allows developers to interact with Substrate-based blockchains, including KILT Spiritnet and Peregrine.
It is the basis of the KILT SDK and provides many utilities and functions that may be useful for application developers.
More details about polkadot.js can be found in their [official documentation](https://polkadot.js.org/docs/).

**Substrate** - a modular blockchain development framework used to build custom blockchain solutions, including the KILT Protocol blockchain.
More details about Substrate can be found in the [official Polkadot documentation](https://docs.substrate.io/)

**Relay Chain** - the central chain in the Polkadot network that coordinates communication and consensus between different parachains.
More details about parachains can be found in the [official Polkadot documentation](https://wiki.polkadot.network/docs/learn-architecture)
