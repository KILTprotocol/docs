import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  submissions: Map<string, number>,
  decrypted: Kilt.Message,
  MIN_ACCEPTED_AGE: number,
  MAX_ACCEPTED_AGE: number
): Promise<void> {
  // is messageId fresh and createdAt recent ?
  if (
    submissions.has(decrypted.messageId) ||
    decrypted.createdAt < Date.now() - MAX_ACCEPTED_AGE ||
    decrypted.createdAt > Date.now() - MIN_ACCEPTED_AGE
  ) {
    // no -> reject message
  } else {
    submissions.set(decrypted.messageId, decrypted.createdAt)
    // yes -> accept & process message
  }
}
