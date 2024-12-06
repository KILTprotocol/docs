(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[345],{5764:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5764,e.exports=t},9176:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var n=i(4848),o=i(8453),r=i(3172);const a="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createDriversLicenseCType(\n  creator: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.ICType> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Create a new CType definition.\n  const ctype = Kilt.CType.fromProperties(`Drivers License by ${creator}`, {\n    name: {\n      type: 'string'\n    },\n    age: {\n      type: 'integer'\n    },\n    id: {\n      type: 'string'\n    }\n  })\n\n  // Generate a creation tx.\n  const encodedCtype = Kilt.CType.toChain(ctype)\n  const ctypeCreationTx = api.tx.ctype.add(encodedCtype)\n  // Sign it with the right DID key.\n  const authorizedCtypeCreationTx = await Kilt.Did.authorizeTx(\n    creator,\n    ctypeCreationTx,\n    signCallback,\n    submitterAccount.address\n  )\n  // Submit the creation tx to the KILT blockchain\n  // using the KILT account specified in the creation operation.\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedCtypeCreationTx,\n    submitterAccount\n  )\n\n  return ctype\n}\n",s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function fetchCType(\n  ctypeId: Kilt.ICType['$id']\n): Promise<Kilt.CType.ICTypeDetails> {\n  // Example CType ID: kilt:ctype:0x329a2a5861ea63c250763e5e4c4d4a18fe4470a31e541365c7fb831e5432b940\n  return Kilt.CType.fetchFromChain(ctypeId)\n}\n",c={id:"ctype-creation",title:"Create a CType"},l=void 0,p={id:"develop/sdk/cookbook/claiming/ctype-creation",title:"Create a CType",description:"Every KILT credential has to conform to a CType.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/ctype-creation",permalink:"/docs/develop/sdk/cookbook/claiming/ctype-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md",tags:[],version:"current",lastUpdatedAt:1733496053e3,sidebarPosition:1,frontMatter:{id:"ctype-creation",title:"Create a CType"},sidebar:"sdk",previous:{title:"Unlink an Account From a KILT DID",permalink:"/docs/develop/sdk/cookbook/account_linking/account-unlink"},next:{title:"Request an Attestation",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-request"}},d={},h=[{value:"Retrieve a CType from its ID",id:"retrieve-a-ctype-from-its-id",level:2}];function y(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Every KILT credential has to conform to a CType.\nA CType describes which properties a credential has and what type these properties have.\nCTypes must be registered on the Spiritnet blockchain.\nTo learn more about CTypes, see the ",(0,n.jsx)(t.a,{href:"/docs/concepts/credentials/ctypes",children:"CType concept section"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The creation of a CType in KILT involves two steps: the definition of a CType and the anchoring of its hash on the KILT blockchain."}),"\n",(0,n.jsx)(t.admonition,{title:"DID required",type:"info",children:(0,n.jsxs)(t.p,{children:["The creator of a CType is required to have a full DID with an attestation key.\nTo see how to manage DIDs, please refer to the ",(0,n.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/dids/full-did-update",children:"DID section"}),"."]})}),"\n",(0,n.jsxs)(t.admonition,{title:"CTypes are unique",type:"info",children:[(0,n.jsx)(t.p,{children:"The creation of a new CType requires the CType hash to be unique.\nBefore writing a new CType, Attesters should check whether there is already an existing CType which matches their requirements."}),(0,n.jsxs)(t.p,{children:["Visit our ",(0,n.jsx)(t.a,{href:"https://github.com/KILTprotocol/ctype-index",children:"CType index repository"})," for a non-exhaustive list of existing CTypes."]})]}),"\n",(0,n.jsx)(t.p,{children:"The following snippets show how to create a CType:"}),"\n",(0,n.jsx)(r.A,{children:a}),"\n",(0,n.jsx)(t.h2,{id:"retrieve-a-ctype-from-its-id",children:"Retrieve a CType from its ID"}),"\n",(0,n.jsx)(t.p,{children:"CTypes can be queried directly from any KILT archive nodes.\nThe following example shows how to query a CType using the SDK:"}),"\n",(0,n.jsx)(r.A,{children:s})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},3172:(e,t,i)=>{"use strict";i.d(t,{A:()=>y});var n=i(6540),o=i(4586),r=i(6352),a=i(8463),s=i(5283),c=i(6745),l=i(1470),p=i(9365),d=i(1432),h=i(4848);const y=e=>{let{children:t,fileName:i,...y}=e;const m=t,[u,f]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:C}}}=(0,o.A)(),T=(0,n.useMemo)((()=>{const{code:e}=(0,r.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),t=["./generateAccount","./generateKeypairs","./ctypeSchema","./createClaim","./generateLightDid","../attester/ctypeSchema","../claimer/generateLightDid","../claimer/generateCredential","./claimer/createPresentation","./claimer/generateKeypairs","./claimer/generateLightDid"];let i=e.replace(/from\s+['"](.+)['"]/g,((e,i)=>t.includes(i)?`from '${i}.js'`:e));return i=i.replace("if (require.main === module)","if (process.argv[1] === new URL(import.meta.url).pathname)"),i}),[m]);(0,n.useEffect)((()=>{a.GP(T,{parser:"babel",plugins:[s.A,c.Ay],...C}).then(f)}),[C,T]);const g=[{fileName:i?`${i}.ts`:void 0,fileContents:m,fileID:"ts",fileLabel:"Typescript"},{fileName:i?`${i}.js`:void 0,fileContents:u,fileID:"js",fileLabel:"Javascript"}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(l.A,{groupId:"ts-js-choice",children:g.map((e=>(0,h.jsx)(p.A,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,h.jsx)(d.A,{...y,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);