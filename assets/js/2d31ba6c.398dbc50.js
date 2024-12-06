"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6443],{8307:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=s(4848),c=s(8453);const o={id:"nested-ctypes",title:"Nested CTypes"},r=void 0,i={id:"concepts/advanced_concepts/nested-ctypes",title:"Nested CTypes",description:"A Nested CType is a hierarchical composite schema that includes other CTypes as substructures by referencing them.",source:"@site/docs/concepts/09_advanced_concepts/02_nested_ctypes.md",sourceDirName:"concepts/09_advanced_concepts",slug:"/concepts/advanced_concepts/nested-ctypes",permalink:"/docs/concepts/advanced_concepts/nested-ctypes",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/09_advanced_concepts/02_nested_ctypes.md",tags:[],version:"current",lastUpdatedAt:1733496053e3,sidebarPosition:2,frontMatter:{id:"nested-ctypes",title:"Nested CTypes"},sidebar:"concepts",previous:{title:"Terms and Quotes",permalink:"/docs/concepts/advanced_concepts/terms-and-quotes"},next:{title:"KILT Glossary",permalink:"/docs/concepts/glossary"}},a={},d=[{value:"Referencing",id:"referencing",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A Nested CType is a hierarchical composite schema that includes other CTypes as substructures by referencing them.\nFor example, a company could use a Nested CType that includes the required credentials, qualifications, health and safety certificates, etc. of its current employees.\nWhen verifying a Nested CType, the sub-CTypes need to be available."}),"\n",(0,n.jsx)(t.h2,{id:"referencing",children:"Referencing"}),"\n",(0,n.jsxs)(t.p,{children:["JSON-schema provides a referencing keyword ",(0,n.jsx)(t.code,{children:"$ref"})," that can be used as a pointer from other JSON schemas.\nThis allows CTypes to either reference fields in other CTypes or nest entire CTypes within one another, providing flexibility for several different use cases.\nA claim from a Nested CType requires the given CType, a list of comprised schemas, the claim content and the address of the owner."]}),"\n",(0,n.jsx)(t.p,{children:"This facility requires all JSON objects to build the schema and allows the reuse of previous schemas, reducing the need for copy-and-paste."})]})}function l(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var n=s(6540);const c={},o=n.createContext(c);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);