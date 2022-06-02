---
id: replay_protection
title: Replay Protection
---

Whenever data travels on a public network, even when encrypted or signed, the communicating parties need to make sure they never accept and process a message more than once to protect against exploits by malicious third parties (so-called replay attacks).
When requesting and submitting credential presentations, vulnerabilities for replay attacks can be prevented by requesting that the claimer sign a unique piece of data as part of the presentation.

<!--TODO: add link to cookbook entry on presentations once available-->

Protection against replay attacks can also happen on the message layer, however.
To help prevent these types of attacks, KILT messages are timestamped and expose a unique identifier as part of their encrypted content, which therefore cannot be tampered with.
It is good practice to impose limits on an acceptable range for timestamps on incoming messages and to keep a record of the ids of previous submissions, which can be purged after their acceptance range has run out.
This way, any resubmission is either rejected because its id is known to the recipient, or because its timestamp is too old.
Below you can find example code of how this could be implemented.

1. Define acceptance range and set up a record of past submissions:

```typescript
const MAX_ACCEPTED_AGE = 60_000 // ms -> 1 minute
const MIN_ACCEPTED_AGE = -1_000 // allow for some imprecision in system time
const submissions = new Map<string, number>()
```

2. Check record for each incoming message and update if accepted:

```typescript
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
```

3. Purge at regular intervals:

```typescript
setInterval(() => {
  const outdatedTimestamp = Date.now() - MAX_ACCEPTED_AGE
  submissions.forEach((timestamp, hash) => {
    if (timestamp < outdatedTimestamp) submissions.delete(hash)
  })
}, 1000)
```
