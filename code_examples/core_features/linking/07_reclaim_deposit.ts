import type { KeyringPair } from '@kiltprotocol/types'

import { AccountLinks } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function reclaimLinkDeposit(
  depositPayerAccountAccount: KeyringPair,
  linkedAccountAddress: KeyringPair['address'],
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  // The tx does not need to be authorized by a DID, but the deposit payer's account claims the deposit and removes the link.
  const accountUnlinkTx = await AccountLinks.getReclaimDepositTx(
    linkedAccountAddress
  )

  await BlockchainUtils.signAndSubmitTx(
    accountUnlinkTx,
    depositPayerAccountAccount,
    {
      resolveOn
    }
  )
}
