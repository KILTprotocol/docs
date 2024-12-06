"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9869],{5669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var i=t(4848),o=t(8453);const d={id:"what-is-opendid",title:"Overview"},r=void 0,c={id:"develop/opendid/what-is-opendid",title:"Overview",description:"OpenDID is an OpenID Provider implementation capable of authenticating users through their Decentralized Identifier (DID) and Verifiable Credentials.",source:"@site/docs/develop/08_opendid/01_overview.md",sourceDirName:"develop/08_opendid",slug:"/develop/opendid/what-is-opendid",permalink:"/docs/develop/opendid/what-is-opendid",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/08_opendid/01_overview.md",tags:[],version:"current",lastUpdatedAt:1733496053e3,sidebarPosition:1,frontMatter:{id:"what-is-opendid",title:"Overview"},sidebar:"opendid",next:{title:"OpenDID Flow",permalink:"/docs/develop/opendid/flow"}},s={},a=[{value:"Project container structure",id:"project-container-structure",level:2},{value:"opendid-setup container",id:"opendid-setup-container",level:3},{value:"kiltprotocol/opendid container",id:"kiltprotocolopendid-container",level:3},{value:"kiltprotocol/opendid-demo",id:"kiltprotocolopendid-demo",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/KILTprotocol/opendid",children:"OpenDID"})," is an OpenID Provider implementation capable of authenticating users through their ",(0,i.jsx)(n.a,{href:"/docs/concepts/did",children:"Decentralized Identifier (DID)"})," and Verifiable Credentials."]}),"\n",(0,i.jsxs)(n.p,{children:["It follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Introduction",children:"OpenID Connect 1.0 Specification"})," and acts as a bridge between the decentralized identity world and the centralized authentication world supporting both the implicit and Authorization Code Flow."]}),"\n",(0,i.jsx)(n.p,{children:'A major use of OpenDID is Single Sign-On (SSO), which allows users to use the same DID and credentials to sign into multiple platforms and web services. For instance, by adding a "Sign in with KILT" button to a webpage.'}),"\n",(0,i.jsx)(n.p,{children:"Although integrating that functionality into a webpage is relatively simple, configuring and running OpenDID is more involved."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To learn more about the flow of OpenDID, see the ",(0,i.jsx)(n.a,{href:"/docs/develop/opendid/flow",children:"OpenDID Flow"})," documentation."]})}),"\n",(0,i.jsx)(n.h2,{id:"project-container-structure",children:"Project container structure"}),"\n",(0,i.jsx)(n.p,{children:"The project consist of multiple parts that supplement and interact with each other all shipped as Docker containers and released to Docker Hub."}),"\n",(0,i.jsx)(n.h3,{id:"opendid-setup-container",children:"opendid-setup container"}),"\n",(0,i.jsx)(n.p,{children:"The OpenDID Service needs configuration to run, which you can apply using this\ncontainer.\nFor example, it requires a DID to establish a session with an identity wallet.\nThis container creates a DID and the necessary configuration by providing an account with enough funds."}),"\n",(0,i.jsxs)(n.p,{children:["Learn more in the ",(0,i.jsx)(n.a,{href:"/docs/develop/opendid/opendid_service#run-setup-container",children:"run setup container documentation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"kiltprotocolopendid-container",children:"kiltprotocol/opendid container"}),"\n",(0,i.jsxs)(n.p,{children:["This container ",(0,i.jsx)(n.a,{href:"/docs/develop/opendid/opendid_service#run-the-service",children:"runs the OpenDID Service"}),", both the OpenDID front and back end.\nThis container requires the configuration file created from the ",(0,i.jsx)(n.code,{children:"opendid-setup"})," container."]}),"\n",(0,i.jsx)(n.h3,{id:"kiltprotocolopendid-demo",children:"kiltprotocol/opendid-demo"}),"\n",(0,i.jsxs)(n.p,{children:["This container is a ",(0,i.jsx)(n.a,{href:"/docs/develop/opendid/demo_project",children:"web app demo"}),", including front and back end services to demonstrate the use of OpenDID."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},d=i.createContext(o);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);