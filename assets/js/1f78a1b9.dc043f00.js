"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7311],{19779:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return r},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var i=o(83117),n=(o(67294),o(3905)),a=o(90814);const s={id:"attestation-removal",title:"Revoke a Credential"},r=void 0,l={unversionedId:"develop/sdk/cookbook/claiming/attestation-removal",id:"develop/sdk/cookbook/claiming/attestation-removal",title:"Revoke a Credential",description:"If the conditions that make a credential valid cease to exist, an Attester can revoke and optionally remove their attestation from the KILT blockchain.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/06_credential_revocation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/attestation-removal",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-removal",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/06_credential_revocation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"attestation-removal",title:"Revoke a Credential"},sidebar:"sdk",previous:{title:"Verify a Credential or a Presentation",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-verification"},next:{title:"Protect Against Replay Attacks",permalink:"/docs/develop/sdk/cookbook/messaging/replay_protection"}},c={},d=[{value:"Claim Back an Attestation Deposit",id:"claim-back-an-attestation-deposit",level:2}],m={toc:d};function k(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,i.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If the conditions that make a credential valid cease to exist, an Attester can revoke and optionally remove their attestation from the KILT blockchain.\nThis does not automatically delete the credential from the Claimer's wallet, of course, but it makes it impossible for the Claimer to use the credential in the future."),(0,n.kt)("p",null,"Since the attestation creation reserved some KILT tokens from the submitter's balance, removing an attestation would return those funds into the payer's pockets."),(0,n.kt)(a.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function revokeCredential(\n  keystore: Kilt.Did.DemoKeystore,\n  attesterDid: Kilt.Did.FullDidDetails,\n  submitterAccount: KeyringPair,\n  credential: Kilt.Credential,\n  shouldRemove = false,\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<void> {\n  const tx = shouldRemove\n    ? // If the attestation is to be removed, create a `remove` tx,\n      // which revokes and removes the attestation in one go.\n      await credential.attestation\n        .getRemoveTx(0)\n        .then((tx) =>\n          attesterDid.authorizeExtrinsic(tx, keystore, submitterAccount.address)\n        )\n    : // Otherwise, simply revoke the attestation but leave it on chain.\n      // Hence, the storage is not cleared and the deposit not returned.\n      await credential.attestation\n        .getRevokeTx(0)\n        .then((tx) =>\n          attesterDid.authorizeExtrinsic(tx, keystore, submitterAccount.address)\n        )\n\n  // Submit the right tx to the KILT blockchain.\n  await Kilt.BlockchainUtils.signAndSubmitTx(tx, submitterAccount, {\n    resolveOn\n  })\n}\n"),(0,n.kt)("h2",{id:"claim-back-an-attestation-deposit"},"Claim Back an Attestation Deposit"),(0,n.kt)("p",null,"Claiming back the deposit of an attestation is semantically equivalent to revoking and removing the attestation, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require the Attester's signature:"),(0,n.kt)(a.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimAttestationDeposit(\n  depositPayer: KeyringPair,\n  credential: Kilt.Credential,\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<void> {\n  // Generate the submittable extrinsic to claim the deposit back.\n  const depositReclaimTx = await credential.attestation.getReclaimDepositTx()\n\n  // Submit the revocation tx to the KILT blockchain.\n  await Kilt.BlockchainUtils.signAndSubmitTx(depositReclaimTx, depositPayer, {\n    resolveOn\n  })\n}\n"))}k.isMDXComponent=!0}}]);