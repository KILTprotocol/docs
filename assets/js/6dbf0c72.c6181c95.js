"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9353],{6241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(5893),n=r(1151),i=r(4866),s=r(5162);const l={id:"claimer",title:"\ud83d\udc64 Claimer"},o=void 0,c={id:"develop/workshop/claimer/claimer",title:"\ud83d\udc64 Claimer",description:"This section covers the steps undertaken by the Claimer.",source:"@site/docs/develop/03_workshop/05_claimer/index.md",sourceDirName:"develop/03_workshop/05_claimer",slug:"/develop/workshop/claimer/",permalink:"/docs/develop/workshop/claimer/",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/05_claimer/index.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{id:"claimer",title:"\ud83d\udc64 Claimer"},sidebar:"workshop",previous:{title:"CType",permalink:"/docs/develop/workshop/attester/ctype"},next:{title:"DID",permalink:"/docs/develop/workshop/claimer/did"}},u={},d=[{value:"What is a Claimer?",id:"what-is-a-claimer",level:2},{value:"Folder Structure",id:"folder-structure",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This section covers the steps undertaken by the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Here's an overview:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/develop/workshop/claimer/did",children:"Create a DID"}),", which is the identity used to interact with ",(0,a.jsx)("span",{className:"label-role attester",children:"Attesters"})," and ",(0,a.jsx)("span",{className:"label-role verifier",children:"Verifiers"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Create a claim, request an attestation, and generate a credential using the attestation for our claim."}),"\n",(0,a.jsxs)(t.li,{children:["Present the claim to a ",(0,a.jsx)("span",{className:"label-role verifier",children:"Verifier"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-a-claimer",children:"What is a Claimer?"}),"\n",(0,a.jsx)(t.p,{children:"Claimers are a crucial part of the Self-Sovereign Identity system."}),"\n",(0,a.jsx)(t.p,{children:"A Claimer is an individual or institution that makes a claim or statement about their identity or abilities.\nThey can use their identity credentials to prove these claims, and third-party institutions verify them."}),"\n",(0,a.jsx)(t.p,{children:"Anyone can be a Claimer.\nAll you need to do is complete a CType and create a claim.\nThen, you can send these claims to Attesters for verification."}),"\n",(0,a.jsx)(t.p,{children:"They store their identity credentials in their digital wallets, so they decide which information to provide to which service.\nThey have full control over their data and decide which data to share, where, and how."}),"\n",(0,a.jsx)(t.p,{children:"You don't need to create a DID on the chain, meaning you are entirely independent!"}),"\n",(0,a.jsx)(t.p,{children:"Claimers can use their accounts without needing a chain connection."}),"\n",(0,a.jsx)(t.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,a.jsxs)(t.p,{children:["Create the following files in the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," folder.\nThis folders serves to mimic a ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"}),"'s perspective."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"ts-js-choice",children:[(0,a.jsxs)(s.Z,{value:"ts",label:"Typescript",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u2514\u2500 kilt-rocks/ # project\n  \u2514\u2500 claimer/ # all claimer code\n    \u251c\u2500 createClaim.ts # creates a claim\n    \u251c\u2500 createPresentation.ts # creates a presentation for verifiers\n    \u251c\u2500 generateCredential.ts # create the credential object that is sent to the attester for attestation\n    \u251c\u2500 generateKeypairs.ts # create keypairs for the light DID\n    \u2514\u2500 generateLightDid.ts # create the light DID for the claimer\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"mkdir claimer && touch claimer/createClaim.ts && touch claimer/createPresentation.ts && touch claimer/generateCredential.ts && touch claimer/generateKeypairs.ts && touch claimer/generateLightDid.ts\n"})})]}),(0,a.jsxs)(s.Z,{value:"js",label:"Javascript",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u2514\u2500 kilt-rocks/ # project\n  \u2514\u2500 claimer/ # all claimer code\n    \u251c\u2500 createClaim.js # creates a claim\n    \u251c\u2500 createPresentation.js # creates a presentation for verifiers\n    \u251c\u2500 generateCredential.js # create the credential object that is sent to the attester for attestation\n    \u251c\u2500 generateKeypairs.js # create keypairs for the light DID\n    \u2514\u2500 generateLightDid.js # create the light DID for the claimer\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"mkdir claimer && touch claimer/createClaim.js && touch claimer/createPresentation.js && touch claimer/generateCredential.js && touch claimer/generateKeypairs.js && touch claimer/generateLightDid.js\n"})})]})]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var a=r(512);const n={tabItem:"tabItem_Ymn6"};var i=r(5893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,s),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7294),n=r(512),i=r(2466),s=r(6550),l=r(469),o=r(1980),c=r(7392),u=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=p({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),v=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function j(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),n=l[r].value;n!==a&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,n.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var a=r(7294);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);