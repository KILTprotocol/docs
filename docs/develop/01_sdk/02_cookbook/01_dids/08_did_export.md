---
id: did-export
title: Exporting a KILT DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidExport from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/11_did_export.ts';

The DID Document exporter provides the functionality needed to convert an instance of an SDK `DidDocument` object into a document that is compliant with the [W3C specification](https://www.w3.org/TR/did-core/).
This component is required for the KILT plugin for the [DIF Universal Resolver](https://dev.uniresolver.io/).

## How to use the exporter

The exporter interface and used types are part of the `@kiltprotocol/types` package, while the actual `DidDocumentExporter` is part of the `@kiltprotocol/did` package. 
Both types and DID packages are accessible via the top-level `@kiltprotocol/sdk-js` import.
The following shows how to use the exporter to generate a W3C-compliant DID Document from a given `DidDocument`, which can represent either a light or a full DID.

<TsJsBlock>
  {DidExport}
</TsJsBlock>