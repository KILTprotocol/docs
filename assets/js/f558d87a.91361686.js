(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2767],{5764:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=5764,e.exports=n},5429:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var i=t(4848),r=t(8453),o=(t(1432),t(3172)),a=t(1470),s=t(9365);const l="import * as Kilt from '@kiltprotocol/sdk-js'\nimport { mnemonicGenerate } from '@polkadot/util-crypto'\n\nexport function generateKeypairs(mnemonic = mnemonicGenerate()) {\n  const authentication = Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic)\n\n  const keyAgreement = Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(\n    Kilt.Utils.Crypto.mnemonicToMiniSecret(mnemonic)\n  )\n\n  return {\n    authentication: authentication,\n    keyAgreement: keyAgreement\n  }\n}\n",c="import { config as envConfig } from 'dotenv'\n\nimport { mnemonicGenerate } from '@polkadot/util-crypto'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateKeypairs } from './generateKeypairs'\n\nexport function generateLightDid(mnemonic: string): Kilt.DidDocument {\n  const { authentication, keyAgreement } = generateKeypairs(mnemonic)\n  return Kilt.Did.createLightDidDocument({\n    authentication: [authentication as Kilt.NewLightDidVerificationKey],\n    keyAgreement: [keyAgreement]\n  })\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.init()\n\n      const mnemonic = mnemonicGenerate()\n      console.log('\\nsave following to .env to continue\\n')\n      console.log(`CLAIMER_DID_MNEMONIC=\"${mnemonic}\"`)\n    } catch (e) {\n      console.log('Error while setting up claimer DID')\n      throw e\n    }\n  })()\n}\n",d={id:"did",title:"DID"},h=void 0,m={id:"develop/workshop/claimer/did",title:"DID",description:"This section covers creating a light DID using the account you created for the Claimer.",source:"@site/docs/develop/03_workshop/05_claimer/01_did.md",sourceDirName:"develop/03_workshop/05_claimer",slug:"/develop/workshop/claimer/did",permalink:"/docs/develop/workshop/claimer/did",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/05_claimer/01_did.md",tags:[],version:"current",lastUpdatedAt:1733496053e3,sidebarPosition:1,frontMatter:{id:"did",title:"DID"},sidebar:"workshop",previous:{title:"\ud83d\udc64 Claimer",permalink:"/docs/develop/workshop/claimer/"},next:{title:"Request an Attestation",permalink:"/docs/develop/workshop/claimer/request"}},p={},u=[{value:"Generate Keys",id:"generate-keys",level:2},{value:"Generate Light DID",id:"generate-light-did",level:2},{value:"Run",id:"run",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This section covers creating a light DID using the account you created for the ",(0,i.jsx)("span",{className:"label-role claimer",children:"Claimer"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Since a light DID is not registered on the blockchain, you don't need funds to create one."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Remember, light DIDs can do the following:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sign attestation requests and presentation with the authentication keys"}),"\n",(0,i.jsx)(n.li,{children:"Encrypt messages with the encryption keys"}),"\n"]}),(0,i.jsxs)(n.p,{children:["Read the ",(0,i.jsx)(n.a,{href:"/docs/develop/sdk/cookbook/dids/light-did-creation",children:"DID documentation"})," to learn more about DIDs and the difference between their light and full versions."]})]}),"\n",(0,i.jsx)(n.h2,{id:"generate-keys",children:"Generate Keys"}),"\n",(0,i.jsx)(n.p,{children:"Like the Attester, the Claimer must also set up the DID keys."}),"\n",(0,i.jsx)(o.A,{fileName:"claimer/generateKeypairs",children:l}),"\n",(0,i.jsxs)(n.p,{children:["The code above is similar to the ",(0,i.jsx)(n.code,{children:"generateKeyAgreement"})," function used in the Attester section but simpler, as the Claimer only needs an authentication key and an encryption key."]}),"\n",(0,i.jsx)(n.p,{children:"Both the keys are derived from the same seed, but they could also have two different seeds."}),"\n",(0,i.jsx)(n.h2,{id:"generate-light-did",children:"Generate Light DID"}),"\n",(0,i.jsxs)(n.p,{children:["With the ",(0,i.jsx)(n.code,{children:"keypairs"})," generated, you can create the light DID.\nBecause it's off-chain you can create the DID object every time, but you still need to save the mnemonic to the ",(0,i.jsx)(n.code,{children:".env"})," file with a different variable name."]}),"\n",(0,i.jsx)(o.A,{fileName:"claimer/generateLightDid",children:c}),"\n",(0,i.jsxs)(n.p,{children:["The Claimer doesn't have an ",(0,i.jsx)(n.code,{children:"account"}),", as the Claimer doesn't need to hold funds."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"generateKeypairs"})," function takes the ",(0,i.jsx)(n.code,{children:"mnemonic"})," value and generates the ",(0,i.jsx)(n.code,{children:"authentication"})," and ",(0,i.jsx)(n.code,{children:"keyAgreement"})," keys."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"createLightDidDocument"})," method takes these two values and generates the light DID."]}),"\n",(0,i.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,i.jsxs)(a.A,{groupId:"ts-js-choice",children:[(0,i.jsx)(s.A,{value:"ts",label:"Typescript",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn ts-node ./claimer/generateLightDid.ts\n"})})}),(0,i.jsx)(s.A,{value:"js",label:"Javascript",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node ./claimer/generateLightDid.js\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Well done - You successfully generated a light DID!"})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},3172:(e,n,t)=>{"use strict";t.d(n,{A:()=>p});var i=t(6540),r=t(4586),o=t(6352),a=t(8463),s=t(5283),l=t(6745),c=t(1470),d=t(9365),h=t(1432),m=t(4848);const p=e=>{let{children:n,fileName:t,...p}=e;const u=n,[g,f]=(0,i.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:y}}}=(0,r.A)(),D=(0,i.useMemo)((()=>{const{code:e}=(0,o.transform)(u,{plugins:["transform-typescript"],retainLines:!0}),n=["./generateAccount","./generateKeypairs","./ctypeSchema","./createClaim","./generateLightDid","../attester/ctypeSchema","../claimer/generateLightDid","../claimer/generateCredential","./claimer/createPresentation","./claimer/generateKeypairs","./claimer/generateLightDid"];let t=e.replace(/from\s+['"](.+)['"]/g,((e,t)=>n.includes(t)?`from '${t}.js'`:e));return t=t.replace("if (require.main === module)","if (process.argv[1] === new URL(import.meta.url).pathname)"),t}),[u]);(0,i.useEffect)((()=>{a.GP(D,{parser:"babel",plugins:[s.A,l.Ay],...y}).then(f)}),[y,D]);const j=[{fileName:t?`${t}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:g,fileID:"js",fileLabel:"Javascript"}];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.A,{groupId:"ts-js-choice",children:j.map((e=>(0,m.jsx)(d.A,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,m.jsx)(h.A,{...p,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);