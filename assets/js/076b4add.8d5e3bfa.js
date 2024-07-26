(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4701],{5764:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5764,e.exports=t},1995:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var i=n(4848),s=n(8453),o=(n(1432),n(3172)),a=(n(9595),n(1470)),r=n(9365);const c="import * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { mnemonicGenerate } from '@polkadot/util-crypto'\n\nexport function generateKeypairs(mnemonic = mnemonicGenerate()): {\n  authentication: Kilt.KiltKeyringPair\n  keyAgreement: Kilt.KiltEncryptionKeypair\n  assertionMethod: Kilt.KiltKeyringPair\n  capabilityDelegation: Kilt.KiltKeyringPair\n} {\n  const authentication = Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic)\n\n  const assertionMethod = Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic)\n\n  const capabilityDelegation = Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic)\n\n  const keyAgreement = Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(\n    Kilt.Utils.Crypto.mnemonicToMiniSecret(mnemonic)\n  )\n\n  return {\n    authentication: authentication,\n    keyAgreement: keyAgreement,\n    assertionMethod: assertionMethod,\n    capabilityDelegation: capabilityDelegation\n  }\n}\n",d="import * as Kilt from '@kiltprotocol/sdk-js'\nimport { config as envConfig } from 'dotenv'\nimport { generateAccount } from './generateAccount'\n\nexport async function createFullDid(\n  creatorAccount: Kilt.KiltKeyringPair & {\n    type: 'ed25519' | 'sr25519' | 'ecdsa'\n  }\n): Promise<{\n  fullDid: Kilt.DidDocument\n}> {\n  const api = Kilt.ConfigService.get('api')\n\n  const verificationMethod = Kilt.Did.publicKeyToChain(creatorAccount)\n\n  const txs = [\n    api.tx.did.createFromAccount(verificationMethod),\n    api.tx.did.dispatchAs(\n      creatorAccount.address,\n      api.tx.did.setAttestationKey(verificationMethod)\n    )\n  ]\n\n  console.log('Creating DID from account\u2026')\n  await Kilt.Blockchain.signAndSubmitTx(\n    api.tx.utility.batch(txs),\n    creatorAccount\n  )\n  const didUri = Kilt.Did.getFullDidUriFromKey(creatorAccount)\n  const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(didUri))\n  const { document: didDocument } = Kilt.Did.linkedInfoFromChain(encodedFullDid)\n\n  if (!didDocument) {\n    throw new Error('Full DID was not successfully created.')\n  }\n\n  return { fullDid: didDocument }\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.connect(process.env.WSS_ADDRESS as string)\n\n      // Load attester account\n      const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string\n      const { account } = generateAccount(accountMnemonic)\n      const { fullDid } = await createFullDid(account)\n\n      console.log('\\nsave following to .env to continue\\n')\n      console.error(`ATTESTER_DID_URI=\"${fullDid.uri}\"\\n`)\n    } catch (e) {\n      console.log('Error while creating attester DID')\n      throw e\n    }\n  })()\n}\n",l={id:"did",title:"DID"},h=void 0,u={id:"develop/workshop/attester/did",title:"DID",description:"The next step is to generate a KILT decentralized identifier (DID) using the account you created for the Attester in the previous step.",source:"@site/docs/develop/03_workshop/04_attester/02_did.md",sourceDirName:"develop/03_workshop/04_attester",slug:"/develop/workshop/attester/did",permalink:"/docs/develop/workshop/attester/did",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/04_attester/02_did.md",tags:[],version:"current",lastUpdatedAt:172198217e4,sidebarPosition:2,frontMatter:{id:"did",title:"DID"},sidebar:"workshop",previous:{title:"Account",permalink:"/docs/develop/workshop/attester/account"},next:{title:"CType",permalink:"/docs/develop/workshop/attester/ctype"}},p={},m=[{value:"Light and full DIDs",id:"light-and-full-dids",level:2},{value:"What&#39;s the difference between a DID and an account?",id:"whats-the-difference-between-a-did-and-an-account",level:2},{value:"Create a DID",id:"create-a-did",level:2},{value:"Write DID to chain",id:"write-did-to-chain",level:3},{value:"Run the code",id:"run-the-code",level:2},{value:"Generate Keys",id:"generate-keys",level:2}];function D(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The next step is to generate a KILT decentralized identifier (DID) using the account you created for the ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"})," in ",(0,i.jsx)(t.a,{href:"/docs/develop/workshop/attester/account",children:"the previous step"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A DID may represent any entity, such as a person, an organization, or a machine."}),"\n",(0,i.jsx)(t.p,{children:"A DID is a string uniquely identifying each KILT user.\nYou can store information about a DID on the KILT chain, which is useful for different use cases."}),"\n",(0,i.jsx)(t.p,{children:"One use case is messaging.\nYou could store a public encryption key and a service on chain, and a user can query both using a DID.\nOther users can now encrypt messages using your public encryption key and send a message to your service."}),"\n",(0,i.jsx)(t.h2,{id:"light-and-full-dids",children:"Light and full DIDs"}),"\n",(0,i.jsxs)(t.p,{children:["Kilt supports two DID types: ",(0,i.jsx)(t.strong,{children:"light"})," and ",(0,i.jsx)(t.strong,{children:"full"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["There are differences between the two types, but the most crucial is that you can use a light DID offline, but a full DID needs access to the blockchain to work.\nRead the ",(0,i.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/dids/light-did-creation",children:"DID documentation"})," to learn more about the difference between the light and full types."]}),"\n",(0,i.jsxs)(t.admonition,{title:"KILT DID",type:"info",children:[(0,i.jsx)(t.p,{children:"A DID supports four different key types:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["An ",(0,i.jsx)(t.em,{children:"authentication key pair"}),", used to sign claims and present authenticated credentials"]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.em,{children:"key-agreement key pair"}),", used to encrypt/decrypt messages"]}),"\n",(0,i.jsxs)(t.li,{children:["An ",(0,i.jsx)(t.em,{children:"assertion-method key pair"}),", used to write CTypes and attestations on chain"]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.em,{children:"capability-delegation key pair"}),", used to write delegations on chain"]}),"\n"]}),(0,i.jsx)(t.p,{children:"You can replace keys over time, e.g., if a key becomes compromised."})]}),"\n",(0,i.jsx)(t.h2,{id:"whats-the-difference-between-a-did-and-an-account",children:"What's the difference between a DID and an account?"}),"\n",(0,i.jsx)(t.p,{children:"A DID and an account sound quite similar, but there are some differences:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You record both to chain"}),"\n",(0,i.jsx)(t.li,{children:"You can have a DID without an account"}),"\n",(0,i.jsx)(t.li,{children:"You can have an account without a DID"}),"\n",(0,i.jsx)(t.li,{children:"Only an account can pay deposits and fees and attest claims"}),"\n",(0,i.jsx)(t.li,{children:"DIDs don't hold any coins"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In summary, you register a DID on the blockchain by an account submitting the DID creation transaction and paying the fees."}),"\n",(0,i.jsx)(t.h2,{id:"create-a-did",children:"Create a DID"}),"\n",(0,i.jsxs)(t.p,{children:["As an ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"})," needs to interact with the chain, you must create a full DID."]}),"\n",(0,i.jsx)(t.h3,{id:"write-did-to-chain",children:"Write DID to chain"}),"\n",(0,i.jsxs)(t.p,{children:["The KILT SDK provides multiple methods to create DIDs, this workshop highlights the ",(0,i.jsx)(t.code,{children:"createFromAccount"})," method, that creates a DID from any pre-existing substrate-compatible account."]}),"\n",(0,i.jsx)(t.admonition,{title:"Bring your own account",type:"info",children:(0,i.jsxs)(t.p,{children:["This workshop assumes you followed the ",(0,i.jsx)(t.a,{href:"/docs/develop/workshop/attester/account",children:"create account step"}),", but if you have a pre-existing account, you can use that instead."]})}),"\n",(0,i.jsx)(t.p,{children:"Create and submit the extrinsic (aka transaction) that registers the DID."}),"\n",(0,i.jsx)(o.A,{fileName:"attester/generateDid",children:d}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"publicKeyToChain"})," helper method returns a public key of the correct type."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"txs"})," array holds the two transactions containing the extrinsics needed to submit to the chain for the Attester's DID creation."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"createFromAccount"})," method takes the authenticated key of the account to attach the DID to, and the ",(0,i.jsx)(t.code,{children:"setAttestationKey"})," method takes the same parameter to set the attestation key the DID needs and uses."]}),"\n",(0,i.jsxs)(t.p,{children:["An Attester account needs to have an attestation key to write CTypes and attestations on chain. Use the ",(0,i.jsx)(t.code,{children:"setAttestationKey"})," method to set this. For this example transaction, the Attester account uses the ",(0,i.jsx)(t.code,{children:"dispatchAs"})," proxy method to assign the attestation key to the same account. However, you can also use this method to assign the attestation key to another account."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"signAndSubmitTx"})," method then takes those transactions and submits them as a batch to the chain."]}),"\n",(0,i.jsx)(t.h2,{id:"run-the-code",children:"Run the code"}),"\n",(0,i.jsx)(t.p,{children:"Now run the code with:"}),"\n",(0,i.jsxs)(a.A,{groupId:"ts-js-choice",children:[(0,i.jsx)(r.A,{value:"ts",label:"Typescript",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn ts-node ./attester/generateDid.ts\n"})})}),(0,i.jsx)(r.A,{value:"js",label:"Javascript",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"node ./attester/generateDid.js\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["Once you have run the script, the output should provide you with the ",(0,i.jsx)(t.code,{children:"ATTESTER_DID_URI"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The output should look like the following, but not identical since the code creates the DIDs from your account:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'ATTESTER_DID_URI="did:kilt:4ohMvUHsyeD\u2026"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Save the values in the ",(0,i.jsx)(t.code,{children:".env"})," file, which should now look like the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-env",metastring:'title=".env"',children:'WSS_ADDRESS=wss://peregrine.kilt.io\n\nATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry...\nATTESTER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...\nATTESTER_DID_URI="did:kilt:4ohMvUHsyeD..."\n'})}),"\n",(0,i.jsx)(t.p,{children:"Well done - You've generated a full DID! The next step is to create a CType!"}),"\n",(0,i.jsx)(t.h2,{id:"generate-keys",children:"Generate Keys"}),"\n",(0,i.jsxs)(t.p,{children:["Add the following code to the ",(0,i.jsx)(t.code,{children:"generateKeypairs"})," file."]}),"\n",(0,i.jsx)(o.A,{fileName:"attester/generateKeypairs",children:c})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(D,{...e})}):D(e)}},9595:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(6540);var i=n(1432),s=n(4848);const o=e=>{let{children:t,funcName:n="main",leadingSpaces:o=2,dropHead:a=0,dropTail:r=0,...c}=e;const d=new RegExp(`${n}\\((?:.|\\n|\\r)*?\\)(?::(?:.|\\n|\\r)*?)?\\s*{(?:\\n|\\r)*(?<body>(?:.|\\n|\\r)+)\\}`),l=t.toString().match(d)??{};let h="";if(l?.groups?.body){const{body:e}=l.groups,t=e.split(/\r?\n/);h=t.map((e=>e.slice(o))).slice(parseInt(a),t.length-parseInt(r)-1).join("\n")}else h=t.toString();return(0,s.jsx)(i.A,{...c,children:h})}},3172:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var i=n(6540),s=n(4586),o=n(6352),a=n(8463),r=n(5283),c=n(6745),d=n(1470),l=n(9365),h=n(1432),u=n(4848);const p=e=>{let{children:t,fileName:n,...p}=e;const m=t,[D,g]=(0,i.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:y}}}=(0,s.A)(),f=(0,i.useMemo)((()=>{const{code:e}=(0,o.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),t=["./generateAccount","./generateKeypairs","./ctypeSchema","./createClaim","./generateLightDid","../attester/ctypeSchema","../claimer/generateLightDid","../claimer/generateCredential","./claimer/createPresentation","./claimer/generateKeypairs","./claimer/generateLightDid"];let n=e.replace(/from\s+['"](.+)['"]/g,((e,n)=>t.includes(n)?`from '${n}.js'`:e));return n=n.replace("if (require.main === module)","if (process.argv[1] === new URL(import.meta.url).pathname)"),n}),[m]);(0,i.useEffect)((()=>{a.GP(f,{parser:"babel",plugins:[r.A,c.Ay],...y}).then(g)}),[y,f]);const x=[{fileName:n?`${n}.ts`:void 0,fileContents:m,fileID:"ts",fileLabel:"Typescript"},{fileName:n?`${n}.js`:void 0,fileContents:D,fileID:"js",fileLabel:"Javascript"}];return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d.A,{groupId:"ts-js-choice",children:x.map((e=>(0,u.jsx)(l.A,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,u.jsx)(h.A,{...p,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);