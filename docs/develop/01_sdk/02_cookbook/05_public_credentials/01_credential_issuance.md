---
id: public-credential-issuance
title: Credential Issuance
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import CreateCType from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/01_create_ctype.ts';
import CreateCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/02_create_credential.ts';
import IssueCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/public_credentials/03_issue_credential.ts';

As for traditional KILT credentials, public credentials also have their structure defined by a [CType][ctypes-link], although CTypes that can be used to represent information about assets would probably differ from the ones used to represent information about people.

As mentioned in the section about credentials, the creation of a CType in KILT involves two steps: the definition of a CType and the anchoring of its hash on the KILT blockchain.

:::info
The creator of a CType is required to have a full DID with an attestation key.
To see how to manage DIDs, please refer to the [DID section](../01_dids/03_full_did_update.md).
:::

The following snippets show how to create a CType:

<TsJsBlock>
  {CreateCType}
</TsJsBlock>

## Create and Issue the Credential 

With the new CType written to the chain, the new public credential object can be created with the actual content, and then written to the chain for the rest of the KILT users (and beyond) to consume.

Creating a public credential is as simple as creating an object that conforms to the required structure of the CType:

<TsJsBlock>
  {CreateCredential}
</TsJsBlock>

:::note
The creation of the credential object does not require any interaction with the blockchain per se.
This also means that, until the object is written to the blockchain (see below), it cannot be used/retrieved/verified by anyone else, so it is, by all means, not existing.
:::

Once the credential object is created, it must be written to the blockchain for other people to be able to use it.

<TsJsBlock>
  {IssueCredential}
</TsJsBlock>

:::info Credential has to be CBOR-encoded!
Given a public credential object, the SDK internally CBOR-encodes it before firing the extrinsic to the blockchain!
This is to save space on credentials that actually benefit from CBOR compression (e.g., if they contain a lot of binary information).
Hence, creating public credentials without the SDK requires the credential to be CBOR-encoded!
:::

[ctypes-link]: ../../../../concepts/05_credentials/02_ctypes.md