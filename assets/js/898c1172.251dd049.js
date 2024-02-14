"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9764],{8417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=n(5893),a=n(1151),o=n(4866),s=n(5162),i=n(5720);const l={id:"unlock-unstaked",title:"Unlock Unstaked Tokens"},c=void 0,u={id:"participate/staking/unlock-unstaked",title:"Unlock Unstaked Tokens",description:"Before you can unlock your previously staked tokens, you have to wait 7 days (in block time).",source:"@site/docs/participate/01_staking/05_unlock_unstaked.md",sourceDirName:"participate/01_staking",slug:"/participate/staking/unlock-unstaked",permalink:"/docs/participate/staking/unlock-unstaked",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/05_unlock_unstaked.md",tags:[],version:"current",lastUpdatedAt:1707906150,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:5,frontMatter:{id:"unlock-unstaked",title:"Unlock Unstaked Tokens"},sidebar:"staking",previous:{title:"Claim Staking Rewards",permalink:"/docs/participate/staking/claim-rewards"},next:{title:"Troubleshooting",permalink:"/docs/participate/staking/troubleshooting"}},d={},h=[];function p(e){const t={admonition:"admonition",code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Before you can unlock your previously staked tokens, you have to wait 7 days (in block time)."}),"\n",(0,r.jsx)(i.ZP,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(4582).Z+"",width:"1992",height:"1196"})}),"\n",(0,r.jsxs)(o.Z,{groupId:"collator-delegator",defaultValue:"Collator",children:[(0,r.jsxs)(s.Z,{value:"Collator",label:"Collator",children:[(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Select any account with enough balance to cover the transaction fee, which is around 0.005 KILT (the ",(0,r.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,r.jsxs)(t.li,{children:["Select the appropriate extrinsic: ",(0,r.jsx)(t.code,{children:"parachainStaking -> unlockUnstaked(target)"})]}),"\n",(0,r.jsxs)(t.li,{children:["Select the ",(0,r.jsx)(t.code,{children:"Id"})," option (the ",(0,r.jsx)(t.em,{children:"MultiAddress (LookupSource) field"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Select your collator's KILT address (the ",(0,r.jsx)(t.em,{children:"Id: AccountId"})," field)"]}),"\n",(0,r.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,r.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]}),(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"You have unstaked tokens if you have either reduced your stake without increasing it for (at least) same amount afterwards or executing your exit request."})})]}),(0,r.jsxs)(s.Z,{value:"Delegator",label:"Delegator",children:[(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Select any account with enough balance to cover the transaction fee, which is around 0.005 KILT (the ",(0,r.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,r.jsxs)(t.li,{children:["Select the appropriate extrinsic: ",(0,r.jsx)(t.code,{children:"parachainStaking -> unlockUnstaked(target)"})]}),"\n",(0,r.jsxs)(t.li,{children:["Select the ",(0,r.jsx)(t.code,{children:"Id"})," option (the ",(0,r.jsx)(t.em,{children:"MultiAddress (LookupSource) field"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Select the KILT address you delegated from (the ",(0,r.jsx)(t.em,{children:"Id: AccountId"})," field)"]}),"\n",(0,r.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,r.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]}),(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"Even if you have not exited, reduced or removed your delegation, you can still have unstaked tokens.\nThis can happen if either of the following events occurred"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"You were kicked out of your collator candidate's delegation pool because all current delegators have a higher stake"}),"\n",(0,r.jsx)(t.li,{children:"Your collator candidate intentionally left the collator pool."}),"\n"]})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5720:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(5893),a=n(1151);function o(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["You can either execute this transaction in Polkadot JS Apps or the ",(0,r.jsx)(t.a,{href:"/docs/develop/builtonkilt#web-apps",children:(0,r.jsx)(t.strong,{children:"KILT Stakeboard"})}),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,r.jsx)(t.a,{href:"https://support.kilt.io/support/solutions/80000442174",children:(0,r.jsx)(t.strong,{children:"BOTLabs Trusted Entity support hub"})}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["In the Polkadot JS Apps (",(0,r.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", or ",(0,r.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),") go to ",(0,r.jsx)(t.code,{children:"Developer -> Extrinsics -> Submission"}),"."]})]})}function s(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(512),o=n(2466),s=n(6550),i=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[m,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),k(e)}),[d,k,o]),tabValues:o}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function y(e){const t=(0,k.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},4582:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/parachainStaking-unlockUnstaked-b250815bd10f91e7aa7555e2530bb56f.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);