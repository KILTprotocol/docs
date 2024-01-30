(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2297],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},9083:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=o(5893),s=o(1151),d=o(1909);const n="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function queryFullDid(\n  didUri: Kilt.DidUri\n): Promise<Kilt.DidDocument | null> {\n  const { metadata, document } = await Kilt.Did.resolve(didUri)\n  if (metadata.deactivated) {\n    console.log(`DID ${didUri} has been deleted.`)\n    return null\n  } else if (document === undefined) {\n    console.log(`DID ${didUri} does not exist.`)\n    return null\n  } else {\n    return document\n  }\n}\n",l={id:"did-query",title:"Resolve a DID"},r=void 0,a={id:"develop/sdk/cookbook/dids/did-query",title:"Resolve a DID",description:"Querying the state of a DID is called resolution.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/04_did_query.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/did-query",permalink:"/docs/develop/sdk/cookbook/dids/did-query",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/04_did_query.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:4,frontMatter:{id:"did-query",title:"Resolve a DID"},sidebar:"sdk",previous:{title:"Update a Full DID keys and service endpoints",permalink:"/docs/develop/sdk/cookbook/dids/full-did-update"},next:{title:"Delete a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-delete"}},c={},u=[];function p(e){const t={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Querying the state of a DID is called ",(0,i.jsx)(t.strong,{children:"resolution"}),".\nThe entity that queries the DID Document for a given DID, i.e., resolves it, is called a ",(0,i.jsx)(t.strong,{children:"resolver"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The KILT SDK provides such a resolver to use with KILT DIDs, as the snippet below shows:"}),"\n",(0,i.jsx)(d.Z,{children:n}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The DID resolver can resolve both light and full DIDs.\nFor a more in-depth explanation about the KILT DID method and resolution, refer to our ",(0,i.jsx)(t.a,{href:"https://github.com/KILTprotocol/spec-kilt-did",children:"specification"}),"."]})})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1909:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});o(7294);var i=o(2263),s=o(2175),d=o(4935),n=o(4990),l=o(9966),r=o(4866),a=o(5162),c=o(9286),u=o(5893);const p=e=>{let{children:t,fileName:o,...p}=e;const f=t,{code:D}=(0,s.transform)(f,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:h}}}=(0,i.Z)(),m=d.WU(D,{parser:"babel",plugins:[n.Z,l.ZP],...h}).finally((()=>{var e=[{fileName:o?`${o}.ts`:void 0,fileContents:f,fileID:"ts",fileLabel:"Typescript"},{fileName:o?`${o}.js`:void 0,fileContents:m,fileID:"js",fileLabel:"Javascript"}];return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(r.Z,{groupId:"ts-js-choice",children:e.map((e=>(0,u.jsx)(a.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,u.jsx)(c.Z,{...p,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}))}}}]);