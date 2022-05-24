---
id: replay_protection
title: Replay Protection
---

Replay Protection

A sophisticated attacker may intercept and copy encrypted messages sent to you or by you in an attempt to impersonate the sender of the message later on.
This attack is limited, because the attacker cannot change or even read the data in the encrypted message, and will not be able to read or react on any data sent in response.
But in certain cases, simply re-sending the message can still be quite effective.
This concerns for example credential submissions traveling from claimers to verifiers, where an attacker may attempt to convince the verifier to accept a stolen credential submission again.
To give an example for illustration purposes, think of a paywall or a turnstile that allows passage only upon presentation of a valid access credential.
Copying a message that grants the sender access to the requested resource could help an attacker gain access without possessing access rights themselves.
To prevent these types of attacks, KILT messages are timestamped and expose a unique identifier as part of their encrypted content, which therefore cannot be tampered with.
Verifiers should impose limits on an acceptable age or range for these timestamps and keep a record of previous submissions, which can be purged after their acceptance range has run out.

## Example Code

Define acceptance range and set up a record of past submissions:

```typescript
const MAX_ACCEPTED_AGE = 60_000 // ms -> 1 minute
const MIN_ACCEPTED_AGE = -1_000 // allow for some imprecision in system time
const submissions = new Map<string, number>()
```

Check record for each incoming message and update if accepted:

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

Purge at regular intervals:

```typescript
setInterval(() => {
  const outdatedTimestamp = Date.now() - MAX_ACCEPTED_AGE
  submissions.forEach((timestamp, hash) => {
    if (timestamp < outdatedTimestamp) submissions.delete(hash)
  })
}, 1000)
```
