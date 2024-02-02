"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1811],{8386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var n=a(5893),r=a(1151),s=a(4866),o=a(5162),i=a(5720);const l={id:"adjust-stake",title:"Adjust Your Own Stake"},c=void 0,u={id:"participate/staking/advanced_collator_section/adjust-stake",title:"Adjust Your Own Stake",description:"A collator can increase or decrease their stake, always within the limits of the minimum and maximum allowed stake amounts.",source:"@site/docs/participate/01_staking/02_advanced_collator_section/01_adjust_stake.md",sourceDirName:"participate/01_staking/02_advanced_collator_section",slug:"/participate/staking/advanced_collator_section/adjust-stake",permalink:"/docs/participate/staking/advanced_collator_section/adjust-stake",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/02_advanced_collator_section/01_adjust_stake.md",tags:[],version:"current",lastUpdatedAt:1706870076,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:1,frontMatter:{id:"adjust-stake",title:"Adjust Your Own Stake"},sidebar:"staking",previous:{title:"Join the Collator Candidate Pool",permalink:"/docs/participate/staking/become_a_collator/join"},next:{title:"Leave the Collator Candidate Pool",permalink:"/docs/participate/staking/advanced_collator_section/exit"}},d={},h=[];function p(e){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A collator can increase or decrease their stake, always within the limits of the minimum and maximum allowed stake amounts.\nThe corresponding extrinsics for these operations are ",(0,n.jsx)(t.code,{children:"parachainStaking -> candidateStakeMore(more)"})," and ",(0,n.jsx)(t.code,{children:"parachainStaking -> candidateStakeLess(less)"}),"."]}),"\n",(0,n.jsx)(i.ZP,{}),"\n",(0,n.jsxs)(s.Z,{groupId:"collator-adjust-stake",defaultValue:"Stake more",children:[(0,n.jsxs)(o.Z,{value:"Stake more",label:"Stake more",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(2122).Z+"",width:"2000",height:"1034"})}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select your collator KILT address as the extrinsic submitter (the ",(0,n.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,n.jsxs)(t.li,{children:["Select the extrinsic: ",(0,n.jsx)(t.code,{children:"parachainStaking -> collatorStakeMore"})]}),"\n",(0,n.jsxs)(t.li,{children:["Choose the stake amount that you want to add or remove from your current stake (the ",(0,n.jsx)(t.em,{children:"more"})," field).\nYou can add up to the maximum of 200,000 KILT and your maximum available balance."]}),"\n",(0,n.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,n.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]})]}),(0,n.jsxs)(o.Z,{value:"Stake less",label:"Stake less",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(3547).Z+"",width:"2008",height:"1066"})}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select the collators's KILT address as the extrinsic submitter (the ",(0,n.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,n.jsxs)(t.li,{children:["Select the extrinsic: ",(0,n.jsx)(t.code,{children:"parachainStaking -> collatorStakeLess"})]}),"\n",(0,n.jsxs)(t.li,{children:["Choose the desired stake amount which you want to remove from your current stake (the ",(0,n.jsx)(t.em,{children:"less"})," field).\nYou can reduce down to minimum collator amount (10,000 KILT), e.g., any value up to the difference of your current stake and the minimum will be accepted."]}),"\n",(0,n.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,n.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5720:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(5893),r=a(1151);function s(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can either execute this transaction in Polkadot JS Apps or the ",(0,n.jsx)(t.a,{href:"/docs/develop/builtonkilt#web-apps",children:(0,n.jsx)(t.strong,{children:"KILT Stakeboard"})}),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,n.jsx)(t.a,{href:"https://support.kilt.io/support/solutions/80000442174",children:(0,n.jsx)(t.strong,{children:"BOTLabs Trusted Entity support hub"})}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["In the Polkadot JS Apps (",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", or ",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),") go to ",(0,n.jsx)(t.code,{children:"Developer -> Extrinsics -> Submission"}),"."]})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var n=a(512);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7294),r=a(512),s=a(2466),o=a(6550),i=a(469),l=a(1980),c=a(7392),u=a(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),k=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(5893);function g(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==n&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",k.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},3547:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-candidateStakeLess-366c5d4158b1960da5ad05c0f70d7bce.png"},2122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-candidateStakeMore-b751f5ac3b1cb764f2f2c6afdd14f8d9.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var n=a(7294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);