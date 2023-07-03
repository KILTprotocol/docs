"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(h,s(s({ref:t},m),{},{components:n})):r.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"terms-and-quotes",title:"Terms and Quotes"},s=void 0,o={unversionedId:"concepts/advanced_concepts/terms-and-quotes",id:"concepts/advanced_concepts/terms-and-quotes",title:"Terms and Quotes",description:"During the attestation flow, it can happen that either the Claimer requests or the Attester sends the terms of the attestation, i.e., the requirements set by the both parties (the Claimer and the Attester) for the conditions of the attestation.",source:"@site/docs/concepts/08_advanced_concepts/01_terms_and_quote.md",sourceDirName:"concepts/08_advanced_concepts",slug:"/concepts/advanced_concepts/terms-and-quotes",permalink:"/docs/concepts/advanced_concepts/terms-and-quotes",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/08_advanced_concepts/01_terms_and_quote.md",tags:[],version:"current",lastUpdatedAt:1688385431,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:1,frontMatter:{id:"terms-and-quotes",title:"Terms and Quotes"},sidebar:"concepts",previous:{title:"KILT Messaging",permalink:"/docs/concepts/messaging"},next:{title:"Nested CTypes",permalink:"/docs/concepts/advanced_concepts/nested-ctypes"}},l={},c=[{value:"Defining Terms",id:"defining-terms",level:2},{value:"Sending Terms",id:"sending-terms",level:2},{value:"Defining a Quote",id:"defining-a-quote",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"During the attestation flow, it can happen that either the Claimer requests or the Attester sends the terms of the attestation, i.e., the requirements set by the both parties (the Claimer and the Attester) for the conditions of the attestation."),(0,a.kt)("p",null,"These terms are defined and agreed upon before the credential is issued.\nThis part of the process requires interaction and communication between both parties.\nThis communication can be done independently, e.g., in person, via messaging, on social media etc., or via the KILT Software Development Kit (SDK)."),(0,a.kt)("h2",{id:"defining-terms"},"Defining Terms"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Terms")," object consists of following items:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Claim"),": A partial claim with information the Attester already has about the Claimer.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This helps the Claimer to pre-fill their claims with information only known to the Attester."),(0,a.kt)("li",{parentName:"ul"},"The partial claim has to at least contain the CType hash the attestation will be based on."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CTypes"),": An optional list of full CTypes, in case the Claimer does not know the correct CType for the credential, yet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Legitimations"),": A legitimation is a credential, issued to the Attester, showing that the Attester has the authority or legitimacy to attest the claim requested.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is a way of establishing trust between the participants."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delegation Id"),": An Attester may be part of a top-down trust authority that has given them the right to attest in the name of an institution, or similar, as explained in the ",(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/distributed_trust"},"Distributed Trust section"),". If the Attester has attestation rights, delegated from another entity, this should be stated clearly at this point."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Quote"),": As shown in the ",(0,a.kt)("a",{parentName:"li",href:"#defining-a-quote"},"section below"),".")),(0,a.kt)("p",null,"Only the CType hash in the partial claim is required, everything else is optional."),(0,a.kt)("h2",{id:"sending-terms"},"Sending Terms"),(0,a.kt)("p",null,'Both "request terms" and "submit terms" are part of the messaging system: the message is sent as "request terms" and received as "submit terms".'),(0,a.kt)("p",null,"The interaction is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Claimer creates a partial ",(0,a.kt)("inlineCode",{parentName:"li"},"Claim")," (optionally) and sends a message to the Attester, requesting the ",(0,a.kt)("inlineCode",{parentName:"li"},"Terms"),"."),(0,a.kt)("li",{parentName:"ul"},"An Attester creates a ",(0,a.kt)("inlineCode",{parentName:"li"},"Terms"),' object and sends it, as part of a "submit terms" message, back to the Claimer.'),(0,a.kt)("li",{parentName:"ul"},"The Claimer receives the message, checks the ",(0,a.kt)("inlineCode",{parentName:"li"},"Terms")," and, if all is in order, agrees to them.")),(0,a.kt)("h2",{id:"defining-a-quote"},"Defining a Quote"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Quote")," object consists of costs, a time frame for delivering the attestation, and the terms and conditions of the work to be performed.\nIt may be sent to the Claimer by the Attester as part of the terms.\nIn cases where multiple Attesters provide the same attestation (for example, a car inspection) the Claimer may request a Quote from several Attesters to choose the Attester with the best conditions."),(0,a.kt)("p",null,"To come to an agreement on the Quote, the participants may message back and forth, signing the object.\nIf the Attester wishes to add a Quote to their Terms, the Attester signs the ",(0,a.kt)("inlineCode",{parentName:"p"},"Quote"),' object before sending it as part of the "submit terms" message to the Claimer.\nAfter the Claimer has received the signed Quote and accepts it, the Claimer counter-signs it and attaches the credential hash for linking the Quote to the credential that it refers to.\nAfter the final exchange, the Attester checks all the information and issues the credential.'),(0,a.kt)("mermaid",{value:"classDiagram\n  class Quote {\n    String attesterDid\n    String cTypeHash\n    Cost cost\n    String currency\n    String timeframe\n    String termsAndConditions\n  }\n\n  class Cost {\n    Number gross\n    Number net\n    Object tax\n  }\n\n  Quote *-- Cost\n\n  class Signature {\n    String keyId\n    String signature\n  }\n\n  class QuoteAttesterSigned {\n    Signature attesterSignature\n  }\n\n  QuoteAttesterSigned *-- Signature\n  QuoteAttesterSigned --|> Quote\n\n  class QuoteAgreement {\n    String rootHash\n    Signature claimerSignature\n  }\n\n  QuoteAgreement *-- Signature\n  QuoteAgreement --|> QuoteAttesterSigned"}))}p.isMDXComponent=!0}}]);