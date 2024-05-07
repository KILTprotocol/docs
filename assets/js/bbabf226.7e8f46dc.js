"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3652],{89708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=t(17624),i=t(4552),o=t(61268),s=t(87768);const a={id:"dip-accounts-kilt",title:"Enabling DIP for user accounts on the KILT blockchain"},c=void 0,l={id:"concepts/dip/dip-accounts-kilt",title:"Enabling DIP for user accounts on the KILT blockchain",description:"For an account to take advantage of DIP it needs a decentralized identity (DID) and to create a transaction on the provider chain to generate a cross-chain identity commitment.",source:"@site/docs/concepts/07_dip/04_user_account_kilt.md",sourceDirName:"concepts/07_dip",slug:"/concepts/dip/dip-accounts-kilt",permalink:"/docs/concepts/dip/dip-accounts-kilt",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/07_dip/04_user_account_kilt.md",tags:[],version:"current",lastUpdatedAt:1715070662,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:4,frontMatter:{id:"dip-accounts-kilt",title:"Enabling DIP for user accounts on the KILT blockchain"},sidebar:"concepts",previous:{title:"Decentralized Identity Provider (DIP) provider consumer pallet",permalink:"/docs/concepts/dip/consumer"},next:{title:"Dapp developer",permalink:"/docs/concepts/dip/dapp-developer"}},d={},h=[{value:"Using the KILT DIP SDK",id:"using-the-kilt-dip-sdk",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"DIP",type:"version-label"}),"\n",(0,r.jsx)(n.p,{children:"For an account to take advantage of DIP it needs a decentralized identity (DID) and to create a transaction on the provider chain to generate a cross-chain identity commitment."}),"\n",(0,r.jsx)(n.p,{children:"For an account to be able to do this, a Dapp developer needs to build the functionality into their app for a user using the DIP SDK."}),"\n",(0,r.jsx)(n.p,{children:"The implementation of this transaction is per-chain and this documentation provides an example of how to do this on the KILT blockchain."}),"\n",(0,r.jsx)(n.h2,{id:"using-the-kilt-dip-sdk",children:"Using the KILT DIP SDK"}),"\n",(0,r.jsx)(n.p,{children:"Add the SDK as a dependency:"}),"\n",(0,r.jsxs)(o.c,{groupId:"npm2yarn",children:[(0,r.jsx)(s.c,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @kiltprotocol/dip-sdk\n"})})}),(0,r.jsx)(s.c,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @kiltprotocol/dip-sdk\n"})})}),(0,r.jsx)(s.c,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @kiltprotocol/dip-sdk\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Include the following imports in your code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { generateDipAuthorizedTxForSibling } from '@kiltprotocol/dip-sdk'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"generateDipAuthorizedTxForSibling"})," method returns a submittable extrinsic promise for the provided call which includes a complete DIP proof according to the parameters provided. You can then use this on a consumer chain as the ",(0,r.jsx)(n.code,{children:"submitterAddress"})," parameter of which the provider chain is a sibling."]}),"\n",(0,r.jsxs)(n.admonition,{title:"What is a valid call",type:"info",children:[(0,r.jsx)(n.p,{children:"A valid call is a HEX-encoded call of the parent relaychain with the right key re-generated from the provided seedling information, i.e., either with the provided mnemonic or with the provided combination of base mnemonic and derivation path."}),(0,r.jsxs)(n.p,{children:["You can generate valid HEX-encoded calls at ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/",children:"PolkadotJS Apps"})," from the ",(0,r.jsx)(n.code,{children:"Developer > Extrinsics"})," menu."]}),(0,r.jsxs)(n.p,{children:["Copy the value from ",(0,r.jsx)(n.code,{children:"encoded call data"})," and pass it as a parameter."]})]}),"\n",(0,r.jsx)(n.p,{children:"The command requires the following variables:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"call"})," The ",(0,r.jsx)(n.code,{children:"Call"})," on the consumer chain that requires a DIP origin."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"consumerApi"})," The ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/docs/api/examples/promise/",children:(0,r.jsx)(n.code,{children:"ApiPromise"})})," instance for the consumer chain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"didUri"})," The DID URI of the DIP subject performing the cross-chain operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keyIds"})," The verification method IDs of the DID are revealed in the cross-chain operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"proofVersion"})," The version of the DIP proof to generate."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"providerApi"})," The ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/docs/api/examples/promise/",children:(0,r.jsx)(n.code,{children:"ApiPromise"})})," instance for the provider chain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"relayApi"})," The ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/docs/api/examples/promise/",children:(0,r.jsx)(n.code,{children:"ApiPromise"})})," instance for the parent relay chain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signer"})," The signing callback to sign the cross-chain transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"submitterAddress"})," The address of the transaction submitter on the consumer chain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keyRelationship"})," The ",(0,r.jsx)(n.a,{href:"https://kiltprotocol.github.io/sdk-js/types/types_src.VerificationKeyRelationship.html",children:(0,r.jsx)(n.code,{children:"VerificationKeyRelationship"})})," required for the DIP operation authorized on the relay chain."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"And the following optional environment variables:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHeight"})," The block number on the consumer chain to use for the DID signature. Uses the latest best block number, if not provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"genesisHash"})," The genesis hash of the consumer chain to use for the DID signature. Retrieved at runtime from the consumer chain If not provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"providerBlockHeight"})," The block number of the provider to use for the generation of the DIP proof. Uses the latest finalized block number if not provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"accountIdRuntimeType"})," The runtime type definition for an ",(0,r.jsx)(n.code,{children:"AccountId"})," on the consumer chain. Uses the ",(0,r.jsx)(n.code,{children:"AccountId"})," type if not provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumberRuntimeType"})," The runtime type definition for a ",(0,r.jsx)(n.code,{children:"BlockNumber"})," on the consumer chain. Uses the ",(0,r.jsx)(n.code,{children:"u64"})," type if not provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"identityDetailsRuntimeType"})," The runtime type definition for the ",(0,r.jsx)(n.code,{children:"IdentityDetails"})," on the consumer chain. Uses the ",(0,r.jsx)(n.code,{children:"Option<u128>"})," type, representing a simple nonce if not provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"includeWeb3Name"})," Flag indicating whether the generated DIP proof should include the web3name of the DID subject. If not provided, the web3name is not revealed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"linkedAccounts"})," The list of linked accounts to revealed in the generated DIP proof. No account is revealed if not provided."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},87768:(e,n,t)=>{t.d(n,{c:()=>s});t(11504);var r=t(65456);const i={tabItem:"tabItem_Ymn6"};var o=t(17624);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.c)(i.tabItem,s),hidden:t,children:n})}},61268:(e,n,t)=>{t.d(n,{c:()=>I});var r=t(11504),i=t(65456),o=t(53943),s=t(55592),a=t(95288),c=t(10632),l=t(27128),d=t(21148);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.Uz)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._M)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=u(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,h]=m({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,d.IN)(t);return[i,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),x=(()=>{const e=l??f;return p({value:e,tabValues:o})?e:null})();(0,a.c)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,o]),tabValues:o}}var b=t(93664);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(17624);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.MV)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==r&&(l(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.c)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,i.c)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,i.c)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function I(e){const n=(0,b.c)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(n))}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var r=t(11504);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);