"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1897],{9640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(5893),i=n(1151);const a={id:"dev-chain-setup",title:"Chain Setup for Development"},s=void 0,r={id:"develop/sdk/chain_setup/dev-chain-setup",title:"Chain Setup for Development",description:"If you want to develop solutions that integrate KILT, such as a dapp, a wallet, or a Web3 login, you will need a blockchain environment that can be used for development and testing without requiring you to buy actual KILT tokens.",source:"@site/docs/develop/01_sdk/03_chain_setup/index.md",sourceDirName:"develop/01_sdk/03_chain_setup",slug:"/develop/sdk/chain_setup/",permalink:"/docs/develop/sdk/chain_setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/03_chain_setup/index.md",tags:[],version:"current",lastUpdatedAt:1706870076,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{id:"dev-chain-setup",title:"Chain Setup for Development"},sidebar:"sdk",previous:{title:"Backward Compatibility with Pre-0.29.x Versions",permalink:"/docs/develop/sdk/cookbook/upgrading_to_v0_29/v29-backward-compatibility"},next:{title:"BYOB - Bring Your Own Blockchain",permalink:"/docs/develop/sdk/chain_setup/standalone-chain-setup"}},c={},l=[{value:"Set up your Project",id:"set-up-your-project",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"If you want to develop solutions that integrate KILT, such as a dapp, a wallet, or a Web3 login, you will need a blockchain environment that can be used for development and testing without requiring you to buy actual KILT tokens.\nFor that purpose, you can either use the public KILT Peregrine testnet or run your own development blockchain."}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Peregrine"})," network is a parachain that is similar to Spiritnet (our mainnet) in functionality, but its coin, the PILT, doesn't hold any monetary value.\nAny new features that we plan to add to our Spiritnet runtime will first undergo a testing period on Peregrine.\nThis gives developers like you the chance to test your software with any new features before they are available on Spiritnet."]}),"\n",(0,o.jsx)(t.p,{children:"Nevertheless, there are a scenarios where a public network (that everyone else is also using) is not ideal.\nFor instance, if you need more funds than the faucet can provide, or if you need to reset the state of the blockchain at any time, you will need to setup your own little KILT blockchain."}),"\n",(0,o.jsx)(t.p,{children:"In this section, we will guide you through the process of"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/develop/sdk/chain_setup/standalone-chain-setup",children:"Running your own KILT blockchain"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/develop/sdk/chain_setup/peregrine-chain-setup",children:"Connecting to the Peregrine test network"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/develop/sdk/chain_setup/prod-chain-setup",children:"Connecting to the Spiritnet production network"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"set-up-your-project",children:"Set up your Project"}),"\n",(0,o.jsxs)(t.p,{children:["We expect you to already have a small project which can connect and potentially interact with a KILT blockchain given the WebSocket address of a KILT node.\nIf that is not the case, please take a look at our ",(0,o.jsx)(t.a,{href:"/docs/develop/sdk/quickstart#connecting-to-kilt-blockchain",children:"Quickstart section"})," which will provide you with all necessary means to create and run a basic script."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(7294);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);