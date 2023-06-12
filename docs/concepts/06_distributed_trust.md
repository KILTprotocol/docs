---
id: distributed_trust
title: Distributed Trust
---

import ThemedImage from '@theme/ThemedImage';

In some cases, Attesters are individuals that attest to the validity of claims made by Claimers.
Nevertheless, in most cases multiple Attesters group together to build up trust in a brand.
In this way, Verifiers no longer need to trust each and every Attester individually; they can put trust in the brand as a whole, which in return ensures that all Attesters working for this brand are credible.
Such a brand can be organized in many different ways.
The KILT protocol provides mechanisms to form such brands on the blockchain.

There are two ways for Attesters to create groups and build an organization.
The first is by creating a Delegation Hierarchy, which provides a very basic and traditional hierarchical structure.
The second option is a Virtual Credential Organization (VCO), which is not yet implemented in KILT.
Virtual Credential Organizations will be more flexible and will be able to support more decentralized use cases than Delegation Hierarchies.

## Delegation Hierarchies

Delegation Hierarchies organize their members in a traditional hierarchical structure, and are modeled as a [Tree data structure](https://en.wikipedia.org/wiki/Tree_(data_structure)), also shown in the graph below.
Everyone in KILT can create a new hierarchy and immediately become the only member of the newly created organization.
Not only is the creator the only member of the organization, they are also the root of the hierarchy, meaning that the creator will have full control over the whole hierarchy.

<center>

<ThemedImage
  alt="Example hierarchy"
  sources={{
    light: '/img/concepts/distributed_trust/delegation-hierarchies.svg',
    dark: '/img/concepts/distributed_trust/delegation-hierarchies-dark.svg',
  }}
/>

</center>

Following the laws of Tree data structures, when the hierarchy root adds new members to the hierarchy, the new members become direct "children" of the root.
Similarly, when someone other than root adds new members, it becomes the parent of the new children.

The graph above provides an example Delegation Hierarchy containing five Attesters.
**Attester 1** is the root (i.e., the creator) of the Delegation Hierarchy.
At some point, Attester 1 has added two more Attesters, Attester 2 and Attester 3.
**Attester 2** was given the right to both further delegate to other entities and to issue credentials on behalf of the organization.
**Attester 3**, on the other hand, was only given the right to add more Attesters to the Delegation Hierarchy, so they cannot issue any credentials.
This is useful in cases where someone should only have powers over the members, but is not authorized to do any work themselves.
For example, in companies this could be someone who manages a team of Attesters.
**Attesters 4** and **Attester 5** were added by Attester 3 and were only given attestation permissions, meaning that they can issue new credentials, but cannot delegate any work to other Attesters.
In the company example, these would be employees that do the attestation work but have no authority to hire new staff.

### Revocation

Delegation Hierarchies also limit who can change or remove permissions.

For delegations, only the parents of a given Attester can change or remove the Attester's delegation itself or any of its children.
E.g., Attester 2 cannot change the delegation information for Attester 4, but Attester 1 and Attester 3 can both remove Attester 4 from the organization, or give them permission to also hire new people, which it cannot do right now.

Credential revocation works similarly, with the difference that a credential can be revoked by any parent (as with delegations), or by the original Attester.
E.g., Attester 2 cannot revoke credentials issued by Attester 1, 3, 4 and 5, while Attester 1 can revoke credentials issued by any Attester since Attester 1 is, directly or indirectly, the parent of every other node.

## Virtual Credential Organizations

<center>

![Coming soon](@site/static/img/concepts/distributed_trust/coming-soon.png)

[Credits to freepngimg.com.](https://freepngimg.com/png/11420-coming-soon-png-file)

</center>


## Storing Delegation node

Adding a new node in the delegation hierarchies requires providing a constant deposit, which is currently 1 KILT.
The deposit serves as a security measure to ensure the integrity of the blockchain and incentivize users to manage their nodes responsibly. By requiring a deposit, it discourages spamming or unnecessary creation of nodes.
The deposit can be reclaimed by the user by deleting their node.
