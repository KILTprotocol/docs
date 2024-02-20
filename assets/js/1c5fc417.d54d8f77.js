"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4560],{43788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(17624),a=n(4552);const s={id:"v29-backward-compatibility",title:"Backward Compatibility with Pre-0.29.x Versions"},o=void 0,r={id:"develop/sdk/cookbook/upgrading_to_v0_29/v29-backward-compatibility",title:"Backward Compatibility with Pre-0.29.x Versions",description:"Depending on how exactly your application interacts with other applications, changes to some data formats and interfaces might mean that conversions are required for them to remain compatible.",source:"@site/docs/develop/01_sdk/02_cookbook/08_upgrading_to_v0_29/01_backward_compatibility.md",sourceDirName:"develop/01_sdk/02_cookbook/08_upgrading_to_v0_29",slug:"/develop/sdk/cookbook/upgrading_to_v0_29/v29-backward-compatibility",permalink:"/docs/develop/sdk/cookbook/upgrading_to_v0_29/v29-backward-compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/08_upgrading_to_v0_29/01_backward_compatibility.md",tags:[],version:"current",lastUpdatedAt:1708428845,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:1,frontMatter:{id:"v29-backward-compatibility",title:"Backward Compatibility with Pre-0.29.x Versions"},sidebar:"sdk",previous:{title:"Upgrading to v0.29",permalink:"/docs/develop/sdk/cookbook/upgrading_to_v0_29/"},next:{title:"Chain Setup for Development",permalink:"/docs/develop/sdk/chain_setup/"}},c={},d=[{value:"General Strategy",id:"general-strategy",level:2},{value:"Message Conversion",id:"message-conversion",level:2},{value:"<code>submit-terms</code>",id:"submit-terms",level:3},{value:"<code>request-attestation</code>",id:"request-attestation",level:3},{value:"<code>submit-credential</code>",id:"submit-credential",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Depending on how exactly your application interacts with other applications, changes to some data formats and interfaces might mean that conversions are required for them to remain compatible."}),"\n",(0,i.jsxs)(t.p,{children:["To align with breaking changes to data structures in messaging, credentials, and CTypes, we published version 3.0 of the ",(0,i.jsx)(t.a,{href:"https://github.com/KILTprotocol/spec-ext-credential-api",children:"Credentials API specification"})," that specifies how browser extensions like the ",(0,i.jsx)(t.a,{href:"https://github.com/BTE-Trusted-Entity/sporran-extension",children:"Sporran credential wallet"})," interact with web applications that produce or consume credentials."]}),"\n",(0,i.jsx)(t.p,{children:"When upgrading to a 0.29.x version of the SDK and to the Credentials API version 3.0, we recommend backward support of Credentials API version 2.0, as supporting only the latest version may result in poor user experience. In what follows, we outline an upgrade strategy for implementers of the Credentials API specification."}),"\n",(0,i.jsx)(t.p,{children:"These instructions will also help with translating from and to data types of pre-0.29 SDK versions in other scenarios, such as when sending messages between clients, or when importing older data (e.g. credentials)."}),"\n",(0,i.jsx)(t.h2,{id:"general-strategy",children:"General Strategy"}),"\n",(0,i.jsxs)(t.p,{children:["Since version 3.0, the specification requires conformant web apps as well as extensions to announce the versions of the API they use, allowing for version negotiation.\nBecause extensions inject themselves into web pages that signal support for kilt features via the ",(0,i.jsx)(t.code,{children:"window.kilt"})," property, the recommended strategy is to handle backward compatibility on the extension side.\nThis way, extensions can be upgraded ahead of time, and implement a fallback to a version 2.0 compatible interface if a web application does not signal version 3.0 support.\nFollowing this strategy, backward compatibility on the application side is not strictly necessary.\nWe recommend notifying users of web apps that have upgraded to version 3.0 if they try to connect with an older extension, pointing them to the need to upgrade their extension to use this app."]}),"\n",(0,i.jsx)(t.h2,{id:"message-conversion",children:"Message Conversion"}),"\n",(0,i.jsxs)(t.p,{children:["Breaking changes introduced with version 3.0 of the Credential Api exclusively affect selected data types of messages passed between the application backend and extension.\nIn the attester (credential issuance) flow the message types ",(0,i.jsx)(t.code,{children:"submit-terms"})," and ",(0,i.jsx)(t.code,{children:"request-attestation"})," have changed.\nIn the verifier (presentation exchange) flow the message type ",(0,i.jsx)(t.code,{children:"submit-credential"})," message is affected."]}),"\n",(0,i.jsx)(t.p,{children:"Version 3.0 extensions can achieve backward compatibility by translating messages received from and sent to the application which implements an earlier version of the specification.\nBelow you can find brief descriptions of how these conversions can be implemented."}),"\n",(0,i.jsx)(t.h3,{id:"submit-terms",children:(0,i.jsx)(t.code,{children:"submit-terms"})}),"\n",(0,i.jsxs)(t.p,{children:["When receiving a ",(0,i.jsx)(t.code,{children:"submit-terms"})," message from the old web app, replace the items of the ",(0,i.jsx)(t.code,{children:"cTypes"})," content property with the values of their ",(0,i.jsx)(t.code,{children:"schema"})," properties:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"interface Old {\n  cTypes: Array<{\n    schema: ICTypeSchema\n    hash: HexString // duplicates `schema.$id`\n    owner: DidUri | null // apparently unused\n  }>\n  ...\n}\n\ninterface New {\n  cTypes: Array<ICTypeSchema> // Note that 0.29 renames ICTypeSchema to ICType\n  ...\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"request-attestation",children:(0,i.jsx)(t.code,{children:"request-attestation"})}),"\n",(0,i.jsxs)(t.p,{children:["Before encrypting a ",(0,i.jsx)(t.code,{children:"request-attestation"})," type message destined for an older web app, rename ",(0,i.jsx)(t.code,{children:"credential"})," to ",(0,i.jsx)(t.code,{children:"requestForAttestation"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"interface New {\n  credential: { claim, ... }\n  quote?: IQuoteAgreement\n}\n\ninterface Old {\n  requestForAttestation: { claim, ... }\n  quote?: IQuoteAgreement\n}\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The old ",(0,i.jsx)(t.code,{children:"IRequestForAttestation"})," interface optionally allowed claimers to attach a signature for authentication.\nThere is no property intended for this purpose on the new interface, as the message encryption scheme already takes care of authentication.\nWhat has changed is that this form of authentication is ",(0,i.jsx)(t.strong,{children:"not publicly verifiable"}),".\nAttesters can instead require claimers to sign a quote agreement for the purpose of bookkeeping, which contains the credential hash and thus represents a commitment to any claims made."]})}),"\n",(0,i.jsx)(t.h3,{id:"submit-credential",children:(0,i.jsx)(t.code,{children:"submit-credential"})}),"\n",(0,i.jsxs)(t.p,{children:["Before encrypting a ",(0,i.jsx)(t.code,{children:"submit-credential"})," message for the older application, replace every item with an object having the property ",(0,i.jsx)(t.code,{children:"request"})," with the value of item itself, and the property ",(0,i.jsx)(t.code,{children:"attestation"})," with the attestation for this credential."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"interface New extends Array<{ claim, ..., claimerSignature }> {}\n\ninterface Old extends Array<{\n  attestation: { claimHash, owner, ... }\n  request: { claim, ..., claimerSignature }\n}> {}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>o});var i=n(11504);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);