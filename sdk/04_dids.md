---
id: dids
title: DIDIDIDID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import GenerateKeys from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/00_generate_did_keys.ts';

import FullDidSimple from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/04_full_did_simple.ts';
import FullDidComplete from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/05_full_did_complete.ts';

import FullDidUpdate from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/07_full_did_update.ts';

import DidQuery from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/06_did_query.ts';

import FullDidDelete from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/11_full_did_delete.ts';
import FullDidDepositReclaim from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/13_full_did_deposit_reclaim.ts';

import FullDidSignTx from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/09_full_did_tx.ts';
import FullDidBatch from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/08_full_did_batch.ts';

import DidSignature from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/10_did_signature.ts';

import Claim from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/web3names/01_claim.ts';

import QueryNameCredentials from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/web3names/03_query_name_credentials.ts';

import Release from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/web3names/04_release.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/web3names/05_reclaim_deposit.ts';

import QueryDid from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/web3names/02_query_did_name.ts';

<!-- TODO: Overview -->
<!-- TODO: Correct paths -->
## Create


### Creating new accounts from a seed

This approach allows you to generate various key pairs for authentication, key agreement, assertion methods, and capability delegation from one mnemonic seed phrase.

### Derivation paths

The code example below derives different types of keys from a single account using derivation paths.

A derivation path is a way to derive a new key from a parent key and is a sequence of indices separated by a delimiter.
The most common delimiter is `/` (forward slash).

KILT uses the same derivation paths as the underlying Polkadot libraries, using hard key derivation.

#### Hard derivation

A hard derivation path does not allow someone to do either of these.
Even if you know a derived private key, it's not possible to figure out the private key of the root address, and it's impossible to prove that the first account is linked with the second.

A `//` (double slash) indicates a hard derivation path.
For example, `deal rice sunny now boss cluster team use wreck electric wing deliver//0` is a hard derivation path.



To create another account using the same seed, change the number at the end of the string. For example, `/1`, `/2`, and `/3` create different derived accounts.

Using derivation paths simplifies key management, ensuring that a single mnemonic seed serves as the basis for multiple keys associated with a DID.
This method improves efficiency while maintaining security.
However, it's essential to handle and store private keys securely to prevent unauthorized access and ensure the overall integrity and privacy of the decentralized identity system.

Below is an example code snippet illustrating the key pair generation for a KILT DID:

<TsJsBlock>
  {GenerateKeys}
</TsJsBlock>

:::info
This example doesn't show how to store the keys.
It is recommended to store the keys in a secure manner, e.g. only storing the private keys encrypted on disk.
The mnemonic seed phrase can be used to regenerate the keys, so it is recommended to also store the mnemonic in a secure manner and create a backup of it.
:::

## Create a Full DID

:::info Creating a light DID
Older versions of the KILT SDK allowed you to also create "light DIDs", which are usable offline with no connection with the KILT blockchain. This new SDK documentation focuses on creating and working with full DIDs, which are more flexible and secure. If you need to create a light DID, refer to the [old SDK documentation](#)
:::

The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key.

<TsJsBlock>
  {FullDidSimple}
</TsJsBlock>

If additional keys or services are to be specified, they can be passed as parameters to the creation transaction.

<TsJsBlock>
  {FullDidComplete}
</TsJsBlock>

## Update

### Update a Full DID keys and service endpoints

Once anchored to the KILT blockchain, a full DID can be updated.
For instance, the following snippet shows how to use the `authorizeBatch` function to update the authentication key, remove an old service _and_ add a new one for a full DID in the same transaction.

<TsJsBlock>
  {FullDidUpdate}
</TsJsBlock>

## Delete


Once a DID is no longer needed, it is recommended to deactivate it by removing it from the KILT blockchain.
The following snippet shows how to do it:

<TsJsBlock>
  {FullDidDelete}
</TsJsBlock>

:::warning
Please note that once deleted, a full DID becomes unusable and cannot be re-created anymore.
This means that all credentials obtained with that DID are no longer valid and must be obtained with a different DID if needed.
:::

### Claim back a DID deposit

Claiming back the deposit of a DID is semantically equivalent to deactivating and deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require a signature by the DID subject:

<TsJsBlock>
  {FullDidDepositReclaim}
</TsJsBlock>


## Query

Querying the state of a DID is called **resolution**.
The entity that queries the DID Document for a given DID, i.e., resolves it, is called a **resolver**.

The KILT SDK provides such a resolver to use with KILT DIDs, as the snippet below shows:

<TsJsBlock>
  {DidQuery}
</TsJsBlock>

:::note
The DID resolver can resolve both light and full DIDs.
For a more in-depth explanation about the KILT DID method and resolution, refer to our [specification](https://github.com/KILTprotocol/spec-kilt-did).
:::



## Generate DID keys

<!-- TODO: Changed completely -->

Creating a Decentralized Identifier (DID) on the KILT network involves generating keying material for authentication and encryption.
This guide shows how to create a set of key pairs suitable for generating a KILT DID.

Before proceeding, it's important to note that this example assumes the usage of the `@kiltprotocol/sdk-js` library along with the `@polkadot/util-crypto` library for cryptographic operations.

Additionally, it's important to securely store keys and the mnemonic seed phrase.
For production use, ensure that private keys are encrypted and stored safely, while also creating a backup of the mnemonic seed phrase.









## Build DID Extrinsics

DID keys can be used to sign extrinsic.
But not every extrinsic can be signed using a DID.
The Spiritnet blockchain offers two types of extrinsics.

The first type can only be called using an account.
We call them account extrinsic.
The second callable type are DID extrinsics.
They must be used for all KILT features like creating CTypes, issue attestations, etc.
Since every extrinsic requires fees to be paid, this type needs to be wrapped inside an account extrinsic.
Accounts hold balances and can therefore pay fees and provide deposits.

This document describes how to sign the DID extrinsics.
The KILT SDK provides two functions for signing DID extrinsics.
The first function signs a single extrinsic while the second one batches multiple extrinsics together.

## Single extrinsics

To sign a single extrinsic, you need to provide:

-   the DID that wants to sign the extrinsic (also called _origin_ of the extrinsic)
      <!-- * refer to the [full did creation guide](02_full_did_creation.md) to learn how to create a DID -->
    <!-- * [a `SignCallback` that signs the extrinsic](../07_signCallback.md) -->
-   the extrinsic that should be signed and submitted
-   and the address of the account that pays for the fees.

<TsJsBlock>
  {FullDidSignTx}
</TsJsBlock>

## Batch multiple extrinsics

Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID.
For instance, a batch could create multiple services with a single submission to the blockchain.
This would save the user the time of generating one additional signature, as multiple extrinsics are batched and signed at once.
The extrinsics are also submitted and executed in the same block.
For more information, see the [official Substrate documentation](https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html).

An example of a batch using the `authorizeBatch` is provided below.

<TsJsBlock>
  {FullDidBatch}
</TsJsBlock>

DIDs have different keys that posses different capabilities.
Each key can only be used to authorize a specific subset of extrinsics.
If extrinsics are batched together that require different DID keys, the `authorizeBatch` function will call the sign callback multiple times.

## Generate and Verify a DID Signature

In addition to being used to authorize chain operations, both light and full DIDs have off-chain applications.

One such applications is generating digital signatures.
As a DID can have multiple keys, in addition to the signature data itself, a DID signature contains information about the signer's DID and key used, so that Verifiers have all the information needed to resolve the DID from the KILT blockchain and use the right key to verify the generated signature.

The snippet below shows how to generate and verify a DID signature using the KILT SDK.

<TsJsBlock>
  {DidSignature}
</TsJsBlock>

:::note
Notice that the snippet above takes a `DidDocument` instance to generate the signature.
A `DidDocument` can represent either a light or a full DID.
This means that both light and full DIDs can generate signatures, and the KILT SDK implements the right verification logic depending on whether the signer is a light or a full DID.
:::

## web3names

### Claim a web3name

A web3name can be claimed if it currently has no owner, using the following snippet as reference.

<TsJsBlock>
  {Claim}
</TsJsBlock>

The claiming process requires the reservation of a deposit that is freed upon web3name release.

Once claimed, the web3name will start appearing whenever the DID of its owner is resolved, for instance via the [Universal Resolver](https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g).
For more information about web3names and DIDs, see the official [KILT DID Specification](https://github.com/KILTprotocol/spec-kilt-did/blob/main/README.md).

### Query public credentials for a web3name

web3names are linked to KILT DIDs, and KILT DIDs can define services to expose additional service/information.
One of the possible endpoint types is the [`KiltPublishedCredentialCollectionV1`][kilt-published-credential-collection-v1-type] type.
The type defines the structure to make KILT credentials public and accessible to anyone.

Because of the relationship between web3names and DIDs, it is possible, given a certain web3name, to retrieve all public credentials that the DID subject identified by that web3name has made available.
Below is a code snippet showing how to do that using the KILT SDK, and how to perform the needed security checks/validation as recommended by the [specification][kilt-published-credential-collection-v1-type].

<TsJsBlock>
  {QueryNameCredentials}
</TsJsBlock>

[kilt-published-credential-collection-v1-type]: https://github.com/KILTprotocol/spec-KiltPublishedCredentialCollectionV1/blob/main/README.md

### Release a web3name

If a web3name is no longer needed, either the DID owner or the deposit payer can release it, with deposit being released and returned to the original payer.

### Releasing a Web3name by the DID Owner

In the case of the DID owner willing to release the web3name, the following snippet provides a reference implementation on how to achieve that.

<TsJsBlock>
  {Release}
</TsJsBlock>

In the code above, the `releaseWeb3Name` function takes the following parameters:

-   **did**: The DID URI of the owner.
-   **submitterAccount**: The keyring pair of the submitter.
<!-- * **signCallback**: The sign extrinsic callback function. This function is used to sign the extrinsic, read more that in [the SignCallback section](../07_signCallback.md). -->

The function `releaseWeb3Name` uses the KILT SDK to create a _web3name release transaction_ using `api.tx.web3Names.releaseByOwner`.
It then authorizes the transaction using the `Kilt.Did.authorizeTx` method and submits the authorized transaction to the blockchain using `Kilt.Blockchain.signAndSubmitTx`.
This process ensures that the release transaction is signed by the DID owner.

### Reclaiming a Web3name Deposit by the Deposit Payer

If the web3name is being released by the deposit payer, the signature of the DID owner is not required; a regular signed extrinsic can be submitted to the KILT blockchain, as shown below.

<TsJsBlock>
  {ReclaimDeposit}
</TsJsBlock>

In the code above, the `reclaimWeb3NameDeposit` function takes the following parameters:

-   **submitterAddress**: The keyring pair of the submitter.
-   **web3Name**: The web3name for which the deposit is to be reclaimed.

The function creates a web3name deposit reclaim transaction using `api.tx.web3Names.reclaimDeposit` and submits the signed transaction to the blockchain using `Kilt.Blockchain.signAndSubmitTx`.
Since the web3name is being released by the deposit payer, the signature of the DID owner is not required.

By using these code examples, you can easily release or reclaim the deposit of a web3name, depending on the scenario and the role of the entity initiating the release.

### Resolve a web3name

<!-- A web3name can be resolved in a similar manner to [how a DID is resolved](../02_dids/04_did_query.md). -->

Resolving the web3name will provide the same information as resolving a DID does.

To query and retrieve the DID document associated with a web3name, you can use the following code example:

<TsJsBlock>
  {QueryDid}
</TsJsBlock>

In the code example above, the `queryDidDocument` function takes a web3Name parameter, which represents the web3name to be resolved.
It internally uses the `api.call.did.queryByWeb3Name` method to query the information of the provided web3name from the blockchain.

The function then decodes the result using `Kilt.Did.linkedInfoFromChain` to extract the associated DID document and any other linked blockchain accounts. Finally, it returns the resolved DID document.
