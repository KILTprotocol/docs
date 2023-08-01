(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3970],{5380:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=5380,t.exports=e},1909:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var n=i(7462),s=i(7294),a=i(2263),o=i(3945),l=i(8182),c=i(2175),r=i(4866),d=i(5162),u=i(814);const h=t=>{let{children:e,fileName:i,...h}=t;const p=e,{code:k}=(0,c.transform)(p,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:m}}}=(0,a.Z)(),b=(0,o.format)(k,{parser:l.parsers.babel.parse,...m}),g=i?`${i}.ts`:void 0,f=i?`${i}.js`:void 0;return s.createElement(r.Z,{groupId:"ts-js-choice"},s.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},s.createElement(u.Z,(0,n.Z)({},h,{className:"language-ts",title:g}),p)),s.createElement(d.Z,{value:"js",label:"Javascript"},s.createElement(u.Z,(0,n.Z)({},h,{className:"language-js",title:f}),b)))}},8665:(t,e,i)=>{"use strict";i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=i(7462),s=(i(7294),i(3905)),a=i(1909);const o="import * as Kilt from '@kiltprotocol/sdk-js'\n// Just a helper to get an extrinsic\nimport getExtrinsic from '../utils/getExtrinsic'\n\nexport async function signAndSubmitDidExtrinsic(\n  submitterAccount: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const extrinsic = getExtrinsic()\n\n  // This results in a DID-signed tx that can be signed and submitted to\n  // the KILT blockchain by the account authorized in this operation (the `submitterAccount`).\n  const didSignedExtrinsic = await Kilt.Did.authorizeTx(\n    fullDid,\n    extrinsic,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // Wrap the DID extrinsic in an account extrinsic.\n  await Kilt.Blockchain.signAndSubmitTx(didSignedExtrinsic, submitterAccount)\n}\n",l="import * as Kilt from '@kiltprotocol/sdk-js'\n// Just a helper to get an extrinsic\nimport getExtrinsic from '../utils/getExtrinsic'\n\nexport async function signAndSubmitDidExtrinsicBatch(\n  submitterAccount: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Build two extrinsics\n  const extrinsic1 = getExtrinsic()\n  const extrinsic2 = getExtrinsic()\n\n  // Create the DID-signed batch.\n  const authorizedBatch = await Kilt.Did.authorizeBatch({\n    batchFunction: api.tx.utility.batchAll,\n    did: fullDid,\n    extrinsics: [extrinsic1, extrinsic2],\n    sign: signCallback,\n    submitter: submitterAccount.address\n  })\n\n  // Wrap the DID extrinsic in an account extrinsic.\n  await Kilt.Blockchain.signAndSubmitTx(authorizedBatch, submitterAccount)\n}\n",c={id:"full-did-batch",title:"Build DID Extrinsics"},r=void 0,d={unversionedId:"develop/sdk/cookbook/dids/full-did-batch",id:"develop/sdk/cookbook/dids/full-did-batch",title:"Build DID Extrinsics",description:"DID keys can be used to sign extrinsic.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/06_full_did_tx.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-batch",permalink:"/docs/develop/sdk/cookbook/dids/full-did-batch",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/06_full_did_tx.md",tags:[],version:"current",lastUpdatedAt:1690887551,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:6,frontMatter:{id:"full-did-batch",title:"Build DID Extrinsics"},sidebar:"sdk",previous:{title:"Delete a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-delete"},next:{title:"Generate and Verify a DID Signature",permalink:"/docs/develop/sdk/cookbook/dids/did-signature"}},u={},h=[{value:"Single extrinsics",id:"single-extrinsics",level:2},{value:"Batch multiple extrinsics",id:"batch-multiple-extrinsics",level:2}],p={toc:h},k="wrapper";function m(t){let{components:e,...i}=t;return(0,s.kt)(k,(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"DID keys can be used to sign extrinsic.\nBut not every extrinsic can be signed using a DID.\nThe Spiritnet blockchain offers two types of extrinsics."),(0,s.kt)("p",null,"The first type can only be called using an account.\nWe call them account extrinsic.\nThe second callable type are DID extrinsics.\nThey must be used for all KILT features like creating CTypes, issue attestations, etc.\nSince every extrinsic requires fees to be paid, this type needs to be wrapped inside an account extrinsic.\nAccounts hold balances and can therefore pay fees and provide deposits."),(0,s.kt)("p",null,"This document describes how to sign the DID extrinsics.\nThe KILT SDK provides two functions for signing DID extrinsics.\nThe first function signs a single extrinsic while the second one batches multiple extrinsics together."),(0,s.kt)("h2",{id:"single-extrinsics"},"Single extrinsics"),(0,s.kt)("p",null,"To sign a single extrinsic, you need to provide:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the DID that wants to sign the extrinsic (also called ",(0,s.kt)("em",{parentName:"li"},"origin")," of the extrinsic)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"refer to the ",(0,s.kt)("a",{parentName:"li",href:"/docs/develop/sdk/cookbook/dids/full-did-creation"},"full did creation guide")," to learn how to create a DID"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/develop/sdk/cookbook/signCallback"},"a ",(0,s.kt)("inlineCode",{parentName:"a"},"SignCallback")," that signs the extrinsic")),(0,s.kt)("li",{parentName:"ul"},"the extrinsic that should be signed and submitted"),(0,s.kt)("li",{parentName:"ul"},"and the address of the account that pays for the fees.")),(0,s.kt)(a.Z,{mdxType:"TsJsBlock"},o),(0,s.kt)("h2",{id:"batch-multiple-extrinsics"},"Batch multiple extrinsics"),(0,s.kt)("p",null,"Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID.\nFor instance, a batch could create multiple services with a single submission to the blockchain.\nThis would save the user the time of generating one additional signature, as multiple extrinsics are batched and signed at once.\nThe extrinsics are also submitted and executed in the same block.\nFor more information, see the ",(0,s.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html"},"official Substrate documentation"),"."),(0,s.kt)("p",null,"An example of a batch using the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorizeBatch")," is provided below."),(0,s.kt)(a.Z,{mdxType:"TsJsBlock"},l),(0,s.kt)("p",null,"DIDs have different keys that posses different capabilities.\nEach key can only be used to authorize a specific subset of extrinsics.\nIf extrinsics are batched together that require different DID keys, the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorizeBatch")," function will call the sign callback multiple times."))}m.isMDXComponent=!0}}]);