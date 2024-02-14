"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2067],{5181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=n(5893),i=n(1151);const r={id:"terms-and-quotes",title:"Terms and Quotes"},a=void 0,o={id:"concepts/advanced_concepts/terms-and-quotes",title:"Terms and Quotes",description:"During the attestation flow, it can happen that either the Claimer requests or the Attester sends the terms of the attestation, i.e., the requirements set by the both parties (the Claimer and the Attester) for the conditions of the attestation.",source:"@site/docs/concepts/08_advanced_concepts/01_terms_and_quote.md",sourceDirName:"concepts/08_advanced_concepts",slug:"/concepts/advanced_concepts/terms-and-quotes",permalink:"/docs/concepts/advanced_concepts/terms-and-quotes",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/08_advanced_concepts/01_terms_and_quote.md",tags:[],version:"current",lastUpdatedAt:1707906150,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:1,frontMatter:{id:"terms-and-quotes",title:"Terms and Quotes"},sidebar:"concepts",previous:{title:"KILT Messaging",permalink:"/docs/concepts/messaging"},next:{title:"Nested CTypes",permalink:"/docs/concepts/advanced_concepts/nested-ctypes"}},c={},h=[{value:"Defining Terms",id:"defining-terms",level:2},{value:"Sending Terms",id:"sending-terms",level:2},{value:"Defining a Quote",id:"defining-a-quote",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"During the attestation flow, it can happen that either the Claimer requests or the Attester sends the terms of the attestation, i.e., the requirements set by the both parties (the Claimer and the Attester) for the conditions of the attestation."}),"\n",(0,s.jsx)(t.p,{children:"These terms are defined and agreed upon before the credential is issued.\nThis part of the process requires interaction and communication between both parties.\nThis communication can be done independently, e.g., in person, via messaging, on social media etc., or via the KILT Software Development Kit (SDK)."}),"\n",(0,s.jsx)(t.h2,{id:"defining-terms",children:"Defining Terms"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Terms"})," object consists of following items:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Claim"}),": A partial claim with information the Attester already has about the Claimer.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This helps the Claimer to pre-fill their claims with information only known to the Attester."}),"\n",(0,s.jsx)(t.li,{children:"The partial claim has to at least contain the CType hash the attestation will be based on."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"CTypes"}),": An optional list of full CTypes, in case the Claimer does not know the correct CType for the credential, yet."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Legitimations"}),": A legitimation is a credential, issued to the Attester, showing that the Attester has the authority or legitimacy to attest the claim requested.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This is a way of establishing trust between the participants."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Delegation Id"}),": An Attester may be part of a top-down trust authority that has given them the right to attest in the name of an institution, or similar, as explained in the ",(0,s.jsx)(t.a,{href:"/docs/concepts/distributed_trust",children:"Distributed Trust section"}),". If the Attester has attestation rights, delegated from another entity, this should be stated clearly at this point."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Quote"}),": As shown in the ",(0,s.jsx)(t.a,{href:"#defining-a-quote",children:"section below"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Only the CType hash in the partial claim is required, everything else is optional."}),"\n",(0,s.jsx)(t.h2,{id:"sending-terms",children:"Sending Terms"}),"\n",(0,s.jsx)(t.p,{children:'Both "request terms" and "submit terms" are part of the messaging system: the message is sent as "request terms" and received as "submit terms".'}),"\n",(0,s.jsx)(t.p,{children:"The interaction is as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The Claimer creates a partial ",(0,s.jsx)(t.code,{children:"Claim"})," (optionally) and sends a message to the Attester, requesting the ",(0,s.jsx)(t.code,{children:"Terms"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["An Attester creates a ",(0,s.jsx)(t.code,{children:"Terms"}),' object and sends it, as part of a "submit terms" message, back to the Claimer.']}),"\n",(0,s.jsxs)(t.li,{children:["The Claimer receives the message, checks the ",(0,s.jsx)(t.code,{children:"Terms"})," and, if all is in order, agrees to them."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"defining-a-quote",children:"Defining a Quote"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"Quote"})," object consists of costs, a time frame for delivering the attestation, and the terms and conditions of the work to be performed.\nIt may be sent to the Claimer by the Attester as part of the terms.\nIn cases where multiple Attesters provide the same attestation (for example, a car inspection) the Claimer may request a Quote from several Attesters to choose the Attester with the best conditions."]}),"\n",(0,s.jsxs)(t.p,{children:["To come to an agreement on the Quote, the participants may message back and forth, signing the object.\nIf the Attester wishes to add a Quote to their Terms, the Attester signs the ",(0,s.jsx)(t.code,{children:"Quote"}),' object before sending it as part of the "submit terms" message to the Claimer.\nAfter the Claimer has received the signed Quote and accepts it, the Claimer counter-signs it and attaches the credential hash for linking the Quote to the credential that it refers to.\nAfter the final exchange, the Attester checks all the information and issues the credential.']}),"\n",(0,s.jsx)(t.mermaid,{value:"classDiagram\n  class Quote {\n    String attesterDid\n    String cTypeHash\n    Cost cost\n    String currency\n    String timeframe\n    String termsAndConditions\n  }\n\n  class Cost {\n    Number gross\n    Number net\n    Object tax\n  }\n\n  Quote *-- Cost\n\n  class Signature {\n    String keyId\n    String signature\n  }\n\n  class QuoteAttesterSigned {\n    Signature attesterSignature\n  }\n\n  QuoteAttesterSigned *-- Signature\n  QuoteAttesterSigned --|> Quote\n\n  class QuoteAgreement {\n    String rootHash\n    Signature claimerSignature\n  }\n\n  QuoteAgreement *-- Signature\n  QuoteAgreement --|> QuoteAttesterSigned"})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);