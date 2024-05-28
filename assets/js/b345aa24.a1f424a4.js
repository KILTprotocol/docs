(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4104],{48952:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=48952,e.exports=n},51848:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>h,metadata:()=>u,toc:()=>m});var i=t(17624),o=t(4552),a=t(96020);const s='/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from \'@kiltprotocol/sdk-js\'\n\nexport async function main(): Promise<Kilt.ICType> {\n  const {\n    creator,\n    createdAt,\n    cType: domainLinkageCType\n  } = await Kilt.CType.fetchFromChain(\n    \'kilt:ctype:0xb08800a574c436831a2b9fce00fd16e9df489b2b3695e88a0895d148eca0311e\'\n  )\n\n  console.log(JSON.stringify(domainLinkageCType, null, 2))\n\n  /** Prints the following definition:\n  {\n    "$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/",\n    "additionalProperties": false,\n    "properties": {\n        "id": {\n            "type": "string"\n        },\n        "origin": {\n            "type": "string"\n        }\n    },\n    "title": "Domain Linkage Credential",\n    "type": "object",\n    "$id": "kilt:ctype:0xb08800a574c436831a2b9fce00fd16e9df489b2b3695e88a0895d148eca0311e"\n  }\n  */\n  return domainLinkageCType\n}\n',r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function main({\n  domainLinkageCType,\n  didUri\n}: {\n  domainLinkageCType: Kilt.ICType\n  didUri: Kilt.DidUri\n}) {\n  const claimContents: Kilt.IClaimContents = {\n    id: didUri,\n    origin: 'https://example.com'\n  }\n\n  const claim = Kilt.Claim.fromCTypeAndClaimContents(\n    domainLinkageCType,\n    claimContents,\n    didUri\n  )\n  const domainLinkageCredential = Kilt.Credential.fromClaim(claim)\n\n  return { domainLinkageCredential }\n}\n",l="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main({\n  didUri,\n  assertionMethodKey,\n  domainLinkageCredential\n}: {\n  didUri: Kilt.DidUri\n  assertionMethodKey: Kilt.KiltKeyringPair\n  domainLinkageCredential: Kilt.ICredential\n}) {\n  // We need the KeyId of the AssertionMethod Key. There is only\n  // one AssertionMethodKey and its id is stored on the blockchain.\n  const didResolveResult = await Kilt.Did.resolve(didUri)\n  if (typeof didResolveResult.document === 'undefined') {\n    throw new Error('DID must be resolvable (i.e. not deleted)')\n  }\n  const assertionMethodKeyId = didResolveResult.document.assertionMethod[0].id\n\n  const domainLinkagePresentation = await Kilt.Credential.createPresentation({\n    credential: domainLinkageCredential,\n    signCallback: async ({ data }) => ({\n      signature: assertionMethodKey.sign(data),\n      keyType: assertionMethodKey.type,\n      keyUri: `${didUri}${assertionMethodKeyId}`\n    })\n  })\n\n  return { domainLinkagePresentation }\n}\n",d="/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main({\n  didUri,\n  dappAccount,\n  assertionMethodKey,\n  domainLinkageCredential\n}: {\n  didUri: Kilt.DidUri\n  dappAccount: Kilt.KiltKeyringPair\n  assertionMethodKey: Kilt.KiltKeyringPair\n  domainLinkageCredential: Kilt.ICredential\n}) {\n  const api = Kilt.ConfigService.get('api')\n  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(\n    domainLinkageCredential,\n    didUri\n  )\n  const attestationTx = api.tx.attestation.add(claimHash, cTypeHash, null)\n\n  // We authorize the call using the attestation key of the Dapps DID.\n  const extrinsic = api.tx.did.dispatchAs(dappAccount.address, attestationTx)\n\n  // Since DIDs can not hold any balance, we pay for the transaction using our blockchain account\n  const result = await Kilt.Blockchain.signAndSubmitTx(extrinsic, dappAccount)\n\n  if (result.isError) {\n    console.log('Attestation failed')\n  } else {\n    console.log('Attestation successful')\n  }\n  return result\n}\n",c="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  domainLinkagePresentation: Kilt.ICredentialPresentation\n) {\n  const api = Kilt.ConfigService.get('api')\n\n  const credentialSubject = {\n    ...domainLinkagePresentation.claim.contents,\n    rootHash: domainLinkagePresentation.rootHash\n  }\n\n  const encodedAttestationDetails = await api.query.attestation.attestations(\n    domainLinkagePresentation.rootHash\n  )\n  const issuer = Kilt.Attestation.fromChain(\n    encodedAttestationDetails,\n    domainLinkagePresentation.claim.cTypeHash\n  ).owner\n\n  const issuanceDate = new Date().toISOString()\n\n  const claimerSignature = domainLinkagePresentation.claimerSignature\n  if (!claimerSignature) {\n    throw new Error('Claimer signature is required.')\n  }\n\n  const proof = {\n    type: 'KILTSelfSigned2020',\n    proofPurpose: 'assertionMethod',\n    verificationMethod: claimerSignature.keyUri,\n    signature: claimerSignature.signature,\n    challenge: claimerSignature.challenge\n  }\n\n  const wellKnownDidconfig = {\n    '@context': 'https://identity.foundation/.well-known/did-configuration/v1',\n    linked_dids: [\n      {\n        '@context': [\n          'https://www.w3.org/2018/credentials/v1',\n          'https://identity.foundation/.well-known/did-configuration/v1'\n        ],\n        issuer,\n        issuanceDate,\n        type: [\n          'VerifiableCredential',\n          'DomainLinkageCredential',\n          'KiltCredential2020'\n        ],\n        credentialSubject,\n        proof\n      }\n    ]\n  }\n\n  return wellKnownDidconfig\n}\n",h={id:"well-known-did-config",title:"Well-Known DID Configuration"},p=void 0,u={id:"develop/dApp/well-known-did-config",title:"Well-Known DID Configuration",description:"The KILT support of the Well-Known DID Configuration uses unpublished specifications and will change in the future.",source:"@site/docs/develop/07_dApp/02_well-known-did-config.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/well-known-did-config",permalink:"/docs/develop/dApp/well-known-did-config",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/02_well-known-did-config.md",tags:[],version:"current",lastUpdatedAt:1716901802,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:2,frontMatter:{id:"well-known-did-config",title:"Well-Known DID Configuration"},sidebar:"dApp",previous:{title:"Overview",permalink:"/docs/develop/dApp/welcome"},next:{title:"Setting Up the Communication Session",permalink:"/docs/develop/dApp/session"}},f={},m=[{value:"Set up the Well-Known DID Configuration",id:"set-up-the-well-known-did-configuration",level:2},{value:"Create a DID",id:"create-a-did",level:3},{value:"Making the claim",id:"making-the-claim",level:3},{value:"Self-attesting the credential",id:"self-attesting-the-credential",level:3},{value:"Presenting the credential",id:"presenting-the-credential",level:3},{value:"Host the Presentation",id:"host-the-presentation",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"This is a working draft",type:"danger",children:(0,i.jsxs)(n.p,{children:["The KILT support of the ",(0,i.jsx)(n.em,{children:"Well-Known DID Configuration"})," uses unpublished specifications and will change in the future."]})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"Well-Known DID Configuration"})," is implemented as a security measure when setting up the communication session between the dapp and extension.\nIt ensures that the DID the browser extension is communicating to is linked to the domain that is visited by the browser.\nThis rule is currently enforced by the KILT Wallet reference implementation (Sporran Extension), but might be relaxed in the future.\nThe implementation is based on the ",(0,i.jsx)(n.a,{href:"https://identity.foundation/specs/did-configuration/",children:(0,i.jsx)(n.em,{children:"Well-Known DID Configuration"})})," specified by the Decentralized Identity Foundation."]}),"\n",(0,i.jsxs)(n.p,{children:["Once a communication session between a dapp and an extension is opened, the extension will query ",(0,i.jsx)(n.code,{children:"<domain-name>/.well-known/did-configuration.json"}),".\nThis JSON-file must contain a credential presentation that conforms to the ",(0,i.jsx)(n.a,{href:"https://github.com/KILTprotocol/ctype-index/tree/main/ctypes/0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643",children:"Domain Linkage CType"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"set-up-the-well-known-did-configuration",children:"Set up the Well-Known DID Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["For the ",(0,i.jsx)(n.em,{children:"Well-Known DID Configuration"})," you need to go through the following steps:"]}),"\n",(0,i.jsxs)(n.ol,{start:"0",children:["\n",(0,i.jsxs)(n.li,{children:["Create a full DID","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You will need the ",(0,i.jsx)(n.code,{children:"assertionMethodKey"})," a.k.a. ",(0,i.jsx)(n.code,{children:"attestationKey"})," for signing the credential"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"authenticationKey"})," is required for signing the transaction"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Create a claim"}),"\n",(0,i.jsx)(n.li,{children:"Attest the claim"}),"\n",(0,i.jsx)(n.li,{children:"Create a presentation"}),"\n",(0,i.jsxs)(n.li,{children:["Host the presentation on your website at ",(0,i.jsx)(n.code,{children:"https://<your domain>/.well-known/did-configuration.json"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-a-did",children:"Create a DID"}),"\n",(0,i.jsxs)(n.p,{children:["Your dapp needs a DID to identify itself to the extension.\nIf your dapp does not have a DID yet, follow the ",(0,i.jsxs)(n.a,{href:"/docs/develop/sdk/cookbook/dids/full-did-creation",children:[(0,i.jsx)(n.em,{children:"create a full DID"})," guide"]}),".\nMake sure to create the DID with an ",(0,i.jsx)(n.code,{children:"assertionMethodKey"})," so that you are able to issue attestations."]}),"\n",(0,i.jsx)(n.h3,{id:"making-the-claim",children:"Making the claim"}),"\n",(0,i.jsxs)(n.p,{children:["After you get a DID, you can make a claim about that DID.\nThe claim has to be based on the ",(0,i.jsx)(n.a,{href:"https://github.com/KILTprotocol/ctype-index/tree/main/ctypes/0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643",children:"Domain Linkage CType"}),", whose definition you can get from the linked GitHub repository, or fetch from the blockchain using the CType's id:"]}),"\n",(0,i.jsx)(a.c,{children:s}),"\n",(0,i.jsx)(n.p,{children:"The credential is built from the CType, claim contents, and your dapp's unique DID:"}),"\n",(0,i.jsx)(a.c,{children:r}),"\n",(0,i.jsx)(n.p,{children:"The credential isn't attested yet and is therefore not valid yet."}),"\n",(0,i.jsx)(n.h3,{id:"self-attesting-the-credential",children:"Self-attesting the credential"}),"\n",(0,i.jsx)(n.p,{children:"A valid credential requires an attestation.\nSince the website wants to link itself to the DID just created, it has to self-attest the domain linkage credential, i.e., write the credential attestation on chain using the same DID it is trying to link to."}),"\n",(0,i.jsx)(n.p,{children:"In order to attest the credential we go through the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"calculating the claim hash"}),"\n",(0,i.jsx)(n.li,{children:"creating the attest transaction"}),"\n",(0,i.jsx)(n.li,{children:"authorizing the transaction with your DID"}),"\n",(0,i.jsx)(n.li,{children:"paying for the transaction with a KILT account and submitting it to the chain"}),"\n"]}),"\n",(0,i.jsx)(a.c,{children:d}),"\n",(0,i.jsxs)(n.p,{children:["If you want to learn more about attestations you can refer to our ",(0,i.jsx)(n.a,{href:"/docs/concepts/credentials/attestation",children:"concept guide"})," or the ",(0,i.jsx)(n.a,{href:"/docs/develop/sdk/cookbook/claiming/attestation-creation",children:"cookbook"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"presenting-the-credential",children:"Presenting the credential"}),"\n",(0,i.jsx)(n.p,{children:"To use the newly attested credential, we need to derive a presentation from it to host on the dapp website."}),"\n",(0,i.jsx)(a.c,{children:l}),"\n",(0,i.jsx)(n.p,{children:"The Well-Known DID Configuration specification requires a verifiable credential.\nFor now we have to manually convert our KILT credential into the required format."}),"\n",(0,i.jsx)(a.c,{children:c}),"\n",(0,i.jsx)(n.h3,{id:"host-the-presentation",children:"Host the Presentation"}),"\n",(0,i.jsx)(n.p,{children:"Now that you generated a presentation, you need to host it in your web app, so that the extension can query the presentation.\nThe extension will make an HTTP GET request to the following URI, and your dapp must respond with the presentation."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"/.well-known/did-configuration.json"})}),"\n",(0,i.jsx)(n.p,{children:"How the file is hosted depends on your project setup and is out of scope for this guide."})]})}function y(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},96020:(e,n,t)=>{"use strict";t.d(n,{c:()=>u});var i=t(11504),o=t(28264),a=t(46352),s=t(58440),r=t(14300),l=t(28168),d=t(61268),c=t(87768),h=t(1608),p=t(17624);const u=e=>{let{children:n,fileName:t,...u}=e;const f=n,[m,g]=(0,i.useState)("# loading code..."),{siteConfig:{customFields:{prettierConfig:y}}}=(0,o.c)(),w=(0,i.useMemo)((()=>{const{code:e}=(0,a.transform)(f,{plugins:["transform-typescript"],retainLines:!0});return e}),[f]);(0,i.useEffect)((()=>{s.E9(w,{parser:"babel",plugins:[r.c,l.cp],...y}).then(g)}),[y,w]);const x=[{fileName:t?`${t}.ts`:void 0,fileContents:f,fileID:"ts",fileLabel:"Typescript"},{fileName:t?`${t}.js`:void 0,fileContents:m,fileID:"js",fileLabel:"Javascript"}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.c,{groupId:"ts-js-choice",children:x.map((e=>(0,p.jsx)(c.c,{value:e.fileID,label:e.fileLabel,default:!0,children:(0,p.jsx)(h.c,{...u,className:"language-"+e.fileID,title:e.fileName,children:e.fileContents})})))})})}}}]);