"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5456],{67444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var n=a(17624),o=a(4552);const i={id:"lifecycle",title:"Lifecycle of a Collator"},l=void 0,c={id:"participate/staking/advanced_collator_section/lifecycle",title:"Lifecycle of a Collator",description:"The following diagram visualizes the full lifecycle of a collator from owning free KILT to joining the collator candidate pool, initiating the exit, waiting for the stake to be unlockable and eventually unlocking their bond.",source:"@site/docs/participate/01_staking/02_advanced_collator_section/03_collator_lifecycle.md",sourceDirName:"participate/01_staking/02_advanced_collator_section",slug:"/participate/staking/advanced_collator_section/lifecycle",permalink:"/docs/participate/staking/advanced_collator_section/lifecycle",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/02_advanced_collator_section/03_collator_lifecycle.md",tags:[],version:"current",lastUpdatedAt:1708428845,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:3,frontMatter:{id:"lifecycle",title:"Lifecycle of a Collator"},sidebar:"staking",previous:{title:"Leave the Collator Candidate Pool",permalink:"/docs/participate/staking/advanced_collator_section/exit"},next:{title:"Set Up Node Monitoring",permalink:"/docs/participate/staking/advanced_collator_section/monitoring"}},s={},r=[];function d(e){const t={a:"a",mermaid:"mermaid",p:"p",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The following diagram visualizes the full lifecycle of a collator from owning free KILT to joining the collator candidate pool, initiating the exit, waiting for the stake to be unlockable and eventually unlocking their bond.\nIt summarizes the previous ",(0,n.jsx)(t.a,{href:"/docs/participate/staking/advanced_collator_section/exit",children:"exit"})," section."]}),"\n",(0,n.jsx)("div",{className:"kilt-mermaid",children:(0,n.jsx)(t.mermaid,{value:'flowchart TD\n    A["Hold (at least) 10K KILT"] --\x3e|join_candidates| B(Candidate)\n    B ---\x3e|init_leave_candidates|I("Leaving Candidate\\n(locked)")\n    I ---\x3e G{"2 Sessions (4h)\\n passed?"}\n    I --\x3e|cancel_leave_candidates|B\n    G --\x3e|no|I\n    G --\x3e|yes|H("Leaving Candidate\\n(unlocked)")\n    H --\x3e|execute_leave_candidates|J("Locked Balance")\n    H --\x3e|cancel_leave_candidates|B\n    J ---\x3eK{"At least 7 days\\npassed?"}\n    K --\x3e|yes|L("Balance with expired lock")\n    K --\x3e|no|J\n    L --\x3e|unlock_unstaked|A\n\n    %% style assignment\n    A:::unstakedFreeKilt\n    B:::activeCollator\n    I:::leavingLocked\n    G:::leavingLocked\n    H:::leavingUnlocked\n    J:::leavingUnlocked\n    K:::leavingUnlocked\n    L:::stakedReleasableKilt\n\n    %% style definition\n    classDef leavingLocked fill:#FFF4BD, stroke:none, color:black;\n    classDef leavingUnlocked fill:#F1C0B9, stroke:black, stroke-width:1px, color:black;\n    classDef unstakedFreeKilt fill:#85D2D0, stroke:black, stroke-width:1px, color:black;\n    classDef activeCollator fill:#94C973, stroke:#333, stroke-width:2px, color:black;\n    classDef stakedReleasableKilt fill:#F37970, stroke:black, color:black;'})})]})}function k(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,t,a)=>{a.d(t,{I:()=>c,M:()=>l});var n=a(11504);const o={},i=n.createContext(o);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);