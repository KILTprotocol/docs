(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8960],{48952:e=>{function i(e){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}i.keys=()=>[],i.resolve=i,i.id=48952,e.exports=i},45404:(e,i,t)=>{"use strict";t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(17624),d=t(4552),o=t(96020);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function deleteFullDid(\n  submitterAccount: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Create a DID deletion tx. We specify the number of endpoints currently stored under the DID because\n  // of the upper computation limit required by the blockchain runtime.\n  const didIdentifier = Kilt.Did.toChain(fullDid)\n  const endpointsCountForDid =\n    await api.query.did.didEndpointsCount(didIdentifier)\n  const didDeletionExtrinsic = api.tx.did.delete(endpointsCountForDid)\n\n  // Sign the DID deletion tx using the DID authentication key.\n  // This results in a DID-signed tx that can be then signed and submitted to the KILT blockchain by the account\n  // authorized in this operation, Alice in this case.\n  const didSignedDeletionExtrinsic = await Kilt.Did.authorizeTx(\n    fullDid,\n    didDeletionExtrinsic,\n    signCallback,\n    submitterAccount.address\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(\n    didSignedDeletionExtrinsic,\n    submitterAccount\n  )\n}\n",l="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimFullDidDeposit(\n  submitterAddress: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the tx to claim the deposit back.\n  // It includes the DID identifier for which the deposit needs to be returned\n  // and the count of services to provide an upper bound to the computation of the tx execution.\n  const identifier = Kilt.Did.toChain(fullDid)\n  const endpointsCountForDid = await api.query.did.didEndpointsCount(identifier)\n  const depositClaimExtrinsic = api.tx.did.reclaimDeposit(\n    identifier,\n    endpointsCountForDid\n  )\n\n  // The submission will fail if `submitterAddress` is not the owner of the deposit associated with the given DID identifier.\n  await Kilt.Blockchain.signAndSubmitTx(depositClaimExtrinsic, submitterAddress)\n}\n",a={id:"full-did-delete",title:"Delete a Full DID"},r=void 0,c={id:"develop/sdk/cookbook/dids/full-did-delete",title:"Delete a Full DID",description:"Once a DID is no longer needed, it is recommended to deactivate it by removing it from the KILT blockchain.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/05_full_did_delete.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-delete",permalink:"/docs/develop/sdk/cookbook/dids/full-did-delete",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/05_full_did_delete.md",tags:[],version:"current",lastUpdatedAt:1713371933,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:5,frontMatter:{id:"full-did-delete",title:"Delete a Full DID"},sidebar:"sdk",previous:{title:"Resolve a DID",permalink:"/docs/develop/sdk/cookbook/dids/did-query"},next:{title:"Build DID Extrinsics",permalink:"/docs/develop/sdk/cookbook/dids/full-did-batch"}},u={},p=[{value:"Claim back a DID deposit",id:"claim-back-a-did-deposit",level:2}];function h(e){const i={admonition:"admonition",h2:"h2",p:"p",...(0,d.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Once a DID is no longer needed, it is recommended to deactivate it by removing it from the KILT blockchain.\nThe following snippet shows how to do it:"}),"\n",(0,n.jsx)(o.c,{children:s}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Please note that once deleted, a full DID becomes unusable and cannot be re-created anymore.\nThis means that all credentials obtained with that DID are no longer valid and must be obtained with a different DID if needed."})}),"\n",(0,n.jsx)(i.h2,{id:"claim-back-a-did-deposit",children:"Claim back a DID deposit"}),"\n",(0,n.jsx)(i.p,{children:"Claiming back the deposit of a DID is semantically equivalent to deactivating and deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require a signature by the DID subject:"}),"\n",(0,n.jsx)(o.c,{children:l})]})}function f(e={}){const{wrapper:i}={...(0,d.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},96020:(e,i,t)=>{"use strict";t.d(i,{c:()=>h});var n=t(11504),d=t(28264),o=t(46352),s=t(58440),l=t(14300),a=t(28168),r=t(61268),c=t(87768),u=t(1608),p=t(17624);const h=e=>{let{children:i,fileName:t,...h}=e;const f=i,[D,m]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:b}}}=(0,d.c)(),k=(0,n.useMemo)((()=>{const{code:e}=(0,o.transform)(f,{plugins:["transform-typescript"],retainLines:!0});return e}),[f]);(0,n.useEffect)((()=>{s.E9(k,{parser:"babel",plugins:[l.c,a.cp],...b}).then(m)}),[b,k]);const g=[{fileName:t?`${t}.ts`:void 0,fileContents:f,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:D,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(r.c,{groupId:"ts-js-choice",children:g.map((e=>(0,p.jsx)(c.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(u.c,{...h,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);