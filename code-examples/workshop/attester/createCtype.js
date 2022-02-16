const Kilt = require('@kiltprotocol/sdk-js')

// returns CTYPE from a schema
function createCtype() {
  return Kilt.CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: 'Drivers License',
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'integer',
      },
    },
    type: 'object',
  });
}

module.exports = createCtype;
