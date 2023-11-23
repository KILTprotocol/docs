"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={id:"treasury-tip",title:"Treasury Tips"},o=void 0,s={unversionedId:"participate/treasury-tip",id:"participate/treasury-tip",title:"Treasury Tips",description:"Similar to opening a Treasury proposal, anyone can start a tipping process.",source:"@site/docs/participate/05_propose_tip.md",sourceDirName:"participate",slug:"/participate/treasury-tip",permalink:"/docs/participate/treasury-tip",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/05_propose_tip.md",tags:[],version:"current",lastUpdatedAt:1700736137,formattedLastUpdatedAt:"Nov 23, 2023",sidebarPosition:5,frontMatter:{id:"treasury-tip",title:"Treasury Tips"}},p={},l=[{value:"Lifecycle of a Tipping Process",id:"lifecycle-of-a-tipping-process",level:2},{value:"Report Awesome",id:"report-awesome",level:2},{value:"Example",id:"example",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"/docs/participate/treasury-proposal"},"opening a Treasury proposal"),", anyone can start a tipping process.\nOf course, success of such can only be expected if it is based on a meaningful contribution.\nThe variety of potential contributions is vast, please see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/contribute"},"Contribution guide")," for more details.\nThere, you will also find a high level description of tips and the differences to Treasury proposals."),(0,i.kt)("p",null,"In the following, we will lead you through the necessary steps from requesting a tip to finally receiving it."),(0,i.kt)("h2",{id:"lifecycle-of-a-tipping-process"},"Lifecycle of a Tipping Process"),(0,i.kt)("p",null,"Since anyone can propose a tip, you can certainly do that for someone else, the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("span",{style:{background:"#7cd27c",color:"black"}},"Beneficiary")),".\nIn that case, you, the ",(0,i.kt)("span",{style:{background:"#fff4bd",color:"black"}},(0,i.kt)("strong",{parentName:"p"},"Finder")),", will need to put down a ",(0,i.kt)("strong",{parentName:"p"},"minor deposit"),', which depends on how long the "reason of the tip message" is, meaning how many characters form the reason why the tipping is being proposed.\nOverall, you should expect to provide ',(0,i.kt)("strong",{parentName:"p"},"between 0.05 to 0.2 KILT")," as a deposit.\nFor example, if you provide a URL that includes 60 characters, the deposit would be around 0.07 KILT."),(0,i.kt)("p",null,"After a tip proposal is made, the set of tippers, which is elected by the KILT Council, come to consensus on how much should be paid.\nEvery member of this stakeholder group, the ",(0,i.kt)("span",{style:{background:"#c7fff9",color:"black"}},(0,i.kt)("strong",{parentName:"p"},"Tippers")),", can submit an appropriate amount.\nEventually, the median of all tips is taken as the final amount."),(0,i.kt)("p",null,"Once at least half of the Tippers have declared their tip, the ending phase starts.\nAfter 24 hours have passed, the tip is automatically closed and paid from the Treasury.\nHowever, other Tippers can still submit their suitable amount and thus influence the final amount of the tip.\nAfter payout, the original deposit is returned to the Finder.\nThe proposal will not be approved and paid out until at least half the tippers have voted with ",(0,i.kt)("inlineCode",{parentName:"p"},"Aye"),". At any point before it is approved, the Finder can cancel the tip proposal and get back their deposit."),(0,i.kt)("admonition",{title:"No Finder's fees",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"While tipping allows a configurable percentage of the final tip to go to the original Finder, the current KILT configuration has set this fee to 0, meaning that the Finder's will thus not get rewarded for successful tips.")),(0,i.kt)("div",{className:"kilt-mermaid"},(0,i.kt)("mermaid",{value:'flowchart TD\n    %% Alice\n    Alice(("Alice \\n (Finder or Tipper)")):::Finder --\x3e Alice_Finder{Is Finder?}:::Finder \n    Alice_Finder -.-> |Yes| Alice_Finder_Deposit(reserve deposit):::Finder\n    Alice ----\x3e |"Provide tipping reason  (URL/Polkassembly) and set target"|Beneficiary(("Bob \\n (Beneficiary)")):::Beneficiary\n\n    %% Tipping Start\n    Beneficiary --\x3e Tip_1_Start("Wait for tips"):::process\n    Tip_1_Start --\x3e Tip_2_Threshold{"More than 50% \\n of Tippers tipped?"}:::process\n    Tip_2_Threshold:::process  --\x3e |No| Tip_1_Start\n\n    %% Tipping End\n    Tip_2_Threshold --\x3e |Yes| Tip_3_End{{Start of Ending phase}}\n    Tip_3_End:::processEnd --\x3e Tip_4_Wait(Wait for blocks to pass)\n    Tip_4_Wait:::processEnd --\x3e Tip_5_Blocks{"TipCountdown: \\n Sufficient number \\n of blocks passed?"}\n    Tip_5_Blocks:::processEnd --\x3e |No| Tip_4_Wait\n\n    %% Tipping close\n    Tip_5_Blocks --\x3e |Yes| Tip_6_Close(Trigger closing of tipping process):::Payment\n    Tip_6_Close -.-> |"Unreserve Deposit \\n (only if Finder)"| Alice_Finder_Deposit\n    Tip_6_Close --\x3e Payout_1("Final tip amount = median of received tips"):::Payment\n\n    %% Treasury\n    Payout_1 --\x3e Payout_2{Is there a Finder\'s fee?}:::Payment\n    Payout_2 --\x3e |Yes| Payout_3(Reduce final tip amount by Finder\'s fee):::Payment\n    Payout_2 --\x3e |No| Payout_4[("\ud83d\udcb0 Treasury")]:::Payment\n    Payout_3 --\x3e Payout_4{{"Ready to pay out"}}\n    Payout_4 --\x3e Treasury[("\ud83d\udcb0 Wait for Spending Period \\n of Treasury to end")]:::Payment\n    Treasury ==> |"Receive tip"| Beneficiary\n    Treasury -.-> |"Pay out Finder\'s fee"| Alice\n\n    %% classes\n    classDef Finder fill:#fff4bd,stroke:none;\n    classDef process fill:#c7fff9,stroke:black;\n    classDef processEnd fill:#6be6d8,stroke:black;\n    classDef Beneficiary fill:#7cd27c,stroke:#333,stroke-width:0px;\n    classDef Payment fill:#ff9393,stroke:black;'})),(0,i.kt)("h2",{id:"report-awesome"},"Report Awesome"),(0,i.kt)("p",null,"Proposing a tip much is simpler than opening a Treasury proposal."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7796).Z,width:"1646",height:"466"})),(0,i.kt)("p",null,"All you need to do is navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Governance > Treasury > Tips")," and hit the ",(0,i.kt)("inlineCode",{parentName:"p"},"+ Propose tip")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6349).Z,width:"2334",height:"820"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select your corresponding account as the extrinsic submitter (the ",(0,i.kt)("em",{parentName:"li"},"submit with account")," field)"),(0,i.kt)("li",{parentName:"ol"},"Provide the address you consider worthy of receiving a tip: (the ",(0,i.kt)("em",{parentName:"li"},"beneficiary")," field)"),(0,i.kt)("li",{parentName:"ol"},"Provide a reason (the ",(0,i.kt)("em",{parentName:"li"},"tip reason")," field). This can either be some ",(0,i.kt)("strong",{parentName:"li"},"descriptive words or a URL"),". The latter should point to the contribution(s), e.g., the GitHub pull request, blog posts, translations or videos among other things. Please note that the tipping process is expected to fail if the reason is not recognizable."),(0,i.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,i.kt)("em",{parentName:"li"},"Propose tip")," button)")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Since tipping is a default Substrate feature which exists on Kusama and Polkadot among others, please have a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-treasury#tipping"},"Polkadot Wiki")," for a thorough example."))}u.isMDXComponent=!0},6349:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tipping-extrinsic-7e32d55ba84bffab6771aa590a9afd6c.png"},7796:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tipping-navigation-65256ee30450e733f5622fb881e07c00.png"}}]);