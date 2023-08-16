"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[553],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(o),f=r,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1434:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={id:"vote",title:"Cast a Vote"},i=void 0,l={unversionedId:"participate/governance/vote",id:"participate/governance/vote",title:"Cast a Vote",description:"1. Go to KILT Spiritnet on Polkadot.JS",source:"@site/docs/participate/02_governance/01_vote.md",sourceDirName:"participate/02_governance",slug:"/participate/governance/vote",permalink:"/docs/participate/governance/vote",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/02_governance/01_vote.md",tags:[],version:"current",lastUpdatedAt:1692174893,formattedLastUpdatedAt:"Aug 16, 2023",sidebarPosition:1,frontMatter:{id:"vote",title:"Cast a Vote"},sidebar:"governance",next:{title:"Remove a Vote",permalink:"/docs/participate/governance/remove_vote"}},s={},u=[{value:"Backgrounder: Conviction Voting",id:"backgrounder-conviction-voting",level:2},{value:"Example 1 - Minimum",id:"example-1---minimum",level:3},{value:"Example 2 - Maximum",id:"example-2---maximum",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to KILT Spiritnet on ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.api.onfinality.io%2Fpublic-ws#/democracy"},"Polkadot.JS"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under the \u201cGovernance\u201d \u2192 \u201cDemocracy\u201d section you will see active referenda and proposals")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll to the referendum you wish to vote on")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click \u201cVote\u201d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This opens a separate pop-up.\nEnter the amount of coins you want to lock (1).\nThe minimum required to vote is 1 KILT. ",(0,r.kt)("br",null),"\nYou can vote with multiplier 0.1 (10% of your voting tokens) and your coins will only get locked for the duration of the vote.\n",(0,r.kt)("img",{src:o(8926).Z,width:"1344",height:"604"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you wish to increase your voting power by selecting a period of time to lock your coins, click the arrow next to conviction (2).\nChoose your conviction in the drop-down menu.",(0,r.kt)("br",null)),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"if the referendum is successful, your coins will remain locked for this period; if unsuccessful, your tokens will be unlocked when the referendum has finished.\nAlso because voting happens transparently on-chain, it requires a small transaction fee (around 0.017 KILT).\nLocked tokens or tokens used for staking can be simultaneously used for voting, but a usable, unlocked balance to cover this fee is required."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vote \u201cAye\u201d if you agree with the proposal and \u201cNay\u201d if you disagree.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click \u201cSign and Submit\u201d in the pop-up.\n",(0,r.kt)("img",{src:o(4308).Z,width:"1290",height:"607"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign the transaction by entering your password (Sporran or Polkadot.JS, depending on where you are connected.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"That\u2019s it!"))),(0,r.kt)("h2",{id:"backgrounder-conviction-voting"},"Backgrounder: Conviction Voting"),(0,r.kt)("p",null,"Like Polkadot and Kusama, KILT Protocol has conviction voting.\nThis means if you feel very strongly about a proposal, you can lock up tokens for longer periods to increase your voting power up to a maximum factor of 6.\nThe longer you lock your tokens, the stronger your vote will be weighted."),(0,r.kt)("p",null,"The times range from no lockup to a period of around 224 days, with the lockup time beginning after the voting period ends.\nTokens used for voting will always be locked until the end of the voting period, no matter what conviction you vote with.\nOf note: the lock time is based on the standard blocktime of 12 seconds per block and hence may vary due to differences in the real blocktime."),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(181).Z,width:"283",height:"199"})),(0,r.kt)("p",null,"If you choose not to lock any tokens, your vote only counts as 10% of the tokens that you commit to the voting (vote value), while the maximum lock up of around 224 days means you can make your vote count for 600% of the vote value.\nYou can choose to lock all or some of your coins for any range between 0.1x and 6x, with a lockup time as outlined above."),(0,r.kt)("p",null,"For example: You have a wallet with 1,001 KILT Coins.\nThis could include staked or vested coins."),(0,r.kt)("h3",{id:"example-1---minimum"},"Example 1 - Minimum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to vote but don\u2019t want to lock any coins."),(0,r.kt)("li",{parentName:"ul"},"You enter 1,000 into the \u201cvote value\u201d"),(0,r.kt)("li",{parentName:"ul"},"You choose \u201c0.1 x voting balance, no lockup period\u201d"),(0,r.kt)("li",{parentName:"ul"},"This gives you a voting power of 100 KILT Coins."),(0,r.kt)("li",{parentName:"ul"},"Note that all your 1,000 coins are locked for the time of the voting period (7 days).")),(0,r.kt)("h3",{id:"example-2---maximum"},"Example 2 - Maximum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You strongly believe in the referendum and want to vote with your full balance and maximum conviction."),(0,r.kt)("li",{parentName:"ul"},"Choose \u201c6 x voting balance, locked for 32x enactment (224 days)\u201d"),(0,r.kt)("li",{parentName:"ul"},"This will give you a voting power of 6,000 KILT Coins, if you use your full amount, or 6 times the voting power of the amount you chose.\nThe chosen amount will be locked for a period of around 224 days after the voting period ends (7 days).")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Rounded numbers are used as an example only \u2013 make sure that you always leave enough free, usable balance to cover the transaction fees.")),(0,r.kt)("p",null,"Conviction voting allows users with a small amount of tokens to increase their voting power, and deters a token holder from creating and voting on a malicious proposal and then leaving the network."),(0,r.kt)("p",null,"If the referendum is successful, your voting coins will remain locked for the time specified (which means that you will be unable to transfer them, but they will still be usable for staking during that time); if unsuccessful, your tokens will be unlocked after the referendum has finished."),(0,r.kt)("p",null,"KILT also uses an algorithm to adapt the amount of \u201caye\u201d (yes/agree) votes needed to pass depending on voter turnout: the greater the number of voters, the lower the threshold required to pass.\nTherefore, when voter turnout is low a supermajority is generally required; with a high turnout a simple majority is sufficient."),(0,r.kt)("p",null,"Before voting on any referendum, you can read more about it and join the discussion in ",(0,r.kt)("a",{parentName:"p",href:"https://kilt.polkassembly.network/referenda"},"Polkassembly")," (under \u201cDemocracy\u201d \u2192 \u201cReferenda\u201d).\nPolkassembly is an open source platform for providing information, context and a discussion forum for proposals and referenda in the Polkadot ecosystem."))}p.isMDXComponent=!0},8926:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cast-vote-c4e41b23dc41a28139988579661ed3b1.png"},181:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4308:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/vote-sign-sporran-740644c5ff574c8bad7dbba788066c8f.png"}}]);