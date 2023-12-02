"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return a?r.createElement(u,i(i({ref:t},h),{},{components:a})):r.createElement(u,i({ref:t},h))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={id:"overview",title:"\ud83d\udc53 Overview"},i=void 0,o={unversionedId:"develop/workshop/overview",id:"develop/workshop/overview",title:"\ud83d\udc53 Overview",description:"This tutorial runs through the full story of a claim.",source:"@site/docs/develop/03_workshop/03_overview.md",sourceDirName:"develop/03_workshop",slug:"/develop/workshop/overview",permalink:"/docs/develop/workshop/overview",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/03_overview.md",tags:[],version:"current",lastUpdatedAt:1701504096,formattedLastUpdatedAt:"Dec 2, 2023",sidebarPosition:3,frontMatter:{id:"overview",title:"\ud83d\udc53 Overview"},sidebar:"workshop",previous:{title:"\ud83c\udf92 Setup",permalink:"/docs/develop/workshop/setup"},next:{title:"\ud83c\udfe2 Attester",permalink:"/docs/develop/workshop/attester/"}},l={},c=[{value:"Request an Attestation",id:"request-an-attestation",level:2},{value:"Verify an Attestation",id:"verify-an-attestation",level:2},{value:"Example: Requesting a travel visa",id:"example-requesting-a-travel-visa",level:3}],h={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial runs through the full story of a claim."),(0,n.kt)("p",null,"It involves three actors which work together to create ",(0,n.kt)("strong",{parentName:"p"},"distributed trust"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," is an actor who claims to possess certain credentials, abilities, or other attributes."),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," is an actor that verifies the claims of a ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer"),"."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," is an actor that asks for proof of a claim.")),(0,n.kt)("p",null,"For the workshop, you play all three roles."),(0,n.kt)("p",null,"In a real-world use case, these actors would be different people and services, which this workshop simulates using different folders for each service.\nEach actor typically performs different roles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Both the ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," and the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," have to interact with the KILT blockchain."),(0,n.kt)("li",{parentName:"ul"},"But only the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," is required to own KILTs since they have to pay for storing the attestation on chain."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," only needs to query the KILT blockchain to ensure that the attestation is still valid and was not revoked."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," is not required to query the blockchain, but they might do so to check whether their credential is still valid or if the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," has revoked it in the meantime.")),(0,n.kt)("h2",{id:"request-an-attestation"},"Request an Attestation"),(0,n.kt)("p",null,"Before the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," can attest a credential, they need to generate a ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/light-did-creation"},"light DID"),", which can happen off-chain."),(0,n.kt)("p",null,"The ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," has to register their DID on chain and needs KILT coins."),(0,n.kt)("p",null,"After both the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," and the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," have set up their identities, the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," can start the attestation process by requesting an attestation from the ",(0,n.kt)("span",{className:"label-role attester"},"Attester"),"."),(0,n.kt)("mermaid",{value:"sequenceDiagram\nactor C as Claimer\nactor A as Attester\nparticipant B as KILT Blockchain\n    C->>+C: Create credential from provided claims\n    C->>+A: Transmit credential to request attestation\n    A->>A: Validate received attributes\n    A->>+B: Store attestation\n    B--\x3e>-A: Attestation hash\n    A--\x3e>-C: Attestation Hash"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," prepares the Credential to attest, along with some proof, for example, a bank statement and ID."),(0,n.kt)("li",{parentName:"ol"},"They send the document to the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," for attestation."),(0,n.kt)("li",{parentName:"ol"},"Upon receiving the credential, the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," decides whether the claim is valid by examining the proofs. If the ",(0,n.kt)("span",{className:"label-role claimer"},"Attester")," trusts the claim, they store the attestation document's hash value on the chain, which is a non-functional copy of the document."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," sends this hash value to the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer"),", which represents verification of a document.")),(0,n.kt)("h2",{id:"verify-an-attestation"},"Verify an Attestation"),(0,n.kt)("p",null,"The ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," requests a presentation from the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," for a specific required CType. Without a specific CType, the presentation is meaningless."),(0,n.kt)("p",null,"A presentation is derived from a credential and does not need to contain all attributes."),(0,n.kt)("p",null,"After the request, the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," can choose to hide elements of their credentials that aren't relevant to the claim.\nFor example, hide their address from their ID if the ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," is only interested in their age."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"A later step in the workshop ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/workshop/attester/ctype"},"explains CTypes in more detail"),".")),(0,n.kt)("mermaid",{value:"sequenceDiagram\nactor C as Claimer\nactor V as Verifier\nparticipant B as KILT Blockchain\n    V->>+C: Request presentation for CType\n    C->>C: Derive a presentation from a credential\n    C--\x3e>-V: submit presentation\n    V->>B: check validity of presentation"}),(0,n.kt)("h3",{id:"example-requesting-a-travel-visa"},"Example: Requesting a travel visa"),(0,n.kt)("p",null,"To take an example of applying for a travel visa:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'The Embassy (analogous to the Verifier) asks a traveler (analogous to the Claimer) for a specific document or CType. For example, it could be a bank statement. The Embassy asks, "Provide proof of financial stability, and we\'ll grant you a visa." The traveler gets the bank statement from their bank, gets it attested by the bank (The Attester), and prepares the document.'),(0,n.kt)("li",{parentName:"ol"},"The document is ready, but the Embassy doesn't need all the information in the document. The embassy wants to know if a traveler has sufficient funds, but they don't need to know any transaction details. The traveler redacts or hides these details while presenting."),(0,n.kt)("li",{parentName:"ol"},"The traveler presents the document to the embassy."),(0,n.kt)("li",{parentName:"ol"},"The embassy verified the document's authenticity by comparing its hash value with the one on their internal system or a decentralized ledger."),(0,n.kt)("li",{parentName:"ol"},"Since they trust the Attester (in this case, the bank that attested the bank statement), they approved the visa application.")),(0,n.kt)("admonition",{title:"Summary",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"As you can see, the Embassy didn't need to trust the Claimer directly in this system.\nThey trust the Attester, whom they had previously worked with, or respect due to their position.\nAnd with that trust, they grant the visa with no knowledge of what the Claimer has used the credential for.\nEven though this process emerged due to the trust in the Attester, the Attester was not involved in the second stage, so they were unaware of it.\nPrivacy was achieved with distributed trust.")))}m.isMDXComponent=!0}}]);