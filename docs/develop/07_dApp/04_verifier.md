---
id: dapp-verifier
title: Verifying a Credential
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';
import TsJsBlock from '@site/src/components/TsJsBlock';
import TsJsSnippet from '@site/src/components/TsJsSnippet';

import EmailCtype from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/01_email_ctype.ts';
import GenerateChallenge from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/02_generate_challenge.ts';
import CreateRequestCredentialMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/03_create_request_credential_message.ts';
import EncryptRequestCredentialMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/04_encrypt_request_credential_message.ts';
import DecryptCredentialMessage from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/verifier/05_verify_credential_message.ts';

This section demonstrates how to build a basic verifier according to the [Credential API Specification](https://github.com/KILTprotocol/spec-ext-credential-api).
Before continuing, please make sure you have already set up the [communication session](03_session.md) and [Well-Known DID Configuration](02_well-known-did-config.md).

This guide explains specifically how a web server can request a credential presentation from one of its visitors (the claimer).
After the browser extension verified the Well-Known DID Configuration and the encrypted communication channel between the extension and the server was established, the web server can request the credential presentation.
This is a two step process.

First the server sends a message to the extension that request the presentation of a credential.
Since we don't want to see just any credential, but expect specific content, we also require that the credential conforms to a specific [CType](../../concepts/05_credentials/02_ctypes.md).
When the extension receives the request, it will prompt the user to select a credential that should be presented to the server.
The user can also choose to reject this request and not to show any presentation.

The second step is to verify the received credential.
After the user chooses the credential, the extension will pass a response to the website which contains the credential presentation.
The server of that website needs to ensure that this presentation is actually valid.

## Request a Credential Presentation

Before the website can request a credential, it needs the type of credential (CType) that it wants to request.
In this guide the website requests an email address that is owned by the DID.
For that it uses the Email CType.
You can search through existing CTypes in the [CType Index](https://github.com/KILTprotocol/ctype-index).

<TsJsSnippet dropTail="1">
  {EmailCtype}
</TsJsSnippet>

After settled on a CType, the server can build the request for the visitor.
Since we want to ensure that the presentation of the credential is fresh, the server first has to create a random challenge.
The presentation must include this challenge and since it's random, the presentation must be created and signed from scratch.
This ensures that it's not possible to record a presentation and just send this, pretending to be the owner of the DID.
The challenge can be generated using the polkadot crypto utilities:

<TsJsBlock>
  {GenerateChallenge}
</TsJsBlock>

With the challenge the server can construct the `request-credential` message.
The request is sent to the light DID (`claimerSessionDid`) that is used to encrypt the messages (see [Session](03_session.md) for more information).

<TsJsBlock>
  {CreateRequestCredentialMessage}
</TsJsBlock>

:::note Privacy

The credential itself doesn't need to be issued to this DID since the light DID is only used to encrypt the messages.
We don't use the full DID of the claimer to establish the encrypted communication, so that the claimer first can ensure the origin of the `request-credential` message.

:::

After the server has built the message object, it must encrypt the message for the claimer.
Once the message is encrypted the server can pass on the message to the extension.

<TsJsBlock>
  {EncryptRequestCredentialMessage}
</TsJsBlock>

## Verify the Presentation

After sending the `request-credential` message to the extension, the verifier listens for a message of type `submit-credential` in response.

After the response from the extension is received, forwarded to the server and decrypted, the verifier must check that it has the expected CType and that it contains a valid credential.
Since everyone can run an attestation service, you need to make sure that you also verify that the attester is trusted.

<TsJsSnippet>
  {DecryptCredentialMessage}
</TsJsSnippet>

That's it! Your verifier has successfully requested and verified a credential.
