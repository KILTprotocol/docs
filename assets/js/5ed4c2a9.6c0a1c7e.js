"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),p=i,m=c["".concat(s,".").concat(p)]||c[p]||h[p]||l;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const l={id:"pallet-did",title:"DID pallet"},r=void 0,o={unversionedId:"develop/chain/pallets/pallet-did",id:"develop/chain/pallets/pallet-did",title:"DID pallet",description:"In KILT a DID is a decentralized identifier that the user owns and controls.",source:"@site/docs/develop/02_chain/02_pallets/01_did.md",sourceDirName:"develop/02_chain/02_pallets",slug:"/develop/chain/pallets/pallet-did",permalink:"/docs/develop/chain/pallets/pallet-did",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/02_chain/02_pallets/01_did.md",tags:[],version:"current",lastUpdatedAt:1684309570,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:1,frontMatter:{id:"pallet-did",title:"DID pallet"},sidebar:"chain",previous:{title:"Introduction",permalink:"/docs/develop/chain/introduction"},next:{title:"Deployments and Services",permalink:"/docs/develop/chain/deployments"}},s={},u=[{value:"Register a Full DID",id:"register-a-full-did",level:2},{value:"Use a Full DID",id:"use-a-full-did",level:2},{value:"Update a Full DID",id:"update-a-full-did",level:2},{value:"What About the Deposit?",id:"what-about-the-deposit",level:2}],d={toc:u},c="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In KILT a DID is a decentralized identifier that the user owns and controls.\nIt consists of a unique set of keys that can be used for different operations on the blockchain.\nFor an in-depth explanation see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md"},"KILT DID spec"),"."),(0,i.kt)("p",null,'A DID may be a "light" DID, which is not stored on-chain, or a "full" on-chain DID.\nA light DID is issued by default, with the keys stored locally on your device.\nBy upgrading this to a full DID registered on the blockchain, all the keys associated with it can be retrieved from the KILT blockchain storage.'),(0,i.kt)("p",null,"A full DID can then be used to perform certain on-chain actions which include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Writing CTypes to the chain"),(0,i.kt)("li",{parentName:"ul"},"Writing attestations to the chain"),(0,i.kt)("li",{parentName:"ul"},"Setting delegations"),(0,i.kt)("li",{parentName:"ul"},"Doing key rotations on the DID keys")),(0,i.kt)("h2",{id:"register-a-full-did"},"Register a Full DID"),(0,i.kt)("p",null,"A full DID is needed if the user wants to become an Attester or wants to setup delegations.\nA full DID also allows the user to embed a list of URLs, known as services, into the DID document so that they can be retrieved from the chain as part of the DID document.\nTo create a full DID the user first has to create some keys, and optionally some services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"one authentication key for signing extrinsics from your DID"),(0,i.kt)("li",{parentName:"ul"},"zero or more key agreement keys for encrypting messages that are sent to you"),(0,i.kt)("li",{parentName:"ul"},"(optional) one attestation key for signing attestations"),(0,i.kt)("li",{parentName:"ul"},"(optional) one delegation key for authorizing delegations"),(0,i.kt)("li",{parentName:"ul"},"(optional) service that point to external hostings for others to find")),(0,i.kt)("p",null,"After the relevant components have been created, they are ready to write the DID to the KILT blockchain.\nThe user then has to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"did::create")," extrinsic and sign it with any KILT account that has enough funding to pay both the transaction fees and the DID deposit.\nThe extrinsic consists of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"DidCreationDetails")," object containing keys, services and the account id of the submitter for the creation"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"DidSignature")," which is a signature using your authentication key over the scale encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"DidCreationDetails")," from above"),(0,i.kt)("li",{parentName:"ul"},"A regular signature authenticating the sender of the extrinsic")),(0,i.kt)("p",null,"The DID owner and the submitter can be two different parties.\nThis allows the creation of a DID without having to pay any fees or deposits.\nBeware that this also means that the DID creator gives up some power over the DID: The submitter who pays the deposit will be able to delete the DID from the blockchain and claim back its deposit.\nOnce the ",(0,i.kt)("inlineCode",{parentName:"p"},"did::create")," extrinsic is submitted and executed, the DID is written to the chain."),(0,i.kt)("h2",{id:"use-a-full-did"},"Use a Full DID"),(0,i.kt)("p",null,"Once the DID is successfully registered on chain, it can be used to perform certain on-chain actions that are not possible to do with a regular account.\nThis includes the handling of attestations and CTypes, setting up trust hierarchies through delegations, managing web3names and much more."),(0,i.kt)("p",null,'Those actions need to be signed by the DID before they can be submitted to chain by any account that the DID owner specifies when signing.\nWe are naming those actions "DID-Calls".\nTo submit those there is a special extrinsic called ',(0,i.kt)("inlineCode",{parentName:"p"},"submit_did_call"),"."),(0,i.kt)("p",null,"The process of doing any DID-Call is always the same:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Construct the actual call you want to execute including all arguments of that extrinsic."),(0,i.kt)("li",{parentName:"ul"},"Wrap the call in a ",(0,i.kt)("inlineCode",{parentName:"li"},"DidAuthorizedCallOperation")," together with the",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Senders DID to indicate who wants this operation to happen"),(0,i.kt)("li",{parentName:"ul"},"Senders DID tx_counter + 1 to prevent replay attacks"),(0,i.kt)("li",{parentName:"ul"},"Current block number to prevent the operation being submitted too far in the future"),(0,i.kt)("li",{parentName:"ul"},"Account of the submitter to allow the DID owner to specify who is allowed to submit"))),(0,i.kt)("li",{parentName:"ul"},"Create a signature over the ",(0,i.kt)("inlineCode",{parentName:"li"},"DidAuthorizedCallOperation")," by scale-encoding it and signing it using the appropriate key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Most operations require the authentication key of the DID to be used"),(0,i.kt)("li",{parentName:"ul"},"Managing Attestations requires the attestation key"),(0,i.kt)("li",{parentName:"ul"},"Managing Delegations requires the delegation key"))),(0,i.kt)("li",{parentName:"ul"},"Construct the ",(0,i.kt)("inlineCode",{parentName:"li"},"submit_did_call")," extrinsic consisting of",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"DidAuthorizedCallOperation")),(0,i.kt)("li",{parentName:"ul"},"The DID signature"))),(0,i.kt)("li",{parentName:"ul"},"Pass the call over to the submitter who can now sign and submit it to the chain",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The submitter will have to pay for all fees and deposits that result from the operation"),(0,i.kt)("li",{parentName:"ul"},"In general the submitter will have the power to delete all on-chain objects to reclaim their deposit"))),(0,i.kt)("li",{parentName:"ul"},"The chain now checks that",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The submitter's signature is correct"),(0,i.kt)("li",{parentName:"ul"},"The submitter is the one specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"DidAuthorizedCallOperation")),(0,i.kt)("li",{parentName:"ul"},"The DID signature is correct"),(0,i.kt)("li",{parentName:"ul"},"The tx_counter is valid (current tx_counter + 1)"),(0,i.kt)("li",{parentName:"ul"},"The blocknumber is not older than an hour (given 12s block time)"))),(0,i.kt)("li",{parentName:"ul"},"After that the actual call gets dispatched with a special ",(0,i.kt)("inlineCode",{parentName:"li"},"DidOrigin"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This allows the executer of the actual call to get the DID and the account of the submitter")))),(0,i.kt)("h2",{id:"update-a-full-did"},"Update a Full DID"),(0,i.kt)("p",null,"There is a set of extrinsics available to update a full DID.\nThese are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_authentication_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_delegation_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove_delegation_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_attestation_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove_attestation_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_key_agreement_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove_key_agreement_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_service_endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove_service_endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delete"))),(0,i.kt)("p",null,"All of them have to be authenticated using the DID that is updated following the process described above."),(0,i.kt)("h2",{id:"what-about-the-deposit"},"What About the Deposit?"),(0,i.kt)("p",null,"When writing a DID to the chain the submitter of the extrinsic has to pay a deposit, currently 2 KILT.\nThis is to incentivize deleting unused DIDs to save storage on the chain.\nThe deposit is always bound to the account that submitted the extrinsic to create the DID, and not to the DID itself.\nConsequently there are also two ways of reclaiming the deposit:"),(0,i.kt)("p",null,"1) The DID owner decides to delete the DID using the ",(0,i.kt)("inlineCode",{parentName:"p"},"did::delete")," extrinsic.\nThis call needs to be authorized by the DID and can therefore be submitted by any account.\nDespite the fact that this account can differ from the deposit owner, the deposit will always be reimbursed to the account that paid for it.\n2) The deposit owner can decide to claim their deposit back using the ",(0,i.kt)("inlineCode",{parentName:"p"},"did::reclaim_deposit")," extrinsic.\nThis will also cause the DID to be fully deleted but it doesn't require a signature from the DID.\nOnly the signature of the account that created the DID is needed for this."))}h.isMDXComponent=!0}}]);