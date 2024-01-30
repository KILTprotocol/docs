(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9918],{5380:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=5380,e.exports=n},8278:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var i=t(5893),s=t(1151),o=t(1909);const r="/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\n// `window` object: Should be used only in the following example.\n// Otherwise import directly from the KILT extension library.\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nlet window: {\n  kilt: {\n    sporran: {\n      startSession: (\n        dAppName: string,\n        dAppEncryptionKeyUri: Kilt.DidResourceUri,\n        challenge: string\n      ) => Promise<void>\n    }\n  }\n}\n\nexport async function main() {\n  const api = Kilt.ConfigService.get('api')\n\n  const did = 'did:kilt:4smcAoiTiCLaNrGhrAM4wZvt5cMKEGm8f3Cu9aFrpsh5EiNV'\n  const dAppName = 'Your dApp Name'\n\n  const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(did))\n  const { document } = Kilt.Did.linkedInfoFromChain(encodedFullDid)\n  // If there is no DID, or the DID does not have any key agreement key, return\n  if (!document.keyAgreement || !document.keyAgreement[0]) {\n    return\n  }\n  const dAppEncryptionKeyUri =\n    `${document.uri}${document.keyAgreement[0].id}` as Kilt.DidResourceUri\n\n  // Generate and store challenge on the server side for the next step.\n  const response = await fetch('/challenge')\n  const challenge = await response.text()\n\n  const session = await window.kilt.sporran.startSession(\n    dAppName,\n    dAppEncryptionKeyUri,\n    challenge\n  )\n\n  return session\n}\n",a="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main({\n  session,\n  keyAgreementKeyPair,\n  originalChallenge\n}: {\n  session: {\n    encryptionKeyUri: Kilt.DidResourceUri\n    encryptedChallenge: string\n    nonce: string\n  }\n  keyAgreementKeyPair: Kilt.KiltEncryptionKeypair\n  originalChallenge: `0x{string}`\n}) {\n  const { encryptionKeyUri, encryptedChallenge, nonce } = session\n  const encryptionKey = await Kilt.Did.resolveKey(encryptionKeyUri)\n  if (!encryptionKey) {\n    throw new Error('an encryption key is required')\n  }\n\n  const decryptedBytes = Kilt.Utils.Crypto.decryptAsymmetric(\n    { box: encryptedChallenge, nonce },\n    encryptionKey.publicKey,\n    keyAgreementKeyPair.secretKey // derived from your seed phrase\n  )\n  // If it fails to decrypt, return.\n  if (!decryptedBytes) {\n    throw new Error('Could not decode')\n  }\n\n  const decryptedChallenge = Kilt.Utils.Crypto.u8aToHex(decryptedBytes)\n\n  // Compare the decrypted challenge to the challenge you stored earlier.\n  if (decryptedChallenge !== originalChallenge) {\n    throw new Error('Invalid challenge')\n  }\n  return session\n}\n",d={id:"session",title:"Setting Up the Communication Session"},l=void 0,p={id:"develop/dApp/session",title:"Setting Up the Communication Session",description:"The first step in creating your dapp is to set up the communication session.",source:"@site/docs/develop/07_dApp/03_session.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/session",permalink:"/docs/develop/dApp/session",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/03_session.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:3,frontMatter:{id:"session",title:"Setting Up the Communication Session"},sidebar:"dApp",previous:{title:"Well-Known DID Configuration",permalink:"/docs/develop/dApp/well-known-did-config"},next:{title:"Verifying a Credential",permalink:"/docs/develop/dApp/dapp-verifier"}},c={},h=[{value:"Dapp Indicates Credential API Support",id:"dapp-indicates-credential-api-support",level:2},{value:"Dapp Introduces Itself",id:"dapp-introduces-itself",level:2},{value:"Dapp checks the session values",id:"dapp-checks-the-session-values",level:2}];function u(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The first step in creating your dapp is to set up the communication session.\nThe purpose of the session is to pass encrypted messages back and forth between your dapp and the extension."}),"\n",(0,i.jsx)(n.h2,{id:"dapp-indicates-credential-api-support",children:"Dapp Indicates Credential API Support"}),"\n",(0,i.jsxs)(n.p,{children:["In order to indicate its support of the extension's API, the dapp creates the ",(0,i.jsx)(n.code,{children:"window.kilt"})," object as soon as possible.\nTo indicate the API version that the dapp supports, we also create the properties ",(0,i.jsx)(n.code,{children:"window.kilt.meta.versions.credentials"}),".\nSince ",(0,i.jsx)(n.code,{children:"meta"})," is not an extension, this property is not enumerable.\nFor example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<head>\n  <script>\n    window.kilt = {}\n    Object.defineProperty(window.kilt, 'meta', {\n        value: {\n            versions: {\n                credentials: '3.0'\n            }\n        },\n        enumerable: false\n    })\n  <\/script>\n</head>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dapp-introduces-itself",children:"Dapp Introduces Itself"}),"\n",(0,i.jsx)(n.p,{children:"The dapp introduces itself to the extension with its name, encryption key URI, and a challenge.\nA copy of the challenge should be stored on the server side.\nFor example:"}),"\n",(0,i.jsx)(o.Z,{children:r}),"\n",(0,i.jsx)(n.p,{children:"At this point the extension has received the introduction of the dapp and returned a new session along with the encrypted challenge."}),"\n",(0,i.jsx)(n.h2,{id:"dapp-checks-the-session-values",children:"Dapp checks the session values"}),"\n",(0,i.jsx)(n.p,{children:"The extension has provided the session along with an encrypted challenge.\nThe dapp decrypts the challenge and verifies that it matches the original challenge.\nThis should happen on the server side:"}),"\n",(0,i.jsx)(o.Z,{children:a}),"\n",(0,i.jsx)(n.p,{children:"That's it! The communication session has been securely established and you're ready to start sending and receiving messages."})]})}function y(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1909:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});t(7294);var i=t(2263),s=t(2175),o=t(4935),r=t(4990),a=t(9966),d=t(4866),l=t(5162),p=t(9286),c=t(5893);const h=e=>{let{children:n,fileName:t,...h}=e;const u=n,{code:y}=(0,s.transform)(u,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:m}}}=(0,i.Z)(),f=o.WU(y,{parser:"babel",plugins:[r.Z,a.ZP],...m}).finally((()=>{var e=[{fileName:t?`${t}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:f,fileID:"js",fileLabel:"Javascript"}];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.Z,{groupId:"ts-js-choice",children:e.map((e=>(0,c.jsx)(l.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,c.jsx)(p.Z,{...h,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}))}}}]);