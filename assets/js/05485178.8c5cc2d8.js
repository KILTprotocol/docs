"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8776],{5950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(5893),o=n(1151),a=n(5720);const s={id:"exit",title:"Leave the Collator Candidate Pool"},c=void 0,r={id:"participate/staking/advanced_collator_section/exit",title:"Leave the Collator Candidate Pool",description:"If you intend to stop collating or stop being a collator candidate, you have to go through three stages until your staked tokens are unlocked and your collator state is purged from the chain.",source:"@site/docs/participate/01_staking/02_advanced_collator_section/02_exit.md",sourceDirName:"participate/01_staking/02_advanced_collator_section",slug:"/participate/staking/advanced_collator_section/exit",permalink:"/docs/participate/staking/advanced_collator_section/exit",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/02_advanced_collator_section/02_exit.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:2,frontMatter:{id:"exit",title:"Leave the Collator Candidate Pool"},sidebar:"staking",previous:{title:"Adjust Your Own Stake",permalink:"/docs/participate/staking/advanced_collator_section/adjust-stake"},next:{title:"Lifecycle of a Collator",permalink:"/docs/participate/staking/advanced_collator_section/lifecycle"}},l={},d=[{value:"Initiate the Exit Request",id:"initiate-the-exit-request",level:2},{value:"Execute the Exit Request",id:"execute-the-exit-request",level:2},{value:"Cancel the Exit Request",id:"cancel-the-exit-request",level:2},{value:"Unlock Your Stake",id:"unlock-your-stake",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"If you intend to stop collating or stop being a collator candidate, you have to go through three stages until your staked tokens are unlocked and your collator state is purged from the chain."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Unfortunately, exiting is not a simple process for security reasons.\nSince a picture paints a thousand words, you can find a visualization of this process in the following ",(0,i.jsx)(t.a,{href:"/docs/participate/staking/advanced_collator_section/lifecycle",children:(0,i.jsx)(t.strong,{children:"lifecycle section"})}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"initiate-the-exit-request",children:"Initiate the Exit Request"}),"\n",(0,i.jsxs)(t.p,{children:["First, signal your intent by calling ",(0,i.jsx)(t.code,{children:"parachainStaking -> initLeaveCandidates"}),".\nYou will then be removed from the ",(0,i.jsx)(t.code,{children:"CandidatePool"})," and your state switches from ",(0,i.jsx)(t.code,{children:"Active"})," to ",(0,i.jsx)(t.code,{children:"Leaving(leaveRound)"}),", where ",(0,i.jsx)(t.code,{children:"leaveRound"})," reflects the number of sessions that have to elapse before you can definitely leave the set of collators.\nYou still need to stay online and build blocks for the current and next sessions.\nSince each session lasts 2 hours, ",(0,i.jsx)(t.strong,{children:"the maximum amount of time you will need to wait is 4 hours"}),".\nOf course, you will continue to receive rewards for the blocks your collating node will author.\nA leaving candidate cannot be selected as an active collator for the sessions from this point on.\nMoreover, you cannot receive new delegations and existing delegations cannot be adjusted.\nHowever, delegations can still be revoked."]}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(8868).Z+"",width:"2000",height:"932"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Select your collator KILT address as the extrinsic submitter (the ",(0,i.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,i.jsxs)(t.li,{children:["Select the appropriate extrinsic: ",(0,i.jsx)(t.code,{children:"parachainStaking -> initLeaveCandidates"})]}),"\n",(0,i.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,i.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"execute-the-exit-request",children:"Execute the Exit Request"}),"\n",(0,i.jsxs)(t.p,{children:["Once the current and next sessions have elapsed (which can take at most 4 hours), you can call ",(0,i.jsx)(t.code,{children:"executeLeaveCandidate"})," to remove all of your ",(0,i.jsx)(t.code,{children:"Candidate"})," associated storage.\nYou should be certain that you wish to leave as there is no turning back afterwards.\nIf you wish to become a candidate at a later stage, you will have to apply again and will not have your former delegations."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(295).Z+"",width:"2012",height:"1192"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Select one of your KILT addresses with sufficient funds to pay for the transaction fee (~5 milli KILT) as the extrinsic submitter (the ",(0,i.jsx)(t.em,{children:"using the selected account"})," field)\n",(0,i.jsx)(t.em,{children:"NOTE: Of course, you can chose your collator account."})]}),"\n",(0,i.jsxs)(t.li,{children:["Select the appropriate extrinsic: ",(0,i.jsx)(t.code,{children:"parachainStaking -> executeLeaveCandidates"})]}),"\n",(0,i.jsxs)(t.li,{children:["Select the ",(0,i.jsx)(t.code,{children:"Id"})," option (the ",(0,i.jsx)(t.em,{children:"MultiAddress (LookupSource) field"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Select the collator account (the ",(0,i.jsx)(t.em,{children:"Id: AccountId"})," field)"]}),"\n",(0,i.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,i.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"cancel-the-exit-request",children:"Cancel the Exit Request"}),"\n",(0,i.jsxs)(t.p,{children:["You still have not completed your exit request, you can still cancel it by calling ",(0,i.jsx)(t.code,{children:"cancelLeaveCandidates"}),", which will succeed if the ",(0,i.jsx)(t.code,{children:"CandidatePool"})," is not already full.\nUpon interruption of your exit procedure, your state switches back to ",(0,i.jsx)(t.code,{children:"Active"})," and you maintain all the previous delegations, since everything has remained untouched in the meantime.\nMoreover, if you are one of the top staked candidates, you will automatically become a collator again at the end of the second round from this point, which can take as long as 4 hours in the worst case."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(9379).Z+"",width:"2000",height:"934"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Select your collator KILT address as the extrinsic submitter (the ",(0,i.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,i.jsxs)(t.li,{children:["Select the appropriate extrinsic: ",(0,i.jsx)(t.code,{children:"parachainStaking -> cancelLeaveCandidates"})]}),"\n",(0,i.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,i.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"unlock-your-stake",children:"Unlock Your Stake"}),"\n",(0,i.jsxs)(t.p,{children:["If you have executed the exit request you cannot immediately unlock your previously staked tokens.\nThere is a delay of 7 days in block time before you can free them by calling ",(0,i.jsx)(t.code,{children:"unlockUnstaked"}),".\nSee ",(0,i.jsx)(t.a,{href:"/docs/participate/staking/unlock-unstaked",children:"here"})," for a step-by-step tutorial."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5720:(e,t,n)=>{n.d(t,{ZP:()=>s});var i=n(5893),o=n(1151);function a(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["You can either execute this transaction in Polkadot JS Apps or the ",(0,i.jsx)(t.a,{href:"/docs/develop/builtonkilt#web-apps",children:(0,i.jsx)(t.strong,{children:"KILT Stakeboard"})}),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,i.jsx)(t.a,{href:"https://support.kilt.io/support/solutions/80000442174",children:(0,i.jsx)(t.strong,{children:"BOTLabs Trusted Entity support hub"})}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["In the Polkadot JS Apps (",(0,i.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", or ",(0,i.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),") go to ",(0,i.jsx)(t.code,{children:"Developer -> Extrinsics -> Submission"}),"."]})]})}function s(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},9379:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/parachainStaking-cancelLeaveCandidates-7dc88ad70b6b395e39189aee23201ba0.png"},295:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/parachainStaking-executeLeaveCandidates-549cdc719f2c60175061bc5b7aec6cdf.png"},8868:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/parachainStaking-initLeaveCandidates-ab23450503d384e61292174bf839ecfe.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var i=n(7294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);