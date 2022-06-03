---
id: attestation-removal
title: Revoke and Remove an Attestation
---
import CodeBlock from '@theme/CodeBlock';
import RevokeAttestation from '!!raw-loader!@site/code_examples/core_features/claiming/06_revoke_attestation.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/core_features/claiming/07_reclaim_attestation_deposit.ts';

If the conditions that make a credential cease to exist, an attester can revoke and optionally remove an attestation from the KILT blockchain.
This does not automatically delete the credential from the claimer's wallet, of course, but it makes it impossible for the claimer to use the credential from that point on.

Since the attestation creation reserved some KILT tokens from the submitter's balance, removing an attestation would return those funds into the payer's pockets.

<CodeBlock className="language-js">
  {RevokeAttestation}
</CodeBlock>

## Claim back an attestation deposit

Claiming back the deposit of an attestation is semantically equivalent to revoking and removing the attestation, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require any interaction with the attester:

<CodeBlock className="language-js">
  {ReclaimDeposit}
</CodeBlock>