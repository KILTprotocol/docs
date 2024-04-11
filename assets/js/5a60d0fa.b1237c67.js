"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9412],{88108:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(17624),s=t(4552);const o={id:"treasury-tip",title:"Treasury Tips"},r=void 0,a={id:"participate/treasury-tip",title:"Treasury Tips",description:"Similar to opening a Treasury proposal, anyone can start a tipping process.",source:"@site/docs/participate/05_propose_tip.md",sourceDirName:"participate",slug:"/participate/treasury-tip",permalink:"/docs/participate/treasury-tip",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/05_propose_tip.md",tags:[],version:"current",lastUpdatedAt:1712840460,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:5,frontMatter:{id:"treasury-tip",title:"Treasury Tips"}},p={},c=[{value:"Lifecycle of a tipping process",id:"lifecycle-of-a-tipping-process",level:2},{value:"Proposing a tip",id:"proposing-a-tip",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Similar to ",(0,n.jsx)(i.a,{href:"/docs/participate/treasury-proposal",children:"opening a Treasury proposal"}),", anyone can start a tipping process."]}),"\n",(0,n.jsxs)(i.p,{children:["You can expect success if the tip is based on a meaningful contribution.\nThe variety of potential contributions is vast, read the ",(0,n.jsx)(i.a,{href:"/docs/develop/contribute",children:"KILT Contribution guide"})," for a high level description of tips and the differences to Treasury proposals."]}),"\n",(0,n.jsx)(i.p,{children:"This document covers the necessary steps from requesting a tip to receiving it."}),"\n",(0,n.jsx)(i.h2,{id:"lifecycle-of-a-tipping-process",children:"Lifecycle of a tipping process"}),"\n",(0,n.jsxs)(i.p,{children:["Anyone can propose a tip, including for someone else, the ",(0,n.jsx)(i.strong,{children:(0,n.jsx)("span",{style:{background:"#7cd27c",color:"black"},children:"Beneficiary"})}),".\nIn this case, you, the ",(0,n.jsx)("span",{style:{background:"#fff4bd",color:"black"},children:(0,n.jsx)(i.strong,{children:"Finder"})}),", need to put down a ",(0,n.jsx)(i.strong,{children:"minor deposit"}),", which depends on the length in characters of the reason for the tip.\nOverall, you should expect to provide ",(0,n.jsx)(i.strong,{children:"between 0.05 to 0.2 KILT"})," as a deposit.\nFor example, if you provide a URL that includes 60 characters, the deposit would be around 0.07 KILT."]}),"\n",(0,n.jsxs)(i.p,{children:["After making a tip proposal, the set of tippers, elected by the KILT Council, come to consensus on how much to pay.\nEvery member of this stakeholder group, the ",(0,n.jsx)("span",{style:{background:"#c7fff9",color:"black"},children:(0,n.jsx)(i.strong,{children:"Tippers"})}),", can submit an appropriate amount.\nEventually, the median of all tips is taken as the final amount."]}),"\n",(0,n.jsxs)(i.p,{children:["Once at least half of the Tippers have declared their tip, the ending phase starts.\nAfter 24 hours have passed, the tip is automatically closed and paid from the Treasury.\nHowever, other Tippers can still submit their suitable amount and thus influence the final amount of the tip.\nAfter payout, the original deposit is returned to the Finder.\nThe Tippers will not approve the proposal and pay it out until at least half the tippers have voted with ",(0,n.jsx)(i.code,{children:"Aye"}),". At any point before the tip is approved, the Finder can cancel the tip proposal and get back their deposit."]}),"\n",(0,n.jsx)(i.admonition,{title:"No Finder's fees",type:"note",children:(0,n.jsx)(i.p,{children:"While tipping allows a configurable percentage of the final tip to go to the original Finder, the current KILT configuration has set this fee to 0, meaning that the Finder's will not get rewarded for successful tips."})}),"\n",(0,n.jsx)(i.mermaid,{value:'flowchart TD\n    %% Alice\n    Alice(("Alice \\n (Finder or Tipper)")):::Finder --\x3e Alice_Finder{Is Finder?}:::Finder\n    Alice_Finder -.-> |Yes| Alice_Finder_Deposit(reserve deposit):::Finder\n    Alice ----\x3e |"Provide tipping reason  (URL/Polkassembly) and set target"|Beneficiary(("Bob \\n (Beneficiary)")):::Beneficiary\n\n    %% Tipping Start\n    Beneficiary --\x3e Tip_1_Start("Wait for tips"):::process\n    Tip_1_Start --\x3e Tip_2_Threshold{"More than 50% \\n of Tippers tipped?"}:::process\n    Tip_2_Threshold:::process  --\x3e |No| Tip_1_Start\n\n    %% Tipping End\n    Tip_2_Threshold --\x3e |Yes| Tip_3_End{{Start of Ending phase}}\n    Tip_3_End:::processEnd --\x3e Tip_4_Wait(Wait for blocks to pass)\n    Tip_4_Wait:::processEnd --\x3e Tip_5_Blocks{"TipCountdown: \\n Sufficient number \\n of blocks passed?"}\n    Tip_5_Blocks:::processEnd --\x3e |No| Tip_4_Wait\n\n    %% Tipping close\n    Tip_5_Blocks --\x3e |Yes| Tip_6_Close(Trigger closing of tipping process):::Payment\n    Tip_6_Close -.-> |"Unreserve Deposit \\n (only if Finder)"| Alice_Finder_Deposit\n    Tip_6_Close --\x3e Payout_1("Final tip amount = median of received tips"):::Payment\n\n    %% Treasury\n    Payout_1 --\x3e Payout_2{Is there a Finder\'s fee?}:::Payment\n    Payout_2 --\x3e |Yes| Payout_3(Reduce final tip amount by Finder\'s fee):::Payment\n    Payout_2 --\x3e |No| Payout_4[("\ud83d\udcb0 Treasury")]:::Payment\n    Payout_3 --\x3e Payout_4{{"Ready to pay out"}}\n    Payout_4 --\x3e Treasury[("\ud83d\udcb0 Wait for Spending Period \\n of Treasury to end")]:::Payment\n    Treasury ==> |"Receive tip"| Beneficiary\n    Treasury -.-> |"Pay out Finder\'s fee"| Alice\n\n    %% classes\n    classDef Finder fill:#fff4bd,stroke:none;\n    classDef process fill:#c7fff9,stroke:black;\n    classDef processEnd fill:#6be6d8,stroke:black;\n    classDef Beneficiary fill:#7cd27c,stroke:#333,stroke-width:0px;\n    classDef Payment fill:#ff9393,stroke:black;'}),"\n",(0,n.jsx)(i.h2,{id:"proposing-a-tip",children:"Proposing a tip"}),"\n",(0,n.jsx)(i.p,{children:"Proposing a tip much is simpler than opening a Treasury proposal."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"A screenshot showing the Treasury options from the Governance menu",src:t(23572).c+"",width:"1646",height:"466"})}),"\n",(0,n.jsxs)(i.p,{children:["From ",(0,n.jsx)(i.a,{href:"https://polkadot.js.org/apps",children:"polkadot.js.org/apps"}),", open ",(0,n.jsx)(i.em,{children:"Governance > Treasury > Tips"})," and click the ",(0,n.jsx)(i.em,{children:"+ Propose tip"})," button."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"A screenshot showing selecting the tip request dialog",src:t(98408).c+"",width:"2334",height:"820"})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Select your account as the extrinsic submitter in the ",(0,n.jsx)(i.em,{children:"submit with account"})," field"]}),"\n",(0,n.jsxs)(i.li,{children:["Provide the address to receive the tip in the ",(0,n.jsx)(i.em,{children:"beneficiary"})," field"]}),"\n",(0,n.jsxs)(i.li,{children:["Provide a reason in the ",(0,n.jsx)(i.em,{children:"tip reason"})," field. This can either be some ",(0,n.jsx)(i.strong,{children:"descriptive words or a URL"}),". The ",(0,n.jsx)(i.em,{children:"tip reason"})," field should point to the contribution(s), e.g., the GitHub pull request, blog posts, translations or videos among other things. The tipping process will fail if the reason is not recognizable."]}),"\n",(0,n.jsxs)(i.li,{children:["Sign and submit the extrinsic with the ",(0,n.jsx)(i.em,{children:"Propose tip"})," button"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},98408:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/tipping-extrinsic-7e32d55ba84bffab6771aa590a9afd6c.png"},23572:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/tipping-navigation-65256ee30450e733f5622fb881e07c00.png"},4552:(e,i,t)=>{t.d(i,{I:()=>a,M:()=>r});var n=t(11504);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);