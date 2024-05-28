(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5980],{48952:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=48952,e.exports=t},56280:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var n=i(17624),o=i(4552),s=i(96020);const a="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function createSimpleLightDid({\n  authentication\n}: {\n  authentication: Kilt.NewLightDidVerificationKey\n}): Kilt.DidDocument {\n  // Create a light DID from the generated authentication key.\n  const lightDID = Kilt.Did.createLightDidDocument({\n    authentication: [authentication]\n  })\n  console.log(lightDID.uri)\n\n  return lightDID\n}\n",r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function createCompleteLightDid({\n  authentication,\n  keyAgreement\n}: {\n  authentication: Kilt.NewLightDidVerificationKey\n  keyAgreement: Kilt.NewDidEncryptionKey\n}): Kilt.DidDocument {\n  // Example service for the DID.\n  const service: Kilt.DidServiceEndpoint[] = [\n    {\n      id: '#my-service',\n      type: ['KiltPublishedCredentialCollectionV1'],\n      serviceEndpoint: ['http://example.domain.org']\n    }\n  ]\n\n  // Create the KILT light DID with the information generated.\n  const lightDID = Kilt.Did.createLightDidDocument({\n    authentication: [authentication],\n    keyAgreement: [keyAgreement],\n    service\n  })\n  console.log(lightDID.uri)\n\n  return lightDID\n}\n",d={id:"light-did-creation",title:"Create a Light DID"},l=void 0,c={id:"develop/sdk/cookbook/dids/light-did-creation",title:"Create a Light DID",description:"The creation of a light DID requires the generation of some keying material for keys that are to be used for authentication and encryption.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/light-did-creation",permalink:"/docs/develop/sdk/cookbook/dids/light-did-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md",tags:[],version:"current",lastUpdatedAt:1716901802,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:1,frontMatter:{id:"light-did-creation",title:"Create a Light DID"},sidebar:"sdk",previous:{title:"Generate DID keys",permalink:"/docs/develop/sdk/cookbook/dids/key-generation"},next:{title:"Create a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-creation"}},h={},p=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",ol:"ol",p:"p",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The creation of a light DID requires the generation of some keying material for keys that are to be used for authentication and encryption.\nFor the sake of ease of use, the example snippets below show how to use keys generated with a ",(0,n.jsx)(t.code,{children:"Keyring"}),", provided also by the ",(0,n.jsx)(t.code,{children:"@polkadot/api"})," library, to generate key pairs that are kept in memory and disappear at the end of the program execution, unless saved to some persistent storage."]}),"\n",(0,n.jsx)(t.p,{children:"The following is an example of how to create a light DID after creating an authentication keypair."}),"\n",(0,n.jsx)(s.c,{children:a}),"\n",(0,n.jsx)(t.p,{children:"For cases in which an encryption key and some services also need to be added to a light DID:"}),"\n",(0,n.jsx)(s.c,{children:r}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"In KILT, light DIDs are meant to be used in one of two cases:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["As ",(0,n.jsx)(t.em,{children:"ephemeral, one-time identifiers"})," when establishing new communication channels with untrusted parties."]}),"\n",(0,n.jsxs)(t.li,{children:["As an ",(0,n.jsx)(t.em,{children:"entrypoint into the KILT ecosystem"}),", i.e., to obtain one's first credentials and get acquainted with KILT."]}),"\n"]}),(0,n.jsxs)(t.p,{children:["As such, light DIDs do not support updates of any sort, but they retain the same identifier until they are upgraded to full DIDs.\nThey are not intended for use in complex and/or high-security use cases.\nIn those situations, a full DID should be used.\nVisit the ",(0,n.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/dids/full-did-creation",children:"next section"})," to see how to create and manage full DIDs."]})]})]})}function m(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},96020:(e,t,i)=>{"use strict";i.d(t,{c:()=>u});var n=i(11504),o=i(28264),s=i(46352),a=i(58440),r=i(14300),d=i(28168),l=i(61268),c=i(87768),h=i(1608),p=i(17624);const u=e=>{let{children:t,fileName:i,...u}=e;const m=t,[g,D]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:f}}}=(0,o.c)(),k=(0,n.useMemo)((()=>{const{code:e}=(0,s.transform)(m,{plugins:["transform-typescript"],retainLines:!0});return e}),[m]);(0,n.useEffect)((()=>{a.E9(k,{parser:"babel",plugins:[r.c,d.cp],...f}).then(D)}),[f,k]);const y=[{fileName:i?`${i}.ts`:void 0,fileContents:m,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:g,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.c,{groupId:"ts-js-choice",children:y.map((e=>(0,p.jsx)(c.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(h.c,{...u,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);