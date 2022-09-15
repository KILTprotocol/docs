import { Keyring } from '@polkadot/api'
import { claimCollatorStakingRewards } from './rewards/02_claim_collator_staking_rewards'
import { claimDelegatorStakingRewards } from './rewards/03_claim_delegator_staking_rewards'
import { connect } from './utility'
import { config as envConfig } from 'dotenv'
import { getUnclaimedStakingRewards } from './rewards/01_query_staking_rewards'

async function main() {
  envConfig()

  const wsAddress = process.env['WS_ENDPOINT']
  if (!wsAddress) {
    throw `No WebSocket address specified with the "WS_ENDPOINT" env variable.`
  }

  console.log(wsAddress)
  const api = await connect(wsAddress)
  const keyring = new Keyring({ ss58Format: 38, type: 'sr25519' })
  const collator = keyring.addFromUri('//Alice')
  const delegator = keyring.addFromUri('//Charlie')

  // const api = await connect(wsAddress)
  console.log('1) Checking staking rewards')
  const rewards = await getUnclaimedStakingRewards(api, collator.address)
  console.log(`Done checking rewards: ${rewards}`)

  console.log('2) Claiming staking rewards')
  console.log(`2a) Claiming collator rewards for ${collator.address}`)
  await claimCollatorStakingRewards(api, collator)
  console.log(`2b) Claiming delegator rewards for ${delegator.address}`)
  await claimDelegatorStakingRewards(api, delegator)
}

main()
  .catch((e) => {
    console.log('Error in the core features test', e)
    process.exit(1)
  })
  .then(() => {
    process.exit()
  })
