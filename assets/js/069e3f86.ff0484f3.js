"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8010],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905)),o=n(22635);const i={id:"revoke",title:"Revoke Your Delegation"},l=void 0,p={unversionedId:"participate/staking/delegate/revoke",id:"participate/staking/delegate/revoke",title:"Revoke Your Delegation",description:"You can revoke your delegation at any time by calling parachainStaking -> revokeDelegation.",source:"@site/docs/participate/01_staking/03_delegate/04_revoke.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/revoke",permalink:"/docs/participate/staking/delegate/revoke",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/04_revoke.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"revoke",title:"Revoke Your Delegation"},sidebar:"staking",previous:{title:"Adjust Your Delegation Stake",permalink:"/docs/participate/staking/delegate/adjust-stake"},next:{title:"Leave the Set of Delegators",permalink:"/docs/participate/staking/delegate/exit"}},c={},s=[],u={toc:s};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can revoke your delegation at any time by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"parachainStaking -> revokeDelegation"),".\nAs a result, you won't receive any rewards immediately after the transaction is successfully executed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The corresponding amount will be prepared for unstaking."),(0,a.kt)("li",{parentName:"ul"},"You need to wait 7 days (in block time) before you can unlock your unstaked tokens, see section ",(0,a.kt)("a",{parentName:"li",href:"/docs/participate/staking/unlock-unstaked"},"Unlock Unstaked")," for more information."),(0,a.kt)("li",{parentName:"ul"},"Revoking a delegation does not count towards the limit of \u201c1 delegation per round\u201d.")),(0,a.kt)(o.ZP,{mdxType:"StakingTxDisclaimer"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(45821).Z,width:"2002",height:"1190"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the KILT address you want to delegate from as the extrinsic submitter (the ",(0,a.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,a.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,a.kt)("inlineCode",{parentName:"li"},"parachainStaking -> revokeDelegation")),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,a.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,a.kt)("li",{parentName:"ol"},"Select the collator account (the ",(0,a.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,a.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,a.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Since you can only delegate to a single collator candidate for now, revoking a single delegation is exactly the same as ",(0,a.kt)("a",{parentName:"p",href:"/docs/participate/staking/delegate/exit"},(0,a.kt)("strong",{parentName:"a"},"exiting")),".\nThis may change if the community decides to enable multiple delegations per account.")))}d.isMDXComponent=!0},22635:function(e,t,n){n.d(t,{ZP:function(){return i}});var r=n(83117),a=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,a.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,a.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,a.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,a.kt)("p",null," In Polkadot JS (",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}i.isMDXComponent=!0},45821:function(e,t,n){t.Z=n.p+"assets/images/parachainStaking-revokeDelegation-a86e4abe43a53cb8cfd1e330f223257b.png"}}]);