(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7636],{5380:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=5380,e.exports=n},1909:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var o=t(7462),a=t(7294),i=t(2263),c=t(3945),s=t(8182),r=t(2175),d=t(5488),l=t(5162),u=t(6823);const p=e=>{let{children:n,fileName:t,...p}=e;const k=n,{code:m}=(0,r.transform)(k,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:h}}}=(0,i.Z)(),w=(0,c.format)(m,{parser:s.parsers.babel.parse,...h}),b=t?`${t}.ts`:void 0,f=t?`${t}.js`:void 0;return a.createElement(d.Z,{groupId:"ts-js-choice"},a.createElement(l.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(u.Z,(0,o.Z)({},p,{className:"language-ts",title:b}),k)),a.createElement(l.Z,{value:"js",label:"Javascript"},a.createElement(u.Z,(0,o.Z)({},p,{className:"language-js",title:f}),w)))}},1233:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var o=t(7462),a=(t(7294),t(3905)),i=t(1909),c=t(5141);const s={id:"account-name",title:"Query the web3name of an Account"},r=void 0,d={unversionedId:"develop/sdk/cookbook/account_linking/account-name",id:"develop/sdk/cookbook/account_linking/account-name",title:"Query the web3name of an Account",description:"For accounts that have been linked to DIDs that have claimed a web3name, the linking feature opens the way to a host of possibilities, e.g., showing the web3name of a collator's account on the KILT Stakeboard.",source:"@site/docs/develop/01_sdk/02_cookbook/03_account_linking/02_account_name.md",sourceDirName:"develop/01_sdk/02_cookbook/03_account_linking",slug:"/develop/sdk/cookbook/account_linking/account-name",permalink:"/docs/develop/sdk/cookbook/account_linking/account-name",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/03_account_linking/02_account_name.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:2,frontMatter:{id:"account-name",title:"Query the web3name of an Account"},sidebar:"sdk",previous:{title:"Link an Account to a KILT DID",permalink:"/docs/develop/sdk/cookbook/account_linking/account-link"},next:{title:"Unlink an Account From a KILT DID",permalink:"/docs/develop/sdk/cookbook/account_linking/account-unlink"}},l={},u=[{value:"Query an Account&#39;s web3name with the KILT SDK",id:"query-an-accounts-web3name-with-the-kilt-sdk",level:2},{value:"Query an Account&#39;s web3name without the KILT SDK",id:"query-an-accounts-web3name-without-the-kilt-sdk",level:2}],p={toc:u};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For accounts that have been linked to DIDs that have claimed a web3name, the linking feature opens the way to a host of possibilities, e.g., showing the web3name of a collator's account on the ",(0,a.kt)("a",{parentName:"p",href:"https://stakeboard.kilt.io/"},"KILT Stakeboard"),"."),(0,a.kt)("p",null,"This section shows how to perform the ",(0,a.kt)("inlineCode",{parentName:"p"},"account -> web3name")," querying both with and without the support of the KILT SDK."),(0,a.kt)("h2",{id:"query-an-accounts-web3name-with-the-kilt-sdk"},"Query an Account's web3name with the KILT SDK"),(0,a.kt)(i.Z,{mdxType:"TsJsBlock"},c.Z),(0,a.kt)("h2",{id:"query-an-accounts-web3name-without-the-kilt-sdk"},"Query an Account's web3name without the KILT SDK"),(0,a.kt)(i.Z,{mdxType:"TsJsBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport { ApiPromise, WsProvider } from '@polkadot/api'\n\n// Import needed to provide KILT Typescript support to the api object.\nimport '@kiltprotocol/augment-api'\nimport { typesBundle } from '@kiltprotocol/type-definitions'\n\nexport async function queryAccountWeb3Name(\n  endpoint: string,\n  lookupAccountAddress: KeyringPair['address']\n): Promise<string | null> {\n  const api = await ApiPromise.create({\n    provider: new WsProvider(endpoint),\n    typesBundle\n  })\n  // Call to the KILT runtime API `did.queryByAccount`\n  const didDetails = await api.call.did.queryByAccount({\n    AccountId32: lookupAccountAddress\n  })\n  if (didDetails.isNone) {\n    throw new Error(`No DID for the KILT account \"${lookupAccountAddress}\".`)\n  }\n\n  const { w3n } = didDetails.unwrap()\n  if (w3n.isNone) {\n    throw new Error(\n      `No web3name for the KILT account \"${lookupAccountAddress}\".`\n    )\n  }\n\n  const web3Name = w3n.unwrap().toHuman()\n  console.log(\n    `The provided account is identifiable by the following web3name: \"w3n:${web3Name}\"`\n  )\n\n  return web3Name\n}\n"))}k.isMDXComponent=!0},5141:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o="import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function queryAccountWeb3Name(\n  lookupAccountAddress: KeyringPair['address']\n): Promise<Kilt.Did.Web3Name | null> {\n  const api = Kilt.ConfigService.get('api')\n\n  const encodedLinkedDetails = await api.call.did.queryByAccount(\n    Kilt.Did.accountToChain(lookupAccountAddress)\n  )\n  const { web3Name } = Kilt.Did.linkedInfoFromChain(encodedLinkedDetails)\n  if (web3Name) {\n    console.log(\n      `web3name for account \"${lookupAccountAddress}\" -> \"${web3Name}\"`\n    )\n  } else {\n    console.log(\n      `Account \"${lookupAccountAddress}\" does not have a linked web3name.`\n    )\n  }\n\n  return web3Name\n}\n"}}]);