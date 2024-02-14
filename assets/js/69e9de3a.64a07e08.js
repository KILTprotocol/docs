"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5118],{2309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(5893),r=n(1151);const s={id:"prod-chain-setup",title:"Connect to Spiritnet"},i=void 0,c={id:"develop/sdk/chain_setup/prod-chain-setup",title:"Connect to Spiritnet",description:"For production setups it is important to run your own full node.",source:"@site/docs/develop/01_sdk/03_chain_setup/03_prod_chain_setup.md",sourceDirName:"develop/01_sdk/03_chain_setup",slug:"/develop/sdk/chain_setup/prod-chain-setup",permalink:"/docs/develop/sdk/chain_setup/prod-chain-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/03_chain_setup/03_prod_chain_setup.md",tags:[],version:"current",lastUpdatedAt:1707906150,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:3,frontMatter:{id:"prod-chain-setup",title:"Connect to Spiritnet"},sidebar:"sdk",previous:{title:"Connect to Peregrine",permalink:"/docs/develop/sdk/chain_setup/peregrine-chain-setup"},next:{title:"How to Integrate",permalink:"/docs/develop/sdk/integrate/"}},a={},d=[{value:"Connect to the Network",id:"connect-to-the-network",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"For production setups it is important to run your own full node.\nRunning your own full node has several advantages over relying on a public full node."}),"\n",(0,o.jsx)(t.p,{children:"The most important advantage is security.\nYou rely on the full node to provide you with correct data.\nWhen using a public full node, you rely on a third party: there is no 100% guarantee that the information returned is correct."}),"\n",(0,o.jsx)(t.p,{children:"Another important aspect when hosting a full node is availability.\nPublic full nodes typically do not come with a Service Level Agreement (SLA) and might go down for maintenance or are simply too slow.\nWith your own full node infrastructure, you can ensure that there is always enough capacity to serve your needs and your customers."}),"\n",(0,o.jsxs)(t.p,{children:["In our ",(0,o.jsx)(t.a,{href:"/docs/develop/chain/introduction",children:"blockchain section"}),", you can find a ",(0,o.jsx)(t.a,{href:"/docs/develop/chain/fullnode-setup",children:"tutorial on how to run your own full node"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"connect-to-the-network",children:"Connect to the Network"}),"\n",(0,o.jsxs)(t.p,{children:["Replace the WebSocket address of ",(0,o.jsx)(t.a,{href:"/docs/develop/sdk/chain_setup/#set-up-your-project",children:"your script"})," or application with ",(0,o.jsx)(t.code,{children:"wss://kilt-rpc.dwellir.com"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You can either use your own frontend or the ",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com/explorer",children:"Polkadot JS Apps"})," to interact with the chain.\nMoreover, you can use ",(0,o.jsx)(t.a,{href:"https://spiritnet.subscan.io/",children:"Subscan"})," as a chain explorer.\nFor a full list of deployments and services, see ",(0,o.jsx)(t.a,{href:"/docs/develop/chain/deployments",children:"here"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);