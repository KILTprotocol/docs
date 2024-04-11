"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2456],{19596:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(17624),a=o(4552);const i={id:"overview",title:"Overview"},r=void 0,s={id:"participate/staking/become_a_collator/overview",title:"Overview",description:"Collators are the most important members of the network as they not only maintain the state by running a KILT full node, but are also allowed to change it by building state transition proofs and sharing them with the Relay Chain validators.",source:"@site/docs/participate/01_staking/01_become_a_collator/01_overview.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/overview",permalink:"/docs/participate/staking/become_a_collator/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/01_overview.md",tags:[],version:"current",lastUpdatedAt:1712840460,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview"},sidebar:"staking",next:{title:"Minimum Hardware Requirements",permalink:"/docs/participate/staking/become_a_collator/hardware-requirements"}},l={},c=[{value:"Roadmap",id:"roadmap",level:2},{value:"Join the Community",id:"join-the-community",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",strong:"strong",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Collators are the most important members of the network as they not only maintain the state by running a KILT full node, but are also allowed to change it by building state transition proofs and sharing them with the Relay Chain validators.\nGenerally speaking, the latter finalize the proposed block if and only if it represents a valid state transition."}),"\n",(0,n.jsx)(t.p,{children:"It is important to note that elusive collators can never get invalid blocks finalized thanks to the design security umbrella provided by the Relay Chain.\nThus, the most harm dishonest collators can do is to slow down or halt the network.\nAs long as at least one honest collator exists, the parachain is secured and fully operative.\nHowever, the block time would be slower than with a full set of honest and functioning collator nodes."}),"\n",(0,n.jsx)(t.p,{children:"If you want to join the KILT network as a collator, you have to run a full node of the blockchain and set up your session keys.\nYou are also required to hold a minimum amount of  self-staked tokens to qualify for a collator seat.\nOnce you have finished the mandatory steps described throughout the following sections, you can be added to the candidate pool.\nThe candidate pool is sorted first by the total staking amount including delegations.\nIf the pool is full and the new candidate has the exact same stake amount as the last member of the pool (by total stake), the blockchain favors the candidate that has been in the pool longest.\nThus, only the collators with the highest total stake are periodically selected to be eligible block authors."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can find more information about collators and the Relay Chain-parachain-interaction in the ",(0,n.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-collator",children:(0,n.jsx)(t.strong,{children:"official Polkadot Wiki"})}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,n.jsx)(t.p,{children:"We will guide you through the steps to become a collator.\nFirst, we will discuss the hardware requirements and how you could test the performance of your node.\nThen, we go over a few configuration options and show you how to set up and start a KILT collator, including how to generate your sessions keys and join the pool of collator candidates."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["In case you are already collating, you could check out the advanced section.\nThere you will learn how to ",(0,n.jsx)(t.a,{href:"/docs/participate/staking/advanced_collator_section/monitoring",children:(0,n.jsx)(t.strong,{children:"monitor"})})," or ",(0,n.jsx)(t.a,{href:"/docs/participate/staking/advanced_collator_section/benchmarking",children:(0,n.jsx)(t.strong,{children:"benchmark"})})," your node, ",(0,n.jsx)(t.a,{href:"/docs/participate/staking/advanced_collator_section/adjust-stake",children:(0,n.jsx)(t.strong,{children:"adjust your stake"})}),", ",(0,n.jsx)(t.a,{href:"/docs/participate/staking/troubleshooting",children:(0,n.jsx)(t.strong,{children:"fix problems"})})," or ",(0,n.jsx)(t.a,{href:"/docs/participate/staking/advanced_collator_section/exit",children:(0,n.jsx)(t.strong,{children:"leave the network"})}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"join-the-community",children:"Join the Community"}),"\n",(0,n.jsxs)(t.p,{children:["As a collator you are required to keep track of updates and changes to configuration.\nYou should also be accessible in case there is an issue with your node, as this affects not only your and your delegator's rewards, but also the entire network negatively.\nWe recommend joining the ",(0,n.jsx)(t.a,{href:"https://discord.gg/hX4pc8rdHS",children:"KILT Community Discord server"})," and following (at least) the ",(0,n.jsx)(t.strong,{children:"collators"})," and ",(0,n.jsx)(t.strong,{children:"staking"})," channels.\nThere, you will receive announcements about future updates and potential mandatory client upgrades.\nMoreover, the channels serve as a discussion hub for collators and delegators."]}),"\n",(0,n.jsxs)(t.p,{children:["After joining Discord, feel free to send a DM to ",(0,n.jsx)(t.a,{href:"https://discordapp.com/users/687952993156726784",children:(0,n.jsx)(t.code,{children:"Dudley | KILT protocol#6222"})})," or ",(0,n.jsx)(t.a,{href:"https://discordapp.com/users/w3n;williamfreude#4433",children:(0,n.jsx)(t.code,{children:"William | KILT Protocol#4433"})})," to introduce yourself.\nOf course, you can also directly announce yourself in one of the two channels mentioned above.\nThis way, the community knows who to contact in case there are any issues with your node."]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>s,M:()=>r});var n=o(11504);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);