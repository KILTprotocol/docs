"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={id:"v29-backward-compatibility",title:"Backward Compatibility with Pre-0.29.x Versions"},o=void 0,s={unversionedId:"develop/sdk/cookbook/upgrading_to_v0_29/v29-backward-compatibility",id:"develop/sdk/cookbook/upgrading_to_v0_29/v29-backward-compatibility",title:"Backward Compatibility with Pre-0.29.x Versions",description:"Depending on how exactly your application interacts with other applications, changes to some data formats and interfaces might mean that conversions are required for them to remain compatible.",source:"@site/docs/develop/01_sdk/02_cookbook/08_upgrading_to_v0_29/01_backward_compatibility.md",sourceDirName:"develop/01_sdk/02_cookbook/08_upgrading_to_v0_29",slug:"/develop/sdk/cookbook/upgrading_to_v0_29/v29-backward-compatibility",permalink:"/docs/develop/sdk/cookbook/upgrading_to_v0_29/v29-backward-compatibility",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/08_upgrading_to_v0_29/01_backward_compatibility.md",tags:[],version:"current",lastUpdatedAt:1681303842,formattedLastUpdatedAt:"Apr 12, 2023",sidebarPosition:1,frontMatter:{id:"v29-backward-compatibility",title:"Backward Compatibility with Pre-0.29.x Versions"},sidebar:"sdk",previous:{title:"Upgrading to v0.29",permalink:"/docs/develop/sdk/cookbook/upgrading_to_v0_29/"},next:{title:"Chain Setup for Development",permalink:"/docs/develop/sdk/chain_setup/"}},p={},c=[{value:"General Strategy",id:"general-strategy",level:2},{value:"Message Conversion",id:"message-conversion",level:2},{value:"<code>submit-terms</code>",id:"submit-terms",level:3},{value:"<code>request-attestation</code>",id:"request-attestation",level:3},{value:"<code>submit-credential</code>",id:"submit-credential",level:3}],l={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Depending on how exactly your application interacts with other applications, changes to some data formats and interfaces might mean that conversions are required for them to remain compatible."),(0,i.kt)("p",null,"To align with breaking changes to data structures in messaging, credentials, and CTypes, we published version 3.0 of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/spec-ext-credential-api"},"Credentials API specification")," that specifies how browser extensions like the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/BTE-Trusted-Entity/sporran-extension"},"Sporran credential wallet")," interact with web applications that produce or consume credentials."),(0,i.kt)("p",null,"When upgrading to a 0.29.x version of the SDK and to the Credentials API version 3.0, we recommend backward support of Credentials API version 2.0, as supporting only the latest version may result in poor user experience. In what follows, we outline an upgrade strategy for implementers of the Credentials API specification."),(0,i.kt)("p",null,"These instructions will also help with translating from and to data types of pre-0.29 SDK versions in other scenarios, such as when sending messages between clients, or when importing older data (e.g. credentials)."),(0,i.kt)("h2",{id:"general-strategy"},"General Strategy"),(0,i.kt)("p",null,"Since version 3.0, the specification requires conformant web apps as well as extensions to announce the versions of the API they use, allowing for version negotiation.\nBecause extensions inject themselves into web pages that signal support for kilt features via the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.kilt")," property, the recommended strategy is to handle backward compatibility on the extension side.\nThis way, extensions can be upgraded ahead of time, and implement a fallback to a version 2.0 compatible interface if a web application does not signal version 3.0 support.\nFollowing this strategy, backward compatibility on the application side is not strictly necessary.\nWe recommend notifying users of web apps that have upgraded to version 3.0 if they try to connect with an older extension, pointing them to the need to upgrade their extension to use this app."),(0,i.kt)("h2",{id:"message-conversion"},"Message Conversion"),(0,i.kt)("p",null,"Breaking changes introduced with version 3.0 of the Credential Api exclusively affect selected data types of messages passed between the application backend and extension.\nIn the attester (credential issuance) flow the message types ",(0,i.kt)("inlineCode",{parentName:"p"},"submit-terms")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"request-attestation")," have changed.\nIn the verifier (presentation exchange) flow the message type ",(0,i.kt)("inlineCode",{parentName:"p"},"submit-credential")," message is affected."),(0,i.kt)("p",null,"Version 3.0 extensions can achieve backward compatibility by translating messages received from and sent to the application which implements an earlier version of the specification.\nBelow you can find brief descriptions of how these conversions can be implemented."),(0,i.kt)("h3",{id:"submit-terms"},(0,i.kt)("inlineCode",{parentName:"h3"},"submit-terms")),(0,i.kt)("p",null,"When receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"submit-terms")," message from the old web app, replace the items of the ",(0,i.kt)("inlineCode",{parentName:"p"},"cTypes")," content property with the values of their ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Old {\n  cTypes: Array<{\n    schema: ICTypeSchema\n    hash: HexString // duplicates `schema.$id`\n    owner: DidUri | null // apparently unused\n  }>\n  ...\n}\n\ninterface New {\n  cTypes: Array<ICTypeSchema> // Note that 0.29 renames ICTypeSchema to ICType\n  ...\n}\n")),(0,i.kt)("h3",{id:"request-attestation"},(0,i.kt)("inlineCode",{parentName:"h3"},"request-attestation")),(0,i.kt)("p",null,"Before encrypting a ",(0,i.kt)("inlineCode",{parentName:"p"},"request-attestation")," type message destined for an older web app, rename ",(0,i.kt)("inlineCode",{parentName:"p"},"credential")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"requestForAttestation"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface New {\n  credential: { claim, ... }\n  quote?: IQuoteAgreement\n}\n\ninterface Old {\n  requestForAttestation: { claim, ... }\n  quote?: IQuoteAgreement\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The old ",(0,i.kt)("inlineCode",{parentName:"p"},"IRequestForAttestation")," interface optionally allowed claimers to attach a signature for authentication.\nThere is no property intended for this purpose on the new interface, as the message encryption scheme already takes care of authentication.\nWhat has changed is that this form of authentication is ",(0,i.kt)("strong",{parentName:"p"},"not publicly verifiable"),".\nAttesters can instead require claimers to sign a quote agreement for the purpose of bookkeeping, which contains the credential hash and thus represents a commitment to any claims made.")),(0,i.kt)("h3",{id:"submit-credential"},(0,i.kt)("inlineCode",{parentName:"h3"},"submit-credential")),(0,i.kt)("p",null,"Before encrypting a ",(0,i.kt)("inlineCode",{parentName:"p"},"submit-credential")," message for the older application, replace every item with an object having the property ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," with the value of item itself, and the property ",(0,i.kt)("inlineCode",{parentName:"p"},"attestation")," with the attestation for this credential."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface New extends Array<{ claim, ..., claimerSignature }> {}\n\ninterface Old extends Array<{\n  attestation: { claimHash, owner, ... }\n  request: { claim, ..., claimerSignature }\n}> {}\n")))}m.isMDXComponent=!0}}]);