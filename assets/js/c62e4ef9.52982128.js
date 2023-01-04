"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={id:"howto-integrate-browser",title:"Browser"},a=void 0,s={unversionedId:"develop/sdk/integrate/howto-integrate-browser",id:"develop/sdk/integrate/howto-integrate-browser",title:"Browser",description:'Integrating the KILT SDK into a browser application involves "tricking" the browser into believing it is running on a Node server.',source:"@site/docs/develop/01_sdk/04_integrate/02_browser.md",sourceDirName:"develop/01_sdk/04_integrate",slug:"/develop/sdk/integrate/howto-integrate-browser",permalink:"/docs/develop/sdk/integrate/howto-integrate-browser",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/04_integrate/02_browser.md",tags:[],version:"current",lastUpdatedAt:1654844581,formattedLastUpdatedAt:"Jun 10, 2022",sidebarPosition:2,frontMatter:{id:"howto-integrate-browser",title:"Browser"},sidebar:"sdk",previous:{title:"NodeJS",permalink:"/docs/develop/sdk/integrate/howto-integrate-nodejs"},next:{title:"KILT Distillery",permalink:"/docs/develop/sdk/integrate/howto-integrate-distillery"}},l={},p=[],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Integrating the KILT SDK into a browser application involves "tricking" the browser into believing it is running on a Node server.\nThis is needed for the advanced cryptographic primitives to work properly.'),(0,o.kt)("p",null,"To simplify the setup, we recommend using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/integrate/howto-integrate-distillery"},"KILT Distillery")," or something like ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/integrate/howto-integrate-vitejs"},"ViteJS")," to bootstrap a project using the KILT SDK."))}d.isMDXComponent=!0}}]);