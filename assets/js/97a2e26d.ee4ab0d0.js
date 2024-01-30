(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6401],{5380:i=>{function t(i){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,i.exports=t},7296:(i,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>D});var n=e(5893),a=e(1151),o=e(1909);const l="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createSimpleFullDid(\n  submitterAccount: Kilt.KiltKeyringPair,\n  {\n    authentication\n  }: {\n    authentication: Kilt.NewDidVerificationKey\n  },\n  signCallback: Kilt.Did.GetStoreTxSignCallback\n): Promise<Kilt.DidDocument> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the DID-signed creation tx and submit it to the blockchain with the specified account.\n  // The submitter account parameter, ensures that only an entity authorized by the DID subject\n  // can submit the tx to the KILT blockchain.\n  const fullDidCreationTx = await Kilt.Did.getStoreTx(\n    {\n      authentication: [authentication]\n    },\n    submitterAccount.address,\n    signCallback\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)\n\n  // The new information is fetched from the blockchain and returned.\n  const fullDid = Kilt.Did.getFullDidUriFromKey(authentication)\n  const encodedUpdatedDidDetails = await api.call.did.query(\n    Kilt.Did.toChain(fullDid)\n  )\n  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document\n}\n",d="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createCompleteFullDid(\n  submitterAccount: Kilt.KiltKeyringPair,\n  {\n    authentication,\n    keyAgreement,\n    assertionMethod,\n    capabilityDelegation\n  }: {\n    authentication: Kilt.NewDidVerificationKey\n    keyAgreement: Kilt.NewDidEncryptionKey\n    assertionMethod: Kilt.NewDidVerificationKey\n    capabilityDelegation: Kilt.NewDidVerificationKey\n  },\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.DidDocument> {\n  const api = Kilt.ConfigService.get('api')\n\n  const fullDidCreationTx = await Kilt.Did.getStoreTx(\n    {\n      authentication: [authentication],\n      keyAgreement: [keyAgreement],\n      assertionMethod: [assertionMethod],\n      capabilityDelegation: [capabilityDelegation],\n      // Example service.\n      service: [\n        {\n          id: '#my-service',\n          type: ['service-type'],\n          serviceEndpoint: ['https://www.example.com']\n        }\n      ]\n    },\n    submitterAccount.address,\n    signCallback\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)\n\n  // The new information is fetched from the blockchain and returned.\n  const fullDid = Kilt.Did.getFullDidUriFromKey(authentication)\n  const encodedUpdatedDidDetails = await api.call.did.query(\n    Kilt.Did.toChain(fullDid)\n  )\n  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document\n}\n",r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function migrateLightDid(\n  lightDid: Kilt.DidDocument,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.DidDocument> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the DID migration tx.\n  const migrationTx = await Kilt.Did.getStoreTx(\n    lightDid,\n    submitterAccount.address,\n    signCallback\n  )\n\n  // The tx can then be submitted by the authorized account as usual.\n  await Kilt.Blockchain.signAndSubmitTx(migrationTx, submitterAccount)\n\n  // The new information is fetched from the blockchain and returned.\n  const migratedFullDidUri = Kilt.Did.getFullDidUri(lightDid.uri)\n  const encodedUpdatedDidDetails = await api.call.did.query(\n    Kilt.Did.toChain(migratedFullDidUri)\n  )\n  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document\n}\n",s={id:"full-did-creation",title:"Create a Full DID"},c=void 0,u={id:"develop/sdk/cookbook/dids/full-did-creation",title:"Create a Full DID",description:"The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/02_full_did_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-creation",permalink:"/docs/develop/sdk/cookbook/dids/full-did-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/02_full_did_creation.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:2,frontMatter:{id:"full-did-creation",title:"Create a Full DID"},sidebar:"sdk",previous:{title:"Create a Light DID",permalink:"/docs/develop/sdk/cookbook/dids/light-did-creation"},next:{title:"Update a Full DID keys and service endpoints",permalink:"/docs/develop/sdk/cookbook/dids/full-did-update"}},h={},D=[{value:"Upgrade a Light DID to a Full DID",id:"upgrade-a-light-did-to-a-full-did",level:2}];function p(i){const t={h2:"h2",p:"p",...(0,a.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key."}),"\n",(0,n.jsx)(o.Z,{children:l}),"\n",(0,n.jsx)(t.p,{children:"If additional keys or services are to be specified, they can be passed as parameters to the creation transaction."}),"\n",(0,n.jsx)(o.Z,{children:d}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-a-light-did-to-a-full-did",children:"Upgrade a Light DID to a Full DID"}),"\n",(0,n.jsx)(t.p,{children:"Another way to obtain a full DID is by upgrading a previously-created light DID.\nKILT supports this operation in a way that does not invalidate any credentials that had been issued to the light DID before being upgraded."}),"\n",(0,n.jsx)(t.p,{children:"The following code shows how to migrate a light DID to a full DID.\nCredentials, presentations, and verifications remain unchanged and remain valid."}),"\n",(0,n.jsx)(o.Z,{children:r})]})}function f(i={}){const{wrapper:t}={...(0,a.a)(),...i.components};return t?(0,n.jsx)(t,{...i,children:(0,n.jsx)(p,{...i})}):p(i)}},1909:(i,t,e)=>{"use strict";e.d(t,{Z:()=>h});e(7294);var n=e(2263),a=e(2175),o=e(4935),l=e(4990),d=e(9966),r=e(4866),s=e(5162),c=e(9286),u=e(5893);const h=i=>{let{children:t,fileName:e,...h}=i;const D=t,{code:p}=(0,a.transform)(D,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:f}}}=(0,n.Z)(),m=o.WU(p,{parser:"babel",plugins:[l.Z,d.ZP],...f}).finally((()=>{var i=[{fileName:e?`${e}.ts`:void 0,fileContents:D,fileID:"ts",fileLabel:"Typescript"},{fileName:e?`${e}.js`:void 0,fileContents:m,fileID:"js",fileLabel:"Javascript"}];return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(r.Z,{groupId:"ts-js-choice",children:i.map((i=>(0,u.jsx)(s.Z,{value:i.fileID,label:i.fileLabel,default:!0,children:(0,u.jsx)(c.Z,{...h,className:"language-"+i.fileID,title:i.fileName,children:i.fileContents})})))})})}))}}}]);