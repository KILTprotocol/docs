"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8344],{12268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(17624),s=n(4552),l=n(61268),a=n(87768);const o={id:"setup",title:"\ud83c\udf92 Setup"},i=void 0,c={id:"develop/workshop/setup",title:"\ud83c\udf92 Setup",description:"Project setup",source:"@site/docs/develop/03_workshop/02_setup.md",sourceDirName:"develop/03_workshop",slug:"/develop/workshop/setup",permalink:"/docs/develop/workshop/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/02_setup.md",tags:[],version:"current",lastUpdatedAt:1712840460,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:2,frontMatter:{id:"setup",title:"\ud83c\udf92 Setup"},sidebar:"workshop",previous:{title:"\ud83d\udc4b\ud83c\udffb Welcome",permalink:"/docs/develop/workshop/welcome"},next:{title:"\ud83d\udc53 Overview",permalink:"/docs/develop/workshop/overview"}},d={},u=[{value:"Project setup",id:"project-setup",level:2},{value:"Project Folder",id:"project-folder",level:2},{value:"PILT Tokens",id:"pilt-tokens",level:2},{value:"Blockchain Connection",id:"blockchain-connection",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"project-setup",children:"Project setup"}),"\n",(0,r.jsxs)(t.p,{children:["Create a new project in a fresh directory and navigate into it by running ",(0,r.jsx)(t.code,{children:"mkdir kilt-rocks && cd kilt-rocks"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The dependencies needed are the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/KILTprotocol/sdk-js#readme",children:"KILT SDK-JS"})," - for KILT functionality"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/motdotla/dotenv#readme",children:"dotenv"})," - to load environment variables"]}),"\n",(0,r.jsxs)(t.li,{children:["If you use Typescript and not JavaScript ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/ts-node",children:"ts-node"})," and ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"Typescript"})," - to execute TS code"]}),"\n"]}),"\n",(0,r.jsxs)(l.c,{groupId:"ts-js-choice",children:[(0,r.jsxs)(a.c,{value:"ts",label:"Typescript",default:!0,children:[(0,r.jsx)(t.p,{children:"Initialize the project and install dependencies."}),(0,r.jsxs)(l.c,{groupId:"npm2yarn",children:[(0,r.jsx)(a.c,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm init -y\nnpm install @kiltprotocol/sdk-js dotenv ts-node typescript\n"})})}),(0,r.jsx)(a.c,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn init -y\nyarn add @kiltprotocol/sdk-js dotenv ts-node typescript\n"})})}),(0,r.jsx)(a.c,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm init -y\npnpm add @kiltprotocol/sdk-js dotenv ts-node typescript\n"})})})]})]}),(0,r.jsxs)(a.c,{value:"js",label:"Javascript",default:!0,children:[(0,r.jsx)(t.p,{children:"Initialize the project and install dependencies."}),(0,r.jsxs)(l.c,{groupId:"npm2yarn",children:[(0,r.jsx)(a.c,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm init -y\nnpm install @kiltprotocol/sdk-js dotenv\n"})})}),(0,r.jsx)(a.c,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn init -y\nyarn add @kiltprotocol/sdk-js dotenv\n"})})}),(0,r.jsx)(a.c,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm init -y\npnpm add @kiltprotocol/sdk-js dotenv\n"})})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"project-folder",children:"Project Folder"}),"\n",(0,r.jsxs)(l.c,{groupId:"ts-js-choice",children:[(0,r.jsxs)(a.c,{value:"ts",label:"Typescript",default:!0,children:[(0,r.jsx)(t.p,{children:"Create the following remaining files and folders to end up with the folder structure below:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\u2514\u2500 kilt-rocks/ # project\n    \u251c\u2500 attester/ # all attester code\n    \u251c\u2500 claimer/ # all claimer code\n    \u251c\u2500 verify.ts # all verifier code\n    \u2514\u2500 .env # environment variables\n"})})]}),(0,r.jsxs)(a.c,{value:"js",label:"Javascript",children:[(0,r.jsx)(t.p,{children:"Create the following remaining files and folders to end up with the folder structure below:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\u2514\u2500 kilt-rocks/ # project\n    \u251c\u2500 attester/ # all attester code\n    \u251c\u2500 claimer/ # all claimer code\n    \u251c\u2500 verify.js # all verifier code\n    \u2514\u2500 .env # environment variables\n"})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"pilt-tokens",children:"PILT Tokens"}),"\n",(0,r.jsx)(t.p,{children:"This workshop interacts with the Peregrine test blockchain, which requires you to pay for each transaction with Peregrine Kilt (PILT) tokens."}),"\n",(0,r.jsxs)(t.p,{children:["But don't worry. PILT tokens have no value, and you can request them from the ",(0,r.jsx)(t.a,{href:"https://faucet.peregrine.kilt.io",children:"faucet"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"blockchain-connection",children:"Blockchain Connection"}),"\n",(0,r.jsx)(t.p,{children:"Before using any SDK functionality, you must initialize and configure the Kilt SDK."}),"\n",(0,r.jsxs)(t.p,{children:["As this workshop uses the ",(0,r.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2Fparachain-public-ws%2F#/explorer",children:"Peregrine Testnet"})," you use its address whenever using the SDK to interact with the Kilt blockchain."]}),"\n",(0,r.jsx)(t.p,{children:"You do this by calling the following function:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JavaScript",children:"await Kilt.connect({address})\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Where ",(0,r.jsx)(t.code,{children:"address"})," is the address of the full node you want to connect to, which for this workshop, is ",(0,r.jsx)(t.code,{children:"wss://peregrine.kilt.io"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For convenience, add the address to the ",(0,r.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-env",metastring:'title=".env"',children:"WSS_ADDRESS=wss://peregrine.kilt.io\n"})}),"\n",(0,r.jsx)(t.p,{children:"That's it for the basic setup - You're good to go!"})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},87768:(e,t,n)=>{n.d(t,{c:()=>a});n(11504);var r=n(65456);const s={tabItem:"tabItem_Ymn6"};var l=n(17624);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.c)(s.tabItem,a),hidden:n,children:t})}},61268:(e,t,n)=>{n.d(t,{c:()=>w});var r=n(11504),s=n(65456),l=n(53943),a=n(55592),o=n(95288),i=n(10632),c=n(27128),d=n(21148);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.Uz)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._M)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,u]=f({queryString:n,groupId:s}),[m,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,d.IN)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),j=(()=>{const e=c??m;return h({value:e,tabValues:l})?e:null})();(0,o.c)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,l]),tabValues:l}}var v=n(93664);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(17624);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.MV)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),s=o[n].value;s!==r&&(c(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.c)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.c)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function w(e){const t=(0,v.c)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(t))}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var r=n(11504);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);