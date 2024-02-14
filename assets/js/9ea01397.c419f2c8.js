(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9463],{5380:e=>{function i(e){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}i.keys=()=>[],i.resolve=i,i.id=5380,e.exports=i},5784:(e,i,t)=>{"use strict";t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>h,toc:()=>f});var n=t(5893),r=t(1151),s=t(1909);const l="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function fetchCredentialById(\n  credentialId: Kilt.IPublicCredential['id']\n): Promise<Kilt.IPublicCredential> {\n  return Kilt.PublicCredential.fetchCredentialFromChain(credentialId)\n}\n",a="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function retrieveAllAssetCredentials(\n  assetDid: Kilt.AssetDidUri\n): Promise<Kilt.IPublicCredential[]> {\n  return Kilt.PublicCredential.fetchCredentialsFromChain(assetDid)\n}\n",c="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function verifyCredential(\n  credential: Kilt.IPublicCredential,\n  cType?: Kilt.ICType\n): Promise<void> {\n  await Kilt.PublicCredential.verifyCredential(credential, { cType })\n}\n",o={id:"public-credential-retrieval",title:"Retrieve Public Credentials"},d=void 0,h={id:"develop/sdk/cookbook/public_credentials/public-credential-retrieval",title:"Retrieve Public Credentials",description:"Public credentials have their best capability in the fact that they are, indeed, public by design.",source:"@site/docs/develop/01_sdk/02_cookbook/05_public_credentials/02_credential_retrieval.md",sourceDirName:"develop/01_sdk/02_cookbook/05_public_credentials",slug:"/develop/sdk/cookbook/public_credentials/public-credential-retrieval",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-retrieval",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/05_public_credentials/02_credential_retrieval.md",tags:[],version:"current",lastUpdatedAt:1707906150,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:2,frontMatter:{id:"public-credential-retrieval",title:"Retrieve Public Credentials"},sidebar:"sdk",previous:{title:"Credential Issuance",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-issuance"},next:{title:"Revoke (and remove) Public Credentials",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-revocation"}},u={},f=[{value:"Retrieve a Credential by its Identifier",id:"retrieve-a-credential-by-its-identifier",level:2},{value:"Retrieve All Credentials for an Asset",id:"retrieve-all-credentials-for-an-asset",level:2},{value:"Verify a Public Credential",id:"verify-a-public-credential",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Public credentials have their best capability in the fact that they are, indeed, public by design.\nThis means that once issued, anyone who has access to an archive or full node for the KILT blockchain can retrieve them, making them very decentralized in nature."}),"\n",(0,n.jsx)(i.p,{children:"The KILT SDK exposes different ways to fetch public credentials."}),"\n",(0,n.jsx)(i.h2,{id:"retrieve-a-credential-by-its-identifier",children:"Retrieve a Credential by its Identifier"}),"\n",(0,n.jsx)(i.p,{children:"Some use cases might involve the communication of just the ID of one or more public credentials, e.g., to offload the retrieval of the full credential to the receiver, and save some communication bandwidth."}),"\n",(0,n.jsx)(i.p,{children:"The KILT SDK accounts for this use case, and makes it very easy to query a public credential given its ID:"}),"\n",(0,n.jsx)(s.Z,{children:l}),"\n",(0,n.jsx)(i.p,{children:"If a credential with the provided ID cannot be found, then the ID is invalid and should be treated as such by the received."}),"\n",(0,n.jsx)(i.h2,{id:"retrieve-all-credentials-for-an-asset",children:"Retrieve All Credentials for an Asset"}),"\n",(0,n.jsxs)(i.p,{children:["Other use cases might work differently: given an asset identified by an ",(0,n.jsx)(i.a,{href:"/docs/concepts/asset-dids",children:"AssetDID"}),", a user might want to retrieve all the credentials that have been issued to that asset."]}),"\n",(0,n.jsx)(i.p,{children:"The KILT SDK makes also this use case very easy:"}),"\n",(0,n.jsx)(s.Z,{children:a}),"\n",(0,n.jsx)(i.h2,{id:"verify-a-public-credential",children:"Verify a Public Credential"}),"\n",(0,n.jsx)(i.p,{children:"A third class of use cases might involve users exchanging whole public credentials, for instance when showing some sort of proof."}),"\n",(0,n.jsxs)(i.p,{children:["This case is also supported by the KILT SDK, and relies on an important feature of public credentials: ",(0,n.jsx)(i.strong,{children:"the identifier (ID) of a public credential is generated from its content and from the KILT DID of its attester"}),".\nThis means that even a minimal change in the content of a public credential object before being shared with other parties, will result in those parties deriving a different identifier from the credential, which will then lead to an error during the verification process."]}),"\n",(0,n.jsx)(i.p,{children:"Verifying a public credential is shown in the following snippet:"}),"\n",(0,n.jsx)(s.Z,{children:c}),"\n",(0,n.jsxs)(i.p,{children:["What the ",(0,n.jsx)(i.code,{children:"verifyCredential"})," function does internally is the following:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Derive the credential identifier from the provided content and attester information."}),"\n",(0,n.jsxs)(i.li,{children:["Fetch the actual credential from the blockchain, as shown in the ",(0,n.jsx)(i.a,{href:"#retrieve-a-credential-by-id",children:"section above"}),", failing if the credential does not exist."]}),"\n",(0,n.jsx)(i.li,{children:"[OPTIONAL] Verify that the credential structure matches what the optionally-provided CType defines."}),"\n",(0,n.jsx)(i.li,{children:"Verify that the rest of the fields in the provided credential (i.e., revocation status, identifier, creation block number) match the retrieved credential."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"If all the tests above pass, the credential is considered valid! \u2705"}),"\n",(0,n.jsx)(i.admonition,{title:"How are public credentials stored on the blockchain?",type:"info",children:(0,n.jsxs)(i.p,{children:['Because public credentials need to be public and accessible by everyone, their full content needs to be somehow stored on the blockchain.\nNevertheless, the credential itself is not stored as part of the blockchain database.\nRather, the block number in which the extrinsic is submitted is stored inside the blockchain database, and serves as a "pointer" to the block containing the whole information, that clients (including the SDK) can use.\nThis represents a very good tradeoff between ',(0,n.jsx)(i.strong,{children:"security"})," - because the blockchain itself dictates what the creation block number is for any given public credential - and ",(0,n.jsx)(i.strong,{children:"storage efficiency"})," - since the full credential is stored off-chain, accessible via any KILT archive node or indexing service."]})})]})}function b(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1909:(e,i,t)=>{"use strict";t.d(i,{Z:()=>f});var n=t(7294),r=t(2263),s=t(2175),l=t(4935),a=t(4990),c=t(9966),o=t(4866),d=t(5162),h=t(9286),u=t(5893);const f=e=>{let{children:i,fileName:t,...f}=e;const p=i,[b,v]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:m}}}=(0,r.Z)(),k=(0,n.useMemo)((()=>{const{code:e}=(0,s.transform)(p,{plugins:["transform-typescript"],retainLines:!0});return e}),[p]);(0,n.useEffect)((()=>{l.WU(k,{parser:"babel",plugins:[a.Z,c.ZP],...m}).then(v)}),[m,k]);const y=[{fileName:t?`${t}.ts`:void 0,fileContents:p,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:b,fileID:"js",fileLabel:"Javascript"}];return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.Z,{groupId:"ts-js-choice",children:y.map((e=>(0,u.jsx)(d.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,u.jsx)(h.Z,{...f,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);