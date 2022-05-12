import { main as main1 } from './1_getting_started'
import { main as main10 } from './10_getting_started'
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
  const endpoints = await main5(johnDoeDidId)
  const request = await main6(endpoints)
  const attestation = await main7(request)
  const credential = await main8(request, attestation)
  await main9(credential)
  await main10()
}

runAll()
