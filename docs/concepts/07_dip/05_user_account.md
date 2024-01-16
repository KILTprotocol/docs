---
id: dip-accounts
title: Enabling DIP for user accounts
---

For an account to take advantage of DIP it needs a decentralized identity (DID) and to create a transaction on the provider chain to generate a cross-chain identity commitment.

There are two options for an account to do this:

-   A Dapp developer builds the functionality into their app for a user using the DIP SDK.
-   The user uses the KILT DID utilities library themselves.

## Using the DIP SDK

Add the SDK as a dependency:

```shell
npm install @kiltprotocol/dip-sdk
```

Include the following imports in your code:

```typescript
import { generateDipAuthorizedTxForSibling } from '@kiltprotocol/dip-sdk'
```

The `generateDipAuthorizedTxForSibling` method returns a submittable extrinsic promise for the provided call which includes a complete DIP proof according to the parameters provided. You can then use this on a consumer chain as the `submitterAddress` parameter of which the provider chain is a sibling.

:::info What is a valid call

A valid call is a HEX-encoded call of the parent relaychain with the right key re-generated from the provided seedling information, i.e., either with the provided mnemonic or with the provided combination of base mnemonic and derivation path.

You can generate valid HEX-encoded calls at [PolkadotJS Apps](https://polkadot.js.org/apps/) from the `Developer > Extrinsics` menu.

Copy the value from `encoded call data` and pass it as a parameter.

:::

The command requires the following variables:

-   `call` The `Call` on the consumer chain that requires a DIP origin.
-   `consumerApi` The [`ApiPromise`](https://polkadot.js.org/docs/api/examples/promise/) instance for the consumer chain.
-   `didUri` The DID URI of the DIP subject performing the cross-chain operation.
-   `keyIds` The verification method IDs of the DID are revealed in the cross-chain operation.
-   `proofVersion` The version of the DIP proof to generate.
-   `providerApi` The [`ApiPromise`](https://polkadot.js.org/docs/api/examples/promise/) instance for the provider chain.
-   `relayApi` The [`ApiPromise`](https://polkadot.js.org/docs/api/examples/promise/) instance for the parent relay chain.
-   `signer` The signing callback to sign the cross-chain transaction.
-   `submitterAddress` The address of the transaction submitter on the consumer chain.
-   `keyRelationship` The [`VerificationKeyRelationship`](https://kiltprotocol.github.io/sdk-js/types/types_src.VerificationKeyRelationship.html) required for the DIP operation authorized on the relay chain.

And the following optional environment variables:

-   `blockHeight` The block number on the consumer chain to use for the DID signature. Uses the latest best block number, if not provided.
-   `genesisHash` The genesis hash of the consumer chain to use for the DID signature. Retrieved at runtime from the consumer chain If not provided.
-   `providerBlockHeight` The block number of the provider to use for the generation of the DIP proof. Uses the latest finalized block number if not provided.
-   `accountIdRuntimeType` The runtime type definition for an `AccountId` on the consumer chain. Uses the `AccountId` type if not provided.
-   `blockNumberRuntimeType` The runtime type definition for a `BlockNumber` on the consumer chain. Uses the `u64` type if not provided.
-   `identityDetailsRuntimeType` The runtime type definition for the `IdentityDetails` on the consumer chain. Uses the `Option<u128>` type, representing a simple nonce if not provided.
-   `includeWeb3Name` Flag indicating whether the generated DIP proof should include the web3name of the DID subject. If not provided, the web3name is not revealed.
-   `linkedAccounts` The list of linked accounts to revealed in the generated DIP proof. No account is revealed if not provided.

## Using the KILT DID utilities library

Clone the KILT DID utilities library and install its dependencies:

```shell
git clone https://github.com/KILTprotocol/kilt-did-utilities.git
yarn install
```

The command requires the following environment variables:

-   `RELAY_WS_ADDRESS`: The endpoint address of the relay chain.
-   `PROVIDER_WS_ADDRESS`: The endpoint address of the DIP provider chain.
-   `SUBMITTER_ADDRESS`: The address (encoded with the target chain network prefix `38`) authorized to submit the transaction on the target chain.
-   `ENCODED_CALL`: The HEX-encoded call to DID-sign.
-   `DID_URI`: The URI of the DID authorizing the operation
-   `VERIFICATION_METHOD`: The verification method of the DID key to use. Because the script is not able to automatically derive the DID key required to sign the call on the target chain, it has to be explicitly set with this variable. Example values are `authentication`, `assertionMethod`, and `capabilityDelegation`.

And the following optional environment variables:

-   `IDENTITY_DETAILS`: The runtime type definition of the identity details stored on the consumer chain, according to the DIP protocol. It defaults to `Option<u128>`, which represents a simple (optional) nonce value.
-   `ACCOUNT_ID`: The runtime type definition of account address on the consumer chain. It defaults to `AccountId32`, which is the default of most Substrate-based chains. Some chains might use `AccountId20`.
-   `INCLUDE_WEB3NAME` (default: `false`): Whether the web3name of the DID should be added to the DIP proof. Values can be anything that is truthy in JS terms.

    **The proof generation fails if this value is `true` but the DID does not have a web3name.**

-   `DIP_PROOF_VERSION`: The version of the DIP proof to generate and use as part of the extrinsic. It defaults to `0`.

Set the environment variables above and run the command:

```shell
yarn dip-sign:sibling
```

The script returns a submittable extrinsic promise for the provided valid call which includes a complete DIP proof according to the parameters provided. Copy the signature and block number generated that you need to submit via [PolkadotJS Apps](https://polkadot.js.org/apps/) as part of the DIP transaction submission process, using the account specified in `SUBMITTER_ADDRESS`.

:::info What is a valid call

A valid call is a HEX-encoded call of the parent relaychain with the right key re-generated from the provided seedling information, i.e., either with the provided mnemonic or with the provided combination of base mnemonic and derivation path.

You can generate valid HEX-encoded calls at [PolkadotJS Apps](https://polkadot.js.org/apps/) from the `Developer > Extrinsics` menu.

Copy the value from `encoded call data` and pass it as a parameter.

:::

-   `RELAY_WS_ADDRESS`: ws://127.0.0.1:30011
-   `PROVIDER_WS_ADDRESS`: wss://peregrine.kilt.io
-   `SUBMITTER_ADDRESS`: The address (encoded with the target chain network prefix `38`) authorized to submit the transaction on the target chain.
-   `ENCODED_CALL`: The HEX-encoded call to DID-sign.
-   `DID_URI`: did:kilt:4oHaW2GpZzPH2pspkgUjiJK577ndzW3KcbohdtexE7kQ94RY
-   `VERIFICATION_METHOD`: The verification method of the DID key to use. Because this script is not able to automatically derive the DID key required to sign the call on the target chain, it has to be explicitly set with this variable. Example values are `authentication`, `assertionMethod`, and `capabilityDelegation`.
