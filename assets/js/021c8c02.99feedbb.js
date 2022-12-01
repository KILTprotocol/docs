(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2675],{25380:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=25380,t.exports=e},51909:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),i=n(67294),r=n(52263),s=n(73945),o=n(28182),l=n(12175),c=n(65488),d=n(85162),p=n(90814);const u=t=>{let{children:e,fileName:n,...u}=t;const h=e,{code:m}=(0,l.transform)(h,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:g}}}=(0,r.Z)(),k=(0,s.format)(m,{parser:o.parsers.babel.parse,...g}),f=n?`${n}.ts`:void 0,v=n?`${n}.js`:void 0;return i.createElement(c.Z,{groupId:"ts-js-choice"},i.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},i.createElement(p.Z,(0,a.Z)({},u,{className:"language-ts",title:f}),h)),i.createElement(d.Z,{value:"js",label:"Javascript"},i.createElement(p.Z,(0,a.Z)({},u,{className:"language-js",title:v}),k)))}},16298:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(51909),s=n(65488),o=n(85162);const l={id:"attestation",title:"\ud83e\uddfe Attestation"},c=void 0,d={unversionedId:"develop/workshop/attestation",id:"develop/workshop/attestation",title:"\ud83e\uddfe Attestation",description:"In this section, your Attester will receive and process a Credential where you'll",source:"@site/docs/develop/03_workshop/06_attestation.md",sourceDirName:"develop/03_workshop",slug:"/develop/workshop/attestation",permalink:"/docs/develop/workshop/attestation",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/06_attestation.md",tags:[],version:"current",lastUpdatedAt:1668583602,formattedLastUpdatedAt:"Nov 16, 2022",sidebarPosition:6,frontMatter:{id:"attestation",title:"\ud83e\uddfe Attestation"},sidebar:"workshop",previous:{title:"Request an Attestation",permalink:"/docs/develop/workshop/claimer/request"},next:{title:"\ud83e\udd1d Verification",permalink:"/docs/develop/workshop/verification"}},p={},u=[{value:"Attest a Credential",id:"attest-a-credential",level:2},{value:"Run",id:"run",level:2}],h={toc:u};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, your ",(0,i.kt)("span",{className:"label-role attester"},"Attester")," will receive and process a ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential")," where you'll"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attest or deny it;"),(0,i.kt)("li",{parentName:"ul"},"Store the attestation information on the chain;")),(0,i.kt)("h2",{id:"attest-a-credential"},"Attest a Credential"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"attestCredential")," function loads the account and DID of the ",(0,i.kt)("span",{className:"label-role attester"},"Attester"),".\nWhen everything is prepared, we can issue an attestation for the credential we received from the ",(0,i.kt)("span",{className:"label-role claimer"},"Claimer"),".\nThe credential is considered to be valid from the time it is attested on chain until the time it is revoked."),(0,i.kt)(r.Z,{fileName:"attester/attestCredential",mdxType:"TsJsBlock"},"import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateAccount } from './generateAccount'\nimport { generateCredential } from '../claimer/generateCredential'\nimport { generateKeypairs } from './generateKeypairs'\nimport { generateLightDid } from '../claimer/generateLightDid'\n\nexport async function attestCredential(\n  attesterAccount: Kilt.KiltKeyringPair,\n  attesterDid: Kilt.DidUri,\n  credential: Kilt.ICredential,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Get CType and root hash from the provided credential.\n  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(\n    credential,\n    attesterDid\n  )\n\n  // Create the tx and authorize it.\n  const tx = api.tx.attestation.add(claimHash, cTypeHash, null)\n  const extrinsic = await Kilt.Did.authorizeTx(\n    attesterDid,\n    tx,\n    signCallback,\n    attesterAccount.address\n  )\n\n  // Submit the tx to write the attestation to the chain.\n  console.log('Attester -> create attestation...')\n  await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)\n}\n\nexport async function attestingFlow(\n  claimerDid: Kilt.DidUri,\n  attesterAccount: Kilt.KiltKeyringPair,\n  attesterDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.ICredential> {\n  // First the claimer.\n  const credential = generateCredential(claimerDid, {\n    age: 27,\n    name: 'Mia Musterfrau'\n  })\n\n  // ... send the request to the attester\n\n  // The attester checks the attributes and attests the provided credential.\n  await attestCredential(attesterAccount, attesterDid, credential, signCallback)\n\n  // Return the generated credential.\n  return credential\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.connect(process.env.WSS_ADDRESS as string)\n\n      const attesterAccountMnemonic = process.env\n        .ATTESTER_ACCOUNT_MNEMONIC as string\n      const { account: attesterAccount } = generateAccount(\n        attesterAccountMnemonic\n      )\n\n      const attesterDidMnemonic = process.env.ATTESTER_DID_MNEMONIC as string\n      const { authentication, attestation } =\n        generateKeypairs(attesterDidMnemonic)\n      const attesterDidUri = Kilt.Did.getFullDidUriFromKey(authentication)\n\n      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string\n      const claimerDid = await generateLightDid(claimerDidMnemonic)\n\n      const credential = await attestingFlow(\n        claimerDid.uri,\n        attesterAccount,\n        attesterDidUri,\n        async ({ data }) => ({\n          signature: attestation.sign(data),\n          keyType: attestation.type\n        })\n      )\n      console.log('The claimer build their credential and now has to store it.')\n      console.log('Add the following to your .env file. ')\n      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(credential)}'`)\n    } catch (e) {\n      console.log('Error while going throw attesting workflow')\n      throw e\n    }\n  })()\n}\n"),(0,i.kt)("p",null,"The function ",(0,i.kt)("inlineCode",{parentName:"p"},"attestingFlow")," shows the process from the beginning to the end.\nFirst the ",(0,i.kt)("span",{className:"label-role claimer"},"Claimer")," generates the credential and sends it to the ",(0,i.kt)("span",{className:"label-role attester"},"Attester"),".\nAfter that the ",(0,i.kt)("span",{className:"label-role attester"},"Attester")," checks the attributes and either attests or denies the attestation because the attributes are invalid.\nOnce the attestation is written on the chain, they can share all or part of the attested credentials with verifiers."),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("p",null,"Run it from command line:"),(0,i.kt)(s.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node attester/attestCredential.ts\n"))),(0,i.kt)(o.Z,{value:"js",label:"Javascript",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node attester/attestCredential.js\n")))),(0,i.kt)("p",null,"You can copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential")," object if you want to test with other ",(0,i.kt)("inlineCode",{parentName:"p"},"Verifiers")," in the workshop :-)"),(0,i.kt)("p",null,"Your job as an ",(0,i.kt)("span",{className:"label-role attester"},"Attester")," is done: you've successfully attested a credential and written the attestation hash onto the chain."),(0,i.kt)("p",null,"Let's move on to setup our ",(0,i.kt)("span",{className:"label-role verifier"},"Verifier"),"!"))}m.isMDXComponent=!0}}]);