"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3193],{5259:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var n=i(7462),a=(i(7294),i(3905)),s=i(814);const c='{\n  "cTypeHash": "0xc22f85da01c18c1b48acf9556ac7167247ce253cc10373ea77f50fc91521d478",\n  "contents": {\n    "name": "Alice",\n    "age": 29\n  },\n  "owner": "did:kilt:4qWb21mMmWjbgsVuQPJ1f9VFQMbyZwDSFC5wTzJZC91ehVam"\n}',o={id:"claiming",title:"Claims"},l=void 0,r={unversionedId:"concepts/credentials/claiming",id:"concepts/credentials/claiming",title:"Claims",description:"As KILT is an open system, entities can make claims about any other entities, including themselves.",source:"@site/docs/concepts/05_credentials/03_claiming.md",sourceDirName:"concepts/05_credentials",slug:"/concepts/credentials/claiming",permalink:"/docs/concepts/credentials/claiming",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/05_credentials/03_claiming.md",tags:[],version:"current",lastUpdatedAt:1686223346,formattedLastUpdatedAt:"Jun 8, 2023",sidebarPosition:3,frontMatter:{id:"claiming",title:"Claims"},sidebar:"concepts",previous:{title:"CTypes",permalink:"/docs/concepts/credentials/ctypes"},next:{title:"Attestations",permalink:"/docs/concepts/credentials/attestation"}},d={},m=[{value:"Creating a Claim",id:"creating-a-claim",level:2},{value:"Requesting a Credential",id:"requesting-a-credential",level:2}],p={toc:m},h="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As KILT is an open system, entities can make claims about any other entities, including themselves.\nA claim (as in the real world) can only be trusted if another trusted entity (we call them Attesters) ",(0,a.kt)("em",{parentName:"p"},"certifies")," this claim.\nTherefore, Verifiers might trust different Attesters for distinct scenarios."),(0,a.kt)("h2",{id:"creating-a-claim"},"Creating a Claim"),(0,a.kt)("p",null,"In KILT, claims are based on claim types (CTypes).\nHence, given a CType, a Claimer only needs to create a claim with the properties specified in the CType schema.\nThe resulting claim contains a reference to the CType by its hash and includes the identity of the claim subject (identified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"owner")," property)."),(0,a.kt)(s.Z,{className:"language-json",title:"Claim example",mdxType:"CodeBlock"},c),(0,a.kt)("h2",{id:"requesting-a-credential"},"Requesting a Credential"),(0,a.kt)("p",null,"Once the Claimer has created a claim, they need to get it ",(0,a.kt)("em",{parentName:"p"},"certified"),", i.e., attested, by an Attester.\nThe resulting ",(0,a.kt)("inlineCode",{parentName:"p"},"Credential")," must then be sent to the chosen Attester using any messaging system."),(0,a.kt)("p",null,"The to-be-attested ",(0,a.kt)("inlineCode",{parentName:"p"},"Credential")," contains the original claim, data needed for future selective disclosure (more on that in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/credentials/verification"},"Verification section"),") of the claim contents, the legitimation and / or delegation ID of the Attester and the credential root hash, which is used to identify both the credential and its on-chain attestation."),(0,a.kt)("p",null,"For a detailed developer-oriented guide to KILT claims, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/attestation-request"},"Claim Cookbook section"),"."))}u.isMDXComponent=!0}}]);