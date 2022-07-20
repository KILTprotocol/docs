import * as Kilt from '@kiltprotocol/sdk-js'

export async function runAll(address: string): Promise<void> {
  // Connect to the blockchain
  await Kilt.init({ address })

  const keyring = new Kilt.Utils.Keyring({
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
    async ([seed, addr]): Promise<[string, string, Kilt.Balances]> => {
      return [seed, addr, await Kilt.Balance.getBalances(addr)]
    }
  )
  const balances = await Promise.all(promise_balances)

  // Print the gathered information for all
  balances.forEach(([seed, addr, balance]: [string, string, Kilt.Balances]) => {
    console.log(
      `Seed ${seed} has account id ${addr} and ${balance.free.toString()}`
    )
  })
}
