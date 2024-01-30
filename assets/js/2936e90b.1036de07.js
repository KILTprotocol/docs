(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[678],{5380:n=>{function t(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,n.exports=t},3078:(n,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>m,contentTitle:()=>g,default:()=>x,frontMatter:()=>k,metadata:()=>p,toc:()=>b});var i=e(5893),a=e(1151),o=e(1909),c=e(4866),s=e(5162);const l="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function linkAccountToDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccount: Kilt.KeyringPair & { type: 'ed25519' | 'sr25519' | 'ecdsa' },\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the parameters for the extrinsic that links account and DID.\n  // This will contain the signature of the account that will be linked to the DID\n  // and therefore signals the agreement of the account to be linked.\n  const accountLinkingParameters = await Kilt.Did.associateAccountToChainArgs(\n    linkedAccount.address,\n    did,\n    async (payload) => linkedAccount.sign(payload)\n  )\n\n  // Afterwards we build the extrinsic using the parameters from above.\n  const accountLinkingTx = await api.tx.didLookup.associateAccount(\n    ...accountLinkingParameters\n  )\n\n  // Next the DID signs the extrinsic.\n  // This signals the agreement of the DID owner to be linked to the account.\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // finally we need to submit everything to the blockchain, so that the link gets\n  // registered.\n  // This account will provide the required deposit and pay the fees.\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n",r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function linkAccountToDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccount: Kilt.KeyringPair & { type: 'ethereum' },\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the parameters for the extrinsic that links account and DID.\n  // This will contain the signature of the account that will be linked to the DID\n  // and therefore signals the agreement of the account to be linked.\n  const accountLinkingParameters = await Kilt.Did.associateAccountToChainArgs(\n    linkedAccount.address,\n    did,\n    async (payload) => linkedAccount.sign(payload)\n  )\n\n  // Afterwards we build the extrinsic using the parameters from above.\n  const accountLinkingTx = await api.tx.didLookup.associateAccount(\n    ...accountLinkingParameters\n  )\n\n  // Next the DID signs the extrinsic.\n  // This signals the agreement of the DID owner to be linked to the account.\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // finally we need to submit everything to the blockchain, so that the link gets\n  // registered.\n  // This account will provide the required deposit and pay the fees.\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n",d="import { hexToU8a, u8aToString } from '@polkadot/util'\nimport Web3 from 'web3'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function linkAccountToDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccountPrivateKey: string,\n  linkedAccountAddress: string,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n  const web3 = new Web3()\n\n  const blockNo = await api.query.system.number()\n  // the challenge will be valid for 300 blocks (~1h)\n  const validTill = blockNo.addn(300)\n\n  // We build the challenge that needs to be signed by the ethereum account\n  const challenge = u8aToString(\n    await Kilt.Did.getLinkingChallenge(did, validTill)\n  )\n\n  // sign the challenge\n  const signResult = await web3.eth.accounts.sign(\n    challenge,\n    linkedAccountPrivateKey\n  )\n\n  // build the arguments for the extrinsic that links ethereum account and DID\n  const accountLinkingParameters = await Kilt.Did.getLinkingArguments(\n    linkedAccountAddress,\n    validTill,\n    hexToU8a(signResult.signature),\n    'ethereum'\n  )\n\n  // Build the actual extrinsic\n  const accountLinkingTx = await api.tx.didLookup.associateAccount(\n    ...accountLinkingParameters\n  )\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // sign and submit the extrinsic to the blockchain\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n",u="import { hexToU8a, u8aToString } from '@polkadot/util'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\ntype MetamaskApi = {\n  request: (_: {\n    method: string\n    params: [string, string, string]\n  }) => Promise<string>\n}\n\ndeclare global {\n  interface Window {\n    ethereum: MetamaskApi\n  }\n}\n\nexport async function linkAccountToDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccountAddress: string,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const blockNo = await api.query.system.number()\n  // the challenge will be valid for 300 blocks (~1h)\n  const validTill = blockNo.addn(300)\n\n  // We build the challenge that needs to be signed by the ethereum account\n  const challenge = u8aToString(\n    await Kilt.Did.getLinkingChallenge(did, validTill)\n  )\n\n  // sign the challenge\n  const signature = await window.ethereum.request({\n    method: 'personal_sign',\n    params: [challenge, linkedAccountAddress, '']\n  })\n\n  // build the arguments for the extrinsic that links ethereum account and DID\n  const accountLinkingParameters = await Kilt.Did.getLinkingArguments(\n    linkedAccountAddress,\n    validTill,\n    hexToU8a(signature),\n    'ethereum'\n  )\n\n  // Build the actual extrinsic\n  const accountLinkingTx = await api.tx.didLookup.associateAccount(\n    ...accountLinkingParameters\n  )\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // sign and submit the extrinsic to the blockchain\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n",h="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function linkDidToAccount(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Authorizing the tx with the full DID and submitting it with the provided account\n  // results in the submitter's account being linked to the DID authorizing the operation.\n  const accountLinkingTx = api.tx.didLookup.associateSender()\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n",k={id:"account-link",title:"Link an Account to a KILT DID"},g=void 0,p={id:"develop/sdk/cookbook/account_linking/account-link",title:"Link an Account to a KILT DID",description:"Sometimes there is the need to link a DID to an account publicly.",source:"@site/docs/develop/01_sdk/02_cookbook/03_account_linking/01_link.md",sourceDirName:"develop/01_sdk/02_cookbook/03_account_linking",slug:"/develop/sdk/cookbook/account_linking/account-link",permalink:"/docs/develop/sdk/cookbook/account_linking/account-link",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/03_account_linking/01_link.md",tags:[],version:"current",lastUpdatedAt:1706606035,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:1,frontMatter:{id:"account-link",title:"Link an Account to a KILT DID"},sidebar:"sdk",previous:{title:"Resolve a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-query"},next:{title:"Query the web3name of an Account",permalink:"/docs/develop/sdk/cookbook/account_linking/account-name"}},m={},b=[{value:"Linking the sender to a DID",id:"linking-the-sender-to-a-did",level:2},{value:"Linking an account to a DID",id:"linking-an-account-to-a-did",level:2}];function f(n){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Sometimes there is the need to link a DID to an account publicly.\nThe link makes it possible to lookup a DID for an account.\nThe other directions is also possible.\nWith a DID you can lookup a list of linked account."}),"\n",(0,i.jsx)(t.p,{children:"Linking accounts can be useful when your account should have an identity.\nE.g. as a collator, you might want to provide some public information so that delegator can better decide who earned their stake."}),"\n",(0,i.jsx)(t.p,{children:"An account can be linked to a DID in one of two ways.\nEither the account that sends the transaction links itself to the DID, or the sender is unrelated to the DID and a third account is linked.\nIn the latter case, a challenge needs to be signed using the third account, to prove ownership."}),"\n",(0,i.jsx)(t.p,{children:"The second option is useful in cases where the account that should be linked doesn't own KILT tokens and the transaction is paid for by a third party.\nThis option also allows to link account schemes that are not native to the Spiritnet Blockchain.\nRight now the only other address scheme supported are ethereum accounts."}),"\n",(0,i.jsxs)(t.admonition,{title:"Don't use linked accounts for asset transfers",type:"warning",children:[(0,i.jsx)(t.p,{children:"Don't use these linked accounts for asset transfers.\nSince these accounts are not limited to KILT accounts, but can be used on any chain, the recipient might not be able to access the transferred asset on other chains.\nWhen a link to an account on a different Polkadot chain is created, this account might only be usable on this specific chain."}),(0,i.jsxs)(t.p,{children:["If you want transfer assets to a DID have a look at ",(0,i.jsx)(t.a,{href:"https://github.com/KILTprotocol/spec-KiltTransferAssetRecipientV1",children:"the asset transfer service"}),"."]})]}),"\n",(0,i.jsx)(t.h2,{id:"linking-the-sender-to-a-did",children:"Linking the sender to a DID"}),"\n",(0,i.jsx)(t.p,{children:"Link the sender of the transaction to the DID.\nThe sender will provide the deposit and pay the fees.\nThey will also be linked to the DID."}),"\n",(0,i.jsx)(o.Z,{children:h}),"\n",(0,i.jsx)(t.h2,{id:"linking-an-account-to-a-did",children:"Linking an account to a DID"}),"\n",(0,i.jsx)(t.p,{children:"Link another account to the DID.\nThe sender will provide the deposit and pay the fees, but will not be linked to the DID in any way.\nThe account that should be linked must sign a challenge to prove that the account agrees to be linked."}),"\n",(0,i.jsx)(t.p,{children:"The proof contains the DID that the account will be linked to and an expiration date (in terms of blocks), to prevent replay attacks.\nThe proof will only be valid up until the blocknumber is reached."}),"\n",(0,i.jsx)(t.p,{children:"With this option you can link addresses that are supported by the Spiritnet blockchain (Sr25519, Ed25519, Ecdsa), but also ethereum addresses."}),"\n",(0,i.jsxs)(c.Z,{defaultValue:"substrate-link",children:[(0,i.jsx)(s.Z,{value:"substrate-link",label:"Substrate",children:(0,i.jsx)(o.Z,{children:l})}),(0,i.jsx)(s.Z,{value:"eth-link",label:"Ethereum (polkadot-js)",children:(0,i.jsx)(o.Z,{children:r})}),(0,i.jsx)(s.Z,{value:"eth-link-web3js",label:"Ethereum (web3.js)",children:(0,i.jsx)(o.Z,{children:d})}),(0,i.jsxs)(s.Z,{value:"eth-link-metamask",label:"Ethereum (MetaMask)",children:[(0,i.jsxs)(t.p,{children:["Refer to the ",(0,i.jsx)("a",{href:"https://docs.metamask.io/guide/signing-data.html#personal-sign",children:"Metamask documentation"})," for further information."]}),(0,i.jsx)(o.Z,{children:u})]})]})]})}function x(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(f,{...n})}):f(n)}},1909:(n,t,e)=>{"use strict";e.d(t,{Z:()=>h});e(7294);var i=e(2263),a=e(2175),o=e(4935),c=e(4990),s=e(9966),l=e(4866),r=e(5162),d=e(9286),u=e(5893);const h=n=>{let{children:t,fileName:e,...h}=n;const k=t,{code:g}=(0,a.transform)(k,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:p}}}=(0,i.Z)(),m=o.WU(g,{parser:"babel",plugins:[c.Z,s.ZP],...p}).finally((()=>{var n=[{fileName:e?`${e}.ts`:void 0,fileContents:k,fileID:"ts",fileLabel:"Typescript"},{fileName:e?`${e}.js`:void 0,fileContents:m,fileID:"js",fileLabel:"Javascript"}];return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.Z,{groupId:"ts-js-choice",children:n.map((n=>(0,u.jsx)(r.Z,{value:n.fileID,label:n.fileLabel,default:!0,children:(0,u.jsx)(d.Z,{...h,className:"language-"+n.fileID,title:n.fileName,children:n.fileContents})})))})})}))}}}]);