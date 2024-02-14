"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5892],{6999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(5893),a=n(1151);const s={id:"glossary",title:"KILT Glossary"},o=void 0,r={id:"concepts/glossary",title:"KILT Glossary",description:"Here is a glossary of terms related to the KILT Protocol:",source:"@site/docs/concepts/09_glossary.md",sourceDirName:"concepts",slug:"/concepts/glossary",permalink:"/docs/concepts/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/09_glossary.md",tags:[],version:"current",lastUpdatedAt:1707906150,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:9,frontMatter:{id:"glossary",title:"KILT Glossary"},sidebar:"concepts",previous:{title:"Nested CTypes",permalink:"/docs/concepts/advanced_concepts/nested-ctypes"}},c={},d=[{value:"W3C: Self-Sovereign Identity (SSI)",id:"w3c-self-sovereign-identity-ssi",level:2},{value:"KILT Protocol Specific Terms",id:"kilt-protocol-specific-terms",level:2},{value:"Request for Attestation",id:"request-for-attestation",level:3},{value:"Ecosystem Terms",id:"ecosystem-terms",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Here is a glossary of terms related to the KILT Protocol:"}),"\n",(0,i.jsx)(t.h2,{id:"w3c-self-sovereign-identity-ssi",children:"W3C: Self-Sovereign Identity (SSI)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Decentralized Identifier (DID)"})," \u2013 a unique digital identifier for entities (people, machines, services, and anything that identities can be built on) which can be anchored to a blockchain to provide the core of a verifiable digital identity.\nFor example, ",(0,i.jsx)(t.strong,{children:"did:kilt:4sxSYXakw1ZXBymzT9t3Yw91mUaqKST5bFUEjGEpvkTuckar"}),".\nIn KILT, identity is built by adding credentials to the DID."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"DID Authentication"})," \u2013 the process of proving that an entity has control over a DID, typically by using a digital signature or other cryptographic mechanism."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"DID Communication"})," \u2013 the use of DIDs to enable secure and decentralized communication between two or more parties, without the need for a central intermediary."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"DID Controller"})," \u2013 an entity that has control over a DID.\nThis may be the entity that generated the DID or an entity that has been authorized by the DID owner to manage the DID."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"DID Document"})," \u2013 a JSON-LD document that contains information about a DID, including public keys, services, and other metadata."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"DID Method"})," \u2013 a set of rules and specifications for how a DID is created, resolved, and managed on a particular network or platform."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"DID Resolver"})," \u2013 a software component that can resolve a DID to a DID Document, which contains information about the DID, such as public keys, services, and other metadata."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Self-Sovereign Identity (SSI)"})," - a decentralized digital identity management system that enables individuals to own and control their identity information using secure digital technologies, such as blockchain.\nSSI eliminates the need for intermediaries and provides individuals with greater privacy, security, and control over their personal data.\nIt is an emerging concept that has the potential to transform how identity is managed and verified across various sectors."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Verifiable Credentials (VCs)"})," - digital credentials that can be used to prove claims about a person, organization, or thing, and are designed to be portable, interoperable, and privacy-preserving.\nVerifiable credentials are often associated with DIDs and can be stored and managed using a DID-based identity system."]}),"\n",(0,i.jsx)(t.h2,{id:"kilt-protocol-specific-terms",children:"KILT Protocol Specific Terms"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Attestation"})," -the act of formally confirming and certifying the validity of the data within a claim, typically performed by a trusted Attester."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Attester"})," - a trusted entity or organization that attests claims and issues credentials on the KILT Protocol.\nThe Attester confirms the truth of the claim requested based on the information presented by the Claimer."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Claimer"})," - an individual or entity that asserts a claim or statement about their identity or qualifications.\nThe Claimer can use credentials to provide evidence of their claims, which can be verified by third-party entities or systems."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Claim Type (CType)"})," - a specific type of claim that can be made about an individual, such as their education, work experience, or identity information.\nEach claim type has a defined set of attributes that must be provided to support the claims data type and structure.\nIt can be used to generate verifiable credentials that can be shared with others. ",(0,i.jsx)(t.a,{href:"https://docs.kilt.io/docs/concepts/credentials/ctypes",children:"See the CTypes concept page for more details"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Credential"})," - a verifiable digital representation of a claim made by a Claimer, which has been attested to by a trusted entity, such as an Attester or Issuer.\nIt consists of a set of attributes that describe the claim and the proof of its validity, and can be shared with third parties to provide verifiable proof of the claim."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"KILT Digital Identity"})," - a self-sovereign identity that is owned and controlled by the individual or entity it represents.\nIt consists of verifiable credentials that are issued by trusted entities, such as Attesters, and can be used to prove claims about the individual or entity's identity, qualifications, or other attributes."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"KILT Coin"})," - the native token of the KILT blockchain used for paying for attestations and DIDs. It can also be used for governance, staking, transaction fees and as a means of exchange on the network."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"KILT Protocol"})," - an open-source blockchain protocol for issuing self-sovereign, and verifiable credentials for Web3, the next generation of the Internet.\nKILT\u2019s mission is to return control over personal data to its owner, restoring privacy to the individual."]}),"\n",(0,i.jsx)(t.h3,{id:"request-for-attestation",children:"Request for Attestation"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Trust Anchors"})," - entities that are trusted to issue or verify claims on the KILT network, such as governments, educational institutions, or professional organizations."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Trust Market"})," - a market that operates on trust and reputation in addition to financial incentives, where buyers and sellers exchange goods or services based on established reputation through digital platforms.\nWhile trust markets offer benefits such as reducing the need for intermediaries, they also face challenges that need to be addressed to maintain trust and fairness in transactions."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transport-Agnostic Messaging Layer"})," - a messaging system that is not dependent on any particular communication protocol or technology.\nIt allows different systems or applications to communicate with each other regardless of the underlying transport protocol used, providing a standardized way of exchanging messages across different platforms and technologies."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Verifier"})," - a person, organization, or system that checks the validity and authenticity of an individual's credentials or qualifications.\nVerifiers play a critical role in building trust and ensuring that credentials are accurate and reliable."]}),"\n",(0,i.jsx)(t.h2,{id:"ecosystem-terms",children:"Ecosystem Terms"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Blockchain Technology"})," - a type of distributed ledger technology that allows multiple parties to have a synchronized, transparent, and immutable record of transactions.\nIt uses cryptographic techniques to secure and verify transactions, and it does not require a central authority or intermediaries."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Decentralized Network"})," - a network of computers or nodes that operate without a central authority or control.\nIn a decentralized network, each node has equal control over the network, and decisions are made through a consensus mechanism, rather than by a single entity or group."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Distributed Ledger Technology (DLT)"})," - a type of digital database that stores information across a network of computers or nodes.\nIt allows multiple parties to have a synchronized, transparent, and immutable record of transactions, without the need for a central authority or intermediaries."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Extrinsic"})," - a transaction that originates from an external account and affects the state of the blockchain.\nIt can be used to execute actions on the network, such as transferring funds, making governance decisions, using functionality of the parachain, or interacting with smart contracts. More details about Extrinsics can be found in the ",(0,i.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-extrinsics",children:"official Polkadot documentation"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Parachains"})," - sovereign blockchains running in parallel within the Kusama or Polkadot networks, connected via the Relay Chain of that network.\nKILT launched as a parachain on the Kusama network in September 2021 and moved to Polkadot in September 2022.\nMore details about parachains can be found in the ",(0,i.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-parachains",children:"offical Polkadot documentation"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Polkadot"})," - a multi-chain network that allows for interoperability between different blockchain protocols, including the KILT Protocol.\nMore details about Polkadot can be found in the ",(0,i.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/getting-started#what-is-polkadot",children:"official Polkadot documentation"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"polkadot.js"})," - a JavaScript library that allows developers to interact with Substrate-based blockchains, including KILT Spiritnet and Peregrine.\nIt is the basis of the KILT SDK and provides many utilities and functions that may be useful for application developers.\nMore details about polkadot.js can be found in their ",(0,i.jsx)(t.a,{href:"https://polkadot.js.org/docs/",children:"official documentation"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Substrate"})," - a modular blockchain development framework used to build custom blockchain solutions, including the KILT Protocol blockchain.\nMore details about Substrate can be found in the ",(0,i.jsx)(t.a,{href:"https://docs.substrate.io/",children:"official Polkadot documentation"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Relay Chain"})," - the central chain in the Polkadot network that coordinates communication and consensus between different parachains.\nMore details about parachains can be found in the ",(0,i.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-architecture",children:"official Polkadot documentation"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(7294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);