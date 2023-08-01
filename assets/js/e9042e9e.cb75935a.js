"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7713],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(r),k=a,u=c["".concat(l,".").concat(k)]||c[k]||m[k]||i;return r?n.createElement(u,p(p({ref:e},d),{},{components:r})):n.createElement(u,p({ref:e},d))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,p=new Array(i);p[0]=k;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[c]="string"==typeof t?t:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1661:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"deployments",title:"Deployments and Services"},p=void 0,o={unversionedId:"develop/chain/deployments",id:"develop/chain/deployments",title:"Deployments and Services",description:"KILT has two public deployments: a production one, called Spiritnet, and a test/dev one, called Peregrine.",source:"@site/docs/develop/02_chain/03_deployments.md",sourceDirName:"develop/02_chain",slug:"/develop/chain/deployments",permalink:"/docs/develop/chain/deployments",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/02_chain/03_deployments.md",tags:[],version:"current",lastUpdatedAt:1690887551,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:3,frontMatter:{id:"deployments",title:"Deployments and Services"},sidebar:"chain",previous:{title:"DID pallet",permalink:"/docs/develop/chain/pallets/pallet-did"},next:{title:"Set Up a KILT Full Node",permalink:"/docs/develop/chain/fullnode-setup"}},l={},s=[],d={toc:s},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KILT has two public deployments: a production one, called ",(0,a.kt)("strong",{parentName:"p"},"Spiritnet"),", and a test/dev one, called ",(0,a.kt)("strong",{parentName:"p"},"Peregrine"),".\nTo learn more about how to set up a node for either environment, please check our ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/chain/fullnode-setup"},"fullnode set up guide"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spiritnet")," is the production blockchain, and has been live since September 2021."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Peregrine")," is the public testnet, which can be used to build and test products that use the KILT blockchain, before switching to Spiritnet."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Service"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Spiritnet"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Peregrine"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Faucet"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://faucet.peregrine.kilt.io"},"Peregrine Faucet"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Public Endpoints"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss://spiritnet.kilt.io"},"BOTLabs: wss://spiritnet.kilt.io"),(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss://spiritnet.api.onfinality.io/public-ws"},"OnFinality: wss://spiritnet.api.onfinality.io/public-ws"),(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss://kilt-rpc.dwellir.com"},"Dwellir: wss://kilt-rpc.dwellir.com")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss://peregrine.kilt.io"},"BOTLabs: wss://peregrine.kilt.io"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Wallet"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://www.sporran.org/"},"Sporran")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/BTE-Trusted-Entity/sporran-extension/releases"},"GitHub")," (manual loading into the browser)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Staking UI"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Collators' performance (view only): ",(0,a.kt)("a",{parentName:"td",href:"https://stakekilt.com/"},"Stakekilt"),(0,a.kt)("br",null),"Delegation staking platform: ",(0,a.kt)("a",{parentName:"td",href:"https://stakeboard.kilt.io"},"Stakeboard")),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Governance UI"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://kilt.polkassembly.network"},"Polkassembly")),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Chain Explorer"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://spiritnet.subscan.io"},"Subscan")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://kilt-testnet.subscan.io"},"Subscan"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"w3n Service"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://w3n.id"},"w3n.id")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://test.w3n.id/"},"test.w3n.id"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Link Accounts"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://linking.trusted-entity.io/"},"linking.trusted-entity.io")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://test.linking.trusted-entity.io/"},"test.linking.trusted-entity.io"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"DIDsign"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://didsign.io/"},"didsign.io")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://test.didsign.io/"},"test.didsign.io"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SocialKYC"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://socialkyc.io/"},"socialkyc.io")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://test.socialkyc.io/"},"test.socialkyc.io"))))))}m.isMDXComponent=!0}}]);