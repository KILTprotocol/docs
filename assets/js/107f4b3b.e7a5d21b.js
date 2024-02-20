"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5624],{41516:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(17624),s=i(4552),o=i(77440);const r={id:"exit",title:"Leave the Set of Delegators"},a=void 0,c={id:"participate/staking/delegate/exit",title:"Leave the Set of Delegators",description:"A Delegator can revoke their delegation by calling parachainStaking -> leaveDelegators.",source:"@site/docs/participate/01_staking/03_delegate/04_exit.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/exit",permalink:"/docs/participate/staking/delegate/exit",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/04_exit.md",tags:[],version:"current",lastUpdatedAt:1708428845,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:4,frontMatter:{id:"exit",title:"Leave the Set of Delegators"},sidebar:"staking",previous:{title:"Adjust Your Delegation Stake",permalink:"/docs/participate/staking/delegate/adjust-stake"},next:{title:"Lifecycle of a Delegator",permalink:"/docs/participate/staking/delegate/lifecycle"}},l={},d=[];function p(e){const t={a:"a",code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A Delegator can revoke their delegation by calling ",(0,n.jsx)(t.code,{children:"parachainStaking -> leaveDelegators"}),".\nAs a result, you won't receive any rewards immediately after the transaction is successfully executed."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Your previously delegated amount will be prepared for unstaking."}),"\n",(0,n.jsxs)(t.li,{children:["You need to wait 7 days (in block time) before you can unlock your unstaked tokens, see the section ",(0,n.jsx)(t.a,{href:"/docs/participate/staking/unlock-unstaked",children:"Unlock Unstaked"})," for more information."]}),"\n",(0,n.jsx)(t.li,{children:"Exiting does not count towards the limit of \u201c1 delegation per round\u201d."}),"\n"]}),"\n",(0,n.jsx)(o.cp,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(7688).c+"",width:"1998",height:"922"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select the KILT address you delegated from as the extrinsic submitter (the ",(0,n.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,n.jsxs)(t.li,{children:["Select the appropriate extrinsic: ",(0,n.jsx)(t.code,{children:"parachainStaking -> leaveDelegators"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,n.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},77440:(e,t,i)=>{i.d(t,{cp:()=>r});var n=i(17624),s=i(4552);function o(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can either execute this transaction in Polkadot JS Apps or the ",(0,n.jsx)(t.a,{href:"/docs/develop/builtonkilt#web-apps",children:(0,n.jsx)(t.strong,{children:"KILT Stakeboard"})}),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,n.jsx)(t.a,{href:"https://support.kilt.io/support/solutions/80000442174",children:(0,n.jsx)(t.strong,{children:"BOTLabs Trusted Entity support hub"})}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["In the Polkadot JS Apps (",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", or ",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),") go to ",(0,n.jsx)(t.code,{children:"Developer -> Extrinsics -> Submission"}),"."]})]})}function r(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},7688:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/parachainStaking-leaveDelegators-19bb6f352d0c3d5bfc92923a741c9e4c.png"},4552:(e,t,i)=>{i.d(t,{I:()=>a,M:()=>r});var n=i(11504);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);