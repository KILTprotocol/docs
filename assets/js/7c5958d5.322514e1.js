"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2372],{17040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(17624),r=n(4552),o=n(61268),s=n(87768);const i={id:"troubleshooting",title:"Troubleshooting"},l=void 0,c={id:"participate/staking/troubleshooting",title:"Troubleshooting",description:"<Tabs",source:"@site/docs/participate/01_staking/06_troubleshooting.md",sourceDirName:"participate/01_staking",slug:"/participate/staking/troubleshooting",permalink:"/docs/participate/staking/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/06_troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1716901802,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:6,frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"staking",previous:{title:"Unlock Unstaked Tokens",permalink:"/docs/participate/staking/unlock-unstaked"}},d={},u=[{value:"Collator Rewards Have Stopped",id:"collator-rewards-have-stopped",level:2},{value:"Delegator Rewards Have Stopped",id:"delegator-rewards-have-stopped",level:2},{value:"Why Can&#39;t I Transfer Unstaked Tokens?",id:"why-cant-i-transfer-unstaked-tokens",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.c,{groupId:"collator-delegator",defaultValue:"Collator",children:[(0,a.jsxs)(s.c,{value:"Collator",label:"Collator",children:[(0,a.jsx)(t.p,{children:"There are a few things that can be checked to make sure everything is set up correctly."}),(0,a.jsxs)(t.p,{children:["If the collator's account is shown next to some of the blocks on any network explorer, e.g., the one offered by PolkadotJS Apps, then the collator is correctly producing blocks and getting rewarded for it.\nIf the logs print the message that starts with a ","\ud83c\udf81"," emoji, it indicates that the collator setup is correct but that the blocks produced are not included by the Relay Chain.\nThis typically signals some issues about the node hardware or connectivity.\nIf not, it might be that the node does not produce and send blocks fast enough.\nThis can be caused by slow hardware or a slow internet connection.\nAlso, note that a high bandwidth connection can still be slow if it has a high ping!\nBandwidth and latency do not necessarily come hand in hand.\nIn this case, it is better to rule out other options before thinking about upgrading the collator's hardware."]}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Check that the session keys are associated with the validatorId (aka AccountId).\nThere should be a 32 Byte long public key stored in ",(0,a.jsx)(t.code,{children:"session > nextKeys(your AccountId)"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Check that the node has the corresponding private key for the public session key.\nConnect to the node and query ",(0,a.jsx)(t.code,{children:"author > hasKey(<pubKey from 1.>, aura)"})," to see if it returns ",(0,a.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Check that the node is fully synced with the Relay Chain & parachain (best and finalized block number is equal to the one shown in the PolkadotJS Apps (",(0,a.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", ",(0,a.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),") and on Subscan (",(0,a.jsx)(t.a,{href:"https://spiritnet.subscan.io/",children:"Spiritnet"}),", ",(0,a.jsx)(t.a,{href:"https://kilt-testnet.subscan.io/",children:"Peregrine"}),")."]}),"\n",(0,a.jsxs)(t.li,{children:["Check that the collator is among the selected candidates.\nIts address should included in the list returned by querying ",(0,a.jsx)(t.code,{children:"parachainStaking > topCandidates()"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Check that the ",(0,a.jsx)(t.code,{children:"parachainStaking"})," pallet has registered the collator's address among the authorized authors in the ",(0,a.jsx)(t.code,{children:"session"}),".\nIts address should be listed when querying ",(0,a.jsx)(t.code,{children:"session > validators()"}),"."]}),"\n"]}),(0,a.jsx)(t.h2,{id:"collator-rewards-have-stopped",children:"Collator Rewards Have Stopped"}),(0,a.jsx)(t.p,{children:"If you have stopped receiving rewards, either of the following is true:"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["You were kicked out of the top collator candidate list because your total stake is too low.\nSee the ",(0,a.jsx)(t.a,{href:"/docs/participate/staking/become_a_collator/join#check-your-position-in-the-collators-queue",children:"section about joining"})," for the necessary steps to retrieve the least staked candidate address in that list.\nYou can query their stake by going to ",(0,a.jsx)(t.code,{children:"Developer -> Chain State"})," calling ",(0,a.jsx)(t.code,{children:"parachainStaking -> candidatePool(address) -> +"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"You have connectivity issues, see above for resolution tips."}),"\n"]})]}),(0,a.jsxs)(s.c,{value:"Delegator",label:"Delegator",children:[(0,a.jsx)(t.h2,{id:"delegator-rewards-have-stopped",children:"Delegator Rewards Have Stopped"}),(0,a.jsx)(t.p,{children:"If you have stopped receiving rewards, either"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"You were kicked out of your collator candidate's delegation pool because all current delegators have a higher stake or"}),"\n",(0,a.jsxs)(t.li,{children:["Your collator candidate stopped producing blocks, because:","\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"They left the collator candidate pool intentionally so they don't have an associated collator state on-chain henceforth; or"}),"\n",(0,a.jsx)(t.li,{children:"They are not among the top staked candidates (of which there are 30 at the time of writing 2022-05-05); or"}),"\n",(0,a.jsx)(t.li,{children:"They are offline."}),"\n"]}),"\n"]}),"\n"]}),(0,a.jsxs)(t.p,{children:["In case of 1. or 2i., your stake will automatically be unstaked and prepared for ",(0,a.jsx)(t.a,{href:"/docs/participate/staking/unlock-unstaked",children:"unlocking"}),".\nOtherwise, in case of 2ii. and 2iii., you need to ",(0,a.jsx)(t.a,{href:"/docs/participate/staking/delegate/exit",children:"manually initiate the unlocking period"})," if you don't want to or cannot delegate to another Collator candidate."]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"why-cant-i-transfer-unstaked-tokens",children:"Why Can't I Transfer Unstaked Tokens?"}),"\n",(0,a.jsxs)(t.p,{children:["Staking puts a lock on your tokens which blocks them from being transferred.\nYou can still use them for participating in Governance.\nIf your funds are unstaked, you still need to wait 7 days (in block time) to ",(0,a.jsx)(t.a,{href:"/docs/participate/staking/unlock-unstaked",children:"unlock tokens after unstaking them"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},87768:(e,t,n)=>{n.d(t,{c:()=>s});n(11504);var a=n(65456);const r={tabItem:"tabItem_Ymn6"};var o=n(17624);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.c)(r.tabItem,s),hidden:n,children:t})}},61268:(e,t,n)=>{n.d(t,{c:()=>w});var a=n(11504),r=n(65456),o=n(53943),s=n(55592),i=n(95288),l=n(10632),c=n(27128),d=n(21148);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.Uz)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._M)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=f({queryString:n,groupId:r}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.IN)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,i.c)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=n(93664);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(17624);function y(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.MV)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),s(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.c)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,r.c)("tabs-container",k.tabList),children:[(0,m.jsx)(y,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function w(e){const t=(0,g.c)();return(0,m.jsx)(x,{...e,children:u(e.children)},String(t))}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>s});var a=n(11504);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);