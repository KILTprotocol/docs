(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7896],{5380:e=>{function i(e){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}i.keys=()=>[],i.resolve=i,i.id=5380,e.exports=i},1909:(e,i,n)=>{"use strict";n.d(i,{Z:()=>p});var t=n(7462),a=n(7294),s=n(2263),l=n(3945),r=n(8182),o=n(2175),c=n(5488),d=n(5162),k=n(6823);const p=e=>{let{children:i,fileName:n,...p}=e;const h=i,{code:u}=(0,o.transform)(h,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:g}}}=(0,s.Z)(),m=(0,l.format)(u,{parser:r.parsers.babel.parse,...g}),b=n?`${n}.ts`:void 0,y=n?`${n}.js`:void 0;return a.createElement(c.Z,{groupId:"ts-js-choice"},a.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(k.Z,(0,t.Z)({},p,{className:"language-ts",title:b}),h)),a.createElement(d.Z,{value:"js",label:"Javascript"},a.createElement(k.Z,(0,t.Z)({},p,{className:"language-js",title:y}),m)))}},3679:(e,i,n)=>{"use strict";n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=n(7462),a=(n(7294),n(3905)),s=n(1909);const l={id:"signCallback",title:"SignCallback"},r=void 0,o={unversionedId:"develop/sdk/cookbook/signCallback",id:"develop/sdk/cookbook/signCallback",title:"SignCallback",description:"Signing data involves using the private key and therefore needs to be secure.",source:"@site/docs/develop/01_sdk/02_cookbook/07_signCallback.md",sourceDirName:"develop/01_sdk/02_cookbook",slug:"/develop/sdk/cookbook/signCallback",permalink:"/docs/develop/sdk/cookbook/signCallback",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/07_signCallback.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:7,frontMatter:{id:"signCallback",title:"SignCallback"},sidebar:"sdk",previous:{title:"Protect Against Replay Attacks",permalink:"/docs/develop/sdk/cookbook/messaging/replay_protection"},next:{title:"Upgrading to v0.29",permalink:"/docs/develop/sdk/cookbook/upgrading_to_v0_29/"}},c={},d=[{value:"The SignCallback Family",id:"the-signcallback-family",level:2},{value:"SignCallback",id:"signcallback",level:3},{value:"SignExtrinsicCallback",id:"signextrinsiccallback",level:3},{value:"GetStoreTxSignCallback",id:"getstoretxsigncallback",level:3},{value:"Signing using an extension",id:"signing-using-an-extension",level:2}],k={toc:d};function p(e){let{components:i,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},k,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Signing data involves using the private key and therefore needs to be secure.\nThere are many different options how data could be signed.\nYou might have the private key stored in memory and are therefore able to simply sign the data.\nThis is the easiest option but also comes with higher security risk.\nStoring the private key on a separate device or inside a sandboxed application can increase security.\nBut to enable these security options, we need a generic interface to talk to the signer.\nThis is what the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignCallback")," does."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SignCallback")," defines an interface between the SDK and an arbitrary signing strategy.\nMay it be a ledger, an air gapped phone or your browser extension.\nThe interface is generic enough to support implementations for all these security measures."),(0,a.kt)("h2",{id:"the-signcallback-family"},"The SignCallback Family"),(0,a.kt)("p",null,"There are three types of signing callbacks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"SignCallback")," is the most general and can be used in almost all cases, except when signing a full DID creation transaction."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"SignExtrinsicCallback")," is a special ",(0,a.kt)("inlineCode",{parentName:"li"},"SignCallback")," which can only be used to sign extrinsics.\nThus, every ",(0,a.kt)("inlineCode",{parentName:"li"},"SignCallback")," can also be used as a ",(0,a.kt)("inlineCode",{parentName:"li"},"SignExtrinsicCallback"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"GetStoreTxSignCallback")," can only be used to sign the creation of a new DID.")),(0,a.kt)("h3",{id:"signcallback"},"SignCallback"),(0,a.kt)("p",null,"The plain ",(0,a.kt)("inlineCode",{parentName:"p"},"SignCallback")," signs arbitrary data.\nIt is called with ",(0,a.kt)("inlineCode",{parentName:"p"},"SignRequestData")," which contains"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"UInt8Array")," that should be signed"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"keyRelationship")," which specifies which DID key must be used"),(0,a.kt)("li",{parentName:"ul"},"and the ",(0,a.kt)("inlineCode",{parentName:"li"},"did")," (",(0,a.kt)("inlineCode",{parentName:"li"},"DidUri"),") which specifies the DID that must sign the data")),(0,a.kt)("p",null,"The callback is expected to return a ",(0,a.kt)("inlineCode",{parentName:"p"},"SignResponseData")," which contains"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"signature")," as an ",(0,a.kt)("inlineCode",{parentName:"li"},"UInt8Array")),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"keyUri")," which identifies the key that was used for signing"),(0,a.kt)("li",{parentName:"ul"},"and the ",(0,a.kt)("inlineCode",{parentName:"li"},"keyType")," which specifies the signature scheme that was used (either ",(0,a.kt)("inlineCode",{parentName:"li"},"sr25519"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ed25519")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ecdsa"),")")),(0,a.kt)("p",null,"The signed callback can be used as a closure.\nIf you already have the private key of the DID stored in the surrounding scope, you can just use this key."),(0,a.kt)(s.Z,{mdxType:"TsJsBlock"},"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\nimport { Extrinsic } from '@polkadot/types/interfaces'\n\nexport function useSignCallback(\n  keyUri: Kilt.DidResourceUri,\n  didSigningKey: Kilt.KeyringPair & { type: 'sr25519' | 'ed25519' }\n): Kilt.SignCallback {\n  const signCallback: Kilt.SignCallback = async ({\n    data,\n    // The key relationship specifies which DID key must be used.\n    keyRelationship,\n    // The DID URI specifies which DID must be used. We already know which DID\n    // this will be since we will use this callback just a few lines later (did === didUri).\n    did\n  }) => ({\n    signature: didSigningKey.sign(data),\n    keyType: didSigningKey.type,\n    keyUri\n  })\n\n  return signCallback\n}\n"),(0,a.kt)("h3",{id:"signextrinsiccallback"},"SignExtrinsicCallback"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SignExtrinsicCallback")," is a special case of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignCallback"),".\nSigning an extrinsic doesn't require the ",(0,a.kt)("inlineCode",{parentName:"p"},"keyUri")," as a return value since the chain will pick the appropriate key using information from the extrinsic.\nThe extrinsic that is submitted has a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"VerificationKeyRelationship"),", which defines which key must be used to sign the extrinsic.\nUsing this relation between extrinsic and key, the chain looks up the public key and verifies the signature."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SignExtrinsicCallback")," is called with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"SignRequestData"),", but can return a ",(0,a.kt)("inlineCode",{parentName:"p"},"SignResponseData")," that doesn't contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"keyUri")," but only"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"signature")," as an ",(0,a.kt)("inlineCode",{parentName:"li"},"UInt8Array")),(0,a.kt)("li",{parentName:"ul"},"and the ",(0,a.kt)("inlineCode",{parentName:"li"},"keyType")," which specifies the signature scheme that was used (either ",(0,a.kt)("inlineCode",{parentName:"li"},"sr25519"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ed25519")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ecdsa"),").")),(0,a.kt)(s.Z,{mdxType:"TsJsBlock"},"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\nimport { Extrinsic } from '@polkadot/types/interfaces'\n\nexport async function useSignExtrinsicCallback(\n  didUri: Kilt.DidUri,\n  didSigningKey: Kilt.KeyringPair & { type: 'sr25519' | 'ed25519' },\n  extrinsic: Extrinsic,\n  submitterAddress: Kilt.KiltKeyringPair['address']\n) {\n  // The SignExtrinsicCallback is a more specialized SignCallback since it doesn't\n  // need to return the keyUri.\n  const signCallback: Kilt.SignExtrinsicCallback = async ({\n    data,\n    // The key relationship specifies which DID key must be used.\n    keyRelationship,\n    // The DID URI specifies which DID must be used. We already know which DID\n    // this will be since we will use this callback just a few lines later (did === didUri).\n    did\n  }) => ({\n    signature: didSigningKey.sign(data),\n    keyType: didSigningKey.type\n  })\n\n  return await Kilt.Did.authorizeTx(\n    didUri,\n    extrinsic,\n    signCallback,\n    submitterAddress\n  )\n}\n"),(0,a.kt)("h3",{id:"getstoretxsigncallback"},"GetStoreTxSignCallback"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GetStoreTxSignCallback")," is only used to sign the data that is submitted to the blockchain when a DID is being created.\nBecause there is no DID identifier before the DID is registered on chain, this callback doesn't receive the DID as a parameter.\nThere is also no DID document and no public key stored if the DID hasn't yet been created.\nTherefore the ",(0,a.kt)("inlineCode",{parentName:"p"},"keyUri")," cannot point to a valid DID key and is not included in the return data."),(0,a.kt)(s.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function useStoreTxSignCallback(\n  submitterAddress: Kilt.KiltKeyringPair['address']\n): Promise<Kilt.SubmittableExtrinsic> {\n  // Here we create a new key pair for the DID that will be created later.\n  // This step might happen in an extension or else where, depending on your application.\n  const authenticationKey: Kilt.KiltKeyringPair =\n    Kilt.Utils.Crypto.makeKeypairFromSeed()\n\n  // This is the sign callback. We use the just created key to sign arbitrary data\n  // and return the signature together with the key type.\n  const getStoreTxSignCallback: Kilt.Did.GetStoreTxSignCallback = async ({\n    data\n  }) => ({\n    signature: authenticationKey.sign(data),\n    keyType: authenticationKey.type\n  })\n\n  // Here we use the call back\n  return await Kilt.Did.getStoreTx(\n    {\n      authentication: [authenticationKey]\n    },\n    submitterAddress,\n    getStoreTxSignCallback\n  )\n}\n"),(0,a.kt)("h2",{id:"signing-using-an-extension"},"Signing using an extension"),(0,a.kt)("p",null,"\ud83d\udea7 This section is work in progress \ud83d\udea7"))}p.isMDXComponent=!0}}]);