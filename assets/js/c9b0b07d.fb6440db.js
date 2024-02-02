"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6370],{4849:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(5893),r=t(1151);const s={id:"troubleshoot-sdk",title:"Troubleshoot"},i=void 0,l={id:"develop/sdk/troubleshoot-sdk",title:"Troubleshoot",description:"Solutions and workarounds for common or unresolved issues.",source:"@site/docs/develop/01_sdk/05_troubleshoot.md",sourceDirName:"develop/01_sdk",slug:"/develop/sdk/troubleshoot-sdk",permalink:"/docs/develop/sdk/troubleshoot-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/05_troubleshoot.md",tags:[],version:"current",lastUpdatedAt:1706870076,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:5,frontMatter:{id:"troubleshoot-sdk",title:"Troubleshoot"},sidebar:"sdk",previous:{title:"KILT Distillery",permalink:"/docs/develop/sdk/integrate/howto-integrate-distillery"}},d={},c=[{value:"Webpack &lt; 5 used to include polyfills",id:"webpack--5-used-to-include-polyfills",level:2},{value:"Solution",id:"solution",level:3},{value:"<code>redeclaration of import Buffer</code>",id:"redeclaration-of-import-buffer",level:2},{value:"Solution",id:"solution-1",level:3}];function u(e){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Solutions and workarounds for common or unresolved issues."}),"\n",(0,n.jsx)(o.h2,{id:"webpack--5-used-to-include-polyfills",children:"Webpack < 5 used to include polyfills"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"ERROR in ./node_modules/cbor/lib/commented.js 3:15-32\nModule not found: Error: Can't resolve 'stream' in 'node_modules/cbor/lib'\n\nBREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.\nThis is no longer the case.\nVerify if you need this module and configure a polyfill for it.\n"})}),"\n",(0,n.jsx)(o.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(o.p,{children:"The problem occurs because one of the dependecies you are using in your project (or used by a library you depend on) relies on NodeJS built-ins which are not available in a browser context.\nYou should aim to identify and replace these dependencies with browser-compatible alternatives."}),"\n",(0,n.jsxs)(o.p,{children:["You might see the above error when using older versions of the KILT SDK with ",(0,n.jsx)(o.code,{children:"create-react-app"}),". Make sure that you are using ",(0,n.jsx)(o.code,{children:"@kiltprotocol/sdk-js"})," version 0.33.0 and above, which work in a browser context out-of-the-box."]}),"\n",(0,n.jsx)(o.p,{children:"If the affected dependencies cannot be removed or replaced, you may need to look into setting up polyfills for the required NodeJS built-ins."}),"\n",(0,n.jsx)(o.h2,{id:"redeclaration-of-import-buffer",children:(0,n.jsx)(o.code,{children:"redeclaration of import Buffer"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"Uncaught SyntaxError: redeclaration of import Buffer\n"})}),"\n",(0,n.jsx)(o.h3,{id:"solution-1",children:"Solution"}),"\n",(0,n.jsxs)(o.p,{children:["Your project might be using polyfills for the NodeJS built-in ",(0,n.jsx)(o.code,{children:"Buffer"}),", which can cause conflicts with some polkadot-js libraries such as ",(0,n.jsx)(o.code,{children:"@polkadot/react-identicon"}),". You can try upgrading the SDK and its dependencies to their latest versions. It's possible that upgrading will allow you to drop these polyfills from your configuration."]})]})}function a(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>i});var n=t(7294);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);