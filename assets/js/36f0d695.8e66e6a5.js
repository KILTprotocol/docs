(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1675],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var i=a(7462),o=a(7294),n=a(2263),s=a(3945),r=a(8182),l=a(2175),c=a(4866),d=a(5162),m=a(814);const p=e=>{let{children:t,fileName:a,...p}=e;const b=t,{code:u}=(0,l.transform)(b,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,n.Z)(),w=(0,s.format)(u,{parser:r.parsers.babel.parse,...k}),f=a?`${a}.ts`:void 0,v=a?`${a}.js`:void 0;return o.createElement(c.Z,{groupId:"ts-js-choice"},o.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(m.Z,(0,i.Z)({},p,{className:"language-ts",title:f}),b)),o.createElement(d.Z,{value:"js",label:"Javascript"},o.createElement(m.Z,(0,i.Z)({},p,{className:"language-js",title:v}),w)))}},9789:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=a(7462),o=(a(7294),a(3905)),n=a(1909);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function claimWeb3Name(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  name: Kilt.Did.Web3Name,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const web3NameClaimTx = api.tx.web3Names.claim(name)\n  const authorizedWeb3NameClaimTx = await Kilt.Did.authorizeTx(\n    did,\n    web3NameClaimTx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedWeb3NameClaimTx,\n    submitterAccount\n  )\n}\n",r={id:"web3name-claim",title:"Claim a web3name"},l=void 0,c={unversionedId:"develop/sdk/cookbook/web3names/web3name-claim",id:"develop/sdk/cookbook/web3names/web3name-claim",title:"Claim a web3name",description:"A web3name can be claimed if it currently has no owner, using the following snippet as reference.",source:"@site/docs/develop/01_sdk/02_cookbook/02_web3names/01_claim.md",sourceDirName:"develop/01_sdk/02_cookbook/02_web3names",slug:"/develop/sdk/cookbook/web3names/web3name-claim",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-claim",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/02_web3names/01_claim.md",tags:[],version:"current",lastUpdatedAt:1681303842,formattedLastUpdatedAt:"Apr 12, 2023",sidebarPosition:1,frontMatter:{id:"web3name-claim",title:"Claim a web3name"},sidebar:"sdk",previous:{title:"Exporting a KILT DID",permalink:"/docs/develop/sdk/cookbook/dids/did-export"},next:{title:"Query Public Credentials for a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/credential-query"}},d={},m=[],p={toc:m},b="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A web3name can be claimed if it currently has no owner, using the following snippet as reference."),(0,o.kt)(n.Z,{mdxType:"TsJsBlock"},s),(0,o.kt)("p",null,"The claiming process requires the reservation of a deposit that is freed upon web3name release."),(0,o.kt)("p",null,"Once claimed, the web3name will start appearing whenever the DID of its owner is resolved, for instance via the ",(0,o.kt)("a",{parentName:"p",href:"https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g"},"Universal Resolver"),".\nFor more information about web3names and DIDs, see the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/spec-kilt-did/blob/main/README.md"},"KILT DID Specification"),"."))}u.isMDXComponent=!0}}]);