"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3916],{24796:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(17624),o=s(4552),a=s(61964);const i={id:"web3names",title:"web3names"},c=void 0,r={id:"concepts/web3names",title:"web3names",description:"web3names are user-friendly aliases for KILT DIDs.",source:"@site/docs/concepts/03_web3names.md",sourceDirName:"concepts",slug:"/concepts/web3names",permalink:"/docs/concepts/web3names",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/03_web3names.md",tags:[],version:"current",lastUpdatedAt:1716901802,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:3,frontMatter:{id:"web3names",title:"web3names"},sidebar:"concepts",previous:{title:"KILT Decentralized Identifiers (DIDs)",permalink:"/docs/concepts/did"},next:{title:"AssetDIDs",permalink:"/docs/concepts/asset-dids"}},d={},l=[{value:"Linking multiple accounts to a web3name",id:"linking-multiple-accounts-to-a-web3name",level:3},{value:"KILT DIDs vs. KILT accounts",id:"kilt-dids-vs-kilt-accounts",level:2},{value:"The cost for storing a web3name",id:"the-cost-for-storing-a-web3name",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'web3names are user-friendly aliases for KILT DIDs.\nThey serve the same purpose as domain names for IP addresses.\nDo you know the IP address for the "kilt.io" domain name? \ud83e\udd37\ud83c\udffd\u200d\u2640\ufe0f\nThere is a one-to-one relationship between DIDs and web3names.\nThis means that you can link a KILT DID to only one web3name, and a web3name can only claim one DID.'}),"\n",(0,t.jsxs)(n.p,{children:["Each web3name is globally unique within the KILT blockchain and consists of a sequence of a minimum of 3 to a maximum of 32 characters taken from a specific character set to enhance human readability and reduce the chances of ",(0,t.jsx)(n.em,{children:"two web3names looking the same, despite being different"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The character set includes only:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"lowercase letters"}),", from ",(0,t.jsx)(n.code,{children:"a"})," to ",(0,t.jsx)(n.code,{children:"z"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"digits"})," from ",(0,t.jsx)(n.code,{children:"0"})," to ",(0,t.jsx)(n.code,{children:"9"})]}),"\n",(0,t.jsxs)(n.li,{children:["the symbols ",(0,t.jsx)(n.code,{children:"-"})," and ",(0,t.jsx)(n.code,{children:"_"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A regex that matches all and only the allowed web3names is the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"^[a-z0-9_-]{3,32}$\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the global URI space, web3names are prefixed with the ",(0,t.jsx)(n.code,{children:"w3n:"})," URI namespace.\nFor example, the full URI for the web3name ",(0,t.jsx)(n.code,{children:"example-web3name"})," is ",(0,t.jsx)(n.code,{children:"w3n:example-web3name"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"linking-multiple-accounts-to-a-web3name",children:"Linking multiple accounts to a web3name"}),"\n",(0,t.jsx)(n.p,{children:"Beyond linking a web3name, KILT lets DID owners link multiple accounts to a single DID.\nThese accounts aren't specific to the KILT blockchain.\nThey can reference any chain within the Polkadot ecosystem.\nEach account to DID link requires paying a small deposit."}),"\n",(0,t.jsxs)(n.p,{children:["For DIDs that have also claimed a web3name, the linking feature opens the way to a host of possibilities.\nFor example, showing the web3name of a collator's account on the ",(0,t.jsx)(n.a,{href:"https://stakeboard.kilt.io/",children:"KILT Stakeboard"}),"."]}),"\n",(0,t.jsx)(a.c,{alt:"DID lookup diagram",sources:{light:"/img/concepts/did/did-lookup-light.png",dark:"/img/concepts/did/did-lookup-dark.png"}}),"\n",(0,t.jsxs)(n.p,{children:["For a detailed developer-oriented guide to web3names and account linking, read the ",(0,t.jsx)(n.a,{href:"/docs/develop/sdk/cookbook/web3names/web3name-claim",children:"web3name Cookbook section"})," and the ",(0,t.jsx)(n.a,{href:"/docs/develop/sdk/cookbook/account_linking/account-link",children:"account linking Cookbook section"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"kilt-dids-vs-kilt-accounts",children:"KILT DIDs vs. KILT accounts"}),"\n",(0,t.jsx)(n.p,{children:"While you can link multiple accounts to a DID, it's important to notice the difference between the two."}),"\n",(0,t.jsxs)(n.p,{children:["KILT ",(0,t.jsx)(n.em,{children:"accounts"})," are classical blockchain accounts, that can hold and send KILT tokens, and sign and submit transactions."]}),"\n",(0,t.jsxs)(n.p,{children:["KILT ",(0,t.jsx)(n.em,{children:"DIDs"})," are a higher level construct derived from KILT accounts, but are completely separated from them."]}),"\n",(0,t.jsxs)(n.p,{children:["This means that ",(0,t.jsx)(n.strong,{children:"KILT DIDs can't hold any KILT tokens"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You use DIDs to authorize (sign) some operations, but you must submit the resulting signature to the KILT blockchain with a KILT account, which must pay for the transaction fees."}),"\n",(0,t.jsxs)(n.p,{children:["Don't consider a DID ",(0,t.jsx)(n.code,{children:"did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e"})," the same as the account ",(0,t.jsx)(n.code,{children:"4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e"}),", although they share the same identifier."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["There's no (immediate) relationship between the two, so you should consider a DID ",(0,t.jsx)(n.strong,{children:"only as a DID"}),' and never as an account.\nIf instructed to "',(0,t.jsxs)(n.em,{children:["send some funds to the DID by using the account after the ",(0,t.jsx)(n.code,{children:"did:kilt"})," prefix"]}),'". Ignore the advice, as without the required technical expertise, sending funds to a DID can result in loss of those funds.']})}),"\n",(0,t.jsx)(n.h3,{id:"the-cost-for-storing-a-web3name",children:"The cost for storing a web3name"}),"\n",(0,t.jsx)(n.p,{children:"Storing a web3name on the KILT blockchain requires providing a constant deposit, which is currently around 0.11 KILT. The deposit amount is calculated based on the worst-case scenario for a web3name, which is when a user provides a name with 32 characters.\nThe deposit serves as a security measure to ensure the integrity of the KILT blockchain and incentivize users to manage their web3names responsibly.\nA deposit discourages spamming or unnecessary creation of web3names. You can reclaim the deposit can by deleting a web3name."})]})}function m(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>i});var t=s(11504);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);