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
This is no longer the case. Verify if you need this module and configure a polyfill for it.
```

### Solution

The problem occurs because a few crypto libraries inside the SDK require polyfills for node.js functions.
You might see the above error, when using the KILT SDK inside a `create-react-app`.
There are two options to solve this.

1. Eject your create react app and configure the polyfills manually in your webpack config.
2. Use ViteJS [with our recommended configuration](./04_integrate/04_vitejs.md)

## `redeclaration of import Buffer`

```
Uncaught SyntaxError: redeclaration of import Buffer
```

### Solution

You might use `@polkadot/react-identicon` to display an identicon or another library that conflict with the polyfill provided by our ViteJS configuration.
There is currently no better solution but to remove the dependency and try to use an alternative.

For `@polkadot/react-identicon`, we suggest to use `@polkadot/ui-shared` and implement your own react identicon.
You can take inspiration from the [Stakeboard](https://github.com/BTE-Trusted-Entity/stakeboard/blob/8a9713f786a05487daa4bfc394c95b60820c5147/src/components/Identicon/Identicon.tsx).
