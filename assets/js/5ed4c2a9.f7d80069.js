"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4671],{7352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(5893),s=n(1151);const o={id:"pallet-did",title:"DID pallet"},a=void 0,l={id:"develop/chain/pallets/pallet-did",title:"DID pallet",description:"In KILT a DID is a decentralized identifier that the user owns and controls.",source:"@site/docs/develop/02_chain/02_pallets/01_did.md",sourceDirName:"develop/02_chain/02_pallets",slug:"/develop/chain/pallets/pallet-did",permalink:"/docs/develop/chain/pallets/pallet-did",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/02_chain/02_pallets/01_did.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:1,frontMatter:{id:"pallet-did",title:"DID pallet"},sidebar:"chain",previous:{title:"Introduction",permalink:"/docs/develop/chain/introduction"},next:{title:"Deployments and Services",permalink:"/docs/develop/chain/deployments"}},r={},d=[{value:"Register a Full DID",id:"register-a-full-did",level:2},{value:"Use a Full DID",id:"use-a-full-did",level:2},{value:"Update a Full DID",id:"update-a-full-did",level:2},{value:"What About the Deposit?",id:"what-about-the-deposit",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In KILT a DID is a decentralized identifier that the user owns and controls.\nIt consists of a unique set of keys that can be used for different operations on the blockchain.\nFor an in-depth explanation see the ",(0,i.jsx)(t.a,{href:"https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md",children:"KILT DID spec"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'A DID may be a "light" DID, which is not stored on-chain, or a "full" on-chain DID.\nA light DID is issued by default, with the keys stored locally on your device.\nBy upgrading this to a full DID registered on the blockchain, all the keys associated with it can be retrieved from the KILT blockchain storage.'}),"\n",(0,i.jsx)(t.p,{children:"A full DID can then be used to perform certain on-chain actions which include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Writing CTypes to the chain"}),"\n",(0,i.jsx)(t.li,{children:"Writing attestations to the chain"}),"\n",(0,i.jsx)(t.li,{children:"Setting delegations"}),"\n",(0,i.jsx)(t.li,{children:"Doing key rotations on the DID keys"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"register-a-full-did",children:"Register a Full DID"}),"\n",(0,i.jsx)(t.p,{children:"A full DID is needed if the user wants to become an Attester or wants to setup delegations.\nA full DID also allows the user to embed a list of URLs, known as services, into the DID document so that they can be retrieved from the chain as part of the DID document.\nTo create a full DID the user first has to create some keys, and optionally some services:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"one authentication key for signing extrinsics from your DID"}),"\n",(0,i.jsx)(t.li,{children:"zero or more key agreement keys for encrypting messages that are sent to you"}),"\n",(0,i.jsx)(t.li,{children:"(optional) one attestation key for signing attestations"}),"\n",(0,i.jsx)(t.li,{children:"(optional) one delegation key for authorizing delegations"}),"\n",(0,i.jsx)(t.li,{children:"(optional) service that point to external hostings for others to find"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["After the relevant components have been created, they are ready to write the DID to the KILT blockchain.\nThe user then has to create the ",(0,i.jsx)(t.code,{children:"did::create"})," extrinsic and sign it with any KILT account that has enough funding to pay both the transaction fees and the DID deposit.\nThe extrinsic consists of"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"DidCreationDetails"})," object containing keys, services and the account id of the submitter for the creation"]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"DidSignature"})," which is a signature using your authentication key over the scale encoded ",(0,i.jsx)(t.code,{children:"DidCreationDetails"})," from above"]}),"\n",(0,i.jsx)(t.li,{children:"A regular signature authenticating the sender of the extrinsic"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The DID owner and the submitter can be two different parties.\nThis allows the creation of a DID without having to pay any fees or deposits.\nBeware that this also means that the DID creator gives up some power over the DID: The submitter who pays the deposit will be able to delete the DID from the blockchain and claim back its deposit.\nOnce the ",(0,i.jsx)(t.code,{children:"did::create"})," extrinsic is submitted and executed, the DID is written to the chain."]}),"\n",(0,i.jsx)(t.h2,{id:"use-a-full-did",children:"Use a Full DID"}),"\n",(0,i.jsx)(t.p,{children:"Once the DID is successfully registered on chain, it can be used to perform certain on-chain actions that are not possible to do with a regular account.\nThis includes the handling of attestations and CTypes, setting up trust hierarchies through delegations, managing web3names and much more."}),"\n",(0,i.jsxs)(t.p,{children:['Those actions need to be signed by the DID before they can be submitted to chain by any account that the DID owner specifies when signing.\nWe are naming those actions "DID-Calls".\nTo submit those there is a special extrinsic called ',(0,i.jsx)(t.code,{children:"submit_did_call"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The process of doing any DID-Call is always the same:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Construct the actual call you want to execute including all arguments of that extrinsic."}),"\n",(0,i.jsxs)(t.li,{children:["Wrap the call in a ",(0,i.jsx)(t.code,{children:"DidAuthorizedCallOperation"})," together with the","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Senders DID to indicate who wants this operation to happen"}),"\n",(0,i.jsx)(t.li,{children:"Senders DID tx_counter + 1 to prevent replay attacks"}),"\n",(0,i.jsx)(t.li,{children:"Current block number to prevent the operation being submitted too far in the future"}),"\n",(0,i.jsx)(t.li,{children:"Account of the submitter to allow the DID owner to specify who is allowed to submit"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Create a signature over the ",(0,i.jsx)(t.code,{children:"DidAuthorizedCallOperation"})," by scale-encoding it and signing it using the appropriate key","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Most operations require the authentication key of the DID to be used"}),"\n",(0,i.jsx)(t.li,{children:"Managing Attestations requires the attestation key"}),"\n",(0,i.jsx)(t.li,{children:"Managing Delegations requires the delegation key"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Construct the ",(0,i.jsx)(t.code,{children:"submit_did_call"})," extrinsic consisting of","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"DidAuthorizedCallOperation"})]}),"\n",(0,i.jsx)(t.li,{children:"The DID signature"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Pass the call over to the submitter who can now sign and submit it to the chain","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The submitter will have to pay for all fees and deposits that result from the operation"}),"\n",(0,i.jsx)(t.li,{children:"In general the submitter will have the power to delete all on-chain objects to reclaim their deposit"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["The chain now checks that","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The submitter's signature is correct"}),"\n",(0,i.jsxs)(t.li,{children:["The submitter is the one specified in the ",(0,i.jsx)(t.code,{children:"DidAuthorizedCallOperation"})]}),"\n",(0,i.jsx)(t.li,{children:"The DID signature is correct"}),"\n",(0,i.jsx)(t.li,{children:"The tx_counter is valid (current tx_counter + 1)"}),"\n",(0,i.jsx)(t.li,{children:"The blocknumber is not older than an hour (given 12s block time)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["After that the actual call gets dispatched with a special ",(0,i.jsx)(t.code,{children:"DidOrigin"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This allows the executer of the actual call to get the DID and the account of the submitter"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"update-a-full-did",children:"Update a Full DID"}),"\n",(0,i.jsx)(t.p,{children:"There is a set of extrinsics available to update a full DID.\nThese are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"set_authentication_key"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"set_delegation_key"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"remove_delegation_key"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"set_attestation_key"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"remove_attestation_key"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"add_key_agreement_key"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"remove_key_agreement_key"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"add_service_endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"remove_service_endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"delete"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"All of them have to be authenticated using the DID that is updated following the process described above."}),"\n",(0,i.jsx)(t.h2,{id:"what-about-the-deposit",children:"What About the Deposit?"}),"\n",(0,i.jsx)(t.p,{children:"When writing a DID to the chain the submitter of the extrinsic has to pay a deposit.\nThe base deposit is currently 2 KILT.\nFor additional used storage, for example by adding more services, more tokens are taken as deposit, depending on the amount of additional storage taken.\nFreeing up storage reduces the deposit.\nThis is to incentivize deleting unused DIDs or keys to reduce the total storage of the chain.\nThe deposit is always bound to the account that submitted the extrinsic to create the DID, and not to the DID itself.\nConsequently there are also two ways of reclaiming the deposit:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The DID owner decides to delete the DID using the ",(0,i.jsx)(t.code,{children:"did::delete"})," extrinsic.\nThis call needs to be authorized by the DID and can therefore be submitted by any account.\nDespite the fact that this account can differ from the deposit owner, the deposit will always be reimbursed to the account that paid for it."]}),"\n",(0,i.jsxs)(t.li,{children:["The deposit owner can decide to claim their deposit back using the ",(0,i.jsx)(t.code,{children:"did::reclaim_deposit"})," extrinsic.\nThis will also cause the DID to be fully deleted but it doesn't require a signature from the DID.\nOnly the signature of the account that created the DID is needed for this."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(7294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);