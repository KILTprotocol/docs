(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3758],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7462),s=n(7294),a=n(2263),r=n(3945),i=n(8182),d=n(2175),l=n(5488),c=n(5162),p=n(6823);const u=e=>{let{children:t,fileName:n,...u}=e;const m=t,{code:k}=(0,d.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:g}}}=(0,a.Z)(),v=(0,r.format)(k,{parser:i.parsers.babel.parse,...g}),f=n?`${n}.ts`:void 0,w=n?`${n}.js`:void 0;return s.createElement(l.Z,{groupId:"ts-js-choice"},s.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},s.createElement(p.Z,(0,o.Z)({},u,{className:"language-ts",title:f}),m)),s.createElement(c.Z,{value:"js",label:"Javascript"},s.createElement(p.Z,(0,o.Z)({},u,{className:"language-js",title:w}),v)))}},3575:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),s=(n(7294),n(3905)),a=n(1909),r=n(5141);const i={id:"howto-integrate-nodejs",title:"NodeJS"},d=void 0,l={unversionedId:"develop/sdk/integrate/howto-integrate-nodejs",id:"develop/sdk/integrate/howto-integrate-nodejs",title:"NodeJS",description:"NodeJS is natively supported and doesn't require any additional setup.",source:"@site/docs/develop/01_sdk/04_integrate/01_nodejs.md",sourceDirName:"develop/01_sdk/04_integrate",slug:"/develop/sdk/integrate/howto-integrate-nodejs",permalink:"/docs/develop/sdk/integrate/howto-integrate-nodejs",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/04_integrate/01_nodejs.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:1,frontMatter:{id:"howto-integrate-nodejs",title:"NodeJS"},sidebar:"sdk",previous:{title:"How to Integrate",permalink:"/docs/develop/sdk/integrate/"},next:{title:"Browser",permalink:"/docs/develop/sdk/integrate/howto-integrate-browser"}},c={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"NodeJS is natively supported and doesn't require any additional setup."),(0,s.kt)("p",null,"Have a look at these example ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," files for reference:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "kilt-sdk-node-test",\n  "type": "module",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "@kiltprotocol/sdk-js": "0.32.0"\n  }\n}\n')),(0,s.kt)(a.Z,{mdxType:"TsJsBlock"},r.Z))}m.isMDXComponent=!0},5141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o="import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function queryAccountWeb3Name(\n  lookupAccountAddress: KeyringPair['address']\n): Promise<Kilt.Did.Web3Name | null> {\n  const api = Kilt.ConfigService.get('api')\n\n  const encodedLinkedDetails = await api.call.did.queryByAccount(\n    Kilt.Did.accountToChain(lookupAccountAddress)\n  )\n  const { web3Name } = Kilt.Did.linkedInfoFromChain(encodedLinkedDetails)\n  if (web3Name) {\n    console.log(\n      `web3name for account \"${lookupAccountAddress}\" -> \"${web3Name}\"`\n    )\n  } else {\n    console.log(\n      `Account \"${lookupAccountAddress}\" does not have a linked web3name.`\n    )\n  }\n\n  return web3Name\n}\n"}}]);