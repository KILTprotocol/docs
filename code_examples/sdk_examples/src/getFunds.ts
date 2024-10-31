import * as Kilt from '@kiltprotocol/sdk-js'
import { BalanceUtils, Blockchain } from '@kiltprotocol/chain-helpers'
import type {
  KiltAddress,
  MultibaseKeyPair,
  TransactionSigner
} from '@kiltprotocol/types'
import { Multikey } from '@kiltprotocol/utils'
import { BN } from '@polkadot/util'

// TODO: Look into tidier way with PD Keyring…
export async function getFunds(
  faucetAccount: MultibaseKeyPair,
  recipient: MultibaseKeyPair,
  kiltAmount: number
) {
  const api = Kilt.ConfigService.get("api")

  const tx = api.tx.balances.transferAllowDeath(
    Multikey.decodeMultibaseKeypair(recipient).publicKey,
    BalanceUtils.convertToTxUnit(new BN(kiltAmount), 0)
  )
  const [faucetSigner] = await Kilt.getSignersForKeypair<KiltAddress>({
    keypair: faucetAccount
  })
  await Blockchain.signAndSubmitTx(tx, <TransactionSigner>faucetSigner)
}
