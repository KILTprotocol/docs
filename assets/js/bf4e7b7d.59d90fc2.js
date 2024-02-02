"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6741],{2203:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(5893),s=n(1151);const a={id:"attestation",title:"Attestations"},o=void 0,r={id:"concepts/credentials/attestation",title:"Attestations",description:"In KILT, the terms Attestation and Credential are often used interchangeably, albeit their meaning is slightly different.",source:"@site/docs/concepts/05_credentials/04_attestation.md",sourceDirName:"concepts/05_credentials",slug:"/concepts/credentials/attestation",permalink:"/docs/concepts/credentials/attestation",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/05_credentials/04_attestation.md",tags:[],version:"current",lastUpdatedAt:1706870076,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:4,frontMatter:{id:"attestation",title:"Attestations"},sidebar:"concepts",previous:{title:"Claims",permalink:"/docs/concepts/credentials/claiming"},next:{title:"Verification",permalink:"/docs/concepts/credentials/verification"}},c={},d=[{value:"Storing Attestations",id:"storing-attestations",level:3}];function l(t){const e={a:"a",code:"code",em:"em",h3:"h3",p:"p",...(0,s.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["In KILT, the terms Attestation and Credential are often used interchangeably, albeit their meaning is slightly different.\nPrecisely a ",(0,i.jsx)(e.em,{children:"credential"})," includes the original claimer's data and all the information linked to it, while an ",(0,i.jsx)(e.em,{children:"attestation"})," only refers to the on-chain proof that a given credential has been attested."]}),"\n",(0,i.jsxs)(e.p,{children:["To write an attestation on the blockchain, the Attester checks the validity of the received to-be-attested ",(0,i.jsx)(e.code,{children:"Credential"}),", ensuring that the data inside it match the requirements of the attestation (e.g., that the user's name is indeed Alice)."]}),"\n",(0,i.jsxs)(e.p,{children:["After that, the Attester writes the ",(0,i.jsx)(e.code,{children:"Credential"}),"'s root hash on the KILT blockchain, basically certifying that a credential with that root hash is valid.\nThe Claimer can hence monitor the blockchain themselves to listen for the event resulting from the attestation process, marking the moment in which the credential is attested and hence becomes usable."]}),"\n",(0,i.jsx)(e.p,{children:"After the credential has been attested, the Claimer can store it in their own wallet and can now use it with Verifiers that trust credentials issued by that Attester."}),"\n",(0,i.jsxs)(e.p,{children:["For a detailed developer-oriented guide to KILT attestations, see our ",(0,i.jsx)(e.a,{href:"/docs/develop/sdk/cookbook/claiming/attestation-creation",children:"Attestation Cookbook section"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"storing-attestations",children:"Storing Attestations"}),"\n",(0,i.jsx)(e.p,{children:"Storing a attestation in the blockchain requires providing a constant deposit, which is currently around 0.12 KILT. The deposit amount is calculated based on the worst-case scenario for a attestation, where the maximum storage for one attestation reaches 179 bytes.\nThe deposit serves as a security measure to ensure the integrity of the blockchain and incentivize users to manage their attestation responsibly. By requiring a deposit, it discourages spamming or unnecessary creation of attestation.\nThe deposit can be reclaimed by the attester by deleting their attestation. Revoking them is not sufficient."})]})}function h(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>o});var i=n(7294);const s={},a=i.createContext(s);function o(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);