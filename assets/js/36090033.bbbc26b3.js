(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7896],{5380:e=>{function i(e){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}i.keys=()=>[],i.resolve=i,i.id=5380,e.exports=i},1430:(e,i,n)=>{"use strict";n.r(i),n.d(i,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var s=n(5893),t=n(1151),a=n(1909);const l="/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function useSignCallback(\n  keyUri: Kilt.DidResourceUri,\n  didSigningKey: Kilt.KeyringPair & { type: 'sr25519' | 'ed25519' }\n): Kilt.SignCallback {\n  const signCallback: Kilt.SignCallback = async ({\n    data,\n    // The key relationship specifies which DID key must be used.\n    keyRelationship,\n    // The DID URI specifies which DID must be used. We already know which DID\n    // this will be since we will use this callback just a few lines later (did === didUri).\n    did\n  }) => ({\n    signature: didSigningKey.sign(data),\n    keyType: didSigningKey.type,\n    keyUri\n  })\n\n  return signCallback\n}\n",c="/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\nimport { Extrinsic } from '@polkadot/types/interfaces'\n\nexport async function useSignExtrinsicCallback(\n  didUri: Kilt.DidUri,\n  didSigningKey: Kilt.KeyringPair & { type: 'sr25519' | 'ed25519' },\n  extrinsic: Extrinsic,\n  submitterAddress: Kilt.KiltAddress\n) {\n  // The SignExtrinsicCallback is a more specialized SignCallback since it doesn't\n  // need to return the keyUri.\n  const signCallback: Kilt.SignExtrinsicCallback = async ({\n    data,\n    // The key relationship specifies which DID key must be used.\n    keyRelationship,\n    // The DID URI specifies which DID must be used. We already know which DID\n    // this will be since we will use this callback just a few lines later (did === didUri).\n    did\n  }) => ({\n    signature: didSigningKey.sign(data),\n    keyType: didSigningKey.type\n  })\n\n  return await Kilt.Did.authorizeTx(\n    didUri,\n    extrinsic,\n    signCallback,\n    submitterAddress\n  )\n}\n",r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function useStoreTxSignCallback(\n  submitterAddress: Kilt.KiltAddress\n): Promise<Kilt.SubmittableExtrinsic> {\n  // Here we create a new key pair for the DID that will be created later.\n  // This step might happen in an extension or else where, depending on your application.\n  const authenticationKey: Kilt.KiltKeyringPair =\n    Kilt.Utils.Crypto.makeKeypairFromSeed()\n\n  // This is the sign callback. We use the just created key to sign arbitrary data\n  // and return the signature together with the key type.\n  const getStoreTxSignCallback: Kilt.Did.GetStoreTxSignCallback = async ({\n    data\n  }) => ({\n    signature: authenticationKey.sign(data),\n    keyType: authenticationKey.type\n  })\n\n  // Here we use the call back\n  return await Kilt.Did.getStoreTx(\n    {\n      authentication: [authenticationKey]\n    },\n    submitterAddress,\n    getStoreTxSignCallback\n  )\n}\n",d={id:"signCallback",title:"SignCallback"},o=void 0,h={id:"develop/sdk/cookbook/signCallback",title:"SignCallback",description:"Signing data involves using the private key and therefore needs to be secure.",source:"@site/docs/develop/01_sdk/02_cookbook/07_signCallback.md",sourceDirName:"develop/01_sdk/02_cookbook",slug:"/develop/sdk/cookbook/signCallback",permalink:"/docs/develop/sdk/cookbook/signCallback",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/07_signCallback.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:7,frontMatter:{id:"signCallback",title:"SignCallback"},sidebar:"sdk",previous:{title:"Protect Against Replay Attacks",permalink:"/docs/develop/sdk/cookbook/messaging/replay_protection"},next:{title:"Upgrading to v0.29",permalink:"/docs/develop/sdk/cookbook/upgrading_to_v0_29/"}},g={},u=[{value:"The SignCallback Family",id:"the-signcallback-family",level:2},{value:"SignCallback",id:"signcallback",level:3},{value:"SignExtrinsicCallback",id:"signextrinsiccallback",level:3},{value:"GetStoreTxSignCallback",id:"getstoretxsigncallback",level:3},{value:"Signing using an extension",id:"signing-using-an-extension",level:2}];function k(e){const i={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Signing data involves using the private key and therefore needs to be secure.\nThere are many different options how data could be signed.\nYou might have the private key stored in memory and are therefore able to simply sign the data.\nThis is the easiest option but also comes with higher security risk.\nStoring the private key on a separate device or inside a sandboxed application can increase security.\nBut to enable these security options, we need a generic interface to talk to the signer.\nThis is what the ",(0,s.jsx)(i.code,{children:"SignCallback"})," does."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"SignCallback"})," defines an interface between the SDK and an arbitrary signing strategy.\nMay it be a ledger, an air gapped phone or your browser extension.\nThe interface is generic enough to support implementations for all these security measures."]}),"\n",(0,s.jsx)(i.h2,{id:"the-signcallback-family",children:"The SignCallback Family"}),"\n",(0,s.jsx)(i.p,{children:"There are three types of signing callbacks:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.code,{children:"SignCallback"})," is the most general and can be used in almost all cases, except when signing a full DID creation transaction."]}),"\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.code,{children:"SignExtrinsicCallback"})," is a special ",(0,s.jsx)(i.code,{children:"SignCallback"})," which can only be used to sign extrinsics.\nThus, every ",(0,s.jsx)(i.code,{children:"SignCallback"})," can also be used as a ",(0,s.jsx)(i.code,{children:"SignExtrinsicCallback"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.code,{children:"GetStoreTxSignCallback"})," can only be used to sign the creation of a new DID."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"signcallback",children:"SignCallback"}),"\n",(0,s.jsxs)(i.p,{children:["The plain ",(0,s.jsx)(i.code,{children:"SignCallback"})," signs arbitrary data.\nIt is called with ",(0,s.jsx)(i.code,{children:"SignRequestData"})," which contains"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["the ",(0,s.jsx)(i.code,{children:"data"})," as ",(0,s.jsx)(i.code,{children:"UInt8Array"})," that should be signed"]}),"\n",(0,s.jsxs)(i.li,{children:["the ",(0,s.jsx)(i.code,{children:"keyRelationship"})," which specifies which DID key must be used"]}),"\n",(0,s.jsxs)(i.li,{children:["and the ",(0,s.jsx)(i.code,{children:"did"})," (",(0,s.jsx)(i.code,{children:"DidUri"}),") which specifies the DID that must sign the data"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The callback is expected to return a ",(0,s.jsx)(i.code,{children:"SignResponseData"})," which contains"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["the ",(0,s.jsx)(i.code,{children:"signature"})," as an ",(0,s.jsx)(i.code,{children:"UInt8Array"})]}),"\n",(0,s.jsxs)(i.li,{children:["the ",(0,s.jsx)(i.code,{children:"keyUri"})," which identifies the key that was used for signing"]}),"\n",(0,s.jsxs)(i.li,{children:["and the ",(0,s.jsx)(i.code,{children:"keyType"})," which specifies the signature scheme that was used (either ",(0,s.jsx)(i.code,{children:"sr25519"}),", ",(0,s.jsx)(i.code,{children:"ed25519"})," or ",(0,s.jsx)(i.code,{children:"ecdsa"}),")"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The signed callback can be used as a closure.\nIf you already have the private key of the DID stored in the surrounding scope, you can just use this key."}),"\n",(0,s.jsx)(a.Z,{children:l}),"\n",(0,s.jsx)(i.h3,{id:"signextrinsiccallback",children:"SignExtrinsicCallback"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"SignExtrinsicCallback"})," is a special case of the ",(0,s.jsx)(i.code,{children:"SignCallback"}),".\nSigning an extrinsic doesn't require the ",(0,s.jsx)(i.code,{children:"keyUri"})," as a return value since the chain will pick the appropriate key using information from the extrinsic.\nThe extrinsic that is submitted has a specific ",(0,s.jsx)(i.code,{children:"VerificationKeyRelationship"}),", which defines which key must be used to sign the extrinsic.\nUsing this relation between extrinsic and key, the chain looks up the public key and verifies the signature."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"SignExtrinsicCallback"})," is called with the same ",(0,s.jsx)(i.code,{children:"SignRequestData"}),", but can return a ",(0,s.jsx)(i.code,{children:"SignResponseData"})," that doesn't contain the ",(0,s.jsx)(i.code,{children:"keyUri"})," but only"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["the ",(0,s.jsx)(i.code,{children:"signature"})," as an ",(0,s.jsx)(i.code,{children:"UInt8Array"})]}),"\n",(0,s.jsxs)(i.li,{children:["and the ",(0,s.jsx)(i.code,{children:"keyType"})," which specifies the signature scheme that was used (either ",(0,s.jsx)(i.code,{children:"sr25519"}),", ",(0,s.jsx)(i.code,{children:"ed25519"})," or ",(0,s.jsx)(i.code,{children:"ecdsa"}),")."]}),"\n"]}),"\n",(0,s.jsx)(a.Z,{children:c}),"\n",(0,s.jsx)(i.h3,{id:"getstoretxsigncallback",children:"GetStoreTxSignCallback"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"GetStoreTxSignCallback"})," is only used to sign the data that is submitted to the blockchain when a DID is being created.\nBecause there is no DID identifier before the DID is registered on chain, this callback doesn't receive the DID as a parameter.\nThere is also no DID document and no public key stored if the DID hasn't yet been created.\nTherefore the ",(0,s.jsx)(i.code,{children:"keyUri"})," cannot point to a valid DID key and is not included in the return data."]}),"\n",(0,s.jsx)(a.Z,{children:r}),"\n",(0,s.jsx)(i.h2,{id:"signing-using-an-extension",children:"Signing using an extension"}),"\n",(0,s.jsx)(i.p,{children:"\ud83d\udea7 This section is work in progress \ud83d\udea7"})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},1909:(e,i,n)=>{"use strict";n.d(i,{Z:()=>g});n(7294);var s=n(2263),t=n(2175),a=n(4935),l=n(4990),c=n(9966),r=n(4866),d=n(5162),o=n(9286),h=n(5893);const g=e=>{let{children:i,fileName:n,...g}=e;const u=i,{code:k}=(0,t.transform)(u,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:p}}}=(0,s.Z)(),b=a.WU(k,{parser:"babel",plugins:[l.Z,c.ZP],...p}).finally((()=>{var e=[{fileName:n?`${n}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:n?`${n}.js`:void 0,fileContents:b,fileID:"js",fileLabel:"Javascript"}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(r.Z,{groupId:"ts-js-choice",children:e.map((e=>(0,h.jsx)(d.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,h.jsx)(o.Z,{...g,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}))}}}]);