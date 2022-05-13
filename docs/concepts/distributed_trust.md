---
id: distributed_trust
title: Distributed Trust
---

:::caution
This feature is currently a preview on Peregrine and is therefore not available on Spiritnet.
:::

Attesters can be individuals that attest to the validity of claims made by claimers.
But in many cases multiple attesters group together to build up a trust in a brand.
Verifier don't need to trust individual attesters but trust the brand, which in return ensures that all attesters working for this brand are credible.

Such a brand can be organized in many different ways.
Today the most common way to organize and build a brand is to found a company.
In the future their are going to be more decentralized solutions like Decentralized Autonomous Organizations (DAOs) or more specifically Virtual Credential Organizations (VCOs).

If such a collective has given the attester the right to issue attestations, the attester can decide to create an attestation in the name of the collective.
The attester is still the only issuer of the attestation, but the collective has power over this attestation.
If the attester later leaves the collective, depending on the collective they may not be able to revoke or remove the attestation.
Only the collective can then manage the attestation.
But even if the attester is still part of the collective, the collective has power over the attestation.

<center>

![](/img/concepts/distributed_trust/attester-collective.svg)

</center>

The image above shows an attester collective which consists of 3 attesters (Attester 1, 2 and 3).
Attester 4 is not part of the collective.
Attester 1 create an attestation for the collective.
Attester 2 and 3 can now revoke or remove this attestations.
Attester 4 cannot create attestations for the collective and can also not revoke or remove any attestation that belong to the collective.

Attester collectives are a powerful construct.
But how can Attester 4 become part of the collective?
How does the collective handle malicious members?
Maybe Attester 2 should have the power to revoke but not to remove an attestation?

All of these questions are solved by the specific type of collective.
At the moment there is only a single type of collective available, the Delegation Hierarchy.
A future attester collective type is the VCO which is more powerful than a simple Delegation Hierarchy and provides more flexible tools.

## Delegation Hierarchy

Delegation Hierarchies are one type of attester collectives.
This type of collective organizes it's member strictly hierarchical.
Every one can create a new hierarchy and imminently become the only member of the collective.
Not only is the creator the only member but also the root of the hierarchy.
They have full control over the Delegation Hierarchy.

When the root adds new attesters to the hierarchy, these new members become direct descendants of the root.
The root is the parent of the new members while the members are the children of the root.
When the new members add members by, the new members become the descendants of the member that added them.
They become parents themselves.
This creates a tree like structure shown in the image below.

<center>

![](/img/concepts/distributed_trust/delegation-hierarchies.svg)

</center>

The above depicted Delegation Hierarchy contains five attesters.
Attester 1 is the root of the Delegation Hierarchy.
As the root Attester 1 added two more attesters.
Attester 2 was given the right to delegate and to issue attestations for the collective.
Attester 3 can only add more attesters to the Delegation Hierarchy, but he cannot create, revoke or remove Attestations.
Attesters 4 and 5 where added by Attester 3 and can only create, revoke and remove attestations, but they cannot add more attesters to the Delegation Hierarchy.

Delegation Hierarchies also limit who can remove and remove attestations.
Only parents of an attester can revoke or remove delegations from their children.
E.g. Attester 2 cannot revoke/remove attestations issued by Attester 1, 3, 4 and 5, while Attester 1 can revoke and remove attestations issued by any attester since Attester 1 is the root node.

## Virtual Credential Organizations

<center>

![](/img/concepts/distributed_trust/coming-soon.png)

[credit](https://freepngimg.com/png/11420-coming-soon-png-file)

</center>

