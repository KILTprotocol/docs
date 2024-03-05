(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7736],{48952:e=>{function s(e){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}s.keys=()=>[],s.resolve=s,s.id=48952,e.exports=s},94032:(e,s,t)=>{"use strict";t.r(s),t.d(s,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=t(17624),a=t(4552),o=t(96020);const i="/* eslint-disable @typescript-eslint/no-unused-vars */\n\nexport function main() {\n  const MAX_ACCEPTED_AGE = 60_000 // ms -> 1 minute\n  const MIN_ACCEPTED_AGE = -1_000 // allow for some imprecision in system time\n  const submissions = new Map<string, number>()\n}\n",r="/* eslint-disable @typescript-eslint/no-unused-vars */\n\nimport { blake2AsHex } from '@polkadot/util-crypto'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function main(\n  submissions: Map<string, number>,\n  decrypted: Kilt.IMessage,\n  MIN_ACCEPTED_AGE: number,\n  MAX_ACCEPTED_AGE: number\n) {\n  // Is messageId fresh and createdAt recent?\n  const messageId =\n    decrypted.messageId || blake2AsHex(JSON.stringify(decrypted))\n  if (\n    submissions.has(messageId) ||\n    decrypted.createdAt < Date.now() - MAX_ACCEPTED_AGE ||\n    decrypted.createdAt > Date.now() - MIN_ACCEPTED_AGE\n  ) {\n    // no -> reject message\n  } else {\n    submissions.set(messageId, decrypted.createdAt)\n    // yes -> accept & process message\n  }\n}\n",c="/* eslint-disable @typescript-eslint/no-unused-vars */\n\nexport function main(\n  submissions: Map<string, number>,\n  MAX_ACCEPTED_AGE: number\n) {\n  setInterval(() => {\n    const outdatedTimestamp = Date.now() - MAX_ACCEPTED_AGE\n    submissions.forEach((timestamp, hash) => {\n      if (timestamp < outdatedTimestamp) submissions.delete(hash)\n    })\n  }, 1000)\n}\n",l={id:"replay_protection",title:"Protect Against Replay Attacks"},d=void 0,p={id:"develop/sdk/cookbook/messaging/replay_protection",title:"Protect Against Replay Attacks",description:"Whenever data travels on a public network, even when encrypted or signed, the communicating parties need to make sure they never accept and process a message more than once to protect against exploits by malicious third parties (so-called replay attacks).",source:"@site/docs/develop/01_sdk/02_cookbook/06_messaging/02_replay_protection.md",sourceDirName:"develop/01_sdk/02_cookbook/06_messaging",slug:"/develop/sdk/cookbook/messaging/replay_protection",permalink:"/docs/develop/sdk/cookbook/messaging/replay_protection",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/06_messaging/02_replay_protection.md",tags:[],version:"current",lastUpdatedAt:1709637884,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:2,frontMatter:{id:"replay_protection",title:"Protect Against Replay Attacks"},sidebar:"sdk",previous:{title:"Generate a Message",permalink:"/docs/develop/sdk/cookbook/messaging/messaging_book"},next:{title:"SignCallback",permalink:"/docs/develop/sdk/cookbook/signCallback"}},m={},u=[];function g(e){const s={a:"a",li:"li",ol:"ol",p:"p",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Whenever data travels on a public network, even when encrypted or signed, the communicating parties need to make sure they never accept and process a message more than once to protect against exploits by malicious third parties (so-called replay attacks).\nWhen requesting and submitting credential presentations, vulnerabilities for replay attacks can be prevented by requesting that the Claimer sign a unique piece of data as part of the presentation, as shown in the ",(0,n.jsx)(s.a,{href:"/docs/develop/sdk/cookbook/claiming/presentation-creation",children:"Verification Cookbook section"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"However, protection against replay attacks can also happen on the message layer.\nTo help prevent these types of attacks, KILT messages are timestamped and expose a unique identifier as part of their encrypted content, which therefore cannot be tampered with.\nIt is good practice to impose limits on an acceptable range for timestamps on incoming messages and to keep a record of the ids of previous submissions, which can be purged after their acceptance range has run out.\nThis way, any resubmission is either rejected because its id is known to the recipient, or because its timestamp is too old.\nBelow you can find example code of how this could be implemented."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Define acceptance range and set up a record of past submissions:"}),"\n"]}),"\n",(0,n.jsx)(o.c,{className:"language-ts",children:i}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"Check record for each incoming message and update if accepted:"}),"\n"]}),"\n",(0,n.jsx)(o.c,{className:"language-ts",children:r}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Purge at regular intervals:"}),"\n"]}),"\n",(0,n.jsx)(o.c,{className:"language-ts",children:c})]})}function h(e={}){const{wrapper:s}={...(0,a.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},96020:(e,s,t)=>{"use strict";t.d(s,{c:()=>u});var n=t(11504),a=t(28264),o=t(46352),i=t(58440),r=t(14300),c=t(28168),l=t(61268),d=t(87768),p=t(1608),m=t(17624);const u=e=>{let{children:s,fileName:t,...u}=e;const g=s,[h,f]=(0,n.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:k}}}=(0,a.c)(),b=(0,n.useMemo)((()=>{const{code:e}=(0,o.transform)(g,{plugins:["transform-typescript"],retainLines:!0});return e}),[g]);(0,n.useEffect)((()=>{i.E9(b,{parser:"babel",plugins:[r.c,c.cp],...k}).then(f)}),[k,b]);const y=[{fileName:t?`${t}.ts`:void 0,fileContents:g,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:h,fileID:"js",fileLabel:"Javascript"}];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l.c,{groupId:"ts-js-choice",children:y.map((e=>(0,m.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,m.jsx)(p.c,{...u,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);