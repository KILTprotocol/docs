---
id: attestation-removal
title: Revoke a Credential
---
import CodeBlock from '@theme/CodeBlock';
import RevokeAttestation from '!!raw-loader!@site/code_examples/core_features/claiming/06_revoke_attestation.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/core_features/claiming/07_reclaim_attestation_deposit.ts';

If the conditions that make a credential valid cease to exist, an Attester can revoke and optionally remove their attestation from the KILT blockchain.
This does not automatically delete the credential from the Claimer's wallet, of course, but it makes it impossible for the Claimer to use the credential in the future.

Since the attestation creation reserved some KILT tokens from the submitter's balance, removing an attestation would return those funds into the payer's pockets.

<CodeBlock className="language-ts">
  {RevokeAttestation}
</CodeBlock>

## Claim Back an Attestation Deposit

Claiming back the deposit of an attestation is semantically equivalent to revoking and removing the attestation, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require the Attester's signature:

<CodeBlock className="language-ts">
  {ReclaimDeposit}
</CodeBlock>