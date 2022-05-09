import * as kilt from '@kiltprotocol/sdk-js'
import { Keyring } from '@kiltprotocol/utils'

export async function main() {
  // connect to the blockchain
  await kilt.init({
    address: 'wss://peregrine.kilt.io/parachain-public-ws'
  })
  const keyring = new Keyring({
    type: 'sr25519',
    ss58Format: 38
  })

  // Get a list of development accounts
  const accounts_seeds = ['//Alice', '//Bob']
  const addresses = accounts_seeds.map((seed) => {
    return [seed, keyring.addFromUri(seed).address]
  })

  // Query the balance for all of them
  const promise_balances = addresses.map(
    async ([seed, addr]): Promise<[string, string, kilt.Balances]> => {
      return [seed, addr, await kilt.Balance.getBalances(addr)]
    }
  )
  const balances = await Promise.all(promise_balances)

  // Print the gathered information for all
  balances.forEach(([seed, addr, balance]: [string, string, kilt.Balances]) => {
    console.log(
      `Seed ${seed} has account id ${addr} and ${balance.free.toString()}`
    )
  })
}

main().finally(() => process.exit())
