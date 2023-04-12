(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6046],{5380:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=5380,t.exports=e},1909:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(7462),n=a(7294),o=a(2263),s=a(3945),r=a(8182),l=a(2175),c=a(4866),d=a(5162),m=a(814);const p=t=>{let{children:e,fileName:a,...p}=t;const h=e,{code:k}=(0,l.transform)(h,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:u}}}=(0,o.Z)(),f=(0,s.format)(k,{parser:r.parsers.babel.parse,...u}),g=a?`${a}.ts`:void 0,b=a?`${a}.js`:void 0;return n.createElement(c.Z,{groupId:"ts-js-choice"},n.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},n.createElement(m.Z,(0,i.Z)({},p,{className:"language-ts",title:g}),h)),n.createElement(d.Z,{value:"js",label:"Javascript"},n.createElement(m.Z,(0,i.Z)({},p,{className:"language-js",title:b}),f)))}},5708:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=a(7462),n=(a(7294),a(3905)),o=a(1909);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createAttestation(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credential: Kilt.ICredential\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Create an attestation object and write its root hash on the chain\n  // using the provided attester's full DID.\n  const { cTypeHash, claimHash, delegationId } =\n    Kilt.Attestation.fromCredentialAndDid(credential, attester)\n\n  // Write the attestation info on the chain.\n  const attestationTx = api.tx.attestation.add(\n    claimHash,\n    cTypeHash,\n    delegationId\n  )\n  const authorizedAttestationTx = await Kilt.Did.authorizeTx(\n    attester,\n    attestationTx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAttestationTx,\n    submitterAccount\n  )\n}\n",r={id:"attestation-creation",title:"Attest a Claim (Issue a Credential)"},l=void 0,c={unversionedId:"develop/sdk/cookbook/claiming/attestation-creation",id:"develop/sdk/cookbook/claiming/attestation-creation",title:"Attest a Claim (Issue a Credential)",description:"Once an Attester has received a to-be-attested Credential from a Claimer, they will typically verify the information in the claim.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/attestation-creation",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-creation",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md",tags:[],version:"current",lastUpdatedAt:1681303842,formattedLastUpdatedAt:"Apr 12, 2023",sidebarPosition:3,frontMatter:{id:"attestation-creation",title:"Attest a Claim (Issue a Credential)"},sidebar:"sdk",previous:{title:"Request an Attestation",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-request"},next:{title:"Present a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-creation"}},d={},m=[],p={toc:m},h="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(h,(0,i.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Once an Attester has received a to-be-attested ",(0,n.kt)("inlineCode",{parentName:"p"},"Credential")," from a Claimer, they will typically verify the information in the claim.\nIf the claims correspond to truth, the Attester will proceed by attesting the root hash of the credential on the KILT blockchain, timestamping the attestation operation.\nA deposit is reserved from the balance of the KILT account submitting the creation transaction, which is returned if and when the attestation is removed from the chain."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"An Attester is required to have a full DID with an attestation key.\nTo see how to manage DIDs, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/full-did-update"},"DID section"),".")),(0,n.kt)(o.Z,{mdxType:"TsJsBlock"},s))}k.isMDXComponent=!0}}]);