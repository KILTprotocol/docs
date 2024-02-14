"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5041],{1907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(5893),o=t(1151),a=t(9965);const i={id:"web3names",title:"web3names"},c=void 0,r={id:"concepts/web3names",title:"web3names",description:"In short, web3names are user-friendly aliases for KILT DIDs.",source:"@site/docs/concepts/03_web3names.md",sourceDirName:"concepts",slug:"/concepts/web3names",permalink:"/docs/concepts/web3names",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/03_web3names.md",tags:[],version:"current",lastUpdatedAt:1707906150,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:3,frontMatter:{id:"web3names",title:"web3names"},sidebar:"concepts",previous:{title:"KILT Decentralized Identifiers (DIDs)",permalink:"/docs/concepts/did"},next:{title:"AssetDIDs",permalink:"/docs/concepts/asset-dids"}},d={},l=[{value:"Linking Multiple Accounts to a web3name",id:"linking-multiple-accounts-to-a-web3name",level:3},{value:"Storing web3name",id:"storing-web3name",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In short, web3names are user-friendly aliases for KILT DIDs.\nThey serve the same purpose that domain names do for IP addresses: who knows the IP address under the ",(0,s.jsx)(n.code,{children:"kilt.io"})," domain name? \ud83e\udd37\ud83c\udffd\u200d\u2640\ufe0f\nThere is a one-to-one relationship between DIDs and web3names.\nThis means that a KILT DID can be linked to only one web3name, and a web3name can be claimed only by one DID."]}),"\n",(0,s.jsxs)(n.p,{children:["Each web3name is globally unique within the KILT space, and is composed of a sequence of a minimum of 3 to a maximum of 32 characters taken from a specific character set to enhance human readability and reduce the chances of ",(0,s.jsx)(n.em,{children:"two web3names looking the same, despite being different"}),".\nThe character set includes only:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"lowercase letters"}),", from ",(0,s.jsx)(n.code,{children:"a"})," to ",(0,s.jsx)(n.code,{children:"z"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"digits"})," from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"9"})]}),"\n",(0,s.jsxs)(n.li,{children:["the symbols ",(0,s.jsx)(n.code,{children:"-"})," and ",(0,s.jsx)(n.code,{children:"_"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A regex that would match all and only the allowed web3names would be the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"^[a-z0-9_-]{3,32}$\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the global URI space, web3names are prefixed with the ",(0,s.jsx)(n.code,{children:"w3n:"})," URI namespace.\nFor example, the full URI for the web3name ",(0,s.jsx)(n.code,{children:"example-web3name"})," is ",(0,s.jsx)(n.code,{children:"w3n:example-web3name"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"linking-multiple-accounts-to-a-web3name",children:"Linking Multiple Accounts to a web3name"}),"\n",(0,s.jsx)(n.p,{children:"Beyond linking a web3name, KILT allows DID owners to link multiple accounts to a single DID.\nThese accounts are not specific to the KILT blockchain; they can reference any chain within the Polkadot ecosystem.\nEach account to DID link requires the payment of a small deposit."}),"\n",(0,s.jsxs)(n.p,{children:["For DIDs that have also claimed a web3name, the linking feature opens up the way to a host of possibilities, e.g., showing the web3name of a collator's account on the ",(0,s.jsx)(n.a,{href:"https://stakeboard.kilt.io/",children:"KILT Stakeboard"}),"."]}),"\n",(0,s.jsx)(a.Z,{alt:"DID lookup diagram",sources:{light:"/img/concepts/did/did-lookup-light.png",dark:"/img/concepts/did/did-lookup-dark.png"}}),"\n",(0,s.jsxs)(n.p,{children:["For a detailed developer-oriented guide to web3names and account linking, see our ",(0,s.jsx)(n.a,{href:"/docs/develop/sdk/cookbook/web3names/web3name-claim",children:"web3name Cookbook section"})," and our ",(0,s.jsx)(n.a,{href:"/docs/develop/sdk/cookbook/account_linking/account-link",children:"account linking Cookbook section"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"While multiple accounts can be linked to a DID, it is important to notice the difference between the two."}),(0,s.jsxs)(n.p,{children:["KILT ",(0,s.jsx)(n.em,{children:"accounts"})," are classical blockchain accounts, that can be used to hold and send KILT tokens, as well as to sign and submit transactions.\nOn the other hand, KILT ",(0,s.jsx)(n.em,{children:"DIDs"})," are a higher level construct which are derived from KILT accounts, but are completely separated from them.\nThis means that ",(0,s.jsx)(n.strong,{children:"KILT DIDs cannot hold any KILT tokens"}),".\nDIDs are used to authorize (sign) some operations, but the resulting signature must then be submitted to the blockchain by a KILT account, which must pay for the transaction fees."]}),(0,s.jsxs)(n.p,{children:["A DID ",(0,s.jsx)(n.code,{children:"did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e"})," is not to be considered the same as the account ",(0,s.jsx)(n.code,{children:"4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e"}),', although they share the same identifier.\nThere is no (immediate) relationship between the two, thus the DID should always be considered a DID and never used as an account.\nTherefore, if instructed to "',(0,s.jsxs)(n.em,{children:["send some funds to the DID by using the account after the ",(0,s.jsx)(n.code,{children:"did:kilt"})," prefix"]}),'", please ignore the advice, as without the required technical expertise, sending funds to a DID can result in those funds being lost.']})]}),"\n",(0,s.jsx)(n.h3,{id:"storing-web3name",children:"Storing web3name"}),"\n",(0,s.jsx)(n.p,{children:"Storing a web3name in the blockchain requires providing a constant deposit, which is currently around 0.11 KILT. The deposit amount is calculated based on the worst-case scenario for a web3name, which is when a user provides a name with 32 characters. The deposit serves\nas a security measure to ensure the integrity of the blockchain and incentivize users to manage their web3names responsibly. By requiring a deposit, it discourages spamming or unnecessary creation of web3names. The deposit can be reclaimed by the user by deleting their web3name."})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(7294);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);