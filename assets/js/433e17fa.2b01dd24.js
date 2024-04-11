"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5712],{94556:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=s(17624),r=s(4552);const i={id:"overview",title:"\ud83d\udc53 Overview"},n=void 0,l={id:"develop/workshop/overview",title:"\ud83d\udc53 Overview",description:"This tutorial runs through the full story of a claim.",source:"@site/docs/develop/03_workshop/03_overview.md",sourceDirName:"develop/03_workshop",slug:"/develop/workshop/overview",permalink:"/docs/develop/workshop/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/03_overview.md",tags:[],version:"current",lastUpdatedAt:1712840460,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:3,frontMatter:{id:"overview",title:"\ud83d\udc53 Overview"},sidebar:"workshop",previous:{title:"\ud83c\udf92 Setup",permalink:"/docs/develop/workshop/setup"},next:{title:"\ud83c\udfe2 Attester",permalink:"/docs/develop/workshop/attester/"}},o={},h=[{value:"Request an Attestation",id:"request-an-attestation",level:2},{value:"Verify an Attestation",id:"verify-an-attestation",level:2},{value:"Example: Requesting a travel visa",id:"example-requesting-a-travel-visa",level:3}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This tutorial runs through the full story of a claim."}),"\n",(0,a.jsxs)(t.p,{children:["It involves three actors which work together to create ",(0,a.jsx)(t.strong,{children:"distributed trust"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," is an actor who claims to possess certain credentials, abilities, or other attributes."]}),"\n",(0,a.jsxs)(t.li,{children:["An ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," is an actor that verifies the claims of a ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)("span",{className:"label-role verifier",children:"Verifier"})," is an actor that asks for proof of a claim."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For the workshop, you play all three roles."}),"\n",(0,a.jsx)(t.p,{children:"In a real-world use case, these actors would be different people and services, which this workshop simulates using different folders for each service.\nEach actor typically performs different roles:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Both the ",(0,a.jsx)("span",{className:"label-role verifier",children:"Verifier"})," and the ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," have to interact with the KILT blockchain."]}),"\n",(0,a.jsxs)(t.li,{children:["But only the ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," is required to own KILTs since they have to pay for storing the attestation on chain."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)("span",{className:"label-role verifier",children:"Verifier"})," only needs to query the KILT blockchain to ensure that the attestation is still valid and was not revoked."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," is not required to query the blockchain, but they might do so to check whether their credential is still valid or if the ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," has revoked it in the meantime."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"request-an-attestation",children:"Request an Attestation"}),"\n",(0,a.jsxs)(t.p,{children:["Before the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," can attest a credential, they need to generate a ",(0,a.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/dids/light-did-creation",children:"light DID"}),", which can happen off-chain."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," has to register their DID on chain and needs KILT coins."]}),"\n",(0,a.jsxs)(t.p,{children:["After both the ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," and the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," have set up their identities, the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," can start the attestation process by requesting an attestation from the ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"}),"."]}),"\n",(0,a.jsx)(t.mermaid,{value:"sequenceDiagram\nactor C as Claimer\nactor A as Attester\nparticipant B as KILT Blockchain\n    C->>+C: Create credential from provided claims\n    C->>+A: Transmit credential to request attestation\n    A->>A: Validate received attributes\n    A->>+B: Store attestation\n    B--\x3e>-A: Attestation hash\n    A--\x3e>-C: Attestation Hash"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," prepares the Credential to attest, along with some proof, for example, a bank statement and ID."]}),"\n",(0,a.jsxs)(t.li,{children:["They send the document to the ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," for attestation."]}),"\n",(0,a.jsxs)(t.li,{children:["Upon receiving the credential, the ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," decides whether the claim is valid by examining the proofs. If the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Attester"})," trusts the claim, they store the attestation document's hash value on the chain, which is a non-functional copy of the document."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)("span",{className:"label-role attester",children:"Attester"})," sends this hash value to the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"}),", which represents verification of a document."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"verify-an-attestation",children:"Verify an Attestation"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)("span",{className:"label-role verifier",children:"Verifier"})," requests a presentation from the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," for a specific required CType. Without a specific CType, the presentation is meaningless."]}),"\n",(0,a.jsx)(t.p,{children:"A presentation is derived from a credential and does not need to contain all attributes."}),"\n",(0,a.jsxs)(t.p,{children:["After the request, the ",(0,a.jsx)("span",{className:"label-role claimer",children:"Claimer"})," can choose to hide elements of their credentials that aren't relevant to the claim.\nFor example, hide their address from their ID if the ",(0,a.jsx)("span",{className:"label-role verifier",children:"Verifier"})," is only interested in their age."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["A later step in the workshop ",(0,a.jsx)(t.a,{href:"/docs/develop/workshop/attester/ctype",children:"explains CTypes in more detail"}),"."]})}),"\n",(0,a.jsx)(t.mermaid,{value:"sequenceDiagram\nactor C as Claimer\nactor V as Verifier\nparticipant B as KILT Blockchain\n    V->>+C: Request presentation for CType\n    C->>C: Derive a presentation from a credential\n    C--\x3e>-V: submit presentation\n    V->>B: check validity of presentation"}),"\n",(0,a.jsx)(t.h3,{id:"example-requesting-a-travel-visa",children:"Example: Requesting a travel visa"}),"\n",(0,a.jsx)(t.p,{children:"To take an example of applying for a travel visa:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'The Embassy (analogous to the Verifier) asks a traveler (analogous to the Claimer) for a specific document or CType. For example, it could be a bank statement. The Embassy asks, "Provide proof of financial stability, and we\'ll grant you a visa." The traveler gets the bank statement from their bank, gets it attested by the bank (The Attester), and prepares the document.'}),"\n",(0,a.jsx)(t.li,{children:"The document is ready, but the Embassy doesn't need all the information in the document. The embassy wants to know if a traveler has sufficient funds, but they don't need to know any transaction details. The traveler redacts or hides these details while presenting."}),"\n",(0,a.jsx)(t.li,{children:"The traveler presents the document to the embassy."}),"\n",(0,a.jsx)(t.li,{children:"The embassy verified the document's authenticity by comparing its hash value with the one on their internal system or a decentralized ledger."}),"\n",(0,a.jsx)(t.li,{children:"Since they trust the Attester (in this case, the bank that attested the bank statement), they approved the visa application."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:"Summary",type:"tip",children:(0,a.jsx)(t.p,{children:"As you can see, the Embassy didn't need to trust the Claimer directly in this system.\nThey trust the Attester, whom they had previously worked with, or respect due to their position.\nAnd with that trust, they grant the visa with no knowledge of what the Claimer has used the credential for.\nEven though this process emerged due to the trust in the Attester, the Attester was not involved in the second stage, so they were unaware of it.\nPrivacy was achieved with distributed trust."})})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>l,M:()=>n});var a=s(11504);const r={},i=a.createContext(r);function n(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);