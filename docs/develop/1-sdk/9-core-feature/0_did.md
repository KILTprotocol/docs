---
id: did
title: KILT DIDs
---
import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!@site/code-examples/core_features/did/1_did.ts';
import Example2 from '!!raw-loader!@site/code-examples/core_features/did/2_did.ts';
import Example3 from '!!raw-loader!@site/code-examples/core_features/did/3_did.ts';
import Example4 from '!!raw-loader!@site/code-examples/core_features/did/4_did.ts';
import Example5 from '!!raw-loader!@site/code-examples/core_features/did/5_did.ts';
import Example6 from '!!raw-loader!@site/code-examples/core_features/did/6_did.ts';
import Example7 from '!!raw-loader!@site/code-examples/core_features/did/7_did.ts';
import Example8 from '!!raw-loader!@site/code-examples/core_features/did/8_did.ts';
import Example9 from '!!raw-loader!@site/code-examples/core_features/did/9_did.ts';

For an explanation of KILT DIDs, please visit our [KILT DID page](../../../concepts/2-did.md).

### Creating a light DID

The creation of a light DID require a keystore instance that conforms to the [Keystore interface](https://github.com/KILTprotocol/sdk-js/blob/develop/packages/types/src/Keystore.ts). For the sake of ease of use, the SDK provides a [demo keystore](https://github.com/KILTprotocol/sdk-js/blob/develop/packages/did/src/DemoKeystore/DemoKeystore.ts) which can be used to generate key pairs that are kept in memory and disappear at the end of the program execution.

:::warning
Using the demo keystore in production is highly discouraged as all the keys are kept in the memory and easily retrievable by malicious actors.
:::

The following is an example of how to create a light DID after creating an instance of the demo keystore.

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

For cases in which also an encryption key and some service endpoints need to be added to a light DID:

<CodeBlock className="language-js">
  {Example2}
</CodeBlock>

### Creating and anchoring a full DID

The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key.

<CodeBlock className="language-js">
  {Example3}
</CodeBlock>

If additional keys or service endpoints are to be specified, then they can be batched into the builder before building the creation transaction.

<CodeBlock className="language-js">
  {Example4}
</CodeBlock>

## Migrating a light DID to a full DID

The **migration** of a DID means that a light, off-chain DID is anchored to the KILT blockchain, supporting all the features that full DIDs provide. In the current version (v1) of the KILT DID protocol, a light DID of the form `did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS` would become a full DID of the form `did:kilt:4nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS`. Note that the identifier of the two DIDs, apart from the initial `01` sequence of the light DID, are equal since both DIDs are derived from the same KILT account.

Once a light DID is migrated, all the credentials collected by the light DID can only be presented using the migrated on-chain DID. This is by design, as it is assumed that the user had valid reasons to migrate the DID on the chain, and as on-chain DIDs offer greater security guarantees, KILT will reject light DID signatures even in case the original claim in the attestation was generated with that off-chain DID.

The following code shows how to migrate a light DID to a full DID. Attested claim presentations and verifications remain unchanged as adding support for DID migration does not affect the public API that the SDK exposes.

<CodeBlock className="language-js">
  {Example8}
</CodeBlock>

## Batching multiple operations with a full DID

Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID subject.
For instance, a batch could include the creation of two different CTypes in the same operation. This would save the user one block time and one signature, as multiple extrinsics are batched and signed once, and they are submitted and executed in the same block. For more information, refer to the [official Substrate documentation](https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html).

An example of a batched creation of two CTypes using a `DidBatchBuilder` is provided below.

<CodeBlock className="language-js">
  {Example9}
</CodeBlock>
