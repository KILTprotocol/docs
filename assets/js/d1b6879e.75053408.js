"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2925],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(o),h=n,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,i[1]=a;for(var u=2;u<s;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2631:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const s={id:"contribute",title:"Contribution Guidelines"},i=void 0,a={unversionedId:"develop/contribute",id:"develop/contribute",title:"Contribution Guidelines",description:"As a decentralized network, KILT depends on the support of its community.",source:"@site/docs/develop/06_contribute.md",sourceDirName:"develop",slug:"/develop/contribute",permalink:"/docs/develop/contribute",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/06_contribute.md",tags:[],version:"current",lastUpdatedAt:1680610149,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:6,frontMatter:{id:"contribute",title:"Contribution Guidelines"}},l={},u=[{value:"Feature Requests",id:"feature-requests",level:2},{value:"Treasury Proposals",id:"treasury-proposals",level:2},{value:"Tips",id:"tips",level:2},{value:"Bug Reports",id:"bug-reports",level:2},{value:"Pull Requests",id:"pull-requests",level:2}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As a decentralized network, KILT depends on the support of its community.\nThere are many ways to contribute to KILT Protocol and the products and services built on it.\nThe following guide is to ",(0,n.kt)("strong",{parentName:"p"},"help builders and contributors")," find the resources needed to take action and work under the guidance of the core developers."),(0,n.kt)("p",null,"If you are interested in contributing but unsure how to begin, start in our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/7uyfMXh6AT"},"Clan KILT Discord")," channel.\nThe developers active there, which include the team that originally developed KILT and the wider KILT community, can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide feedback on proposals or ideas"),(0,n.kt)("li",{parentName:"ul"},"Discuss possible use cases and feature requests"),(0,n.kt)("li",{parentName:"ul"},"Make suggestions for non-technical contributions, including events, writing, or business models"),(0,n.kt)("li",{parentName:"ul"},"Answer questions about the protocol, services and products")),(0,n.kt)("h2",{id:"feature-requests"},"Feature Requests"),(0,n.kt)("p",null,"A feature request may be used to change the KILT Protocol and its services by adding new features or changing/removing existing ones."),(0,n.kt)("p",null,"A feature request is a meaningful way for anyone to contribute following the guidelines below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Begin a discussion with the community to ensure most see that the proposed feature adds real and meaningful value to KILT  Protocol, supporting its goals "),(0,n.kt)("li",{parentName:"ul"},"Open an Issue on the corresponding repository"),(0,n.kt)("li",{parentName:"ul"},"Give your Pull Request a clear title"),(0,n.kt)("li",{parentName:"ul"},"Provide a written outline of the feature request for discussion")),(0,n.kt)("p",null,"After discussion, if the community agrees that the change should be implemented, the proposer may also submit a Treasury proposal to support the work.\nThe guidelines of how to do that are presented in the next section."),(0,n.kt)("h2",{id:"treasury-proposals"},"Treasury Proposals"),(0,n.kt)("p",null,"A Treasury proposal is a request to receive funds from the Treasury pool.\nThe proposal should begin with a clear title, a written outline of the idea, and a discussion about implementation or deliverables as outlined above for feature requests.\nThe proposal should be for something that changes or adds value to KILT in a meaningful way."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In general, a Treasury proposal spend occurs after completing all outlined deliverables and not before.\nThus, it is recommended to open multiple consecutive milestone-based proposals rather than one large proposal to fund contributions.")),(0,n.kt)("p",null,"In addition you should:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Explain any milestones that have already been achieved"),(0,n.kt)("li",{parentName:"ul"},"Outline what needs to be done for the proposal to be completed")),(0,n.kt)("p",null,"The proposal should then be discussed with the community (including, for example, the KILT Technical Committee, governance, or relevant project team) using community channels such as ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/7uyfMXh6AT"},"Discord")," or ",(0,n.kt)("a",{parentName:"p",href:"https://kilt.polkassembly.network/discussions"},"Polkassembly"),".\nIf the community is not in agreement with the proposal, it is unlikely that it would be approved by governance.\nSee the ",(0,n.kt)("a",{parentName:"p",href:"/docs/participate/treasury-proposal"},"guide to creating a proposal")," for additional details."),(0,n.kt)("h2",{id:"tips"},"Tips"),(0,n.kt)("p",null,"Tips are a more agile and lightweight process to receive rewards for contributing to the KILT Protocol.\nEven though the funds also come from the Treasury, the procedure is more straightforward.\nThe major difference compared to Treasury proposals is that for tips, determining the bounty amount is part of the course of tipping.\nIn other words, the final tip amount is not clear beforehand and the group of pre-determined stakeholders comes to consensus on how much should be paid.\nEventually, the median of proposed tips will be awarded from the Treasury.\nCurrently, the tippers include all Council members and other core code contributors."),(0,n.kt)("p",null,"Both proposals and tips are similar in the sense that there must be someone (called the ",(0,n.kt)("em",{parentName:"p"},"Finder"),") to open the tipping process by providing a reason in the form of a URL or an explanation on ",(0,n.kt)("a",{parentName:"p",href:"https://kilt.polkassembly.network/"},"Polkassembly"),".\nIn contrast to proposals, tips do not require an extensive document; a URL to the pull request or the blog post suffices.\nIf the Finder is part of the group that decides about the bounty award, no deposit needs to be made.\nMoreover, the beneficiary will receive the entire tip without any deductions.\nOtherwise, a small deposit, which depends on the length of the message explaining the reason for the tip, needs to be reserved.\nThe deposit will be released after the tipping process has finished.\nAdditionally, the Finder also receives a minor Finder's fee of 20% which is subtracted from the final tip amount."),(0,n.kt)("p",null,"Therefore, ",(0,n.kt)("strong",{parentName:"p"},"even if you are not a contributor, you can open a tipping process for someone else and receive a smaller portion of their potential reward"),".\nOf course, you can also suggest potential tip candidates to the Council, which would then tip if they are deemed worthy."),(0,n.kt)("h2",{id:"bug-reports"},"Bug Reports"),(0,n.kt)("p",null,"We try our best, but bugs are an everyday reality with all software and are bound to happen.\nWe can't fix bugs we don't notice, so your potential findings give us the best possibility of keeping the project running smoothly and securely."),(0,n.kt)("p",null,"If you are unsure if a bug is a bug, it is best to open an issue and report it anyway.\nThe active developers will evaluate it and help to figure out the issue."),(0,n.kt)("p",null,"It is helpful to check if a report has already been filed in the related project.\nSearch the issues board for possible phrases that match the description of the bug.\nIt's possible you may not find an issue, but it's better to file a duplicated bug than not report one."),(0,n.kt)("p",null,"Once you begin reporting the bug, write a descriptive title so that if others find the same issue they can either add to your findings or know that the bug has already been reported.\nA bug report should be as detailed as possible, including steps to reproduce, screenshots, error reports, or code snippets.\nThe more details you provide, the easier it is to fix the issue."),(0,n.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,n.kt)("p",null,"Pull Requests (PR) are an integral part of contributions to evolve KILT.\nGitHub itself has some ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests"},"excellent documentation"),' on using the Pull Request feature.\nKILT uses the "',(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models"},"fork and pull"),'" model, where contributors push changes to their personal fork and create Pull Requests to bring those changes into the original source repository.'),(0,n.kt)("p",null,"Before starting a PR, it\u2019s best to contact other active developers and discuss the proposed changes.\nOpen an issue or directly contact some of the developers on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/7uyfMXh6AT"},"Discord")," to kick off the discussion and present the proposal.\nOnce approved, contributors can open a PR for review.\nThe PR will be reviewed and, if accepted, merged into the corresponding repository."),(0,n.kt)("p",null,"The following section is inspired by the Rust Programming Language ",(0,n.kt)("a",{parentName:"p",href:"https://rustc-dev-guide.rust-lang.org/contributing.html"},"Bug Report")," contribution guide."))}d.isMDXComponent=!0}}]);