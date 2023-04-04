"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"what-is-kilt",title:"What is KILT?"},o=void 0,s={unversionedId:"concepts/what-is-kilt",id:"concepts/what-is-kilt",title:"What is KILT?",description:"KILT is a protocol for self-sovereign data and interoperability built on top of the permissionless KILT blockchain.",source:"@site/docs/concepts/01_what_is_kilt.md",sourceDirName:"concepts",slug:"/concepts/what-is-kilt",permalink:"/docs/concepts/what-is-kilt",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/01_what_is_kilt.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:1,frontMatter:{id:"what-is-kilt",title:"What is KILT?"},sidebar:"concepts",next:{title:"KILT Decentralized Identifiers (DIDs)",permalink:"/docs/concepts/did"}},l={},c=[{value:"The Problem",id:"the-problem",level:2},{value:"The Solution",id:"the-solution",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KILT is a protocol for self-sovereign data and interoperability built on top of the permissionless KILT blockchain.\nThe core component of KILT is a digital identity protocol for 1. generating and managing ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/glossary#Decentralized-Identifiers-(DID)"},(0,i.kt)("strong",{parentName:"a"},"decentralized identifiers (DIDs)")),", and 2. issuing and presenting digital ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/glossary#verifiable-credentials"},(0,i.kt)("strong",{parentName:"a"},"verifiable credentials (VCs)")),".\nIn contrast to other centralized alternatives, KILT features self-sovereign data as well as revocable ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/glossary#credential"},"credentials")," anchored to the KILT blockchain."),(0,i.kt)("p",null,"KILT was built to be a business enabler, not only for the software industry but also for any entity.\nSuch entities can establish a business model based on the trust infrastructure KILT provides, which will be an essential building block of Web 3.0."),(0,i.kt)("p",null,"In particular KILT provides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"universal identity protocol")," for individuals, organizations, objects, and intelligent agents to obtain credentials for arbitrary attributes about themselves issued by trusted Attesters."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"self-sovereign mechanism")," for putting credential holders in control of their own data, allowing them to choose if and where they make their credentials public and how much information from those credentials they wish to share."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/concepts/glossary#trust-market"},"Trust Market")," for ",(0,i.kt)("a",{parentName:"strong",href:"/docs/concepts/glossary#attester"},"Attesters"))," of such credentials, which allows widely trusted entities to be compensated for their valuable attestation work.")),(0,i.kt)("p",null,"KILT's main goal is to generate a level playing field for companies to explore new business models related to trust relationships and data sovereignty.\nKILT enables businesses and governments to rely on a common standard which is owned by everyone participating and not by a single company or set thereof."),(0,i.kt)("h2",{id:"the-problem"},"The Problem"),(0,i.kt)("p",null,"In the beginning, identity and trust between entities was organized in a fully decentralized way: trust relationships were created directly between individuals based on their own observations.\nOf course this had major drawbacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The size of the personal social network is limited"),(0,i.kt)("li",{parentName:"ul"},"It is not trivial to judge the trustworthiness of an individual"),(0,i.kt)("li",{parentName:"ul"},"It is hard to prove one's own identity to outsiders")),(0,i.kt)("p",null,"When people started to organize themselves in bigger groups, founding villages and cities, those drawbacks were amplified and needed to be addressed.\nTherefore mechanisms were introduced to create trust relationships between groups by issuing some form of attestation.\nIn this way, certain properties about an individual could be verified by people who do not know the individual directly, but who trusted the group that gave the attestation, for example, a carpenter's guild, a monastery or a Scottish clan.\nWhen the organizational structures grew further and big bureaucratic nations emerged, the authorities issuing those attestations and the scope of the trust relationships also grew."),(0,i.kt)("p",null,"Though we can now see a more and more centralized way of organizing trust, the actual information that makes up an identity is still handed out directly to the individual, who is still responsible for their own data.\nTake official personal documents like passports as an example.\nThey are issued by trusted entities and handed out to the holder.\nThat holder then has full control of their credential (their passport) and can use it wherever needed."),(0,i.kt)("p",null,"However, with the invention of the internet, and later of Web 2.0, services evolved and merged into totally centralized solutions including Google, Meta, and Twitter among others.\nThey no longer simply attest someone's email account, but due to their business model, our personal data (i.e., our identity) is stored and controlled by those same service providers.\nFor instance, they could stop allowing us to log into a certain website if they decide to.\nMore often than not, companies store the data not only out of necessity, but also for their own business purpose: every time users log into any service, they generate new data points which are then aggregated and sold for advertising purposes."),(0,i.kt)("p",null,"KILT Protocol aims to change that and give users back the control over their data."),(0,i.kt)("h2",{id:"the-solution"},"The Solution"),(0,i.kt)("p",null,"KILT provides a protocol and the tools for people to manage their own data, and to build a ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/glossary#digital-identity"},"digital identity")," by collecting credentials issued by trusted entities.\nSuch credentials are not publicly available, but stay within the user's control.\nThis is similar to the approach used for centuries before our data was being monetized by big corporations."),(0,i.kt)("p",null,"The core ideas are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Managing user's identities in the form of ",(0,i.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-spec/"},"decentralized identifiers (DIDs)"),", with the support of the KILT blockchain"),(0,i.kt)("li",{parentName:"ul"},"Obtaining digital ",(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/glossary#verifiable-credentials"},"verifiable credentials")," about user-specified claims"),(0,i.kt)("li",{parentName:"ul"},"Supporting revocation of verifiable credentials by their Attesters"),(0,i.kt)("li",{parentName:"ul"},"Presenting and verifying verifiable credentials in a privacy-preserving and user-controlled way")))}p.isMDXComponent=!0}}]);