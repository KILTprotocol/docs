(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2675],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},4384:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>m});var i=n(5893),a=n(1151),s=n(1909),r=n(4866),o=n(5162);const l="import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateAccount } from './generateAccount'\nimport { generateCredential } from '../claimer/generateCredential'\nimport { generateKeypairs } from './generateKeypairs'\nimport { generateLightDid } from '../claimer/generateLightDid'\n\nexport async function attestCredential(\n  attesterAccount: Kilt.KiltKeyringPair,\n  attesterDid: Kilt.DidUri,\n  credential: Kilt.ICredential,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Get CType and root hash from the provided credential.\n  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(\n    credential,\n    attesterDid\n  )\n\n  // Create the tx and authorize it.\n  const tx = api.tx.attestation.add(claimHash, cTypeHash, null)\n  const extrinsic = await Kilt.Did.authorizeTx(\n    attesterDid,\n    tx,\n    signCallback,\n    attesterAccount.address\n  )\n\n  // Submit the tx to write the attestation to the chain.\n  console.log('Attester -> create attestation...')\n  await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)\n}\n\nexport async function attestingFlow(\n  claimerDid: Kilt.DidUri,\n  attesterAccount: Kilt.KiltKeyringPair,\n  attesterDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.ICredential> {\n  // First the claimer.\n  const credential = generateCredential(claimerDid, {\n    age: 27,\n    name: 'Mia Musterfrau'\n  })\n\n  // ... send the request to the attester\n\n  // The attester checks the attributes and attests the provided credential.\n  await attestCredential(attesterAccount, attesterDid, credential, signCallback)\n\n  // Return the generated credential.\n  return credential\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.connect(process.env.WSS_ADDRESS as string)\n\n      const attesterAccountMnemonic = process.env\n        .ATTESTER_ACCOUNT_MNEMONIC as string\n      const { account: attesterAccount } = generateAccount(\n        attesterAccountMnemonic\n      )\n\n      const attesterDidMnemonic = process.env.ATTESTER_DID_MNEMONIC as string\n      const { authentication, assertionMethod } =\n        generateKeypairs(attesterDidMnemonic)\n      const attesterDidUri = Kilt.Did.getFullDidUriFromKey(authentication)\n\n      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string\n      const claimerDid = await generateLightDid(claimerDidMnemonic)\n\n      const credential = await attestingFlow(\n        claimerDid.uri,\n        attesterAccount,\n        attesterDidUri,\n        async ({ data }) => ({\n          signature: assertionMethod.sign(data),\n          keyType: assertionMethod.type\n        })\n      )\n      console.log('The claimer build their credential and now has to store it.')\n      console.log('Add the following to your .env file. ')\n      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(credential)}'`)\n    } catch (e) {\n      console.log('Error while going throw attesting workflow')\n      throw e\n    }\n  })()\n}\n",c={id:"attestation",title:"\ud83e\uddfe Attestation"},d=void 0,h={id:"develop/workshop/attestation",title:"\ud83e\uddfe Attestation",description:"This section covers how the Attester receives and processes a Credential and how you can:",source:"@site/docs/develop/03_workshop/06_attestation.md",sourceDirName:"develop/03_workshop",slug:"/develop/workshop/attestation",permalink:"/docs/develop/workshop/attestation",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/06_attestation.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:6,frontMatter:{id:"attestation",title:"\ud83e\uddfe Attestation"},sidebar:"workshop",previous:{title:"Request an Attestation",permalink:"/docs/develop/workshop/claimer/request"},next:{title:"\ud83e\udd1d Verification",permalink:"/docs/develop/workshop/verification"}},p={},m=[{value:"Attest a Credential",id:"attest-a-credential",level:2},{value:"Run",id:"run",level:2},{value:"Summary",id:"summary",level:2}];function u(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This section covers how the ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"})," receives and processes a ",(0,i.jsx)(t.code,{children:"Credential"})," and how you can:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Attest or deny it"}),"\n",(0,i.jsx)(t.li,{children:"Store the attestation information on the chain"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"attest-a-credential",children:"Attest a Credential"}),"\n",(0,i.jsx)(s.Z,{fileName:"attester/attestCredential",children:l}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"attestCredential"})," function loads the account and DID of the ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"})," and issues an attestation for the credential received from the ",(0,i.jsx)("span",{className:"label-role claimer",children:"Claimer"}),".\nThe credential is valid from the time an Attester attests it on chain until the time it is revoked."]}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"attestingFlow"})," function, the ",(0,i.jsx)("span",{className:"label-role claimer",children:"Claimer"})," generates the demo credential and sends it to the ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"}),".\nThe ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"})," checks the attributes and either attests or denies the attestation if the attributes are invalid.\nOnce the attestation is written on the chain, the Attester can share all or part of the attested credentials with verifiers."]}),"\n",(0,i.jsx)(t.h2,{id:"run",children:"Run"}),"\n",(0,i.jsx)(t.p,{children:"Run the code from the command line:"}),"\n",(0,i.jsxs)(r.Z,{groupId:"ts-js-choice",children:[(0,i.jsx)(o.Z,{value:"ts",label:"Typescript",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn ts-node attester/attestCredential.ts\n"})})}),(0,i.jsx)(o.Z,{value:"js",label:"Javascript",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"node attester/attestCredential.js\n"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(t.p,{children:["Your job as an ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"})," is complete. You've attested a credential and written the attestation hash onto the chain."]}),"\n",(0,i.jsx)(t.p,{children:"Let's move on to set up the Verifier!"})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});n(7294);var i=n(2263),a=n(2175),s=n(4935),r=n(4990),o=n(9966),l=n(4866),c=n(5162),d=n(9286),h=n(5893);const p=e=>{let{children:t,fileName:n,...p}=e;const m=t,{code:u}=(0,a.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:f}}}=(0,i.Z)(),g=s.WU(u,{parser:"babel",plugins:[r.Z,o.ZP],...f}).finally((()=>{var e=[{fileName:n?`${n}.ts`:void 0,fileContents:m,fileID:"ts",fileLabel:"Typescript"},{fileName:n?`${n}.js`:void 0,fileContents:g,fileID:"js",fileLabel:"Javascript"}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(l.Z,{groupId:"ts-js-choice",children:e.map((e=>(0,h.jsx)(c.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,h.jsx)(d.Z,{...p,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}))}}}]);