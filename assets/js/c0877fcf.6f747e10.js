"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4196],{70852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(17624),n=r(4552),s=r(61268),o=r(87768);const l={id:"attester",title:"\ud83c\udfe2 Attester"},c=void 0,i={id:"develop/workshop/attester/attester",title:"\ud83c\udfe2 Attester",description:"This section of the workshop covers creating the Attester code. The steps are the following:",source:"@site/docs/develop/03_workshop/04_attester/index.md",sourceDirName:"develop/03_workshop/04_attester",slug:"/develop/workshop/attester/",permalink:"/docs/develop/workshop/attester/",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/04_attester/index.md",tags:[],version:"current",lastUpdatedAt:1709637884,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"attester",title:"\ud83c\udfe2 Attester"},sidebar:"workshop",previous:{title:"\ud83d\udc53 Overview",permalink:"/docs/develop/workshop/overview"},next:{title:"Account",permalink:"/docs/develop/workshop/attester/account"}},u={},d=[{value:"Folder Structure",id:"folder-structure",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This section of the workshop covers creating the ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," code. The steps are the following:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/develop/workshop/attester/account",children:"Create an account"})," to pay for all transactions and storage deposits."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/develop/workshop/attester/did",children:"Create a DID"}),", which is the identity used to create attestations."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"While you can always switch the KILT account and pay deposits and fees with any account you like, your DID stays the same and is the way Claimers identify and trust you."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Before you can attest claims, ",(0,a.jsx)(t.a,{href:"/docs/develop/workshop/attester/ctype",children:"you need a CType"})," that describes and gives context to what you attest."]}),"\n",(0,a.jsxs)(t.li,{children:["Once you have a way to pay fees and deposits, have an identity, and a CType, ",(0,a.jsx)(t.a,{href:"/docs/develop/workshop/attestation",children:"you can create attestations"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,a.jsxs)(t.p,{children:["Create the following files in the ",(0,a.jsx)(t.code,{children:"attester"})," folder.\nThese folders mimic an ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," service."]}),"\n",(0,a.jsxs)(s.c,{groupId:"ts-js-choice",children:[(0,a.jsx)(o.c,{value:"ts",label:"Typescript",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u2514\u2500 kilt-rocks/ # project\n  \u2514\u2500 attester/ # all attester code\n     \u251c\u2500 attestCredential.ts # issues attestations\n     \u251c\u2500 ctypeSchema.ts # create a local CType definition\n     \u251c\u2500 generateAccount.ts # functions for setting up and loading the attester's account\n     \u251c\u2500 generateCtype.ts # register the CType on chain\n     \u251c\u2500 generateDid.ts # registers the attester's on-chain DID\n     \u2514\u2500 generateKeypairs.ts # setup the keys for the attester's DID\n"})})}),(0,a.jsx)(o.c,{value:"js",label:"Javascript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u2514\u2500 kilt-rocks/ # project\n  \u2514\u2500 attester/ # all attester code\n     \u251c\u2500 attestCredential.js # issues attestations\n     \u251c\u2500 ctypeSchema.js # create a local CType definition\n     \u251c\u2500 generateAccount.js # functions for setting up and loading the attester's account\n     \u251c\u2500 generateCtype.js # register the CType on chain\n     \u251c\u2500 generateDid.js # registers the attester's on-chain DID\n     \u2514\u2500 generateKeypairs.js # setup the keys for the attester's DID\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},87768:(e,t,r)=>{r.d(t,{c:()=>o});r(11504);var a=r(65456);const n={tabItem:"tabItem_Ymn6"};var s=r(17624);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.c)(n.tabItem,o),hidden:r,children:t})}},61268:(e,t,r)=>{r.d(t,{c:()=>j});var a=r(11504),n=r(65456),s=r(53943),o=r(55592),l=r(95288),c=r(10632),i=r(27128),u=r(21148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,i.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.Uz)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._M)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=f({queryString:r,groupId:n}),[m,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.IN)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=i??m;return p({value:e,tabValues:s})?e:null})();(0,l.c)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(93664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(17624);function g(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.MV)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==a&&(i(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.c)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.c)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,n.c)("tabs-container",b.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(w,{...e,...t})]})}function j(e){const t=(0,v.c)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},4552:(e,t,r)=>{r.d(t,{I:()=>l,M:()=>o});var a=r(11504);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);