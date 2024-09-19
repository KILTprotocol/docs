---
id: attestation-creation
title: Attest a Claim (Issue a Credential)
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import CreateAttestation from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/claiming/04_create_attestation.ts';

Once an Issuer has received a to-be-attested `Credential` from a Claimer, they will typically verify the information in the claim.
If the claims correspond to truth, the Issuer will proceed by attesting the root hash of the credential on the KILT blockchain, timestamping the attestation operation.
A deposit is reserved from the balance of the KILT account submitting the creation transaction, which is returned if and when the attestation is removed from the chain.

:::info
<!-- An Issuer is required to have a full DID with an attestation key.
To see how to manage DIDs, please refer to the [DID section](../02_dids/03_full_did_update.md). -->
:::

<TsJsBlock>
  {CreateAttestation}
</TsJsBlock>