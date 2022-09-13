---
id: session
title: Setting Up the Communication Session
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';

import DappIntroductionTs from '!!raw-loader!@site/code_examples/dapp/src/dapp/dappIntroduction.ts';
import DappIntroductionJs from '!!raw-loader!@site/code_examples/dapp/_js/dapp/dappIntroduction.js';
import SessionCheckTs from '!!raw-loader!@site/code_examples/dapp/src/dapp/sessionCheck.ts';
import SessionCheckJs from '!!raw-loader!@site/code_examples/dapp/_js/dapp/sessionCheck.js';

The first step in creating your dApp is to set up the communication session. The purpose of the session is to pass encrypted messages back and forth between your dApp and the extension.

## DApp indicates credential API support

In order to indicate its support of the extension's API, the dApp creates the `window.kilt` object as soon as possible. For example:

```html
<head>
  <script>
    window.kilt = {}
  </script>
</head>
```

## DApp introduces itself

The dApp introduces itself to the extension with its name, encryption key URI, and a challenge. A copy of the challenge should be stored on the server side. For example:

<!-- <TsJsSnippet tsSnippet={DappIntroductionTs} jsSnippet={DappIntroductionJs} /> -->

At this point the extension has received the introduction of the dApp and returned a new session along with the encrypted challenge.

## DApp checks the session values

The extension has provided the session along with an encrypted challenge. The dApp decrypts the challenge and verifies that it matches the original challenge. This should happen on the server side:

<!-- <TsJsSnippet tsSnippet={SessionCheckTs} jsSnippet={SessionCheckJs} /> -->

That's it! The communication session has been securely established and you're ready to start sending and receiving messages.
