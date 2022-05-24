import { main as main1 } from './1_getting_started'
import { main as main2 } from './2_getting_started'
import { main as main3 } from './3_getting_started'
import { main as main4 } from './4_getting_started'
import { main as main5 } from './5_getting_started'
import { main as main6 } from './6_getting_started'
import { main as main7 } from './7_getting_started'
import { main as main8 } from './8_getting_started'
import { main as main9 } from './9_getting_started'

export async function runAll() {
  main1()
  await main2()
  await main3()
  const johnDoeDidId = await main4()
  if (!johnDoeDidId)
    throw new Error(
      'Web3Name assoicated to the DID is not on the KILT spiritnet chain'
    )
  const endpoints = await main5(johnDoeDidId)
  if (!endpoints) throw new Error('DID doesnt include the service endpoints')
  const request = await main6(endpoints)
  const credential = await main7(request)
  if (!credential) throw new Error('Credential not created')
  await main8(credential)
  await main9()
}

runAll()
