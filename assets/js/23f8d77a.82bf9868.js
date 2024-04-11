(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3324],{48952:e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id=48952,e.exports=o},43792:(e,o,t)=>{"use strict";t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>D,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var n=t(17624),i=t(4552),r=t(96020);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function exportDid(\n  did: Kilt.DidDocument,\n  exportType: 'application/json' | 'application/ld+json'\n) {\n  const conformingDidDocument = Kilt.Did.exportToDidDocument(did, exportType)\n\n  // Will print the DID URI.\n  console.log(conformingDidDocument.id)\n\n  // Will print all the public keys associated with the DID.\n  console.log(conformingDidDocument.verificationMethod)\n\n  // Will print all the assertion keys IDs.\n  console.log(conformingDidDocument.assertionMethod)\n\n  // Will print all the encryption keys IDs.\n  console.log(conformingDidDocument.keyAgreement)\n\n  // Will print all the delegation keys IDs.\n  console.log(conformingDidDocument.capabilityDelegation)\n\n  // Will print all the external services referenced inside the `DidDocument` instance.\n  console.log(conformingDidDocument.service)\n\n  return conformingDidDocument\n}\n",d={id:"did-export",title:"Exporting a KILT DID"},c=void 0,l={id:"develop/sdk/cookbook/dids/did-export",title:"Exporting a KILT DID",description:"The DID Document exporter provides the functionality needed to convert an instance of an SDK DidDocument object into a document that is compliant with the W3C specification.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/08_did_export.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/did-export",permalink:"/docs/develop/sdk/cookbook/dids/did-export",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/08_did_export.md",tags:[],version:"current",lastUpdatedAt:1712840460,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:8,frontMatter:{id:"did-export",title:"Exporting a KILT DID"},sidebar:"sdk",previous:{title:"Generate and Verify a DID Signature",permalink:"/docs/develop/sdk/cookbook/dids/did-signature"},next:{title:"Claim a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-claim"}},a={},p=[{value:"How to use the exporter",id:"how-to-use-the-exporter",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",p:"p",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["The DID Document exporter provides the functionality needed to convert an instance of an SDK ",(0,n.jsx)(o.code,{children:"DidDocument"})," object into a document that is compliant with the ",(0,n.jsx)(o.a,{href:"https://www.w3.org/TR/did-core/",children:"W3C specification"}),".\nThis component is required for the KILT plugin for the ",(0,n.jsx)(o.a,{href:"https://dev.uniresolver.io/",children:"DIF Universal Resolver"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"how-to-use-the-exporter",children:"How to use the exporter"}),"\n",(0,n.jsxs)(o.p,{children:["The exporter interface and used types are part of the ",(0,n.jsx)(o.code,{children:"@kiltprotocol/types"})," package, while the actual ",(0,n.jsx)(o.code,{children:"DidDocumentExporter"})," is part of the ",(0,n.jsx)(o.code,{children:"@kiltprotocol/did"})," package.\nBoth types and DID packages are accessible via the top-level ",(0,n.jsx)(o.code,{children:"@kiltprotocol/sdk-js"})," import.\nThe following shows how to use the exporter to generate a W3C-compliant DID Document from a given ",(0,n.jsx)(o.code,{children:"DidDocument"}),", which can represent either a light or a full DID."]}),"\n",(0,n.jsx)(r.c,{children:s})]})}function D(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},96020:(e,o,t)=>{"use strict";t.d(o,{c:()=>D});var n=t(11504),i=t(28264),r=t(46352),s=t(58440),d=t(14300),c=t(28168),l=t(61268),a=t(87768),p=t(1608),h=t(17624);const D=e=>{let{children:o,fileName:t,...D}=e;const u=o,[m,f]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:k}}}=(0,i.c)(),x=(0,n.useMemo)((()=>{const{code:e}=(0,r.transform)(u,{plugins:["transform-typescript"],retainLines:!0});return e}),[u]);(0,n.useEffect)((()=>{s.E9(x,{parser:"babel",plugins:[d.c,c.cp],...k}).then(f)}),[k,x]);const g=[{fileName:t?`${t}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:m,fileID:"js",fileLabel:"Javascript"}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(l.c,{groupId:"ts-js-choice",children:g.map((e=>(0,h.jsx)(a.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,h.jsx)(p.c,{...D,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);