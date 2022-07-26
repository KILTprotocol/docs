---
id: welcome
title: Overview
---

To build a verifier dApp, you need a frontend to communicate with a KILT browser extension and a backend, which holds your keys and does the signing.
The backend authorizes itself by providing a so called “well-known did configuration” and the extension authorizes the claimer by signing a challenge given by the backend.
Communication will happen between the backend and the browser extension, proxied via the dApp frontend and follow the credential <a href="https://github.com/KILTprotocol/credential-api" target="_blank">API </a> spec.