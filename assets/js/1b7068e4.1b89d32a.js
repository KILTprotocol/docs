"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8781],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(34334),o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),o=n(34334),i=n(72389),l=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:k,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=k){const e=v[k];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==N&&(S(t),T(a),null!=k&&w(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},79369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),i=n(85162),l=n(22635);const s={id:"unlock-unstaked",title:"Unlock Unstaked Tokens"},u=void 0,c={unversionedId:"participate/staking/unlock-unstaked",id:"participate/staking/unlock-unstaked",title:"Unlock Unstaked Tokens",description:"Before you can unlock your previously staked tokens, you have to wait 7 days (in block time).",source:"@site/docs/participate/01_staking/04_unlock_unstaked.md",sourceDirName:"participate/01_staking",slug:"/participate/staking/unlock-unstaked",permalink:"/docs/participate/staking/unlock-unstaked",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/04_unlock_unstaked.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"unlock-unstaked",title:"Unlock Unstaked Tokens"},sidebar:"staking",previous:{title:"Lifecycle of a Delegator",permalink:"/docs/participate/staking/delegate/lifecycle"},next:{title:"Troubleshooting",permalink:"/docs/participate/staking/troubleshooting"}},p={},d=[],m={toc:d};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before you can unlock your previously staked tokens, you have to wait 7 days (in block time)."),(0,r.kt)(l.ZP,{mdxType:"StakingTxDisclaimer"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(54582).Z,width:"1992",height:"1196"})),(0,r.kt)(o.Z,{groupId:"collator-delegator",defaultValue:"Collator",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Collator",label:"Collator",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select any account with enough balance to cover the transaction fee, which is around 0.005 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> unlockUnstaked(target)")),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,r.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,r.kt)("li",{parentName:"ol"},"Select your collator's KILT address (the ",(0,r.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You have unstaked tokens if you have either reduced your stake without increasing it for (at least) same amount afterwards or executing your exit request."))),(0,r.kt)(i.Z,{value:"Delegator",label:"Delegator",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select any account with enough balance to cover the transaction fee, which is around 0.005 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> unlockUnstaked(target)")),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,r.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,r.kt)("li",{parentName:"ol"},"Select the KILT address you delegated from (the ",(0,r.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Even if you have not exited, reduced or removed your delegation, you can still have unstaked tokens.\nThis can happen if either of the following events occurred"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You were kicked out of your collator candidate's delegation pool because all current delegators have a higher stake"),(0,r.kt)("li",{parentName:"ul"},"Your collator candidate intentionally left the collator pool."))))))}k.isMDXComponent=!0},22635:function(e,t,n){n.d(t,{ZP:function(){return i}});var a=n(83117),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,r.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,r.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,r.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,r.kt)("p",null," In Polkadot JS (",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}i.isMDXComponent=!0},54582:function(e,t,n){t.Z=n.p+"assets/images/parachainStaking-unlockUnstaked-b250815bd10f91e7aa7555e2530bb56f.png"}}]);