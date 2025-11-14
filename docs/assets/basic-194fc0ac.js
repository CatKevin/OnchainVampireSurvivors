import{C as N,a as z,_ as _e,S as Xt,b as Z,i as A,c as j,A as I,d as R,e as _,x as d,E as D,R as T,O as L,f as Ut,g as we,h as pe,H as Nn,T as xt,j as Ue,M as Zt,k as en,l as tn,m as nn,n as Le,o as zt,p as on,W as Et}from"./core-7f3cb0f0.js";import{n as u,r as $,c as S,o as O,a as k,b as F,e as de,U as ae,i as An,t as On,d as Wn}from"./index-edfaad89.js";import"./index-f732781d.js";const kn={ConnectorExplorerIds:{[N.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[N.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[N.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[N.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[N.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[z.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[z.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[z.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[z.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[z.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[z.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[z.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[z.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[z.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[z.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[z.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",[z.OKX_CONNECTOR_NAME]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200","00000008819873e925422c1ff0f99f7c":"b3406e4a-bbfc-44fb-e3a6-89673c78b700"},ConnectorImageIds:{[N.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[N.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[N.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[N.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[N.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[N.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[N.CONNECTOR_ID.INJECTED]:"Browser Wallet",[N.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[N.CONNECTOR_ID.COINBASE]:"Coinbase",[N.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[N.CONNECTOR_ID.LEDGER]:"Ledger",[N.CONNECTOR_ID.SAFE]:"Safe"},ConnectorTypesMap:{[N.CONNECTOR_ID.INJECTED]:"INJECTED",[N.CONNECTOR_ID.WALLET_CONNECT]:"WALLET_CONNECT",[N.CONNECTOR_ID.EIP6963]:"ANNOUNCED",[N.CONNECTOR_ID.AUTH]:"AUTH",[z.CONNECTOR_TYPE_AUTH]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Pn="rpc.walletconnect.org";function jt(e,t){const n=new URL("https://rpc.walletconnect.org/v1/");return n.searchParams.set("chainId",e),n.searchParams.set("projectId",t),n.toString()}const gt=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","eip155:80094","eip155:80069","eip155:560048","eip155:31","eip155:2818","eip155:57054","eip155:911867","eip155:534351","eip155:1112","eip155:534352","eip155:1111","eip155:146","eip155:130","eip155:1284","eip155:30","eip155:2810","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],rn={extendRpcUrlWithProjectId(e,t){let n=!1;try{n=new URL(e).host===Pn}catch{n=!1}if(n){const o=new URL(e);return o.searchParams.has("projectId")||o.searchParams.set("projectId",t),o.toString()}return e},isCaipNetwork(e){return"chainNamespace"in e&&"caipNetworkId"in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:N.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${N.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,n){var r,i,s;const o=(s=(i=(r=e.rpcUrls)==null?void 0:r.default)==null?void 0:i.http)==null?void 0:s[0];return gt.includes(t)?jt(t,n):o||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:o}){var v,y,C,f,m,p,g;const r=this.getChainNamespace(e),i=this.getCaipNetworkId(e),s=(C=(y=(v=e.rpcUrls)==null?void 0:v.default)==null?void 0:y.http)==null?void 0:C[0],a=this.getDefaultRpcUrl(e,i,n),l=((p=(m=(f=e==null?void 0:e.rpcUrls)==null?void 0:f.chainDefault)==null?void 0:m.http)==null?void 0:p[0])||s,c=((g=o==null?void 0:o[i])==null?void 0:g.map(w=>w.url))||[],h=[...c,...a?[a]:[]],x=[...c];return l&&!x.includes(l)&&x.push(l),{...e,chainNamespace:r,caipNetworkId:i,assets:{imageId:kn.NetworkImageIds[e.id],imageUrl:t==null?void 0:t[e.id]},rpcUrls:{...e.rpcUrls,default:{http:h},chainDefault:{http:x}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:o}){return e.map(r=>rn.extendCaipNetwork(r,{customNetworkImageUrls:t,customRpcUrls:o,projectId:n}))},getViemTransport(e,t,n){var r,i,s;const o=[];return n==null||n.forEach(a=>{o.push(_e.http(a.url,a.config))}),gt.includes(e.caipNetworkId)&&o.push(_e.http(jt(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),(s=(i=(r=e==null?void 0:e.rpcUrls)==null?void 0:r.default)==null?void 0:i.http)==null||s.forEach(a=>{o.push(_e.http(a))}),_e.fallback(o)},extendWagmiTransports(e,t,n){if(gt.includes(e.caipNetworkId)){const o=this.getDefaultRpcUrl(e,e.caipNetworkId,t);return _e.fallback([n,_e.http(o)])}return n},getUnsupportedNetwork(e){return{id:e.split(":")[1],caipNetworkId:e,name:N.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(e){var l;const t=Xt.getActiveCaipNetworkId(),n=Z.getAllRequestedCaipNetworks(),o=Array.from(((l=Z.state.chains)==null?void 0:l.keys())||[]),r=t==null?void 0:t.split(":")[0],i=r?o.includes(r):!1,s=n==null?void 0:n.find(c=>c.caipNetworkId===t);return i&&!s&&t?this.getUnsupportedNetwork(t):s||e||(n==null?void 0:n[0])}};var ke=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let ye=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=j.state.connectors,this.count=I.state.count,this.filteredCount=I.state.filteredWallets.length,this.isFetchingRecommendedWallets=I.state.isFetchingRecommendedWallets,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t),I.subscribeKey("count",t=>this.count=t),I.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),I.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(c=>c.id==="walletConnect"),{allWallets:n}=L.state;if(!t||n==="HIDE"||n==="ONLY_MOBILE"&&!R.isMobile())return null;const o=I.state.featured.length,r=this.count+o,i=r<10?r:Math.floor(r/10)*10,s=this.filteredCount>0?this.filteredCount:i;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<r&&(a=`${s}+`);const l=_.hasAnyConnection(N.CONNECTOR_ID.WALLET_CONNECT);return d`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${O(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var t;D.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),T.push("AllWallets",{redirectView:(t=T.state.data)==null?void 0:t.redirectView})}};ke([u()],ye.prototype,"tabIdx",void 0);ke([$()],ye.prototype,"connectors",void 0);ke([$()],ye.prototype,"count",void 0);ke([$()],ye.prototype,"filteredCount",void 0);ke([$()],ye.prototype,"isFetchingRecommendedWallets",void 0);ye=ke([S("w3m-all-wallets-widget")],ye);const Bn=k`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var ue=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Y=class extends A{constructor(){super(),this.unsubscribe=[],this.connectors=j.state.connectors,this.recommended=I.state.recommended,this.featured=I.state.featured,this.explorerWallets=I.state.explorerWallets,this.connections=_.state.connections,this.connectorImages=Ut.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(j.subscribeKey("connectors",t=>this.connectors=t),_.subscribeKey("connections",t=>this.connections=t),Ut.subscribeKey("connectorImages",t=>this.connectorImages=t),I.subscribeKey("recommended",t=>this.recommended=t),I.subscribeKey("featured",t=>this.featured=t),I.subscribeKey("explorerFilteredWallets",t=>{this.explorerWallets=t!=null&&t.length?t:I.state.explorerWallets}),I.subscribeKey("explorerWallets",t=>{var n;(n=this.explorerWallets)!=null&&n.length||(this.explorerWallets=t)})),R.isTelegram()&&R.isIos()&&(this.loadingTelegram=!_.state.wcUri,this.unsubscribe.push(_.subscribeKey("wcUri",t=>this.loadingTelegram=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return d`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(t,n){return t.map(o=>{if(o.type==="MULTI_CHAIN"&&o.connectors){const i=o.connectors.map(c=>c.id),s=o.connectors.map(c=>c.name),a=o.connectors.map(c=>{var h;return(h=c.info)==null?void 0:h.rdns}),l=n==null?void 0:n.find(c=>i.includes(c.id)||s.includes(c.name)||c.rdns&&(a.includes(c.rdns)||i.includes(c.rdns)));return o.explorerWallet=l??o.explorerWallet,o}const r=n==null?void 0:n.find(i=>{var s;return i.id===o.id||i.rdns===((s=o.info)==null?void 0:s.rdns)||i.name===o.name});return o.explorerWallet=r??o.explorerWallet,o})}processConnectorsByType(t,n=!0){const o=we.sortConnectorsByExplorerWallet([...t]);return n?o.filter(we.showConnector):o}connectorListTemplate(){const t=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),n=we.getConnectorsByType(t,this.recommended,this.featured),o=this.processConnectorsByType(n.announced.filter(f=>f.id!=="walletConnect")),r=this.processConnectorsByType(n.injected),i=this.processConnectorsByType(n.multiChain.filter(f=>f.name!=="WalletConnect"),!1),s=n.custom,a=n.recent,l=this.processConnectorsByType(n.external.filter(f=>f.id!==N.CONNECTOR_ID.COINBASE_SDK)),c=n.recommended,h=n.featured,x=we.getConnectorTypeOrder({custom:s,recent:a,announced:o,injected:r,multiChain:i,recommended:c,featured:h,external:l}),v=this.connectors.find(f=>f.id==="walletConnect"),y=R.isMobile(),C=[];for(const f of x)switch(f){case"walletConnect":{!y&&v&&C.push({kind:"connector",subtype:"walletConnect",connector:v});break}case"recent":{we.getFilteredRecentWallets().forEach(p=>C.push({kind:"wallet",subtype:"recent",wallet:p}));break}case"injected":{i.forEach(m=>C.push({kind:"connector",subtype:"multiChain",connector:m})),o.forEach(m=>C.push({kind:"connector",subtype:"announced",connector:m})),r.forEach(m=>C.push({kind:"connector",subtype:"injected",connector:m}));break}case"featured":{h.forEach(m=>C.push({kind:"wallet",subtype:"featured",wallet:m}));break}case"custom":{we.getFilteredCustomWallets(s??[]).forEach(p=>C.push({kind:"wallet",subtype:"custom",wallet:p}));break}case"external":{l.forEach(m=>C.push({kind:"connector",subtype:"external",connector:m}));break}case"recommended":{we.getCappedRecommendedWallets(c).forEach(p=>C.push({kind:"wallet",subtype:"recommended",wallet:p}));break}default:console.warn(`Unknown connector type: ${f}`)}return C.map((f,m)=>f.kind==="connector"?this.renderConnector(f,m):this.renderWallet(f,m))}renderConnector(t,n){var x,v;const o=t.connector,r=pe.getConnectorImage(o)||this.connectorImages[(o==null?void 0:o.imageId)??""],s=(this.connections.get(o.chain)??[]).some(y=>Nn.isLowerCaseMatch(y.connectorId,o.id));let a,l;t.subtype==="multiChain"?(a="multichain",l="info"):t.subtype==="walletConnect"?(a="qr code",l="accent"):t.subtype==="injected"||t.subtype==="announced"?(a=s?"connected":"installed",l=s?"info":"success"):(a=void 0,l=void 0);const c=_.hasAnyConnection(N.CONNECTOR_ID.WALLET_CONNECT),h=t.subtype==="walletConnect"||t.subtype==="external"?c:!1;return d`
      <w3m-list-wallet
        displayIndex=${n}
        imageSrc=${O(r)}
        .installed=${!0}
        name=${o.name??"Unknown"}
        .tagVariant=${l}
        tagLabel=${O(a)}
        data-testid=${`wallet-selector-${o.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(t)}
        tabIdx=${O(this.tabIdx)}
        ?disabled=${h}
        rdnsId=${O(((x=o.explorerWallet)==null?void 0:x.rdns)||void 0)}
        walletRank=${O((v=o.explorerWallet)==null?void 0:v.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(t){var o;const n=(o=T.state.data)==null?void 0:o.redirectView;if(t.subtype==="walletConnect"){j.setActiveConnector(t.connector),R.isMobile()?T.push("AllWallets"):T.push("ConnectingWalletConnect",{redirectView:n});return}if(t.subtype==="multiChain"){j.setActiveConnector(t.connector),T.push("ConnectingMultiChain",{redirectView:n});return}if(t.subtype==="injected"){j.setActiveConnector(t.connector),T.push("ConnectingExternal",{connector:t.connector,redirectView:n,wallet:t.connector.explorerWallet});return}if(t.subtype==="announced"){if(t.connector.id==="walletConnect"){R.isMobile()?T.push("AllWallets"):T.push("ConnectingWalletConnect",{redirectView:n});return}T.push("ConnectingExternal",{connector:t.connector,redirectView:n,wallet:t.connector.explorerWallet});return}T.push("ConnectingExternal",{connector:t.connector,redirectView:n})}renderWallet(t,n){const o=t.wallet,r=pe.getWalletImage(o),s=_.hasAnyConnection(N.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,l=t.subtype==="recent"?"recent":void 0,c=t.subtype==="recent"?"info":void 0;return d`
      <w3m-list-wallet
        displayIndex=${n}
        imageSrc=${O(r)}
        name=${o.name??"Unknown"}
        @click=${()=>this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${o.id}`}
        tabIdx=${O(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${O(o.rdns||void 0)}
        walletRank=${O(o.order)}
        tagLabel=${O(l)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(t){var r;const n=(r=T.state.data)==null?void 0:r.redirectView;if(t.subtype==="featured"){j.selectWalletConnector(t.wallet);return}if(t.subtype==="recent"){if(this.loadingTelegram)return;j.selectWalletConnector(t.wallet);return}if(t.subtype==="custom"){if(this.loadingTelegram)return;T.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:n});return}if(this.loadingTelegram)return;const o=j.getConnector({id:t.wallet.id,rdns:t.wallet.rdns});o?T.push("ConnectingExternal",{connector:o,redirectView:n}):T.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:n})}};Y.styles=Bn;ue([u({type:Number})],Y.prototype,"tabIdx",void 0);ue([$()],Y.prototype,"connectors",void 0);ue([$()],Y.prototype,"recommended",void 0);ue([$()],Y.prototype,"featured",void 0);ue([$()],Y.prototype,"explorerWallets",void 0);ue([$()],Y.prototype,"connections",void 0);ue([$()],Y.prototype,"connectorImages",void 0);ue([$()],Y.prototype,"loadingTelegram",void 0);Y=ue([S("w3m-connector-list")],Y);const Ln=k`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var je=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};const Dn={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Mn={lg:"md",md:"sm",sm:"sm"};let Ce=class extends A{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return d`
      <button data-active=${this.active}>
        ${this.icon?d`<wui-icon size=${Mn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${Dn[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Ce.styles=[F,de,Ln];je([u()],Ce.prototype,"icon",void 0);je([u()],Ce.prototype,"size",void 0);je([u()],Ce.prototype,"label",void 0);je([u({type:Boolean})],Ce.prototype,"active",void 0);Ce=je([S("wui-tab-item")],Ce);const Un=k`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Fe=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let ve=class extends A{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,n)=>{var r;const o=n===this.activeTab;return d`
        <wui-tab-item
          @click=${()=>this.onTabClick(n)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${(r=t.label)==null?void 0:r.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};ve.styles=[F,de,Un];Fe([u({type:Array})],ve.prototype,"tabs",void 0);Fe([u()],ve.prototype,"onTabChange",void 0);Fe([u()],ve.prototype,"size",void 0);Fe([$()],ve.prototype,"activeTab",void 0);ve=Fe([S("wui-tabs")],ve);var Nt=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Ye=class extends A{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return d`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var o;const n=this.platformTabs[t];n&&((o=this.onSelectPlatfrom)==null||o.call(this,n))}};Nt([u({type:Array})],Ye.prototype,"platforms",void 0);Nt([u()],Ye.prototype,"onSelectPlatfrom",void 0);Ye=Nt([S("w3m-connecting-header")],Ye);const zn=k`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var Te=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};const jn={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},Fn={lg:"md",md:"md",sm:"sm"};let le=class extends A{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??jn[this.size];return d`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=Fn[this.size],n=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return d`<wui-loading-spinner color=${n} size=${t}></wui-loading-spinner>`}return null}};le.styles=[F,de,zn];Te([u()],le.prototype,"size",void 0);Te([u({type:Boolean})],le.prototype,"disabled",void 0);Te([u({type:Boolean})],le.prototype,"fullWidth",void 0);Te([u({type:Boolean})],le.prototype,"loading",void 0);Te([u()],le.prototype,"variant",void 0);Te([u()],le.prototype,"textVariant",void 0);le=Te([S("wui-button")],le);const Vn=k`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var sn=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Qe=class extends A{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,o=36-t,r=116+o,i=245+o,s=360+o*1.75;return d`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Qe.styles=[F,Vn];sn([u({type:Number})],Qe.prototype,"radius",void 0);Qe=sn([S("wui-loading-thumbnail")],Qe);const Hn=k`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var lt=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Ie=class extends A{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return d`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ie.styles=[F,de,Hn];lt([u({type:Boolean})],Ie.prototype,"disabled",void 0);lt([u()],Ie.prototype,"label",void 0);lt([u()],Ie.prototype,"buttonLabel",void 0);Ie=lt([S("wui-cta-button")],Ie);const Kn=k`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var an=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Xe=class extends A{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:o,chrome_store:r,homepage:i}=this.wallet,s=R.isMobile(),a=R.isIos(),l=R.isAndroid(),c=[n,o,i,r].filter(Boolean).length>1,h=ae.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?d`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>T.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?d`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?d`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&l?d`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&R.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&R.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&R.openHref(this.wallet.homepage,"_blank")}};Xe.styles=[Kn];an([u({type:Object})],Xe.prototype,"wallet",void 0);Xe=an([S("w3m-mobile-download-links")],Xe);const qn=k`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var Q=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};class B extends A{constructor(){var t,n,o,r,i;super(),this.wallet=(t=T.state.data)==null?void 0:t.wallet,this.connector=(n=T.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=pe.getConnectorImage(this.connector)??pe.getWalletImage(this.wallet),this.name=((o=this.wallet)==null?void 0:o.name)??((r=this.connector)==null?void 0:r.name)??"Wallet",this.isRetrying=!1,this.uri=_.state.wcUri,this.error=_.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(_.subscribeKey("wcUri",s=>{var a;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),_.subscribeKey("wcError",s=>this.error=s)),(R.isTelegram()||R.isSafari())&&R.isIos()&&_.state.wcUri&&((i=this.onConnect)==null||i.call(this))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),_.setWcError(!1),clearTimeout(this.timeout)}render(){var o;(o=this.onRender)==null||o.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n="";return this.label?n=this.label:(n=`Continue in ${this.name}`,this.error&&(n="Connection declined")),d`
      <wui-flex
        data-error=${O(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${O(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?d`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?d`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,n;_.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this)}loaderTemplate(){const t=xt.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return d`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(R.copyToClopboard(this.uri),Ue.showSuccess("Link copied"))}catch{Ue.showError("Failed to copy")}}}B.styles=qn;Q([$()],B.prototype,"isRetrying",void 0);Q([$()],B.prototype,"uri",void 0);Q([$()],B.prototype,"error",void 0);Q([$()],B.prototype,"ready",void 0);Q([$()],B.prototype,"showRetry",void 0);Q([$()],B.prototype,"label",void 0);Q([$()],B.prototype,"secondaryBtnLabel",void 0);Q([$()],B.prototype,"secondaryLabel",void 0);Q([$()],B.prototype,"isLoading",void 0);Q([u({type:Boolean})],B.prototype,"isMobile",void 0);Q([u()],B.prototype,"onRetry",void 0);var Gn=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Ft=class extends B{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:T.state.view}})}async onConnectProxy(){var t,n;try{this.error=!1;const{connectors:o}=j.state,r=o.find(i=>{var s,a,l;return i.type==="ANNOUNCED"&&((s=i.info)==null?void 0:s.rdns)===((a=this.wallet)==null?void 0:a.rdns)||i.type==="INJECTED"||i.name===((l=this.wallet)==null?void 0:l.name)});if(r)await _.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Zt.close(),D.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown",view:T.state.view,walletRank:(n=this.wallet)==null?void 0:n.order}})}catch(o){o instanceof en&&o.originalName===tn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?D.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:o.message}}):D.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(o==null?void 0:o.message)??"Unknown"}}),this.error=!0}}};Ft=Gn([S("w3m-connecting-wc-browser")],Ft);var Jn=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Vt=class extends B{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:T.state.view}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:o}=this.wallet,{redirect:r,href:i}=R.formatNativeUrl(n,this.uri);_.setWcLinking({name:o,href:i}),_.setRecentWallet(this.wallet),R.openHref(r,"_blank")}catch{this.error=!0}}};Vt=Jn([S("w3m-connecting-wc-desktop")],Vt);var Pe=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let $e=class extends B{constructor(){var t;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=L.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var n;if((n=this.wallet)!=null&&n.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:o,link_mode:r,name:i}=this.wallet,{redirect:s,redirectUniversalLink:a,href:l}=R.formatNativeUrl(o,this.uri,r);this.redirectDeeplink=s,this.redirectUniversalLink=a,this.target=R.isIframe()?"_top":"_self",_.setWcLinking({name:i,href:l}),_.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?R.openHref(this.redirectUniversalLink,this.target):R.openHref(this.redirectDeeplink,this.target)}catch(o){D.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:o instanceof Error?o.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=nn.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(_.subscribeKey("wcUri",()=>{this.onHandleURI()})),D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:T.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onTryAgain(){var t;_.setWcError(!1),(t=this.onConnect)==null||t.call(this)}};Pe([$()],$e.prototype,"redirectDeeplink",void 0);Pe([$()],$e.prototype,"redirectUniversalLink",void 0);Pe([$()],$e.prototype,"target",void 0);Pe([$()],$e.prototype,"preferUniversalLinks",void 0);Pe([$()],$e.prototype,"isLoading",void 0);$e=Pe([S("w3m-connecting-wc-mobile")],$e);var Ve={},Yn=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},ln={},V={};let At;const Qn=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];V.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};V.getSymbolTotalCodewords=function(t){return Qn[t]};V.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};V.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');At=t};V.isKanjiModeEnabled=function(){return typeof At<"u"};V.toSJIS=function(t){return At(t)};var ct={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(ct);function cn(){this.buffer=[],this.length=0}cn.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Xn=cn;function He(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}He.prototype.set=function(e,t,n,o){const r=e*this.size+t;this.data[r]=n,o&&(this.reservedBit[r]=!0)};He.prototype.get=function(e,t){return this.data[e*this.size+t]};He.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};He.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Zn=He,dn={};(function(e){const t=V.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,i=t(o),s=i===145?26:Math.ceil((i-13)/(2*r-2))*2,a=[i-7];for(let l=1;l<r-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const r=[],i=e.getRowColCoords(o),s=i.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||r.push([i[a],i[l]]);return r}})(dn);var un={};const ei=V.getSymbolSize,Ht=7;un.getPositions=function(t){const n=ei(t);return[[0,0],[n-Ht,0],[0,n-Ht]]};var hn={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const i=r.size;let s=0,a=0,l=0,c=null,h=null;for(let x=0;x<i;x++){a=l=0,c=h=null;for(let v=0;v<i;v++){let y=r.get(x,v);y===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=y,a=1),y=r.get(v,x),y===h?l++:(l>=5&&(s+=t.N1+(l-5)),h=y,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(r){const i=r.size;let s=0;for(let a=0;a<i-1;a++)for(let l=0;l<i-1;l++){const c=r.get(a,l)+r.get(a,l+1)+r.get(a+1,l)+r.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const i=r.size;let s=0,a=0,l=0;for(let c=0;c<i;c++){a=l=0;for(let h=0;h<i;h++)a=a<<1&2047|r.get(c,h),h>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|r.get(h,c),h>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let i=0;const s=r.data.length;for(let l=0;l<s;l++)i+=r.data[l];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function n(o,r,i){switch(o){case e.Patterns.PATTERN000:return(r+i)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(r+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return r*i%2+r*i%3===0;case e.Patterns.PATTERN110:return(r*i%2+r*i%3)%2===0;case e.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,i){const s=i.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)i.isReserved(l,a)||i.xor(l,a,n(r,l,a))},e.getBestMask=function(r,i){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){i(c),e.applyMask(c,r);const h=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(c,r),h<l&&(l=h,a=c)}return a}})(hn);var dt={};const fe=ct,Ge=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Je=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];dt.getBlocksCount=function(t,n){switch(n){case fe.L:return Ge[(t-1)*4+0];case fe.M:return Ge[(t-1)*4+1];case fe.Q:return Ge[(t-1)*4+2];case fe.H:return Ge[(t-1)*4+3];default:return}};dt.getTotalCodewordsCount=function(t,n){switch(n){case fe.L:return Je[(t-1)*4+0];case fe.M:return Je[(t-1)*4+1];case fe.Q:return Je[(t-1)*4+2];case fe.H:return Je[(t-1)*4+3];default:return}};var fn={},ut={};const De=new Uint8Array(512),Ze=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)De[n]=t,Ze[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)De[n]=De[n-255]})();ut.log=function(t){if(t<1)throw new Error("log("+t+")");return Ze[t]};ut.exp=function(t){return De[t]};ut.mul=function(t,n){return t===0||n===0?0:De[Ze[t]+Ze[n]]};(function(e){const t=ut;e.mul=function(o,r){const i=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<r.length;a++)i[s+a]^=t.mul(o[s],r[a]);return i},e.mod=function(o,r){let i=new Uint8Array(o);for(;i.length-r.length>=0;){const s=i[0];for(let l=0;l<r.length;l++)i[l]^=t.mul(r[l],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let i=0;i<o;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})(fn);const pn=fn;function Ot(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Ot.prototype.initialize=function(t){this.degree=t,this.genPoly=pn.generateECPolynomial(this.degree)};Ot.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const o=pn.mod(n,this.genPoly),r=this.degree-o.length;if(r>0){const i=new Uint8Array(this.degree);return i.set(o,r),i}return o};var ti=Ot,gn={},ge={},Wt={};Wt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var ne={};const bn="[0-9]+",ni="[A-Z $%*+\\-./:]+";let ze="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ze=ze.replace(/u/g,"\\u");const ii="(?:(?![A-Z0-9 $%*+\\-./:]|"+ze+`)(?:.|[\r
]))+`;ne.KANJI=new RegExp(ze,"g");ne.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");ne.BYTE=new RegExp(ii,"g");ne.NUMERIC=new RegExp(bn,"g");ne.ALPHANUMERIC=new RegExp(ni,"g");const oi=new RegExp("^"+ze+"$"),ri=new RegExp("^"+bn+"$"),si=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");ne.testKanji=function(t){return oi.test(t)};ne.testNumeric=function(t){return ri.test(t)};ne.testAlphanumeric=function(t){return si.test(t)};(function(e){const t=Wt,n=ne;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},e.getBestModeForData=function(i){return n.testNumeric(i)?e.NUMERIC:n.testAlphanumeric(i)?e.ALPHANUMERIC:n.testKanji(i)?e.KANJI:e.BYTE},e.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},e.isValid=function(i){return i&&i.bit&&i.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(i,s){if(e.isValid(i))return i;try{return o(i)}catch{return s}}})(ge);(function(e){const t=V,n=dt,o=ct,r=ge,i=Wt,s=7973,a=t.getBCHDigit(s);function l(v,y,C){for(let f=1;f<=40;f++)if(y<=e.getCapacity(f,C,v))return f}function c(v,y){return r.getCharCountIndicator(v,y)+4}function h(v,y){let C=0;return v.forEach(function(f){const m=c(f.mode,y);C+=m+f.getBitsLength()}),C}function x(v,y){for(let C=1;C<=40;C++)if(h(v,C)<=e.getCapacity(C,y,r.MIXED))return C}e.from=function(y,C){return i.isValid(y)?parseInt(y,10):C},e.getCapacity=function(y,C,f){if(!i.isValid(y))throw new Error("Invalid QR Code version");typeof f>"u"&&(f=r.BYTE);const m=t.getSymbolTotalCodewords(y),p=n.getTotalCodewordsCount(y,C),g=(m-p)*8;if(f===r.MIXED)return g;const w=g-c(f,y);switch(f){case r.NUMERIC:return Math.floor(w/10*3);case r.ALPHANUMERIC:return Math.floor(w/11*2);case r.KANJI:return Math.floor(w/13);case r.BYTE:default:return Math.floor(w/8)}},e.getBestVersionForData=function(y,C){let f;const m=o.from(C,o.M);if(Array.isArray(y)){if(y.length>1)return x(y,m);if(y.length===0)return 1;f=y[0]}else f=y;return l(f.mode,f.getLength(),m)},e.getEncodedBits=function(y){if(!i.isValid(y)||y<7)throw new Error("Invalid QR Code version");let C=y<<12;for(;t.getBCHDigit(C)-a>=0;)C^=s<<t.getBCHDigit(C)-a;return y<<12|C}})(gn);var mn={};const Tt=V,wn=1335,ai=21522,Kt=Tt.getBCHDigit(wn);mn.getEncodedBits=function(t,n){const o=t.bit<<3|n;let r=o<<10;for(;Tt.getBCHDigit(r)-Kt>=0;)r^=wn<<Tt.getBCHDigit(r)-Kt;return(o<<10|r)^ai};var yn={};const li=ge;function Se(e){this.mode=li.NUMERIC,this.data=e.toString()}Se.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Se.prototype.getLength=function(){return this.data.length};Se.prototype.getBitsLength=function(){return Se.getBitsLength(this.data.length)};Se.prototype.write=function(t){let n,o,r;for(n=0;n+3<=this.data.length;n+=3)o=this.data.substr(n,3),r=parseInt(o,10),t.put(r,10);const i=this.data.length-n;i>0&&(o=this.data.substr(n),r=parseInt(o,10),t.put(r,i*3+1))};var ci=Se;const di=ge,bt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ne(e){this.mode=di.ALPHANUMERIC,this.data=e}Ne.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Ne.prototype.getLength=function(){return this.data.length};Ne.prototype.getBitsLength=function(){return Ne.getBitsLength(this.data.length)};Ne.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let o=bt.indexOf(this.data[n])*45;o+=bt.indexOf(this.data[n+1]),t.put(o,11)}this.data.length%2&&t.put(bt.indexOf(this.data[n]),6)};var ui=Ne,hi=function(t){for(var n=[],o=t.length,r=0;r<o;r++){var i=t.charCodeAt(r);if(i>=55296&&i<=56319&&o>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,r+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const fi=hi,pi=ge;function Ae(e){this.mode=pi.BYTE,typeof e=="string"&&(e=fi(e)),this.data=new Uint8Array(e)}Ae.getBitsLength=function(t){return t*8};Ae.prototype.getLength=function(){return this.data.length};Ae.prototype.getBitsLength=function(){return Ae.getBitsLength(this.data.length)};Ae.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var gi=Ae;const bi=ge,mi=V;function Oe(e){this.mode=bi.KANJI,this.data=e}Oe.getBitsLength=function(t){return t*13};Oe.prototype.getLength=function(){return this.data.length};Oe.prototype.getBitsLength=function(){return Oe.getBitsLength(this.data.length)};Oe.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=mi.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var wi=Oe,Cn={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,o,r){var i={},s={};s[o]=0;var a=t.PriorityQueue.make();a.push(o,0);for(var l,c,h,x,v,y,C,f,m;!a.empty();){l=a.pop(),c=l.value,x=l.cost,v=n[c]||{};for(h in v)v.hasOwnProperty(h)&&(y=v[h],C=x+y,f=s[h],m=typeof s[h]>"u",(m||f>C)&&(s[h]=C,a.push(h,C),i[h]=c))}if(typeof r<"u"&&typeof s[r]>"u"){var p=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(p)}return i},extract_shortest_path_from_predecessor_list:function(n,o){for(var r=[],i=o;i;)r.push(i),n[i],i=n[i];return r.reverse(),r},find_path:function(n,o,r){var i=t.single_source_shortest_paths(n,o,r);return t.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(n){var o=t.PriorityQueue,r={},i;n=n||{};for(i in o)o.hasOwnProperty(i)&&(r[i]=o[i]);return r.queue=[],r.sorter=n.sorter||o.default_sorter,r},default_sorter:function(n,o){return n.cost-o.cost},push:function(n,o){var r={value:n,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Cn);var yi=Cn.exports;(function(e){const t=ge,n=ci,o=ui,r=gi,i=wi,s=ne,a=V,l=yi;function c(p){return unescape(encodeURIComponent(p)).length}function h(p,g,w){const b=[];let E;for(;(E=p.exec(w))!==null;)b.push({data:E[0],index:E.index,mode:g,length:E[0].length});return b}function x(p){const g=h(s.NUMERIC,t.NUMERIC,p),w=h(s.ALPHANUMERIC,t.ALPHANUMERIC,p);let b,E;return a.isKanjiModeEnabled()?(b=h(s.BYTE,t.BYTE,p),E=h(s.KANJI,t.KANJI,p)):(b=h(s.BYTE_KANJI,t.BYTE,p),E=[]),g.concat(w,b,E).sort(function(P,J){return P.index-J.index}).map(function(P){return{data:P.data,mode:P.mode,length:P.length}})}function v(p,g){switch(g){case t.NUMERIC:return n.getBitsLength(p);case t.ALPHANUMERIC:return o.getBitsLength(p);case t.KANJI:return i.getBitsLength(p);case t.BYTE:return r.getBitsLength(p)}}function y(p){return p.reduce(function(g,w){const b=g.length-1>=0?g[g.length-1]:null;return b&&b.mode===w.mode?(g[g.length-1].data+=w.data,g):(g.push(w),g)},[])}function C(p){const g=[];for(let w=0;w<p.length;w++){const b=p[w];switch(b.mode){case t.NUMERIC:g.push([b,{data:b.data,mode:t.ALPHANUMERIC,length:b.length},{data:b.data,mode:t.BYTE,length:b.length}]);break;case t.ALPHANUMERIC:g.push([b,{data:b.data,mode:t.BYTE,length:b.length}]);break;case t.KANJI:g.push([b,{data:b.data,mode:t.BYTE,length:c(b.data)}]);break;case t.BYTE:g.push([{data:b.data,mode:t.BYTE,length:c(b.data)}])}}return g}function f(p,g){const w={},b={start:{}};let E=["start"];for(let W=0;W<p.length;W++){const P=p[W],J=[];for(let he=0;he<P.length;he++){const X=P[he],Be=""+W+he;J.push(Be),w[Be]={node:X,lastCount:0},b[Be]={};for(let pt=0;pt<E.length;pt++){const re=E[pt];w[re]&&w[re].node.mode===X.mode?(b[re][Be]=v(w[re].lastCount+X.length,X.mode)-v(w[re].lastCount,X.mode),w[re].lastCount+=X.length):(w[re]&&(w[re].lastCount=X.length),b[re][Be]=v(X.length,X.mode)+4+t.getCharCountIndicator(X.mode,g))}}E=J}for(let W=0;W<E.length;W++)b[E[W]].end=0;return{map:b,table:w}}function m(p,g){let w;const b=t.getBestModeForData(p);if(w=t.from(g,b),w!==t.BYTE&&w.bit<b.bit)throw new Error('"'+p+'" cannot be encoded with mode '+t.toString(w)+`.
 Suggested mode is: `+t.toString(b));switch(w===t.KANJI&&!a.isKanjiModeEnabled()&&(w=t.BYTE),w){case t.NUMERIC:return new n(p);case t.ALPHANUMERIC:return new o(p);case t.KANJI:return new i(p);case t.BYTE:return new r(p)}}e.fromArray=function(g){return g.reduce(function(w,b){return typeof b=="string"?w.push(m(b,null)):b.data&&w.push(m(b.data,b.mode)),w},[])},e.fromString=function(g,w){const b=x(g,a.isKanjiModeEnabled()),E=C(b),W=f(E,w),P=l.find_path(W.map,"start","end"),J=[];for(let he=1;he<P.length-1;he++)J.push(W.table[P[he]].node);return e.fromArray(y(J))},e.rawSplit=function(g){return e.fromArray(x(g,a.isKanjiModeEnabled()))}})(yn);const ht=V,mt=ct,Ci=Xn,vi=Zn,$i=dn,xi=un,Rt=hn,_t=dt,Ei=ti,et=gn,Ti=mn,Ri=ge,wt=yn;function _i(e,t){const n=e.size,o=xi.getPositions(t);for(let r=0;r<o.length;r++){const i=o[r][0],s=o[r][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||n<=i+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(i+a,s+l,!0,!0):e.set(i+a,s+l,!1,!0))}}function Ii(e){const t=e.size;for(let n=8;n<t-8;n++){const o=n%2===0;e.set(n,6,o,!0),e.set(6,n,o,!0)}}function Si(e,t){const n=$i.getPositions(t);for(let o=0;o<n.length;o++){const r=n[o][0],i=n[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,i+a,!0,!0):e.set(r+s,i+a,!1,!0)}}function Ni(e,t){const n=e.size,o=et.getEncodedBits(t);let r,i,s;for(let a=0;a<18;a++)r=Math.floor(a/3),i=a%3+n-8-3,s=(o>>a&1)===1,e.set(r,i,s,!0),e.set(i,r,s,!0)}function yt(e,t,n){const o=e.size,r=Ti.getEncodedBits(t,n);let i,s;for(i=0;i<15;i++)s=(r>>i&1)===1,i<6?e.set(i,8,s,!0):i<8?e.set(i+1,8,s,!0):e.set(o-15+i,8,s,!0),i<8?e.set(8,o-i-1,s,!0):i<9?e.set(8,15-i-1+1,s,!0):e.set(8,15-i-1,s,!0);e.set(o-8,8,1,!0)}function Ai(e,t){const n=e.size;let o=-1,r=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(r,a-l)){let c=!1;s<t.length&&(c=(t[s]>>>i&1)===1),e.set(r,a-l,c),i--,i===-1&&(s++,i=7)}if(r+=o,r<0||n<=r){r-=o,o=-o;break}}}function Oi(e,t,n){const o=new Ci;n.forEach(function(l){o.put(l.mode.bit,4),o.put(l.getLength(),Ri.getCharCountIndicator(l.mode,e)),l.write(o)});const r=ht.getSymbolTotalCodewords(e),i=_t.getTotalCodewordsCount(e,t),s=(r-i)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let l=0;l<a;l++)o.put(l%2?17:236,8);return Wi(o,e,t)}function Wi(e,t,n){const o=ht.getSymbolTotalCodewords(t),r=_t.getTotalCodewordsCount(t,n),i=o-r,s=_t.getBlocksCount(t,n),a=o%s,l=s-a,c=Math.floor(o/s),h=Math.floor(i/s),x=h+1,v=c-h,y=new Ei(v);let C=0;const f=new Array(s),m=new Array(s);let p=0;const g=new Uint8Array(e.buffer);for(let P=0;P<s;P++){const J=P<l?h:x;f[P]=g.slice(C,C+J),m[P]=y.encode(f[P]),C+=J,p=Math.max(p,J)}const w=new Uint8Array(o);let b=0,E,W;for(E=0;E<p;E++)for(W=0;W<s;W++)E<f[W].length&&(w[b++]=f[W][E]);for(E=0;E<v;E++)for(W=0;W<s;W++)w[b++]=m[W][E];return w}function ki(e,t,n,o){let r;if(Array.isArray(e))r=wt.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const h=wt.rawSplit(e);c=et.getBestVersionForData(h,n)}r=wt.fromString(e,c||40)}else throw new Error("Invalid data");const i=et.getBestVersionForData(r,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=Oi(t,n,r),a=ht.getSymbolSize(t),l=new vi(a);return _i(l,t),Ii(l),Si(l,t),yt(l,n,0),t>=7&&Ni(l,t),Ai(l,s),isNaN(o)&&(o=Rt.getBestMask(l,yt.bind(null,l,n))),Rt.applyMask(o,l),yt(l,n,o),{modules:l,version:t,errorCorrectionLevel:n,maskPattern:o,segments:r}}ln.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let o=mt.M,r,i;return typeof n<"u"&&(o=mt.from(n.errorCorrectionLevel,mt.M),r=et.from(n.version),i=Rt.from(n.maskPattern),n.toSJISFunc&&ht.setToSJISFunction(n.toSJISFunc)),ki(t,r,o,i)};var vn={},kt={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let o=n.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+n);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(i){return[i,i]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,i=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:i,scale:i?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const i=e.getScale(o,r);return Math.floor((o+r.margin*2)*i)},e.qrToImageData=function(o,r,i){const s=r.modules.size,a=r.modules.data,l=e.getScale(s,i),c=Math.floor((s+i.margin*2)*l),h=i.margin*l,x=[i.color.light,i.color.dark];for(let v=0;v<c;v++)for(let y=0;y<c;y++){let C=(v*c+y)*4,f=i.color.light;if(v>=h&&y>=h&&v<c-h&&y<c-h){const m=Math.floor((v-h)/l),p=Math.floor((y-h)/l);f=x[a[m*s+p]?1:0]}o[C++]=f.r,o[C++]=f.g,o[C++]=f.b,o[C]=f.a}}})(kt);(function(e){const t=kt;function n(r,i,s){r.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(i,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=o()),l=t.getOptions(l);const h=t.getImageWidth(i.modules.size,l),x=c.getContext("2d"),v=x.createImageData(h,h);return t.qrToImageData(v.data,i,l),n(x,c,h),x.putImageData(v,0,0),c},e.renderToDataURL=function(i,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(i,s,l),h=l.type||"image/png",x=l.rendererOpts||{};return c.toDataURL(h,x.quality)}})(vn);var $n={};const Pi=kt;function qt(e,t){const n=e.a/255,o=t+'="'+e.hex+'"';return n<1?o+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function Ct(e,t,n){let o=e+t;return typeof n<"u"&&(o+=" "+n),o}function Bi(e,t,n){let o="",r=0,i=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),c=Math.floor(a/t);!l&&!i&&(i=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(o+=i?Ct("M",l+n,.5+c+n):Ct("m",r,0),r=0,i=!1),l+1<t&&e[a+1]||(o+=Ct("h",s),s=0)):r++}return o}$n.render=function(t,n,o){const r=Pi.getOptions(n),i=t.modules.size,s=t.modules.data,a=i+r.margin*2,l=r.color.light.a?"<path "+qt(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+qt(r.color.dark,"stroke")+' d="'+Bi(s,i,r.margin)+'"/>',h='viewBox="0 0 '+a+" "+a+'"',v='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+h+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof o=="function"&&o(null,v),v};const Li=Yn,It=ln,xn=vn,Di=$n;function Pt(e,t,n,o,r){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!Li())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=n,n=t,t=o=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=o=void 0):s===2&&!t.getContext&&(o=n,n=t,t=void 0),new Promise(function(l,c){try{const h=It.create(n,o);l(e(h,t,o))}catch(h){c(h)}})}try{const l=It.create(n,o);r(null,e(l,t,o))}catch(l){r(l)}}Ve.create=It.create;Ve.toCanvas=Pt.bind(null,xn.render);Ve.toDataURL=Pt.bind(null,xn.renderToDataURL);Ve.toString=Pt.bind(null,function(e,t,n){return Di.render(e,n)});const Mi=.1,Gt=2.5,se=7;function vt(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+Mi}function Ui(e,t){const n=Array.prototype.slice.call(Ve.create(e,{errorCorrectionLevel:t}).modules.data,0),o=Math.sqrt(n.length);return n.reduce((r,i,s)=>(s%o===0?r.push([i]):r[r.length-1].push(i))&&r,[])}const zi={generate({uri:e,size:t,logoSize:n,padding:o=8,dotColor:r="var(--apkt-colors-black)"}){const s=[],a=Ui(e,"Q"),l=(t-2*o)/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:f,y:m})=>{const p=(a.length-se)*l*f+o,g=(a.length-se)*l*m+o,w=.45;for(let b=0;b<c.length;b+=1){const E=l*(se-b*2);s.push(Le`
            <rect
              fill=${b===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${b===0?E-10:E}
              rx= ${b===0?(E-10)*w:E*w}
              ry= ${b===0?(E-10)*w:E*w}
              stroke=${r}
              stroke-width=${b===0?10:0}
              height=${b===0?E-10:E}
              x= ${b===0?g+l*b+10/2:g+l*b}
              y= ${b===0?p+l*b+10/2:p+l*b}
            />
          `)}});const h=Math.floor((n+25)/l),x=a.length/2-h/2,v=a.length/2+h/2-1,y=[];a.forEach((f,m)=>{f.forEach((p,g)=>{if(a[m][g]&&!(m<se&&g<se||m>a.length-(se+1)&&g<se||m<se&&g>a.length-(se+1))&&!(m>x&&m<v&&g>x&&g<v)){const w=m*l+l/2+o,b=g*l+l/2+o;y.push([w,b])}})});const C={};return y.forEach(([f,m])=>{var p;C[f]?(p=C[f])==null||p.push(m):C[f]=[m]}),Object.entries(C).map(([f,m])=>{const p=m.filter(g=>m.every(w=>!vt(g,w,l)));return[Number(f),p]}).forEach(([f,m])=>{m.forEach(p=>{s.push(Le`<circle cx=${f} cy=${p} fill=${r} r=${l/Gt} />`)})}),Object.entries(C).filter(([f,m])=>m.length>1).map(([f,m])=>{const p=m.filter(g=>m.some(w=>vt(g,w,l)));return[Number(f),p]}).map(([f,m])=>{m.sort((g,w)=>g<w?-1:1);const p=[];for(const g of m){const w=p.find(b=>b.some(E=>vt(g,E,l)));w?w.push(g):p.push([g])}return[f,p.map(g=>[g[0],g[g.length-1]])]}).forEach(([f,m])=>{m.forEach(([p,g])=>{s.push(Le`
              <line
                x1=${f}
                x2=${f}
                y1=${p}
                y2=${g}
                stroke=${r}
                stroke-width=${l/(Gt/2)}
                stroke-linecap="round"
              />
            `)})}),s}},ji=k`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var be=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let ee=class extends A{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,d`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return Le`
      <svg height=${this.size} width=${this.size}>
        ${zi.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?d`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?d`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:d`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ee.styles=[F,ji];be([u()],ee.prototype,"uri",void 0);be([u({type:Number})],ee.prototype,"size",void 0);be([u()],ee.prototype,"theme",void 0);be([u()],ee.prototype,"imageSrc",void 0);be([u()],ee.prototype,"alt",void 0);be([u({type:Boolean})],ee.prototype,"arenaClear",void 0);be([u({type:Boolean})],ee.prototype,"farcaster",void 0);ee=be([S("wui-qr-code")],ee);const Fi=k`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var Ke=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let xe=class extends A{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",d`<slot></slot>`}};xe.styles=[Fi];Ke([u()],xe.prototype,"width",void 0);Ke([u()],xe.prototype,"height",void 0);Ke([u()],xe.prototype,"variant",void 0);Ke([u({type:Boolean})],xe.prototype,"rounded",void 0);xe=Ke([S("wui-shimmer")],xe);const Vi=k`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var En=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let tt=class extends B{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){var t,n,o;this.basic||D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode",displayIndex:(n=this.wallet)==null?void 0:n.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:T.state.view}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(n=>n()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),d`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){var r,i;if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;_.setWcLinking(void 0),_.setRecentWallet(this.wallet);let o=this.uri;if((r=this.wallet)!=null&&r.mobile_link){const{redirect:s}=R.formatNativeUrl((i=this.wallet)==null?void 0:i.mobile_link,this.uri,null);o=s}return d` <wui-qr-code
      size=${t}
      theme=${xt.state.themeMode}
      uri=${o}
      imageSrc=${O(pe.getWalletImage(this.wallet))}
      color=${O(xt.state.themeVariables["--w3m-qr-color"])}
      alt=${O(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return d`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};tt.styles=Vi;En([u({type:Boolean})],tt.prototype,"basic",void 0);tt=En([S("w3m-connecting-wc-qrcode")],tt);var Hi=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Jt=class extends A{constructor(){var t,n,o;if(super(),this.wallet=(t=T.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(n=this.wallet)==null?void 0:n.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:T.state.view}})}render(){return d`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${O(pe.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Jt=Hi([S("w3m-connecting-wc-unsupported")],Jt);var Tn=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let St=class extends B{constructor(){var t,n;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=nn.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(_.subscribeKey("wcUri",()=>{this.updateLoadingState()})),D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:(n=this.wallet)==null?void 0:n.order,view:T.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:o}=this.wallet,{redirect:r,href:i}=R.formatUniversalUrl(n,this.uri);_.setWcLinking({name:o,href:i}),_.setRecentWallet(this.wallet),R.openHref(r,"_blank")}catch{this.error=!0}}};Tn([$()],St.prototype,"isLoading",void 0);St=Tn([S("w3m-connecting-wc-web")],St);const Ki=k`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Re=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let ce=class extends A{constructor(){var t;super(),this.wallet=(t=T.state.data)==null?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!L.state.siwx,this.remoteFeatures=L.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(L.subscribeKey("remoteFeatures",n=>this.remoteFeatures=n))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return L.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),d`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return!((t=this.remoteFeatures)!=null&&t.reownBranding)||!this.displayBranding?null:d`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){var n,o;if(!(this.platform==="browser"||L.state.manualWCControl&&!t))try{const{wcPairingExpiry:r,status:i}=_.state,{redirectView:s}=T.state.data??{};if(t||L.state.enableEmbedded||R.isPairingExpired(r)||i==="connecting"){const a=_.getConnections(Z.state.activeChain),l=(n=this.remoteFeatures)==null?void 0:n.multiWallet,c=a.length>0;await _.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(c&&l?(T.replace("ProfileWallets"),Ue.showSuccess("New Wallet Added")):s?T.replace(s):Zt.close())}}catch(r){if(r instanceof Error&&r.message.includes("An error occurred when attempting to switch chain")&&!L.state.enableNetworkSwitch&&Z.state.activeChain){Z.setActiveCaipNetwork(rn.getUnsupportedNetwork(`${Z.state.activeChain}:${(o=Z.state.activeCaipNetwork)==null?void 0:o.id}`)),Z.showUnsupportedChainUI();return}r instanceof en&&r.originalName===tn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?D.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:r.message}}):D.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(r==null?void 0:r.message)??"Unknown"}}),_.setWcError(!0),Ue.showError(r.message??"Connection error"),_.resetWcConnection(),T.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:o,injected:r,rdns:i}=this.wallet,s=r==null?void 0:r.map(({injected_id:C})=>C).filter(Boolean),a=[...i?[i]:s??[]],l=L.state.isUniversalProvider?!1:a.length,c=t,h=o,x=_.checkInstalled(a),v=l&&x,y=n&&!R.isMobile();v&&!Z.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(R.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),y&&this.platforms.push("desktop"),!v&&l&&!Z.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return d`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return d`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return d`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return d`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return d`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return d`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?d`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var o;const n=(o=this.shadowRoot)==null?void 0:o.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ce.styles=Ki;Re([$()],ce.prototype,"platform",void 0);Re([$()],ce.prototype,"platforms",void 0);Re([$()],ce.prototype,"isSiwxEnabled",void 0);Re([$()],ce.prototype,"remoteFeatures",void 0);Re([u({type:Boolean})],ce.prototype,"displayBranding",void 0);Re([u({type:Boolean})],ce.prototype,"basic",void 0);ce=Re([S("w3m-connecting-wc-view")],ce);var Bt=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let nt=class extends A{constructor(){super(),this.unsubscribe=[],this.isMobile=R.isMobile(),this.remoteFeatures=L.state.remoteFeatures,this.unsubscribe.push(L.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:n}=I.state,{customWallets:o}=L.state,r=Xt.getRecentWallets(),i=t.length||n.length||(o==null?void 0:o.length)||r.length;return d`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${i?d`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return d`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.reownBranding?d` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Bt([$()],nt.prototype,"isMobile",void 0);Bt([$()],nt.prototype,"remoteFeatures",void 0);nt=Bt([S("w3m-connecting-wc-basic-view")],nt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qi=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(e,t)=>{var o;const n=e._$AN;if(n===void 0)return!1;for(const r of n)(o=r._$AO)==null||o.call(r,t,!1),Me(r,t);return!0},it=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},Rn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Yi(t)}};function Gi(e){this._$AN!==void 0?(it(this),this._$AM=e,Rn(this)):this._$AM=e}function Ji(e,t=!1,n=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let i=n;i<o.length;i++)Me(o[i],!1),it(o[i]);else o!=null&&(Me(o,!1),it(o));else Me(this,e)}const Yi=e=>{e.type==On.CHILD&&(e._$AP??(e._$AP=Ji),e._$AQ??(e._$AQ=Gi))};class Qi extends An{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,o){super._$AT(t,n,o),Rn(this),this.isConnected=t._$AU}_$AO(t,n=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),n&&(Me(this,t),it(this))}setValue(t){if(qi(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=()=>new Xi;class Xi{}const $t=new WeakMap,Dt=Wn(class extends Qi{render(e){return zt}update(e,[t]){var o;const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),zt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=$t.get(t);n===void 0&&(n=new WeakMap,$t.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=$t.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Zi=k`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var ft=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let We=class extends A{constructor(){super(...arguments),this.inputElementRef=Lt(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return d`
      <label data-size=${this.size}>
        <input
          ${Dt(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};We.styles=[F,de,Zi];ft([u({type:Boolean})],We.prototype,"checked",void 0);ft([u({type:Boolean})],We.prototype,"disabled",void 0);ft([u()],We.prototype,"size",void 0);We=ft([S("wui-toggle")],We);const eo=k`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var _n=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let ot=class extends A{constructor(){super(...arguments),this.checked=!1}render(){return d`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};ot.styles=[F,de,eo];_n([u({type:Boolean})],ot.prototype,"checked",void 0);ot=_n([S("wui-certified-switch")],ot);const to=k`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var q=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let M=class extends A{constructor(){super(...arguments),this.inputElementRef=Lt(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return d` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${Dt(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${O(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?d`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var t;return this.onSubmit?d`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${(t=this.onSubmit)==null?void 0:t.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?d`<wui-icon name="spinner" size="md"></wui-icon>`:d`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?d`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?d`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};M.styles=[F,de,to];q([u()],M.prototype,"icon",void 0);q([u({type:Boolean})],M.prototype,"disabled",void 0);q([u({type:Boolean})],M.prototype,"loading",void 0);q([u()],M.prototype,"placeholder",void 0);q([u()],M.prototype,"type",void 0);q([u()],M.prototype,"value",void 0);q([u()],M.prototype,"errorText",void 0);q([u()],M.prototype,"warningText",void 0);q([u()],M.prototype,"onSubmit",void 0);q([u()],M.prototype,"size",void 0);q([u({attribute:!1})],M.prototype,"onKeyDown",void 0);M=q([S("wui-input-text")],M);const no=k`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var In=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let rt=class extends A{constructor(){super(...arguments),this.inputComponentRef=Lt(),this.inputValue=""}render(){return d`
      <wui-input-text
        ${Dt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?d`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",this.inputValue="",n.focus(),n.dispatchEvent(new Event("input")))}};rt.styles=[F,no];In([u()],rt.prototype,"inputValue",void 0);rt=In([S("wui-search-bar")],rt);const io=Le`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,oo=k`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Sn=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let st=class extends A{constructor(){super(...arguments),this.type="wallet"}render(){return d`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?d` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${io}`:d`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};st.styles=[F,de,oo];Sn([u()],st.prototype,"type",void 0);st=Sn([S("wui-card-select-loader")],st);const ro=on`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var G=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let U=class extends A{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&ae.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ae.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ae.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ae.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ae.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ae.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ae.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ae.getSpacingStyles(this.margin,3)};
    `,d`<slot></slot>`}};U.styles=[F,ro];G([u()],U.prototype,"gridTemplateRows",void 0);G([u()],U.prototype,"gridTemplateColumns",void 0);G([u()],U.prototype,"justifyItems",void 0);G([u()],U.prototype,"alignItems",void 0);G([u()],U.prototype,"justifyContent",void 0);G([u()],U.prototype,"alignContent",void 0);G([u()],U.prototype,"columnGap",void 0);G([u()],U.prototype,"rowGap",void 0);G([u()],U.prototype,"gap",void 0);G([u()],U.prototype,"padding",void 0);G([u()],U.prototype,"margin",void 0);U=G([S("wui-grid")],U);const so=k`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var ie=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let H=class extends A{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var n,o;const t=((n=this.wallet)==null?void 0:n.badge_type)==="certified";return d`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${O(t?"certified":void 0)}
            >${(o=this.wallet)==null?void 0:o.name}</wui-text
          >
          ${t?d`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,n;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():d`
      <wui-wallet-image
        size="lg"
        imageSrc=${O(this.imageSrc)}
        name=${O((t=this.wallet)==null?void 0:t.name)}
        .installed=${((n=this.wallet)==null?void 0:n.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return d`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=pe.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await pe.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,D.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:T.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};H.styles=so;ie([$()],H.prototype,"visible",void 0);ie([$()],H.prototype,"imageSrc",void 0);ie([$()],H.prototype,"imageLoading",void 0);ie([$()],H.prototype,"isImpressed",void 0);ie([u()],H.prototype,"explorerId",void 0);ie([u()],H.prototype,"walletQuery",void 0);ie([u()],H.prototype,"certified",void 0);ie([u()],H.prototype,"displayIndex",void 0);ie([u({type:Object})],H.prototype,"wallet",void 0);H=ie([S("w3m-all-wallets-list-item")],H);const ao=k`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var me=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};const Yt="local-paginator";let te=class extends A{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!I.state.wallets.length,this.wallets=I.state.wallets,this.recommended=I.state.recommended,this.featured=I.state.featured,this.filteredWallets=I.state.filteredWallets,this.mobileFullScreen=L.state.enableMobileFullScreen,this.unsubscribe.push(I.subscribeKey("wallets",t=>this.wallets=t),I.subscribeKey("recommended",t=>this.recommended=t),I.subscribeKey("featured",t=>this.featured=t),I.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),d`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;this.loading=!0;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");t&&(await I.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>d`
        <wui-card-select-loader type="wallet" id=${O(n)}></wui-card-select-loader>
      `)}getWallets(){var r;const t=[...this.featured,...this.recommended];((r=this.filteredWallets)==null?void 0:r.length)>0?t.push(...this.filteredWallets):t.push(...this.wallets);const n=R.uniqueBy(t,"id"),o=Et.markWalletsAsInstalled(n);return Et.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map((n,o)=>d`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${n.id}"
          @click=${()=>this.onConnectWallet(n)}
          .wallet=${n}
          explorerId=${n.id}
          certified=${this.badge==="certified"}
          displayIndex=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:o,count:r,mobileFilteredOutWalletsLength:i}=I.state,s=window.innerWidth<352?3:4,a=t.length+n.length;let c=Math.ceil(a/s)*s-a+s;return c-=t.length?o.length%s:0,r===0&&o.length>0?null:r===0||[...o,...t,...n].length<r-(i??0)?this.shimmerTemplate(c,Yt):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Yt}`);t&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o!=null&&o.isIntersecting&&!this.loading){const{page:r,count:i,wallets:s}=I.state;s.length<i&&I.fetchWalletsByPage({page:r+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){j.selectWalletConnector(t)}};te.styles=ao;me([$()],te.prototype,"loading",void 0);me([$()],te.prototype,"wallets",void 0);me([$()],te.prototype,"recommended",void 0);me([$()],te.prototype,"featured",void 0);me([$()],te.prototype,"filteredWallets",void 0);me([$()],te.prototype,"badge",void 0);me([$()],te.prototype,"mobileFullScreen",void 0);te=me([S("w3m-all-wallets-list")],te);const lo=on`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var qe=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Ee=class extends A{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=L.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?d`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await I.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=I.state,n=Et.markWalletsAsInstalled(t);return t.length?d`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${n.map((o,r)=>d`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
              explorerId=${o.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${r}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:d`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){j.selectWalletConnector(t)}};Ee.styles=lo;qe([$()],Ee.prototype,"loading",void 0);qe([$()],Ee.prototype,"mobileFullScreen",void 0);qe([u()],Ee.prototype,"query",void 0);qe([u()],Ee.prototype,"badge",void 0);Ee=qe([S("w3m-all-wallets-search")],Ee);var Mt=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let at=class extends A{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=R.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return d`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?d`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:d`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",Ue.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return R.isMobile()?d`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){T.push("ConnectingWalletConnect")}};Mt([$()],at.prototype,"search",void 0);Mt([$()],at.prototype,"badge",void 0);at=Mt([S("w3m-all-wallets-view")],at);const co=k`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var oe=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let K=class extends A{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",d`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${O(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?d`<wui-image
        icon=${this.icon}
        iconColor=${O(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:d`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?d`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:d`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};K.styles=[F,de,co];oe([u()],K.prototype,"imageSrc",void 0);oe([u()],K.prototype,"icon",void 0);oe([u()],K.prototype,"iconColor",void 0);oe([u({type:Boolean})],K.prototype,"loading",void 0);oe([u()],K.prototype,"tabIdx",void 0);oe([u({type:Boolean})],K.prototype,"disabled",void 0);oe([u({type:Boolean})],K.prototype,"rightIcon",void 0);oe([u({type:Boolean})],K.prototype,"rounded",void 0);oe([u({type:Boolean})],K.prototype,"fullSize",void 0);K=oe([S("wui-list-item")],K);var uo=globalThis&&globalThis.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let Qt=class extends A{constructor(){var t;super(...arguments),this.wallet=(t=T.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return d`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?d`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?d`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?d`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?d`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(t){t.href&&this.wallet&&(D.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:t.type}}),R.openHref(t.href,"_blank"))}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Qt=uo([S("w3m-downloads-view")],Qt);export{at as W3mAllWalletsView,nt as W3mConnectingWcBasicView,Qt as W3mDownloadsView};
