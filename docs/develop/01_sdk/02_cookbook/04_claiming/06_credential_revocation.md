---
id: attestation-removal
title: Revoke a Credential
---
import CodeBlock from '@theme/CodeBlock';
import RevokeAttestation from '!!raw-loader!@site/code_examples/core_features/claiming/06_revoke_attestation.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/core_features/claiming/07_reclaim_attestation_deposit.ts';

If the conditions that make a Credential valid cease to exist, an Attester can revoke and optionally remove its Attestation from the KILT blockchain.
This does not automatically delete the Credential from the Claimer's wallet, of course, but it makes it impossible for the Claimer to use the Credential in the future.

Since the Attestation creation reserved some KILT tokens from the submitter's balance, removing an Attestation would return those funds into the payer's pockets.

<CodeBlock className="language-ts">
  {RevokeAttestation}
</CodeBlock>

## Claim Back an Attestation Deposit

Claiming back the deposit of an Attestation is semantically equivalent to revoking and removing the Attestation, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require the Attester's signature:

<CodeBlock className="language-ts">
  {ReclaimDeposit}
</CodeBlock>