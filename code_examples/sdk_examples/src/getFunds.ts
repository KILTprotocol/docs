import * as Kilt from '@kiltprotocol/sdk-js'
import { ApiPromise } from '@polkadot/api'
import { BN } from '@polkadot/util'
import { setTimeout } from 'timers/promises'

export async function getFunds(
  api: ApiPromise,
  faucetAccount: Kilt.KeyringPair,
  recipient: Kilt.KiltAddress,
  kiltAmount: number
) {
  const tx = api.tx.balances.transfer(
    recipient,
    Kilt.BalanceUtils.convertToTxUnit(new BN(kiltAmount), 0)
  )

  try {
    await Kilt.Blockchain.signAndSubmitTx(tx, faucetAccount)
  } catch {
    // Try a second time after a small delay and fetching the right nonce.
    const waitingTime = 12_000 // 12 seconds
    console.log(
      `First submission failed for workshop. Waiting ${waitingTime} ms before retrying.`
    )
    await setTimeout(waitingTime)
    console.log('Retrying...')
    // nonce: -1 tells the client to fetch the latest nonce by also checking the tx pool.
    const resignedBatchTx = await tx.signAsync(faucetAccount, { nonce: -1 })
    await Kilt.Blockchain.submitSignedTx(resignedBatchTx)
  }

  console.log('Successfully transferred tokens')
}
