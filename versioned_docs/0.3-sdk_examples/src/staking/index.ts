import * as Kilt from '@kiltprotocol/sdk-js'

import { claimCollatorStakingRewards } from './rewards/02_claim_collator_staking_rewards'
import { claimDelegatorStakingRewards } from './rewards/03_claim_delegator_staking_rewards'

import { getUnclaimedStakingRewards } from './rewards/01_query_staking_rewards'

// We don't expect these tests to pass yet.
// We would need a collator seed and a delegator seed to test if we can claim rewards.
export async function testStaking(wssAddress: string) {
  await Kilt.connect(wssAddress)

  const collator = Kilt.Utils.Crypto.makeKeypairFromUri('//Alice', 'sr25519')
  const delegator = Kilt.Utils.Crypto.makeKeypairFromUri('//Charlie', 'sr25519')

  console.log('1) Checking staking rewards')
  const rewards = await getUnclaimedStakingRewards(collator.address)
  console.log(`Done checking rewards: ${rewards}`)

  console.log('2) Claiming staking rewards')
  console.log(`2a) Claiming collator rewards for ${collator.address}`)
  await claimCollatorStakingRewards(collator)
  console.log(`2b) Claiming delegator rewards for ${delegator.address}`)
  await claimDelegatorStakingRewards(delegator)
}
