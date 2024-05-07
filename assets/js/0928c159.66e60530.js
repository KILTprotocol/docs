"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6032],{75704:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(17624),r=s(4552),i=s(61964);const o={id:"overview",title:"Overview"},c=void 0,a={id:"concepts/credentials/overview",title:"Overview",description:"Credentials consist of a set of claims which belong to a Claimer, are attested by an Attester and can be verified by Verifiers.",source:"@site/docs/concepts/05_credentials/01_overview.md",sourceDirName:"concepts/05_credentials",slug:"/concepts/credentials/overview",permalink:"/docs/concepts/credentials/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/05_credentials/01_overview.md",tags:[],version:"current",lastUpdatedAt:1715070662,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview"},sidebar:"concepts",previous:{title:"AssetDIDs",permalink:"/docs/concepts/asset-dids"},next:{title:"CTypes",permalink:"/docs/concepts/credentials/ctypes"}},l={},d=[];function h(e){const t={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Credentials"})," consist of a set of claims which belong to a ",(0,n.jsx)(t.strong,{children:"Claimer"}),", are attested by an ",(0,n.jsx)(t.strong,{children:"Attester"})," and can be verified by ",(0,n.jsx)(t.strong,{children:"Verifiers"}),"."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)(i.c,{alt:"Credential Overview Diagram",sources:{light:"/img/concepts/credentials/overview.png",dark:"/img/concepts/credentials/overview_dark.png"}})}),"\n",(0,n.jsx)(t.p,{children:"To get a credential, a Claimer needs to go through following process:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Find a ",(0,n.jsx)(t.strong,{children:"CType"})," a claim should be based on. Potential Attesters and Verifiers might advertise this information themselves."]}),"\n",(0,n.jsxs)(t.li,{children:["Make a ",(0,n.jsx)(t.strong,{children:"claim"})," containing a set of properties about themselves."]}),"\n",(0,n.jsxs)(t.li,{children:["Potentially request and receive ",(0,n.jsx)(t.strong,{children:"Terms"})," and agree on a ",(0,n.jsx)(t.strong,{children:"Quote"})," with the potential Attester."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Request an attestation"})," from the Attester."]}),"\n",(0,n.jsxs)(t.li,{children:["Wait for the claims to be ",(0,n.jsx)(t.strong,{children:"attested"})," by the Attester."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Once attested, the claims are considered to be a valid credential."}),"\n",(0,n.jsx)(t.p,{children:"To verify a credential, a Claimer can generate a presentation of it to a Verifier, with the following process:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The Verifier may request a ",(0,n.jsx)(t.strong,{children:"credential"})," as the first step, along with with properties to reveal from such Credential."]}),"\n",(0,n.jsxs)(t.li,{children:["The Claimer selectively ",(0,n.jsx)(t.strong,{children:"discloses"})," the requested properties and signs the generated presentation."]}),"\n",(0,n.jsxs)(t.li,{children:["The Verifier ",(0,n.jsx)(t.strong,{children:"checks"})," the presentation structure, content and signature, and decides whether they trust the Attester of the presented credential."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each step is described in more detail in the next sections."}),"\n",(0,n.jsxs)(t.p,{children:["If you want to learn about how implement the above flow in a dapp that interacts with a browser extension, please refer to the ",(0,n.jsx)(t.a,{href:"https://github.com/KILTprotocol/spec-ext-credential-api",children:"Credential API specification"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>c,M:()=>o});var n=s(11504);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);