(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96],{48952:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=48952,e.exports=t},45532:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>y,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var i=n(17624),s=n(4552),r=n(1608),a=n(96020),o=n(61268),c=n(87768);const d="import * as Kilt from '@kiltprotocol/sdk-js'\n\n// Return CType with the properties matching a given schema.\nexport function getCtypeSchema(): Kilt.ICType {\n  return Kilt.CType.fromProperties('Drivers License', {\n    name: {\n      type: 'string'\n    },\n    age: {\n      type: 'integer'\n    }\n  })\n}\n",l="import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateAccount } from './generateAccount'\nimport { generateKeypairs } from './generateKeypairs'\nimport { getCtypeSchema } from './ctypeSchema'\n\nexport async function ensureStoredCtype(\n  attesterAccount: Kilt.KiltKeyringPair,\n  attesterDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.ICType> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Get the CTYPE and see if it's stored, if yes return it.\n  const ctype = getCtypeSchema()\n  try {\n    await Kilt.CType.verifyStored(ctype)\n    console.log('Ctype already stored. Skipping creation')\n    return ctype\n  } catch {\n    console.log('Ctype not present. Creating it now...')\n    // Authorize the tx.\n    const encodedCtype = Kilt.CType.toChain(ctype)\n    const tx = api.tx.ctype.add(encodedCtype)\n    const extrinsic = await Kilt.Did.authorizeTx(\n      attesterDid,\n      tx,\n      signCallback,\n      attesterAccount.address\n    )\n\n    // Write to chain then return the CType.\n    await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)\n\n    return ctype\n  }\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.connect(process.env.WSS_ADDRESS as string)\n\n      const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string\n      const { account } = generateAccount(accountMnemonic)\n\n      const didMnemonic = process.env.ATTESTER_DID_MNEMONIC as string\n      const { authentication, assertionMethod } = generateKeypairs(didMnemonic)\n      const attesterDidUri = Kilt.Did.getFullDidUriFromKey(authentication)\n\n      const newCType = await ensureStoredCtype(\n        account,\n        attesterDidUri,\n        async ({ data }) => ({\n          signature: assertionMethod.sign(data),\n          keyType: assertionMethod.type\n        })\n      )\n\n      console.log(\n        `your ctype was succsesfully created\\n\\n${JSON.stringify(\n          newCType,\n          null,\n          2\n        )}`\n      )\n    } catch (e) {\n      console.log('Error while checking on chain ctype')\n      throw e\n    }\n  })()\n}\n";var h=n(7496);const p={id:"ctype",title:"CType"},y=void 0,u={id:"develop/workshop/attester/ctype",title:"CType",description:"A claim type (CType) is a KILT-specific term, but the concept is simple:",source:"@site/docs/develop/03_workshop/04_attester/03_ctype.md",sourceDirName:"develop/03_workshop/04_attester",slug:"/develop/workshop/attester/ctype",permalink:"/docs/develop/workshop/attester/ctype",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/04_attester/03_ctype.md",tags:[],version:"current",lastUpdatedAt:1712840460,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:3,frontMatter:{id:"ctype",title:"CType"},sidebar:"workshop",previous:{title:"DID",permalink:"/docs/develop/workshop/attester/did"},next:{title:"\ud83d\udc64 Claimer",permalink:"/docs/develop/workshop/claimer/"}},m={},f=[{value:"Create CType",id:"create-ctype",level:2},{value:"Get CType",id:"get-ctype",level:2},{value:"Run",id:"run",level:2}];function x(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"A claim type (CType) is a KILT-specific term, but the concept is simple:\nA CType is a JSON schema that defines the structure of a claim, and you can think of it as the data model for your claim."}),"\n",(0,i.jsxs)(t.admonition,{title:"CType",type:"info",children:[(0,i.jsx)(t.p,{children:"A CType ensures that a credential contains all required attributes, e.g., a driver's license has to contain a name, date of birth, and the vehicle types that the claimer can drive.\nThe CType is important since a Verifier requests credentials for a specific CType.\nFor example, the traffic police want to see your driver's license, not your gym membership."}),(0,i.jsxs)(t.p,{children:["To learn more about CTypes, read the ",(0,i.jsx)(t.a,{href:"/docs/concepts/credentials/ctypes",children:"in-depth CType documentation"}),".\nYou can also ",(0,i.jsx)(t.a,{href:"https://github.com/KILTprotocol/ctype-index",children:"read through existing CTypes in the CType-index"}),"."]})]}),"\n",(0,i.jsxs)(t.p,{children:["Before the ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"})," can attest credentials, they must decide which CType they support.\nFor example, a traffic authority only issues driver's licenses (A CType for driver's license), not a university diploma."]}),"\n",(0,i.jsx)(t.p,{children:"Since CTypes enable interoperability between Attesters, using existing CTypes rather than creating new ones is highly recommended.\nHowever, this workshop creates a new CType to show the process."}),"\n",(0,i.jsx)(t.p,{children:"Creating CTypes requires an account and a full DID.\nMake sure your account holds KILT tokens so that you can pay the fees for creating a CType."}),"\n",(0,i.jsx)(t.p,{children:"For example, a basic CType for a driver's license could look like this:"}),"\n",(0,i.jsx)(r.c,{className:"language-json",children:h.c}),"\n",(0,i.jsx)(t.p,{children:"The CType has the following attributes:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$id"})}),(0,i.jsxs)(t.td,{children:["The KILT id of this CType. It's the most important property as it represents the ",(0,i.jsx)(t.strong,{children:"digital footprint"})," of the CType."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$schema"})}),(0,i.jsx)(t.td,{children:"A reference to the meta-schema describing what a CType may look like. There are two versions."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"title"})}),(0,i.jsx)(t.td,{children:"The title of the CType."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"properties"})}),(0,i.jsx)(t.td,{children:"The properties that a claim conforming to this CType may have."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"type"})}),(0,i.jsx)(t.td,{children:"Type is an object for all CTypes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"additionalProperties"})}),(0,i.jsx)(t.td,{children:"The default is false. This restricts unwanted properties in a claim."})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"A CType is stored on the KILT blockchain."}),"\n",(0,i.jsx)(t.p,{children:"In a real-world situation, a user would retrieve an existing CType from the chain or a CType registry.\nFor example, via a Credential Registry's REST API."}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial, the ",(0,i.jsx)("span",{className:"label-role attester",children:"Attester"})," creates and attempts to store a CType on the KILT test blockchain."]}),"\n",(0,i.jsx)(t.h2,{id:"create-ctype",children:"Create CType"}),"\n",(0,i.jsxs)(t.p,{children:["Copy the following to define a ",(0,i.jsx)(t.code,{children:"CType"})," with a given schema:"]}),"\n",(0,i.jsx)(a.c,{fileName:"attester/ctypeSchema",children:d}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["As many people follow this workshop, using the CType schema defined above will result in a duplicate error when you run the code later.\nTo avoid this, change the value of ",(0,i.jsx)(t.code,{children:"fromProperties"}),' to something unique, such as adding your name to the "Drivers License" string.']})}),"\n",(0,i.jsx)(t.h2,{id:"get-ctype",children:"Get CType"}),"\n",(0,i.jsxs)(t.p,{children:["Copy the following to create a ",(0,i.jsx)(t.code,{children:"CType"})," on the chain:"]}),"\n",(0,i.jsx)(a.c,{fileName:"attester/generateCtype",children:l}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ensureStoredCType"})," function takes the Attester's account, DID, and a callback to sign the function and checks if the CType is already on chain.\nIt uses the ",(0,i.jsx)(t.code,{children:"verifyStored"})," method to pass the CType to the KILT blockchain and make the check.\nIf it does not exist, it stores it on chain, using the ",(0,i.jsx)(t.code,{children:"toChain"})," method to encode the CType into a unique hash and the ",(0,i.jsx)(t.code,{children:"add"})," method to create a new CType from the given unique hash and associate it with the Attester.\nThe function then uses the ",(0,i.jsx)(t.code,{children:"authorizeTx"})," to authorize the transaction and ",(0,i.jsx)(t.code,{children:"signAndSubmitTx"})," to sign and submit the transaction containing the new CType."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Remember, an account must have the required amount of tokens to pay the transaction fee and deposit."})}),"\n",(0,i.jsx)(t.h2,{id:"run",children:"Run"}),"\n",(0,i.jsxs)(o.c,{groupId:"ts-js-choice",children:[(0,i.jsxs)(c.c,{value:"ts",label:"Typescript",default:!0,children:[(0,i.jsxs)(t.p,{children:["Run the ",(0,i.jsx)(t.code,{children:"attester/generateCtype.ts"})," file."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn ts-node attester/generateCtype.ts\n"})})]}),(0,i.jsxs)(c.c,{value:"js",label:"Javascript",default:!0,children:[(0,i.jsxs)(t.p,{children:["Run the ",(0,i.jsx)(t.code,{children:"attester/generateCtype.js"})," file."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"node attester/generateCtype.js\n"})})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Before you can attest Credentials, you need a ",(0,i.jsx)("span",{className:"label-role claimer",children:"Claimer"})," to request it"]})]})}function g(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},96020:(e,t,n)=>{"use strict";n.d(t,{c:()=>y});var i=n(11504),s=n(28264),r=n(46352),a=n(58440),o=n(14300),c=n(28168),d=n(61268),l=n(87768),h=n(1608),p=n(17624);const y=e=>{let{children:t,fileName:n,...y}=e;const u=t,[m,f]=(0,i.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:x}}}=(0,s.c)(),g=(0,i.useMemo)((()=>{const{code:e}=(0,r.transform)(u,{plugins:["transform-typescript"],retainLines:!0});return e}),[u]);(0,i.useEffect)((()=>{a.E9(g,{parser:"babel",plugins:[o.c,c.cp],...x}).then(f)}),[x,g]);const j=[{fileName:n?`${n}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:n?`${n}.js`:void 0,fileContents:m,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.c,{groupId:"ts-js-choice",children:j.map((e=>(0,p.jsx)(l.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(h.c,{...y,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}},7496:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});const i='{\n  "$id": "kilt:ctype:0x4f1d68ac46daf4613181b33b16faaf10cf94879dc2246d7485dc2ccbb843641d",\n  "$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/",\n  "additionalProperties": false,\n  "properties": {\n    "age": {\n      "type": "integer"\n    },\n    "id": {\n      "type": "string"\n    },\n    "name": {\n      "type": "string"\n    }\n  },\n  "title": "Drivers License by did:kilt:4t9FPVbcN42UMxt3Z2Y4Wx38qPL8bLduAB11gLZSwn5hVEfH",\n  "type": "object"\n}'}}]);