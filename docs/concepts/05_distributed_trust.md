---
id: distributed_trust
title: Distributed Trust
---

import ThemedImage from '@theme/ThemedImage';

:::caution
This feature is currently a preview on Peregrine and is therefore not available on Spiritnet.
:::

In some cases, Attesters are individuals that attest to the validity of claims made by Claimers.
Nevertheless, in most cases multiple Attesters group together to build up trust in a brand.
In this way, Verifiers do not need to trust each and every Attester individually anymore, but they can put trust in the brand as a whole, which in return ensures that all Attesters working for this brand are credible.
Such a brand can be organized in many different ways.
The KILT protocol provides mechanisms to form such brands on the blockchain.

There are two ways for Attesters to group up and build an organization.
The first is by creating Delegation Hierarchies, which provide a very basic and traditional hierarchical structure.
The second option are Virtual Credential Organizations (VCO), which are not yet implemented in KILT.
Virtual Credential Organizations will be more flexible and will be able to support more decentralized use cases than Delegation Hierarchies.

## Delegation Hierarchies

Delegation Hierarchies organize their members in a traditional hierarchical structure, and are modeled as a [Tree data structure](https://en.wikipedia.org/wiki/Tree_(data_structure)), also shown in the graph below.
Everyone in KILT can create a new hierarchy and immediately become the only member of the newly created organization.
Not only is the creator the only member of the organization, but also the root of the hierarchy, meaning that the creator will have full control over the whole hierarchy.

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
Similarly, when someone different than root adds new members itself, it becomes the parent of all the new children.

The graph above provides an example Delegation Hierarchy containing five Attesters.
**Attester 1** is the root (i.e., the creator) of the Delegation Hierarchy.
At some point, Attester 1 has added two more Attesters, Attester 2 and Attester 3.
Attester 2 was given the right to both further delegate to other entities and to issue Credentials on behalf of the organization.
Attester 3, on the other hand, was only given the right to add more Attesters to the Delegation Hierarchy, so they cannot issue or revoke any Credentials.
This is useful in cases where someone should only have powers over the members, but is not authorized to do any work themselves.
For example, in companies this could be someone who manages a team of Attesters.
Attesters 4 and 5 where added by Attester 3 and can only issue and revoke Credentials, but they cannot add more Attesters to the Delegation Hierarchy.
In a company those would be employees that do the attestation work, but have no authority to hire new staff.

Delegation Hierarchies also limit who can revoke Credentials.
Only parents of an Attester can revoke or remove delegations from their children.
E.g., Attester 2 cannot revoke Credentials issued by Attester 1, 3, 4 and 5, while Attester 1 can revoke Credentials issued by any Attester since Attester 1 is, directly or indirectly, the parent of every other node.

## Virtual Credential Organizations

<center>

![Coming soon](/img/concepts/distributed_trust/coming-soon.png)

[Credits to freepngimg.com.](https://freepngimg.com/png/11420-coming-soon-png-file)

</center>
