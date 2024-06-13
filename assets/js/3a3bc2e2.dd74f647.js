"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9144],{16364:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var n=o(17624),i=o(4552);const d={id:"demo_project",title:"Demo Project"},r=void 0,c={id:"develop/opendid/demo_project",title:"Demo Project",description:"The example code at demo-project contains a minimal application that uses OpenDID.",source:"@site/docs/develop/08_opendid/05_demo_project.md",sourceDirName:"develop/08_opendid",slug:"/develop/opendid/demo_project",permalink:"/docs/develop/opendid/demo_project",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/08_opendid/05_demo_project.md",tags:[],version:"current",lastUpdatedAt:1718264724,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:5,frontMatter:{id:"demo_project",title:"Demo Project"},sidebar:"opendid",previous:{title:"Integrate OpenDID",permalink:"/docs/develop/opendid/integrate_opendid"},next:{title:"Advanced Usage",permalink:"/docs/develop/opendid/advanced"}},s={},a=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The example code at ",(0,n.jsx)(t.a,{href:"https://github.com/KILTprotocol/opendid/tree/main/demo-project",children:"demo-project"})," contains a minimal application that uses OpenDID.\nIt's an ",(0,n.jsx)(t.a,{href:"https://expressjs.com",children:"express"})," application that exposes three things:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A login page that handles the dispatching of the user to the OpenDID service."}),"\n",(0,n.jsx)(t.li,{children:"A callback page for one of the OpenID Connect flows supported to accept the token."}),"\n",(0,n.jsx)(t.li,{children:"A protected resource that only authenticated users can access."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For the demo application to work you need a running OpenDID Service and an identity wallet that follows ",(0,n.jsx)(t.a,{href:"https://github.com/KILTprotocol/spec-ext-credential-api",children:"the Credential API spec"})," (e.g. ",(0,n.jsx)(t.a,{href:"https://www.sporran.org/",children:"Sporran"}),") with a DID and Credential issued by the required attester specified in the ",(0,n.jsx)(t.code,{children:"config.yaml"})," file (Default is SocialKYC).\nIf you follow the steps in this section in order, you have all the necessary components for the demo application to run."]}),"\n",(0,n.jsx)(t.p,{children:"Run the pre-configured demo application with the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker run -d -it --rm \\\n    --name demo-frontend \\\n    -p 1606:1606 \\\n    docker.io/kiltprotocol/opendid-demo\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The demo page runs on ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"http://localhost:1606",children:"http://localhost:1606"})}),". It pre-fills the Client ID value and offers login buttons to follow the implicit or authorization code flow."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You can set the JSON web token (JWT) secret can with the ",(0,n.jsx)(t.code,{children:"TOKEN_SECRET"})," environment variable inside the docker container. It must match\nthe one specified in the ",(0,n.jsx)(t.code,{children:"config.yaml"})," file to correctly verify the ",(0,n.jsx)(t.code,{children:"id_token"}),". The default is ",(0,n.jsx)(t.code,{children:"super-secret-jwt-secret"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>c,M:()=>r});var n=o(11504);const i={},d=n.createContext(i);function r(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);