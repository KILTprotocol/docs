(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[378],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},6793:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(7294),i=n(6823);const a=e=>{let{children:t,funcName:n="main",funcEnd:a="}",snippets:r,leadingSpaces:s=2,...l}=e;const p=t.split(/\r?\n/);let c="";if(r)c=JSON.parse(r).map((e=>Array.isArray(e)?p.slice(e[0],e[1]).map((e=>e.slice(s))).join("\n"):e)).join("\n");else if(n){let e,t;for(let o=0;o<p.length;o++)if(p[o].includes(n)){if(e=o,p[o].includes(" {"))break}else if(p[o].includes(" {")&&void 0!==e){e=o;break}for(let n=p.length-1;n>0;n--)if(p[n].includes(a)){t=n;break}c=p.slice(e+1,t).map((e=>e.slice(s))).join("\n")}return o.createElement(i.Z,l,c)}},9747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7462),i=n(7294),a=n(2263),r=n(3945),s=n(8182),l=n(2175),p=n(5488),c=n(5162),d=n(6793);const u=e=>{let{children:t,fileName:n,...u}=e;const m=t,{code:k}=(0,l.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:h}}}=(0,a.Z)(),f=(0,r.format)(k,{parser:s.parsers.babel.parse,...h}),g=n?`${n}.ts`:void 0,y=n?`${n}.js`:void 0;return i.createElement(p.Z,{groupId:"ts-js-choice"},i.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},i.createElement(d.Z,(0,o.Z)({},u,{className:"language-ts",title:g}),m)),i.createElement(c.Z,{value:"js",label:"Javascript"},i.createElement(d.Z,(0,o.Z)({},u,{className:"language-js",title:y}),f)))}},8877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>k});var o=n(7462),i=(n(7294),n(3905)),a=n(6823),r=n(6793),s=n(9747),l=n(5488),p=n(5162);const c={id:"quickstart",title:"Quickstart"},d=void 0,u={unversionedId:"develop/sdk/quickstart",id:"develop/sdk/quickstart",title:"Quickstart",description:"The following guide will give you a starting point to begin with KILT.",source:"@site/docs/develop/01_sdk/01_quickstart.md",sourceDirName:"develop/01_sdk",slug:"/develop/sdk/quickstart",permalink:"/docs/develop/sdk/quickstart",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/01_quickstart.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:1,frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"sdk",next:{title:"Create a Light DID",permalink:"/docs/develop/sdk/cookbook/dids/light-did-creation"}},m={},k=[{value:"Setup",id:"setup",level:2},{value:"Import the KILT SDK",id:"import-the-kilt-sdk",level:3},{value:"Connect to the KILT Blockchain",id:"connect-to-the-kilt-blockchain",level:3},{value:"Query the KILT Blockchain",id:"query-the-kilt-blockchain",level:2},{value:"Retrieve and Verify a Credential",id:"retrieve-and-verify-a-credential",level:2}],h={toc:k};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following guide will give you a starting point to begin with KILT.\nYou will learn how to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Import the ",(0,i.kt)("strong",{parentName:"li"},"KILT SDK")," into a project"),(0,i.kt)("li",{parentName:"ol"},"Connect to the ",(0,i.kt)("strong",{parentName:"li"},"KILT blockchain")),(0,i.kt)("li",{parentName:"ol"},"Query a ",(0,i.kt)("strong",{parentName:"li"},"web3name")," to get its ",(0,i.kt)("strong",{parentName:"li"},"DID")),(0,i.kt)("li",{parentName:"ol"},"Verify a ",(0,i.kt)("strong",{parentName:"li"},"credential"),", published via a ",(0,i.kt)("strong",{parentName:"li"},"DID service endpoint"))),(0,i.kt)("p",null,"After completing the quickstart guide, you should have gained a better understanding of KILT through hands-on experience.\nThe guide requires some experience with javascript and command-line tools.\nWe will recommend guides to other tutorials to dive deeper into some of the topics."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"We will focus on creating a new project from scratch, which will require a little setup.\nFirst, we need to create a new project in a new directory.\nFor this, we run ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir kilt-rocks && cd kilt-rocks"),"."),(0,i.kt)(l.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"  From inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"kilt-rocks")," project directory, install the ",(0,i.kt)("strong",{parentName:"p"},"KILT SDK"),", ",(0,i.kt)("strong",{parentName:"p"},"Ts-node"),", ",(0,i.kt)("strong",{parentName:"p"},"Axios")," and ",(0,i.kt)("strong",{parentName:"p"},"Typescript"),":"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\nnpm install @kiltprotocol/sdk-js axios ts-node typescript\n"))),(0,i.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\nyarn add @kiltprotocol/sdk-js axios ts-node typescript\n")))),(0,i.kt)("p",null,"  With all the required dependencies set, just create a new (empty) script file with ",(0,i.kt)("inlineCode",{parentName:"p"},"touch quickstart.ts"),".")),(0,i.kt)(p.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,i.kt)("p",null,"  From inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"kilt-rocks")," project directory, install the ",(0,i.kt)("strong",{parentName:"p"},"KILT SDK"),", ",(0,i.kt)("strong",{parentName:"p"},"Node")," and ",(0,i.kt)("strong",{parentName:"p"},"Axios"),":"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\nnpm install @kiltprotocol/sdk-js axios node\n"))),(0,i.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\nyarn add @kiltprotocol/sdk-js axios node\n")))),(0,i.kt)("p",null,"  With all the required dependencies set, just create a new (empty) script file with ",(0,i.kt)("inlineCode",{parentName:"p"},"touch quickstart.js"),"."))),(0,i.kt)(l.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"  After you have imported the SDK you will be able to access the functionalities that KILT provides.\nWe are making a new file that contents the compiler configuration for typescript."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"touch tsconfig.json\n")),(0,i.kt)("p",null,"  Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," add in the following value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "compilerOptions": {\n    "module": "CommonJS"\n  },\n}\n'))),(0,i.kt)(p.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,i.kt)("p",null,"  After you have imported the SDK you will be able to access the functionalities that KILT provides.\nInside the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," add in the value ",(0,i.kt)("inlineCode",{parentName:"p"},'"type": "module"'),"."))),(0,i.kt)("p",null,"Let's first declare our ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function that will execute our script:"),(0,i.kt)(a.Z,{className:"language-ts",mdxType:"CodeBlock"},"export async function main() {\n  console.log('Hello, world!')\n}\n"),(0,i.kt)("p",null,"If the setup is correct you can execute the script by calling the name of the file using Node."),(0,i.kt)(l.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node quickstart.ts\n"))),(0,i.kt)(p.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node quickstart.js\n")))),(0,i.kt)("p",null,"As we will extend the code in this file, you can always excute it with the same command."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Let's get started! \ud83d\udd25")),(0,i.kt)("h3",{id:"import-the-kilt-sdk"},"Import the KILT SDK"),(0,i.kt)("p",null,"Let's begin by importing the ",(0,i.kt)("strong",{parentName:"p"},"KILT SDK")," and ",(0,i.kt)("strong",{parentName:"p"},"Axios"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as Kilt from '@kiltprotocol/sdk-js'\nimport axios from 'axios'\n")),(0,i.kt)("p",null,"Now you are able to access the SDK and all its functionality.\nWe will move onto connecting to the ",(0,i.kt)("strong",{parentName:"p"},"KILT blockchain"),"."),(0,i.kt)("h3",{id:"connect-to-the-kilt-blockchain"},"Connect to the KILT Blockchain"),(0,i.kt)("p",null,"Connecting to and disconnecting from the KILT blockchain is required for any operation that relies on the KILT blockchain, such as ",(0,i.kt)("strong",{parentName:"p"},"querying and verifying a credential"),"."),(0,i.kt)("p",null,"Still within the same ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function, you need to configure the SDK to connect to a ",(0,i.kt)("strong",{parentName:"p"},"KILT node"),".\nFor this, the SDK exposes ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Kilt.connect()"))," to configure the address of the node to connect to."),(0,i.kt)("p",null,"We will use the official ",(0,i.kt)("strong",{parentName:"p"},"Spiritnet")," address:"),(0,i.kt)(r.Z,{className:"language-ts",funcEnd:"return",mdxType:"SnippetBlock"},"import type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<ApiPromise> {\n  await Kilt.connect('wss://spiritnet.kilt.io/')\n\n  const api = Kilt.ConfigService.get('api')\n\n  return api\n}\n"),(0,i.kt)("p",null,"After establishing a connection, you have access to the chain, but let's not forget to ",(0,i.kt)("strong",{parentName:"p"},"close")," any connections when we are done!\nConnections to blockchain nodes should be dropped when no longer needed: to do that simply call the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kilt.disconnect()")," function at the bottom of ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function."),(0,i.kt)(r.Z,{className:"language-ts",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<void> {\n  await Kilt.disconnect()\n}\n"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!\nYou have connected to a Spiritnet node.\nLet's now start querying some data from the chain!")),(0,i.kt)("h2",{id:"query-the-kilt-blockchain"},"Query the KILT Blockchain"),(0,i.kt)("p",null,"We will be querying information related to a ",(0,i.kt)("strong",{parentName:"p"},"web3name")," (",(0,i.kt)("inlineCode",{parentName:"p"},"john_doe"),"), and using them to retrieve the ",(0,i.kt)("strong",{parentName:"p"},"KILT DID")," linked to it.\nIn between the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kilt.connect()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Kilt.disconnect()")," lines, add the following code:"),(0,i.kt)(r.Z,{className:"language-ts",funcEnd:"return",mdxType:"SnippetBlock"},"import type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(api: ApiPromise): Promise<Kilt.DidUri | null> {\n  const encodedJohnDoeDetails = await api.call.did.queryByWeb3Name('john_doe')\n\n  // This function will throw if johnDoeOwner does not exist\n  const {\n    document: { uri }\n  } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails)\n  console.log(`My name is john_doe and this is my DID: \"${uri}\"`)\n\n  return uri\n}\n"),(0,i.kt)("p",null,"Try executing it and check the result."),(0,i.kt)("p",null,"Did you get the DID? Nice work! You now have ",(0,i.kt)("inlineCode",{parentName:"p"},"john_doe"),"'s DID.\nNow let's see if John Doe has any public KILT credentials that we could retrieve and verify!"),(0,i.kt)("h2",{id:"retrieve-and-verify-a-credential"},"Retrieve and Verify a Credential"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"KILT DID")," can expose service endpoints, which allow external resources to be linked to the DID.\nOne type of external resource is represented by, you guessed it, ",(0,i.kt)("strong",{parentName:"p"},"KILT credentials"),"!\nTherefore, let's see how we can retrieve the ",(0,i.kt)("strong",{parentName:"p"},"service endpoints")," of John Doe's DID and see if they link to any public credentials for us to ",(0,i.kt)("strong",{parentName:"p"},"query")," and ",(0,i.kt)("strong",{parentName:"p"},"verify"),"."),(0,i.kt)("p",null,"We will keep adding code below what we just added.\nThe code snippet retrieves the service endpoints exposed by the DID we found for ",(0,i.kt)("inlineCode",{parentName:"p"},"john_doe"),":"),(0,i.kt)(r.Z,{className:"language-ts",funcEnd:"return",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  uri: Kilt.DidUri\n): Promise<Kilt.DidServiceEndpoint[]> {\n  const johnDoeDidDocument = await Kilt.Did.resolve(uri)\n  console.log(`John Doe's DID Document:`)\n  console.log(JSON.stringify(johnDoeDidDocument, null, 2))\n\n  const endpoints = johnDoeDidDocument?.document?.service\n  if (!endpoints) {\n    console.log('No endpoints for the DID.')\n    return []\n  }\n\n  console.log('Endpoints:')\n  console.log(JSON.stringify(endpoints, null, 2))\n\n  return endpoints\n}\n"),(0,i.kt)("p",null,"If the snippet printed some endpoints, congratulations!\nLet's see if we can find a credential among them."),(0,i.kt)("p",null,"We can select one of the endpoints and query the URL to see if it returns a KILT credential\xa0collection as described in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/spec-KiltPublishedCredentialCollectionV1"},"KiltPublishedCredentialCollectionV1 specification"),":"),(0,i.kt)(s.Z,{funcEnd:"return",mdxType:"TsJsSnippet"},"import axios from 'axios'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  endpoints: Kilt.DidServiceEndpoint[]\n): Promise<Kilt.ICredential> {\n  const {\n    data: [{ credential }]\n  } = await axios.get<Kilt.KiltPublishedCredentialCollectionV1>(\n    endpoints[0].serviceEndpoint[0]\n  )\n\n  return credential\n}\n"),(0,i.kt)("p",null,"If the script completes with no errors, it means that we were able to retrieve the published credential using the URL specified in the service endpoint."),(0,i.kt)("p",null,"We will now have to make sure the credential is ",(0,i.kt)("strong",{parentName:"p"},"valid")," and has a valid ",(0,i.kt)("strong",{parentName:"p"},"structure"),"."),(0,i.kt)("p",null,"It is then time to verify the credential.\nThis will be indicated by the result of the ",(0,i.kt)("strong",{parentName:"p"},"verification")," process as shown in the snippet below:"),(0,i.kt)(r.Z,{className:"language-ts",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(credential: Kilt.ICredential): Promise<void> {\n  try {\n    await Kilt.Credential.verifyCredential(credential)\n\n    const api = Kilt.ConfigService.get('api')\n    const attestationInfo = await api.query.attestation.attestations(\n      credential.rootHash\n    )\n    const attestation = Kilt.Attestation.fromChain(\n      attestationInfo,\n      credential.rootHash\n    )\n    // Verify that the credential is not revoked. Exception caught by the catch {} block below.\n    if (attestation.revoked) {\n      throw new Error('The credential has been revoked, hence it is not valid.')\n    }\n    console.log(\n      \"John Doe's credential is valid!\",\n      JSON.stringify(credential, null, 2)\n    )\n  } catch {\n    console.log(\"John Doe's credential is not valid.\")\n  }\n}\n"),(0,i.kt)("p",null,"Now excute the script wait to see whether we can successfully retrieve ",(0,i.kt)("strong",{parentName:"p"},"and")," verify one of John Doe's credentials!"),(0,i.kt)("p",null,"Now it's time to query the credential's ",(0,i.kt)("inlineCode",{parentName:"p"},"rootHash")," from the blockchain to see if it has been ",(0,i.kt)("strong",{parentName:"p"},"attested")," by someone:"),(0,i.kt)(r.Z,{className:"language-ts",funcEnd:"return",mdxType:"SnippetBlock"},"/* eslint-disable no-empty */\n\nimport type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  api: ApiPromise,\n  credential: Kilt.ICredential\n): Promise<boolean> {\n  const encodedAttestationInfo = await api.query.attestation.attestations(\n    credential.rootHash\n  )\n  // This function will throw if the attestation does not exist.\n  const attestationInfo = Kilt.Attestation.fromChain(\n    encodedAttestationInfo,\n    credential.rootHash\n  )\n\n  // Return false if attestation.revoked is true, or true otherwise.\n  const revokedStatus = !attestationInfo.revoked\n\n  console.log('Revoked status of the attestation', revokedStatus)\n\n  return revokedStatus\n}\n"),(0,i.kt)("p",null,"Now, the last step is to excute the complete script and see if you get a valid attestation for John Doe's credential!"),(0,i.kt)("p",null,"Was it successful? Nice Job!"),(0,i.kt)("p",null,"If you want to explore more of KILT's features, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/what-is-kilt"},"Concepts section"),".\nIf you want to dive deeper into the SDK, please advance to the next section: ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/light-did-creation"},"the KILT Cookbook"),"."))}f.isMDXComponent=!0}}]);