const Kilt = require('@kiltprotocol/sdk-js')

async function keystoreGeneration() {
  const keystore = new Kilt.Did.DemoKeystore()

  return keystore
}

module.exports.keystoreGeneration = keystoreGeneration
