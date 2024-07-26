"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9095],{670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var n=r(4848),i=r(8453),s=r(1122);const o={id:"distributed_trust",title:"Distributed Trust"},a=void 0,h={id:"concepts/distributed_trust",title:"Distributed Trust",description:"Sometimes, Attesters are individuals that attest to the validity of claims made by Claimers.",source:"@site/docs/concepts/06_distributed_trust.md",sourceDirName:"concepts",slug:"/concepts/distributed_trust",permalink:"/docs/concepts/distributed_trust",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/06_distributed_trust.md",tags:[],version:"current",lastUpdatedAt:172198217e4,sidebarPosition:6,frontMatter:{id:"distributed_trust",title:"Distributed Trust"},sidebar:"concepts",previous:{title:"Public Credentials for Assets",permalink:"/docs/concepts/credentials/public-credentials"},next:{title:"Overview",permalink:"/docs/concepts/dip/what-is-dip"}},d={},c=[{value:"Delegation hierarchies",id:"delegation-hierarchies",level:2},{value:"Revocation",id:"revocation",level:3},{value:"Storing delegation node",id:"storing-delegation-node",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Sometimes, Attesters are individuals that attest to the validity of claims made by Claimers.\nHowever, usually multiple Attesters group together to build up trust in a brand.\nIn this way, Verifiers no longer need to trust each and every Attester individually.\nThey can put trust in the brand as a whole, which in return ensures that all Attesters working for this brand are credible.\nSuch a brand can be organized in many different ways.\nThe KILT protocol provides mechanisms to form such brands on the blockchain."}),"\n",(0,n.jsx)(t.p,{children:"There are two ways for Attesters to create groups and build an organization.\nThe first is by creating a Delegation Hierarchy, which provides a basic and traditional hierarchical structure.\nThe second option is a Virtual Credential Organization (VCO), which isn't yet implemented in KILT.\nVCOs will be more flexible and able to support more decentralized use cases than Delegation Hierarchies."}),"\n",(0,n.jsx)(t.h2,{id:"delegation-hierarchies",children:"Delegation hierarchies"}),"\n",(0,n.jsxs)(t.p,{children:["Delegation Hierarchies organize their members in a traditional hierarchical structure, and are modeled as a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)",children:"Tree data structure"}),", also shown in the graph below.\nEveryone can use KILT to create a new hierarchy and immediately become the only member of the newly created organization.\nNot only is the creator the only member of the organization, they're also the root of the hierarchy.\nThis means that the creator has full control over the whole hierarchy."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)(s.A,{alt:"Example hierarchy",sources:{light:"/img/concepts/distributed_trust/delegation-hierarchies.svg",dark:"/img/concepts/distributed_trust/delegation-hierarchies-dark.svg"}})}),"\n",(0,n.jsx)(t.p,{children:'Following the laws of Tree data structures, when the hierarchy root adds new members to the hierarchy, the new members become direct "children" of the root.\nSimilarly, when someone other than root adds new members, it becomes the parent of the new children.'}),"\n",(0,n.jsxs)(t.p,{children:["The graph above provides an example Delegation Hierarchy containing five Attesters.\n",(0,n.jsx)(t.strong,{children:"Attester 1"})," is the root (i.e., the creator) of the Delegation Hierarchy.\nAt some point, Attester 1 has added two more Attesters, Attester 2 and Attester 3.\n",(0,n.jsx)(t.strong,{children:"Attester 2"})," was given the right to both further delegate to other entities and to issue credentials on behalf of the organization.\n",(0,n.jsx)(t.strong,{children:"Attester 3"}),", on the other hand, was only given the right to add more Attesters to the Delegation Hierarchy, so they can't issue any credentials.\nThis is useful in cases where someone should only have powers over the members, but isn't authorized to do any work themselves.\nFor example, in companies this could be someone who manages a team of Attesters.\n",(0,n.jsx)(t.strong,{children:"Attesters 4"})," and ",(0,n.jsx)(t.strong,{children:"Attester 5"})," were added by Attester 3 and were only given attestation permissions, meaning that they can issue new credentials, but can't delegate any work to other Attesters.\nIn the company example, these would be employees that attest the work but have no authority to hire new staff."]}),"\n",(0,n.jsx)(t.h3,{id:"revocation",children:"Revocation"}),"\n",(0,n.jsx)(t.p,{children:"Delegation hierarchies limit who can change or remove permissions."}),"\n",(0,n.jsx)(t.p,{children:"For delegations, only the parents of a given Attester can change or remove the Attester's delegation itself or any of its children.\nE.g., Attester 2 can't change the delegation information for Attester 4, but Attester 1 and Attester 3 can both remove Attester 4 from the organization, or give them permission to also hire new people, which it can't do right now."}),"\n",(0,n.jsx)(t.p,{children:"Credential revocation works similarly, with the difference that any parent can revoke a credential (as with delegations), or by the original Attester.\nE.g., Attester 2 can't revoke credentials issued by Attester 1, 3, 4 and 5, while Attester 1 can revoke credentials issued by any Attester since Attester 1 is, directly or indirectly, the parent of every other node."}),"\n",(0,n.jsx)(t.h2,{id:"storing-delegation-node",children:"Storing delegation node"}),"\n",(0,n.jsx)(t.p,{children:"Adding a new node in the delegation hierarchies requires providing a constant deposit, which is currently 1 KILT.\nThe deposit serves as a security measure to ensure the integrity of the blockchain and incentivize users to manage their nodes responsibly. By requiring a deposit, it discourages spamming or unnecessary creation of nodes.\nWhen a user deletes their node, they can reclaim the deposit."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(6540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);