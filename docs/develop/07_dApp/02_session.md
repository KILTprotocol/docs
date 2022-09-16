---
id: session
title: Setting Up the Communication Session
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';

import DappIntroduction from '!!raw-loader!@site/code_examples/dapp/src/dapp/dappIntroduction.ts';
import SessionCheck from '!!raw-loader!@site/code_examples/dapp/src/dapp/sessionCheck.ts';

The first step in creating your dapp is to set up the communication session.
The purpose of the session is to pass encrypted messages back and forth between your dapp and the extension.

## Dapp Indicates Credential API Support

In order to indicate its support of the extension's API, the dapp creates the `window.kilt` object as soon as possible.
For example:

```html
<head>
  <script>
    window.kilt = {}
  </script>
</head>
```

## Dapp Introduces Itself

The dApp introduces itself to the extension with its name, encryption key URI, and a challenge. A copy of the challenge should be stored on the server side. For example:

<TsJsSnippet>
  {DappIntroduction}
</TsJsSnippet>

At this point the extension has received the introduction of the dapp and returned a new session along with the encrypted challenge.

## Dapp checks the session values

The extension has provided the session along with an encrypted challenge.
The dapp decrypts the challenge and verifies that it matches the original challenge.
This should happen on the server side:

<TsJsSnippet>
  {SessionCheck}
</TsJsSnippet>

That's it! The communication session has been securely established and you're ready to start sending and receiving messages.
