---
id: pallet-did
title: DID pallet
---

In KILT a DID is a decentralized identifier that the user owns and controls.
It consists of a unique set of keys that can be used for different operations on the blockchain.
For an in-depth explanation see the [KILT DID spec](https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md).

A DID may be a "light" DID, which is not stored on-chain, or a "full" on-chain DID.
A light DID is issued by default, with the keys stored locally on your device.
By upgrading this to a full DID registered on the blockchain, all the keys associated with it can be retrieved from the KILT blockchain storage.

A full DID can then be used to perform certain on-chain actions which include:

* Writing CTypes to the chain
* Writing attestations to the chain
* Setting delegations
* Doing key rotations on the DID keys

## Register a Full DID

A full DID is needed if the user wants to become an Attester or wants to setup delegations.
A full DID also allows the user to embed a list of URLs, known as services, into the DID document so that they can be retrieved from the chain as part of the DID document.
To create a full DID the user first has to create some keys, and optionally some services:

* one authentication key for signing extrinsics from your DID
* zero or more key agreement keys for encrypting messages that are sent to you
* (optional) one attestation key for signing attestations
* (optional) one delegation key for authorizing delegations
* (optional) service that point to external hostings for others to find

After the relevant components have been created, they are ready to write the DID to the KILT blockchain.
The user then has to create the `did::create` extrinsic and sign it with any KILT account that has enough funding to pay both the transaction fees and the DID deposit.
The extrinsic consists of

* The `DidCreationDetails` object containing keys, services and the account id of the submitter for the creation
* The `DidSignature` which is a signature using your authentication key over the scale encoded `DidCreationDetails` from above
* A regular signature authenticating the sender of the extrinsic

The DID owner and the submitter can be two different parties.
This allows the creation of a DID without having to pay any fees or deposits.
Beware that this also means that the DID creator gives up some power over the DID: The submitter who pays the deposit will be able to delete the DID from the blockchain and claim back its deposit.
Once the `did::create` extrinsic is submitted and executed, the DID is written to the chain.

## Use a Full DID

Once the DID is successfully registered on chain, it can be used to perform certain on-chain actions that are not possible to do with a regular account.
This includes the handling of attestations and CTypes, setting up trust hierarchies through delegations, managing web3names and much more.

Those actions need to be signed by the DID before they can be submitted to chain by any account that the DID owner specifies when signing.
We are naming those actions "DID-Calls".
To submit those there is a special extrinsic called `submit_did_call`.

The process of doing any DID-Call is always the same:

* Construct the actual call you want to execute including all arguments of that extrinsic.
* Wrap the call in a `DidAuthorizedCallOperation` together with the
    * Senders DID to indicate who wants this operation to happen
    * Senders DID tx_counter + 1 to prevent replay attacks
    * Current block number to prevent the operation being submitted too far in the future
    * Account of the submitter to allow the DID owner to specify who is allowed to submit
* Create a signature over the `DidAuthorizedCallOperation` by scale-encoding it and signing it using the appropriate key
    * Most operations require the authentication key of the DID to be used
    * Managing Attestations requires the attestation key
    * Managing Delegations requires the delegation key
* Construct the `submit_did_call` extrinsic consisting of
    * The `DidAuthorizedCallOperation`
    * The DID signature
* Pass the call over to the submitter who can now sign and submit it to the chain
    * The submitter will have to pay for all fees and deposits that result from the operation
    * In general the submitter will have the power to delete all on-chain objects to reclaim their deposit
* The chain now checks that
    * The submitter's signature is correct
    * The submitter is the one specified in the `DidAuthorizedCallOperation`
    * The DID signature is correct
    * The tx_counter is valid (current tx_counter + 1)
    * The blocknumber is not older than an hour (given 12s block time)
* After that the actual call gets dispatched with a special `DidOrigin`
    * This allows the executer of the actual call to get the DID and the account of the submitter

## Update a Full DID

There is a set of extrinsics available to update a full DID.
These are:

* `set_authentication_key`
* `set_delegation_key`
* `remove_delegation_key`
* `set_attestation_key`
* `remove_attestation_key`
* `add_key_agreement_key`
* `remove_key_agreement_key`
* `add_service_endpoint`
* `remove_service_endpoint`
* `delete`

All of them have to be authenticated using the DID that is updated following the process described above.

## What About the Deposit?

When writing a DID to the chain the submitter of the extrinsic has to pay a deposit, currently 2 KILT.
This is to incentivize deleting unused DIDs to save storage on the chain.
The deposit is always bound to the account that submitted the extrinsic to create the DID, and not to the DID itself.
Consequently there are also two ways of reclaiming the deposit:

1) The DID owner decides to delete the DID using the `did::delete` extrinsic.
   This call needs to be authorized by the DID and can therefore be submitted by any account.
   Despite the fact that this account can differ from the deposit owner, the deposit will always be reimbursed to the account that paid for it.
2) The deposit owner can decide to claim their deposit back using the `did::reclaim_deposit` extrinsic.
   This will also cause the DID to be fully deleted but it doesn't require a signature from the DID.
   Only the signature of the account that created the DID is needed for this.
