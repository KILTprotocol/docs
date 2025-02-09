---
id: dip-accounts-kilt
title: Enabling DIP for user accounts on the KILT blockchain
---

:::version-label[DIP]

:::

For an account to take advantage of DIP it needs a decentralized identity (DID) and to create a transaction on the provider chain to generate a cross-chain identity commitment.

For an account to be able to do this, a Dapp developer needs to build the functionality into their app for a user using the DIP SDK.

The implementation of this transaction is per-chain and this documentation provides an example of how to do this on the KILT blockchain.

## Using the KILT DIP SDK

Add the SDK as a dependency:

```bash npm2yarn
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
-   `keyRelationship` The `VerificationKeyRelationship` required for the DIP operation authorized on the relay chain.

And the following optional environment variables:

-   `blockHeight` The block number on the consumer chain to use for the DID signature. Uses the latest best block number, if not provided.
-   `genesisHash` The genesis hash of the consumer chain to use for the DID signature. Retrieved at runtime from the consumer chain If not provided.
-   `providerBlockHeight` The block number of the provider to use for the generation of the DIP proof. Uses the latest finalized block number if not provided.
-   `accountIdRuntimeType` The runtime type definition for an `AccountId` on the consumer chain. Uses the `AccountId` type if not provided.
-   `blockNumberRuntimeType` The runtime type definition for a `BlockNumber` on the consumer chain. Uses the `u64` type if not provided.
-   `identityDetailsRuntimeType` The runtime type definition for the `IdentityDetails` on the consumer chain. Uses the `Option<u128>` type, representing a simple nonce if not provided.
-   `includeWeb3Name` Flag indicating whether the generated DIP proof should include the web3name of the DID subject. If not provided, the web3name is not revealed.
-   `linkedAccounts` The list of linked accounts to revealed in the generated DIP proof. No account is revealed if not provided.