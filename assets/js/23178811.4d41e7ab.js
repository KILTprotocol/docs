"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4769],{5646:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(5893),i=s(1151);s(9965);const a={id:"asset-dids",title:"AssetDIDs"},r=void 0,c={id:"concepts/asset-dids",title:"AssetDIDs",description:'KILT DIDs are suitable for those use cases that involve so-called "active" participants, i.e., entities that can act out of their will (a person, an organization, a DAO).',source:"@site/docs/concepts/04_asset_dids.md",sourceDirName:"concepts",slug:"/concepts/asset-dids",permalink:"/docs/concepts/asset-dids",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/04_asset_dids.md",tags:[],version:"current",lastUpdatedAt:1707906150,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:4,frontMatter:{id:"asset-dids",title:"AssetDIDs"},sidebar:"concepts",previous:{title:"web3names",permalink:"/docs/concepts/web3names"},next:{title:"Overview",permalink:"/docs/concepts/credentials/overview"}},o={},d=[{value:"AssetDID structure",id:"assetdid-structure",level:2},{value:"Chain Namespace and Chain Reference",id:"chain-namespace-and-chain-reference",level:3},{value:"Asset Namespace, Asset Reference and Asset Identifier",id:"asset-namespace-asset-reference-and-asset-identifier",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'KILT DIDs are suitable for those use cases that involve so-called "active" participants, i.e., entities that can act out of their will (a person, an organization, a DAO).'}),"\n",(0,n.jsxs)(t.p,{children:['There are classes of entities that represent "passive" participants, i.e., they can be "used" by active participants within a given use case.\nWe define these class of participants ',(0,n.jsx)(t.strong,{children:"assets"}),".\nAs with traditional KILT users, assets also need to be uniquely identified."]}),"\n",(0,n.jsxs)(t.p,{children:["This is what an ",(0,n.jsx)(t.em,{children:"AssetDID"}),", of which KILT is the ideator and initial editor, does.\nAn example of a valid AssetDID is the following: ",(0,n.jsx)(t.code,{children:"did:asset:eip155:1.erc721:0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"}),".\nThis AssetDID refers to the ",(0,n.jsx)(t.a,{href:"https://opensea.io/collection/cryptopunks",children:"CryptoPunks NFT collection"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"assetdid-structure",children:"AssetDID structure"}),"\n",(0,n.jsxs)(t.p,{children:["An AssetDID is a ",(0,n.jsx)(t.em,{children:"generative"})," identifier, meaning that it does not depend nor rely on any information stored anywhere.\nRather, given the asset that needs to be identified, it is ",(0,n.jsx)(t.strong,{children:"always"})," possible to generate its AssetDID (hence the term generative).\nThe reverse is also true: given an AssetDID, it is always possible to dereference it into its building components which, together, uniquely identified a given asset."]}),"\n",(0,n.jsxs)(t.p,{children:["AssetDIDs always start with the ",(0,n.jsx)(t.code,{children:"did:asset"})," prefix, and then contain a ",(0,n.jsx)(t.em,{children:"chain"})," component (namespace + reference) and an ",(0,n.jsx)(t.em,{children:"asset"})," component (namespace + reference + identifier)."]}),"\n",(0,n.jsx)(t.h3,{id:"chain-namespace-and-chain-reference",children:"Chain Namespace and Chain Reference"}),"\n",(0,n.jsx)(t.p,{children:"Together, they identify the (blockchain) network on which the asset lives."}),"\n",(0,n.jsxs)(t.p,{children:["In the case of NFTs, this would represent the blockchain on which the smart contract is deployed.\nDifferent deployments of the same network will have the same chain namespace but a different reference.\nFor instance, both the Ethereum mainnet and the Goerli testnet have a chain namespace of ",(0,n.jsx)(t.code,{children:"eip155"}),", but the former is identified by the reference ",(0,n.jsx)(t.code,{children:"1"})," (being the mainnet), while the Goerli testnet is identified by the reference ",(0,n.jsx)(t.code,{children:"5"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A list of Ethereum chain IDs (which are used as reference) can be found on ",(0,n.jsx)(t.a,{href:"https://chainlist.org/",children:"chainlist.org"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"asset-namespace-asset-reference-and-asset-identifier",children:"Asset Namespace, Asset Reference and Asset Identifier"}),"\n",(0,n.jsxs)(t.p,{children:["Similarly to their chain counterparts, asset ",(0,n.jsx)(t.em,{children:"namespaces"})," are used to distinguish among different asset classes that might live within the same environment.\nIn the case of NFTs for instance, a smart contract could support both ERC20 (fungible) and ERC721 (non-fungible) tokens, hence the namespace is used to distinguish between the two token types."]}),"\n",(0,n.jsxs)(t.p,{children:["Each asset namespace defines the semantics and the meaning of asset references and asset identifiers within that namespace.\nIn the example of Ethereum-based NFTs, the asset ",(0,n.jsx)(t.em,{children:"reference"})," identifies the smart contract address on which the NFT is stored.\n",(0,n.jsx)(t.strong,{children:"Hence, the combination of asset namespace + asset reference is sufficient to identify an NFT collection on a given network."})]}),"\n",(0,n.jsxs)(t.p,{children:["For some assets, for instance NFTs, it is possible to specify an asset ",(0,n.jsx)(t.em,{children:"identifier"}),", which is used to refer to a single item within the collection.\nIn the example of the CryptoPunks collection above, the AssetDID could be extended with an additional ",(0,n.jsx)(t.code,{children:":1005"})," to now refer to the ",(0,n.jsx)(t.a,{href:"https://opensea.io/assets/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1005",children:"CryptoPunk piece #1005"})," rather than to the CryptoPunks collection as a whole."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.seadn.io/gae/qoR1cWuIZzjlrNVcSMAzhrwDvXNtMxaYuDbNqkc_J5WGGqMSrF0wzO7K2MnSCEBLG8G8pZyJPqV7eTGt4wGwret85sbXJBYoAkypdQ?auto=format&w=3840",alt:""})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Credits to OpenSea for the NFT image above."})}),"\n",(0,n.jsxs)(t.p,{children:["For a more technical explanation of AssetDIDs, please visit our ",(0,n.jsx)(t.a,{href:"https://github.com/KILTprotocol/spec-asset-did",children:"official specification"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var n=s(7294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);