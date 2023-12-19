---
id: kilt-extension-api
title: KILT Extension API
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The KILT Extension API is a JavaScript and TypeScript library that provides helper functions for interacting with KILT extensions.
It facilitates communication between your application and KILT extensions.



## Installation

Add the package:

```bash npm2yarn
npm install --save @kiltprotocol/kilt-extension-api
```

## Initialize Extension API

Before your application can communicate with KILT extensions, call the `initializeKiltExtensionAPI()` method to signal the API versions supported by your application so the extension can inject the appropriate scripts.
This should happen at the earliest point possible on page load, or it won't inject the scripts.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```ts
  import { initializeKiltExtensionAPI } from 'kilt-extension-api'

  initializeKiltExtensionAPI()
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```js
  import { initializeKiltExtensionAPI } from 'kilt-extension-api'

  initializeKiltExtensionAPI()
  ```

  </TabItem>
</Tabs>

## Get Extensions

The `getExtensions()` method returns a list of extensions injected into the browser.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```ts
  import { getExtensions } from 'kilt-extension-api'

  const extensions = getExtensions()
  console.log(extensions)
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```js
  import { getExtensions } from 'kilt-extension-api'

  const extensions = getExtensions()
  console.log(extensions)
  ```

  </TabItem>
</Tabs>

## Watch Extensions

Extensions can take longer to load than the host application, so the first call to `getExtensions()` might not return all available extensions.
To receive updates on extensions as they load, use the `watchExtensions` method.

The following is an example of how you can use this method in a React application:

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

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

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```js
  import { watchExtensions } from "kilt-extension-api"

  function App() {
    const [extensions, setExtensions] = useState([])

    useEffect(() => {
      watchExtensions(extensions => {
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

  </TabItem>
</Tabs>

## DID Configuration

You need [an existing DID configuration](../../01_sdk/02_cookbook/01_dids/00_generate_keys.md) setup for your application to communicate with KILT extensions.

This library helps set up the [Well-Known DID Configuration](https://identity.foundation/.well-known/resources/did-configuration/) as required by the [KILT Credential API specification](https://github.com/KILTprotocol/spec-ext-credential-api).

### Using the CLI Tool

This library includes a CLI tool to create a [DID Configuration Resource](https://identity.foundation/.well-known/resources/did-configuration/#did-configuration-resource).
This resource is necessary to establish a secure, end-to-end encrypted communication channel between a conforming browser extension and the application backend.

Run the CLI tool using Yarn as follows:

```bash
yarn createDidConfig --did <your DID> \
    --origin <your domain> \
    --assertionMethod <id of your DID's assertionMethod key> \
    --seed <seed or mnemonic of the assertionMethod key>
```

:::info

- `did`: DID of the issuer (and subject) of the Domain Linkage Credential. If omitted, the tool attempts to infer this from the `assertionMethod`.
- `seed`: Mnemonic or seed for the `assertionMethod` key used for issuing a new credential.
- `origin`: The [HTTP origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) or URL of the web application for which you are creating the credential. Note that this must be an https:// URL with an empty path component. The resulting credential is valid for all paths under this origin. 
- `assertionMethod`: ID of the `assertionMethod` key used for issuing a new credential.

:::

Use the tool's `--help` flag to see all available options:

```bash
yarn createDidConfig --help
```

### Integration into an App

Similar functionality to the CLI tool is available for use in application code using the `@kiltprotocol/extension-api/wellKnownDidConfiguration` subpath:

```ts
import { createCredential, didConfigResourceFromCredential } from '@kiltprotocol/extension-api/wellKnownDidConfiguration'

const credential = await createCredential(
  ({ data }) => {
    //...DID signing logic
  },
  'https://example.com',
  'did:kilt:4pnfkRn5UurBJTW92d9TaVLR2CqJdY4z5HPjrEbpGyBykare'
)

const didConfigResource = didConfigResourceFromCredential(credential)
```

You can also verify a DID configuration resource within an extension context. From either a 3rd party DID resource:

```ts
import { verifyDidConfigResource } from '@kiltprotocol/extension-api/wellKnownDidConfiguration'

let didConfigResource = … // Load from https://socialkyc.io/.well-known/did-configuration.json or some other source

const didLinkedToOrigin = await verifyDidConfigResource(didConfigResource, 'https://socialkyc.io')
```

Or, if you expect a specific DID:

```ts
import { verifyDidConfigResource } from '@kiltprotocol/extension-api/wellKnownDidConfiguration'

await verifyDidConfigResource(
  didConfigResource,
  'https://example.com',
  'did:kilt:4pnfkRn5UurBJTW92d9TaVLR2CqJdY4z5HPjrEbpGyBykare'
)
```