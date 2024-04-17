"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6608],{35480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(17624),i=n(4552),s=n(77440);const a={id:"join",title:"Join the Collator Candidate Pool"},r=void 0,c={id:"participate/staking/become_a_collator/join",title:"Join the Collator Candidate Pool",description:"Before a collator can author blocks, the node needs to fully sync up with both the KILT parachain and the Polkadot Relay Chain.",source:"@site/docs/participate/01_staking/01_become_a_collator/05_join_collators.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/join",permalink:"/docs/participate/staking/become_a_collator/join",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/05_join_collators.md",tags:[],version:"current",lastUpdatedAt:1713371933,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:5,frontMatter:{id:"join",title:"Join the Collator Candidate Pool"},sidebar:"staking",previous:{title:"Set and Rotate Session Keys",permalink:"/docs/participate/staking/become_a_collator/session-keys"},next:{title:"Adjust Your Own Stake",permalink:"/docs/participate/staking/advanced_collator_section/adjust-stake"}},l={},d=[{value:"Minimum Token Requirement",id:"minimum-token-requirement",level:2},{value:"Execute the Joining Transaction",id:"execute-the-joining-transaction",level:2},{value:"Check Your Position in the Collators Queue",id:"check-your-position-in-the-collators-queue",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Before a collator can author blocks, the node needs to fully sync up with both the KILT parachain and the Polkadot Relay Chain.\nDepending on the size of the blockchain states, it may take from a number of hours to few days for the node to fully synchronize.\nMore details can be found on the ",(0,o.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#synchronize-chain-data",children:"Polkadot network docs"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"After you have finished with the setup, you can finally tell the chain that you are ready to collate and join the pool of candidates."}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["These steps should be followed only once your collator node has successfully ",(0,o.jsx)(t.a,{href:"/docs/participate/staking/become_a_collator/session-keys",children:(0,o.jsx)(t.strong,{children:"linked a session key to its address"})})," and synced the parachain and relaychain states by following the previous steps."]})}),"\n",(0,o.jsx)(t.h2,{id:"minimum-token-requirement",children:"Minimum Token Requirement"}),"\n",(0,o.jsxs)(t.p,{children:["The maximum number of ",(0,o.jsx)(t.strong,{children:"active"})," collators is currently (2022-05-05) 16 on Peregrine and 30 on Spiritnet."]}),"\n",(0,o.jsx)(t.p,{children:"In order to become a collator, you must stake"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["at least ",(0,o.jsx)(t.em,{children:"10,000 KILT"})," tokens and"]}),"\n",(0,o.jsxs)(t.li,{children:["at most ",(0,o.jsx)(t.em,{children:"200,000 KILT"})," tokens."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"execute-the-joining-transaction",children:"Execute the Joining Transaction"}),"\n",(0,o.jsxs)(t.p,{children:["The collator must call an extrinsic ",(0,o.jsx)(t.code,{children:"parachainStaking -> joinCandidates(stake)"})," with the desired stake to join the candidate pool."]}),"\n",(0,o.jsx)(s.cp,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(50648).c+"",width:"2002",height:"1048"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Select your collator KILT address as the extrinsic submitter (the ",(0,o.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,o.jsxs)(t.li,{children:["Select the following extrinsic: ",(0,o.jsx)(t.code,{children:"parachainStaking -> joinCandidates(stake)"})]}),"\n",(0,o.jsxs)(t.li,{children:["Insert the staked KILT amount for your collator (any value between ",(0,o.jsx)(t.code,{children:"10,000,000,000,000,000,000"})," and ",(0,o.jsx)(t.code,{children:"20,000,000,000,000,000,0000"}),")"]}),"\n",(0,o.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,o.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.\nIn the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing ",(0,o.jsx)(t.code,{children:"0"}),"s.\nSo, for instance, 1 KILT needs to be written as ",(0,o.jsx)(t.code,{children:"1,000,000,000,000,000"}),", while 10,000 KILT would be written as ",(0,o.jsx)(t.code,{children:"10,000,000,000,000,000,000"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"check-your-position-in-the-collators-queue",children:"Check Your Position in the Collators Queue"}),"\n",(0,o.jsx)(t.p,{children:"As a collator candidate you can check the current top candidates to see their position and the required staked amount to become an active collator, i.e., to start authoring new blocks."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(78760).c+"",width:"2000",height:"678"})}),"\n",(0,o.jsxs)(t.p,{children:["In Polkadot JS (",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", or ",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),") go to ",(0,o.jsx)(t.code,{children:"Developer -> Chain state -> Storage"})]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Selected state query: ",(0,o.jsx)(t.code,{children:"parachainStaking -> topCandidates(): ParachainStakingSetOrderedSet"})]}),"\n",(0,o.jsx)(t.li,{children:'Execute the query by pressing the "+" button on the right side'}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Now, you should see a window which lists collators (the ",(0,o.jsx)(t.em,{children:"owner"})," field) ordered by their total stake (the ",(0,o.jsx)(t.em,{children:"amount"})," field) from greatest to lowest."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(86237).c+"",width:"2006",height:"780"})}),"\n",(0,o.jsx)(t.p,{children:"If a collator has enough self-stake and delegator stake it will be selected to collate.\nThe last address in the list will be the least staked candidate.\nA time period of two sessions must pass before the selected collator will be authoring blocks, e.g.,  after the remainder of the current session and the entire next one."})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},77440:(e,t,n)=>{n.d(t,{cp:()=>a});var o=n(17624),i=n(4552);function s(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You can either execute this transaction in Polkadot JS Apps or the ",(0,o.jsx)(t.a,{href:"/docs/develop/builtonkilt#web-apps",children:(0,o.jsx)(t.strong,{children:"KILT Stakeboard"})}),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,o.jsx)(t.a,{href:"https://support.kilt.io/support/solutions/80000442174",children:(0,o.jsx)(t.strong,{children:"BOTLabs Trusted Entity support hub"})}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["In the Polkadot JS Apps (",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", or ",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),") go to ",(0,o.jsx)(t.code,{children:"Developer -> Extrinsics -> Submission"}),"."]})]})}function a(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},50648:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/parachainStaking-joinCandidates-15604412560816fe1f7a71aa25cc77f0.png"},78760:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/parachainStaking-topCandidates1-a8c236ec0fb40d8718bcc057ba696434.png"},86237:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/parachainStaking-topCandidates2-bc5f6a1ad87e00230b06f5e667eb6580.png"},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>a});var o=n(11504);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);