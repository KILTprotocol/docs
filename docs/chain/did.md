# DID 

## What is a DID?

In KILT a DID is a decentralized identifier that the user owns and controls. It consists of a unique set of keys that can be used for different operations on the blockchain. For an in-depth explanation see the [KILT DID spec](https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md).

A DID may be a "light" DID, which is not stored on-chain, or a "full" on-chain DID. A light DID is issued by default, with the keys stored locally on your device. By upgrading this to a full DID registered on the blockchain, all the keys associated with it can be retrieved from the KILT blockchain storage.

A full DID can then be used to perform certain on-chain actions which include:

* Writing CTypes to the chain
* Writing attestations to the chain
* Setting delegations
* Doing key rotations on the DID keys

## Registering a DID

A full DID is needed if the user wants to become an attester or wants to setup delegations. 

A full DID also allows the user to embed a list of URLs, known as service endpoints, into the DID document so that they can be retrieved from the chain as part of the DID document.

To create a full DID the user first has to create a set of keys and service endpoints:

* one authentication key for signing extrinsics from your DID
* zero or more key agreement keys for encrypting messages that are sent to you
* one attestation key for signing attestations (optional)
* one delegation key for authorizing delegations (optional)
* service endpoints that point to external hostings for others to find (optional)

With those keys prepared and the service endpoints set up, they are ready to write the DID to the KILT blockchain.

The user then has to create the `did::create` extrinsic and sign it with any KILT account that has enough funding to pay both the transaction fees and the DID deposit. The extrinsic consists of  

* The `DidCreationDetails` object containing keys and service endpoints
* The `DidSignature` which is a signature using your authentication key over the scale encoded `DidCreationDetails` from above
* A regular signature authenticating the sender of the extrinsic

Once this extrinsic is submitted and executed, the DID is written to the chain.

## Updating a DID

There is a set of extrinsics available to update a full DID. These are:

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


All of them have to be authenticated using the DID that is updated. For that there is the special `submit_did_call` extrinsic. This extrinsic contains another call and a signature from the DID that is authorizing the inner call.

For example when you want to add a new service endpoint:

1. Create a `DidEndpoint` object containing a service id, a list of service types and a list of URLs.
2. Wrap it in an `add_service_endpoint` extrinsic.
3. Take this call and put it into a `DidAuthorizedCallOperation` object together with the DID, the tx_counter of the DID, the current block number and the account id of the submitter of the final extrinsic.
4. Now we can put together the actual `submit_did_call` extrinsic by signing the scale encoded `DidAuthorizedCallOperation` with our DID and then signing and submitting the call together with the DID-signature using the key of the account that is specified as `submitter` in the `DidAuthorizedCallOperation`.

The `did::submit_did_call` will verify that 1) the submitters signature is correct and 2) that the DID signature is correct. After that it will execute the inner call with a special `DidOrigin` that allows the inner call to access both the account id of the submitter and the id of the affected DID.

Please note that the submitter has to pay all the transaction fees and/or deposits that the inner call may require, but doesn’t have to be related to any of the keys that make up the DID; this can be done from any KILT account.

## What about the deposit?

When writing a DID to the chain the submitter of the extrinsic has to pay a deposit, currently 2 KILT. This is to incentivize deleting unused DIDs to save storage on the chain. The deposit is always bound to the account that submitted the extrinsic to create the DID, and not to the DID itself. Consequently there are also two ways of reclaiming the deposit:

1) The DID owner decides to delete the DID using the `did::delete` extrinsic. This call needs to be authorized by the DID and can therefore be submitted by any account. Despite the fact that this account can differ from the deposit owner, the deposit will always be reimbursed to the account that paid for it.
2) The deposit owner can decide to claim their deposit back using the `did::reclaim_deposit` extrinsic. This will also cause the DID to be fully deleted but it doesn't require a signature from the DID. Only the signature of the account that created the DID is needed for this. 

