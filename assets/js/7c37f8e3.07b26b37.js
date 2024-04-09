"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8883],{5996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(17624),r=n(4552);const o={id:"what-is-dip",title:"Overview"},s=void 0,a={id:"concepts/dip/what-is-dip",title:"Overview",description:"The Decentralized Identity Provider (DIP) enables a cross-chain decentralized identity system that mirrors the functionality of OpenID.",source:"@site/docs/concepts/07_dip/01_overview.md",sourceDirName:"concepts/07_dip",slug:"/concepts/dip/what-is-dip",permalink:"/docs/concepts/dip/what-is-dip",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/07_dip/01_overview.md",tags:[],version:"current",lastUpdatedAt:1712675998,formattedLastUpdatedAt:"Apr 9, 2024",sidebarPosition:1,frontMatter:{id:"what-is-dip",title:"Overview"},sidebar:"concepts",previous:{title:"Distributed Trust",permalink:"/docs/concepts/distributed_trust"},next:{title:"Provider pallet",permalink:"/docs/concepts/dip/provider"}},d={},c=[{value:"Adding support to a parachain",id:"adding-support-to-a-parachain",level:2},{value:"Provider chain",id:"provider-chain",level:3},{value:"Consumer chain",id:"consumer-chain",level:3},{value:"User accounts on KILT",id:"user-accounts-on-kilt",level:2},{value:"Dapp developer",id:"dapp-developer",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Decentralized Identity Provider (DIP) enables a cross-chain decentralized identity system that mirrors the functionality of OpenID."}),"\n",(0,i.jsxs)(t.p,{children:["DIP has three key roles: the identity ",(0,i.jsx)(t.strong,{children:"provider"}),", the ",(0,i.jsx)(t.strong,{children:"consumer"}),", and the ",(0,i.jsx)(t.strong,{children:"user"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The identity ",(0,i.jsx)(t.strong,{children:"provider"})," is any blockchain with an identity system that makes it available for other chains, e.g., KILT Protocol, Litentry, etc."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"consumer"})," is any blockchain that has chosen to delegate identity management to the provider, thus relieving it of needing to maintain its identity infrastructure."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"user"})," is an entity with an identity on the provider chain and wants to use it on other chains without setting up a new identity on each. A Dapp developer can use the DIP SDK to make this process easier for the user and add other DIP-related features to their app."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This means that parachains requiring an identity solution don\u2019t need to build their own infrastructure.\nInstead, they can leverage the infrastructure DIP provides.\nDIP is open-source, and you can integrate it with existing Polkadot-compatible runtimes with minimal changes and without affecting the fee model of the consumer system."}),"\n",(0,i.jsx)(t.h2,{id:"adding-support-to-a-parachain",children:"Adding support to a parachain"}),"\n",(0,i.jsx)(t.p,{children:"There are several steps to add DIP support to a Substrate-based parachain, depending on the chain's role."}),"\n",(0,i.jsx)(t.h3,{id:"provider-chain",children:"Provider chain"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Define the format of identity proofs and how verification works with the consumer chains."}),"\n",(0,i.jsx)(t.li,{children:"Add the DIP provider pallet as a dependency to the chain runtime."}),"\n",(0,i.jsxs)(t.li,{children:["Configure the DIP provider pallet using the required ",(0,i.jsx)(t.code,{children:"Config"})," trait."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Find more details in the ",(0,i.jsx)(t.a,{href:"/docs/concepts/dip/provider",children:"Provider pallet"})," section."]})}),"\n",(0,i.jsx)(t.h3,{id:"consumer-chain",children:"Consumer chain"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Discover and retrieve the format of your identity proofs and how verification works with your identity provider"}),"\n",(0,i.jsx)(t.li,{children:"Add the DIP consumer pallet as a dependency to the chain runtime"}),"\n",(0,i.jsxs)(t.li,{children:["Configure the DIP consumer pallet using the required ",(0,i.jsx)(t.code,{children:"Config"})," trait."]}),"\n",(0,i.jsx)(t.li,{children:"Deploy it on chain, along with any additional pallets the identity provider requires."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Find more details in the ",(0,i.jsx)(t.a,{href:"/docs/concepts/dip/consumer",children:"Consumer pallet"})," section."]})}),"\n",(0,i.jsx)(t.h2,{id:"user-accounts-on-kilt",children:"User accounts on KILT"}),"\n",(0,i.jsx)(t.p,{children:"For an account to take advantage of DIP with KILT it needs a decentralized identity (DID) and to create a transaction on the provider chain to generate a cross-chain identity commitment."}),"\n",(0,i.jsx)(t.p,{children:"For an account to be able to do this, a Dapp developer needs to build the functionality into their app for a user using the DIP SDK."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Find more details in the ",(0,i.jsx)(t.a,{href:"/docs/concepts/dip/dip-accounts-kilt",children:"user account"})," section."]})}),"\n",(0,i.jsx)(t.h2,{id:"dapp-developer",children:"Dapp developer"}),"\n",(0,i.jsx)(t.p,{children:"The DIP SDK is a JavaScript library that makes it easier for Dapp developers to integrate DIP into their apps. The SDK includes methods for interacting with runtimes, generating proofs, and more."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Find more details in the ",(0,i.jsx)(t.a,{href:"/docs/concepts/dip/dapp-developer",children:"Dapp developer"})," section."]})})]})}function l(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var i=n(11504);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);