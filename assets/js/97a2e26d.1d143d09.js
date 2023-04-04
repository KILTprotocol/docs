(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6401],{5380:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=5380,t.exports=e},1909:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var n=i(7462),a=i(7294),o=i(2263),l=i(3945),d=i(8182),r=i(2175),c=i(5488),s=i(5162),u=i(6823);const p=t=>{let{children:e,fileName:i,...p}=t;const D=e,{code:h}=(0,r.transform)(D,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:m}}}=(0,o.Z)(),k=(0,l.format)(h,{parser:d.parsers.babel.parse,...m}),f=i?`${i}.ts`:void 0,g=i?`${i}.js`:void 0;return a.createElement(c.Z,{groupId:"ts-js-choice"},a.createElement(s.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(u.Z,(0,n.Z)({},p,{className:"language-ts",title:f}),D)),a.createElement(s.Z,{value:"js",label:"Javascript"},a.createElement(u.Z,(0,n.Z)({},p,{className:"language-js",title:g}),k)))}},4495:(t,e,i)=>{"use strict";i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=i(7462),a=(i(7294),i(3905)),o=i(1909);const l={id:"full-did-creation",title:"Create a Full DID"},d=void 0,r={unversionedId:"develop/sdk/cookbook/dids/full-did-creation",id:"develop/sdk/cookbook/dids/full-did-creation",title:"Create a Full DID",description:"The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/02_full_did_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-creation",permalink:"/docs/develop/sdk/cookbook/dids/full-did-creation",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/02_full_did_creation.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:2,frontMatter:{id:"full-did-creation",title:"Create a Full DID"},sidebar:"sdk",previous:{title:"Create a Light DID",permalink:"/docs/develop/sdk/cookbook/dids/light-did-creation"},next:{title:"Update a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-update"}},c={},s=[{value:"Upgrade a Light DID to a Full DID",id:"upgrade-a-light-did-to-a-full-did",level:2}],u={toc:s};function p(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key."),(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createSimpleFullDid(\n  submitterAccount: Kilt.KiltKeyringPair,\n  {\n    authentication\n  }: {\n    authentication: Kilt.NewDidVerificationKey\n  },\n  signCallback: Kilt.Did.GetStoreTxSignCallback\n): Promise<Kilt.DidDocument> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the DID-signed creation tx and submit it to the blockchain with the specified account.\n  // The submitter account parameter, ensures that only an entity authorized by the DID subject\n  // can submit the tx to the KILT blockchain.\n  const fullDidCreationTx = await Kilt.Did.getStoreTx(\n    {\n      authentication: [authentication]\n    },\n    submitterAccount.address,\n    signCallback\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)\n\n  // The new information is fetched from the blockchain and returned.\n  const fullDid = Kilt.Did.getFullDidUriFromKey(authentication)\n  const encodedUpdatedDidDetails = await api.call.did.query(\n    Kilt.Did.toChain(fullDid)\n  )\n  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document\n}\n"),(0,a.kt)("p",null,"If additional keys or service endpoints are to be specified, they can be passed as parameters to the creation transaction."),(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createCompleteFullDid(\n  submitterAccount: Kilt.KiltKeyringPair,\n  {\n    authentication,\n    encryption,\n    attestation,\n    delegation\n  }: {\n    authentication: Kilt.NewDidVerificationKey\n    encryption: Kilt.NewDidEncryptionKey\n    attestation: Kilt.NewDidVerificationKey\n    delegation: Kilt.NewDidVerificationKey\n  },\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.DidDocument> {\n  const api = Kilt.ConfigService.get('api')\n\n  const fullDidCreationTx = await Kilt.Did.getStoreTx(\n    {\n      authentication: [authentication],\n      keyAgreement: [encryption],\n      assertionMethod: [attestation],\n      capabilityDelegation: [delegation],\n      // Example service.\n      service: [\n        {\n          id: '#my-service',\n          type: ['service-type'],\n          serviceEndpoint: ['https://www.example.com']\n        }\n      ]\n    },\n    submitterAccount.address,\n    signCallback\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)\n\n  // The new information is fetched from the blockchain and returned.\n  const fullDid = Kilt.Did.getFullDidUriFromKey(authentication)\n  const encodedUpdatedDidDetails = await api.call.did.query(\n    Kilt.Did.toChain(fullDid)\n  )\n  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document\n}\n"),(0,a.kt)("h2",{id:"upgrade-a-light-did-to-a-full-did"},"Upgrade a Light DID to a Full DID"),(0,a.kt)("p",null,"Another way to obtain a full DID is by upgrading a previously-created light DID.\nKILT supports this operation in a way that does not invalidate any credentials that had been issued to the light DID before being upgraded."),(0,a.kt)("p",null,"The following code shows how to migrate a light DID to a full DID.\nCredentials, presentations, and verifications remain unchanged and remain valid."),(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function migrateLightDid(\n  lightDid: Kilt.DidDocument,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.DidDocument> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the DID migration tx.\n  const migrationTx = await Kilt.Did.getStoreTx(\n    lightDid,\n    submitterAccount.address,\n    signCallback\n  )\n\n  // The tx can then be submitted by the authorized account as usual.\n  await Kilt.Blockchain.signAndSubmitTx(migrationTx, submitterAccount)\n\n  // The new information is fetched from the blockchain and returned.\n  const migratedFullDidUri = Kilt.Did.getFullDidUri(lightDid.uri)\n  const encodedUpdatedDidDetails = await api.call.did.query(\n    Kilt.Did.toChain(migratedFullDidUri)\n  )\n  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document\n}\n"))}p.isMDXComponent=!0}}]);