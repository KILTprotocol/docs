"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),i=r(2635);const o={id:"exit",title:"Leave the Set of Delegators"},l=void 0,p={unversionedId:"participate/staking/delegate/exit",id:"participate/staking/delegate/exit",title:"Leave the Set of Delegators",description:"A Delegator can revoke their delegation by calling parachainStaking -> leaveDelegators.",source:"@site/docs/participate/01_staking/03_delegate/04_exit.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/exit",permalink:"/docs/participate/staking/delegate/exit",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/04_exit.md",tags:[],version:"current",lastUpdatedAt:1686223346,formattedLastUpdatedAt:"Jun 8, 2023",sidebarPosition:4,frontMatter:{id:"exit",title:"Leave the Set of Delegators"},sidebar:"staking",previous:{title:"Adjust Your Delegation Stake",permalink:"/docs/participate/staking/delegate/adjust-stake"},next:{title:"Lifecycle of a Delegator",permalink:"/docs/participate/staking/delegate/lifecycle"}},s={},c=[],d={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A Delegator can revoke their delegation by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"parachainStaking -> leaveDelegators"),".\nAs a result, you won't receive any rewards immediately after the transaction is successfully executed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your previously delegated amount will be prepared for unstaking."),(0,n.kt)("li",{parentName:"ul"},"You need to wait 7 days (in block time) before you can unlock your unstaked tokens, see the section ",(0,n.kt)("a",{parentName:"li",href:"/docs/participate/staking/unlock-unstaked"},"Unlock Unstaked")," for more information."),(0,n.kt)("li",{parentName:"ul"},"Exiting does not count towards the limit of \u201c1 delegation per round\u201d.")),(0,n.kt)(i.ZP,{mdxType:"StakingTxDisclaimer"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(475).Z,width:"1998",height:"922"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the KILT address you delegated from as the extrinsic submitter (the ",(0,n.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,n.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,n.kt)("inlineCode",{parentName:"li"},"parachainStaking -> leaveDelegators"),"."),(0,n.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,n.kt)("em",{parentName:"li"},"Submit Transaction")," button)")))}m.isMDXComponent=!0},2635:(e,t,r)=>{r.d(t,{ZP:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={toc:[]},o="wrapper";function l(e){let{components:t,...r}=e;return(0,n.kt)(o,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,n.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,n.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,n.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,n.kt)("p",null,"In the Polkadot JS Apps (",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}l.isMDXComponent=!0},475:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/parachainStaking-leaveDelegators-19bb6f352d0c3d5bfc92923a741c9e4c.png"}}]);