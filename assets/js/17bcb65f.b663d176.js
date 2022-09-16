"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7266],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=i,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35182:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var n=r(83117),i=(r(67294),r(3905)),o=r(50941);const a={id:"distributed_trust",title:"Distributed Trust"},s=void 0,c={unversionedId:"concepts/distributed_trust",id:"concepts/distributed_trust",title:"Distributed Trust",description:"This feature is currently a preview on Peregrine and is therefore not available on Spiritnet.",source:"@site/docs/concepts/05_distributed_trust.md",sourceDirName:"concepts",slug:"/concepts/distributed_trust",permalink:"/docs/concepts/distributed_trust",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/05_distributed_trust.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"distributed_trust",title:"Distributed Trust"},sidebar:"concepts",previous:{title:"Verification",permalink:"/docs/concepts/credentials/verification"},next:{title:"KILT Messaging",permalink:"/docs/concepts/messaging"}},l={},d=[{value:"Delegation Hierarchies",id:"delegation-hierarchies",level:2},{value:"Revocation",id:"revocation",level:3},{value:"Virtual Credential Organizations",id:"virtual-credential-organizations",level:2}],h={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This feature is currently a preview on Peregrine and is therefore not available on Spiritnet.")),(0,i.kt)("p",null,"In some cases, Attesters are individuals that attest to the validity of claims made by Claimers.\nNevertheless, in most cases multiple Attesters group together to build up trust in a brand.\nIn this way, Verifiers no longer need to trust each and every Attester individually; they can put trust in the brand as a whole, which in return ensures that all Attesters working for this brand are credible.\nSuch a brand can be organized in many different ways.\nThe KILT protocol provides mechanisms to form such brands on the blockchain."),(0,i.kt)("p",null,"There are two ways for Attesters to create groups and build an organization.\nThe first is by creating a Delegation Hierarchy, which provides a very basic and traditional hierarchical structure.\nThe second option is a Virtual Credential Organization (VCO), which is not yet implemented in KILT.\nVirtual Credential Organizations will be more flexible and will be able to support more decentralized use cases than Delegation Hierarchies."),(0,i.kt)("h2",{id:"delegation-hierarchies"},"Delegation Hierarchies"),(0,i.kt)("p",null,"Delegation Hierarchies organize their members in a traditional hierarchical structure, and are modeled as a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"},"Tree data structure"),", also shown in the graph below.\nEveryone in KILT can create a new hierarchy and immediately become the only member of the newly created organization.\nNot only is the creator the only member of the organization, they are also the root of the hierarchy, meaning that the creator will have full control over the whole hierarchy."),(0,i.kt)("center",null,(0,i.kt)(o.Z,{alt:"Example hierarchy",sources:{light:"/img/concepts/distributed_trust/delegation-hierarchies.svg",dark:"/img/concepts/distributed_trust/delegation-hierarchies-dark.svg"},mdxType:"ThemedImage"})),(0,i.kt)("p",null,'Following the laws of Tree data structures, when the hierarchy root adds new members to the hierarchy, the new members become direct "children" of the root.\nSimilarly, when someone other than root adds new members, it becomes the parent of the new children.'),(0,i.kt)("p",null,"The graph above provides an example Delegation Hierarchy containing five Attesters.\n",(0,i.kt)("strong",{parentName:"p"},"Attester 1")," is the root (i.e., the creator) of the Delegation Hierarchy.\nAt some point, Attester 1 has added two more Attesters, Attester 2 and Attester 3.\n",(0,i.kt)("strong",{parentName:"p"},"Attester 2")," was given the right to both further delegate to other entities and to issue credentials on behalf of the organization.\n",(0,i.kt)("strong",{parentName:"p"},"Attester 3"),", on the other hand, was only given the right to add more Attesters to the Delegation Hierarchy, so they cannot issue any credentials.\nThis is useful in cases where someone should only have powers over the members, but is not authorized to do any work themselves.\nFor example, in companies this could be someone who manages a team of Attesters.\n",(0,i.kt)("strong",{parentName:"p"},"Attesters 4")," and ",(0,i.kt)("strong",{parentName:"p"},"Attester 5")," were added by Attester 3 and were only given attestation permissions, meaning that they can issue new credentials, but cannot delegate any work to other Attesters.\nIn the company example, these would be employees that do the attestation work but have no authority to hire new staff."),(0,i.kt)("h3",{id:"revocation"},"Revocation"),(0,i.kt)("p",null,"Delegation Hierarchies also limit who can change or remove permissions."),(0,i.kt)("p",null,"For delegations, only the parents of a given Attester can change or remove the Attester's delegation itself or any of its children.\nE.g., Attester 2 cannot change the delegation information for Attester 4, but Attester 1 and Attester 3 can both remove Attester 4 from the organization, or give them permission to also hire new people, which it cannot do right now."),(0,i.kt)("p",null,"Credential revocation works similarly, with the difference that a credential can be revoked by any parent (as with delegations), or by the original Attester.\nE.g., Attester 2 cannot revoke credentials issued by Attester 1, 3, 4 and 5, while Attester 1 can revoke credentials issued by any Attester since Attester 1 is, directly or indirectly, the parent of every other node."),(0,i.kt)("h2",{id:"virtual-credential-organizations"},"Virtual Credential Organizations"),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Coming soon",src:r(999).Z,width:"659",height:"170"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://freepngimg.com/png/11420-coming-soon-png-file"},"Credits to freepngimg.com."))))}u.isMDXComponent=!0},999:function(e,t,r){t.Z=r.p+"assets/images/coming-soon-47dce0b68a2ac2b9fa558e4b8c5bd7bd.png"}}]);