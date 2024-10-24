---
id: issue_credential
title: Issue a Credential
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CtypeSchema from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/issuer/ctypeSchema.ts';
import GenerateCtype from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/issuer/generateCtype.ts';
import Ctype from '@site/scripts/out/ctype.json.raw!=!raw-loader!@site/scripts/out/ctype.json';

Before a holder can issue a presentation, the issuer needs to a issue a credential. To do this, you need a CType.

A claim type (CType) is a KILT-specific term, but the concept is simple.
A CType is a JSON schema that defines the structure of a claim, and you can think of it as the data model for your claim.

:::info CType

A CType ensures that a credential contains all required attributes, e.g., a driver's license has to contain a name, date of birth, and the visas the holder has.
The CType is important since a Verifier requests credentials for a specific CType.
For example, the border police want to see your passport, not your gym membership.

To learn more about CTypes, read the [in-depth CType documentation](/concepts/credentials/ctypes).
You can also [read through existing CTypes in the CType-index](https://github.com/KILTprotocol/ctype-index).
:::

Before the <span className="label-role issuer">Issuer</span> can attest credentials, they must decide which CType they support.

For example, a traffic authority only issues driver's licenses (A CType for driver's license), not a university diploma.

A CType has the following attributes:

| Key          | Value                                                                                                                                                               |
| -------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$id`        | The KILT id of this CType. It's the most important property as it represents the **digital footprint** of the CType.                                               |
| `$schema`    | A reference to the meta-schema describing what a CType may look like. There are two versions.                                                              |
| `title`      | The title of the CType.                                                                                                                                             |
| `properties` | The properties that a claim conforming to this CType may have.                                                                                                      |
| `type` | Type is an object for all CTypes.                                                                                                  |
| `additionalProperties` | The default is false. This restricts unwanted properties in a claim.                                                                                                      |

## Fetch CType

The [CTypeHUB](https://ctypehub.galaniprojects.de) is a repository of useful CTypes, but there are others. This tutorial uses a CType from [the test CTypeHUB](https://test.ctypehub.galaniprojects.de). You can also create your own CTypes.

Fetch a CType using the `fetchFromChain` method, passing the `$id` of the CType you want to fetch.

## Create and issue credential

Next the Issuer creates and issues a credential based on the CType using the `createCredential` method, setting their DID as the issuer and the fields and values to add into the credential.

Finally, issue the credential using the `issue` method passing the newly created credential.

<TsJsBlock>
  {issueCredential}
</TsJsBlock>

<TsJsBlock>

```typescript
export async function runAll() {
  …
  const credential = await issueCredential(
    issuerDid.didDocument,
    issuerDid.signers,
    submitterAccount
  )
}
```

</TsJsBlock>

## Run code

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node ./index.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node ./index.js
  ```

  </TabItem>
</Tabs>

Before you can verify Credentials, you need a <span className="label-role holder">Holder</span> to request it.