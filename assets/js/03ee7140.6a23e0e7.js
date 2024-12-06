"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[618],{6846:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var t=n(4848),d=n(8453);const o={id:"integrate_opendid",title:"Integrate OpenDID"},c=void 0,l={id:"develop/opendid/integrate_opendid",title:"Integrate OpenDID",description:"OpenDID follows the OpenID Connect 1.0 Specification and implements both the implicit flow",source:"@site/docs/develop/08_opendid/04_integrate_opendid.md",sourceDirName:"develop/08_opendid",slug:"/develop/opendid/integrate_opendid",permalink:"/docs/develop/opendid/integrate_opendid",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/08_opendid/04_integrate_opendid.md",tags:[],version:"current",lastUpdatedAt:1733496053e3,sidebarPosition:4,frontMatter:{id:"integrate_opendid",title:"Integrate OpenDID"},sidebar:"opendid",previous:{title:"Run OpenDID Service",permalink:"/docs/develop/opendid/opendid_service"},next:{title:"Demo Project",permalink:"/docs/develop/opendid/demo_project"}},s={},r=[{value:"Authorization code flow",id:"authorization-code-flow",level:2},{value:"Implicit flow",id:"implicit-flow",level:2},{value:"Self-Issued OpenID Provider v2 (SIOPv2)",id:"self-issued-openid-provider-v2-siopv2",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["OpenDID follows the ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Introduction",children:"OpenID Connect 1.0 Specification"})," and implements both the ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowSteps",children:"implicit flow"}),"\nand the ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth",children:"authorization code flow"}),".\nRead the ",(0,t.jsx)(i.a,{href:"/docs/develop/opendid/demo_project",children:"demo project guide"})," for an example of integrating OpenDID."]}),"\n",(0,t.jsx)(i.h2,{id:"authorization-code-flow",children:"Authorization code flow"}),"\n",(0,t.jsxs)(i.p,{children:["Initiate the flow by redirecting to the ",(0,t.jsx)(i.strong,{children:"GET"})," ",(0,t.jsx)(i.code,{children:"/api/v1/authorize"})," endpoint on the OpenDID service and setting the following query URL-encoded parameters:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"response_type"}),": set value to ",(0,t.jsx)(i.code,{children:"code"})," to indicate Authorization Code Flow."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"client_id"}),": The client ID set in the ",(0,t.jsx)(i.code,{children:"config.yaml"})," file."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"redirect_uri"}),": OpenDID redirects to this URL after authentication."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"scope"}),": set value to ",(0,t.jsx)(i.code,{children:"openid"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"state"}),": set to a secure random number."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"nonce"}),": optional value, set to a secure random number."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"GET /api/v1/authorize?\n    response_type=code&\n    client_id=example-client&\n    redirect_uri=http://localhost:1606/callback.html&\n    scope=openid&\n    state=rkw49cbvd4azu5dsln1xbl&\n    nonce=vedur4om49ei8w91jt7wt HTTP/1.1\n"})}),"\n",(0,t.jsxs)(i.p,{children:["After successful authentication, the OpenDID service redirects back to the provided ",(0,t.jsx)(i.code,{children:"redirect_uri"})," with ",(0,t.jsx)(i.code,{children:"code"})," and ",(0,t.jsx)(i.code,{children:"state"})," query parameters."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"/callback.html?\n    code=lwDS1ZpQBwR4Vdm53_L8bWpUJ1mx9A0mA_-86dubTqzqzwGazx1RyLX4Z_qf&\n    state=rkw49cbvd4azu5dsln1xbl\n"})}),"\n",(0,t.jsxs)(i.p,{children:["You can retrieve the ",(0,t.jsx)(i.code,{children:"id_token"})," by calling the ",(0,t.jsx)(i.strong,{children:"POST"})," ",(0,t.jsx)(i.code,{children:"/api/v1/token"})," and providing the following values in the form serialization:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"code"}),": code value returned from ",(0,t.jsx)(i.code,{children:"authorize"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"grant_type"}),": set value to ",(0,t.jsx)(i.code,{children:"authorization_code"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"redirect_uri"}),": the same ",(0,t.jsx)(i.code,{children:"redirect_uri"})," used in ",(0,t.jsx)(i.code,{children:"authorize"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"client_id"}),": the client ID set in the ",(0,t.jsx)(i.code,{children:"config.yaml"})," file."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"client_secret"}),": the client secret value set in the ",(0,t.jsx)(i.code,{children:"config.yaml"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"POST /api/v1/token HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\n\ncode=lwDS1ZpQBwR4Vdm53_L8bWpUJ1mx9A0mA_-86dubTqzqzwGazx1RyLX4Z_qf&\ngrant_type=authorization_code&\nredirect_uri=http%3A%2F%2Flocalhost%3A1606%2Fcallback.html&\nclient_id=example-client&\nclient_secret=insecure_client_secret\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The OpenDID service returns the ",(0,t.jsx)(i.code,{children:"id_token"})," in the response body serialized as a JSON object."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n    "access_token": "SsFhhSBMWsLeDMxVUVGreKARNwYxMZtGFfBr0-ZiH6iondSmwPRvQDqkG6Fh",\n    "token_type": "bearer",\n    "refresh_token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWQ6a2lsdDo0b0VkNENVV3RwbkxUVnZENVBFd2lMUmlqMWdzQmprS1JMbVpES2lCOEdqN2I2V0wiLCJ3M24iOiJjdXN0b20iLCJleHAiOjE3MTY4MTYwNjQsImlhdCI6MTcxNjgxNTQ2NCwiaXNzIjoiZGlkOmtpbHQ6NHJzQkE3dEQ1S1E4TDlXSGpGallRdUhrTWtha2NmSGRDNUNhUVVjVXh5VWpEVkhBIiwiYXVkIjoiYXV0aGVudGljYXRpb24iLCJwcm8iOnsiRW1haWwiOiJhYmR1bEBraWx0LmlvIn0sIm5vbmNlIjoidmVkdXI0b200OWVpOHc5MWp0N3d0In0.yOmE_9jWKcAu8LpjVx7IsFyOOvlKbgo2oC4Imf-qrLY",\n    "id_token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWQ6a2lsdDo0b0VkNENVV3RwbkxUVnZENVBFd2lMUmlqMWdzQmprS1JMbVpES2lCOEdqN2I2V0wiLCJ3M24iOiJjdXN0b20iLCJleHAiOjE3MTY4MTU1MjQsImlhdCI6MTcxNjgxNTQ2NCwiaXNzIjoiZGlkOmtpbHQ6NHJzQkE3dEQ1S1E4TDlXSGpGallRdUhrTWtha2NmSGRDNUNhUVVjVXh5VWpEVkhBIiwiYXVkIjoiYXBwbGljYXRpb24iLCJwcm8iOnsiRW1haWwiOiJhYmR1bEBraWx0LmlvIn0sIm5vbmNlIjoidmVkdXI0b200OWVpOHc5MWp0N3d0In0.YlRE9EGnSExQCb5m2iy4__58PZJlZdCZMsSvsuW4oj8"\n}\n'})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["In full-stack applications, calling the ",(0,t.jsx)(i.code,{children:"token"})," endpoint is usually done through the back end to improve security."]})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"id_token"})," is a bearer JSON web token (JWT) signed by the JWT key-pair specified in the ",(0,t.jsx)(i.code,{children:"config.yaml"})," file of the OpenDID service.\nYou must verify this using the JWT public key, for example, by the back end of the Web app."]}),"\n",(0,t.jsx)(i.h2,{id:"implicit-flow",children:"Implicit flow"}),"\n",(0,t.jsxs)(i.p,{children:["Initiate the flow by redirecting to the ",(0,t.jsx)(i.strong,{children:"GET"})," ",(0,t.jsx)(i.code,{children:"/api/v1/authorize"})," endpoint on the OpenDID Service and setting the following query parameters:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"response_type"}),": set value to ",(0,t.jsx)(i.code,{children:"id_token"})," to indicate Implicit Flow."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"client_id"}),": The client ID set in the config.yaml file."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"redirect_uri"}),": OpenDID redirects to this URL after authentication."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"scope"}),": set value to ",(0,t.jsx)(i.code,{children:"openid"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"state"}),": set to a secure random number."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"nonce"}),": optional value, set to a secure random number."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"GET /api/v1/authorize?\n    response_type=id_token&\n    client_id=example-client&\n    redirect_uri=http://localhost:1606/callback.html&\n    scope=openid&\n    state=o0fl4c9gwylymzw5f4ik&\n    nonce=ia7sa06ungxdfzaqphk2 HTTP/1.1\n"})}),"\n",(0,t.jsxs)(i.p,{children:["After successful authentication, OpenDID redirects back to the provided ",(0,t.jsx)(i.code,{children:"redirect_uri"})," with ",(0,t.jsx)(i.code,{children:"id_token"})," and ",(0,t.jsx)(i.code,{children:"state"}),"\n",(0,t.jsx)(i.strong,{children:"fragment components"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"/callback.html#\n    id_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWQ6a2lsdDo0b0VkNENVV3RwbkxUVnZENVBFd2lMUmlqMWdzQmprS1JMbVpES2lCOEdqN2I2V0wiLCJ3M24iOiJjdXN0b20iLCJleHAiOjE3MTY4ODQ5MDYsImlhdCI6MTcxNjg4NDg0NiwiaXNzIjoiZGlkOmtpbHQ6NHJzQkE3dEQ1S1E4TDlXSGpGallRdUhrTWtha2NmSGRDNUNhUVVjVXh5VWpEVkhBIiwiYXVkIjoiYXBwbGljYXRpb24iLCJwcm8iOnsiRW1haWwiOiJhYmR1bEBraWx0LmlvIn0sIm5vbmNlIjoiOTFzN2ZnZDZvcjR3c2NkdGVtcXQifQ.xTy3Oyc5e-vlP10mGy0f9GqNU4LV97s77s-l7w5EwF0&\n    refresh_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWQ6a2lsdDo0b0VkNENVV3RwbkxUVnZENVBFd2lMUmlqMWdzQmprS1JMbVpES2lCOEdqN2I2V0wiLCJ3M24iOiJjdXN0b20iLCJleHAiOjE3MTY4ODU0NDYsImlhdCI6MTcxNjg4NDg0NiwiaXNzIjoiZGlkOmtpbHQ6NHJzQkE3dEQ1S1E4TDlXSGpGallRdUhrTWtha2NmSGRDNUNhUVVjVXh5VWpEVkhBIiwiYXVkIjoiYXV0aGVudGljYXRpb24iLCJwcm8iOnsiRW1haWwiOiJhYmR1bEBraWx0LmlvIn0sIm5vbmNlIjoiOTFzN2ZnZDZvcjR3c2NkdGVtcXQifQ.87UHGid3OotxO8Wpfuw-1sc5fsQJVt5gc2cqp9dVHiw&\n    state=nitctpl7nmqcpvob7xthrw&\n    token_type=bearer\n"})}),"\n",(0,t.jsx)(i.h2,{id:"self-issued-openid-provider-v2-siopv2",children:"Self-Issued OpenID Provider v2 (SIOPv2)"}),"\n",(0,t.jsxs)(i.p,{children:["You can configure OpenDID to be compatible with ",(0,t.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-self-issued-v2-1_0.html",children:"SIOPv2"}),".\nIn this case, you only need a DID for the authorization, and no credentials.\nTo configure the OpenDID service to allow SIOPv2, it must have a ",(0,t.jsx)(i.code,{children:"client"})," key with an empty requirements\nvalue in the ",(0,t.jsx)(i.code,{children:"config.yaml"})," file."]}),"\n",(0,t.jsxs)(i.p,{children:["Initiate the SIOPv2 flow the same way as the ",(0,t.jsx)(i.a,{href:"#implicit-flow",children:"Implicit Flow"})," with the exception that the ",(0,t.jsx)(i.code,{children:"nonce"}),"\nvalue is required."]})]})}function a(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>l});var t=n(6540);const d={},o=t.createContext(d);function c(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);