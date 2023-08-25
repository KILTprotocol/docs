---
id: kilt-extension-api
title: KILT Extension API
---

KILT Extension API is a JavaScript/TypeScript library that provides helper functions for interacting with KILT enabled extensions.
It facilitates seamless communication between your application and KILT extensions.

## Getting Started

Before you can communicate with KILT extensions, you must call the `initializeKiltExtensionAPI()` function to signal the API versions supported by your application.
This is crucial for the extension to inject the appropriate scripts into the website.

```ts
import { initializeKiltExtensionAPI } from 'kilt-extension-api'

initializeKiltExtensionAPI()
```

## Get Extensions

The `getExtensions()` function returns a list of extensions currently injected into the website.

```ts
import { getExtensions } from 'kilt-extension-api'

const extensions = getExtensions()
```

## Watch Extensions

Extensions may take longer to load than the website.
Therefore, the first call to `getExtensions()` might not return all available extensions.
To receive updates on additional extensions as they load, you can use `watchExtensions`.

Here's an example of how you can use this function in a React application:

```ts
import { watchExtensions, Types } from 'kilt-extension-api'

export default function Home(): JSX.Element {
  const [extensions, setExtensions] = useState<
    Types.InjectedWindowProvider<Types.PubSubSessionV1 | Types.PubSubSessionV2>[]
  >([])

  useEffect(() => {
    watchExtensions((extensions) => {
      setExtensions(extensions)
    })
  }, [])

  return (
    <>
      <h2>Extensions</h2>
      <ul>
        {extensions.map((ext, i) => (
          <li key={i}>{ext.name}</li>
        ))}
      </ul>
    </>
  )
}
```

## Well-Known DID Configuration

This library also aids in setting up the [Well-Known DID Configuration](https://identity.foundation/.well-known/resources/did-configuration/) as required by the [KILT Credential API specification](https://github.com/KILTprotocol/spec-ext-credential-api).

### Using the CLI Tool

A CLI tool is included in this library to create a [DID Configuration Resource](https://identity.foundation/.well-known/resources/did-configuration/#did-configuration-resource) as specified in the above documentation. This resource is necessary to establish a secure, end-to-end encrypted communication channel between a conforming browser extension and the application backend.

To start using this tool, you can add this package to your application using `yarn add --dev kilt-extension-api` or install it globally if needed (`yarn global add kilt-extension-api`).

You can run the CLI tool using Yarn as follows:

```bash
yarn createDidConfig --did <your DID> --origin <your domain> --assertionMethod <id of your DID's assertionMethod key> --seed <seed or mnemonic of the assertionMethod key>
```

For additional commands and configuration options, refer to the CLI tool's helper:

```bash
yarn createDidConfig --help
```

### Integration into Your App

Similar functionality to the CLI tool is available for import into your Node.js scripts using the subpath `kilt-extension-api/wellKnownDidConfiguration`:

```ts
import { createCredential, didConfigResourceFromCredential } from './wellKnownDidConfiguration/index.js'

const credential = await createCredential(
  ({ data }) => {
    //...DID signing logic
  },
  'https://example.com',
  'did:kilt:4pnfkRn5UurBJTW92d9TaVLR2CqJdY4z5HPjrEbpGyBykare'
)

const didConfigResource = didConfigResourceFromCredential(credential)
```

This module also assists in verifying a DID configuration resource within an extension context:

```ts
import { verifyDidConfigResource } from './wellKnownDidConfiguration/index.js'

// load didConfigResource from https://example.com/.well-known/did-configuration.json

const didLinkedToOrigin = await verifyDidConfigResource(didConfigResource, 'https://example.com')

// or, if a specific DID is expected:

await verifyDidConfigResource(
  didConfigResource,
  'https://example.com',
  'did:kilt:4pnfkRn5UurBJTW92d9TaVLR2CqJdY4z5HPjrEbpGyBykare'
)
```
