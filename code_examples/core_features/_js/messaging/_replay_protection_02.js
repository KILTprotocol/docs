import { blake2AsHex } from '@polkadot/util-crypto'
export async function main(
  submissions,
  decrypted,
  MIN_ACCEPTED_AGE,
  MAX_ACCEPTED_AGE
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
