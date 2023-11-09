---
id: login
title: Important Code Snippets
---

## Login Process

Each user that wants to login would trigger the process that is displayed below.
The process consist of multiple HTTP(S) queries, including extension-api's messages.
Interactions are between the client (browser), the extension/wallet and the server (backend).

```
+-----------+                                                   +---------+                                                                 +---------+
| Extension |                                                   | Browser |                                                                 | Server  |
+-----------+                                                   +---------+                                                                 +---------+
      |                                                              | ------------------------\                                                 |
      |                                                              |-| User visits web3login |                                                 |
      |                                                              | |-----------------------|                                                 |
      |                                                              | --------------------------------------\                                   |
      |                                                              |-| User chooses an Extension X         |                                   |
      |                                                              | | and clicks on the "Connect" button. |                                   |
      |                                                              | |-------------------------------------|                                   |
      |                                                              |                                                                           |
      |                                please allow use on this page |                                                                           |
      |<-------------------------------------------------------------|                                                                           |
      | -------------------------------------------------------\     |                                                                           |
      |-| Only the "Extension X" pops up, only the first time. |     |                                                                           |
      | |------------------------------------------------------|     |                                                                           |
      | ---------------------------------------\                     |                                                                           |
      |-| The Domain Linkage Credentials under |                     |                                                                           |
      | | .well-known/did-configuration.json   |                     |                                                                           |
      | | is verified.                         |                     |                                                                           |
      | |--------------------------------------|                     |                                                                           |
      |                                                              |                                                                           |
      | User granted access                                          |                                                                           |
      |------------------------------------------------------------->|                                                                           |
      |                                                              |                                                                           |
      |                                                              | GET /api/session/start                                                    |
      |                                                              |-------------------------------------------------------------------------->|
      |                                                              |                                                                           |
      |                                                              |                                                                    200 OK |
      |                                                              |        set-cookie: sessionJWT={dAppName, dAppEncryptionKeyUri, challenge} |
      |                                                              |                               {dAppName, dAppEncryptionKeyUri, challenge} |
      |                                                              |<--------------------------------------------------------------------------|
      |                                                              |                                                                           |
      |      startSession(dAppName, dAppEncryptionKeyUri, challenge) |                                                                           |
      |<-------------------------------------------------------------|                                                                           |
      |                                                              |                                                                           |
      | {encryptionKeyId, encryptedChallenge, nonce}                 |                                                                           |
      |------------------------------------------------------------->|                                                                           |
      |                                                              |                                                                           |
      |                                                              | POST /api/session/verify                                                  |
      |                                                              | Cookie: sessionJWT={dAppName, dAppEncryptionKeyUri, challenge}            |
      |                                                              | {encryptionKeyId, encryptedChallenge, nonce}                              |
      |                                                              |-------------------------------------------------------------------------->|
      |                                                              |                     ----------------------------------------------------\ |
      |                                                              |                     | Verify sessionJWT.                                |-|
      |                                                              |                     | Decrypt challenge using nonce and encryptionKeyId | |
      |                                                              |                     | Verify Extension Session:                         | |
      |                                                              |                     | Assert that jwt-challenge (our)                   | |
      |                                                              |                     | and decrypted-challenge (theirs) match.           | |
      |                                                              |                     |---------------------------------------------------| |
      |                                                              |                                                                           |
      |                                                              |                                                                    200 OK |
      |                                                              |      set-cookie: sessionJWT={{dAppName, dAppEncryptionKeyUri, challenge}, |
      |                                                              |                             {encryptionKeyId, encryptedChallenge, nonce}} |
      |                                                              |<--------------------------------------------------------------------------|
      |               ---------------------------------------------\ |                                                                           |
      |               | Server-Extension-Session established ✉️ ⛓️ |-|                                                                            |
      |               |--------------------------------------------| |                                                                           |
      |                                                              | -----------------------\                                                  |
      |                                                              |-| User clicks on Login |                                                  |
      |                                                              | |----------------------|                                                  |
      |                                                              |                                                                           |
      |                                                              | GET /api/credential/login/request                                         |
      |                                                              | Cookie: sessionJWT                                                        |
      |                                                              |-------------------------------------------------------------------------->|
      |                                                              |       ------------------------------------------------------------------\ |
      |                                                              |       | The Server is asking for a Credential of a cType from the User. |-|
      |                                                              |       |-----------------------------------------------------------------| |
      |                                                              |                                                                           |
      |                                                              |                                                                    200 OK |
      |                                                              |                            set-cookie: credentialJWT={challengeOnRequest} |
      |                                                              |                                               KiltMsg{request-credential} |
      |                                                              |<--------------------------------------------------------------------------|
      |                                                              |                                                                           |
      |                            send(KiltMsg{request-credential}) |                                                                           |
      |<-------------------------------------------------------------|                                                                           |
      | -----------------------------------\                         |                                                                           |
      |-| User approves the request        |                         |                                                                           |
      | | and selects credential to share. |                         |                                                                           |
      | |----------------------------------|                         |                                                                           |
      |                                                              |                                                                           |
      | KiltMsg{submit-credential}                                   |                                                                           |
      |------------------------------------------------------------->|                                                                           |
      |                                                              |                                                                           |
      |                                                              | Post /api/credential/login/submit                                         |
      |                                                              | Cookie: credentialJWT                                                     |
      |                                                              | KiltMsg{submit-credential}                                                |
      |                                                              |-------------------------------------------------------------------------->|
      |                                                              |                      ---------------------------------------------------\ |
      |                                                              |                      | Verify the credential.                           |-|
      |                                                              |                      | Note the DID inside the credential.              | |
      |                                                              |                      | If verification was successful,                  | |
      |                                                              |                      | DID was authenticated with provided credentials. | |
      |                                                              |                      |--------------------------------------------------| |
      |                                                              |                      ---------------------------------------------------\ |
      |                                                              |                      | The login with credential process was completed. |-|
      |                                                              |                      | An authentication token is given to the user.    | |
      |                                                              |                      | It's all like web2 from here on.                 | |
      |                                                              |                      |--------------------------------------------------| |
      |                                                              |                                                                           |
      |                                                              |                                                                    200 OK |
      |                                                              |                                set-cookie: accessJWT{authenticationToken} |
      |                                                              |<--------------------------------------------------------------------------|
      |                                                              |                                                                           |
```
