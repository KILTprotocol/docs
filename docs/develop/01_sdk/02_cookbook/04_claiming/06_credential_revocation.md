---
id: attestation-removal
title: Revoke a Credential
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import RevokeCredentialTs from '!!raw-loader!@site/code_examples/core_features/claiming/06_revoke_credential.ts';
import RevokeCredentialJs from '!!raw-loader!@site/code_examples/core_features/_js/claiming/06_revoke_credential.js';
import ReclaimDepositTs from '!!raw-loader!@site/code_examples/core_features/claiming/07_reclaim_attestation_deposit.ts';
import ReclaimDepositJs from '!!raw-loader!@site/code_examples/core_features/_js/claiming/07_reclaim_attestation_deposit.js';

If the conditions that make a Credential valid cease to exist, an Attester can revoke and optionally remove its Attestation from the KILT blockchain.
This does not automatically delete the Credential from the Claimer's wallet, of course, but it makes it impossible for the Claimer to use the Credential in the future.

Since the Attestation creation reserved some KILT tokens from the submitter's balance, removing an Attestation would return those funds into the payer's pockets.

<TsJsBlock tsSnippet={RevokeCredentialTs} jsSnippet={RevokeCredentialJs} />

## Claim Back an Attestation Deposit

Claiming back the deposit of an Attestation is semantically equivalent to revoking and removing the Attestation, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require the Attester's signature:

<TsJsBlock tsSnippet={ReclaimDepositTs} jsSnippet={ReclaimDepositJs} />