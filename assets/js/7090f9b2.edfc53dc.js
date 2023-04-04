"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7543],{323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(6823);var l=a(4430);const o={id:"ctypes",title:"CTypes"},s=void 0,p={unversionedId:"concepts/credentials/ctypes",id:"concepts/credentials/ctypes",title:"CTypes",description:"CTypes are data types specific to KILT that define the structure of a claim (i.e., its data model).",source:"@site/docs/concepts/05_credentials/02_ctypes.md",sourceDirName:"concepts/05_credentials",slug:"/concepts/credentials/ctypes",permalink:"/docs/concepts/credentials/ctypes",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/05_credentials/02_ctypes.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:2,frontMatter:{id:"ctypes",title:"CTypes"},sidebar:"concepts",previous:{title:"Overview",permalink:"/docs/concepts/credentials/overview"},next:{title:"Claims",permalink:"/docs/concepts/credentials/claiming"}},c={},d=[{value:"JSON Schema",id:"json-schema",level:2},{value:"Properties",id:"properties",level:3},{value:"CType Metadata",id:"ctype-metadata",level:2},{value:"Hashing",id:"hashing",level:2},{value:"Constructing the <code>hash</code> for the <code>$id</code>",id:"constructing-the-hash-for-the-id",level:3},{value:"Storing and Querying CTypes",id:"storing-and-querying-ctypes",level:2}],h={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CTypes are data types specific to KILT that define the structure of a claim (i.e., its data model).\nCTypes are based on JSON Schema, a standard used to annotate and validate JSON documents.\nThe schema defines which properties exist and what their type should be, e.g., a string, a number, an object, etc."),(0,i.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,i.kt)("p",null,"KILT uses ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," (currently draft-07) to validate and annotate data in a strict format.\nThis data format is used to define ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/sdk-js/blob/master/packages/core/src/ctype/CType.schemas.ts"},"CType models"),".\nThe following are all required properties of the schema, with no additional properties allowed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Identifier"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"$id")," in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"kilt:ctype:0x{cTypeHash}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"KILT specific JSON-Schema"),": Accessible at ",(0,i.kt)("a",{parentName:"li",href:"http://kilt-protocol.org/draft-01/ctype#"},"http://kilt-protocol.org/draft-01/ctype#"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Title"),": Defines a user-friendly name for the CType that makes it easier for users to contextualize."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Properties"),": Set of fields (e.g., name, birthdate) that the CType can contain, and hence that the Claimer can have attested.")),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"When creating a new CType schema, the following properties are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One of the following fields: ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"$ref")),(0,i.kt)("li",{parentName:"ul"},"A type of ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"integer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," to define the attribute"),(0,i.kt)("li",{parentName:"ul"},"Nested JSON schemas can be referenced by a ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"$ref")," (giving the advantage of being able to reference previously-created CTypes)"),(0,i.kt)("li",{parentName:"ul"},"The format field is optionally:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Date")," format e.g., 2012-04-23T18:25:43.511Z"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Time")," format e.g., T18:25:43.511Z"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"URI")," format e.g., ",(0,i.kt)("a",{parentName:"li",href:"https://www.example.com"},"https://www.example.com"))))),(0,i.kt)(r.Z,{className:"language-json",title:"CType schema example",mdxType:"CodeBlock"},'{\n  "$schema": "http://kilt-protocol.org/draft-01/ctype#",\n  "title": "Drivers License by did:kilt:4t9FPVbcN42UMxt3Z2Y4Wx38qPL8bLduAB11gLZSwn5hVEfH",\n  "properties": {\n    "name": {\n      "type": "string"\n    },\n    "age": {\n      "type": "integer"\n    },\n    "id": {\n      "type": "string"\n    }\n  },\n  "type": "object"\n}'),(0,i.kt)("p",null,"The CType schema is afterwards hashed to generate its own identifier, and it becomes the full CType object:"),(0,i.kt)(r.Z,{className:"language-json",title:"Full CType example",mdxType:"CodeBlock"},l.Z),(0,i.kt)("h2",{id:"ctype-metadata"},"CType Metadata"),(0,i.kt)("p",null,"CType Metadata can be linked to a given CType to provide title and descriptions in different languages for the whole CType and its properties."),(0,i.kt)("h2",{id:"hashing"},"Hashing"),(0,i.kt)("p",null,"The hash of the CType is used to identify and anchor it to the KILT blockchain."),(0,i.kt)("h3",{id:"constructing-the-hash-for-the-id"},"Constructing the ",(0,i.kt)("inlineCode",{parentName:"h3"},"hash")," for the ",(0,i.kt)("inlineCode",{parentName:"h3"},"$id")),(0,i.kt)("p",null,"KILT uses the hashing algorithm ",(0,i.kt)("inlineCode",{parentName:"p"},"blake2b256")," to compute the hash of CTypes.\nBefore hashing, the CType object is sorted by a canonicalization algorithm to ensure that semantically equivalent CTypes with different order of their properties result in the same final hash."),(0,i.kt)("p",null,"The hash is computed from the following fields of the CType schema:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"properties"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ref")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"))),(0,i.kt)("p",null,"A typical CType ID would look like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"kilt:ctype:0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d5101"),"."),(0,i.kt)("h2",{id:"storing-and-querying-ctypes"},"Storing and Querying CTypes"),(0,i.kt)("p",null,"As of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/releases/tag/1.9.0"},"KILT runtime 1.9.0"),", CTypes can be queried directly from any KILT archive node!"),(0,i.kt)("p",null,"After creating a CType, its full content is included only in the blockchain block history, while its hash and creation block number is anchored to the blockchain state."),(0,i.kt)("p",null,"Querying the full content of a CType then becomes trivial, since the CType hash can be used to look up its creation block number, and then that information can be used to ask any KILT archive node for the extrinsic information about the CType creation.\nThe information includes the whole CType, which is now available for the user to, e.g., verify credentials against it."),(0,i.kt)("p",null,"For a detailed developer-oriented guide to KILT CTypes, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/ctype-creation"},"CType Cookbook section"),"."))}m.isMDXComponent=!0},4430:(e,t,a)=>{a.d(t,{Z:()=>n});const n='{\n  "$id": "kilt:ctype:0xc22f85da01c18c1b48acf9556ac7167247ce253cc10373ea77f50fc91521d478",\n  "$schema": "http://kilt-protocol.org/draft-01/ctype#",\n  "properties": {\n    "age": {\n      "type": "integer"\n    },\n    "id": {\n      "type": "string"\n    },\n    "name": {\n      "type": "string"\n    }\n  },\n  "title": "Drivers License by did:kilt:4t9FPVbcN42UMxt3Z2Y4Wx38qPL8bLduAB11gLZSwn5hVEfH",\n  "type": "object"\n}'}}]);