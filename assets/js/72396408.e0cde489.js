(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5561],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),i=n(2263),o=n(3945),s=n(8182),l=n(2175),p=n(5488),c=n(5162),d=n(6823);const y=e=>{let{children:t,fileName:n,...y}=e;const m=t,{code:u}=(0,l.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:h}}}=(0,i.Z)(),k=(0,o.format)(u,{parser:s.parsers.babel.parse,...h}),g=n?`${n}.ts`:void 0,f=n?`${n}.js`:void 0;return r.createElement(p.Z,{groupId:"ts-js-choice"},r.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},r.createElement(d.Z,(0,a.Z)({},y,{className:"language-ts",title:g}),m)),r.createElement(c.Z,{value:"js",label:"Javascript"},r.createElement(d.Z,(0,a.Z)({},y,{className:"language-js",title:f}),k)))}},8332:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(6823),o=n(1909),s=n(5488),l=n(5162);var p=n(4430);const c={id:"ctype",title:"CType"},d=void 0,y={unversionedId:"develop/workshop/attester/ctype",id:"develop/workshop/attester/ctype",title:"CType",description:"A claim type (CType for short) is a KILT-specific term, but the concept is simple:",source:"@site/docs/develop/03_workshop/04_attester/03_ctype.md",sourceDirName:"develop/03_workshop/04_attester",slug:"/develop/workshop/attester/ctype",permalink:"/docs/develop/workshop/attester/ctype",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/04_attester/03_ctype.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:3,frontMatter:{id:"ctype",title:"CType"},sidebar:"workshop",previous:{title:"DID",permalink:"/docs/develop/workshop/attester/did"},next:{title:"\ud83d\udc64 Claimer",permalink:"/docs/develop/workshop/claimer/"}},m={},u=[{value:"Create CType",id:"create-ctype",level:2},{value:"Get CType",id:"get-ctype",level:2},{value:"Run",id:"run",level:2}],h={toc:u};function k(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A claim type (CType for short) is a KILT-specific term, but the concept is simple:\nA CType defines the structure of a claim.\nYou can think of it as the data model for your claim."),(0,r.kt)("p",null,"Before the ",(0,r.kt)("span",{className:"label-role attester"},"Attester")," can attest credentials, they need to decide which CType they support.\nFor example, a traffic authority will only issue driver's licenses (=> CType for drivers license) and not trade register excerpts.\nSince CTypes enable interoperability between Attesters, it is highly recommended to use existing CTypes rather than creating new ones.\nHowever, for this workshop we will create our own CType."),(0,r.kt)("admonition",{title:"CType",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A CType ensures that a credential contains all required attributes, e.g., a driver's license has to contain a name, date of birth, the type of vehicle that can be driven by the claimer.\nThe CType is especially important since a Verifier would request credentials for a specific CType (e.g., the traffic police want to see your driver's license and not your gym membership)."),(0,r.kt)("p",{parentName:"admonition"},"If you want to learn more about CTypes take a look at our ",(0,r.kt)("a",{target:"_blank",href:n(6502).Z},"in depth CType documentation"),".\nYou can also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/ctype-index"},"read through existing CTypes in our CType-index"),".")),(0,r.kt)("p",null,"Creating CTypes requires an account and a full DID.\nMake sure your account holds KILT tokens so that you can pay the fees for creating a CType."),(0,r.kt)("p",null,"For example, a very basic CType for a driver's license could look like this:"),(0,r.kt)(i.Z,{className:"language-json",mdxType:"CodeBlock"},p.Z),(0,r.kt)("p",null,"Let's have a look at these attributes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$id")),(0,r.kt)("td",{parentName:"tr",align:null},"The KILT id of this CType. It is the most important property as it represents the ",(0,r.kt)("strong",{parentName:"td"},"digital footprint")," of the CType.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$schema")),(0,r.kt)("td",{parentName:"tr",align:null},"A reference to the meta-schema describing what a CType may look like. This is the same for all CTypes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the CType.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:null},"The properties that a claim conforming to this CType may have.")))),(0,r.kt)("p",null,"A CType is stored on the KILT blockchain."),(0,r.kt)("p",null,"In a real-life setup, a user would simply retrieve an existing CType from the chain or a repository of CTypes for example via a Credential Registry's REST API."),(0,r.kt)("p",null,"In this tutorial, we'll have the ",(0,r.kt)("span",{className:"label-role attester"},"Attester")," create and attempt to store a CType on the KILT test blockchain."),(0,r.kt)("h2",{id:"create-ctype"},"Create CType"),(0,r.kt)("p",null,"Copy the following to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"CType")," with a given schema:"),(0,r.kt)(o.Z,{fileName:"attester/ctypeSchema",mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\n// Return CType with the properties matching a given schema.\nexport function getCtypeSchema(): Kilt.ICType {\n  return Kilt.CType.fromProperties('Drivers License', {\n    name: {\n      type: 'string'\n    },\n    age: {\n      type: 'integer'\n    }\n  })\n}\n"),(0,r.kt)("h2",{id:"get-ctype"},"Get CType"),(0,r.kt)(o.Z,{fileName:"attester/generateCtype",mdxType:"TsJsBlock"},"import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateAccount } from './generateAccount'\nimport { generateKeypairs } from './generateKeypairs'\nimport { getCtypeSchema } from './ctypeSchema'\n\nexport async function ensureStoredCtype(\n  attesterAccount: Kilt.KiltKeyringPair,\n  attesterDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.ICType> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Get the CTYPE and see if it's stored, if yes return it.\n  const ctype = getCtypeSchema()\n  try {\n    await Kilt.CType.verifyStored(ctype)\n    console.log('Ctype already stored. Skipping creation')\n    return ctype\n  } catch {\n    console.log('Ctype not present. Creating it now...')\n    // Authorize the tx.\n    const encodedCtype = Kilt.CType.toChain(ctype)\n    const tx = api.tx.ctype.add(encodedCtype)\n    const extrinsic = await Kilt.Did.authorizeTx(\n      attesterDid,\n      tx,\n      signCallback,\n      attesterAccount.address\n    )\n\n    // Write to chain then return the CType.\n    await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)\n\n    return ctype\n  }\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.connect(process.env.WSS_ADDRESS as string)\n\n      const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string\n      const { account } = generateAccount(accountMnemonic)\n\n      const didMnemonic = process.env.ATTESTER_DID_MNEMONIC as string\n      const { authentication, assertionMethod } = generateKeypairs(didMnemonic)\n      const attesterDidUri = Kilt.Did.getFullDidUriFromKey(authentication)\n\n      await ensureStoredCtype(account, attesterDidUri, async ({ data }) => ({\n        signature: assertionMethod.sign(data),\n        keyType: assertionMethod.type\n      }))\n    } catch (e) {\n      console.log('Error while checking on chain ctype')\n      throw e\n    }\n  })()\n}\n"),(0,r.kt)("p",null,"We'll use this to check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"CType")," is on-chain already.\nIf yes we'll return it, otherwise we'll store it on-chain.\nRemember, an account must have the required amount of tokens to pay the transaction fee and deposit."),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)(s.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  To run it, just execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/generateCtype.ts")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node attester/generateCtype.ts\n"))),(0,r.kt)(l.Z,{value:"js",label:"Javascript",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  To run it, just execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/generateCtype.js")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node attester/generateCtype.js\n")))),(0,r.kt)("p",null,"OK, now before we can attest Credentials, we need a ",(0,r.kt)("span",{className:"label-role claimer"},"Claimer")," to request it! Let's move on!"))}k.isMDXComponent=!0},6502:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/files/02_ctypes-e515bcb3ee2c97e25be615f542b0f1d7.md"},4430:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a='{\n  "$id": "kilt:ctype:0xc22f85da01c18c1b48acf9556ac7167247ce253cc10373ea77f50fc91521d478",\n  "$schema": "http://kilt-protocol.org/draft-01/ctype#",\n  "properties": {\n    "age": {\n      "type": "integer"\n    },\n    "id": {\n      "type": "string"\n    },\n    "name": {\n      "type": "string"\n    }\n  },\n  "title": "Drivers License by did:kilt:4t9FPVbcN42UMxt3Z2Y4Wx38qPL8bLduAB11gLZSwn5hVEfH",\n  "type": "object"\n}'}}]);