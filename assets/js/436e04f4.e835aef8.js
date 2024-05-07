"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[310],{77232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var a=n(17624),s=n(4552),i=n(1608);const o='{\n  "ciphertext": "0xde0ffa39b3cc4de956e65498aa6f5eafaa587441ee0682eef6b3dc3db5fd452be05d9d3b696b5ed8267addf86125d661aeff66cd234a2df144073efbc03001cf36f1c40af1a310a9acbd10974de000517b5712ea6f19649df88be14e92961d979203c56ddb5f9eb7fc50e8cba537b4db656739a91f0419f15d9e1aeaa6c6d40c494f5217b2c2505c6f07c4a4ac1d65e3ed2825c0a672bc54a0b17936aecda3b1611a2cf0c35c84f8af48081d92a9d9e965d61f9c5c60f2104236506a83801541c45b2413a849447f40d74f86c58f52e65e9125997b63ef2f289305e386dc3d97f65c68bc6a01d8e567fe1323d83b5a2ef22877f1aadf0a60873f423fb423c812e4e3cec958f515d7a73bf3309254622948beebed211c862567067858df2121d1678c0578e90600f9bb127d605f1a54a01a7f19b64108d1b5febf285e4dcf7d62c0765645699d7b41751aa89fbe9b8064ba2f202fea361b6e5a643e759acd779d58ab541061956dd7a0f8a8230c3ee87355bd2c391356df765752f0e0e937ac2f9412afc1e26588028a2973e4276a30ab853356cd4b0afb",\n  "nonce": "0x010101010101010101010101010101010101010101010101",\n  "senderKeyUri": "did:kilt:4qWb21mMmWjbgsVuQPJ1f9VFQMbyZwDSFC5wTzJZC91ehVam#0x6833db3ef3c37f865f769ac12b7c70e84d5d219622c941d3fa5199ac6be8ba8f",\n  "receiverKeyUri": "did:kilt:4t9FPVbcN42UMxt3Z2Y4Wx38qPL8bLduAB11gLZSwn5hVEfH#0x04e74f9e54eb74179d3661aa2b3dc927b457c05d15b9ce0d50a9a3d58bcf9153"\n}\n',c={id:"messaging",title:"KILT Messaging"},r=void 0,d={id:"concepts/messaging",title:"KILT Messaging",description:"Distributed trust on the internet only works if credentials and other information can be exchanged securely, and communicating parties can be confident that they are not being fooled or eavesdropped on by bad actors.",source:"@site/docs/concepts/08_messaging.md",sourceDirName:"concepts",slug:"/concepts/messaging",permalink:"/docs/concepts/messaging",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/08_messaging.md",tags:[],version:"current",lastUpdatedAt:1715070662,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:8,frontMatter:{id:"messaging",title:"KILT Messaging"},sidebar:"concepts",previous:{title:"Dapp developer",permalink:"/docs/concepts/dip/dapp-developer"},next:{title:"Terms and Quotes",permalink:"/docs/concepts/advanced_concepts/terms-and-quotes"}},h={},l=[];function p(e){const t={a:"a",admonition:"admonition",em:"em",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Distributed trust on the internet only works if credentials and other information can be exchanged securely, and communicating parties can be confident that they are not being fooled or eavesdropped on by bad actors.\nTo help with that, KILT provides a ",(0,a.jsx)(t.strong,{children:"transport-agnostic messaging layer"})," that helps with securely exchanging data between the respective owners of two DIDs."]}),"\n",(0,a.jsxs)(t.p,{children:["This messaging layer provides ",(0,a.jsx)(t.strong,{children:"authenticated end-to-end encryption"})," \u2013 the gold standard in secure communication \u2013 in a way that hides the security of the technologies used for transporting the message over the internet \u2013\xa0be it sending the encrypted messages via email, or posting them to and fetching them from a centralized or decentralized messaging service."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The messaging layer enables secure communication between two digital identities \u2013 DIDs.\nA necessary condition for secure communication with a given person or organization is to make sure that the DID on the other side of the communication channel is really controlled by the other party in order to avoid attacks such as ",(0,a.jsx)(t.em,{children:"Man in the Middle"})," (MitM) attacks."]})}),"\n",(0,a.jsxs)(t.p,{children:["To be able to communicate, the two DIDs need to expose ",(0,a.jsx)(t.strong,{children:"key agreement public keys"})," for that purpose (a.k.a., an ",(0,a.jsx)(t.strong,{children:"encryption key"}),").\nIn order to send a message to the other party, a DID owner (let's call her ",(0,a.jsx)(t.strong,{children:"Alice"}),") looks up her peer's (let's call him ",(0,a.jsx)(t.strong,{children:"Bob"}),") encryption public key, which can be part of either a ",(0,a.jsx)(t.a,{href:"/docs/concepts/did#full-dids",children:"full DID"})," or a ",(0,a.jsx)(t.a,{href:"/docs/concepts/did#light-dids",children:"light DID"}),".\nUsing this key in combination with her secret encryption key, ",(0,a.jsx)(t.strong,{children:"Alice"})," can now encrypt the message such that only she and ",(0,a.jsx)(t.strong,{children:"Bob"})," can decrypt it. A ",(0,a.jsx)(t.strong,{children:"nonce"})," introduces randomness and uniqueness into encryption operations, making it highly challenging for an attacker to predict or replicate the encryption process.\nEach message has a different ",(0,a.jsx)(t.strong,{children:"nonce"}),", resulting in the creation of a unique encryption context for every message."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Bob"})," can decrypt this message after looking up ",(0,a.jsx)(t.strong,{children:"Alice's"})," encryption key.\nAn additional ",(0,a.jsx)(t.em,{children:"message authentication code"})," (MAC) added during encryption and verified on decryption protects against manipulation of the encrypted data.\nAs long as both parties keep their secret keys well protected, the combination of these measures allows ",(0,a.jsx)(t.strong,{children:"Bob"})," to be confident that if the message decrypts successfully, it could have only been encrypted by ",(0,a.jsx)(t.strong,{children:"Alice"})," and has not been read or tampered with by some malicious third party while in transport."]}),"\n",(0,a.jsx)(t.p,{children:"While encrypted, the message travels in a compact and privacy-preserving envelope format that only exposes data that the recipient needs to be able to decrypt."}),"\n",(0,a.jsx)(i.c,{className:"language-json",children:o}),"\n",(0,a.jsx)(t.p,{children:"The encrypted message not only references the DIDs of sender and recipient, it also references the unique identifier of the keys that were used in encryption.\nTherefore, this scheme still works if a DID should expose multiple encryption keys from which a message sender may choose."}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["While no one can read or change what is inside an encrypted message even if they intercept it while traveling on the network, a sophisticated attacker may try to guess what is inside and trick either side of the channel by resubmitting a copy of that message later.\nFor a detailed developer-oriented guide about how to protect against ",(0,a.jsx)(t.em,{children:"replay attacks"}),", see our ",(0,a.jsx)(t.a,{href:"/docs/develop/sdk/cookbook/messaging/replay_protection",children:"Replay Protection Cookbook section"}),"."]})})]})}function f(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);