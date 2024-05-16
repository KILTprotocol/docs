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

To do this use, the `generateDipSubmittableExtrinsic` method and pass the additioanl proof elements along with consumer chain specific components, and compiles the `dispatchAs` extrinsic following the consumer's type registry. :



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