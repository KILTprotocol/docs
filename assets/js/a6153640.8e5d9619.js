(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3378],{48952:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=48952,t.exports=e},26008:(t,e,i)=>{"use strict";i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=i(17624),a=i(4552),o=i(96020);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createAttestation(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credential: Kilt.ICredential\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Create an attestation object and write its root hash on the chain\n  // using the provided attester's full DID.\n  const { cTypeHash, claimHash, delegationId } =\n    Kilt.Attestation.fromCredentialAndDid(credential, attester)\n\n  // Write the attestation info on the chain.\n  const attestationTx = api.tx.attestation.add(\n    claimHash,\n    cTypeHash,\n    delegationId\n  )\n  const authorizedAttestationTx = await Kilt.Did.authorizeTx(\n    attester,\n    attestationTx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAttestationTx,\n    submitterAccount\n  )\n}\n",r={id:"attestation-creation",title:"Attest a Claim (Issue a Credential)"},c=void 0,l={id:"develop/sdk/cookbook/claiming/attestation-creation",title:"Attest a Claim (Issue a Credential)",description:"Once an Attester has received a to-be-attested Credential from a Claimer, they will typically verify the information in the claim.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/attestation-creation",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md",tags:[],version:"current",lastUpdatedAt:1712840460,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:3,frontMatter:{id:"attestation-creation",title:"Attest a Claim (Issue a Credential)"},sidebar:"sdk",previous:{title:"Request an Attestation",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-request"},next:{title:"Present a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-creation"}},d={},h=[];function m(t){const e={a:"a",admonition:"admonition",code:"code",p:"p",...(0,a.M)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Once an Attester has received a to-be-attested ",(0,n.jsx)(e.code,{children:"Credential"})," from a Claimer, they will typically verify the information in the claim.\nIf the claims correspond to truth, the Attester will proceed by attesting the root hash of the credential on the KILT blockchain, timestamping the attestation operation.\nA deposit is reserved from the balance of the KILT account submitting the creation transaction, which is returned if and when the attestation is removed from the chain."]}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.p,{children:["An Attester is required to have a full DID with an attestation key.\nTo see how to manage DIDs, please refer to the ",(0,n.jsx)(e.a,{href:"/docs/develop/sdk/cookbook/dids/full-did-update",children:"DID section"}),"."]})}),"\n",(0,n.jsx)(o.c,{children:s})]})}function p(t={}){const{wrapper:e}={...(0,a.M)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(m,{...t})}):m(t)}},96020:(t,e,i)=>{"use strict";i.d(e,{c:()=>p});var n=i(11504),a=i(28264),o=i(46352),s=i(58440),r=i(14300),c=i(28168),l=i(61268),d=i(87768),h=i(1608),m=i(17624);const p=t=>{let{children:e,fileName:i,...p}=t;const u=e,[f,k]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:g}}}=(0,a.c)(),b=(0,n.useMemo)((()=>{const{code:t}=(0,o.transform)(u,{plugins:["transform-typescript"],retainLines:!0});return t}),[u]);(0,n.useEffect)((()=>{s.E9(b,{parser:"babel",plugins:[r.c,c.cp],...g}).then(k)}),[g,b]);const v=[{fileName:i?`${i}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:f,fileID:"js",fileLabel:"Javascript"}];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l.c,{groupId:"ts-js-choice",children:v.map((t=>(0,m.jsx)(d.c,{value:t.fileID,label:t.fileLabel,default:!0,children:(0,m.jsx)(h.c,{...p,className:"language-"+t.fileID,title:t.fileName,children:t.fileContents})})))})})}}}]);