import { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@kiltprotocol/sdk-js'

export async function claimDelegatorStakingRewards(
  api: ApiPromise,
  submitterAccount: KeyringPair
) {
  const tx = api.tx.utility.batch([
    // convert delegator participation points into rewards
    api.tx.parachainStaking.incrementDelegatorRewards(),
    // mint rewards for delegator address
    api.tx.parachainStaking.claimRewards()
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
    `Claimed delegator staking rewards for ${address} with tx hash ${txHash}`
  )
  resolve(txHash)
}
const onError = (error: Error, reject: (err: Error) => void) => {
  console.error(`Failed to claim delegator staking rewards due to ${error}`)
  reject(error)
}
