"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6901],{9220:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var i=s(5893),n=s(1151),a=s(9286);const r='{\n  "claims": {\n    "name": "Alice",\n    "age": 29\n  },\n  "cTypeHash": "0xc22f85da01c18c1b48acf9556ac7167247ce253cc10373ea77f50fc91521d478",\n  "delegationId": null,\n  "subject": "did:asset:eip155:1.erc721:0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb:1005"\n}\n',c={id:"public-credentials",title:"Public Credentials for Assets"},o=void 0,l={id:"concepts/credentials/public-credentials",title:"Public Credentials for Assets",description:"Given that with AssetDIDs there is now a way to uniquely identify assets regardless of the chain they live on or their current owner, KILT also allows owners of an on-chain DID with an assertion key (a.k.a. attesters) to issue credentials to those assets.",source:"@site/docs/concepts/05_credentials/06_public_credentials.md",sourceDirName:"concepts/05_credentials",slug:"/concepts/credentials/public-credentials",permalink:"/docs/concepts/credentials/public-credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/05_credentials/06_public_credentials.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:6,frontMatter:{id:"public-credentials",title:"Public Credentials for Assets"},sidebar:"concepts",previous:{title:"Verification",permalink:"/docs/concepts/credentials/verification"},next:{title:"Distributed Trust",permalink:"/docs/concepts/distributed_trust"}},d={},h=[];function u(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Given that with ",(0,i.jsx)(t.a,{href:"/docs/concepts/asset-dids",children:"AssetDIDs"})," there is now a way to uniquely identify assets regardless of the chain they live on or their current owner, KILT also allows owners of an on-chain DID with an assertion key (a.k.a. attesters) to issue credentials to those assets."]}),"\n",(0,i.jsx)(t.p,{children:"Public credentials are not very different in their structure from traditional KILT credentials.\nThe main difference is that, since they are public, public credentials do not have any selective disclosure capabilities, hence all the cryptographic information required to enable those is stripped away from the credential content.\nEverything else remains as for regular credentials, including the requirement for its structure to match a given CType, and optionally the presence of some delegation information."}),"\n",(0,i.jsx)(a.Z,{className:"language-json",title:"Public credential example",children:r}),"\n",(0,i.jsx)(t.admonition,{title:"Anyone can be an attester!",type:"info",children:(0,i.jsx)(t.p,{children:"While traditional KILT credentials are held in the wallet of their owner, who then decides what credential to share with whom, public credentials are, as the name suggests, public by design.\nThis means that when reading all the credentials issued for a given asset, consumers should be aware of the level of trust they have towards the issuer of each credential, as is the case for traditional KILT credentials."})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);