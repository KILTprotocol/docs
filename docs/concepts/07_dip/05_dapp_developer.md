---
id: dapp-developer
title: Dapp developer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::version-label[DIP]

:::

The Decentralized Identity Provider (DIP) SDK helps Dapp developers build DIP functionality into their apps.

## Installation

Add the SDK as a dependency:

```bash npm2yarn
npm install @kiltprotocol/dip-sdk
```

Import the SDK into your code:

```typescript
import { * } from '@kiltprotocol/dip-sdk'
```

:::info

Read the auto-generated [API documentation](https://kiltprotocol.github.io/dip-sdk) for more details on the methods the SDK provides.

:::

This example application walks through the code you can find in the test for the DIP SDK.

Start by generating the base proof for the DIP using the `generateDipSiblingBaseProof` method and passing the desired configuration:

```typescript
const baseDipProof = await DipSdk.generateDipSiblingBaseProof(config)
```

The configuration takes the following parameters:

```typescript

```

If you need more than the proof, for instance, a DID signature, then you can generate it and attach it to the proof.

To do this use, the `generateDipSubmittableExtrinsic` method and pass the additional proof elements along with consumer chain specific components. Behind the scenes, the method uses the `dispatchAs` method to pass the extrinsic following the consumer's type registry:

<!-- TODO: The rest of the parameters? -->

```typescript
         const dipSubmittable = DipSdk.generateDipSubmittableExtrinsic({
            additionalProofElements:
              DipSdk.dipProof.extensions.timeBoundDidSignature.toChain(
                crossChainDidSignature,
              ),
            api: consumerApi,
            baseDipProof,
            call,
            didUri: did.uri,
          })
```
<!-- TODO: Correct chain? -->

The method returns a `SubmittableExtrinsic` that you can now submit to the consumer chain.


```typescript
await signAndSubmitTx(
            consumerApi,
            dipSubmittable,
            submitterKeypair,
          )
```

You need a way for the consumer and provider chains to agree on a common time that the proof was generated. To provide this, use the relaychain block number based on the block hash.

```typescript
        const blockHash = status.asInBlock
          const blockNumber = (await consumerApi.rpc.chain.getHeader(blockHash))
            .number
```
<!-- TODO: What was this? -->
<!-- In here, you have to specify what's the relay block number from which you want to generate this 
And then a Boolean flag, which you can say true or false if you want to review the WebSocket name or not.

If you don't specify it, it defaults to false. -->

Linked accounts let you specify which accounts you want to prove that you control when you make the cross-chain proof.

For all the accounts you want to link, use the `associateAccountToChainArgs` method, passing the account and DID to link.

```typescript
      const linkAccountTxs = await Promise.all(
        linkedAccounts.map(async (acc) => {
          const functionArgs = await Kilt.Did.associateAccountToChainArgs(
            acc.address,
            newFullDidUri,
            async (input) => acc.sign(input, { withType: true }),
          )
          return providerApi.tx.didLookup.associateAccount(...functionArgs)
        }),
      )
```

You can then batch all the linked account transactions and authorize them using the `authorizeTx` method.

```typescript
      const signedLinkedAccounts = await Kilt.Did.authorizeTx(
        newFullDidUri,
        providerApi.tx.utility.batchAll(linkAccountTxs),
        signCallback,
        newSubmitterKeypair.address as KiltAddress,
        { txCounter: new BN(4) },
      )
```


<!-- Given these parameters, the function gives you back the different components of the proof.

So you have the provider head proof, which is proof of the provider parachain header on the relay chain, the commitment proof, which proves what is the deep commitment for a specific subject, which is the DID URI.

You have the actual deep proof, which reveals parts of the daily document as specified by key IDs, proof version, whether to include the web rename and the linked account, and the proof version that the user specified.

So this is the object.

Technically, if any consumer for any reason only needs this information and nothing more, what you can do, you take the base deep proof and then you call. -->


Creating extensions
