export async function main(
  submissions,
  decrypted,
  MIN_ACCEPTED_AGE,
  MAX_ACCEPTED_AGE
) {
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
