import { main as main1 } from './1_did'
import { main as main2 } from './2_did'

export async function runAll() {
  await main1()
  await main2()
}
