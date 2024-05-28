"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4668],{14536:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=s(17624),o=s(4552),r=s(61268),a=s(87768);const i={id:"session-keys",title:"Set and Rotate Session Keys"},c=void 0,l={id:"participate/staking/become_a_collator/session-keys",title:"Set and Rotate Session Keys",description:"As a collator, you need to link your session keys to your collator account.",source:"@site/docs/participate/01_staking/01_become_a_collator/04_session_keys.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/session-keys",permalink:"/docs/participate/staking/become_a_collator/session-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/04_session_keys.md",tags:[],version:"current",lastUpdatedAt:1716901802,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:4,frontMatter:{id:"session-keys",title:"Set and Rotate Session Keys"},sidebar:"staking",previous:{title:"Set Up a Node",permalink:"/docs/participate/staking/become_a_collator/setup-node"},next:{title:"Join the Collator Candidate Pool",permalink:"/docs/participate/staking/become_a_collator/join"}},d={},u=[{value:"Generate New Session Keys",id:"generating-session-keys",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["As a collator, you need to link your session keys to your collator account.\nOnce linked, the keys are used to identify your collator node.\nYour collator address will receive the permit to build blocks, but the session keys pass this permit to your node.\nTo check whether the account has already some session keys set, the RPC functions ",(0,n.jsx)(t.code,{children:"author > hasKey(publicKey, keyType)"})," and ",(0,n.jsx)(t.code,{children:"author > hasSessionKeys(sessionKeys)"})," can be called."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(77936).c+"",width:"2008",height:"748"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The session keys associate a collator node with an account on the blockchain.\nThey are hot keys that must be kept online.\nIt is recommended to change them throughout sessions."})}),"\n",(0,n.jsx)(t.h2,{id:"generating-session-keys",children:"Generate New Session Keys"}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"Make sure that no unauthorized party is able to access the RPC endpoint of the collator.\nUse SSH forwarding for the RPC port when needing to perform some RPC operations on the node with"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"ssh -L 127.0.0.1:9944:127.0.0.1:9944 <user>@<server>\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["There are three ways to create the session keys.\nWe recommend using the curl command on the same host that the node is running or from a host that has an active SSH tunnel with it.\nThis way there is no need to add the ",(0,n.jsx)(t.code,{children:"--unsafe-rpc-external"})," argument to the node.\nNevertheless, the session keys can also be rotated using the PolkadotJS Apps interface or by directly storing the new key in the node's keystore."]}),"\n",(0,n.jsxs)(r.c,{defaultValue:"curl",values:[{label:"curl",value:"curl"},{label:"Apps",value:"apps"},{label:"Subkey",value:"subkey"}],children:[(0,n.jsxs)(a.c,{value:"curl",children:[(0,n.jsx)(t.p,{children:"A collator can use the following command to rotate the session key."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9944\n'})}),(0,n.jsxs)(t.p,{children:["The answer should look like the JSON object below.\nThe ",(0,n.jsx)(t.code,{children:"result"})," key is the HEX-encoded public part of the newly created session key."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{"jsonrpc":"2.0","result":"0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010","id":1}\n'})})]}),(0,n.jsxs)(a.c,{value:"apps",children:[(0,n.jsxs)(t.p,{children:["In order to use the PolkadotJS Apps UI, the node WebSocket endpoint must be reachable.\nThis can be done either by publicly exposing it with the ",(0,n.jsx)(t.code,{children:"--rpc-external"})," flag, which is discouraged, or by setting up an SSH tunnel for the WebSocket endpoint with ",(0,n.jsx)(t.code,{children:"ssh -L 127.0.0.1:9944:127.0.0.1:9944 <user>@<server>"}),".\nIf the latter option is chosen, there is no need to have a separate SSH tunnel for RPC traffic as all the RPC operations can be performed directly from the now-accessible PolkadotJS Apps interface."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(53856).c+"",width:"638",height:"218"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(13932).c+"",width:"330",height:"544"})}),(0,n.jsxs)(t.p,{children:["After connecting to the node, select ",(0,n.jsx)(t.code,{children:"Developer -> RPC calls -> author -> rotateKeys()"})," from the menu.\nThis will generate a new session key which replaces the existing one."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(64088).c+"",width:"1998",height:"500"})})]}),(0,n.jsxs)(a.c,{value:"subkey",children:[(0,n.jsxs)(t.p,{children:["A keypair can be created using the ",(0,n.jsx)(t.a,{href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey",children:"subkey tool"})," by following the steps in the tool's official documentation.\nThe generated private and public keys can then be saved within the keystore folder of the collator node to be used as session keys."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\u276f subkey generate -n kilt\nSecret phrase `very secure private key you should not use the example private key` is account:\n  Secret seed:      0xcafe97b4b8f0adc1adeb3feef30bf2e5b9d49ddd897f268c8027c850DeadBEEF\n  Public key (hex): 0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010\n  Account ID:       0xda3861a45e0197f3ca145c2c209f9126e5053asdg03e459af4255cf8011d51010\n  SS58 Address:     4srC1aowD94H9UH9xsnfv7XV6oHU6dhCymKYZHWKsdddaP29\n"})}),(0,n.jsxs)(t.p,{children:["The name of the file must be the ",(0,n.jsx)(t.em,{children:"public"})," key prepended with ",(0,n.jsx)(t.code,{children:"61757261"})," (HEX representation of ",(0,n.jsx)(t.code,{children:"aura"}),") and without the ",(0,n.jsx)(t.code,{children:"0x"})," prefix, while the content of the file has to be the secret phrase."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(22884).c+"",width:"1346",height:"137"})}),(0,n.jsxs)(t.p,{children:["For instance, with the keypair generated in the example, the session key file would be stored at the path ",(0,n.jsx)(t.code,{children:"./keystores/61757261da3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010"}),"."]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The rotation of the session key should be done periodically to ensure that your collator can remain secure and safe from attacks.\nYou can find more information about session keys in the ",(0,n.jsx)(t.a,{href:"https://docs.substrate.io/v3/concepts/session-keys/#generation-and-use",children:"Substrate Documentation"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"Once a new session key is generated, you must then link that key to your collator account in order to receive rewards for producing new blocks..\nThis operation is performed by submitting a signed extrinsic to the blockchain."}),"\n",(0,n.jsxs)(t.p,{children:["For Spiritnet, the endpoint is ",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer",children:"wss://spiritnet.kilt.io"}),", while for Peregrine it is ",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer",children:"wss://peregrine.kilt.io"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Developer -> Extrinsics -> Submission"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select your collator KILT address as the extrinsic submitter (the ",(0,n.jsx)(t.em,{children:"using the selected account"})," field)"]}),"\n",(0,n.jsxs)(t.li,{children:["Set up the following extrinsic: ",(0,n.jsx)(t.code,{children:"session -> setKeys(keys, proof)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"keys"})," -> the public session key (",(0,n.jsx)(t.code,{children:"0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010"})," in the example above)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"proof"})," -> the proof of ownership. It can be set to ",(0,n.jsx)(t.code,{children:"0x00"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Sign and submit the extrinsic (the ",(0,n.jsx)(t.em,{children:"Submit Transaction"})," button)"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(69624).c+"",width:"2006",height:"838"})}),"\n",(0,n.jsx)(t.p,{children:"Once the extrinsic is executed, you will have linked the new session key to your account and can start receiving rewards for producing new blocks.\nHowever, the new session key does not become effective immediately but with the start of the next session."})]})}function p(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},87768:(e,t,s)=>{s.d(t,{c:()=>a});s(11504);var n=s(65456);const o={tabItem:"tabItem_Ymn6"};var r=s(17624);function a(e){let{children:t,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.c)(o.tabItem,a),hidden:s,children:t})}},61268:(e,t,s)=>{s.d(t,{c:()=>w});var n=s(11504),o=s(65456),r=s(53943),a=s(55592),i=s(95288),c=s(10632),l=s(27128),d=s(21148);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:o}}=e;return{value:t,label:s,attributes:n,default:o}}))}(s);return function(e){const t=(0,l.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const o=(0,a.Uz)(),r=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,c._M)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:o}=e,r=h(e),[a,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,u]=f({queryString:s,groupId:o}),[b,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.IN)(s);return[o,(0,n.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:o}),y=(()=>{const e=l??b;return p({value:e,tabValues:r})?e:null})();(0,i.c)((()=>{y&&c(y)}),[y]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=s(93664);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(17624);function g(e){let{className:t,block:s,selectedValue:n,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.MV)(),d=e=>{const t=e.currentTarget,s=c.indexOf(t),o=i[s].value;o!==n&&(l(t),a(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;t=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;t=c[s]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.c)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.c)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function k(e){let{lazy:t,children:s,selectedValue:o}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,o.c)("tabs-container",y.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(k,{...e,...t})]})}function w(e){const t=(0,m.c)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(t))}},77936:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/author-hasKey-6caffb2e9451f1adac3c41d19af71c98.png"},64088:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/author-rotateKeys-05b59c348c0849e595f378b8fd0677ce.png"},53856:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/chain-menu-3faf84d47516433952fdf28656432cdf.png"},13932:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/chain-selection-2e5266e706e96d168aa43bd9924db793.png"},22884:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/session-key-file-34f900633d965771da7ad282f7dcb4ab.png"},69624:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/session-setKeys-13186e3682ebaaf4b589a81523e8a9f4.png"},4552:(e,t,s)=>{s.d(t,{I:()=>i,M:()=>a});var n=s(11504);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);