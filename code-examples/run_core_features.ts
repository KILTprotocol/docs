import { runAll } from './core_feature'

runAll()
  .catch((e) => {
    console.error('Oh no! There was an error!!\n', e)
    process.exit(1)
  })
  .then(() => {
    process.exit(0)
  })
