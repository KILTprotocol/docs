---
id: public-credential-retrieval
title: Retrieve Public Credentials
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import RetrieveCredentialbyId from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/public_credentials/03_retrieve_credential_by_id.ts';
import RetrieveCredentialsbySubject from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/public_credentials/04_retrieve_credentials_by_subject.ts';
import VerifyCredential from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/public_credentials/05_verify_credential.ts';

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

This case is also supported by the KILT SDK, and relies on an important feature of public credentials: **the identifier (ID) of a public credential is generated from its content and from the KILT DID of its attester**.
This means that even a minimal change in the content of a public credential object before being shared with other parties, will result in those parties deriving a different identifier from the credential, which will then lead to an error during the verification process.

Verifying a public credential is shown in the following snippet:

<TsJsBlock>
  {VerifyCredential}
</TsJsBlock>

What the `verifyCredential` function does internally is the following:

1. Derive the credential identifier from the provided content and attester information.
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