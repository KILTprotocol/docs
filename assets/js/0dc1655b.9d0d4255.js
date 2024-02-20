"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1780],{14308:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(17624),o=t(4552);const r={},s="Decentralized Identity Provider (DIP) provider consumer pallet",c={id:"concepts/dip/consumer",title:"Decentralized Identity Provider (DIP) provider consumer pallet",description:"This pallet is a core component of the Decentralized Identity Provider protocol.",source:"@site/docs/concepts/07_dip/03_consumer.md",sourceDirName:"concepts/07_dip",slug:"/concepts/dip/consumer",permalink:"/docs/concepts/dip/consumer",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/07_dip/03_consumer.md",tags:[],version:"current",lastUpdatedAt:1708428845,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:3,frontMatter:{},sidebar:"concepts",previous:{title:"Decentralized Identity Provider (DIP) provider pallet",permalink:"/docs/concepts/dip/provider"},next:{title:"Enabling DIP for user accounts on the KILT blockchain",permalink:"/docs/concepts/dip/dip-accounts-kilt"}},a={},d=[{value:"The <code>Config</code> trait",id:"the-config-trait",level:2},{value:"Storage",id:"storage",level:2},{value:"Origin",id:"origin",level:2},{value:"Calls (bullet numbers represent each call&#39;s encoded index)",id:"calls-bullet-numbers-represent-each-calls-encoded-index",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"decentralized-identity-provider-dip-provider-consumer-pallet",children:"Decentralized Identity Provider (DIP) provider consumer pallet"}),"\n",(0,n.jsxs)(i.p,{children:["This pallet is a core component of the Decentralized Identity Provider protocol.\nIt enables entities with an identity on a connected Substrate-based chain (provider) to use those identities on the chain this pallet is deployed (consumers) without requiring those entities to set up a new identity locally.\nA consumer chain is ",(0,n.jsx)(i.em,{children:"connected"})," to a provider if there is a way for the consumer chain to verify state proofs about parts of the state of the provider chain."]}),"\n",(0,n.jsxs)(i.p,{children:["A cross-chain transaction with DIP assumes the entity submitting the transaction has already generated a cross-chain identity commitment on the provider chain, by interacting with the DIP provider pallet on the provider chain.\nWith a generated identity commitment, a cross-chain transaction flow for a generic entity ",(0,n.jsx)(i.code,{children:"A"})," works as follows:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"A"})," generates a state proof proving the state of the identity commitment on the provider chain."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"A"})," generates any additional information required for an identity proof to be successfully verified by the consumer runtime."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"A"}),", using their account ",(0,n.jsx)(i.code,{children:"AccC"})," on the consumer chain, calls the ",(0,n.jsx)(i.code,{children:"dispatch_as"})," extrinsic by providing its identifier on the provider chain, the generated proof, and the ",(0,n.jsx)(i.code,{children:"Call"})," to be dispatched on the consumer chain.","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"This pallet verifies if the proof is correct, if not it returns an error."}),"\n",(0,n.jsxs)(i.li,{children:["This pallet dispatches the provided ",(0,n.jsx)(i.code,{children:"Call"})," with a new origin created by this pallet, returning any errors the dispatch action returns. The origin contains the information revealed in the proof, the identifier of the acting subject and the account ",(0,n.jsx)(i.code,{children:"AccC"})," dispatching the transaction."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The pallet is agnostic over the chain-specific definition of ",(0,n.jsx)(i.em,{children:"identity proof verifier"})," and ",(0,n.jsx)(i.em,{children:"identifier"}),", although, when deployed, they must be configured to respect the definition of identity and identity commitment established by the provider this pallet is linked to."]}),"\n",(0,n.jsx)(i.p,{children:"For instance, if the provider establishes that an identity commitment is a Merkle root of a set of public keys, an identity proof for the consumer will most likely be a Merkle proof revealing a subset of those keys.\nSimilarly, if the provider defines an identity commitment as some ZK-commitment, the respective identity proof on the consumer chain will be a ZK-proof verifying the validity of the commitment and therefore of the revealed information."}),"\n",(0,n.jsxs)(i.p,{children:["For identifiers, if the provider establishes that an identifier is a public key, the same definition must be used in the consumer pallet.\nOther definitions for an identifier, such as a simple integer or a ",(0,n.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/",children:"Decentralized Identifier (DID)"}),", must also be configured in the same way."]}),"\n",(0,n.jsxs)(i.p,{children:["The pallet allows the consumer runtime to define some ",(0,n.jsx)(i.code,{children:"LocalIdentityInfo"})," associated with each identifier, which the pallet's proof verifier can access and optionally modify upon proof verification.\nAny changes made to the ",(0,n.jsx)(i.code,{children:"LocalIdentityInfo"})," will be persisted if the identity proof is verified correctly and the extrinsic executed successfully."]}),"\n",(0,n.jsxs)(i.p,{children:["If the consumer does not need to store anything in addition to the information an identity proof conveys, they can use an empty tuple ",(0,n.jsx)(i.code,{children:"()"})," for the local identity info.\nAnother example could be the use of signatures, which requires a nonce to avoid replay protections.\nIn this case, a numeric type such as a ",(0,n.jsx)(i.code,{children:"u64"})," or a ",(0,n.jsx)(i.code,{children:"u128"})," could be used, and increased by the proof verifier when validating each new cross-chain transaction proof."]}),"\n",(0,n.jsxs)(i.h2,{id:"the-config-trait",children:["The ",(0,n.jsx)(i.code,{children:"Config"})," trait"]}),"\n",(0,n.jsxs)(i.p,{children:["Being chain-agnostic, most of the runtime configurations must be passed to the pallet's ",(0,n.jsx)(i.code,{children:"Config"})," trait.\nNevertheless, most of the types provided must reflect the definition of identity and identity commitment that the identity provider chain has established.\nThe trait has the following components:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type DipCallOriginFilter: Contains<RuntimeCallOf<Self>>"}),": A preliminary filter that checks whether a provided ",(0,n.jsx)(i.code,{children:"Call"})," accepts a DIP origin or not. If a call such as a system call does not accept a DIP origin, there is no need to verify the identity proof, hence the execution can bail out early. This does not guarantee that the dispatch call will succeed, but rather than it will mostly not fail with a ",(0,n.jsx)(i.code,{children:"BadOrigin"})," error."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type DispatchOriginCheck: EnsureOrigin<<Self as frame_system::Config>::RuntimeOrigin, Success = Self::AccountId>"}),": The origin check on the ",(0,n.jsx)(i.code,{children:"dispatch_as"})," extrinsic to verify that the caller is authorized to call the extrinsic. If successful, the check must return a ",(0,n.jsx)(i.code,{children:"AccountId"})," as defined by the consumer runtime."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type Identifier: Parameter + MaxEncodedLen"}),": The type of a subject identifier. This must match the definition of ",(0,n.jsx)(i.code,{children:"Identifier"})," the identity provider has defined in their deployment of the provider pallet."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type LocalIdentityInfo: FullCodec + TypeInfo + MaxEncodedLen"}),": Any additional information that must be available only to the provider runtime that is required to provide additional context when verifying a cross-chain identity proof."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type ProofVerifier: IdentityProofVerifier<Self>"}),": The core component of this pallet. It takes care of validating an identity proof and optionally update any ",(0,n.jsx)(i.code,{children:"LocalIdentityInfo"}),". It also defines, via its associated type, the structure of the identity proof that must be passed to the ",(0,n.jsx)(i.code,{children:"dispatch_as"})," extrinsic. Although not directly, the proof structure depends on the information that goes into the identity commitment on the provider chain, as that defines what information can be revealed as part of the commitment proof. Additional info to satisfy requirements according to the ",(0,n.jsx)(i.code,{children:"LocalIdentityInfo"})," (e.g., a signature) must also be provided in the proof."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type RuntimeCall: Parameter + Dispatchable<RuntimeOrigin = <Self as Config>::RuntimeOrigin>"}),": The aggregated ",(0,n.jsx)(i.code,{children:"Call"})," type."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type RuntimeOrigin: From<Origin<Self>> + From<<Self as frame_system::Config>::RuntimeOrigin>"}),": The aggregated ",(0,n.jsx)(i.code,{children:"Origin"})," type, which must include the origin exposed by this pallet."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"storage",children:"Storage"}),"\n",(0,n.jsxs)(i.p,{children:["The pallet contains a single storage element, the ",(0,n.jsx)(i.code,{children:"IdentityEntries"})," map.\nIt maps from a subject ",(0,n.jsx)(i.code,{children:"Identifier"})," to an instance of ",(0,n.jsx)(i.code,{children:"LocalIdentityInfo"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"This information is updated by the proof verifier whenever a new cross-chain transaction and its proof is submitted."}),"\n",(0,n.jsx)(i.h2,{id:"origin",children:"Origin"}),"\n",(0,n.jsxs)(i.p,{children:["Because the pallet allows other ",(0,n.jsx)(i.code,{children:"Call"}),"s to be dispatched after an identity proof has been verified, it also exposes a ",(0,n.jsx)(i.code,{children:"Origin"})," that can be used for those calls that require indeed a call to be DIP-authorized."]}),"\n",(0,n.jsx)(i.p,{children:"The origin is created after the identity proof has been successfully verified by the proof verifier, and it includes the identifier of the subject, the address of the tx submitter, and the result returned by the proof verifier upon successful verification."}),"\n",(0,n.jsx)(i.h2,{id:"calls-bullet-numbers-represent-each-calls-encoded-index",children:"Calls (bullet numbers represent each call's encoded index)"}),"\n",(0,n.jsxs)(i.ol,{start:"0",children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"pub fn dispatch_as(origin: OriginFor<T>, identifier: T::Identifier, proof: IdentityProofOf<T>, call: Box<RuntimeCallOf<T>>) -> DispatchResult"}),": Try to dispatch a new local call only if it passes all the DIP requirements. Specifically, the call will be dispatched if it passes the preliminary ",(0,n.jsx)(i.code,{children:"DipCallOriginFilter"})," and if the proof verifier returns an ",(0,n.jsx)(i.code,{children:"Ok(verification_result)"})," value. The value is then added to the ",(0,n.jsx)(i.code,{children:"DipOrigin"})," and passed down as the origin for the specified ",(0,n.jsx)(i.code,{children:"Call"}),". If the whole execution terminates successfully, any changes applied to the ",(0,n.jsx)(i.code,{children:"LocalIdentityInfo"})," by the proof verifier are persisted to the pallet storage."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4552:(e,i,t)=>{t.d(i,{I:()=>c,M:()=>s});var n=t(11504);const o={},r=n.createContext(o);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);