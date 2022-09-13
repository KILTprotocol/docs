/* eslint-disable @typescript-eslint/no-unused-vars */

import { blake2AsHex } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function main(
  submissions: Map<string, number>,
  decrypted: Kilt.IMessage,
  MIN_ACCEPTED_AGE: number,
  MAX_ACCEPTED_AGE: number
) {
  // is messageId fresh and createdAt recent ?
  const messageId =
    decrypted.messageId || blake2AsHex(JSON.stringify(decrypted))
  if (
    submissions.has(messageId) ||
    decrypted.createdAt < Date.now() - MAX_ACCEPTED_AGE ||
    decrypted.createdAt > Date.now() - MIN_ACCEPTED_AGE
  ) {
    // no -> reject message
  } else {
    submissions.set(messageId, decrypted.createdAt)
    // yes -> accept & process message
  }
}
