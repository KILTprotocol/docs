(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8936],{5380:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=5380,e.exports=n},1262:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>f,toc:()=>u});var i=t(5893),s=t(1151),r=t(1909);const a="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function main() {\n  const emailCType: Kilt.ICType = {\n    $id: 'kilt:ctype:0xae5bc64e500eb576b7b137288cec5d532094e103be46872f1ad54641e477d9fe',\n    $schema:\n      'ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/',\n    title: 'Email',\n    properties: {\n      Email: {\n        type: 'string'\n      }\n    },\n    type: 'object',\n    additionalProperties: false\n  }\n\n  console.log(emailCType)\n}\n",o="import { randomAsHex } from '@polkadot/util-crypto'\n\n// Store somewhere in the backend.\nexport function generateRequestChallenge() {\n  return randomAsHex(24)\n}\n",c="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function main({\n  verifierDidUri,\n  session,\n  requestChallenge\n}: {\n  verifierDidUri: Kilt.DidUri\n  session: {\n    encryptionKeyUri: Kilt.DidResourceUri\n  }\n  requestChallenge: string\n}): {\n  message: Kilt.IMessage\n} {\n  // The `session` was created earlier in your frontend. Only the session DID URI is sent to your backend.\n  const { did: claimerSessionDidUri } = Kilt.Did.parse(session.encryptionKeyUri)\n\n  // The message is constructed in your backend\n  const message = Kilt.Message.fromBody(\n    {\n      content: {\n        cTypes: [\n          {\n            // the hash of the email CType\n            cTypeHash:\n              '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac',\n            requiredProperties: ['Email']\n          }\n        ],\n        challenge: requestChallenge\n      },\n      type: 'request-credential'\n    },\n    verifierDidUri,\n    claimerSessionDidUri\n  )\n\n  return { message }\n}\n",l="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main({\n  message,\n  verifierDidUri,\n  verifierKeys,\n  session\n}: {\n  message: Kilt.IMessage\n  verifierDidUri: Kilt.DidUri\n  verifierKeys: {\n    authentication: Kilt.KiltKeyringPair\n    encryption: Kilt.KiltEncryptionKeypair\n    attestation: Kilt.KiltKeyringPair\n    delegation: Kilt.KiltKeyringPair\n  }\n  session: {\n    encryptionKeyUri: Kilt.DidResourceUri\n    send: (message: Kilt.IEncryptedMessage) => Promise<void>\n  }\n}) {\n  const { document: verifierDidDoc } = await Kilt.Did.resolve(verifierDidUri)\n  if (!verifierDidDoc) {\n    throw new Error('The verifier DID must exist')\n  }\n  const verifierEncryptionKey = verifierDidDoc.keyAgreement?.[0]\n  if (!verifierEncryptionKey) {\n    throw new Error('The verifier DID must have a key agreement key')\n  }\n\n  // Create a callback that uses the DID encryption key to encrypt the message.\n  const encryptCallback: Kilt.EncryptCallback = async ({\n    data,\n    peerPublicKey\n  }) => {\n    const { box, nonce } = Kilt.Utils.Crypto.encryptAsymmetric(\n      data,\n      peerPublicKey,\n      verifierKeys.encryption.secretKey\n    )\n    return {\n      data: box,\n      nonce,\n      keyUri: `${verifierDidDoc.uri}${verifierEncryptionKey.id}`\n    }\n  }\n\n  const encryptedMessage = await Kilt.Message.encrypt(\n    message,\n    encryptCallback,\n    session.encryptionKeyUri\n  )\n\n  // Finally, send the encrypted message to the extension.\n  // While the above code will be executed on the server, this must happen in\n  // the frontend since it's dispatching the message to the browser extension.\n  await session.send(encryptedMessage)\n}\n",d="import '@kiltprotocol/augment-api'\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\ntype ListenCallback = (message: Kilt.IEncryptedMessage) => Promise<void>\n\n// eslint-disable-next-line @typescript-eslint/no-unused-vars\nfunction isTrustedAttester(_attester: Kilt.DidUri): boolean {\n  return true\n}\n\nexport async function main({\n  session,\n  verifierKeys\n}: {\n  session: { listen: (call: ListenCallback) => ReturnType<ListenCallback> }\n  verifierKeys: {\n    authentication: Kilt.KiltKeyringPair\n    encryption: Kilt.KiltEncryptionKeypair\n    attestation: Kilt.KiltKeyringPair\n    delegation: Kilt.KiltKeyringPair\n  }\n}) {\n  async function processInBackend(message: Kilt.IEncryptedMessage) {\n    // Create a callback that uses the DID encryption key to decrypt the message.\n    const decryptCallback: Kilt.DecryptCallback = async ({\n      data,\n      nonce,\n      peerPublicKey\n    }) => {\n      const result = Kilt.Utils.Crypto.decryptAsymmetric(\n        { box: data, nonce },\n        peerPublicKey,\n        verifierKeys.encryption.secretKey\n      )\n      if (!result) {\n        throw new Error('Cannot decrypt')\n      }\n      return {\n        data: result\n      }\n    }\n\n    const decryptedMessage = await Kilt.Message.decrypt(\n      message,\n      decryptCallback\n    )\n\n    if (decryptedMessage.body.type !== 'submit-credential') {\n      throw new Error('Unexpected message type')\n    }\n    const credential = decryptedMessage.body.content[0]\n\n    const { revoked, attester } =\n      await Kilt.Credential.verifyPresentation(credential)\n\n    if (revoked) {\n      throw new Error(\"Credential has been revoked and hence it's not valid.\")\n    }\n    if (isTrustedAttester(attester)) {\n      console.log(\n        \"The claim is valid. Claimer's email:\",\n        credential.claim.contents.Email\n      )\n    }\n  }\n\n  // In the frontend we wait for messages from the browser extension and forward them to the server.\n  await session.listen(async (message: Kilt.IEncryptedMessage) => {\n    processInBackend(message)\n  })\n}\n",h={id:"dapp-verifier",title:"Verifying a Credential"},p=void 0,f={id:"develop/dApp/dapp-verifier",title:"Verifying a Credential",description:"This section demonstrates how to build a basic verifier according to the Credential API Specification.",source:"@site/docs/develop/07_dApp/04_verifier.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/dapp-verifier",permalink:"/docs/develop/dApp/dapp-verifier",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/04_verifier.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:4,frontMatter:{id:"dapp-verifier",title:"Verifying a Credential"},sidebar:"dApp",previous:{title:"Setting Up the Communication Session",permalink:"/docs/develop/dApp/session"}},y={},u=[{value:"Request a Credential Presentation",id:"request-a-credential-presentation",level:2},{value:"Verify the Presentation",id:"verify-the-presentation",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This section demonstrates how to build a basic verifier according to the ",(0,i.jsx)(n.a,{href:"https://github.com/KILTprotocol/spec-ext-credential-api",children:"Credential API Specification"}),".\nBefore continuing, please make sure you have already set up the ",(0,i.jsx)(n.a,{href:"/docs/develop/dApp/session",children:"communication session"})," and ",(0,i.jsx)(n.a,{href:"/docs/develop/dApp/well-known-did-config",children:"Well-Known DID Configuration"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This guide explains specifically how a web server can request a credential presentation from one of its visitors (the claimer).\nAfter the browser extension verified the Well-Known DID Configuration and the encrypted communication channel between the extension and the server was established, the web server can request the credential presentation.\nThis is a two step process."}),"\n",(0,i.jsxs)(n.p,{children:["First the server sends a message to the extension that request the presentation of a credential.\nSince we don't want to see just any credential, but expect specific content, we also require that the credential conforms to a specific ",(0,i.jsx)(n.a,{href:"/docs/concepts/credentials/ctypes",children:"CType"}),".\nWhen the extension receives the request, it will prompt the user to select a credential that should be presented to the server.\nThe user can also choose to reject this request and not to show any presentation."]}),"\n",(0,i.jsx)(n.p,{children:"The second step is to verify the received credential.\nAfter the user chooses the credential, the extension will pass a response to the website which contains the credential presentation.\nThe server of that website needs to ensure that this presentation is actually valid."}),"\n",(0,i.jsx)(n.h2,{id:"request-a-credential-presentation",children:"Request a Credential Presentation"}),"\n",(0,i.jsxs)(n.p,{children:["Before the website can request a credential, it needs the type of credential (CType) that it wants to request.\nIn this guide the website requests an email address that is owned by the DID.\nFor that it uses the Email CType.\nYou can search through existing CTypes in the ",(0,i.jsx)(n.a,{href:"https://github.com/KILTprotocol/ctype-index",children:"CType Index"}),"."]}),"\n",a,"\n",(0,i.jsx)(n.p,{children:"After settled on a CType, the server can build the request for the visitor.\nSince we want to ensure that the presentation of the credential is fresh, the server first has to create a random challenge.\nThe presentation must include this challenge and since it's random, the presentation must be created and signed from scratch.\nThis ensures that it's not possible to record a presentation and just send this, pretending to be the owner of the DID.\nThe challenge can be generated using the polkadot crypto utilities:"}),"\n",(0,i.jsx)(r.Z,{children:o}),"\n",(0,i.jsxs)(n.p,{children:["With the challenge the server can construct the ",(0,i.jsx)(n.code,{children:"request-credential"})," message.\nThe request is sent to the light DID (",(0,i.jsx)(n.code,{children:"claimerSessionDid"}),") that is used to encrypt the messages (see ",(0,i.jsx)(n.a,{href:"/docs/develop/dApp/session",children:"Session"})," for more information)."]}),"\n",c,"\n",(0,i.jsx)(n.admonition,{title:"Privacy",type:"note",children:(0,i.jsxs)(n.p,{children:["The credential itself doesn't need to be issued to this DID since the light DID is only used to encrypt the messages.\nWe don't use the full DID of the claimer to establish the encrypted communication, so that the claimer first can ensure the origin of the ",(0,i.jsx)(n.code,{children:"request-credential"})," message."]})}),"\n",(0,i.jsx)(n.p,{children:"After the server has built the message object, it must encrypt the message for the claimer.\nOnce the message is encrypted the server can pass on the message to the extension."}),"\n",l,"\n",(0,i.jsx)(n.h2,{id:"verify-the-presentation",children:"Verify the Presentation"}),"\n",(0,i.jsxs)(n.p,{children:["After sending the ",(0,i.jsx)(n.code,{children:"request-credential"})," message to the extension, the verifier listens for a message of type ",(0,i.jsx)(n.code,{children:"submit-credential"})," in response."]}),"\n",(0,i.jsx)(n.p,{children:"After the response from the extension is received, forwarded to the server and decrypted, the verifier must check that it has the expected CType and that it contains a valid credential.\nSince everyone can run an attestation service, you need to make sure that you also verify that the attester is trusted."}),"\n",d,"\n",(0,i.jsx)(n.p,{children:"That's it! Your verifier has successfully requested and verified a credential."})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},1909:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});t(7294);var i=t(2263),s=t(2175),r=t(4935),a=t(4990),o=t(9966),c=t(4866),l=t(5162),d=t(9286),h=t(5893);const p=e=>{let{children:n,fileName:t,...p}=e;const f=n,{code:y}=(0,s.transform)(f,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:u}}}=(0,i.Z)(),m=r.WU(y,{parser:"babel",plugins:[a.Z,o.ZP],...u}).finally((()=>{var e=[{fileName:t?`${t}.ts`:void 0,fileContents:f,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:m,fileID:"js",fileLabel:"Javascript"}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.Z,{groupId:"ts-js-choice",children:e.map((e=>(0,h.jsx)(l.Z,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,h.jsx)(d.Z,{...p,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}))}}}]);