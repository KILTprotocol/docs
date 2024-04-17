(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4584],{48952:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=48952,e.exports=n},27580:(e,n,i)=>{"use strict";i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>b});var t=i(17624),s=i(4552),a=i(96020);const o="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function releaseWeb3Name(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const web3NameReleaseTx = api.tx.web3Names.releaseByOwner()\n  const authorizedWeb3NameReleaseTx = await Kilt.Did.authorizeTx(\n    did,\n    web3NameReleaseTx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedWeb3NameReleaseTx,\n    submitterAccount\n  )\n}\n",r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimWeb3NameDeposit(\n  submitterAccount: Kilt.KiltKeyringPair,\n  web3Name: Kilt.Did.Web3Name\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Release the web3name by the deposit payer.\n  const web3NameReleaseTx = api.tx.web3Names.reclaimDeposit(web3Name)\n  await Kilt.Blockchain.signAndSubmitTx(web3NameReleaseTx, submitterAccount)\n}\n",l={id:"web3name-release",title:"Release a web3name"},c=void 0,d={id:"develop/sdk/cookbook/web3names/web3name-release",title:"Release a web3name",description:"If a web3name is no longer needed, either the DID owner or the deposit payer can release it, with deposit being released and returned to the original payer.",source:"@site/docs/develop/01_sdk/02_cookbook/02_web3names/03_release.md",sourceDirName:"develop/01_sdk/02_cookbook/02_web3names",slug:"/develop/sdk/cookbook/web3names/web3name-release",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-release",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/02_web3names/03_release.md",tags:[],version:"current",lastUpdatedAt:1713371933,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:3,frontMatter:{id:"web3name-release",title:"Release a web3name"},sidebar:"sdk",previous:{title:"Query Public Credentials for a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/credential-query"},next:{title:"Resolve a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-query"}},h={},b=[{value:"Releasing a Web3name by the DID Owner",id:"releasing-a-web3name-by-the-did-owner",level:2},{value:"Reclaiming a Web3name Deposit by the Deposit Payer",id:"reclaiming-a-web3name-deposit-by-the-deposit-payer",level:2}];function m(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"If a web3name is no longer needed, either the DID owner or the deposit payer can release it, with deposit being released and returned to the original payer."}),"\n",(0,t.jsx)(n.h2,{id:"releasing-a-web3name-by-the-did-owner",children:"Releasing a Web3name by the DID Owner"}),"\n",(0,t.jsx)(n.p,{children:"In the case of the DID owner willing to release the web3name, the following snippet provides a reference implementation on how to achieve that."}),"\n",(0,t.jsx)(a.c,{children:o}),"\n",(0,t.jsxs)(n.p,{children:["In the code above, the ",(0,t.jsx)(n.code,{children:"releaseWeb3Name"})," function takes the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"did"}),": The DID URI of the owner."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"submitterAccount"}),": The keyring pair of the submitter."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"signCallback"}),": The sign extrinsic callback function. This function is used to sign the extrinsic, read more that in ",(0,t.jsx)(n.a,{href:"/docs/develop/sdk/cookbook/signCallback",children:"the SignCallback section"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The function ",(0,t.jsx)(n.code,{children:"releaseWeb3Name"})," uses the KILT SDK to create a ",(0,t.jsx)(n.em,{children:"web3name release transaction"})," using ",(0,t.jsx)(n.code,{children:"api.tx.web3Names.releaseByOwner"}),".\nIt then authorizes the transaction using the ",(0,t.jsx)(n.code,{children:"Kilt.Did.authorizeTx"})," method and submits the authorized transaction to the blockchain using ",(0,t.jsx)(n.code,{children:"Kilt.Blockchain.signAndSubmitTx"}),".\nThis process ensures that the release transaction is signed by the DID owner."]}),"\n",(0,t.jsx)(n.h2,{id:"reclaiming-a-web3name-deposit-by-the-deposit-payer",children:"Reclaiming a Web3name Deposit by the Deposit Payer"}),"\n",(0,t.jsx)(n.p,{children:"If the web3name is being released by the deposit payer, the signature of the DID owner is not required; a regular signed extrinsic can be submitted to the KILT blockchain, as shown below."}),"\n",(0,t.jsx)(a.c,{children:r}),"\n",(0,t.jsxs)(n.p,{children:["In the code above, the ",(0,t.jsx)(n.code,{children:"reclaimWeb3NameDeposit"})," function takes the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"submitterAddress"}),": The keyring pair of the submitter."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"web3Name"}),": The web3name for which the deposit is to be reclaimed."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The function creates a web3name deposit reclaim transaction using ",(0,t.jsx)(n.code,{children:"api.tx.web3Names.reclaimDeposit"})," and submits the signed transaction to the blockchain using ",(0,t.jsx)(n.code,{children:"Kilt.Blockchain.signAndSubmitTx"}),".\nSince the web3name is being released by the deposit payer, the signature of the DID owner is not required."]}),"\n",(0,t.jsx)(n.p,{children:"By using these code examples, you can easily release or reclaim the deposit of a web3name, depending on the scenario and the role of the entity initiating the release."})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},96020:(e,n,i)=>{"use strict";i.d(n,{c:()=>m});var t=i(11504),s=i(28264),a=i(46352),o=i(58440),r=i(14300),l=i(28168),c=i(61268),d=i(87768),h=i(1608),b=i(17624);const m=e=>{let{children:n,fileName:i,...m}=e;const p=n,[u,w]=(0,t.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:g}}}=(0,s.c)(),x=(0,t.useMemo)((()=>{const{code:e}=(0,a.transform)(p,{plugins:["transform-typescript"],retainLines:!0});return e}),[p]);(0,t.useEffect)((()=>{o.E9(x,{parser:"babel",plugins:[r.c,l.cp],...g}).then(w)}),[g,x]);const f=[{fileName:i?`${i}.ts`:void 0,fileContents:p,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:u,fileID:"js",fileLabel:"Javascript"}];return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(c.c,{groupId:"ts-js-choice",children:f.map((e=>(0,b.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,b.jsx)(h.c,{...m,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);