import { config as envConfig } from 'dotenv'
import { runAll as runAllCore } from './did'
import { runAll as runAllClaiming } from './claiming'

async function main() {
  envConfig()
  try {
    await runAllCore()
    await runAllClaiming()
  } catch (e) {
    console.error('Oh no! There was an error!!\n', e)
    process.exit(1)
  } finally {
    process.exit()
  }
}

main()
