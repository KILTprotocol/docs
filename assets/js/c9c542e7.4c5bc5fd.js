(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5100],{48952:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=48952,e.exports=t},88080:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var n=i(17624),a=i(4552),r=i(96020);const o="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function revokeCredentialById(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credentialId: Kilt.IPublicCredential['id'],\n  shouldRemove = false\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const tx = shouldRemove\n    ? api.tx.publicCredentials.remove(credentialId, null)\n    : api.tx.publicCredentials.revoke(credentialId, null)\n\n  // Same as for traditional KILT credentials\n  const authorizedAttestationTx = await Kilt.Did.authorizeTx(\n    attester,\n    tx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAttestationTx,\n    submitterAccount\n  )\n}\n",l="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function revokeCredential(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credential: Kilt.IPublicCredentialInput,\n  shouldRemove = false\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const credentialId = Kilt.PublicCredential.getIdForCredential(\n    credential,\n    attester\n  )\n  const tx = shouldRemove\n    ? api.tx.publicCredentials.remove(credentialId, null)\n    : api.tx.publicCredentials.revoke(credentialId, null)\n\n  // Same as for traditional KILT credentials\n  const authorizedAttestationTx = await Kilt.Did.authorizeTx(\n    attester,\n    tx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAttestationTx,\n    submitterAccount\n  )\n}\n",s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function unrevokeCredential(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credential: Kilt.IPublicCredentialInput\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const credentialId = Kilt.PublicCredential.getIdForCredential(\n    credential,\n    attester\n  )\n  const tx = api.tx.publicCredentials.unrevoke(credentialId, null)\n\n  const authorizedAttestationTx = await Kilt.Did.authorizeTx(\n    attester,\n    tx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAttestationTx,\n    submitterAccount\n  )\n}\n",c="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimDeposit(\n  submitterAddress: Kilt.KiltKeyringPair,\n  credential: Kilt.IPublicCredential\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the tx to claim the deposit back.\n  const credentialId = Kilt.PublicCredential.getIdForCredential(\n    credential,\n    credential.attester\n  )\n  const depositReclaimTx = api.tx.publicCredentials.reclaimDeposit(credentialId)\n\n  // Submit the revocation tx to the KILT blockchain.\n  await Kilt.Blockchain.signAndSubmitTx(depositReclaimTx, submitterAddress)\n}\n",d={id:"public-credential-revocation",title:"Revoke (and remove) Public Credentials"},u=void 0,h={id:"develop/sdk/cookbook/public_credentials/public-credential-revocation",title:"Revoke (and remove) Public Credentials",description:"Depending on the use cases, some credentials, as with any other type of credential, might need to be temporarily or permanently revoked.",source:"@site/docs/develop/01_sdk/02_cookbook/05_public_credentials/03_credential_revocation.md",sourceDirName:"develop/01_sdk/02_cookbook/05_public_credentials",slug:"/develop/sdk/cookbook/public_credentials/public-credential-revocation",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-revocation",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/05_public_credentials/03_credential_revocation.md",tags:[],version:"current",lastUpdatedAt:1708428845,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:3,frontMatter:{id:"public-credential-revocation",title:"Revoke (and remove) Public Credentials"},sidebar:"sdk",previous:{title:"Retrieve Public Credentials",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-retrieval"},next:{title:"Generate a Message",permalink:"/docs/develop/sdk/cookbook/messaging/messaging_book"}},p={},m=[{value:"Revoke and Remove a Credential",id:"revoke-and-remove-a-credential",level:2},{value:"Unrevoke a Credential",id:"unrevoke-a-credential",level:2},{value:"Reclaim the Deposit for a Credential",id:"reclaim-the-deposit-for-a-credential",level:2}];function b(e){const t={a:"a",h2:"h2",p:"p",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Depending on the use cases, some credentials, as with any other type of credential, might need to be temporarily or permanently revoked."}),"\n",(0,n.jsx)(t.p,{children:"The KILT SDK provides different features depending on the needs of the use case."}),"\n",(0,n.jsx)(t.h2,{id:"revoke-and-remove-a-credential",children:"Revoke and Remove a Credential"}),"\n",(0,n.jsxs)(t.p,{children:["As we have seen for ",(0,n.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/public_credentials/public-credential-retrieval",children:"public credential retrieval"}),", a credential identifier is sufficient to perform most operations on public credentials.\nThis is true also for revocation and removal."]}),"\n",(0,n.jsx)(t.p,{children:"Some use cases might need a revoked credential to remain on chain and marked as revoked, while other use cases might combine together revocation and removal, removing a credential whenever it is to be marked as revoked, fulfilling the same goal of marking the credential as invalid."}),"\n",(0,n.jsx)(t.p,{children:"In the former case, the deposit taken at the time when the credential is created is not returned, since the credential is still on chain.\nIn the latter case, all information about the information is cleared, hence the deposit is returned to its original payer."}),"\n",(0,n.jsx)(r.c,{children:o}),"\n",(0,n.jsx)(t.p,{children:"Because a credential identifier can also be calculated starting from the credential itself and the information about its attester, it is also possible to revoke (and optionally remove) a credential given the credential itself."}),"\n",(0,n.jsx)(r.c,{children:l}),"\n",(0,n.jsx)(t.h2,{id:"unrevoke-a-credential",children:"Unrevoke a Credential"}),"\n",(0,n.jsx)(t.p,{children:"For public credentials that have been revoked but not removed from chain, it is possible to un-revoke them, making them valid again."}),"\n",(0,n.jsx)(t.p,{children:'For instance, a driving license can be marked as "suspended" for three years, without being completely invalidated.\nAt the end of the suspension period, it is enabled again by being unrevoked.'}),"\n",(0,n.jsx)(t.p,{children:"As for revocation, both the credential ID and the whole credential can be used, since the SDK provides the primitives to always obtain the former from the latter, but here we show how the whole credential can be used to generate and submit an un-revocation transaction."}),"\n",(0,n.jsx)(r.c,{children:s}),"\n",(0,n.jsx)(t.h2,{id:"reclaim-the-deposit-for-a-credential",children:"Reclaim the Deposit for a Credential"}),"\n",(0,n.jsx)(t.p,{children:"All the operations mentioned so far, always require the participation of the public credential attester, who must use their assertion key to sign all operations before they are submitted to the KILT blockchain."}),"\n",(0,n.jsx)(t.p,{children:"The only operation that can be submitted directly by someone else, as with other places in the SDK, is the transaction to remove a credential and obtain the initial deposit."}),"\n",(0,n.jsx)(t.p,{children:"This is, technically speaking, a different operation compared to the one to remove a credential, albeit the two yield the same result: all traces of the credential are removed from the chain and the deposit is returned to its payer.\nThe difference between the two is about who is authorized to perform the operation: while credential removal requires a DID signature by the original credential creator (a.k.a. issuer), the deposit claiming operation requires a regular transaction signature by the KILT account that paid the original deposit, with no involvement of the original attester."}),"\n",(0,n.jsx)(r.c,{children:c})]})}function v(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},96020:(e,t,i)=>{"use strict";i.d(t,{c:()=>p});var n=i(11504),a=i(28264),r=i(46352),o=i(58440),l=i(14300),s=i(28168),c=i(61268),d=i(87768),u=i(1608),h=i(17624);const p=e=>{let{children:t,fileName:i,...p}=e;const m=t,[b,v]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:k}}}=(0,a.c)(),f=(0,n.useMemo)((()=>{const{code:e}=(0,r.transform)(m,{plugins:["transform-typescript"],retainLines:!0});return e}),[m]);(0,n.useEffect)((()=>{o.E9(f,{parser:"babel",plugins:[l.c,s.cp],...k}).then(v)}),[k,f]);const g=[{fileName:i?`${i}.ts`:void 0,fileContents:m,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:b,fileID:"js",fileLabel:"Javascript"}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.c,{groupId:"ts-js-choice",children:g.map((e=>(0,h.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,h.jsx)(u.c,{...p,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);