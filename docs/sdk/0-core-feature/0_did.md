---
id: did
title: Kilt DIDs
---
import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/core_features/did/1_did.ts';
import Example2 from '!!raw-loader!../../../code-examples/core_features/did/2_did.ts';
import Example3 from '!!raw-loader!../../../code-examples/core_features/did/3_did.ts';
import Example4 from '!!raw-loader!../../../code-examples/core_features/did/4_did.ts';
import Example5 from '!!raw-loader!../../../code-examples/core_features/did/5_did.ts';
import Example6 from '!!raw-loader!../../../code-examples/core_features/did/6_did.ts';
import Example7 from '!!raw-loader!../../../code-examples/core_features/did/7_did.ts';
import Example8 from '!!raw-loader!../../../code-examples/core_features/did/8_did.ts';
import Example9 from '!!raw-loader!../../../code-examples/core_features/did/9_did.ts';

A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user. A DID can be thought of as a container of different keys that are all under the control of the same DID subject (see the [DID Core spec](https://www.w3.org/TR/did-core/) for more information).

The simplest type of KILT DID is a **light DID**, called this way because it can be generated and used offline without requiring any Internet connection (hence any connection with the KILT blockchain at all). Although very cheap, light DIDs are not very flexible and are suitable for lower-security use cases. In more complex use cases, a **full DID** is more indicated, which allows the subject to store several different keys (and key types) and replace them over time, with the help of the KILT blockchain.

## Light DIDs

An example of a light KILT DID is the following:

```
did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS
```

Beyond the standard prefix `did:kilt:`, the `light:` component indicates that this DID is a light DID, hence it can be resolved and utilised offline.

Light DIDs optionally support the specification of an **encryption key** (of one of the supported key types) and some service endpoints, which are both serialised, encoded and appended at the end of the DID, like the following:

```
did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS:z1ERkVVjngcarMbJn6YssB1PYULescQneSSEfCTJwYbzT2aK8fzH5WPsp3G4UVuLWWfsTayketnFV74YCnyboHBUvqEs6J8jdYY5dK2XeqCCs653Sf9XVH4RN2WvPrDFZXzzKf3KigvcaE7kkaEwLZvcas3U1M2ZDZCajDG71winwaRNrDtcqkJL9V6Q5yKNWRacw7hJ58d
```

### Creating a light DID

The creation of a light DID requires a keystore instance that conforms to the [Keystore interface](https://github.com/KILTprotocol/sdk-js/blob/develop/packages/types/src/Keystore.ts). For the sake of ease of use, the SDK provides a [demo keystore](https://github.com/KILTprotocol/sdk-js/blob/develop/packages/did/src/DemoKeystore/DemoKeystore.ts) which can be used to generate key pairs that are kept in memory and disappear at the end of the program execution.

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

## Full DIDs

As mentioned above, the creation of a full DID requires interaction with the KILT blockchain. Therefore, it is necessary for the DID creation operation to be submitted by a KILT address with enough funds to pay the transaction fees and the required deposit.
While transaction fees cannot be refunded, the deposit is returned when the DID is deleted from the blockchain: this is to incentivise users to clean the data from the blockchain once such data is not needed anymore.

By design, DID signatures and Substrate signatures are decoupled, meaning that the encoded and signed DID creation operation can then be signed and submitted by a different KILT account than the DID subject. This opens the path for a wider range of use cases in which, for instance, a service provider might be willing to offer a DID-as-a-Service option for its customers.

An example of a full DID is the following:

```
did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e
```

Here, there is no `light:` component, which indicates that the DID is a full DID and that the keys associated with it must not be derived from the DID identifier but must be retrieved from the KILT blockchain.

Beyond an authentication key, an encryption key, and service endpoints, a full DID also supports an **attestation key**, which must be used to write CTypes and attestations on the blockchain, and a **delegation key**, which must be used to write delegations on the blockchain.

### Creating and anchoring a full DID

The following is an example of how to create and write on blockchain a full DID that specifies only an authentication key, by using the `FullDidCreationBuilder` class.

<CodeBlock className="language-js">
  {Example3}
</CodeBlock>

If additional keys or service endpoints are to be specified, then they can be batched into the builder before building the creation transaction.

<CodeBlock className="language-js">
  {Example4}
</CodeBlock>

## Updating a full DID

Once anchored on the KILT blockchain, a full DID can be updated. For instance, the following snippet shows how to use the `FullDidUpdateBuilder` to update the authentication key to a new ed25519 key and remove a service endpoint for a full DID.

<CodeBlock className="language-js">
  {Example5}
</CodeBlock>

## Deleting a full DID

Once not needed anymore, it is recommended to remove the DID details from the KILT blockchain. The following snippet shows how to do it:

<CodeBlock className="language-js">
  {Example6}
</CodeBlock>

:::warning
Please note that once deleted, a full DID becomes unusable and cannot be created anymore, meaning that all credentials obtained with that DID must be re-obtained with a different one, if needed.
:::

### Claiming back a DID deposit

As the creation of a full DID requires a deposit that will lock from the balance of the creation transaction submitter (which, once again, might differ from the DID subject), the deposit owner is allowed to claim the deposit back by deleting the DID associated with its deposit. This is the reason why full DID creation operations require the submitter to be included and signed by the DID subject: to make sure that only the DID subject themselves and the authorised account are ever able to delete the DID information from the chain.

Claiming back the deposit of a DID is semantically equivalent to deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require any interaction with the DID subject:

<CodeBlock className="language-js">
  {Example7}
</CodeBlock>

## Migrating a light DID to a full DID

The **migration** of a DID means that a light, off-chain DID is anchored to the KILT blockchain, supporting all the features that full DIDs provide. In the current version (v1) of the KILT DID protocol, a light DID of the form `did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS` would become a full DID of the form `did:kilt:4nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS`. Note that the identifier of the two DIDs, apart from the initial `01` sequence of the light DID, are equal since both DIDs are derived from the same KILT account.

Once a light DID is migrated, all the credentials collected by the light DID can only be presented using the migrated on-chain DID. This is by design, as it is assumed that the user had valid reasons to migrate the DID on chain, and as on-chain DIDs offer greater security guarantees, KILT will reject light DID signatures even in case the original claim in the attestation was generated with that off-chain DID.

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