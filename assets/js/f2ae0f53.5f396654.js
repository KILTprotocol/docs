"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1765],{55972:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(83117),o=n(80102),a=(n(67294),n(3905)),r=n(31736),s=["components"],l={id:"presentation-creation",title:"Present a Credential"},d=void 0,c={unversionedId:"develop/sdk/cookbook/claiming/presentation-creation",id:"develop/sdk/cookbook/claiming/presentation-creation",title:"Present a Credential",description:"With a valid Credential, Claimers can now go to Verifiers to request some service upon providing proof of validity for a certain Credential.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/04_presentation_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/presentation-creation",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-creation",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/04_presentation_creation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"presentation-creation",title:"Present a Credential"},sidebar:"sdk",previous:{title:"Attest a Claim (Issue a Credential)",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-creation"},next:{title:"Verify a Credential or a Presentation",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-verification"}},p=[],m={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With a valid Credential, Claimers can now go to Verifiers to request some service upon providing proof of validity for a certain Credential.\nThe process of presenting one or more Credentials to a Verifier is called ",(0,a.kt)("inlineCode",{parentName:"p"},"Presentation"),"."),(0,a.kt)("p",null,"This step, similarly to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/attestation-request"},"Attestation request"),", requires that a communication channel exist between the Claimer and the Verifier so that information about the Presentation can be shared.\nTo verify the revocation status of the presented Credential(s), a Verifier must be able to interact with a KILT full node."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"KILT supports selective disclosure of Claims when creating Presentations.\nThis means that given a Credential, it is possible for the Claimer to reveal only a subset of its Claims, depending on the requirements set by the Verifier.\nCheck the snippet below to see how that is done using the KILT SDK."))),(0,a.kt)("p",null,"The Claimer can generate a Presentation starting from a Credential, optionally specifying the fields to reveal and a Presentation challenge, which is useful to proof freshness of the generated Presentation."),(0,a.kt)(r.Z,{className:"language-ts",mdxType:"CodeBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createPresentation(\n  keystore: Kilt.KeystoreSigner,\n  claimerDid: Kilt.Did.DidDetails,\n  credential: Kilt.Credential,\n  selectedAttributes: string[] | undefined = undefined,\n  challenge: string | undefined = undefined\n): Promise<Kilt.Credential> {\n  // Create a presentation with only the specified fields revealed, if specified.\n  return credential.createPresentation({\n    claimerDid,\n    signer: keystore,\n    selectedAttributes,\n    challenge\n  })\n}\n"))}k.isMDXComponent=!0}}]);