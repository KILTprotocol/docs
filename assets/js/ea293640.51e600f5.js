(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5967],{48952:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=48952,e.exports=t},38046:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=i(17624),o=i(4552),s=i(96020);const a="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function requestAttestation(\n  claimer: Kilt.DidDocument,\n  ctype: Kilt.ICType\n): Kilt.ICredential {\n  // The claimer generates the claim they would like to get attested.\n  const claim = Kilt.Claim.fromCTypeAndClaimContents(\n    ctype,\n    {\n      name: 'Alice',\n      age: 29,\n      id: '123456789987654321'\n    },\n    claimer.uri\n  )\n\n  const credential = Kilt.Credential.fromClaim(claim)\n  return credential\n}\n",r={id:"attestation-request",title:"Request an Attestation"},c=void 0,l={id:"develop/sdk/cookbook/claiming/attestation-request",title:"Request an Attestation",description:"To obtain credentials, Claimers have to request an attestation for a set of claims from an Attester.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/02_attestation_request.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/attestation-request",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-request",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/02_attestation_request.md",tags:[],version:"current",lastUpdatedAt:1709637884,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:2,frontMatter:{id:"attestation-request",title:"Request an Attestation"},sidebar:"sdk",previous:{title:"Create a CType",permalink:"/docs/develop/sdk/cookbook/claiming/ctype-creation"},next:{title:"Attest a Claim (Issue a Credential)",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-creation"}},d={},m=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To obtain credentials, Claimers have to request an attestation for a set of claims from an Attester.\nThe resulting object is a ",(0,n.jsx)(t.code,{children:"Credential"}),", which can be created following the snippet below."]}),"\n",(0,n.jsx)(t.p,{children:"This process does not involve any interaction with the KILT blockchain, but is simply a communication channel where the Claimer and the Attester can communicate."}),"\n",(0,n.jsx)(s.c,{children:a}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The structure of the claims must respect the schema defined in the specified CType.\nAttesters (and Verifiers) will reject claims that fail to verify correctly."})})]})}function u(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},96020:(e,t,i)=>{"use strict";i.d(t,{c:()=>u});var n=i(11504),o=i(28264),s=i(46352),a=i(58440),r=i(14300),c=i(28168),l=i(61268),d=i(87768),m=i(1608),p=i(17624);const u=e=>{let{children:t,fileName:i,...u}=e;const f=t,[h,k]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:b}}}=(0,o.c)(),g=(0,n.useMemo)((()=>{const{code:e}=(0,s.transform)(f,{plugins:["transform-typescript"],retainLines:!0});return e}),[f]);(0,n.useEffect)((()=>{a.E9(g,{parser:"babel",plugins:[r.c,c.cp],...b}).then(k)}),[b,g]);const C=[{fileName:i?`${i}.ts`:void 0,fileContents:f,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:h,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.c,{groupId:"ts-js-choice",children:C.map((e=>(0,p.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(m.c,{...u,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);