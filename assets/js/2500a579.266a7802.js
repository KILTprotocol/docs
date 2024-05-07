"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3684],{42948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(17624),r=n(4552),o=(n(61268),n(87768),n(77440));const l={id:"join",title:"Become a Delegator"},i=void 0,s={id:"participate/staking/delegate/join",title:"Become a Delegator",description:"In contrast to the rather difficult path to become a collator candidate, joining the delegator pool is rather simple.",source:"@site/docs/participate/01_staking/03_delegate/02_become.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/join",permalink:"/docs/participate/staking/delegate/join",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/02_become.md",tags:[],version:"current",lastUpdatedAt:1715070662,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:2,frontMatter:{id:"join",title:"Become a Delegator"},sidebar:"staking",previous:{title:"Overview",permalink:"/docs/participate/staking/delegate/overview"},next:{title:"Adjust Your Delegation Stake",permalink:"/docs/participate/staking/delegate/adjust-stake"}},c={},d=[{value:"Happy Path",id:"happy-path",level:2},{value:"Unhappy Path",id:"unhappy-path",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In contrast to the rather difficult ",(0,a.jsx)(t.a,{href:"/docs/participate/staking/become_a_collator/overview",children:"path to become a collator candidate"}),", joining the delegator pool is rather simple.\nAnyone can delegate to a collator candidate by staking a minimum of 20 KILT and calling ",(0,a.jsx)(t.code,{children:"parachainStaking -> joinDelegators"}),"."]}),"\n",(0,a.jsx)(o.cp,{}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(25236).c+"",width:"2004",height:"1334"})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Select the KILT address you want to delegate from as the extrinsic submitter (the ",(0,a.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,a.jsxs)(t.li,{children:["Select the appropriate extrinsic: ",(0,a.jsx)(t.code,{children:"parachainStaking -> joinDelegators"})]}),"\n",(0,a.jsxs)(t.li,{children:["Select the ",(0,a.jsx)(t.code,{children:"Id"})," option (the ",(0,a.jsx)(t.em,{children:"MultiAddress (LookupSource) field"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Select the collator account (the ",(0,a.jsx)(t.em,{children:"Id: AccountId"})," field)"]}),"\n",(0,a.jsx)(t.li,{children:"Choose the desired stake amount."}),"\n",(0,a.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,a.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.\nIn the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing ",(0,a.jsx)(t.code,{children:"0"}),"s.\nSo, for instance, 1 KILT needs to be written as ",(0,a.jsx)(t.code,{children:"1,000,000,000,000,000"}),", while 10,000 KILT would be written as ",(0,a.jsx)(t.code,{children:"10,000,000,000,000,000,000"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"happy-path",children:"Happy Path"}),"\n",(0,a.jsx)(t.p,{children:"If your chosen collator candidate has at least one empty slot in their delegation pool (out of 35 maximum slots at the time of writing), your delegation will be successful and you immediately start receiving rewards each time the collator you delegated produces a block."}),"\n",(0,a.jsx)("div",{className:"kilt-mermaid",children:(0,a.jsx)(t.mermaid,{value:'flowchart TD\n   A["Hold at least 20 KILT"] --\x3e |"decide on candidate"| B("Collator Candidate chosen");\n   B --\x3e |"call extrinsic joinDelegators"| C{"Can delegate to target? \\n Either \\n 1. There are empty \\n delegations or \\n 2. You delegate more \\n than another Delegator"};\n   C --\x3e |yes| D("Delegating to a Collator Candidate")\n   D --\x3e |"Collator produces block"| E("Account rewards")\n   E --\x3e |"claim"| F("Have rewards in wallet")\n    %% Styles\n    A:::unstakedFreeKilt\n    B:::preDelegationCheck\n    C:::preDelegationCheck\n    D:::activelyDelegating\n    E:::activelyDelegating\n    F:::activelyDelegating\n\n    %% StyleDef\n    classDef preDelegationCheck fill:#FFF4BD, stroke:none, color:black;\n    classDef notDelegating fill:#F1C0B9, stroke:black, color:black, stroke-width:1px;;\n    classDef unstakedFreeKilt fill:#85D2D0, stroke:black, color:black, stroke-width:1px;\n    classDef activelyDelegating fill:#94C973, stroke:#333, color:black, stroke-width:2px;\n    classDef preUnlockStaked fill:#F37970, stroke:black, color:black;'})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"If your chosen collator fails to produce blocks, neither the collator itself nor their delegators receive rewards.\nThis can happen if the collator has connectivity issues or are not building blocks fast enough."})}),"\n",(0,a.jsx)(t.h2,{id:"unhappy-path",children:"Unhappy Path"}),"\n",(0,a.jsx)(t.p,{children:"If the delegation pool of your chosen collator candidate is full, you may still delegate to them if you stake more than the current lowest delegator stake of that pool.\nWhen that happens,"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The kicked delegator will be replaced by the delegator with a higher delegation (you) immediately"}),"\n",(0,a.jsxs)(t.li,{children:["The kicked delegator's stake is prepared for unstaking as if they revoked the delegation (",(0,a.jsxs)(t.em,{children:["see ",(0,a.jsx)(t.a,{href:"#Revoking",children:"revoking"})]}),")"]}),"\n",(0,a.jsx)(t.li,{children:"A delegator needs to wait 7 days (in block time) to be able to unlock the stake.\nPlease note that it can take longer in real time as the block times assumes a constant block time of 12s, which is not guaranteed."}),"\n"]}),"\n",(0,a.jsx)("div",{className:"kilt-mermaid",children:(0,a.jsx)(t.mermaid,{value:'flowchart TD\n   A["Hold at least 20 KILT"] --\x3e |"Decide on candidate"| B("Collator candidate chosen");\n   B --\x3e |"Call extrinsic joinDelegators"| C{"Can delegate to target? \\n Either \\n 1. There are empty \\n delegations or \\n 2. You delegate more \\n than another delegator"};\n   C --\x3e |no| C2{"Balance locked?\\n e.g., previously delegated \\n without unlocking?"}\n   C2 --\x3e |no| A\n\n    %% Styles\n    A:::unstakedFreeKilt\n    B:::preDelegationCheck\n    C:::preDelegationCheck\n    C2:::notDelegating\n\n    %% StyleDef\n    classDef preDelegationCheck fill:#FFF4BD, stroke:none, color:black;\n    classDef notDelegating fill:#F1C0B9, stroke:black, color:black, stroke-width:1px;\n    classDef unstakedFreeKilt fill:#85D2D0, stroke:black, color:black, stroke-width:1px;'})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["For now, an account can only delegate to one collator at any time!\nMoreover, you can only (re-) delegate, e.g., call ",(0,a.jsx)(t.code,{children:"parachainStaking -> {joinDelegators, delegateAnotherCandidate}"}),", once per staking round."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},77440:(e,t,n)=>{n.d(t,{cp:()=>l});var a=n(17624),r=n(4552);function o(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["You can either execute this transaction in Polkadot JS Apps or the ",(0,a.jsx)(t.a,{href:"/docs/develop/builtonkilt#web-apps",children:(0,a.jsx)(t.strong,{children:"KILT Stakeboard"})}),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,a.jsx)(t.a,{href:"https://support.kilt.io/support/solutions/80000442174",children:(0,a.jsx)(t.strong,{children:"BOTLabs Trusted Entity support hub"})}),"."]})}),"\n",(0,a.jsxs)(t.p,{children:["In the Polkadot JS Apps (",(0,a.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", or ",(0,a.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),") go to ",(0,a.jsx)(t.code,{children:"Developer -> Extrinsics -> Submission"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},87768:(e,t,n)=>{n.d(t,{c:()=>l});n(11504);var a=n(65456);const r={tabItem:"tabItem_Ymn6"};var o=n(17624);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.c)(r.tabItem,l),hidden:n,children:t})}},61268:(e,t,n)=>{n.d(t,{c:()=>y});var a=n(11504),r=n(65456),o=n(53943),l=n(55592),i=n(95288),s=n(10632),c=n(27128),d=n(21148);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.Uz)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._M)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=g({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.IN)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,i.c)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=n(93664);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(17624);function x(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.MV)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=i[n].value;r!==a&&(c(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.c)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.c)("tabs-container",k.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function y(e){const t=(0,f.c)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},25236:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/parachainStaking-joinDelegators-673f3b3d0c410b6f43d425caa29f2e27.png"},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>l});var a=n(11504);const r={},o=a.createContext(r);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);