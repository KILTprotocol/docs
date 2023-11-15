---
id: ctype
title: CType
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CtypeSchema from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/attester/ctypeSchema.ts';
import GenerateCtype from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/attester/generateCtype.ts';

<!-- Taken from https://github.com/webpack-contrib/raw-loader/issues/91#issuecomment-648830498 -->
import Ctype from '@site/scripts/out/ctype.json.raw!=!raw-loader!@site/scripts/out/ctype.json';

A claim type (CType) is a KILT-specific term, but the concept is simple:
A CType is a JSON schema that defines the structure of a claim, and you can think of it as the data model for your claim.

:::info CType

A CType ensures that a credential contains all required attributes, e.g., a driver's license has to contain a name, date of birth, and the vehicle types that the claimer can drive.
The CType is important since a Verifier requests credentials for a specific CType. For example, the traffic police want to see your driver's license, not your gym membership.

To learn more about CTypes, read the [in-depth CType documentation](../../../concepts/05_credentials/02_ctypes.md).
You can also [read through existing CTypes in the CType-index](https://github.com/KILTprotocol/ctype-index).
:::

Before the <span className="label-role attester">Attester</span> can attest credentials, they must decide which CType they support.
For example, a traffic authority only issues driver's licenses (A CType for driver's license), not trade register excerpts.

Since CTypes enable interoperability between Attesters, using existing CTypes rather than creating new ones is highly recommended.
However, this workshop creates a new CType to show the process.

Creating CTypes requires an account and a full DID.
Make sure your account holds KILT tokens so that you can pay the fees for creating a CType.

For example, a basic CType for a driver's license could look like this:

<CodeBlock className="language-json">
  {Ctype}
</CodeBlock>

The CType has the following attributes:

| Key          | Value                                                                                                                                                               |
| -------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$id`        | The KILT id of this CType. It's the most important property as it represents the **digital footprint** of the CType.                                               |
| `$schema`    | A reference to the meta-schema describing what a CType may look like. There are two versions.                                                              |
| `title`      | The title of the CType.                                                                                                                                             |
| `properties` | The properties that a claim conforming to this CType may have.                                                                                                      |
| `type` | Type is an object for all CTypes.                                                                                                  |
| `additionalProperties` | The default is false. This restricts unwanted properties in a claim.                                                                                                      |

A CType is stored on the KILT blockchain.

<!-- TODO: What is a Credential Registry's REST API? -->
In a real-world situation, a user would retrieve an existing CType from the chain or a repository of CTypes.
For example, via a Credential Registry's REST API.

In this tutorial, the <span className="label-role attester">Attester</span> creates and attempts to store a CType on the KILT test blockchain.

## Create CType

Copy the following that defines a `CType` with a given schema:

<TsJsBlock fileName="attester/ctypeSchema">
  {CtypeSchema}
</TsJsBlock>

## Get CType

Copy the following to create a `CType` on the chain:

<TsJsBlock fileName="attester/generateCtype">
  {GenerateCtype}
</TsJsBlock>

<!-- TODO: Already exists and code hangs -->
The `ensureStoredCType` function takes the Attester's account, DID, and a callback to sign the function and checks if the CType is already on chain.
It uses the `verifyStored` method to pass the CType to the KILT blockchain and make the check.
If it does not exist, it stores it on-chain, using the `toChain` method to encode the CType into a unique hash and the `add` method to create a new CType from the given unique hash and associate it with the Attester.
The function then uses the `authorizeTx` to authorize the transaction and `signAndSubmitTx` to sign and submit the transaction containing the new CType.

:::warning

Remember, an account must have the required amount of tokens to pay the transaction fee and deposit.

:::

## Run

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Run the `attester/generateCtype.ts` file.

  ```bash
  yarn ts-node attester/generateCtype.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  Run the `attester/generateCtype.js` file.

  ```bash
  node attester/generateCtype.js
  ```

  </TabItem>
</Tabs>

Before you can attest Credentials, you need a <span className="label-role claimer">Claimer</span> to request it
