(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2201],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var n=o(7462),i=o(7294),r=o(2263),s=o(3945),a=o(8182),d=o(2175),l=o(4866),c=o(5162),p=o(814);const m=e=>{let{children:t,fileName:o,...m}=e;const D=t,{code:u}=(0,d.transform)(D,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,r.Z)(),h=(0,s.format)(u,{parser:a.parsers.babel.parse,...k}),f=o?`${o}.ts`:void 0,g=o?`${o}.js`:void 0;return i.createElement(l.Z,{groupId:"ts-js-choice"},i.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},i.createElement(p.Z,(0,n.Z)({},m,{className:"language-ts",title:f}),D)),i.createElement(c.Z,{value:"js",label:"Javascript"},i.createElement(p.Z,(0,n.Z)({},m,{className:"language-js",title:g}),h)))}},2017:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),i=(o(7294),o(3905)),r=o(1909);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function exportDid(\n  did: Kilt.DidDocument,\n  exportType: 'application/json' | 'application/ld+json'\n) {\n  const conformingDidDocument = Kilt.Did.exportToDidDocument(did, exportType)\n\n  // Will print the DID URI.\n  console.log(conformingDidDocument.id)\n\n  // Will print all the public keys associated with the DID.\n  console.log(conformingDidDocument.verificationMethod)\n\n  // Will print all the assertion keys IDs.\n  console.log(conformingDidDocument.assertionMethod)\n\n  // Will print all the encryption keys IDs.\n  console.log(conformingDidDocument.keyAgreement)\n\n  // Will print all the delegation keys IDs.\n  console.log(conformingDidDocument.capabilityDelegation)\n\n  // Will print all the external services referenced inside the `DidDocument` instance.\n  console.log(conformingDidDocument.service)\n\n  return conformingDidDocument\n}\n",a={id:"did-export",title:"Exporting a KILT DID"},d=void 0,l={unversionedId:"develop/sdk/cookbook/dids/did-export",id:"develop/sdk/cookbook/dids/did-export",title:"Exporting a KILT DID",description:"The DID Document exporter provides the functionality needed to convert an instance of an SDK DidDocument object into a document that is compliant with the W3C specification.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/08_did_export.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/did-export",permalink:"/docs/develop/sdk/cookbook/dids/did-export",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/08_did_export.md",tags:[],version:"current",lastUpdatedAt:1681303842,formattedLastUpdatedAt:"Apr 12, 2023",sidebarPosition:8,frontMatter:{id:"did-export",title:"Exporting a KILT DID"},sidebar:"sdk",previous:{title:"Generate and Verify a DID Signature",permalink:"/docs/develop/sdk/cookbook/dids/did-signature"},next:{title:"Claim a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-claim"}},c={},p=[{value:"How to use the exporter",id:"how-to-use-the-exporter",level:2}],m={toc:p},D="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(D,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The DID Document exporter provides the functionality needed to convert an instance of an SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"DidDocument")," object into a document that is compliant with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"W3C specification"),".\nThis component is required for the KILT plugin for the ",(0,i.kt)("a",{parentName:"p",href:"https://dev.uniresolver.io/"},"DIF Universal Resolver"),"."),(0,i.kt)("h2",{id:"how-to-use-the-exporter"},"How to use the exporter"),(0,i.kt)("p",null,"The exporter interface and used types are part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@kiltprotocol/types")," package, while the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"DidDocumentExporter")," is part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@kiltprotocol/did")," package.\nBoth types and DID packages are accessible via the top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"@kiltprotocol/sdk-js")," import.\nThe following shows how to use the exporter to generate a W3C-compliant DID Document from a given ",(0,i.kt)("inlineCode",{parentName:"p"},"DidDocument"),", which can represent either a light or a full DID."),(0,i.kt)(r.Z,{mdxType:"TsJsBlock"},s))}u.isMDXComponent=!0}}]);