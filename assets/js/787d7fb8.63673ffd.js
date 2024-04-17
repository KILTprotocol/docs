(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4358],{48952:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=48952,e.exports=n},16936:(e,n,i)=>{"use strict";i.r(n),i.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var t=i(17624),r=i(4552),a=(i(1608),i(96020)),s=i(61268),l=i(87768);const o="import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { createPresentation } from './claimer/createPresentation'\nimport { generateKeypairs } from './claimer/generateKeypairs'\nimport { generateLightDid } from './claimer/generateLightDid'\n\nfunction getChallenge(): string {\n  return Kilt.Utils.UUID.generate()\n}\n\n// Verifies validity, ownership & attestation.\nasync function verifyPresentation(\n  presentation: Kilt.ICredentialPresentation,\n  challenge: string,\n  trustedAttesterUris: Kilt.DidUri[]\n): Promise<boolean> {\n  Kilt.ConfigService.get('api')\n\n  try {\n    const { revoked, attester } = await Kilt.Credential.verifyPresentation(\n      presentation,\n      { challenge }\n    )\n\n    if (revoked) {\n      return false\n    }\n    // Returns true if no trusted attester URI is provided or, if it is, if it matches the one that issued the presented credential.\n    return trustedAttesterUris.includes(attester)\n  } catch {\n    return false\n  }\n}\n\nexport async function verificationFlow(\n  credential: Kilt.ICredential,\n  signCallback: Kilt.SignCallback,\n  trustedAttesterUris: Kilt.DidUri[] = []\n) {\n  // Verifier sends a unique challenge to the claimer \ud83d\udd4a\n  const challenge = getChallenge()\n\n  // Create a presentation and send it to the verifier \ud83d\udd4a\n  const presentation = await createPresentation(\n    credential,\n    signCallback,\n    challenge\n  )\n\n  // The verifier checks the presentation.\n  const isValid = await verifyPresentation(\n    presentation,\n    challenge,\n    trustedAttesterUris\n  )\n\n  if (isValid) {\n    console.log('Verification successful! You are allowed to enter the club \ud83c\udf89')\n  } else {\n    console.log('Verification failed! \ud83d\udeab')\n  }\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.connect(process.env.WSS_ADDRESS as string)\n      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string\n      const { authentication } = generateKeypairs(claimerDidMnemonic)\n      const claimerDid = generateLightDid(claimerDidMnemonic)\n      const attesterDid = process.env.ATTESTER_DID_URI as Kilt.DidUri\n      // Load credential and claimer DID\n      const credential = JSON.parse(process.env.CLAIMER_CREDENTIAL as string)\n      await verificationFlow(\n        credential,\n        async ({ data }) => ({\n          signature: authentication.sign(data),\n          keyType: authentication.type,\n          keyUri: `${claimerDid.uri}${claimerDid.authentication[0].id}`\n        }),\n        [attesterDid]\n      )\n    } catch (e) {\n      console.log('Error in the verification flow')\n      throw e\n    }\n  })()\n}\n",c="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createPresentation(\n  credential: Kilt.ICredential,\n  signCallback: Kilt.SignCallback,\n  challenge?: string\n): Promise<Kilt.ICredentialPresentation> {\n  // Create the presentation from credential, DID and challenge.\n  return Kilt.Credential.createPresentation({\n    credential,\n    signCallback,\n    challenge\n  })\n}\n",d={id:"verification",title:"\ud83e\udd1d Verification"},h=void 0,p={id:"develop/workshop/verification",title:"\ud83e\udd1d Verification",description:"In this section, you play the role of a Verifier that does the following:",source:"@site/docs/develop/03_workshop/07_verification.md",sourceDirName:"develop/03_workshop",slug:"/develop/workshop/verification",permalink:"/docs/develop/workshop/verification",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/07_verification.md",tags:[],version:"current",lastUpdatedAt:1713371933,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:7,frontMatter:{id:"verification",title:"\ud83e\udd1d Verification"},sidebar:"workshop",previous:{title:"\ud83e\uddfe Attestation",permalink:"/docs/develop/workshop/attestation"},next:{title:"\ud83d\ude80 Done",permalink:"/docs/develop/workshop/done"}},f={},m=[{value:"Create Presentation",id:"create-presentation",level:2},{value:"Verify",id:"verify",level:2},{value:"Run",id:"run",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In this section, you play the role of a ",(0,t.jsx)("span",{className:"label-role verifier",children:"Verifier"})," that does the following:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Take a ",(0,t.jsx)(n.code,{children:"Presentation"})," object supplied by a ",(0,t.jsx)("span",{className:"label-role claimer",children:"Claimer"})]}),"\n",(0,t.jsx)(n.li,{children:"Verify that its data is correct"}),"\n",(0,t.jsx)(n.li,{children:"Verify that the attestation is valid, i.e., its hash exists on-chain and the attestation has not been revoked"}),"\n",(0,t.jsxs)(n.li,{children:["Verify that the ",(0,t.jsx)("span",{className:"label-role claimer",children:"Claimer"})," sending the ",(0,t.jsx)(n.code,{children:"Credential"})," owns it"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Presentation object",type:"info",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)("span",{className:"label-role claimer",children:"Claimer"})," uses a Credential to create the ",(0,t.jsx)(n.code,{children:"Presentation"})," object.\nUnlike the credential, a ",(0,t.jsx)(n.code,{children:"Presentation"})," can hide some attributes that are not required by the ",(0,t.jsx)("span",{className:"label-role verifier",children:"Verifier"})," and can contain a claimer-signed challenge.\nA ",(0,t.jsx)(n.code,{children:"Presentation"})," also contains a proof that the ",(0,t.jsx)("span",{className:"label-role claimer",children:"Claimer"})," owns the credential."]})}),"\n",(0,t.jsx)(n.h2,{id:"create-presentation",children:"Create Presentation"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)("span",{className:"label-role claimer",children:"Claimer"})," needs to send more than a credential, as they also need to prove ownership of the credential.\nA ",(0,t.jsx)("span",{className:"label-role claimer",children:"Claimer"})," does this by creating a presentation and signing the ",(0,t.jsx)("span",{className:"label-role verifier",children:"Verifier"}),"'s challenge."]}),"\n",(0,t.jsx)(a.c,{fileName:"claimer/createPresentation",children:c}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"createPresentation"})," method returns a presentation, taking the credential, a callback to sign data, and the ",(0,t.jsx)("span",{className:"label-role verifier",children:"Verifier"}),"'s challenge as input."]}),"\n",(0,t.jsx)(n.h2,{id:"verify",children:"Verify"}),"\n",(0,t.jsxs)(n.p,{children:["The verification code exposes the ",(0,t.jsx)(n.code,{children:"getChallenge"})," method which returns a random and unique challenge for the ",(0,t.jsx)("span",{className:"label-role claimer",children:"Claimer"})," to sign.\nThis unique challenge is used to prove ownership."]}),"\n",(0,t.jsx)(a.c,{fileName:"verify",children:o}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"verifyPresentation"})," method performs the actual verification, taking a presentation and the ",(0,t.jsx)("span",{className:"label-role claimer",children:"Claimer"}),"'s challenge as input."]}),"\n",(0,t.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,t.jsx)(n.p,{children:"Run the code from the command line:"}),"\n",(0,t.jsxs)(s.c,{groupId:"ts-js-choice",children:[(0,t.jsx)(l.c,{value:"ts",label:"Typescript",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn ts-node verify.ts\n"})})}),(0,t.jsx)(l.c,{value:"js",label:"Javascript",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node verify.js\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"That's it! All done :-)"})]})}function g(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},96020:(e,n,i)=>{"use strict";i.d(n,{c:()=>f});var t=i(11504),r=i(28264),a=i(46352),s=i(58440),l=i(14300),o=i(28168),c=i(61268),d=i(87768),h=i(1608),p=i(17624);const f=e=>{let{children:n,fileName:i,...f}=e;const m=n,[u,g]=(0,t.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:v}}}=(0,r.c)(),j=(0,t.useMemo)((()=>{const{code:e}=(0,a.transform)(m,{plugins:["transform-typescript"],retainLines:!0});return e}),[m]);(0,t.useEffect)((()=>{s.E9(j,{parser:"babel",plugins:[l.c,o.cp],...v}).then(g)}),[v,j]);const x=[{fileName:i?`${i}.ts`:void 0,fileContents:m,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:u,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(c.c,{groupId:"ts-js-choice",children:x.map((e=>(0,p.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(h.c,{...f,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);