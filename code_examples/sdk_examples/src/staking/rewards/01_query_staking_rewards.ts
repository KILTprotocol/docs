import * as Kilt from '@kiltprotocol/sdk-js'
import { Balance } from '@polkadot/types/interfaces'

export async function getUnclaimedStakingRewards(account: Kilt.KiltAddress) {
  const api = Kilt.ConfigService.get('api')

  const rewards = await api.call.staking.getUnclaimedStakingRewards<Balance>(
    account
  )
  return rewards.toBigInt()
}
