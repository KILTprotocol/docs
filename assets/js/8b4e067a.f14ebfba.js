(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[378],{5380:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=5380,e.exports=n},3488:(e,n,i)=>{"use strict";i.r(n),i.d(n,{assets:()=>y,contentTitle:()=>m,default:()=>b,frontMatter:()=>f,metadata:()=>g,toc:()=>k});var t=i(5893),s=i(1151),o=(i(9286),i(6793)),r=i(9747),l=(i(1909),i(4866)),c=i(5162);const d="/* eslint-disable prefer-const */\nimport type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<ApiPromise> {\n  let api = await Kilt.connect('wss://spiritnet.kilt.io/')\n\n  return api\n}\n",a="/* eslint-disable prefer-const */\nimport type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<ApiPromise> {\n  let api = await Kilt.connect('wss://peregrine.kilt.io/')\n\n  return api\n}\n",h="/* eslint-disable prefer-const */\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<Kilt.DidUri | null> {\n  let apiConfig = Kilt.ConfigService.get('api')\n  const encodedJohnDoeDetails =\n    await apiConfig.call.did.queryByWeb3Name('john_doe')\n\n  // This function will throw if johnDoeOwner does not exist\n  const {\n    document: { uri }\n  } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails)\n  console.log(`My name is john_doe and this is my DID: \"${uri}\"`)\n\n  return uri\n}\n",p="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  uri: Kilt.DidUri\n): Promise<Kilt.DidServiceEndpoint[]> {\n  const johnDoeDidDocument = await Kilt.Did.resolve(uri)\n  console.log(`John Doe's DID Document:`)\n  console.log(JSON.stringify(johnDoeDidDocument, null, 2))\n\n  const endpoints = johnDoeDidDocument?.document?.service\n  if (!endpoints) {\n    console.log('No endpoints for the DID.')\n    return []\n  }\n\n  console.log('Endpoints:')\n  console.log(JSON.stringify(endpoints, null, 2))\n\n  return endpoints\n}\n",u="import axios from 'axios'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  endpoints: Kilt.DidServiceEndpoint[]\n): Promise<Kilt.ICredential> {\n  const {\n    data: [{ credential }]\n  } = await axios.get<Kilt.KiltPublishedCredentialCollectionV1>(\n    endpoints[0].serviceEndpoint[0]\n  )\n  console.log(`Credentials: ${JSON.stringify(credential, null, 2)}`)\n  return credential\n}\n",j="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(credential: Kilt.ICredential): Promise<void> {\n  try {\n    const { attester, revoked } =\n      await Kilt.Credential.verifyCredential(credential)\n\n    // Verify that the credential is not revoked. Exception caught by the catch {} block below.\n    if (revoked) {\n      throw new Error('The credential has been revoked, hence it is not valid.')\n    }\n    console.log(\n      `John Doe's credential is valid and has been attested by ${attester}!`\n    )\n  } catch {\n    console.log(\"John Doe's credential is not valid.\")\n  }\n}\n",x="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<void> {\n  await Kilt.disconnect()\n}\n",f={id:"quickstart",title:"Quickstart"},m=void 0,g={id:"develop/sdk/quickstart",title:"Quickstart",description:"Get started with KILT by following this guide, which teaches you to:",source:"@site/docs/develop/01_sdk/01_quickstart.md",sourceDirName:"develop/01_sdk",slug:"/develop/sdk/quickstart",permalink:"/docs/develop/sdk/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/01_quickstart.md",tags:[],version:"current",lastUpdatedAt:1707216207,formattedLastUpdatedAt:"Feb 6, 2024",sidebarPosition:1,frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"sdk",next:{title:"Generate DID keys",permalink:"/docs/develop/sdk/cookbook/dids/key-generation"}},y={},k=[{value:"Setup",id:"setup",level:2},{value:"Import the KILT SDK",id:"import-the-kilt-sdk",level:3},{value:"Connect to the KILT Blockchain",id:"connect-to-the-kilt-blockchain",level:3},{value:"Query a KILT Identity",id:"query-a-kilt-identity",level:2},{value:"Retrieve and Verify a Credential",id:"retrieve-and-verify-a-credential",level:2}];function v(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Get started with KILT by following this guide, which teaches you to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Import the ",(0,t.jsx)(n.strong,{children:"KILT SDK"})," into your project"]}),"\n",(0,t.jsxs)(n.li,{children:["Connect to the ",(0,t.jsx)(n.strong,{children:"KILT blockchain"})]}),"\n",(0,t.jsxs)(n.li,{children:["Query a ",(0,t.jsx)(n.strong,{children:"web3name"})," to retrieve its ",(0,t.jsx)(n.strong,{children:"DID"})]}),"\n",(0,t.jsxs)(n.li,{children:["Verify a ",(0,t.jsx)(n.strong,{children:"credential"})," using a ",(0,t.jsx)(n.strong,{children:"DID service"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Prerequisites",type:"info",children:(0,t.jsx)(n.p,{children:"This quickstart guide provides hands-on experience to enhance your understanding of KILT.\nBasic knowledge of JavaScript and command-line tools is recommended."})}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new project and directory and move into the directory by running ",(0,t.jsx)(n.code,{children:"mkdir kilt-rocks && cd kilt-rocks"}),"."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"ts-js-choice",children:[(0,t.jsxs)(c.Z,{value:"ts",label:"Typescript",default:!0,children:[(0,t.jsxs)(n.p,{children:["Inside the ",(0,t.jsx)(n.code,{children:"kilt-rocks"})," project directory, install the ",(0,t.jsx)(n.strong,{children:"KILT SDK"}),", ",(0,t.jsx)(n.strong,{children:"Typescript"}),", ",(0,t.jsx)(n.strong,{children:"ts-node"}),", and ",(0,t.jsx)(n.strong,{children:"Axios"})," dependencies:"]}),(0,t.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(c.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm init -y\nnpm install @kiltprotocol/sdk-js ts-node typescript axios\n"})})}),(0,t.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn init -y\nyarn add @kiltprotocol/sdk-js ts-node typescript axios\n"})})}),(0,t.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm init -y\npnpm add @kiltprotocol/sdk-js ts-node typescript axios\n"})})})]}),(0,t.jsxs)(n.p,{children:["With the required dependencies installed, create a TypeScript file with ",(0,t.jsx)(n.code,{children:"touch quickstart.ts"}),"."]})]}),(0,t.jsxs)(c.Z,{value:"js",label:"Javascript",children:[(0,t.jsxs)(n.p,{children:["From inside the ",(0,t.jsx)(n.code,{children:"kilt-rocks"})," project directory, install the ",(0,t.jsx)(n.strong,{children:"KILT SDK"}),", ",(0,t.jsx)(n.strong,{children:"Node"}),", and ",(0,t.jsx)(n.strong,{children:"Axios"})," dependencies:"]}),(0,t.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(c.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm init -y\nnpm install @kiltprotocol/sdk-js node axios\n"})})}),(0,t.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn init -y\nyarn add @kiltprotocol/sdk-js node axios\n"})})}),(0,t.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm init -y\npnpm add @kiltprotocol/sdk-js node axios\n"})})})]}),(0,t.jsxs)(n.p,{children:["With the required dependencies installed, create a JavaScript file with ",(0,t.jsx)(n.code,{children:"touch quickstart.js"}),"."]}),(0,t.jsxs)(n.p,{children:["To enable ES modules in your project, add ",(0,t.jsx)(n.code,{children:'"type": "module"'})," to the ",(0,t.jsx)(n.code,{children:"package.json"})," file."]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Declare an ",(0,t.jsx)(n.code,{children:"async main"})," function in the ",(0,t.jsx)(n.code,{children:"quickstart.ts"})," file that executes the rest of the code in this quickstart and call the ",(0,t.jsx)(n.code,{children:"main()"})," function by default:"]}),"\n","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"async function main() {\n}\n\nmain()\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"With the setup completed, let's get started! \ud83d\udd25"})}),"\n",(0,t.jsx)(n.h3,{id:"import-the-kilt-sdk",children:"Import the KILT SDK"}),"\n",(0,t.jsxs)(n.p,{children:["Begin by importing the ",(0,t.jsx)(n.strong,{children:"KILT SDK"})," and ",(0,t.jsx)(n.strong,{children:"Axios"})," at the top of the file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as Kilt from '@kiltprotocol/sdk-js'\nimport axios from 'axios'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can access the SDK and all its functionality.\nThe next step is connecting to the ",(0,t.jsx)(n.strong,{children:"KILT blockchain"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"connect-to-the-kilt-blockchain",children:"Connect to the KILT Blockchain"}),"\n",(0,t.jsxs)(n.p,{children:["To perform operations that rely on the ",(0,t.jsx)(n.strong,{children:"KILT blockchain"}),", such as querying and verifying a credential, you must first connect to the ",(0,t.jsx)(n.strong,{children:"KILT blockchain"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Within the ",(0,t.jsx)(n.code,{children:"main"})," function, configure the SDK to connect to a KILT node using the ",(0,t.jsx)(n.code,{children:"Kilt.connect()"})," method:"]}),"\n",(0,t.jsxs)(l.Z,{groupId:"chain-choice",children:[(0,t.jsxs)(c.Z,{value:"pere",label:"Peregrine (Testnet)",default:!0,children:[(0,t.jsx)("p",{children:"Peregrine is the development blockchain.\nConnect to this network for testing and development purposes."}),(0,t.jsx)(o.Z,{className:"language-ts",funcEnd:"return",children:a})]}),(0,t.jsxs)(c.Z,{value:"spirit",label:"Spiritnet (Production)",children:[(0,t.jsx)("p",{children:"Spiritnet is the production blockchain.\nWhen you are ready to publish your DApp, connect to the Spiritnet network for production purposes."}),(0,t.jsx)(o.Z,{className:"language-ts",funcEnd:"return",children:d})]})]}),"\n",(0,t.jsxs)(n.p,{children:["To ensure proper cleanup, call the ",(0,t.jsx)(n.code,{children:"Kilt.disconnect()"})," function at the bottom of the ",(0,t.jsx)(n.code,{children:"main()"})," function.\nYou should add all other code before this function call:"]}),"\n",(0,t.jsx)(o.Z,{className:"language-ts",children:x}),"\n",(0,t.jsxs)(n.p,{children:["By adding ",(0,t.jsx)(n.code,{children:"await Kilt.disconnect()"}),", you ensure that the connection to the blockchain node is properly closed when the script finishes executing, which helps maintain the integrity of your application and is a good practice to follow."]}),"\n",(0,t.jsxs)(n.p,{children:["Run the code by calling the name of the file.\nIf you set up everything correctly, you should see no output showing that your code connected to the ",(0,t.jsx)(n.strong,{children:"KILT blockchain"}),"."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"ts-js-choice",children:[(0,t.jsx)(c.Z,{value:"ts",label:"Typescript",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn ts-node quickstart.ts\n"})})}),(0,t.jsx)(c.Z,{value:"js",label:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node quickstart.js\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"As you add to the code in this file, you can always run it with the same command."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Congratulations! \ud83d\udd25"})}),"\n",(0,t.jsx)(n.p,{children:"You have connected to a KILT blockchain node.\nThe next step is to start querying data from the blockchain."}),"\n",(0,t.jsx)(n.h2,{id:"query-a-kilt-identity",children:"Query a KILT Identity"}),"\n",(0,t.jsxs)(n.p,{children:["The following code queries information related to a ",(0,t.jsx)(n.strong,{children:"web3name"})," (",(0,t.jsx)(n.code,{children:"john_doe"}),") and uses it to retrieve the ",(0,t.jsx)(n.strong,{children:"KILT DID"})," linked to it."]}),"\n",(0,t.jsxs)(n.p,{children:["Between the ",(0,t.jsx)(n.code,{children:"Kilt.connect()"})," and ",(0,t.jsx)(n.code,{children:"Kilt.disconnect()"})," lines, add the following code:"]}),"\n",(0,t.jsx)(o.Z,{className:"language-ts",funcEnd:"return",children:h}),"\n",(0,t.jsx)(n.p,{children:"Try running the code and check the result."}),"\n",(0,t.jsxs)(n.p,{children:["Did you get the DID? You now have ",(0,t.jsx)(n.code,{children:"john_doe"}),"'s DID.\nThe next step is to see if ",(0,t.jsx)(n.code,{children:"john_doe"})," has any publicly linked KILT credentials to retrieve and verify."]}),"\n",(0,t.jsx)(n.h2,{id:"retrieve-and-verify-a-credential",children:"Retrieve and Verify a Credential"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"KILT DID"})," can expose services that allow external resources to be linked to the DID.\n",(0,t.jsx)(n.strong,{children:"KILT credentials"})," represent one type of external resource."]}),"\n",(0,t.jsxs)(n.p,{children:["You can retrieve the ",(0,t.jsx)(n.strong,{children:"services"})," attached to John Doe's DID and see if they link to any public credentials to ",(0,t.jsx)(n.strong,{children:"query"})," and ",(0,t.jsx)(n.strong,{children:"verify"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code after the code you added in the previous step but before the ",(0,t.jsx)(n.code,{children:"await Kilt.disconnect()"}),".\nIt retrieves the services exposed by the DID found for ",(0,t.jsx)(n.code,{children:"john_doe"}),":"]}),"\n",(0,t.jsx)(o.Z,{className:"language-ts",funcEnd:"return",children:p}),"\n",(0,t.jsx)(n.p,{children:"The code should print endpoints as JSON."}),"\n",(0,t.jsxs)(n.p,{children:["The next step is to see if you can find a credential among them.\nYou do this by selecting one of the endpoints and querying the URL to see if it returns a KILT credential collection as described in the ",(0,t.jsx)(n.a,{href:"https://github.com/KILTprotocol/spec-KiltPublishedCredentialCollectionV1",children:"KiltPublishedCredentialCollectionV1 specification"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code after the code you added in the previous step but before ",(0,t.jsx)(n.code,{children:"await Kilt.disconnect()"}),":"]}),"\n",(0,t.jsx)(r.Z,{funcEnd:"return",children:u}),"\n",(0,t.jsx)(n.p,{children:"If the script completes without errors, you retrieved the published credential using the URL specified in the service."}),"\n",(0,t.jsxs)(n.p,{children:["The next step is to make sure the credential is ",(0,t.jsx)(n.strong,{children:"valid"})," and has a valid ",(0,t.jsx)(n.strong,{children:"structure"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The following code outputs a string depending on whether the credential is valid, revoked, or not valid.\nAdd it before ",(0,t.jsx)(n.code,{children:"await Kilt.disconnect()"}),":"]}),"\n",(0,t.jsx)(o.Z,{className:"language-ts",children:j}),"\n",(0,t.jsxs)(n.p,{children:["Run the code and wait to see if you can retrieve ",(0,t.jsx)(n.strong,{children:"and"})," verify one of John Doe's credentials!"]}),"\n",(0,t.jsx)(n.admonition,{title:"Next steps",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you want to explore more of KILT's features, read our ",(0,t.jsx)(n.a,{href:"/docs/concepts/what-is-kilt",children:"Concepts section"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If you want to dive deeper into the SDK, read the next section, ",(0,t.jsx)(n.a,{href:"/docs/develop/sdk/cookbook/dids/light-did-creation",children:"the KILT Cookbook"}),"."]}),"\n"]})})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},6793:(e,n,i)=>{"use strict";i.d(n,{Z:()=>o});i(7294);var t=i(9286),s=i(5893);const o=e=>{let{children:n,funcName:i="main",funcEnd:o="}",snippets:r,leadingSpaces:l=2,...c}=e;const d=n.toString().split(/\r?\n/);let a="";if(r)a=JSON.parse(r).map((e=>Array.isArray(e)?d.slice(e[0],e[1]).map((e=>e.slice(l))).join("\n"):e)).join("\n");else if(i){let e,n;for(let t=0;t<d.length;t++)if(d[t].includes(i)){if(e=t,d[t].includes(" {"))break}else if(d[t].includes(" {")&&void 0!==e){e=t;break}for(let i=d.length-1;i>0;i--)if(d[i].includes(o)){n=i;break}a=d.slice(e+1,n).map((e=>e.slice(l))).join("\n")}return(0,s.jsx)(t.Z,{...c,children:a})}},1909:(e,n,i)=>{"use strict";i.d(n,{Z:()=>u});var t=i(7294),s=i(2263),o=i(2175),r=i(4935),l=i(4990),c=i(9966),d=i(4866),a=i(5162),h=i(9286),p=i(5893);const u=e=>{let{children:n,fileName:i,...u}=e;const j=n,[x,f]=(0,t.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:m}}}=(0,s.Z)(),g=(0,t.useMemo)((()=>{const{code:e}=(0,o.transform)(j,{plugins:["transform-typescript"],retainLines:!0});return e}),[j]);(0,t.useEffect)((()=>{r.WU(g,{parser:"babel",plugins:[l.Z,c.ZP],...m}).then(f)}),[m,g]);const y=[{fileName:i?`${i}.ts`:void 0,fileContents:j,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:x,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.Z,{groupId:"ts-js-choice",children:y.map((e=>(0,p.jsx)(a.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(h.Z,{...u,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}},9747:(e,n,i)=>{"use strict";i.d(n,{Z:()=>u});var t=i(7294),s=i(2263),o=i(2175),r=i(4935),l=i(4990),c=i(9966),d=i(4866),a=i(5162),h=i(6793),p=i(5893);const u=e=>{let{children:n,fileName:i,...u}=e;const j=n,[x,f]=(0,t.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:m}}}=(0,s.Z)(),g=(0,t.useMemo)((()=>{const{code:e}=(0,o.transform)(j,{plugins:["transform-typescript"],retainLines:!0});return e}),[j]);(0,t.useEffect)((()=>{r.WU(g,{parser:"babel",plugins:[l.Z,c.ZP],...m}).then(f)}),[m,g]);const y=[{fileName:i?`${i}.ts`:void 0,fileContents:j,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:x,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.Z,{groupId:"ts-js-choice",children:y.map((e=>(0,p.jsx)(a.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(h.Z,{...u,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);