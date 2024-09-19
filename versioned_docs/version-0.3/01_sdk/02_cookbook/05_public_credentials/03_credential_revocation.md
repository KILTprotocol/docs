---
id: public-credential-revocation
title: Revoke (and remove) Public Credentials
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import RevokeRemoveCredentialById from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/public_credentials/06_revoke_remove_credential_by_id.ts';
import RevokeCredential from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/public_credentials/07_revoke_remove_credential_by_content.ts';
import UnrevokeCredential from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/public_credentials/08_unrevoke_credential.ts';
import ReclaimDeposit from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/public_credentials/09_reclaim_deposit.ts';

Depending on the use cases, some credentials, as with any other type of credential, might need to be temporarily or permanently revoked.

The KILT SDK provides different features depending on the needs of the use case.

## Revoke and Remove a Credential

As we have seen for [public credential retrieval][credential-retrieval], a credential identifier is sufficient to perform most operations on public credentials.
This is true also for revocation and removal.

Some use cases might need a revoked credential to remain on chain and marked as revoked, while other use cases might combine together revocation and removal, removing a credential whenever it is to be marked as revoked, fulfilling the same goal of marking the credential as invalid.

In the former case, the deposit taken at the time when the credential is created is not returned, since the credential is still on chain.
In the latter case, all information about the information is cleared, hence the deposit is returned to its original payer.

<TsJsBlock>
  {RevokeRemoveCredentialById}
</TsJsBlock>

Because a credential identifier can also be calculated starting from the credential itself and the information about its attester, it is also possible to revoke (and optionally remove) a credential given the credential itself.

<TsJsBlock>
  {RevokeCredential}
</TsJsBlock>

## Unrevoke a Credential

For public credentials that have been revoked but not removed from chain, it is possible to un-revoke them, making them valid again.

For instance, a driving license can be marked as "suspended" for three years, without being completely invalidated.
At the end of the suspension period, it is enabled again by being unrevoked.

As for revocation, both the credential ID and the whole credential can be used, since the SDK provides the primitives to always obtain the former from the latter, but here we show how the whole credential can be used to generate and submit an un-revocation transaction.

<TsJsBlock>
  {UnrevokeCredential}
</TsJsBlock>

## Reclaim the Deposit for a Credential

All the operations mentioned so far, always require the participation of the public credential attester, who must use their assertion key to sign all operations before they are submitted to the KILT blockchain.

The only operation that can be submitted directly by someone else, as with other places in the SDK, is the transaction to remove a credential and obtain the initial deposit.

This is, technically speaking, a different operation compared to the one to remove a credential, albeit the two yield the same result: all traces of the credential are removed from the chain and the deposit is returned to its payer.
The difference between the two is about who is authorized to perform the operation: while credential removal requires a DID signature by the original credential creator (a.k.a. issuer), the deposit claiming operation requires a regular transaction signature by the KILT account that paid the original deposit, with no involvement of the original attester.

<TsJsBlock>
  {ReclaimDeposit}
</TsJsBlock>

[credential-retrieval]: ./02_credential_retrieval.md