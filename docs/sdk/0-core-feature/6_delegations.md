---
id: delegations
title: Delegation Hierarchies and Delegated Attestations
---

KILT allows attesters to delegate their attestation rights to others, giving them permission to attest in their name, relying on their reputation. For example, an organisation – the attester – can delegate members of staff to attest in the name of the company. Attesters can also build complex delegation hierarchies by allowing delegates to delegate further.

Attesters retain full authority over the delegations and attestations issued by a (sub-)delegate, which allows them to revoke any delegation or attestation issued to a branch in the delegation hierarchy that originates from them. In this way, any employee who leaves the company can have their rights withdrawn.

To enable this functionality, KILT represents these permissions with interlinked delegation nodes stored on the blockchain:

- **A DelegationRootNode** establishes a new delegation hierarchy or tree. This is created and owned by the delegating Attester. Because a delegation tree is always specific to one claim type (CType), it also stores a CType hash. A DelegationRootNode cannot be used in an attestation.
- **A DelegationNode** is owned by the delegate and stores what the delegate is authorised to do in the name of the delegating attester: either attest, delegate further, or do both. Links to a parent DelegationRootNode or DelegationNode establish which delegation tree this node is part of. A DelegationNode can be used in an attestation by its owner.

## Creating a DelegationRootNode

As an attester, to establish a new delegation tree that allows another to attest to a CType in your name, you need to write a DelegationRootNode to the KILT blockchain.

If delegating the attestation rights for multiple CTypes, a separate delegation tree needs to be created for each CType. To do so, just repeat these steps:

/1. Use the SDK to create a DelegationRootNode object

This requires a unique Id (the DelegationRootNode's identifier), the CType hash, and the owner identity’s address

/2. Call the `.getStoreTx()` method on the DelegationRootNode object to produce a SubmittableExtrinsic, a transaction object which can be dispatched to the KILT blockchain.

The `.getStoreTx()` method takes the owner's identity as its argument to sign the transaction, which acts as proof of authority. This owner identity also pays the transaction fees, which are triggered in the next steps.

/3. Submit the transaction.

## Creating a DelegationNode

To actually delegate rights, you now need to create a DelegationNode for the delegate which links to your Delegation(Root)Node.

Although the node is owned by the delegate, it is submitted by the delegating attester (you). This part of the process requires communication with the delegate as their signature is required during submission as proof of their consent.

/1. Create a new DelegationNode object

Like the DelegationRootNode, this takes a unique id and owner address. Instead of the CType, it requires the id of the delegation tree’s DelegationRootNode as a reference. This can be used to look up the CType for which the delegation is valid.

You will also need an array of permission flags, which are available as an enum in the SDK. You can select either one or both of the two available permissions:

- Attest
- Delegate

The last argument lets you add a `parentId`. This indicates the direct parent node (the owner of which is the one creating the new delegation), just as the `rootId` indicates the root node. Note that this field will be cleared if the parent is the root node (i.e. if both fields are equal).

/2. Obtain the delegate’s signature over the new DelegationNode’s hash.

The hash is obtained by calling the .generateHash() method on the DelegationNode object. The resulting hash is signed using the delegate's identity.

Ideally, send the complete DelegationNode object to the delegate, so they have all the information about what they are signing. You can do this using the KILT messaging system, which has a message type for that purpose: request-accept-delegation

/3. Call the `.getStoreTx()` method on the new DelegationNode

This takes two arguments: the delegating identity (owner of the parent node) to sign the transaction (proof of authority, payment of fees) and the delegate’s signature as proof of consent (owner of the new DelegationNode).

Again, this method call returns a SubmittableExtrinsic.

/4. Submit the transaction.

If the `Permission.delegate` flag is set on the new DelegationNode, the delegate can now repeat this process and delegate permissions further. To do so, their DelegationNode id is added as parentId to the new DelegationNode.

If the `Permisson.delegate` flag is not set on the parent, or if it is no longer active (i.e. has been revoked in the meantime), the blockchain will reject new delegations.

## Making a Delegated Attestation

An attestation is considered to be delegated (i.e. made in another’s name / using another’s reputation) when it contains the id of a DelegationNode stored on the blockchain, thereby establishing a connection to the attesters referenced in the parent nodes and the root node, in whose name it is issued.

A delegated attestation can only be written to the blockchain by the owner of the referenced DelegationNode, which must still be active (i.e. has not been revoked) and must have the attestation permission flag set.

## Revoking a Delegated Attestation

While a regular attestation can only be revoked by its issuer (Attester), an attestation with a `delegationId` can also be revoked by any of the identities who had delegated to the respective DelegationNode or to a parent (who own one of the ancestor nodes). This works irrespective of the revocation of delegation nodes.

Because transaction costs on the blockchain increase proportionally to the number of lookups that need to be performed to retrace the delegation tree to the node owned by the revoking identity, the revocation call takes a maximum number of delegation node lookups as an argument. This will increase the funds locked and thus required to submit the transaction.

However, if the number of actual lookups performed is less than this number, excess funds will be returned after the transaction has been completed. If this number is lower than the actual steps required, the transaction will fail.

## Delegated Attestation

![delegation attestation](/img/delegation-attestation.png)

CASE 1: Delegation node 3 revokes the attestation. The number of lookups performed will be zero as delegation node 3 created the delegated attestation

CASE 2: Delegation node 1 revokes the attestation. The number of lookups performed will be two as delegation node 3 created the delegated attestation, therefore, must count to find the delegation.

Each CASE the delegator must call the revoke on the instantiated attestation object with the given delegator or parent of the delegator to revoke the attestation. The fee is taken considering the maximum number of lookups needed to reach all cases, these fees will be refunded if paid too much.

The SDK provides functions to retrieve the number of lookups required by querying the blockchain.

## Revoking a DelegationNode

Revoking a DelegationNode has similar logic to revoking delegated attestations. Both the owner and any delegating identity (i.e. an “ancestor” or “superior” in the hierarchy) can revoke a DelegationNode.

Credentials attested using a DelegationNode that is later revoked are still valid (but revocable, if required), but no further attestations can be created using this DelegationNode.

Revoking a DelegationNode requires revoking all its children (and their children, and so on), with extra fees applying for each revocation. For this reason, the call has an additional parameter `maxRevocations`. As with max_depth, this increases the funds required. Child nodes are revoked first, so if this number is lower than the actual revocations required, the revocation process will abort before revoking the targeted node, leaving only `maxRevocation` child/descendant nodes revoked. If the number is higher than actually required, excess funds will be returned at the end.

The SDK has code to count child nodes and their children, in addition to functionality counting the number of lookups to find the parent owned by the submitting identity. This is currently included and performed automatically in the getRevokeTx() method on the DelegationNode and DelegationRootNode.

## Revoking a DelegationRootNode

The process of revoking a DelegationRootNode is similar to revoking the DelegationNode, but can only be done by the owner (as it has no parents). This also means that traversing parent nodes is not required, which is why the respective call lacks this parameter.
