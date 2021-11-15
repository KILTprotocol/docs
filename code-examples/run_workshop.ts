import { test_all } from './workshop'

test_all()
  .catch((e) => {
    console.error('Oh no! There was an error!!\n', e)
    process.exit(1)
  })
  .then(() => {
    process.exit(0)
  })
