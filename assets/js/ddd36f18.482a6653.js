"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9916],{3503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(5893),l=n(1151);const o={id:"lifecycle",title:"Lifecycle of a Delegator"},i=void 0,c={id:"participate/staking/delegate/lifecycle",title:"Lifecycle of a Delegator",description:"The following diagram depicts the full lifecycle of a delegator from owning free KILT to delegating, losing a delegation seat, re-delegating and finally unlocking their stake.",source:"@site/docs/participate/01_staking/03_delegate/05_delegator_lifecycle.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/lifecycle",permalink:"/docs/participate/staking/delegate/lifecycle",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/05_delegator_lifecycle.md",tags:[],version:"current",lastUpdatedAt:1706870076,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:5,frontMatter:{id:"lifecycle",title:"Lifecycle of a Delegator"},sidebar:"staking",previous:{title:"Leave the Set of Delegators",permalink:"/docs/participate/staking/delegate/exit"},next:{title:"Claim Staking Rewards",permalink:"/docs/participate/staking/claim-rewards"}},r={},s=[];function d(e){const t={mermaid:"mermaid",p:"p",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The following diagram depicts the full lifecycle of a delegator from owning free KILT to delegating, losing a delegation seat, re-delegating and finally unlocking their stake."}),"\n",(0,a.jsx)(t.p,{children:"It provides a summary of the detailed information provided in the preceding sections."}),"\n",(0,a.jsx)("div",{className:"kilt-mermaid",children:(0,a.jsx)(t.mermaid,{value:'flowchart TD\n   A["Hold at least 20 KILT"] --\x3e |Choose candidate| B("Collator candidate chosen");\n   B --\x3e |"Call \\n joinDelegators"| C{"Can delegate to target? \\n Either \\n 1. There are empty \\n delegations or \\n 2. You delegate more \\n than another Delegator"};\n   C --\x3e |yes| D("Delegating to a collator candidate")\n   C --\x3e |no| C2{"Balance locked?\\n e.g., previously delegated \\n without unlocking?"}\n   C2 --\x3e |no| A\n   C2 --\x3e |yes| G\n   D --\x3e D2("Accumulating rewards \\non each block built by \\n delegated collator")\n   D --\x3e |"leave \\n Delegators"| E("Not delegating")\n   D --\x3e |"your Collator \\n candidate leaves"| E\n   E --\x3e E2("Not accumulating \\n rewards")\n   E --\x3e F{"Delegate to \\n another candidate?"}\n   F --\x3e |Yes| B\n   F --\x3e |No| G("Locked tokens")\n   G --\x3e |Want to unlock| H{"Waited 7 days?"}\n   H --\x3e |yes| I("Balance with expired lock")\n   H --\x3e |no| F\n   I --\x3e |"Call \\n unlockUnstaked"| A\n\n    %% Styles\n    A:::unstakedFreeKilt\n    B:::preDelegationCheck\n    C:::preDelegationCheck\n    C2:::notDelegating\n    D:::activelyDelegating\n    D2:::activelyDelegating\n    E:::notDelegating\n    E2:::preUnlockStaked\n    F:::notDelegating\n    G:::preUnlockStaked\n    H:::preUnlockStaked\n    I:::preUnlockStaked\n\n    %% StyleDef\n    classDef preDelegationCheck fill:#FFF4BD, color:black, stroke:none;\n    classDef notDelegating fill:#F1C0B9, color:black, stroke:black, stroke-width:1px;;\n    classDef unstakedFreeKilt fill:#85D2D0, color:black, stroke:black, stroke-width:1px;\n    classDef activelyDelegating fill:#94C973, color:black, stroke:#333, stroke-width:2px;\n    classDef preUnlockStaked fill:#F37970, color:black, stroke:black;'})})]})}function g(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var a=n(7294);const l={},o=a.createContext(l);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);