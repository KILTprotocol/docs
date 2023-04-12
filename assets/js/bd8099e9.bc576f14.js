"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(941);const i={id:"web3names",title:"web3names"},s=void 0,l={unversionedId:"concepts/web3names",id:"concepts/web3names",title:"web3names",description:"In short, web3names are user-friendly aliases for KILT DIDs.",source:"@site/docs/concepts/03_web3names.md",sourceDirName:"concepts",slug:"/concepts/web3names",permalink:"/docs/concepts/web3names",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/03_web3names.md",tags:[],version:"current",lastUpdatedAt:1681303842,formattedLastUpdatedAt:"Apr 12, 2023",sidebarPosition:3,frontMatter:{id:"web3names",title:"web3names"},sidebar:"concepts",previous:{title:"KILT Decentralized Identifiers (DIDs)",permalink:"/docs/concepts/did"},next:{title:"AssetDIDs",permalink:"/docs/concepts/asset-dids"}},c={},p=[{value:"Linking Multiple Accounts to a web3name",id:"linking-multiple-accounts-to-a-web3name",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In short, web3names are user-friendly aliases for KILT DIDs.\nThey serve the same purpose that domain names do for IP addresses: who knows the IP address under the ",(0,o.kt)("inlineCode",{parentName:"p"},"kilt.io")," domain name? \ud83e\udd37\ud83c\udffd\u200d\u2640\ufe0f\nThere is a one-to-one relationship between DIDs and web3names.\nThis means that a KILT DID can be linked to only one web3name, and a web3name can be claimed only by one DID."),(0,o.kt)("p",null,"Each web3name is globally unique within the KILT space, and is composed of a sequence of a minimum of 3 to a maximum of 32 characters taken from a specific character set to enhance human readability and reduce the chances of ",(0,o.kt)("em",{parentName:"p"},"two web3names looking the same, despite being different"),".\nThe character set includes only:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"lowercase letters"),", from ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"z")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"digits")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"9")),(0,o.kt)("li",{parentName:"ul"},"the symbols ",(0,o.kt)("inlineCode",{parentName:"li"},"-")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"_"))),(0,o.kt)("p",null,"A regex that would match all and only the allowed web3names would be the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"^[a-z0-9_-]{3,32}$\n")),(0,o.kt)("p",null,"In the global URI space, web3names are prefixed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"w3n:")," URI namespace.\nFor example, the full URI for the web3name ",(0,o.kt)("inlineCode",{parentName:"p"},"example-web3name")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"w3n:example-web3name"),"."),(0,o.kt)("h3",{id:"linking-multiple-accounts-to-a-web3name"},"Linking Multiple Accounts to a web3name"),(0,o.kt)("p",null,"Beyond linking a web3name, KILT allows DID owners to link multiple accounts to a single DID.\nThese accounts are not specific to the KILT blockchain; they can reference any chain within the Polkadot ecosystem.\nEach account <-> DID link requires the payment of a small deposit, which is returned if the link is ever removed."),(0,o.kt)("p",null,"For DIDs that have also claimed a web3name, the linking feature opens up the way to a host of possibilities, e.g., showing the web3name of a collator's account on the ",(0,o.kt)("a",{parentName:"p",href:"https://stakeboard.kilt.io/"},"KILT Stakeboard"),"."),(0,o.kt)(r.Z,{alt:"DID lookup diagram",sources:{light:"/img/concepts/did/did-lookup-light.png",dark:"/img/concepts/did/did-lookup-dark.png"},mdxType:"ThemedImage"}),(0,o.kt)("p",null,"For a detailed developer-oriented guide to web3names and account linking, see our ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/web3names/web3name-claim"},"web3name Cookbook section")," and our ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/account_linking/account-link"},"account linking Cookbook section"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While multiple accounts can be linked to a DID, it is important to notice the difference between the two."),(0,o.kt)("p",{parentName:"admonition"},"KILT ",(0,o.kt)("em",{parentName:"p"},"accounts")," are classical blockchain accounts, that can be used to hold and send KILT tokens, as well as to sign and submit transactions.\nOn the other hand, KILT ",(0,o.kt)("em",{parentName:"p"},"DIDs")," are a higher level construct which are derived from KILT accounts, but are completely separated from them.\nThis means that ",(0,o.kt)("strong",{parentName:"p"},"KILT DIDs cannot hold any KILT tokens"),".\nDIDs are used to authorize (sign) some operations, but the resulting signature must then be submitted to the blockchain by a KILT account, which must pay for the transaction fees."),(0,o.kt)("p",{parentName:"admonition"},"A DID ",(0,o.kt)("inlineCode",{parentName:"p"},"did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e")," is not to be considered the same as the account ",(0,o.kt)("inlineCode",{parentName:"p"},"4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e"),', although they share the same identifier.\nThere is no (immediate) relationship between the two, thus the DID should always be considered a DID and never used as an account.\nTherefore, if instructed to "',(0,o.kt)("em",{parentName:"p"},"send some funds to the DID by using the account after the ",(0,o.kt)("inlineCode",{parentName:"em"},"did:kilt")," prefix"),'", please ignore the advice, as without the required technical expertise, sending funds to a DID can result in those funds being lost.')))}u.isMDXComponent=!0}}]);