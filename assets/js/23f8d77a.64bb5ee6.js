(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2201],{5380:e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id=5380,e.exports=o},4766:(e,o,t)=>{"use strict";t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>D,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var n=t(5893),i=t(1151),r=t(1909);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function exportDid(\n  did: Kilt.DidDocument,\n  exportType: 'application/json' | 'application/ld+json'\n) {\n  const conformingDidDocument = Kilt.Did.exportToDidDocument(did, exportType)\n\n  // Will print the DID URI.\n  console.log(conformingDidDocument.id)\n\n  // Will print all the public keys associated with the DID.\n  console.log(conformingDidDocument.verificationMethod)\n\n  // Will print all the assertion keys IDs.\n  console.log(conformingDidDocument.assertionMethod)\n\n  // Will print all the encryption keys IDs.\n  console.log(conformingDidDocument.keyAgreement)\n\n  // Will print all the delegation keys IDs.\n  console.log(conformingDidDocument.capabilityDelegation)\n\n  // Will print all the external services referenced inside the `DidDocument` instance.\n  console.log(conformingDidDocument.service)\n\n  return conformingDidDocument\n}\n",d={id:"did-export",title:"Exporting a KILT DID"},l=void 0,c={id:"develop/sdk/cookbook/dids/did-export",title:"Exporting a KILT DID",description:"The DID Document exporter provides the functionality needed to convert an instance of an SDK DidDocument object into a document that is compliant with the W3C specification.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/08_did_export.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/did-export",permalink:"/docs/develop/sdk/cookbook/dids/did-export",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/08_did_export.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:8,frontMatter:{id:"did-export",title:"Exporting a KILT DID"},sidebar:"sdk",previous:{title:"Generate and Verify a DID Signature",permalink:"/docs/develop/sdk/cookbook/dids/did-signature"},next:{title:"Claim a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-claim"}},a={},p=[{value:"How to use the exporter",id:"how-to-use-the-exporter",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["The DID Document exporter provides the functionality needed to convert an instance of an SDK ",(0,n.jsx)(o.code,{children:"DidDocument"})," object into a document that is compliant with the ",(0,n.jsx)(o.a,{href:"https://www.w3.org/TR/did-core/",children:"W3C specification"}),".\nThis component is required for the KILT plugin for the ",(0,n.jsx)(o.a,{href:"https://dev.uniresolver.io/",children:"DIF Universal Resolver"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"how-to-use-the-exporter",children:"How to use the exporter"}),"\n",(0,n.jsxs)(o.p,{children:["The exporter interface and used types are part of the ",(0,n.jsx)(o.code,{children:"@kiltprotocol/types"})," package, while the actual ",(0,n.jsx)(o.code,{children:"DidDocumentExporter"})," is part of the ",(0,n.jsx)(o.code,{children:"@kiltprotocol/did"})," package.\nBoth types and DID packages are accessible via the top-level ",(0,n.jsx)(o.code,{children:"@kiltprotocol/sdk-js"})," import.\nThe following shows how to use the exporter to generate a W3C-compliant DID Document from a given ",(0,n.jsx)(o.code,{children:"DidDocument"}),", which can represent either a light or a full DID."]}),"\n",(0,n.jsx)(r.Z,{children:s})]})}function D(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1909:(e,o,t)=>{"use strict";t.d(o,{Z:()=>h});t(7294);var n=t(2263),i=t(2175),r=t(4935),s=t(4990),d=t(9966),l=t(4866),c=t(5162),a=t(9286),p=t(5893);const h=e=>{let{children:o,fileName:t,...h}=e;const D=o,{code:m}=(0,i.transform)(D,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:u}}}=(0,n.Z)(),f=r.WU(m,{parser:"babel",plugins:[s.Z,d.ZP],...u}).finally((()=>{var e=[{fileName:t?`${t}.ts`:void 0,fileContents:D,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:f,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.Z,{groupId:"ts-js-choice",children:e.map((e=>(0,p.jsx)(c.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(a.Z,{...h,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}))}}}]);