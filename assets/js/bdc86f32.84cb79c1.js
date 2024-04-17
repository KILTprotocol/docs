"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4208],{88072:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=i(17624),s=i(4552),a=i(1608);const c='{\n  "cTypeHash": "0xc22f85da01c18c1b48acf9556ac7167247ce253cc10373ea77f50fc91521d478",\n  "contents": {\n    "name": "Alice",\n    "age": 29\n  },\n  "owner": "did:kilt:4qWb21mMmWjbgsVuQPJ1f9VFQMbyZwDSFC5wTzJZC91ehVam"\n}\n',r={id:"claiming",title:"Claims"},o=void 0,l={id:"concepts/credentials/claiming",title:"Claims",description:"As KILT is an open system, entities can make claims about any other entities, including themselves.",source:"@site/docs/concepts/05_credentials/03_claiming.md",sourceDirName:"concepts/05_credentials",slug:"/concepts/credentials/claiming",permalink:"/docs/concepts/credentials/claiming",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/05_credentials/03_claiming.md",tags:[],version:"current",lastUpdatedAt:1713371933,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:3,frontMatter:{id:"claiming",title:"Claims"},sidebar:"concepts",previous:{title:"CTypes",permalink:"/docs/concepts/credentials/ctypes"},next:{title:"Attestations",permalink:"/docs/concepts/credentials/attestation"}},d={},h=[{value:"Creating a Claim",id:"creating-a-claim",level:2},{value:"Requesting a Credential",id:"requesting-a-credential",level:2}];function m(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["As KILT is an open system, entities can make claims about any other entities, including themselves.\nA claim (as in the real world) can only be trusted if another trusted entity (we call them Attesters) ",(0,n.jsx)(t.em,{children:"certifies"})," this claim.\nTherefore, Verifiers might trust different Attesters for distinct scenarios."]}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-claim",children:"Creating a Claim"}),"\n",(0,n.jsxs)(t.p,{children:["In KILT, claims are based on claim types (CTypes).\nHence, given a CType, a Claimer only needs to create a claim with the properties specified in the CType schema.\nThe resulting claim contains a reference to the CType by its hash and includes the identity of the claim subject (identified by the ",(0,n.jsx)(t.code,{children:"owner"})," property)."]}),"\n",(0,n.jsx)(a.c,{className:"language-json",title:"Claim example",children:c}),"\n",(0,n.jsx)(t.h2,{id:"requesting-a-credential",children:"Requesting a Credential"}),"\n",(0,n.jsxs)(t.p,{children:["Once the Claimer has created a claim, they need to get it ",(0,n.jsx)(t.em,{children:"certified"}),", i.e., attested, by an Attester.\nThe resulting ",(0,n.jsx)(t.code,{children:"Credential"})," must then be sent to the chosen Attester using any messaging system."]}),"\n",(0,n.jsxs)(t.p,{children:["The to-be-attested ",(0,n.jsx)(t.code,{children:"Credential"})," contains the original claim, data needed for future selective disclosure (more on that in the ",(0,n.jsx)(t.a,{href:"/docs/concepts/credentials/verification",children:"Verification section"}),") of the claim contents, the legitimation and / or delegation ID of the Attester and the credential root hash, which is used to identify both the credential and its on-chain attestation."]}),"\n",(0,n.jsxs)(t.p,{children:["For a detailed developer-oriented guide to KILT claims, see our ",(0,n.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/claiming/attestation-request",children:"Claim Cookbook section"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);