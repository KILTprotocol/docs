---
id: replay_protection
title: Protect Against Replay Attacks
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DefineRange from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/_replay_protection_01.ts';
import EvaluateMessageTime from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/_replay_protection_02.ts';
import PurgeTimeout from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/messaging/_replay_protection_03.ts';

Whenever data travels on a public network, even when encrypted or signed, the communicating parties need to make sure they never accept and process a message more than once to protect against exploits by malicious third parties (so-called replay attacks).
When requesting and submitting credential presentations, vulnerabilities for replay attacks can be prevented by requesting that the Claimer sign a unique piece of data as part of the presentation, as shown in the [Verification Cookbook section](../04_claiming/04_presentation_creation.md).

However, protection against replay attacks can also happen on the message layer.
To help prevent these types of attacks, KILT messages are timestamped and expose a unique identifier as part of their encrypted content, which therefore cannot be tampered with.
It is good practice to impose limits on an acceptable range for timestamps on incoming messages and to keep a record of the ids of previous submissions, which can be purged after their acceptance range has run out.
This way, any resubmission is either rejected because its id is known to the recipient, or because its timestamp is too old.
Below you can find example code of how this could be implemented.

1. Define acceptance range and set up a record of past submissions:

<TsJsBlock
  className="language-ts"
>
  {DefineRange}
</TsJsBlock>

2. Check record for each incoming message and update if accepted:

<TsJsBlock
  className="language-ts"
>
  {EvaluateMessageTime}
</TsJsBlock>

3. Purge at regular intervals:

<TsJsBlock
  className="language-ts"
>
  {PurgeTimeout}
</TsJsBlock>
