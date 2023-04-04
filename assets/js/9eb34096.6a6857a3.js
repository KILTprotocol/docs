(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7894],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var n=i(7462),o=i(7294),a=i(2263),s=i(3945),r=i(8182),l=i(2175),c=i(5488),d=i(5162),p=i(6823);const h=e=>{let{children:t,fileName:i,...h}=e;const f=t,{code:m}=(0,l.transform)(f,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:u}}}=(0,a.Z)(),v=(0,s.format)(m,{parser:r.parsers.babel.parse,...u}),k=i?`${i}.ts`:void 0,g=i?`${i}.js`:void 0;return o.createElement(c.Z,{groupId:"ts-js-choice"},o.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(p.Z,(0,n.Z)({},h,{className:"language-ts",title:k}),f)),o.createElement(d.Z,{value:"js",label:"Javascript"},o.createElement(p.Z,(0,n.Z)({},h,{className:"language-js",title:g}),v)))}},6027:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=i(7462),o=(i(7294),i(3905)),a=i(1909);const s={id:"presentation-verification",title:"Verify a Credential or a Presentation"},r=void 0,l={unversionedId:"develop/sdk/cookbook/claiming/presentation-verification",id:"develop/sdk/cookbook/claiming/presentation-verification",title:"Verify a Credential or a Presentation",description:"Whether a presentation involves selective disclosure or a whole credential is not technically relevant to Verifiers.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/05_presentation_verification.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/presentation-verification",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-verification",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/05_presentation_verification.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:5,frontMatter:{id:"presentation-verification",title:"Verify a Credential or a Presentation"},sidebar:"sdk",previous:{title:"Present a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-creation"},next:{title:"Revoke a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-removal"}},c={},d=[],p={toc:d};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Whether a presentation involves selective disclosure or a whole credential is not technically relevant to Verifiers.\nThis is because in KILT a presentation ",(0,o.kt)("strong",{parentName:"p"},"is")," a credential.\nThis means that the logic for Verifiers does not change depending on the case, thus verifying a presentation is as easy as calling one SDK function, like the following code snippet:"),(0,o.kt)(a.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function verifyPresentation(\n  presentation: Kilt.ICredentialPresentation,\n  {\n    challenge,\n    trustedAttesterUris = []\n  }: {\n    challenge?: string\n    trustedAttesterUris?: Kilt.DidUri[]\n  } = {}\n): Promise<void> {\n  // Verify the presentation with the provided challenge.\n  await Kilt.Credential.verifyPresentation(presentation, { challenge })\n\n  // Verify the credential attestation by checking on the blockchain.\n  const api = Kilt.ConfigService.get('api')\n  const attestationChain = await api.query.attestation.attestations(\n    presentation.rootHash\n  )\n  const attestation = Kilt.Attestation.fromChain(\n    attestationChain,\n    presentation.rootHash\n  )\n  if (attestation.revoked) {\n    throw new Error(\"Credential has been revoked and hence it's not valid.\")\n  }\n  if (!trustedAttesterUris.includes(attestation.owner)) {\n    throw `Credential was issued by ${attestation.owner} which is not in the provided list of trusted attesters: ${trustedAttesterUris}.`\n  }\n}\n"),(0,o.kt)("admonition",{title:"Check if the presenter is the credential subject",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Verifying a presentation provides proof that all the information is correct and authentic, and that the credential has not been revoked.\nVerifiers still need to match the subject of the credential to the entity that is presenting it.\nOne way of achieving this is by asking the Claimer to include a challenge in the presentation signature, as shown in the snippet above.\nWithout a challenge, Verifiers must implement other measures to be certain about the identity of the presenter.")),(0,o.kt)("admonition",{title:"Evaluation of the attester's trust is up to the Verifiers",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Verifiers must also have a registry of attesters they trust, and verify that the issuer of the credential they are verifying belongs to such list and, where necessary, whether it is still in operation or not, i.e., whether its DID still exists or has been deleted.")))}h.isMDXComponent=!0}}]);