import * as Kilt from '@kiltprotocol/sdk-js'
import { BN } from '@polkadot/util'
import { setTimeout } from 'timers/promises'

async function failproofSubmit(
  tx: Kilt.SubmittableExtrinsic,
  submitter: Kilt.KeyringPair
) {
  try {
    console.log('account', submitter.address)
    await Kilt.Blockchain.signAndSubmitTx(tx, submitter)
  } catch {
    // Try a second time after a small delay and fetching the right nonce.
    const waitingTime = 12_000 // 12 seconds
    console.log(
      `First submission failed for workshop. Waiting ${waitingTime} ms before retrying.`
    )
    await setTimeout(waitingTime)
    console.log('Retrying...')
    // nonce: -1 tells the client to fetch the latest nonce by also checking the tx pool.
    const resignedBatchTx = await tx.signAsync(submitter, { nonce: -1 })
    await Kilt.Blockchain.submitSignedTx(resignedBatchTx)
  }
}

export async function getFunds(
  faucetAccount: Kilt.KeyringPair,
  recipient: Kilt.KiltAddress,
  kiltAmount: number
) {
  const api = Kilt.ConfigService.get('api')
  const tx = api.tx.balances.transfer(
    recipient,
    Kilt.BalanceUtils.convertToTxUnit(new BN(kiltAmount), 0)
  )
  console.log('faucet', faucetAccount.address)
  await failproofSubmit(tx, faucetAccount)
  console.log('Successfully transferred tokens')
}

export async function endowAccounts(
  faucetAccount: Kilt.KeyringPair,
  destinationAccounts: Kilt.KiltAddress[],
  amount: BN
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const transferBatch = destinationAccounts.map((acc) =>
    api.tx.balances.transfer(
      acc,
      Kilt.BalanceUtils.convertToTxUnit(
        Kilt.BalanceUtils.KILT_COIN.mul(amount),
        0
      )
    )
  )

  console.log(
    `Endowing test accounts "${destinationAccounts}"
    from faucet "${faucetAccount.address}"
    with ${Kilt.BalanceUtils.formatKiltBalance(amount, {
      decimals: 0
    })} each...`
  )
  const batchTx = api.tx.utility.batchAll(transferBatch)

  await failproofSubmit(batchTx, faucetAccount)

  console.log('Successfully transferred tokens')
}
