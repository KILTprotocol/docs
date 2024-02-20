(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6996],{48952:e=>{function i(e){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}i.keys=()=>[],i.resolve=i,i.id=48952,e.exports=i},99072:(e,i,n)=>{"use strict";n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var t=n(17624),a=n(4552),o=n(96020);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function claimWeb3Name(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  name: Kilt.Did.Web3Name,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const web3NameClaimTx = api.tx.web3Names.claim(name)\n  const authorizedWeb3NameClaimTx = await Kilt.Did.authorizeTx(\n    did,\n    web3NameClaimTx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedWeb3NameClaimTx,\n    submitterAccount\n  )\n}\n",l={id:"web3name-claim",title:"Claim a web3name"},r=void 0,c={id:"develop/sdk/cookbook/web3names/web3name-claim",title:"Claim a web3name",description:"A web3name can be claimed if it currently has no owner, using the following snippet as reference.",source:"@site/docs/develop/01_sdk/02_cookbook/02_web3names/01_claim.md",sourceDirName:"develop/01_sdk/02_cookbook/02_web3names",slug:"/develop/sdk/cookbook/web3names/web3name-claim",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-claim",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/02_web3names/01_claim.md",tags:[],version:"current",lastUpdatedAt:1708428845,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:1,frontMatter:{id:"web3name-claim",title:"Claim a web3name"},sidebar:"sdk",previous:{title:"Exporting a KILT DID",permalink:"/docs/develop/sdk/cookbook/dids/did-export"},next:{title:"Query Public Credentials for a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/credential-query"}},d={},m=[];function p(e){const i={a:"a",p:"p",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"A web3name can be claimed if it currently has no owner, using the following snippet as reference."}),"\n",(0,t.jsx)(o.c,{children:s}),"\n",(0,t.jsx)(i.p,{children:"The claiming process requires the reservation of a deposit that is freed upon web3name release."}),"\n",(0,t.jsxs)(i.p,{children:["Once claimed, the web3name will start appearing whenever the DID of its owner is resolved, for instance via the ",(0,t.jsx)(i.a,{href:"https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g",children:"Universal Resolver"}),".\nFor more information about web3names and DIDs, see the official ",(0,t.jsx)(i.a,{href:"https://github.com/KILTprotocol/spec-kilt-did/blob/main/README.md",children:"KILT DID Specification"}),"."]})]})}function b(e={}){const{wrapper:i}={...(0,a.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},96020:(e,i,n)=>{"use strict";n.d(i,{c:()=>b});var t=n(11504),a=n(28264),o=n(46352),s=n(58440),l=n(14300),r=n(28168),c=n(61268),d=n(87768),m=n(1608),p=n(17624);const b=e=>{let{children:i,fileName:n,...b}=e;const u=i,[f,h]=(0,t.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:k}}}=(0,a.c)(),w=(0,t.useMemo)((()=>{const{code:e}=(0,o.transform)(u,{plugins:["transform-typescript"],retainLines:!0});return e}),[u]);(0,t.useEffect)((()=>{s.E9(w,{parser:"babel",plugins:[l.c,r.cp],...k}).then(h)}),[k,w]);const v=[{fileName:n?`${n}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:n?`${n}.js`:void 0,fileContents:f,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(c.c,{groupId:"ts-js-choice",children:v.map((e=>(0,p.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(m.c,{...b,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);