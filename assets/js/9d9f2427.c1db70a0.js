(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1884],{48952:e=>{function i(e){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}i.keys=()=>[],i.resolve=i,i.id=48952,e.exports=i},74352:(e,i,t)=>{"use strict";t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=t(17624),s=t(4552),c=t(96020);const l="import * as Kilt from '@kiltprotocol/sdk-js'\n// Just a helper to get an extrinsic\nimport getExtrinsic from '../utils/getExtrinsic'\n\nexport async function signAndSubmitDidExtrinsic(\n  submitterAccount: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const extrinsic = getExtrinsic()\n\n  // This results in a DID-signed tx that can be signed and submitted to\n  // the KILT blockchain by the account authorized in this operation (the `submitterAccount`).\n  const didSignedExtrinsic = await Kilt.Did.authorizeTx(\n    fullDid,\n    extrinsic,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // Wrap the DID extrinsic in an account extrinsic.\n  await Kilt.Blockchain.signAndSubmitTx(didSignedExtrinsic, submitterAccount)\n}\n",r="import * as Kilt from '@kiltprotocol/sdk-js'\n// Just a helper to get an extrinsic\nimport getExtrinsic from '../utils/getExtrinsic'\n\nexport async function signAndSubmitDidExtrinsicBatch(\n  submitterAccount: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Build two extrinsics\n  const extrinsic1 = getExtrinsic()\n  const extrinsic2 = getExtrinsic()\n\n  // Create the DID-signed batch.\n  const authorizedBatch = await Kilt.Did.authorizeBatch({\n    batchFunction: api.tx.utility.batchAll,\n    did: fullDid,\n    extrinsics: [extrinsic1, extrinsic2],\n    sign: signCallback,\n    submitter: submitterAccount.address\n  })\n\n  // Wrap the DID extrinsic in an account extrinsic.\n  await Kilt.Blockchain.signAndSubmitTx(authorizedBatch, submitterAccount)\n}\n",o={id:"full-did-batch",title:"Build DID Extrinsics"},a=void 0,d={id:"develop/sdk/cookbook/dids/full-did-batch",title:"Build DID Extrinsics",description:"DID keys can be used to sign extrinsic.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/06_full_did_tx.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-batch",permalink:"/docs/develop/sdk/cookbook/dids/full-did-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/06_full_did_tx.md",tags:[],version:"current",lastUpdatedAt:1709637884,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:6,frontMatter:{id:"full-did-batch",title:"Build DID Extrinsics"},sidebar:"sdk",previous:{title:"Delete a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-delete"},next:{title:"Generate and Verify a DID Signature",permalink:"/docs/develop/sdk/cookbook/dids/did-signature"}},u={},h=[{value:"Single extrinsics",id:"single-extrinsics",level:2},{value:"Batch multiple extrinsics",id:"batch-multiple-extrinsics",level:2}];function x(e){const i={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"DID keys can be used to sign extrinsic.\nBut not every extrinsic can be signed using a DID.\nThe Spiritnet blockchain offers two types of extrinsics."}),"\n",(0,n.jsx)(i.p,{children:"The first type can only be called using an account.\nWe call them account extrinsic.\nThe second callable type are DID extrinsics.\nThey must be used for all KILT features like creating CTypes, issue attestations, etc.\nSince every extrinsic requires fees to be paid, this type needs to be wrapped inside an account extrinsic.\nAccounts hold balances and can therefore pay fees and provide deposits."}),"\n",(0,n.jsx)(i.p,{children:"This document describes how to sign the DID extrinsics.\nThe KILT SDK provides two functions for signing DID extrinsics.\nThe first function signs a single extrinsic while the second one batches multiple extrinsics together."}),"\n",(0,n.jsx)(i.h2,{id:"single-extrinsics",children:"Single extrinsics"}),"\n",(0,n.jsx)(i.p,{children:"To sign a single extrinsic, you need to provide:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["the DID that wants to sign the extrinsic (also called ",(0,n.jsx)(i.em,{children:"origin"})," of the extrinsic)","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["refer to the ",(0,n.jsx)(i.a,{href:"/docs/develop/sdk/cookbook/dids/full-did-creation",children:"full did creation guide"})," to learn how to create a DID"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsxs)(i.a,{href:"/docs/develop/sdk/cookbook/signCallback",children:["a ",(0,n.jsx)(i.code,{children:"SignCallback"})," that signs the extrinsic"]})}),"\n",(0,n.jsx)(i.li,{children:"the extrinsic that should be signed and submitted"}),"\n",(0,n.jsx)(i.li,{children:"and the address of the account that pays for the fees."}),"\n"]}),"\n",(0,n.jsx)(c.c,{children:l}),"\n",(0,n.jsx)(i.h2,{id:"batch-multiple-extrinsics",children:"Batch multiple extrinsics"}),"\n",(0,n.jsxs)(i.p,{children:["Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID.\nFor instance, a batch could create multiple services with a single submission to the blockchain.\nThis would save the user the time of generating one additional signature, as multiple extrinsics are batched and signed at once.\nThe extrinsics are also submitted and executed in the same block.\nFor more information, see the ",(0,n.jsx)(i.a,{href:"https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html",children:"official Substrate documentation"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["An example of a batch using the ",(0,n.jsx)(i.code,{children:"authorizeBatch"})," is provided below."]}),"\n",(0,n.jsx)(c.c,{children:r}),"\n",(0,n.jsxs)(i.p,{children:["DIDs have different keys that posses different capabilities.\nEach key can only be used to authorize a specific subset of extrinsics.\nIf extrinsics are batched together that require different DID keys, the ",(0,n.jsx)(i.code,{children:"authorizeBatch"})," function will call the sign callback multiple times."]})]})}function p(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},96020:(e,i,t)=>{"use strict";t.d(i,{c:()=>x});var n=t(11504),s=t(28264),c=t(46352),l=t(58440),r=t(14300),o=t(28168),a=t(61268),d=t(87768),u=t(1608),h=t(17624);const x=e=>{let{children:i,fileName:t,...x}=e;const p=i,[f,b]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:g}}}=(0,s.c)(),m=(0,n.useMemo)((()=>{const{code:e}=(0,c.transform)(p,{plugins:["transform-typescript"],retainLines:!0});return e}),[p]);(0,n.useEffect)((()=>{l.E9(m,{parser:"babel",plugins:[r.c,o.cp],...g}).then(b)}),[g,m]);const k=[{fileName:t?`${t}.ts`:void 0,fileContents:p,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:f,fileID:"js",fileLabel:"Javascript"}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(a.c,{groupId:"ts-js-choice",children:k.map((e=>(0,h.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,h.jsx)(u.c,{...x,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);