import { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

export async function claimCollatorStakingRewards(
  api: ApiPromise,
  submitterAccount: KeyringPair
) {
  const tx = api.tx.utility.batch([
    // convert collator participation points into rewards
    api.tx.parachainStaking.incrementCollatorRewards(),
    // mint rewards for collator address
    api.tx.parachainStaking.claimRewardsFor(submitterAccount.address)
  ])

  // boilerplate to sign and send tx to websocket
  return new Promise((resolve, reject) =>
    tx.signAndSend(submitterAccount, ({ status, dispatchError }) => {
      if (status.isFinalized && !dispatchError) {
        onSuccess(
          submitterAccount.address,
          status.asFinalized.toString(),
          resolve
        )
      }
      if (dispatchError) {
        if (dispatchError.isModule) {
          // for module errors, we have the section indexed, lookup
          const decoded = api.registry.findMetaError(dispatchError.asModule)
          const { docs, name, section } = decoded

          const error = new Error(`${section}.${name}: ${docs.join(' ')}`)
          onError(error, reject)
        } else {
          // Other, CannotLookup, BadOrigin, no extra info
          const error = new Error(dispatchError.toString())
          onError(error, reject)
        }
      }
    })
  )
}

// boilerplate handlers
const onSuccess = (
  address: string,
  txHash: string,
  resolve: (res: string) => void
) => {
  console.log(
    `Claimed collator staking rewards for ${address} with tx hash ${txHash}`
  )
  resolve(txHash)
}
const onError = (error: Error, reject: (err: Error) => void) => {
  console.error(`Failed to claim collator staking rewards due to ${error}`)
  reject(error)
}
