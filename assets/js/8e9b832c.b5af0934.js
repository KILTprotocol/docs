(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2249],{5764:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=5764,e.exports=n},8047:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var o=t(4848),i=t(8453),a=t(3172),c=t(4911);const s="import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport { ApiPromise, WsProvider } from '@polkadot/api'\n\n// Import needed to provide KILT Typescript support to the api object.\nimport '@kiltprotocol/augment-api'\nimport { typesBundle } from '@kiltprotocol/type-definitions'\n\nexport async function queryAccountWeb3Name(\n  endpoint: string,\n  lookupAccountAddress: KeyringPair['address']\n): Promise<string | null> {\n  const api = await ApiPromise.create({\n    provider: new WsProvider(endpoint),\n    typesBundle\n  })\n  // Call to the KILT runtime API `did.queryByAccount`\n  const didDetails = await api.call.did.queryByAccount({\n    AccountId32: lookupAccountAddress\n  })\n  if (didDetails.isNone) {\n    throw new Error(`No DID for the KILT account \"${lookupAccountAddress}\".`)\n  }\n\n  const { w3n } = didDetails.unwrap()\n  if (w3n.isNone) {\n    throw new Error(\n      `No web3name for the KILT account \"${lookupAccountAddress}\".`\n    )\n  }\n\n  const web3Name = w3n.unwrap().toHuman()\n  console.log(\n    `The provided account is identifiable by the following web3name: \"w3n:${web3Name}\"`\n  )\n\n  return web3Name\n}\n",r={id:"account-name",title:"Query the web3name of an Account"},l=void 0,d={id:"develop/sdk/cookbook/account_linking/account-name",title:"Query the web3name of an Account",description:"For accounts that have been linked to DIDs that have claimed a web3name, the linking feature opens the way to a host of possibilities, e.g., showing the web3name of a collator's account on the KILT Stakeboard.",source:"@site/docs/develop/01_sdk/02_cookbook/03_account_linking/02_account_name.md",sourceDirName:"develop/01_sdk/02_cookbook/03_account_linking",slug:"/develop/sdk/cookbook/account_linking/account-name",permalink:"/docs/develop/sdk/cookbook/account_linking/account-name",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/03_account_linking/02_account_name.md",tags:[],version:"current",lastUpdatedAt:1733496053e3,sidebarPosition:2,frontMatter:{id:"account-name",title:"Query the web3name of an Account"},sidebar:"sdk",previous:{title:"Link an Account to a KILT DID",permalink:"/docs/develop/sdk/cookbook/account_linking/account-link"},next:{title:"Unlink an Account From a KILT DID",permalink:"/docs/develop/sdk/cookbook/account_linking/account-unlink"}},u={},p=[{value:"Query an Account&#39;s web3name with the KILT SDK",id:"query-an-accounts-web3name-with-the-kilt-sdk",level:2},{value:"Query an Account&#39;s web3name without the KILT SDK",id:"query-an-accounts-web3name-without-the-kilt-sdk",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["For accounts that have been linked to DIDs that have claimed a web3name, the linking feature opens the way to a host of possibilities, e.g., showing the web3name of a collator's account on the ",(0,o.jsx)(n.a,{href:"https://stakeboard.kilt.io/",children:"KILT Stakeboard"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["This section shows how to perform the ",(0,o.jsx)(n.code,{children:"account -> web3name"})," querying both with and without the support of the KILT SDK."]}),"\n",(0,o.jsx)(n.h2,{id:"query-an-accounts-web3name-with-the-kilt-sdk",children:"Query an Account's web3name with the KILT SDK"}),"\n",(0,o.jsx)(a.A,{children:c.A}),"\n",(0,o.jsx)(n.h2,{id:"query-an-accounts-web3name-without-the-kilt-sdk",children:"Query an Account's web3name without the KILT SDK"}),"\n",(0,o.jsx)(a.A,{children:s})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},3172:(e,n,t)=>{"use strict";t.d(n,{A:()=>m});var o=t(6540),i=t(4586),a=t(6352),c=t(8463),s=t(5283),r=t(6745),l=t(1470),d=t(9365),u=t(1432),p=t(4848);const m=e=>{let{children:n,fileName:t,...m}=e;const h=n,[k,f]=(0,o.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:w}}}=(0,i.A)(),b=(0,o.useMemo)((()=>{const{code:e}=(0,a.transform)(h,{plugins:["transform-typescript"],retainLines:!0}),n=["./generateAccount","./generateKeypairs","./ctypeSchema","./createClaim","./generateLightDid","../attester/ctypeSchema","../claimer/generateLightDid","../claimer/generateCredential","./claimer/createPresentation","./claimer/generateKeypairs","./claimer/generateLightDid"];let t=e.replace(/from\s+['"](.+)['"]/g,((e,t)=>n.includes(t)?`from '${t}.js'`:e));return t=t.replace("if (require.main === module)","if (process.argv[1] === new URL(import.meta.url).pathname)"),t}),[h]);(0,o.useEffect)((()=>{c.GP(b,{parser:"babel",plugins:[s.A,r.Ay],...w}).then(f)}),[w,b]);const g=[{fileName:t?`${t}.ts`:void 0,fileContents:h,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:k,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.A,{groupId:"ts-js-choice",children:g.map((e=>(0,p.jsx)(d.A,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(u.A,{...m,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}},4911:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});const o='import * as Kilt from \'@kiltprotocol/sdk-js\'\n\nexport async function queryAccountWeb3Name(\n  lookupAccountAddress: Kilt.KiltAddress\n): Promise<Kilt.Did.Web3Name | null> {\n  const api = Kilt.ConfigService.get(\'api\')\n\n  const encodedLinkedDetails = await api.call.did.queryByAccount(\n    Kilt.Did.accountToChain(lookupAccountAddress)\n  )\n  const { web3Name } = Kilt.Did.linkedInfoFromChain(encodedLinkedDetails)\n  if (web3Name) {\n    console.log(\n      `web3name for account "${lookupAccountAddress}" -> "${web3Name}"`\n    )\n  } else {\n    console.log(\n      `Account "${lookupAccountAddress}" does not have a linked web3name.`\n    )\n  }\n\n  return web3Name\n}\n'}}]);