"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9256],{8964:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(17624),c=s(4552);const o={id:"nested-ctypes",title:"Nested CTypes"},r=void 0,a={id:"concepts/advanced_concepts/nested-ctypes",title:"Nested CTypes",description:"A Nested CType is a hierarchical composite schema that includes other CTypes as substructures by referencing them.",source:"@site/docs/concepts/09_advanced_concepts/02_nested_ctypes.md",sourceDirName:"concepts/09_advanced_concepts",slug:"/concepts/advanced_concepts/nested-ctypes",permalink:"/docs/concepts/advanced_concepts/nested-ctypes",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/09_advanced_concepts/02_nested_ctypes.md",tags:[],version:"current",lastUpdatedAt:1715070662,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:2,frontMatter:{id:"nested-ctypes",title:"Nested CTypes"},sidebar:"concepts",previous:{title:"Terms and Quotes",permalink:"/docs/concepts/advanced_concepts/terms-and-quotes"},next:{title:"KILT Glossary",permalink:"/docs/concepts/glossary"}},i={},d=[{value:"Referencing",id:"referencing",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",...(0,c.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A Nested CType is a hierarchical composite schema that includes other CTypes as substructures by referencing them.\nFor example, a company could use a Nested CType that includes the required credentials, qualifications, health and safety certificates, etc. of its current employees.\nWhen verifying a Nested CType, the sub-CTypes need to be available."}),"\n",(0,n.jsx)(t.h2,{id:"referencing",children:"Referencing"}),"\n",(0,n.jsxs)(t.p,{children:["JSON-schema provides a referencing keyword ",(0,n.jsx)(t.code,{children:"$ref"})," that can be used as a pointer from other JSON schemas.\nThis allows CTypes to either reference fields in other CTypes or nest entire CTypes within one another, providing flexibility for several different use cases.\nA claim from a Nested CType requires the given CType, a list of comprised schemas, the claim content and the address of the owner."]}),"\n",(0,n.jsx)(t.p,{children:"This facility requires all JSON objects to build the schema and allows the reuse of previous schemas, reducing the need for copy-and-paste."})]})}function l(e={}){const{wrapper:t}={...(0,c.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>a,M:()=>r});var n=s(11504);const c={},o=n.createContext(c);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);