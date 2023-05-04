(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9170],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7462),o=n(7294),i=n(2263),r=n(3945),s=n(8182),c=n(2175),l=n(4866),d=n(5162),u=n(814);const p=e=>{let{children:t,fileName:n,...p}=e;const m=t,{code:h}=(0,c.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:y}}}=(0,i.Z)(),k=(0,r.format)(h,{parser:s.parsers.babel.parse,...y}),D=n?`${n}.ts`:void 0,g=n?`${n}.js`:void 0;return o.createElement(l.Z,{groupId:"ts-js-choice"},o.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(u.Z,(0,a.Z)({},p,{className:"language-ts",title:D}),m)),o.createElement(d.Z,{value:"js",label:"Javascript"},o.createElement(u.Z,(0,a.Z)({},p,{className:"language-js",title:g}),k)))}},8995:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>D,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),i=(n(814),n(1909)),r=n(4866),s=n(5162);const c="import * as Kilt from '@kiltprotocol/sdk-js'\nimport {\n  blake2AsU8a,\n  keyExtractPath,\n  keyFromPath,\n  mnemonicGenerate,\n  mnemonicToMiniSecret,\n  sr25519PairFromSeed\n} from '@polkadot/util-crypto'\nimport { generateAccount } from './generateAccount'\n\n// Because there is no first-class support for this class of keys,\n// we need to use a workaround to generate a key we can use for encryption/decryption.\nfunction generateKeyAgreement(mnemonic: string) {\n  const secretKeyPair = sr25519PairFromSeed(mnemonicToMiniSecret(mnemonic))\n  const { path } = keyExtractPath('//did//keyAgreement//0')\n  const { secretKey } = keyFromPath(secretKeyPair, path, 'sr25519')\n  return Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(blake2AsU8a(secretKey))\n}\n\nexport function generateKeypairs(mnemonic = mnemonicGenerate()) {\n  const { account } = generateAccount(mnemonic)\n\n  const authentication = {\n    ...account.derive('//did//0'),\n    type: 'sr25519'\n  } as Kilt.KiltKeyringPair\n\n  const assertionMethod = {\n    ...account.derive('//did//assertion//0'),\n    type: 'sr25519'\n  } as Kilt.KiltKeyringPair\n\n  const capabilityDelegation = {\n    ...account.derive('//did//delegation//0'),\n    type: 'sr25519'\n  } as Kilt.KiltKeyringPair\n\n  const keyAgreement = generateKeyAgreement(mnemonic)\n\n  return {\n    authentication: authentication,\n    keyAgreement: keyAgreement,\n    assertionMethod: assertionMethod,\n    capabilityDelegation: capabilityDelegation\n  }\n}\n",l="import { config as envConfig } from 'dotenv'\n\nimport { mnemonicGenerate } from '@polkadot/util-crypto'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateAccount } from './generateAccount'\nimport { generateKeypairs } from './generateKeypairs'\n\nexport async function createFullDid(\n  submitterAccount: Kilt.KiltKeyringPair\n): Promise<{\n  mnemonic: string\n  fullDid: Kilt.DidDocument\n}> {\n  const api = Kilt.ConfigService.get('api')\n\n  const mnemonic = mnemonicGenerate()\n  const {\n    authentication,\n    keyAgreement,\n    assertionMethod,\n    capabilityDelegation\n  } = generateKeypairs(mnemonic)\n  // Get tx that will create the DID on chain and DID-URI that can be used to resolve the DID Document.\n  const fullDidCreationTx = await Kilt.Did.getStoreTx(\n    {\n      authentication: [authentication],\n      keyAgreement: [keyAgreement],\n      assertionMethod: [assertionMethod],\n      capabilityDelegation: [capabilityDelegation]\n    },\n    submitterAccount.address,\n    async ({ data }) => ({\n      signature: authentication.sign(data),\n      keyType: authentication.type\n    })\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)\n\n  const didUri = Kilt.Did.getFullDidUriFromKey(authentication)\n  const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(didUri))\n  const { document } = Kilt.Did.linkedInfoFromChain(encodedFullDid)\n\n  if (!document) {\n    throw new Error('Full DID was not successfully created.')\n  }\n\n  return { mnemonic, fullDid: document }\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.connect(process.env.WSS_ADDRESS as string)\n\n      // Load attester account\n      const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string\n      const { account } = generateAccount(accountMnemonic)\n      const { mnemonic } = await createFullDid(account)\n\n      console.log('\\nsave following to .env to continue\\n')\n      console.error(`ATTESTER_DID_MNEMONIC=\"${mnemonic}\"\\n`)\n    } catch (e) {\n      console.log('Error while creating attester DID')\n      throw e\n    }\n  })()\n}\n",d={id:"did",title:"DID"},u=void 0,p={unversionedId:"develop/workshop/attester/did",id:"develop/workshop/attester/did",title:"DID",description:"Now it's time to generate a DID using the previously created account for the Attester.",source:"@site/docs/develop/03_workshop/04_attester/02_did.md",sourceDirName:"develop/03_workshop/04_attester",slug:"/develop/workshop/attester/did",permalink:"/docs/develop/workshop/attester/did",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/04_attester/02_did.md",tags:[],version:"current",lastUpdatedAt:1683181352,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:2,frontMatter:{id:"did",title:"DID"},sidebar:"workshop",previous:{title:"Account",permalink:"/docs/develop/workshop/attester/account"},next:{title:"CType",permalink:"/docs/develop/workshop/attester/ctype"}},m={},h=[{value:"Account vs DID",id:"account-vs-did",level:2},{value:"Create a DID",id:"create-a-did",level:2},{value:"Execute",id:"execute",level:2}],y={toc:h},k="wrapper";function D(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now it's time to generate a DID using the previously created account for the ",(0,o.kt)("span",{className:"label-role attester"},"Attester"),"."),(0,o.kt)("p",null,"A DID may represent any entity, which could be a person, an organization or a machine."),(0,o.kt)("p",null,"A KILT decentralized identifier (DID) is a string uniquely identifying each KILT user.\nYou can store information about your DID on the KILT chain.\nThis is useful for many different use cases.\nOne example would be messaging.\nYou would store a public encryption key and a service endpoint on-chain, which can both be queried using your DID.\nOther users can now encrypt messages using your public encryption key and send the message to your service endpoint."),(0,o.kt)("p",null,"There are two types of DIDs: light and full.\nTake a look at our ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/light-did-creation"},"DID documentation")," to learn more about DIDs and the difference between the light and full versions."),(0,o.kt)("admonition",{title:"KILT DID",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There are currently four different key types that a DID supports:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("em",{parentName:"li"},"authentication keypair"),", used to sign claims and create authenticated credential presentations"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("em",{parentName:"li"},"key-agreement keypair"),", used to encrypt/decrypt messages"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("em",{parentName:"li"},"assertion-method keypair"),", used to write CTypes and attestations on chain"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("em",{parentName:"li"},"capability-delegation keypair"),", used to write delegations on chain")),(0,o.kt)("p",{parentName:"admonition"},"Keys can be replaced over time, e.g., if a key is compromised.")),(0,o.kt)("h2",{id:"account-vs-did"},"Account vs DID"),(0,o.kt)("p",null,"A full DID needs to be registered on the blockchain.\nFor that, an account has to submit the DID creation transaction.\nThere is always an account that submits the transactions and pays for the fees and the DID that authorized the call.\nBecause the DID and the account are not connected, DIDs do not hold any coins."),(0,o.kt)("h2",{id:"create-a-did"},"Create a DID"),(0,o.kt)("p",null,"To create a DID we can use the same keyrings that are used to generate accounts.\nFor our ",(0,o.kt)("span",{className:"label-role attester"},"Attester")," we'll need all four types of keys.\nSince three of the key types are used for signatures, we can use the same key for these.\nWe'll use the default KILT keyring to generate them."),(0,o.kt)(i.Z,{fileName:"attester/generateKeypairs",mdxType:"TsJsBlock"},c),(0,o.kt)("p",null,"Once we have created all the necessary keys for a DID we can create the on-chain DID.\nTo create a DID we first initialize everything.\nAfter that, we load the account that we created in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/workshop/attester/account"},"last section"),".\nThe account will be used to pay for the DID registration.\nFinally, we create and submit the extrinsic (aka transaction) that will register our DID."),(0,o.kt)(i.Z,{fileName:"attester/generateDid",mdxType:"TsJsBlock"},l),(0,o.kt)("h2",{id:"execute"},"Execute"),(0,o.kt)("p",null,"You can now execute the script with:"),(0,o.kt)(r.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node ./attester/generateDid.ts\n"))),(0,o.kt)(s.Z,{value:"js",label:"Javascript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node ./attester/generateDid.js\n")))),(0,o.kt)("p",null,"Once you have executed the script, the output should provide you with your ",(0,o.kt)("inlineCode",{parentName:"p"},"ATTESTER_DID_MNEMONIC"),".\nYour output should look like this (but it won't be identical since the DIDs are constructed from your account):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ATTESTER_DID_MNEMONIC="beyond large galaxy...\n')),(0,o.kt)("p",null,"Be sure to save it in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file.\nIt should now look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},'WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws\n\nATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry...\nATTESTER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...\nATTESTER_DID_MNEMONIC="beyond large galaxy...\n')),(0,o.kt)("p",null,"Well done - You've successfully generated a full DID! Let's create a CType!"))}D.isMDXComponent=!0}}]);