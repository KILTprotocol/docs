---
id: dapp-verifier
title: Verifying a Credential
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';
import TsJsBlock from '@site/src/components/TsJsBlock';

import EmailCtype from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/emailCtype.ts';
import GenerateChallenge from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/generateChallenge.ts';
import CreateRequestCredentialMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/createRequestCredentialMessage.ts';
import EncryptRequestCredentialMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/encryptRequestCredentialMessage.ts';

import DecryptCredentialMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/decryptCredentialMessage.ts';
import VerifyCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/verifyCredential.ts';


This section demonstrates how to build a basic verifier according to the [Credential API Specification](https://github.com/KILTprotocol/spec-ext-credential-api).
Before continuing, please make sure you have already set up the [communication session](03_session.md) and [Well-Known DID Configuration](02_well-known-did-config.md).

This guide explains specifically how a website can request a credential presentation from one of its visitors.
After the extension verified the Well-Known DID Configuration and the encrypted communication channel between the extension and the server was established, we can request the credential presentation.
This is a two step process.
First we send a message to the extension that request the presentation of a credential.
Since we don't want to see just any credential, but expect specific content, we also require that the credential conforms to a specific [CType](../../concepts/04_credentials/02_ctypes.md).
When the browser extension received the request, it will prompt the user to select a credential that should be presented to the website.
The user can also choose to reject this request and don't show any presentation.

The second step is to verify the received credential.
After the user choose the credential, the extension will send a response to the website which contains the credential presentation.
We need to ensure that this presentation is actually valid.

## Request a Credential Presentation

Before we can request a credential, we need the type of credential (CType) that we want to request.
In this guide we want to request an email address that is owned by the DID.
For that we use the Email CType.
You can search through existing CTypes in the [CType Index](https://github.com/KILTprotocol/ctype-index).

<TsJsSnippet>
  {EmailCtype}
</TsJsSnippet>

After we have the ctype, we can build the request for the visitor.
Since we want to ensure that the presentation of the credential is fresh, we first create a random challenge.
The presentation must include this challenge and since it's random, the presentation must be created and signed from scratch.
This ensures that it's not possible to record a presentation and just send this, pretending to be the owner of the DID.
The challenge can be generated using the polkadot crypto utilities:

<TsJsBlock>
  {GenerateChallenge}
</TsJsBlock>

TODO: Explain what we do here, who
Then construct the `request-credential` message using the message body, verifier DID and claimer DID:

<TsJsSnippet>
  {CreateRequestCredentialMessage}
</TsJsSnippet>

Next, encrypt the message:

<TsJsSnippet>
  {EncryptRequestCredentialMessage}
</TsJsSnippet>


## Verify the Presentation

After sending the `request-credential` message to the extension, the verifier listens for a message of type `submit-credential` in response.

When a message is received, decrypt it and check that it has the expected type:

<TsJsSnippet>
  {DecryptCredentialMessage}
</TsJsSnippet>

Finally the message content (the credential that was requested) can be verified using the request challenge that was previously stored on the server side.
This function will throw if the verification is not successful.

<TsJsBlock>
  {VerifyCredential}
</TsJsBlock>

That's it! Your verifier has successfully requested and verified a credential.
