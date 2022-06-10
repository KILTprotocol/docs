---
id: howto-integrate-browser
title: Browser
---

Integrating the KILT SDK into a browser application involves "tricking" the browser into believing it is running on a Node server.
This is needed for the advanced cryptographic primitives to work properly.

To simplify the setup, we recommend using the [KILT Distillery](./03_distillery.md) or something like [ViteJS](./04_vitejs.md) to bootstrap a project using the KILT SDK.
