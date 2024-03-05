"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1288],{77120:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(17624),s=i(4552),r=i(1608);const a='{\n  "$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/",\n  "title": "Drivers License by did:kilt:4t9FPVbcN42UMxt3Z2Y4Wx38qPL8bLduAB11gLZSwn5hVEfH",\n  "additionalProperties": false,\n  "properties": {\n    "name": {\n      "type": "string"\n    },\n    "age": {\n      "type": "integer"\n    },\n    "id": {\n      "type": "string"\n    }\n  },\n  "type": "object"\n}';var c=i(7496);const o={id:"ctypes",title:"CTypes"},d=void 0,l={id:"concepts/credentials/ctypes",title:"CTypes",description:"CTypes are data types specific to KILT that define the structure of a claim (i.e., its data model).",source:"@site/docs/concepts/05_credentials/02_ctypes.md",sourceDirName:"concepts/05_credentials",slug:"/concepts/credentials/ctypes",permalink:"/docs/concepts/credentials/ctypes",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/05_credentials/02_ctypes.md",tags:[],version:"current",lastUpdatedAt:1709637884,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:2,frontMatter:{id:"ctypes",title:"CTypes"},sidebar:"concepts",previous:{title:"Overview",permalink:"/docs/concepts/credentials/overview"},next:{title:"Claims",permalink:"/docs/concepts/credentials/claiming"}},h={},p=[{value:"JSON Schema",id:"json-schema",level:2},{value:"Properties",id:"properties",level:3},{value:"CType Metadata",id:"ctype-metadata",level:2},{value:"Hashing",id:"hashing",level:2},{value:"Constructing the <code>hash</code> for the <code>$id</code>",id:"constructing-the-hash-for-the-id",level:3},{value:"Storing and Querying CTypes",id:"storing-and-querying-ctypes",level:2}];function y(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"CTypes are data types specific to KILT that define the structure of a claim (i.e., its data model).\nCTypes are based on JSON Schema, a standard used to annotate and validate JSON documents.\nThe schema defines which properties exist and what their type should be, e.g., a string, a number, an object, etc."}),"\n",(0,n.jsx)(t.h2,{id:"json-schema",children:"JSON Schema"}),"\n",(0,n.jsxs)(t.p,{children:["KILT uses ",(0,n.jsx)(t.a,{href:"https://json-schema.org/",children:"JSON Schema"})," (currently draft-07) to validate and annotate data in a strict format.\nThis data format is used to define ",(0,n.jsx)(t.a,{href:"https://github.com/KILTprotocol/sdk-js/blob/master/packages/core/src/ctype/CType.schemas.ts",children:"CType models"}),".\nThe following are all required properties of the schema:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Identifier"}),": ",(0,n.jsx)(t.code,{children:"$id"})," in the format ",(0,n.jsx)(t.code,{children:"kilt:ctype:0x{cTypeHash}"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["Reference to CType metaschema (",(0,n.jsx)(t.code,{children:"$schema"}),")"]}),": Describes what a valid CType must looks like. The latest metaschema is accessible at ",(0,n.jsx)(t.a,{href:"ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/",children:"ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Title"}),": Defines a user-friendly name for the CType that makes it easier for users to contextualize."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Properties"}),": Set of fields (e.g., name, birthdate) that the CType can contain, and hence that the Claimer can have attested."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Type"}),": Is always ",(0,n.jsx)(t.code,{children:'"object"'}),",  instructing the JSON schema validator to expect an object (where each property is a claim about the Claimer in the credential)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Additional properties"}),": In newer CTypes, ",(0,n.jsx)(t.em,{children:"additionalProperties"})," must be present and must be set to ",(0,n.jsx)(t.code,{children:"false"}),", restricting allowable claims in a credential to those listed in ",(0,n.jsx)(t.code,{children:"properties"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"Deprecation Warning: CType metaschema draft-01"}),(0,n.jsxs)(t.p,{children:["CTypes based on the ",(0,n.jsx)(t.code,{children:"[http://kilt-protocol.org/draft-01/ctype#](http://kilt-protocol.org/draft-01/ctype%23%60)"})," metaschema are susceptible to faulty or malicious attester integrations that may introduce unexpected properties to a claim.\nDue to this vulnerability, this version of the metaschema is deprecated and its use is discouraged in the creation of new CTypes.\nFor optimal security and functionality, it is recommended to use SDK version ",(0,n.jsx)(t.code,{children:"0.33.0"})," or later for creating CTypes.\nThis newer version defaults to using the updated metaschema available at ",(0,n.jsx)(t.a,{href:"ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/%60",children:(0,n.jsx)(t.code,{children:"ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/"})}),"."]}),(0,n.jsx)(t.p,{children:"This also means you should update existing CTypes."}),(0,n.jsx)(t.p,{children:"While existing CTypes will continue to work in the short term, we advise to upgrade to the latest metaschema at your earliest convenience."}),(0,n.jsxs)(t.p,{children:["Old Property Value:  ",(0,n.jsx)(t.code,{children:'"$schema": "http://kilt-protocol.org/draft-01/ctype#"'})]}),(0,n.jsxs)(t.p,{children:["New Property Value:  ",(0,n.jsx)(t.code,{children:'"$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/"'})]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Migration instructions:"})}),(0,n.jsx)(t.p,{children:"Attesters are recommended to transition to issuing credentials using upgraded versions of CTypes currently in use."}),(0,n.jsxs)(t.p,{children:["Using sdk version ",(0,n.jsx)(t.code,{children:"0.33.0"})," or later, you can produce a copy of an existing CType ",(0,n.jsx)(t.code,{children:"oldCType"})," as follows:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const newCType = CType.fromProperties(oldCType.title, oldCType.properties, 'V1')\n"})}),(0,n.jsxs)(t.p,{children:["The new CType will have the same title and properties as the existing one, but will be based on the new metaschema, resulting in a different hash and id.\nAfter ",(0,n.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/claiming/ctype-creation",children:"registering the new CType on the Kilt blockchain"}),", you can use the new CType as a drop-in replacement in issuing credentials.\nDepending verifiers are recommended to accept both the old and new CType during a transition period.\nTest thoroughly to ensure the correct behaviour and functionality of the new CTypes in your application."]}),(0,n.jsx)(t.p,{children:"If you encounter any issues during the migration process or have questions, refer to the documentation or seek support from the relevant community."})]}),"\n",(0,n.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.p,{children:"When creating a new CType schema, the following properties are required:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["One of the following fields: ",(0,n.jsx)(t.code,{children:"type"})," or ",(0,n.jsx)(t.code,{children:"$ref"})]}),"\n",(0,n.jsxs)(t.li,{children:["A type of ",(0,n.jsx)(t.code,{children:"string"}),", ",(0,n.jsx)(t.code,{children:"integer"}),", ",(0,n.jsx)(t.code,{children:"number"})," or ",(0,n.jsx)(t.code,{children:"boolean"})," to define the attribute"]}),"\n",(0,n.jsxs)(t.li,{children:["Nested JSON schemas can be referenced by a ",(0,n.jsx)(t.code,{children:"uri"})," using ",(0,n.jsx)(t.code,{children:"$ref"})," (giving the advantage of being able to reference previously-created CTypes)"]}),"\n",(0,n.jsxs)(t.li,{children:["The format field is optionally:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Date"})," format e.g., 2012-04-23T18:25:43.511Z"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Time"})," format e.g., T18:25:43.511Z"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"URI"}),' format e.g., "',(0,n.jsx)(t.a,{href:"https://www.example.com",children:"https://www.example.com"}),'"']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.c,{className:"language-json",title:"CType schema example",children:a}),"\n",(0,n.jsx)(t.p,{children:"The CType schema is afterwards hashed to generate its own identifier, and it becomes the full CType object:"}),"\n",(0,n.jsx)(r.c,{className:"language-json",title:"Full CType example",children:c.c}),"\n",(0,n.jsx)(t.h2,{id:"ctype-metadata",children:"CType Metadata"}),"\n",(0,n.jsx)(t.p,{children:"CType Metadata can be linked to a given CType to provide title and descriptions in different languages for the whole CType and its properties."}),"\n",(0,n.jsx)(t.h2,{id:"hashing",children:"Hashing"}),"\n",(0,n.jsx)(t.p,{children:"The hash of the CType is used to identify and anchor it to the KILT blockchain."}),"\n",(0,n.jsxs)(t.h3,{id:"constructing-the-hash-for-the-id",children:["Constructing the ",(0,n.jsx)(t.code,{children:"hash"})," for the ",(0,n.jsx)(t.code,{children:"$id"})]}),"\n",(0,n.jsxs)(t.p,{children:["KILT uses the hashing algorithm ",(0,n.jsx)(t.code,{children:"blake2b256"})," to compute the hash of CTypes.\nBefore hashing, the CType object is sorted by a canonicalization algorithm to ensure that semantically equivalent CTypes with different order of their properties result in the same final hash."]}),"\n",(0,n.jsx)(t.p,{children:"The hash is computed from the following fields of the CType schema:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"$schema"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"properties"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"key"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"$ref"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"type"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"format"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"title"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"type"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A typical CType ID would look like this: ",(0,n.jsx)(t.code,{children:"kilt:ctype:0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d5101"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"storing-and-querying-ctypes",children:"Storing and Querying CTypes"}),"\n",(0,n.jsxs)(t.p,{children:["As of the ",(0,n.jsx)(t.a,{href:"https://github.com/KILTprotocol/kilt-node/releases/tag/1.9.0",children:"KILT runtime 1.9.0"}),", CTypes can be queried directly from any KILT archive node!"]}),"\n",(0,n.jsx)(t.p,{children:"After creating a CType, its full content is included only in the blockchain block history, while its hash and creation block number is anchored to the blockchain state."}),"\n",(0,n.jsx)(t.p,{children:"Querying the full content of a CType then becomes trivial, since the CType hash can be used to look up its creation block number, and then that information can be used to ask any KILT archive node for the extrinsic information about the CType creation.\nThe information includes the whole CType, which is now available for the user to, e.g., verify credentials against it."}),"\n",(0,n.jsx)(t.p,{children:"For adding a CType, a constant fee of 0.001 KILT is required."}),"\n",(0,n.jsxs)(t.p,{children:["For a detailed developer-oriented guide to KILT CTypes, see our ",(0,n.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/claiming/ctype-creation",children:"CType Cookbook section"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},7496:(e,t,i)=>{i.d(t,{c:()=>n});const n='{\n  "$id": "kilt:ctype:0x4f1d68ac46daf4613181b33b16faaf10cf94879dc2246d7485dc2ccbb843641d",\n  "$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/",\n  "additionalProperties": false,\n  "properties": {\n    "age": {\n      "type": "integer"\n    },\n    "id": {\n      "type": "string"\n    },\n    "name": {\n      "type": "string"\n    }\n  },\n  "title": "Drivers License by did:kilt:4t9FPVbcN42UMxt3Z2Y4Wx38qPL8bLduAB11gLZSwn5hVEfH",\n  "type": "object"\n}'}}]);