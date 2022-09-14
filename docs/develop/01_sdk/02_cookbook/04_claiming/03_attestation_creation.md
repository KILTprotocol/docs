---
id: attestation-creation
title: Attest a Claim (Issue a Credential)
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import CreateAttestation from '!!raw-loader!@site/code_examples/core_features/claiming/03_create_attestation.ts';

Once an Attester has received a to-be-attested `Credential` from a Claimer, they will typically verify the information in it.
If the Claims correspond to truth, the Attester will proceed by attesting the root hash of the Credential on the KILT blockchain, timestamping the Attestation operation.
A deposit is reserved from the balance of the KILT account submitting the creation transaction, which is returned if and when the Attestation is removed from the chain.

:::info
An Attester is required to have a full DID with an attestation key.
To see how to manage DIDs, please refer to the [DID section](../01_dids/03_full_did_update.md).
:::

<TsJsBlock>
  {CreateAttestation}
</TsJsBlock>