import { ApiPromise } from '@polkadot/api'
import { Balance } from '@polkadot/types/interfaces'

export async function getUnclaimedStakingRewards(
  api: ApiPromise,
  account: string
) {
  const rewards = await api.call.staking.getUnclaimedStakingRewards<Balance>(
    account
  )
  return rewards.toBigInt()
}
