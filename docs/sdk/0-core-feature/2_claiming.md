---
id: claiming
title: Claiming
---
import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/claiming_feature/1_claiming.ts';
import Example2 from '!!raw-loader!../../../code-examples/claiming_feature/2_claiming.ts';
import Example3 from '!!raw-loader!../../../code-examples/claiming_feature/3_claiming.ts';

There are three actors in the KILT workflow: Claimers, Attesters and Verifiers.

As KILT is an open system, any entity can make a claim about anything. Therefore, as in the real world, a claim only has value if the verifier trusts the attester.

In KILT, claims are based on claim types (CTypes). A claimer can either create a new CType or, when KILT is established and standard CTypes are available, may use an existing CType when creating their claim.

## CTypes

CTypes are data types specific to KILT that define the structure of a claim (e.g., the data model for your claim). They are based on JSON Schema, a standard used to annotate and validate JSON documents. The schema defines which properties exist and what their type should be, e.g., a string, a number, an object, etc.

When you create a CType from a schema, the SDK determines whether your CType aligns with the underlying schema. You can think of it like checking whether a cook (user) followed a certain recipe (schema) when preparing a meal (creating a CType).

The owner of the CType can store it on their desktop or on a regular web service. Only a hash of the CType is stored on the KILT blockchain, verifying its validity.

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

## Create your Claim from a CType

Once you have a CType, you only need to fill it with content to create your claim, i.e. supply the values for all fields of the CType.

<CodeBlock className="language-js">
  {Example2}
</CodeBlock>

## Request an Attestation

After creating your claim, you can request an attestation by creating another object called `RequestForAttestation`, which you can send to the attester of your choice via any messaging system.

We recommend encrypting this object before sending it by calling encrypt. Additionally, you can also compress the body of the message.

<CodeBlock className="language-js">
  {Example3}
</CodeBlock>
