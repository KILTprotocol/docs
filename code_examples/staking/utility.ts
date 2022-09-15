import { ApiPromise, WsProvider } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'
import type { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { typeBundleForPolkadot } from '@kiltprotocol/type-definitions'


export async function connect(wssProvider: string) {
  return ApiPromise.create({
    provider: new WsProvider(wssProvider),
    typesBundle: {
      spec: {
        'mashnet-node': typeBundleForPolkadot,
        'kilt-spiritnet': typeBundleForPolkadot
      }
    }
  })
}

export async function signAndSend(
  api: ApiPromise,
  tx: SubmittableExtrinsic,
  signer: KeyringPair,
  onSuccess: (txHash: string) => void,
  onError: (error: Error) => void
) {
  return tx.signAndSend(signer, ({ status, dispatchError }) => {
    if (status.isFinalized && !dispatchError) {
      onSuccess(status.asFinalized.toString())
    }
    if (dispatchError) {
      if (dispatchError.isModule) {
        // for module errors, we have the section indexed, lookup
        const decoded = api.registry.findMetaError(dispatchError.asModule)
        const { docs, name, section } = decoded

        const error = new Error(`${section}.${name}: ${docs.join(' ')}`)
        onError(error)
      } else {
        // Other, CannotLookup, BadOrigin, no extra info
        const error = new Error(dispatchError.toString())
        onError(error)
      }
    }
  })
}
