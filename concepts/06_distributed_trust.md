---
id: distributed_trust
title: Distributed Trust
---

import ThemedImage from '@theme/ThemedImage';

Sometimes, Issuers are individuals that attest to the validity of claims made by Holder.
However, usually multiple Issuers group together to build up trust in a brand.
In this way, Verifiers no longer need to trust each and every Issuer individually.
They can put trust in the brand as a whole, which in return ensures that all Issuers working for this brand are credible.
Such a brand can be organized in many different ways.
The KILT protocol provides mechanisms to form such brands on the blockchain.

There are two ways for Issuers to create groups and build an organization.
The first is by creating a Delegation Hierarchy, which provides a basic and traditional hierarchical structure.
The second option is a Virtual Credential Organization (VCO), which isn't yet implemented in KILT.
VCOs will be more flexible and able to support more decentralized use cases than Delegation Hierarchies.

## Delegation hierarchies

Delegation Hierarchies organize their members in a traditional hierarchical structure, and are modeled as a [Tree data structure](https://en.wikipedia.org/wiki/Tree_(data_structure)), also shown in the graph below.
Everyone can use KILT to create a new hierarchy and immediately become the only member of the newly created organization.
Not only is the creator the only member of the organization, they're also the root of the hierarchy.
This means that the creator has full control over the whole hierarchy.

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

The graph above provides an example Delegation Hierarchy containing five Issuers.
**Issuer 1** is the root (i.e., the creator) of the Delegation Hierarchy.
At some point, Issuer 1 has added two more Issuers, Issuer 2 and Issuer 3.
**Issuer 2** was given the right to both further delegate to other entities and to issue credentials on behalf of the organization.
**Issuer 3**, on the other hand, was only given the right to add more Issuers to the Delegation Hierarchy, so they can't issue any credentials.
This is useful in cases where someone should only have powers over the members, but isn't authorized to do any work themselves.
For example, in companies this could be someone who manages a team of Issuers.
**Issuers 4** and **Issuer 5** were added by Issuer 3 and were only given attestation permissions, meaning that they can issue new credentials, but can't delegate any work to other Issuers.
In the company example, these would be employees that attest the work but have no authority to hire new staff.

### Revocation

Delegation hierarchies limit who can change or remove permissions.

For delegations, only the parents of a given Issuer can change or remove the Issuer's delegation itself or any of its children.
E.g., Issuer 2 can't change the delegation information for Issuer 4, but Issuer 1 and Issuer 3 can both remove Issuer 4 from the organization, or give them permission to also hire new people, which it can't do right now.

Credential revocation works similarly, with the difference that any parent can revoke a credential (as with delegations), or by the original Issuer.
E.g., Issuer 2 can't revoke credentials issued by Issuer 1, 3, 4 and 5, while Issuer 1 can revoke credentials issued by any Issuer since Issuer 1 is, directly or indirectly, the parent of every other node.

## Storing delegation node

Adding a new node in the delegation hierarchies requires providing a constant deposit, which is currently 1 KILT.
The deposit serves as a security measure to ensure the integrity of the blockchain and incentivize users to manage their nodes responsibly. By requiring a deposit, it discourages spamming or unnecessary creation of nodes.
When a user deletes their node, they can reclaim the deposit.