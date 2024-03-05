"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4272],{4940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=n(17624),i=n(4552),s=n(61964);const o={id:"distributed_trust",title:"Distributed Trust"},a=void 0,d={id:"concepts/distributed_trust",title:"Distributed Trust",description:"In some cases, Attesters are individuals that attest to the validity of claims made by Claimers.",source:"@site/docs/concepts/06_distributed_trust.md",sourceDirName:"concepts",slug:"/concepts/distributed_trust",permalink:"/docs/concepts/distributed_trust",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/06_distributed_trust.md",tags:[],version:"current",lastUpdatedAt:1709637884,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:6,frontMatter:{id:"distributed_trust",title:"Distributed Trust"},sidebar:"concepts",previous:{title:"Public Credentials for Assets",permalink:"/docs/concepts/credentials/public-credentials"},next:{title:"Overview",permalink:"/docs/concepts/dip/what-is-dip"}},c={},h=[{value:"Delegation Hierarchies",id:"delegation-hierarchies",level:2},{value:"Revocation",id:"revocation",level:3},{value:"Virtual Credential Organizations",id:"virtual-credential-organizations",level:2},{value:"Storing Delegation node",id:"storing-delegation-node",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"In some cases, Attesters are individuals that attest to the validity of claims made by Claimers.\nNevertheless, in most cases multiple Attesters group together to build up trust in a brand.\nIn this way, Verifiers no longer need to trust each and every Attester individually; they can put trust in the brand as a whole, which in return ensures that all Attesters working for this brand are credible.\nSuch a brand can be organized in many different ways.\nThe KILT protocol provides mechanisms to form such brands on the blockchain."}),"\n",(0,r.jsx)(t.p,{children:"There are two ways for Attesters to create groups and build an organization.\nThe first is by creating a Delegation Hierarchy, which provides a very basic and traditional hierarchical structure.\nThe second option is a Virtual Credential Organization (VCO), which is not yet implemented in KILT.\nVirtual Credential Organizations will be more flexible and will be able to support more decentralized use cases than Delegation Hierarchies."}),"\n",(0,r.jsx)(t.h2,{id:"delegation-hierarchies",children:"Delegation Hierarchies"}),"\n",(0,r.jsxs)(t.p,{children:["Delegation Hierarchies organize their members in a traditional hierarchical structure, and are modeled as a ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)",children:"Tree data structure"}),", also shown in the graph below.\nEveryone in KILT can create a new hierarchy and immediately become the only member of the newly created organization.\nNot only is the creator the only member of the organization, they are also the root of the hierarchy, meaning that the creator will have full control over the whole hierarchy."]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)(s.c,{alt:"Example hierarchy",sources:{light:"/img/concepts/distributed_trust/delegation-hierarchies.svg",dark:"/img/concepts/distributed_trust/delegation-hierarchies-dark.svg"}})}),"\n",(0,r.jsx)(t.p,{children:'Following the laws of Tree data structures, when the hierarchy root adds new members to the hierarchy, the new members become direct "children" of the root.\nSimilarly, when someone other than root adds new members, it becomes the parent of the new children.'}),"\n",(0,r.jsxs)(t.p,{children:["The graph above provides an example Delegation Hierarchy containing five Attesters.\n",(0,r.jsx)(t.strong,{children:"Attester 1"})," is the root (i.e., the creator) of the Delegation Hierarchy.\nAt some point, Attester 1 has added two more Attesters, Attester 2 and Attester 3.\n",(0,r.jsx)(t.strong,{children:"Attester 2"})," was given the right to both further delegate to other entities and to issue credentials on behalf of the organization.\n",(0,r.jsx)(t.strong,{children:"Attester 3"}),", on the other hand, was only given the right to add more Attesters to the Delegation Hierarchy, so they cannot issue any credentials.\nThis is useful in cases where someone should only have powers over the members, but is not authorized to do any work themselves.\nFor example, in companies this could be someone who manages a team of Attesters.\n",(0,r.jsx)(t.strong,{children:"Attesters 4"})," and ",(0,r.jsx)(t.strong,{children:"Attester 5"})," were added by Attester 3 and were only given attestation permissions, meaning that they can issue new credentials, but cannot delegate any work to other Attesters.\nIn the company example, these would be employees that do the attestation work but have no authority to hire new staff."]}),"\n",(0,r.jsx)(t.h3,{id:"revocation",children:"Revocation"}),"\n",(0,r.jsx)(t.p,{children:"Delegation Hierarchies also limit who can change or remove permissions."}),"\n",(0,r.jsx)(t.p,{children:"For delegations, only the parents of a given Attester can change or remove the Attester's delegation itself or any of its children.\nE.g., Attester 2 cannot change the delegation information for Attester 4, but Attester 1 and Attester 3 can both remove Attester 4 from the organization, or give them permission to also hire new people, which it cannot do right now."}),"\n",(0,r.jsx)(t.p,{children:"Credential revocation works similarly, with the difference that a credential can be revoked by any parent (as with delegations), or by the original Attester.\nE.g., Attester 2 cannot revoke credentials issued by Attester 1, 3, 4 and 5, while Attester 1 can revoke credentials issued by any Attester since Attester 1 is, directly or indirectly, the parent of every other node."}),"\n",(0,r.jsx)(t.h2,{id:"virtual-credential-organizations",children:"Virtual Credential Organizations"}),"\n",(0,r.jsxs)("center",{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Coming soon",src:n(79524).c+"",width:"659",height:"170"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://freepngimg.com/png/11420-coming-soon-png-file",children:"Credits to freepngimg.com."})})]}),"\n",(0,r.jsx)(t.h2,{id:"storing-delegation-node",children:"Storing Delegation node"}),"\n",(0,r.jsx)(t.p,{children:"Adding a new node in the delegation hierarchies requires providing a constant deposit, which is currently 1 KILT.\nThe deposit serves as a security measure to ensure the integrity of the blockchain and incentivize users to manage their nodes responsibly. By requiring a deposit, it discourages spamming or unnecessary creation of nodes.\nThe deposit can be reclaimed by the user by deleting their node."})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},79524:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/coming-soon-47dce0b68a2ac2b9fa558e4b8c5bd7bd.png"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>o});var r=n(11504);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);