---
id: distributed_trust
title: Distributed Trust
---

import ThemedImage from '@theme/ThemedImage';

:::caution
This feature is currently a preview on Peregrine and is therefore not available on Spiritnet.
:::

Attesters can be individuals that attest to the validity of claims made by claimers.
But in many cases multiple attesters group together to build up trust in a brand.
Verifier don't need to trust individual attesters but trust the brand, which in return ensures that all attesters working for this brand are credible.
Such a brand can be organized in many different ways.
The KILT protocol provides mechanisms to form such brands on the blockchain.

There are two ways for attesters to group up and build an organization.
The first one are Delegation Hierarchies, which provide a very basic hierarchical organisation.
Delegation Hierarchies are available on our test network Peregrine.
The second option are Virtual Credential Organizations which are not yet implemented and currently.
Virtual Credential Organizations will be more flexible than Delegation Hierarchies and accommodate a more decentralized range of use cases.

## Delegation Hierarchy

Delegation Hierarchies organize their members in a traditional hierarchical structure.
Every one can create a new hierarchy and imminently become the only member of the organization.
Not only is the creator the only member but also the root of the hierarchy.
They have full control over the Delegation Hierarchy.

When the root adds new members to the hierarchy, they become direct children of the root.
When the children add members themselves, they become parents to the children.
This creates a tree like structure similar to the one shown in the image below.

<center>

<ThemedImage
  alt="Example hierarchy"
  sources={{
    light: '/img/concepts/distributed_trust/delegation-hierarchies.svg',
    dark: '/img/concepts/distributed_trust/delegation-hierarchies-dark.svg',
  }}
/>

</center>

The above depicted Delegation Hierarchy contains five attesters.
Attester 1 is the root of the Delegation Hierarchy.
As the root Attester 1 added two more attesters.
Attester 2 was given the right to delegate and to issue attestations for the collective.
Attester 3 can only add more attesters to the Delegation Hierarchy, but he cannot create, revoke or remove Attestations.
This is useful in cases where someone should only have powers over the members, but is not authorized to create attestations themself.
In a company this could be someone who manages a team of attesters.
Attesters 4 and 5 where added by Attester 3 and can only create, revoke and remove attestations, but they cannot add more attesters to the Delegation Hierarchy.
In a company those would be employees that do the attestation work, but have no authority to hire new staff.

Delegation Hierarchies also limit who can revoke or remove attestations.
Only parents of an attester can revoke or remove delegations from their children.
E.g. Attester 2 cannot revoke/remove attestations issued by Attester 1, 3, 4 and 5, while Attester 1 can revoke and remove attestations issued by any attester since Attester 1 is, directly or indirectly, the parent of every other node.

## Virtual Credential Organizations

<center>

![Coming soon](/img/concepts/distributed_trust/coming-soon.png)

[credit](https://freepngimg.com/png/11420-coming-soon-png-file)

</center>
