const Kilt = require('@kiltprotocol/sdk-js')

exports = async function keystoreGeneration() {
  const keystore = new Kilt.Did.DemoKeystore()

  return keystore
}
