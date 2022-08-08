---
id: attestation-creation
title: Attest a Claim (Issue a Credential)
---
import CodeBlock from '@theme/CodeBlock';
import CreateAttestation from '!!raw-loader!@site/code_examples/core_features/claiming/03_create_attestation.ts';

Once an Attester has received a `RequestForAttestation` from a Claimer, they will typically verify the information in the claim.
If the claims correspond to truth, the Attester will proceed by attesting the root hash of the attestation request on the KILT blockchain, timestamping the attestation operation.

The result of the operation is a *credential*, which is the combination of the original attestation request and of the attestation details (e.g., the identity of the Attester).
Furthermore, a deposit is reserved from the balance of the KILT account submitting the creation transaction, which is returned if and when the attestation is removed from the chain.

:::info
An Attester is required to have a full DID with an attestation key.
To see how to manage DIDs, please refer to the [DID section](../01_dids/03_full_did_update.md).
:::

<CodeBlock className="language-ts">
  {CreateAttestation}
</CodeBlock>