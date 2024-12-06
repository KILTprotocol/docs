(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5256],{5764:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=5764,e.exports=n},5381:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var o=t(4848),i=t(8453),r=t(3172),s=t(1470),c=t(9365);const a="import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function generateAccount(\n  mnemonic = Kilt.Utils.Crypto.mnemonicGenerate()\n): {\n  account: Kilt.KiltKeyringPair & { type: 'ed25519' }\n  mnemonic: string\n} {\n  return {\n    account: Kilt.Utils.Crypto.makeKeypairFromUri(mnemonic),\n    mnemonic\n  }\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.init()\n\n      const { mnemonic, account } = generateAccount()\n      console.log('save to mnemonic and address to .env to continue!\\n\\n')\n      console.log(`ATTESTER_ACCOUNT_MNEMONIC=\"${mnemonic}\"`)\n      console.log(`ATTESTER_ACCOUNT_ADDRESS=\"${account.address}\"\\n\\n`)\n    } catch (e) {\n      console.log('Error while setting up attester account')\n      throw e\n    }\n  })()\n}\n",l={id:"account",title:"Account"},d=void 0,h={id:"develop/workshop/attester/account",title:"Account",description:"With the project structure setup in the last step, you can create your Attester account.",source:"@site/docs/develop/03_workshop/04_attester/01_account.md",sourceDirName:"develop/03_workshop/04_attester",slug:"/develop/workshop/attester/account",permalink:"/docs/develop/workshop/attester/account",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/04_attester/01_account.md",tags:[],version:"current",lastUpdatedAt:1733496053e3,sidebarPosition:1,frontMatter:{id:"account",title:"Account"},sidebar:"workshop",previous:{title:"\ud83c\udfe2 Attester",permalink:"/docs/develop/workshop/attester/"},next:{title:"DID",permalink:"/docs/develop/workshop/attester/did"}},u={},p=[{value:"Create the Account",id:"create-the-account",level:2},{value:"Run code",id:"run-code",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.a,{href:"./",children:"project structure setup"})," in the last step, you can create your ",(0,o.jsx)("span",{className:"label-role attester",children:"Attester"})," account."]}),"\n",(0,o.jsx)(n.p,{children:"With KILT, an account is an object that interacts with the blockchain."}),"\n",(0,o.jsxs)(n.admonition,{title:"KILT Account",type:"info",children:[(0,o.jsx)(n.p,{children:"A KILT account is a set of cryptographic elements:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The address, generated from the public key, is the entity's unique and public on-chain identifier, used to pay fees and deposits."}),"\n",(0,o.jsx)(n.li,{children:"A signing key pair to write transactions on-chain"}),"\n"]})]}),"\n",(0,o.jsx)(n.p,{children:"To create an account, you need a mnemonic."}),"\n",(0,o.jsxs)(n.admonition,{title:"Mnemonic",type:"info",children:[(0,o.jsx)(n.p,{children:"In cryptography, a mnemonic consists of a series of 12 or 24 random words."}),(0,o.jsxs)(n.p,{children:["For example, ",(0,o.jsx)(n.code,{children:"waste frown beach save hidden bar inmate oil mind member junk famous"})," is a mnemonic."]}),(0,o.jsxs)(n.p,{children:["You use a mnemonic to generate signing key pairs.\nWhat's great about a mnemonic is that it's ",(0,o.jsx)(n.strong,{children:"human-readable"}),", and a person could memorize it to later re-generate their key pairs and address.\nA mnemonic is critical for security, so it's crucial to keep it safe!"]})]}),"\n",(0,o.jsx)(n.h2,{id:"create-the-account",children:"Create the Account"}),"\n",(0,o.jsxs)(n.p,{children:["To generate an account, use the ",(0,o.jsx)(n.code,{children:"addFromMnemonic()"})," function on the ",(0,o.jsx)(n.a,{href:"https://kiltprotocol.github.io/sdk-js/interfaces/types_src.KiltKeyringPair.html",children:(0,o.jsx)(n.code,{children:"KiltKeyringPair"})})," interface of the SDK.\nThe function uses the underlying polkadot ",(0,o.jsx)(n.code,{children:"mnemonicGenerate()"})," function to generate a 12-word mnemonic."]}),"\n",(0,o.jsxs)(n.admonition,{title:"polkadot.js",type:"info",children:[(0,o.jsxs)(n.p,{children:["The KILT SDK is built on top of the ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/",children:"polkadot.js"})," library, so this workshop uses several functions from the library."]}),(0,o.jsx)(n.p,{children:"The library provides tools to interact with the KILT blockchain and other Substrate-based blockchains."}),(0,o.jsxs)(n.p,{children:["In addition, the polkadot.js library offers cryptographic primitives and a serialization framework to encode/decode data sent to and received from the blockchain.\nRead the ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/docs/",children:"API documentation"})," to learn more about the functions available."]})]}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"generateAccount"})," file."]}),"\n",(0,o.jsx)(r.A,{fileName:"attester/generateAccount",children:a}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"generateAccount"})," method returns an object with the following two properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A key ",(0,o.jsx)(n.code,{children:"account"})," with the type ",(0,o.jsx)(n.code,{children:"Kilt.KiltKeyringPair"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["A key ",(0,o.jsx)(n.code,{children:"mnemonic"})," with the type ",(0,o.jsx)(n.code,{children:"string"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Generating these values takes two steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create the ",(0,o.jsx)(n.code,{children:"mnemonic"})," value using the ",(0,o.jsx)(n.code,{children:"mnemonicGenerate()"})," method from the ",(0,o.jsx)(n.code,{children:"Utils.Crypto"})," package."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"account"})," value first needs a ",(0,o.jsx)(n.code,{children:"keyring"})," value defined, which is a data structure for defining the key pair type. This example uses ",(0,o.jsx)(n.code,{children:"ed25519"}),", but ",(0,o.jsx)(n.code,{children:"sr25519"})," or ",(0,o.jsx)(n.code,{children:"ecdsa"})," are also valid."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The function then returns the value using the ",(0,o.jsx)(n.code,{children:"makeKeypairFromUri()"})," method to create a key pair for the address using the given mnemonic."]}),"\n",(0,o.jsxs)(n.p,{children:["The rest of the code runs the ",(0,o.jsx)(n.code,{children:"generateAccount"})," function and logs the results to the console."]}),"\n",(0,o.jsx)(n.h2,{id:"run-code",children:"Run code"}),"\n",(0,o.jsxs)(n.p,{children:["Run the code above to receive your ",(0,o.jsx)("span",{className:"label-role attester",children:"Attester"})," ",(0,o.jsx)(n.code,{children:"<address>"})," and ",(0,o.jsx)(n.code,{children:"<mnenomic>"}),"."]}),"\n",(0,o.jsxs)(s.A,{groupId:"ts-js-choice",children:[(0,o.jsx)(c.A,{value:"ts",label:"Typescript",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn ts-node ./attester/generateAccount.ts\n"})})}),(0,o.jsx)(c.A,{value:"js",label:"Javascript",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"node ./attester/generateAccount.js\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The output provides you with an ",(0,o.jsx)(n.code,{children:"ATTESTER_ACCOUNT_MNEMONIC"})," and ",(0,o.jsx)(n.code,{children:"ATTESTER_ACCOUNT_ADDRESS"}),".\nSave both values in your ",(0,o.jsx)(n.code,{children:".env"})," file, which should look similar to the below."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-env",metastring:'title=".env"',children:'WSS_ADDRESS=wss://peregrine.kilt.io\n\nATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry..."\nATTESTER_ACCOUNT_ADDRESS="4ohMvUHsyeDhMVZF..."\n'})}),"\n",(0,o.jsx)(n.admonition,{title:"Get PILT coins!",type:"warning",children:(0,o.jsxs)(n.p,{children:["You now have a blockchain account to use to pay fees and deposits.\nIf you haven't already requested PILT, go to the ",(0,o.jsx)(n.a,{href:"https://faucet.peregrine.kilt.io",children:"faucet"})," and request tokens for your ",(0,o.jsx)(n.code,{children:"<address>"}),"."]})})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},3172:(e,n,t)=>{"use strict";t.d(n,{A:()=>p});var o=t(6540),i=t(4586),r=t(6352),s=t(8463),c=t(5283),a=t(6745),l=t(1470),d=t(9365),h=t(1432),u=t(4848);const p=e=>{let{children:n,fileName:t,...p}=e;const m=n,[j,f]=(0,o.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:x}}}=(0,i.A)(),g=(0,o.useMemo)((()=>{const{code:e}=(0,r.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),n=["./generateAccount","./generateKeypairs","./ctypeSchema","./createClaim","./generateLightDid","../attester/ctypeSchema","../claimer/generateLightDid","../claimer/generateCredential","./claimer/createPresentation","./claimer/generateKeypairs","./claimer/generateLightDid"];let t=e.replace(/from\s+['"](.+)['"]/g,((e,t)=>n.includes(t)?`from '${t}.js'`:e));return t=t.replace("if (require.main === module)","if (process.argv[1] === new URL(import.meta.url).pathname)"),t}),[m]);(0,o.useEffect)((()=>{s.GP(g,{parser:"babel",plugins:[c.A,a.Ay],...x}).then(f)}),[x,g]);const y=[{fileName:t?`${t}.ts`:void 0,fileContents:m,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:j,fileID:"js",fileLabel:"Javascript"}];return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.A,{groupId:"ts-js-choice",children:y.map((e=>(0,u.jsx)(d.A,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,u.jsx)(h.A,{...p,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);