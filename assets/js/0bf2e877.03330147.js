(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4216],{48952:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=48952,e.exports=t},41756:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>g,toc:()=>p});var s=n(17624),r=n(4552),i=n(96020);const a="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function generateRequestCredentialMessage(\n  senderUri: Kilt.DidUri,\n  receiverUri: Kilt.DidUri,\n  cTypeHash: Kilt.CTypeHash\n) {\n  // Creating a challenge to submit to the receiver\n  const challenge = Kilt.Utils.UUID.generate()\n\n  // Sender uri is checked if it is a valid URI\n  Kilt.Did.validateUri(senderUri)\n  // Receiver uri is checked if it is a valid URI\n  Kilt.Did.validateUri(receiverUri)\n\n  // The content of the 'request-credential' message\n  // It includes a CType that is being requested, this can be for attestation or verification\n  // The sender is the trusted attester in the scenario\n  const requestCredentialContent = {\n    cTypeHash: cTypeHash,\n    trustedAttesters: [senderUri]\n  }\n\n  const messageBody: Kilt.IRequestCredential = {\n    type: 'request-credential',\n    content: { cTypes: [requestCredentialContent], challenge: challenge }\n  }\n\n  // The message will throw an Error if invalid\n  const message = Kilt.Message.fromBody(messageBody, senderUri, receiverUri)\n\n  console.log(`Generated message: ${JSON.stringify(message, null, 4)}`)\n\n  return message\n}\n",c="import * as Kilt from '@kiltprotocol/sdk-js'\nimport { useEncryptionCallback } from '../signCallback/useEncryptionCallback'\n\nexport async function encryptMessage(\n  message: Kilt.IMessage,\n  senderUri: Kilt.DidUri,\n  receiverUri: Kilt.DidUri,\n  keyAgreement: Kilt.KiltEncryptionKeypair\n): Promise<Kilt.IEncryptedMessage> {\n  const { document: senderDocument } = await Kilt.Did.resolve(senderUri)\n\n  const { document: receiverDocument } = await Kilt.Did.resolve(receiverUri)\n\n  const receiverKeyAgreementUri =\n    `${receiverUri}${receiverDocument.keyAgreement?.[0].id}` as Kilt.DidResourceUri\n  const senderKeyAgreeementUri =\n    `${senderUri}${senderDocument.keyAgreement?.[0].id}` as Kilt.DidResourceUri\n  // encrypt the message\n  const encryptedMessage = await Kilt.Message.encrypt(\n    message,\n    useEncryptionCallback({\n      keyAgreement,\n      keyAgreementUri: senderKeyAgreeementUri\n    }),\n    receiverKeyAgreementUri\n  )\n\n  console.log(`Encrypted Message: ${JSON.stringify(encryptedMessage, null, 4)}`)\n\n  return encryptedMessage\n}\n",o="import * as Kilt from '@kiltprotocol/sdk-js'\nimport { useDecryptionCallback } from '../signCallback/useDecryptionCallback'\n\nexport async function decryptMessage(\n  encryptedMessage: Kilt.IEncryptedMessage,\n  keyAgreement: Kilt.KiltEncryptionKeypair\n): Promise<Kilt.IMessage> {\n  // Decrypting the message to retrieve the content\n  const decryptedMessage = await Kilt.Message.decrypt(\n    encryptedMessage,\n    useDecryptionCallback(keyAgreement)\n  )\n\n  // Verifying this is a properly-formatted message\n  Kilt.Message.verify(decryptedMessage)\n\n  console.log(`Decrypted Message: ${JSON.stringify(decryptedMessage, null, 4)}`)\n\n  // Checking if the message type matches the expected checks\n  if (decryptedMessage.body.type !== 'request-credential') {\n    throw new Error('Not the correct body type')\n  }\n\n  // Destructing the message to receive the cTypes array to see what credentials\n  // Are valid for the given request\n  const { cTypes } = decryptedMessage.body.content\n\n  const { cTypeHash, trustedAttesters } = cTypes[0]\n\n  // The receiver can check if they have a valid credential that matches the cTypeHash\n  console.log('The sent cType hash :', cTypeHash)\n\n  // The trusted attesters is an array that includes the list of trusted entities\n  // The receiver can check if they have a given credential from the trusted list\n  console.log(`A list of trusted attesters DID :${trustedAttesters}`)\n\n  return decryptedMessage\n}\n",d={id:"messaging_book",title:"Generate a Message"},l=void 0,g={id:"develop/sdk/cookbook/messaging/messaging_book",title:"Generate a Message",description:"KILT defines a unicast messaging protocol",source:"@site/docs/develop/01_sdk/02_cookbook/06_messaging/01_messaging.md",sourceDirName:"develop/01_sdk/02_cookbook/06_messaging",slug:"/develop/sdk/cookbook/messaging/messaging_book",permalink:"/docs/develop/sdk/cookbook/messaging/messaging_book",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/06_messaging/01_messaging.md",tags:[],version:"current",lastUpdatedAt:1713371933,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:1,frontMatter:{id:"messaging_book",title:"Generate a Message"},sidebar:"sdk",previous:{title:"Revoke (and remove) Public Credentials",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-revocation"},next:{title:"Protect Against Replay Attacks",permalink:"/docs/develop/sdk/cookbook/messaging/replay_protection"}},h={},p=[{value:"Encryption",id:"encryption",level:2},{value:"Decryption",id:"decryption",level:2}];function y(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["KILT defines a ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Unicast",children:"unicast"})," messaging protocol"]}),"\n",(0,s.jsxs)(t.p,{children:["Each of the messages sent is encrypted using the ",(0,s.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/#key-agreement",children:"DID key agreement key"}),".\nA message consists of the sender's DID URI, the receiver's DID URI, the message type and the body.\nThere are multiple different message types, each of them with a different structure and containing different information.\nIn this example we are going to build a ",(0,s.jsx)(t.code,{children:"request-credential"})," message.\nThe message structure is checked and validated on by the KILT SDK to ensure the users are sending correctly structured messages."]}),"\n",(0,s.jsxs)(t.p,{children:["The following example here will generate a message by constructing the message content.\nThe message content includes a valid ",(0,s.jsx)(t.code,{children:"cTypeHash"})," and a list of ",(0,s.jsx)(t.code,{children:"trusted attesters"}),".\nThe message requires a ",(0,s.jsx)(t.code,{children:"messageBody"}),", sender and receiver uri."]}),"\n",(0,s.jsx)(i.c,{children:a}),"\n",(0,s.jsx)(t.h2,{id:"encryption",children:"Encryption"}),"\n",(0,s.jsxs)(t.p,{children:["The messages data are encrypted and decrypted using ",(0,s.jsx)(t.a,{href:"https://github.com/dchest/tweetnacl-js",children:"nacl's"})," 'x25519-xsalsa20-poly1305' algorithm, which provides repudiable authenticated encryption based on an x25519 key agreement protocol.\nThe DID holds keys for the encryption and decryption.\nThe key is called ",(0,s.jsx)(t.code,{children:"KeyAgreement"})," keys.\nThey may also be known as encryption keys."]}),"\n",(0,s.jsx)(t.p,{children:"The content of the object is converted from a serialized string to a byte array, which is passed into the callback function along with the sender's DID and key agreement public key of the receiver."}),"\n",(0,s.jsx)(t.p,{children:"The following example here will take a generated message and encrypt the message for the receiver to decrypt later."}),"\n",(0,s.jsx)(i.c,{children:c}),"\n",(0,s.jsx)(t.p,{children:"The encrypted data is converted into a hex string which is known as the ciphertext along with the nonce that was generated during encryption."}),"\n",(0,s.jsx)(t.h2,{id:"decryption",children:"Decryption"}),"\n",(0,s.jsx)(t.p,{children:"The decryption takes the encrypted message and decyphers its content.\nThe following example here will take a encrypted message and decrypt using the private key of the receiver.\nOnce decrypted, it checks the content is a valid message.\nThe decrypted data can be used for additional steps.\nAfter decrypting, the receiver may wish to present a credential from the trusted attester list with a given CType."}),"\n",(0,s.jsx)(i.c,{children:o})]})}function m(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},96020:(e,t,n)=>{"use strict";n.d(t,{c:()=>p});var s=n(11504),r=n(28264),i=n(46352),a=n(58440),c=n(14300),o=n(28168),d=n(61268),l=n(87768),g=n(1608),h=n(17624);const p=e=>{let{children:t,fileName:n,...p}=e;const y=t,[m,u]=(0,s.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:f}}}=(0,r.c)(),k=(0,s.useMemo)((()=>{const{code:e}=(0,i.transform)(y,{plugins:["transform-typescript"],retainLines:!0});return e}),[y]);(0,s.useEffect)((()=>{a.E9(k,{parser:"babel",plugins:[c.c,o.cp],...f}).then(u)}),[f,k]);const v=[{fileName:n?`${n}.ts`:void 0,fileContents:y,fileID:"ts",fileLabel:"Typescript"},{fileName:n?`${n}.js`:void 0,fileContents:m,fileID:"js",fileLabel:"Javascript"}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d.c,{groupId:"ts-js-choice",children:v.map((e=>(0,h.jsx)(l.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,h.jsx)(g.c,{...p,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);