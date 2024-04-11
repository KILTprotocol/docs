"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1839],{76244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(17624),a=r(4552),o=r(61268),s=r(87768);const i={id:"howto-integrate-browser",title:"Browser"},l=void 0,c={id:"develop/sdk/integrate/howto-integrate-browser",title:"Browser",description:"Our JavaScript SDK (@kiltprotocol/sdk-js) is ready to be used in a browser context. For rapid prototyping of simple web apps, we provide a code bundle of the entire SDK which you can embed in a site by adding the following script tag:",source:"@site/docs/develop/01_sdk/04_integrate/02_browser.md",sourceDirName:"develop/01_sdk/04_integrate",slug:"/develop/sdk/integrate/howto-integrate-browser",permalink:"/docs/develop/sdk/integrate/howto-integrate-browser",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/04_integrate/02_browser.md",tags:[],version:"current",lastUpdatedAt:1712840460,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:2,frontMatter:{id:"howto-integrate-browser",title:"Browser"},sidebar:"sdk",previous:{title:"NodeJS",permalink:"/docs/develop/sdk/integrate/howto-integrate-nodejs"},next:{title:"KILT Distillery",permalink:"/docs/develop/sdk/integrate/howto-integrate-distillery"}},u={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Our JavaScript SDK (",(0,n.jsx)(t.code,{children:"@kiltprotocol/sdk-js"}),") is ready to be used in a browser context. For rapid prototyping of simple web apps, we provide a code bundle of the entire SDK which you can embed in a site by adding the following script tag:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<script src="https://unpkg.com/@kiltprotocol/sdk-js@0.35.0/dist/sdk-js.min.umd.js"><\/script>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The SDK's functions then become available via a new ",(0,n.jsx)(t.code,{children:"kilt"})," property on the global ",(0,n.jsx)(t.code,{children:"window"})," object."]}),"\n",(0,n.jsxs)(t.p,{children:["To get started with your first ",(0,n.jsx)(t.strong,{children:"React application"})," using KILT, we recommend using either the ",(0,n.jsx)(t.a,{href:"/docs/develop/sdk/integrate/howto-integrate-distillery",children:"KILT Distillery"})," CLI tool for bootstrapping or a framework like ",(0,n.jsx)(t.a,{href:"https://vitejs.dev",children:"Vite"})," or ",(0,n.jsx)(t.a,{href:"https://nextjs.org",children:"Next.js"})," that takes away some of the complexity in building and testing a React application. You can find a broader selection of popular React-powered frameworks on the ",(0,n.jsx)(t.a,{href:"https://react.dev/learn/start-a-new-react-project",children:"React project's homepage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"After completing the respective tool's recommended steps to initialize your project, simply add the SDK to your dependencies and you are ready to hack away!"}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"You should of course familiarize yourself with the tool of your choice, but these commands have served us well in the past:"}),(0,n.jsxs)(o.c,{groupId:"vite-nextjs",children:[(0,n.jsx)(s.c,{value:"vite",label:"Vite",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn create vite my-kilt-app --template react-ts\ncd my-kilt-app\nyarn add @kiltprotocol/sdk-js\n"})})}),(0,n.jsx)(s.c,{value:"nextJS",label:"NextJS",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn create next-app my-kilt-app\ncd my-kilt-app\nyarn add @kiltprotocol/sdk-js\n"})})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},87768:(e,t,r)=>{r.d(t,{c:()=>s});r(11504);var n=r(65456);const a={tabItem:"tabItem_Ymn6"};var o=r(17624);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.c)(a.tabItem,s),hidden:r,children:t})}},61268:(e,t,r)=>{r.d(t,{c:()=>j});var n=r(11504),a=r(65456),o=r(53943),s=r(55592),i=r(95288),l=r(10632),c=r(27128),u=r(21148);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.Uz)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._M)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.IN)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,i.c)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(93664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(17624);function w(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.MV)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.c)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function j(e){const t=(0,b.c)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},4552:(e,t,r)=>{r.d(t,{I:()=>i,M:()=>s});var n=r(11504);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);