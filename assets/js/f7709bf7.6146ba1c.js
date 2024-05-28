(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2788],{48952:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=48952,e.exports=n},81776:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var i=t(17624),s=t(4552),r=t(8552),a=t(96020);const o="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function main() {\n  const emailCType: Kilt.ICType = {\n    $id: 'kilt:ctype:0xae5bc64e500eb576b7b137288cec5d532094e103be46872f1ad54641e477d9fe',\n    $schema:\n      'ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/',\n    title: 'Email',\n    properties: {\n      Email: {\n        type: 'string'\n      }\n    },\n    type: 'object',\n    additionalProperties: false\n  }\n\n  console.log(emailCType)\n}\n",c="import { randomAsHex } from '@polkadot/util-crypto'\n\n// Store somewhere in the backend.\nexport function generateRequestChallenge() {\n  return randomAsHex(24)\n}\n",l="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function main({\n  verifierDidUri,\n  session,\n  requestChallenge\n}: {\n  verifierDidUri: Kilt.DidUri\n  session: {\n    encryptionKeyUri: Kilt.DidResourceUri\n  }\n  requestChallenge: string\n}): {\n  message: Kilt.IMessage\n} {\n  // The `session` was created earlier in your frontend. Only the session DID URI is sent to your backend.\n  const { did: claimerSessionDidUri } = Kilt.Did.parse(session.encryptionKeyUri)\n\n  // The message is constructed in your backend\n  const message = Kilt.Message.fromBody(\n    {\n      content: {\n        cTypes: [\n          {\n            // the hash of the email CType\n            cTypeHash:\n              '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac',\n            requiredProperties: ['Email']\n          }\n        ],\n        challenge: requestChallenge\n      },\n      type: 'request-credential'\n    },\n    verifierDidUri,\n    claimerSessionDidUri\n  )\n\n  return { message }\n}\n",d="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main({\n  message,\n  verifierDidUri,\n  verifierKeys,\n  session\n}: {\n  message: Kilt.IMessage\n  verifierDidUri: Kilt.DidUri\n  verifierKeys: {\n    authentication: Kilt.KiltKeyringPair\n    encryption: Kilt.KiltEncryptionKeypair\n    attestation: Kilt.KiltKeyringPair\n    delegation: Kilt.KiltKeyringPair\n  }\n  session: {\n    encryptionKeyUri: Kilt.DidResourceUri\n    send: (message: Kilt.IEncryptedMessage) => Promise<void>\n  }\n}) {\n  const { document: verifierDidDoc } = await Kilt.Did.resolve(verifierDidUri)\n  if (!verifierDidDoc) {\n    throw new Error('The verifier DID must exist')\n  }\n  const verifierEncryptionKey = verifierDidDoc.keyAgreement?.[0]\n  if (!verifierEncryptionKey) {\n    throw new Error('The verifier DID must have a key agreement key')\n  }\n\n  // Create a callback that uses the DID encryption key to encrypt the message.\n  const encryptCallback: Kilt.EncryptCallback = async ({\n    data,\n    peerPublicKey\n  }) => {\n    const { box, nonce } = Kilt.Utils.Crypto.encryptAsymmetric(\n      data,\n      peerPublicKey,\n      verifierKeys.encryption.secretKey\n    )\n    return {\n      data: box,\n      nonce,\n      keyUri: `${verifierDidDoc.uri}${verifierEncryptionKey.id}`\n    }\n  }\n\n  const encryptedMessage = await Kilt.Message.encrypt(\n    message,\n    encryptCallback,\n    session.encryptionKeyUri\n  )\n\n  // Finally, send the encrypted message to the extension.\n  // While the above code will be executed on the server, this must happen in\n  // the frontend since it's dispatching the message to the browser extension.\n  await session.send(encryptedMessage)\n}\n",h="import '@kiltprotocol/augment-api'\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\ntype ListenCallback = (message: Kilt.IEncryptedMessage) => Promise<void>\n\n// eslint-disable-next-line @typescript-eslint/no-unused-vars\nfunction isTrustedAttester(_attester: Kilt.DidUri): boolean {\n  return true\n}\n\nexport async function main({\n  session,\n  verifierKeys\n}: {\n  session: { listen: (call: ListenCallback) => ReturnType<ListenCallback> }\n  verifierKeys: {\n    authentication: Kilt.KiltKeyringPair\n    encryption: Kilt.KiltEncryptionKeypair\n    attestation: Kilt.KiltKeyringPair\n    delegation: Kilt.KiltKeyringPair\n  }\n}) {\n  async function processInBackend(message: Kilt.IEncryptedMessage) {\n    // Create a callback that uses the DID encryption key to decrypt the message.\n    const decryptCallback: Kilt.DecryptCallback = async ({\n      data,\n      nonce,\n      peerPublicKey\n    }) => {\n      const result = Kilt.Utils.Crypto.decryptAsymmetric(\n        { box: data, nonce },\n        peerPublicKey,\n        verifierKeys.encryption.secretKey\n      )\n      if (!result) {\n        throw new Error('Cannot decrypt')\n      }\n      return {\n        data: result\n      }\n    }\n\n    const decryptedMessage = await Kilt.Message.decrypt(\n      message,\n      decryptCallback\n    )\n\n    if (decryptedMessage.body.type !== 'submit-credential') {\n      throw new Error('Unexpected message type')\n    }\n    const credential = decryptedMessage.body.content[0]\n\n    const { revoked, attester } =\n      await Kilt.Credential.verifyPresentation(credential)\n\n    if (revoked) {\n      throw new Error(\"Credential has been revoked and hence it's not valid.\")\n    }\n    if (isTrustedAttester(attester)) {\n      console.log(\n        \"The claim is valid. Claimer's email:\",\n        credential.claim.contents.Email\n      )\n    }\n  }\n\n  // In the frontend we wait for messages from the browser extension and forward them to the server.\n  await session.listen(async (message: Kilt.IEncryptedMessage) => {\n    processInBackend(message)\n  })\n}\n",p={id:"dapp-verifier",title:"Verifying a Credential"},f=void 0,u={id:"develop/dApp/dapp-verifier",title:"Verifying a Credential",description:"This section demonstrates how to build a basic verifier according to the Credential API Specification.",source:"@site/docs/develop/07_dApp/04_verifier.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/dapp-verifier",permalink:"/docs/develop/dApp/dapp-verifier",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/04_verifier.md",tags:[],version:"current",lastUpdatedAt:1716901802,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:4,frontMatter:{id:"dapp-verifier",title:"Verifying a Credential"},sidebar:"dApp",previous:{title:"Setting Up the Communication Session",permalink:"/docs/develop/dApp/session"}},y={},m=[{value:"Request a Credential Presentation",id:"request-a-credential-presentation",level:2},{value:"Verify the Presentation",id:"verify-the-presentation",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This section demonstrates how to build a basic verifier according to the ",(0,i.jsx)(n.a,{href:"https://github.com/KILTprotocol/spec-ext-credential-api",children:"Credential API Specification"}),".\nBefore continuing, please make sure you have already set up the ",(0,i.jsx)(n.a,{href:"/docs/develop/dApp/session",children:"communication session"})," and ",(0,i.jsx)(n.a,{href:"/docs/develop/dApp/well-known-did-config",children:"Well-Known DID Configuration"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This guide explains specifically how a web server can request a credential presentation from one of its visitors (the claimer).\nAfter the browser extension verified the Well-Known DID Configuration and the encrypted communication channel between the extension and the server was established, the web server can request the credential presentation.\nThis is a two step process."}),"\n",(0,i.jsxs)(n.p,{children:["First the server sends a message to the extension that request the presentation of a credential.\nSince we don't want to see just any credential, but expect specific content, we also require that the credential conforms to a specific ",(0,i.jsx)(n.a,{href:"/docs/concepts/credentials/ctypes",children:"CType"}),".\nWhen the extension receives the request, it will prompt the user to select a credential that should be presented to the server.\nThe user can also choose to reject this request and not to show any presentation."]}),"\n",(0,i.jsx)(n.p,{children:"The second step is to verify the received credential.\nAfter the user chooses the credential, the extension will pass a response to the website which contains the credential presentation.\nThe server of that website needs to ensure that this presentation is actually valid."}),"\n",(0,i.jsx)(n.h2,{id:"request-a-credential-presentation",children:"Request a Credential Presentation"}),"\n",(0,i.jsxs)(n.p,{children:["Before the website can request a credential, it needs the type of credential (CType) that it wants to request.\nIn this guide the website requests an email address that is owned by the DID.\nFor that it uses the Email CType.\nYou can search through existing CTypes in the ",(0,i.jsx)(n.a,{href:"https://github.com/KILTprotocol/ctype-index",children:"CType Index"}),"."]}),"\n",(0,i.jsx)(r.c,{dropTail:"1",children:o}),"\n",(0,i.jsx)(n.p,{children:"After settled on a CType, the server can build the request for the visitor.\nSince we want to ensure that the presentation of the credential is fresh, the server first has to create a random challenge.\nThe presentation must include this challenge and since it's random, the presentation must be created and signed from scratch.\nThis ensures that it's not possible to record a presentation and just send this, pretending to be the owner of the DID.\nThe challenge can be generated using the polkadot crypto utilities:"}),"\n",(0,i.jsx)(a.c,{children:c}),"\n",(0,i.jsxs)(n.p,{children:["With the challenge the server can construct the ",(0,i.jsx)(n.code,{children:"request-credential"})," message.\nThe request is sent to the light DID (",(0,i.jsx)(n.code,{children:"claimerSessionDid"}),") that is used to encrypt the messages (see ",(0,i.jsx)(n.a,{href:"/docs/develop/dApp/session",children:"Session"})," for more information)."]}),"\n",(0,i.jsx)(a.c,{children:l}),"\n",(0,i.jsx)(n.admonition,{title:"Privacy",type:"note",children:(0,i.jsxs)(n.p,{children:["The credential itself doesn't need to be issued to this DID since the light DID is only used to encrypt the messages.\nWe don't use the full DID of the claimer to establish the encrypted communication, so that the claimer first can ensure the origin of the ",(0,i.jsx)(n.code,{children:"request-credential"})," message."]})}),"\n",(0,i.jsx)(n.p,{children:"After the server has built the message object, it must encrypt the message for the claimer.\nOnce the message is encrypted the server can pass on the message to the extension."}),"\n",(0,i.jsx)(a.c,{children:d}),"\n",(0,i.jsx)(n.h2,{id:"verify-the-presentation",children:"Verify the Presentation"}),"\n",(0,i.jsxs)(n.p,{children:["After sending the ",(0,i.jsx)(n.code,{children:"request-credential"})," message to the extension, the verifier listens for a message of type ",(0,i.jsx)(n.code,{children:"submit-credential"})," in response."]}),"\n",(0,i.jsx)(n.p,{children:"After the response from the extension is received, forwarded to the server and decrypted, the verifier must check that it has the expected CType and that it contains a valid credential.\nSince everyone can run an attestation service, you need to make sure that you also verify that the attester is trusted."}),"\n",(0,i.jsx)(r.c,{children:h}),"\n",(0,i.jsx)(n.p,{children:"That's it! Your verifier has successfully requested and verified a credential."})]})}function v(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},73484:(e,n,t)=>{"use strict";t.d(n,{c:()=>r});t(11504);var i=t(1608),s=t(17624);const r=e=>{let{children:n,funcName:t="main",leadingSpaces:r=2,dropHead:a=0,dropTail:o=0,...c}=e;const l=new RegExp(`${t}\\((?:.|\\n|\\r)*?\\)(?::(?:.|\\n|\\r)*?)?\\s*{(?:\\n|\\r)*(?<body>(?:.|\\n|\\r)+)\\}`),d=n.toString().match(l)??{};let h="";if(d?.groups?.body){const{body:e}=d.groups,n=e.split(/\r?\n/);h=n.map((e=>e.slice(r))).slice(parseInt(a),n.length-parseInt(o)-1).join("\n")}else h=n.toString();return(0,s.jsx)(i.c,{...c,children:h})}},96020:(e,n,t)=>{"use strict";t.d(n,{c:()=>f});var i=t(11504),s=t(28264),r=t(46352),a=t(58440),o=t(14300),c=t(28168),l=t(61268),d=t(87768),h=t(1608),p=t(17624);const f=e=>{let{children:n,fileName:t,...f}=e;const u=n,[y,m]=(0,i.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:g}}}=(0,s.c)(),v=(0,i.useMemo)((()=>{const{code:e}=(0,r.transform)(u,{plugins:["transform-typescript"],retainLines:!0});return e}),[u]);(0,i.useEffect)((()=>{a.E9(v,{parser:"babel",plugins:[o.c,c.cp],...g}).then(m)}),[g,v]);const b=[{fileName:t?`${t}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:y,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.c,{groupId:"ts-js-choice",children:b.map((e=>(0,p.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(h.c,{...f,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}},8552:(e,n,t)=>{"use strict";t.d(n,{c:()=>f});var i=t(11504),s=t(28264),r=t(46352),a=t(58440),o=t(14300),c=t(28168),l=t(61268),d=t(87768),h=t(73484),p=t(17624);const f=e=>{let{children:n,fileName:t,...f}=e;const u=n,[y,m]=(0,i.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:g}}}=(0,s.c)(),v=(0,i.useMemo)((()=>{const{code:e}=(0,r.transform)(u,{plugins:["transform-typescript"],retainLines:!0});return e}),[u]);(0,i.useEffect)((()=>{a.E9(v,{parser:"babel",plugins:[o.c,c.cp],...g}).then(m)}),[g,v]);const b=[{fileName:t?`${t}.ts`:void 0,fileContents:u,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:y,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.c,{groupId:"ts-js-choice",children:b.map((e=>(0,p.jsx)(d.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(h.c,{...f,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);