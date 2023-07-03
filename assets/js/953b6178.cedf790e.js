"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5336],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6550),s=a(1980),c=a(7392),p=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??u;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var f=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==l&&(u(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},1741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>w,frontMatter:()=>h,metadata:()=>k,toc:()=>b});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),i=a(5162);a(9578);const l={toc:[]},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please select your target network:"),(0,r.kt)("div",{className:"nested-tab"},(0,r.kt)(o.Z,{groupId:"exec-network",defaultValue:"Spiritnet",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Spiritnet",label:"Spiritnet",attributes:{"data-value":"magenta"},mdxType:"TabItem"},(0,r.kt)("p",null,"  To start the ",(0,r.kt)("strong",{parentName:"p"},"Spiritnet")," collator container, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'docker run -p 127.0.0.1:9933:9933 -p 30333:30333 -p 30334:30334 \\\n  -v ~/data:/data kiltprotocol/kilt-node:latest \\\n  --chain=spiritnet \\\n  --runtime=spiritnet \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-methods=unsafe \\\n  --unsafe-rpc-external \\\n  --name="name of collator" \\\n  --execution=wasm \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30333 \\\n  --base-path=/data/parachain \\\n  --keystore-path=/data/keystore \\\n  --collator \\\n  -- \\\n  --chain=polkadot \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30334 \\\n  --base-path=/data/relay \\\n  --execution=wasm\n'))),(0,r.kt)(i.Z,{value:"Peregrine",label:"Peregrine",attributes:{"data-value":"magenta"},mdxType:"TabItem"},(0,r.kt)("p",null,"  To start the ",(0,r.kt)("strong",{parentName:"p"},"Peregrine")," Collator container, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'docker run -p 127.0.0.1:9933:9933 -p 30333:30333 -p 30334:30334 \\\n  -v ~/data:/data kiltprotocol/kilt-node:latest \\\n  --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \\\n  --runtime=peregrine \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-methods=unsafe \\\n  --unsafe-rpc-external \\\n  --name="name of collator" \\\n  --execution=wasm \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30333 \\\n  --base-path=/data/parachain \\\n  --keystore-path=/data/keystore \\\n  --collator \\\n  -- \\\n  --chain=/node/dev-specs/kilt-parachain/peregrine-relay.json \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30334 \\\n  --base-path=/data/relay \\\n  --execution=wasm\n'))))))}c.isMDXComponent=!0;const p={toc:[]},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please select your target network:"),(0,r.kt)("div",{className:"nested-tab"},(0,r.kt)(o.Z,{groupId:"exec-network",defaultValue:"Spiritnet",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Spiritnet",label:"Spiritnet",attributes:{"data-value":"magenta"},mdxType:"TabItem"},"To join the ",(0,r.kt)("strong",null,"Spiritnet")," network, run:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'./target/release/kilt-parachain \\\n  --chain=spiritnet \\\n  --runtime=spiritnet \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-methods=unsafe \\\n  --name="name of collator" \\\n  --execution=wasm \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30333 \\\n  --base-path=$HOME/data/parachain \\\n  --keystore-path=$HOME/data/keystore \\\n  --collator \\\n  -- \\\n  --chain=polkadot \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30334 \\\n  --base-path=$HOME/data/relay \\\n  --execution=wasm\n'))),(0,r.kt)(i.Z,{value:"Peregrine",label:"Peregrine",attributes:{"data-value":"magenta"},mdxType:"TabItem"},"To join the ",(0,r.kt)("strong",null,"Peregrine"),"network, run:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'./target/release/kilt-parachain \\\n  --chain=./dev-specs/kilt-parachain/peregrine-kilt.json \\\n  --runtime=peregrine \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-methods=unsafe \\\n  --name="name of collator" \\\n  --execution=wasm \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30333 \\\n  --base-path=$HOME/data/parachain \\\n  --keystore-path=$HOME/data/keystore \\\n  --collator \\\n  -- \\\n  --chain=./dev-specs/kilt-parachain/peregrine-relay.json \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30334 \\\n  --base-path=$HOME/data/relay \\\n  --execution=wasm\n'))))))}d.isMDXComponent=!0;const h={id:"setup-node",title:"Set Up a Node"},m=void 0,k={unversionedId:"participate/staking/become_a_collator/setup-node",id:"participate/staking/become_a_collator/setup-node",title:"Set Up a Node",description:"There are several ways to build and run a collator node.",source:"@site/docs/participate/01_staking/01_become_a_collator/03_setup_node.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/setup-node",permalink:"/docs/participate/staking/become_a_collator/setup-node",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/03_setup_node.md",tags:[],version:"current",lastUpdatedAt:1688385431,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:3,frontMatter:{id:"setup-node",title:"Set Up a Node"},sidebar:"staking",previous:{title:"Minimum Hardware Requirements",permalink:"/docs/participate/staking/become_a_collator/hardware-requirements"},next:{title:"Set and Rotate Session Keys",permalink:"/docs/participate/staking/become_a_collator/session-keys"}},f={},b=[{value:"Configuration",id:"configuration",level:2},{value:"RPC and WS Endpoints",id:"rpc-and-ws-endpoints",level:3},{value:"WASM Runtime Execution",id:"wasm-runtime-execution",level:3},{value:"Specify the Right Chainspec",id:"specify-the-right-chainspec",level:3},{value:"Specify the Blockchain Storage Path",id:"specify-the-blockchain-storage-path",level:3},{value:"Obtain the Node Executable",id:"obtain-the-node-executable",level:2},{value:"Start the Node",id:"start-the-node",level:2},{value:"Sync the Blockchain State",id:"sync-the-blockchain-state",level:2}],g={toc:b},y="wrapper";function w(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are several ways to build and run a collator node.\nHere, we show both how to use a Docker image and how to compile the source code directly from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node"},"our chain repository"),"."),(0,r.kt)("p",null,"There are currently two different runtimes (i.e., two different parachain environments) that a KILT collator can be part of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spiritnet"),": the official public network, which contains only stable and thoroughly-tested features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Peregrine"),": the public test network whose runtime is as close to that of Spiritnet as possible. It can be used to try things out before executing them on the production Spiritnet chain, which involves spending tokens that have real monetary value.")),(0,r.kt)("p",null,"Each runtime has its own benchmark measurements."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The remainder of this guide explaining how to set up and run a collator is mainly for the official ",(0,r.kt)("strong",{parentName:"p"},"Spiritnet")," parachain.\nHowever, we recommend trying out the setup on our Peregrine testnet first.\nHence, at each step where it is applicable, we indicate what differs between the Peregrine and Spiritnet configuration for the collator node to join either network.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Running a collator requires a few configuration parameters.\nSome of the parameters might appear twice in the command to start the collator, because a parachain collator actually runs two blockchains.\nThe parameters that are listed before the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," are related to the parachain node itself (the KILT blockchain), whereas the parameters following the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," are related to the Relay Chain, e.g., Kusama or Polkadot."),(0,r.kt)("p",null,"The following is a description of some of the parameters that can be set when spinning up a parachain collator node."),(0,r.kt)("h3",{id:"rpc-and-ws-endpoints"},"RPC and WS Endpoints"),(0,r.kt)("p",null,"As a collator, you need to link your session keys to your collator account.\nThese session keys can be generated by calling an RPC endpoint that the collator optionally exposes.\nExposing the RPC endpoint can be done using the following parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--rpc-port=9933\n--rpc-cors=all\n--rpc-methods=unsafe\n--unsafe-rpc-external // ONLY for Docker-based setups\n")),(0,r.kt)("p",null,"Exposing the RPC endpoint of a collator does not imply that it becomes accessible via the PolkadotJS Apps interface, because this requires a WebSocket to connect to the node."),(0,r.kt)("p",null,"By default, the WebSocket port used by the node is configured to be ",(0,r.kt)("inlineCode",{parentName:"p"},"9944"),", but it can be changed by specifying a different value with ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port=<ws_port>"),"."),(0,r.kt)("p",null,"Connecting from a remote host to either the collator RPC endpoint or WS endpoint requires explicitly exposing those endpoints to the public with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-external")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," options."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Be aware that it is highly discouraged to publicly expose an RPC endpoint, especially if it allows the execution of unsafe RPC calls!\nYou should be the only one able to call the RPC endpoint.\nFor a secure setup, follow the instructions in the previous section about ",(0,r.kt)("a",{parentName:"p",href:"/docs/participate/staking/become_a_collator/session-keys"},"generating the session keys"),".")),(0,r.kt)("h3",{id:"wasm-runtime-execution"},"WASM Runtime Execution"),(0,r.kt)("p",null,"A KILT collator node should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--execution=wasm")," parameter for both the Relay Chain and parachain collation.\nThe alternative to WASM runtime execution is native runtime execution, which might be faster but can, in some cases, deviate from the WASM execution logic and result in a different state.\nWhen this happens, the collator node will crash and will stop synchronizing with the network and stop producing blocks.\nSince the WASM runtime logic is part of the blockchain state itself and hence represents the single source of truth, all nodes should execute the WASM version of the runtime logic."),(0,r.kt)("h3",{id:"specify-the-right-chainspec"},"Specify the Right Chainspec"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," parameter indicates which blockchain the KILT collator node will join.\nThis parameter must be specified for both the parachain ",(0,r.kt)("strong",{parentName:"p"},"and")," the Relay Chain, since both chains are, as a matter of fact, separate blockchains.\nThe KILT parachain accepts an additional parameter to select the environment to use for the WASM runtime execution.\nThis can either be ",(0,r.kt)("inlineCode",{parentName:"p"},"peregrine")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"spiritnet"),"."),(0,r.kt)("p",null,"Hence, to start a collator node for the Spiritnet network, the parameter would be ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain=spiritnet"),".\nUnfortunately, there is no hardcoded chain spec for the Peregrine network, so the full path of the chainspec file must be provided ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json"),".\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/blob/develop/dev-specs/kilt-parachain/peregrine-kilt.json"},"KILT node repository")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kiltprotocol/kilt-node/tags"},"Docker image")," for more information."),(0,r.kt)("h3",{id:"specify-the-blockchain-storage-path"},"Specify the Blockchain Storage Path"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," parameter specifies where all the persistent files must be stored.\nBy default, the session keys will also be stored in the ",(0,r.kt)("em",{parentName:"p"},"base path"),", but we recommend separating them from the other files.\nThis makes sure that the keyfiles are not accidentally lost or published when the blockchain database is either backed up or restored.\nYou can configure where to store the session keys using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--keystore-path")," option.\nSince the collator will collate only for the parachain, there is no need to add this to the relaychain part of the command."),(0,r.kt)("h2",{id:"obtain-the-node-executable"},"Obtain the Node Executable"),(0,r.kt)(o.Z,{groupId:"exec-strategy",defaultValue:"Docker",values:[{label:"Binary",value:"Binary"},{label:"Docker",value:"Docker"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Binary",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to build the KILT collator executable, you need to have a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"nightly version of Rust")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," target for this toolchain installed.\nWe recommend aligning your nightly version with the one used in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node"},"KILT node repository")," by executing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/blob/develop/scripts/init.sh"},"init script"),".\nAfter cloning the repository, you can build the executable by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," command below from the root directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the repository\ngit clone https://github.com/KILTprotocol/kilt-node.git\n# Check out master branch\ngit checkout master\n# Set up the build environment by installing the Rust compiler.\n./scripts/init.sh\n# Build the executable from source enabling all the optimizations with --release.\ncargo build --release -p kilt-parachain\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You must not use the default ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," branch to build the executable.\nInstead, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/releases"},"latest release")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," should be used.")),(0,r.kt)("p",null,"The compiled executable can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"./target/release/kilt-parachain")," after the build process completes successfully.")),(0,r.kt)(i.Z,{value:"Docker",mdxType:"TabItem"},(0,r.kt)("p",null,"Simply pull the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kiltprotocol/kilt-node/tags"},"latest Docker image"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kiltprotocol/kilt-node:latest\n")))),(0,r.kt)("h2",{id:"start-the-node"},"Start the Node"),(0,r.kt)(o.Z,{groupId:"exec-strategy",defaultValue:"Docker",values:[{label:"Binary",value:"Binary"},{label:"Docker",value:"Docker"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Binary",mdxType:"TabItem"},(0,r.kt)(d,{mdxType:"StartNodeBinary"}),(0,r.kt)("p",null,"In either case, if the node needs to be reachable via PolkadotJS Apps, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," flag must be added to the collator options, before the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," divider.")),(0,r.kt)(i.Z,{value:"Docker",mdxType:"TabItem"},(0,r.kt)(c,{mdxType:"StartNodeDocker"}),(0,r.kt)("p",null,"In either case, if the node needs to be reachable via PolkadotJS Apps, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," flag must be added to the collator options, before the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," divider, and the WS port must be exposed from the container with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"-p 9944:9944")," parameter.\nMake sure that you only expose the websocket port publicly if you are not running a collator."),(0,r.kt)("p",null,"In addition to the websocket, you need to expose the ports for p2p connections.\nIn the the command above these are ",(0,r.kt)("inlineCode",{parentName:"p"},"30333")," for the parachain and ",(0,r.kt)("inlineCode",{parentName:"p"},"30334")," for the relaychain.\nMake sure you configure your firewall in a way that allows incoming and outgoing connections to these ports."),(0,r.kt)("p",null,"The Docker command will map the database files for the Relay Chain and parachain as well as the keystore directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/data")," on the host system using the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-v $HOME/data:/data"),".\nThat way the blockchain database files are not lost when and if the Docker container is removed and can be mounted back on the next containers."),(0,r.kt)("p",null,"The Docker container runs as an user with id 1000 and will try to access the mapped volume and the files it contains.\nIf the files are not owned by a user with id 1000, this will result in an error.\nIf that is the case, run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chown -R 1000:1000 $HOME/data")," to give the container access."))),(0,r.kt)("h2",{id:"sync-the-blockchain-state"},"Sync the Blockchain State"),(0,r.kt)("p",null,"Before a collator can author blocks, the node needs to fully sync up with both the parachain and the Relay Chain.\nDepending on the size of the blockchain states, it may take a number of hours to few days for the node to catch up.\nMore details can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#synchronize-chain-data"},"Polkadot network docs"),"."),(0,r.kt)("admonition",{title:"Example of node sync:",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-Example",metastring:"of node sync",of:!0,node:!0,sync:!0},"2021-06-17 02:34:34 \ud83d\udd0d Discovered new external address for our node: /ip4/100.102.231.64/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:36 \u2699\ufe0f  Syncing 409.2 bps, target=#8062689 (5 peers), best: #3477 (0x63ad\u2026e046), finalized #3072 (0x0e4c\u2026f587), \u2b07 153.2kiB/s \u2b06 12.9kiB/s\n2021-06-17 02:34:37 \ud83d\udd0d Discovered new external address for our node: /ip4/100.111.175.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:38 \ud83d\udd0d Discovered new external address for our node: /ip4/100.100.176.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:41 \u2699\ufe0f  Syncing 386.2 bps, target=#8062690 (7 peers), best: #5409 (0x1d76\u20268c3d), finalized #5121 (0x8ad1\u2026b6dc), \u2b07 96.1kiB/s \u2b06 10.9kiB/s\n2021-06-17 02:34:46 \u2699\ufe0f  Syncing 394.8 bps, target=#8062691 (11 peers), best: #7383 (0x0689\u20266f1e), finalized #7168 (0x72a9\u20268d8c), \u2b07 352.9kiB/s \u2b06 5.1kiB/s\n2021-06-17 02:34:51 \u2699\ufe0f  Syncing 347.0 bps, target=#8062692 (12 peers), best: #9118 (0x66fc\u2026cce3), finalized #8704 (0x14c9\u2026705e), \u2b07 62.7kiB/s \u2b06 1.7kiB/s\n"))))}w.isMDXComponent=!0},9578:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",featureLink:"featureLink_rhf2"}}}]);