---
id: credentials
title: Credentials
---

## Credential Issuance

import TsJsBlock from '@site/src/components/TsJsBlock';

import CreateCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/01_create_credential.ts';
import IssueCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/02_issue_credential.ts';

As for traditional KILT credentials, public credentials also have their structure defined by a [CType][ctypes-link], although CTypes that can be used to represent information about assets would probably differ from the ones used to represent information about people.

As mentioned in the section about credentials, the creation of a CType in KILT involves two steps: the definition of a CType and the anchoring of its hash on the KILT blockchain.

We will not cover the creation of a CType, please refer to the [CType creation](./04_claiming/01_ctype_creation.md)

## Create and Issue the Credential

Using the existing CType, the new public credential object can be created with the actual content, and then written to the chain for the rest of the KILT users (and beyond) to consume.

Creating a public credential is as simple as creating an object that conforms to the required structure of the CType:

<TsJsBlock>
  {CreateCredential}
</TsJsBlock>

:::note
The creation of the credential object does not require any interaction with the blockchain per se.
This also means that, until the object is written to the blockchain (see below), it cannot be used/retrieved/verified by anyone else, so it is, by all means, not existing.
:::

Once the credential object is created, it must be written to the blockchain for other people to be able to use it.

<TsJsBlock>
  {IssueCredential}
</TsJsBlock>

:::info Credential has to be CBOR-encoded!
Given a public credential object, the SDK internally CBOR-encodes it before firing the extrinsic to the blockchain!
This is to save space on credentials that actually benefit from CBOR compression (e.g., if they contain a lot of binary information).
Hence, creating public credentials without the SDK requires the credential to be CBOR-encoded!
:::

[ctypes-link]: /concepts/credentials/ctypes

## Retrieve Public Credentials

import RetrieveCredentialbyId from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/03_retrieve_credential_by_id.ts';
import RetrieveCredentialsbySubject from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/04_retrieve_credentials_by_subject.ts';
import VerifyCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/05_verify_credential.ts';

Public credentials have their best capability in the fact that they are, indeed, public by design.
This means that once issued, anyone who has access to an archive or full node for the KILT blockchain can retrieve them, making them very decentralized in nature.

The KILT SDK exposes different ways to fetch public credentials.

## Retrieve a Credential by its Identifier

Some use cases might involve the communication of just the ID of one or more public credentials, e.g., to offload the retrieval of the full credential to the receiver, and save some communication bandwidth.

The KILT SDK accounts for this use case, and makes it very easy to query a public credential given its ID:

<TsJsBlock>
  {RetrieveCredentialbyId}
</TsJsBlock>

If a credential with the provided ID cannot be found, then the ID is invalid and should be treated as such by the received.

## Retrieve All Credentials for an Asset

Other use cases might work differently: given an asset identified by an [AssetDID][asset-did-concept], a user might want to retrieve all the credentials that have been issued to that asset.

The KILT SDK makes also this use case very easy:

<TsJsBlock>
  {RetrieveCredentialsbySubject}
</TsJsBlock>

## Verify a Public Credential

A third class of use cases might involve users exchanging whole public credentials, for instance when showing some sort of proof.

This case is also supported by the KILT SDK, and relies on an important feature of public credentials: **the identifier (ID) of a public credential is generated from its content and from the KILT DID of its issuer**.
This means that even a minimal change in the content of a public credential object before being shared with other parties, will result in those parties deriving a different identifier from the credential, which will then lead to an error during the verification process.

Verifying a public credential is shown in the following snippet:

<TsJsBlock>
  {VerifyCredential}
</TsJsBlock>

What the `verifyCredential` function does internally is the following:

1. Derive the credential identifier from the provided content and issuer information.
2. Fetch the actual credential from the blockchain, as shown in the [section above](#retrieve-a-credential-by-id), failing if the credential does not exist.
3. [OPTIONAL] Verify that the credential structure matches what the optionally-provided CType defines.
4. Verify that the rest of the fields in the provided credential (i.e., revocation status, identifier, creation block number) match the retrieved credential.

If all the tests above pass, the credential is considered valid! ✅

:::info How are public credentials stored on the blockchain?
Because public credentials need to be public and accessible by everyone, their full content needs to be somehow stored on the blockchain.
Nevertheless, the credential itself is not stored as part of the blockchain database.
Rather, the block number in which the extrinsic is submitted is stored inside the blockchain database, and serves as a "pointer" to the block containing the whole information, that clients (including the SDK) can use.
This represents a very good tradeoff between **security** - because the blockchain itself dictates what the creation block number is for any given public credential - and **storage efficiency** - since the full credential is stored off-chain, accessible via any KILT archive node or indexing service.
:::

[asset-did-concept]: /concepts/asset-dids

## Revoke (and remove) Public Credentials

import RevokeRemoveCredentialById from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/06_revoke_remove_credential_by_id.ts';
import RevokeCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/07_revoke_remove_credential_by_content.ts';
import UnrevokeCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/08_unrevoke_credential.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/09_reclaim_deposit.ts';

Depending on the use cases, some credentials, as with any other type of credential, might need to be temporarily or permanently revoked.

The KILT SDK provides different features depending on the needs of the use case.

## Revoke and Remove a Credential

<!-- TODO: Update link -->

As we have seen for public credential retrievalcredential-retrieval, a credential identifier is sufficient to perform most operations on public credentials.
This is true also for revocation and removal.

Some use cases might need a revoked credential to remain on chain and marked as revoked, while other use cases might combine together revocation and removal, removing a credential whenever it is to be marked as revoked, fulfilling the same goal of marking the credential as invalid.

In the former case, the deposit taken at the time when the credential is created is not returned, since the credential is still on chain.
In the latter case, all information about the information is cleared, hence the deposit is returned to its original payer.

<TsJsBlock>
  {RevokeRemoveCredentialById}
</TsJsBlock>

Because a credential identifier can also be calculated starting from the credential itself and the information about its issuer, it is also possible to revoke (and optionally remove) a credential given the credential itself.

<TsJsBlock>
  {RevokeCredential}
</TsJsBlock>

## Unrevoke a Credential

For public credentials that have been revoked but not removed from chain, it is possible to un-revoke them, making them valid again.

For instance, a driving license can be marked as "suspended" for three years, without being completely invalidated.
At the end of the suspension period, it is enabled again by being unrevoked.

As for revocation, both the credential ID and the whole credential can be used, since the SDK provides the primitives to always obtain the former from the latter, but here we show how the whole credential can be used to generate and submit an un-revocation transaction.

<TsJsBlock>
  {UnrevokeCredential}
</TsJsBlock>

## Reclaim the Deposit for a Credential

All the operations mentioned so far, always require the participation of the public credential issuer, who must use their assertion key to sign all operations before they are submitted to the KILT blockchain.

The only operation that can be submitted directly by someone else, as with other places in the SDK, is the transaction to remove a credential and obtain the initial deposit.

This is, technically speaking, a different operation compared to the one to remove a credential, albeit the two yield the same result: all traces of the credential are removed from the chain and the deposit is returned to its payer.
The difference between the two is about who is authorized to perform the operation: while credential removal requires a DID signature by the original credential creator (a.k.a. issuer), the deposit claiming operation requires a regular transaction signature by the KILT account that paid the original deposit, with no involvement of the original issuer.

<TsJsBlock>
  {ReclaimDeposit}
</TsJsBlock>