(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9463],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var n=i(7462),a=i(7294),r=i(2263),l=i(3945),s=i(8182),o=i(2175),c=i(5488),d=i(5162),h=i(6823);const p=e=>{let{children:t,fileName:i,...p}=e;const u=t,{code:b}=(0,o.transform)(u,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:f}}}=(0,r.Z)(),v=(0,l.format)(b,{parser:s.parsers.babel.parse,...f}),k=i?`${i}.ts`:void 0,m=i?`${i}.js`:void 0;return a.createElement(c.Z,{groupId:"ts-js-choice"},a.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(h.Z,(0,n.Z)({},p,{className:"language-ts",title:k}),u)),a.createElement(d.Z,{value:"js",label:"Javascript"},a.createElement(h.Z,(0,n.Z)({},p,{className:"language-js",title:m}),v)))}},7998:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=i(7462),a=(i(7294),i(3905)),r=i(1909);const l={id:"public-credential-retrieval",title:"Retrieve Public Credentials"},s=void 0,o={unversionedId:"develop/sdk/cookbook/public_credentials/public-credential-retrieval",id:"develop/sdk/cookbook/public_credentials/public-credential-retrieval",title:"Retrieve Public Credentials",description:"Public credentials have their best capability in the fact that they are, indeed, public by design.",source:"@site/docs/develop/01_sdk/02_cookbook/05_public_credentials/02_credential_retrieval.md",sourceDirName:"develop/01_sdk/02_cookbook/05_public_credentials",slug:"/develop/sdk/cookbook/public_credentials/public-credential-retrieval",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-retrieval",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/05_public_credentials/02_credential_retrieval.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:2,frontMatter:{id:"public-credential-retrieval",title:"Retrieve Public Credentials"},sidebar:"sdk",previous:{title:"Credential Issuance",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-issuance"},next:{title:"Revoke (and remove) Public Credentials",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-revocation"}},c={},d=[{value:"Retrieve a Credential by its Identifier",id:"retrieve-a-credential-by-its-identifier",level:2},{value:"Retrieve All Credentials for an Asset",id:"retrieve-all-credentials-for-an-asset",level:2},{value:"Verify a Public Credential",id:"verify-a-public-credential",level:2}],h={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Public credentials have their best capability in the fact that they are, indeed, public by design.\nThis means that once issued, anyone who has access to an archive or full node for the KILT blockchain can retrieve them, making them very decentralized in nature."),(0,a.kt)("p",null,"The KILT SDK exposes different ways to fetch public credentials."),(0,a.kt)("h2",{id:"retrieve-a-credential-by-its-identifier"},"Retrieve a Credential by its Identifier"),(0,a.kt)("p",null,"Some use cases might involve the communication of just the ID of one or more public credentials, e.g., to offload the retrieval of the full credential to the receiver, and save some communication bandwidth."),(0,a.kt)("p",null,"The KILT SDK accounts for this use case, and makes it very easy to query a public credential given its ID:"),(0,a.kt)(r.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function fetchCredentialById(\n  credentialId: Kilt.IPublicCredential['id']\n): Promise<Kilt.IPublicCredential> {\n  return Kilt.PublicCredential.fetchCredentialFromChain(credentialId)\n}\n"),(0,a.kt)("p",null,"If a credential with the provided ID cannot be found, then the ID is invalid and should be treated as such by the received."),(0,a.kt)("h2",{id:"retrieve-all-credentials-for-an-asset"},"Retrieve All Credentials for an Asset"),(0,a.kt)("p",null,"Other use cases might work differently: given an asset identified by an ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/asset-dids"},"AssetDID"),", a user might want to retrieve all the credentials that have been issued to that asset."),(0,a.kt)("p",null,"The KILT SDK makes also this use case very easy:"),(0,a.kt)(r.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function retrieveAllAssetCredentials(\n  assetDid: Kilt.AssetDidUri\n): Promise<Kilt.IPublicCredential[]> {\n  return Kilt.PublicCredential.fetchCredentialsFromChain(assetDid)\n}\n"),(0,a.kt)("h2",{id:"verify-a-public-credential"},"Verify a Public Credential"),(0,a.kt)("p",null,"A third class of use cases might involve users exchanging whole public credentials, for instance when showing some sort of proof."),(0,a.kt)("p",null,"This case is also supported by the KILT SDK, and relies on an important feature of public credentials: ",(0,a.kt)("strong",{parentName:"p"},"the identifier (ID) of a public credential is generated from its content and from the KILT DID of its attester"),".\nThis means that even a minimal change in the content of a public credential object before being shared with other parties, will result in those parties deriving a different identifier from the credential, which will then lead to an error during the verification process."),(0,a.kt)("p",null,"Verifying a public credential is shown in the following snippet:"),(0,a.kt)(r.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function verifyCredential(\n  credential: Kilt.IPublicCredential,\n  cType?: Kilt.ICType\n): Promise<void> {\n  await Kilt.PublicCredential.verifyCredential(credential, { cType })\n}\n"),(0,a.kt)("p",null,"What the ",(0,a.kt)("inlineCode",{parentName:"p"},"verifyCredential")," function does internally is the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Derive the credential identifier from the provided content and attester information."),(0,a.kt)("li",{parentName:"ol"},"Fetch the actual credential from the blockchain, as shown in the ",(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-credential-by-id"},"section above"),", failing if the credential does not exist."),(0,a.kt)("li",{parentName:"ol"},"[OPTIONAL]"," Verify that the credential structure matches what the optionally-provided CType defines."),(0,a.kt)("li",{parentName:"ol"},"Verify that the rest of the fields in the provided credential (i.e., revocation status, identifier, creation block number) match the retrieved credential.")),(0,a.kt)("p",null,"If all the tests above pass, the credential is considered valid! \u2705"),(0,a.kt)("admonition",{title:"How are public credentials stored on the blockchain?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Because public credentials need to be public and accessible by everyone, their full content needs to be somehow stored on the blockchain.\nNevertheless, the credential itself is not stored as part of the blockchain database.\nRather, the block number in which the extrinsic is submitted is stored inside the blockchain database, and serves as a "pointer" to the block containing the whole information, that clients (including the SDK) can use.\nThis represents a very good tradeoff between ',(0,a.kt)("strong",{parentName:"p"},"security")," - because the blockchain itself dictates what the creation block number is for any given public credential - and ",(0,a.kt)("strong",{parentName:"p"},"storage efficiency")," - since the full credential is stored off-chain, accessible via any KILT archive node or indexing service.")))}p.isMDXComponent=!0}}]);