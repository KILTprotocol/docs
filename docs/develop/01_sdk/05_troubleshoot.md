---
id: troubleshoot-sdk
title: Troubleshoot
---

Solutions and workarounds for common or unresolved issues.

## Webpack < 5 used to include polyfills

```
ERROR in ./node_modules/cbor/lib/commented.js 3:15-32
Module not found: Error: Can't resolve 'stream' in 'node_modules/cbor/lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case.
Verify if you need this module and configure a polyfill for it.
```

### Solution

The problem occurs because one of the dependecies you are using in your project (or used by a library you depend on) relies on NodeJS built-ins which are not available in a browser context.
You should aim to identify and replace these dependencies with browser-compatible alternatives.

You might see the above error when using older versions of the KILT SDK with `create-react-app`. Make sure that you are using `@kiltprotocol/sdk-js` version 0.33.0 and above, which work in a browser context out-of-the-box.

If the affected dependencies cannot be removed or replaced, you may need to look into setting up polyfills for the required NodeJS built-ins.

## `redeclaration of import Buffer`

```
Uncaught SyntaxError: redeclaration of import Buffer
```

### Solution

Your project might be using polyfills for the NodeJS built-in `Buffer`, which can cause conflicts with some polkadot-js libraries such as `@polkadot/react-identicon`. Try if upgrading the SDK and its dependencies to their latest versions allows you to drop these polyfills from your configuration.
