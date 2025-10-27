import{N as S,q as Pe,w as Ee,s as We,O as v,m as Me,r as Le,b as h,d as K,t as Ye,c as pe,C as O,j as T,R as u,u as ae,B as re,v as Qe,e as q,E as W,y as ce,z as le,M as x,D as ve,i as P,x as l,h as Ae,f as Ze,F as ee,p as He,A as ye,T as Je,P as et}from"./core-31eeb024.js";import{a as N,b as ge,c as I,n as m,o as L,r as g,e as je,v as Te,U as Ve,f as tt}from"./index-48380dee.js";import"./index-f9778b4e.js";const G={getGasPriceInEther(e,t){const o=t*e;return Number(o)/1e18},getGasPriceInUSD(e,t,o){const n=G.getGasPriceInEther(t,o);return S.bigNumber(e).times(n).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:n}){const a=S.bigNumber(e).times(t),i=S.bigNumber(n).times(o);return a.minus(i).div(a).times(100).toNumber()},getMaxSlippage(e,t){const o=S.bigNumber(e).div(100);return S.multiply(t,o).toNumber()},getProviderFee(e,t=.0085){return S.bigNumber(e).times(t).toString()},isInsufficientNetworkTokenForGas(e,t){const o=t||"0";return S.bigNumber(e).eq(0)?!0:S.bigNumber(S.bigNumber(o)).gt(e)},isInsufficientSourceTokenForSwap(e,t,o){var i,s;const n=(s=(i=o==null?void 0:o.find(c=>c.address===t))==null?void 0:i.quantity)==null?void 0:s.numeric;return S.bigNumber(n||"0").lt(e)}},B=Pe({message:"",variant:"info",open:!1}),ot={state:B,subscribeKey(e,t){return We(B,e,t)},open(e,t){const{debug:o}=v.state,{code:n,displayMessage:a,debugMessage:i}=e;a&&o&&(B.message=a,B.variant=t,B.open=!0),i&&console.error(typeof i=="function"?i():i,n?{code:n}:void 0)},warn(e,t,o){B.open=!0,B.message=e,B.variant="warning",t&&console.warn(t,o)},close(){B.open=!1,B.message="",B.variant="info"}},de=Ee(ot),De=15e4,it=6,$={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Me.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},r=Pe({...$}),ke={state:r,subscribe(e){return Le(r,()=>e(r))},subscribeKey(e,t){return We(r,e,t)},getParams(){var d,w,f,k,y,b,R,F,D;const e=h.state.activeChain,t=((d=h.getAccountData(e))==null?void 0:d.caipAddress)??h.state.activeCaipAddress,o=K.getPlainAddress(t),n=Ye(),a=pe.getConnectorId(h.state.activeChain);if(!o)throw new Error("No address found to swap the tokens from.");const i=!((w=r.toToken)!=null&&w.address)||!((f=r.toToken)!=null&&f.decimals),s=!((k=r.sourceToken)!=null&&k.address)||!((y=r.sourceToken)!=null&&y.decimals)||!S.bigNumber(r.sourceTokenAmount).gt(0),c=!r.sourceTokenAmount;return{networkAddress:n,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:(b=r.sourceToken)==null?void 0:b.address,toTokenAddress:(R=r.toToken)==null?void 0:R.address,toTokenAmount:r.toTokenAmount,toTokenDecimals:(F=r.toToken)==null?void 0:F.decimals,sourceTokenAmount:r.sourceTokenAmount,sourceTokenDecimals:(D=r.sourceToken)==null?void 0:D.decimals,invalidToToken:i,invalidSourceToken:s,invalidSourceTokenAmount:c,availableToSwap:t&&!i&&!s&&!c,isAuthConnector:a===O.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e){r.sourceToken=e,r.sourceTokenAmount="",r.sourceTokenPriceInUSD=0;return}r.sourceToken=e,await p.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){r.sourceTokenAmount=e},async setToToken(e){if(!e){r.toToken=e,r.toTokenAmount="",r.toTokenPriceInUSD=0;return}r.toToken=e,await p.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){r.toTokenAmount=e?S.toFixed(e,it):""},async setTokenPrice(e,t){let o=r.tokensPriceMap[e]||0;o||(r.loadingPrices=!0,o=await p.getAddressPrice(e)),t==="sourceToken"?r.sourceTokenPriceInUSD=o:t==="toToken"&&(r.toTokenPriceInUSD=o),r.loadingPrices&&(r.loadingPrices=!1),p.getParams().availableToSwap&&!r.switchingTokens&&p.swapTokens()},async switchTokens(){if(!(r.initializing||!r.initialized||r.switchingTokens)){r.switchingTokens=!0;try{const e=r.toToken?{...r.toToken}:void 0,t=r.sourceToken?{...r.sourceToken}:void 0,o=e&&r.toTokenAmount===""?"1":r.toTokenAmount;p.setSourceTokenAmount(o),p.setToTokenAmount(""),await p.setSourceToken(e),await p.setToToken(t),r.switchingTokens=!1,p.swapTokens()}catch(e){throw r.switchingTokens=!1,e}}},resetState(){r.myTokensWithBalance=$.myTokensWithBalance,r.tokensPriceMap=$.tokensPriceMap,r.initialized=$.initialized,r.initializing=$.initializing,r.switchingTokens=$.switchingTokens,r.sourceToken=$.sourceToken,r.sourceTokenAmount=$.sourceTokenAmount,r.sourceTokenPriceInUSD=$.sourceTokenPriceInUSD,r.toToken=$.toToken,r.toTokenAmount=$.toTokenAmount,r.toTokenPriceInUSD=$.toTokenPriceInUSD,r.networkPrice=$.networkPrice,r.networkTokenSymbol=$.networkTokenSymbol,r.networkBalanceInUSD=$.networkBalanceInUSD,r.inputError=$.inputError},resetValues(){var o;const{networkAddress:e}=p.getParams(),t=(o=r.tokens)==null?void 0:o.find(n=>n.address===e);p.setSourceToken(t),p.setToToken(void 0)},getApprovalLoadingState(){return r.loadingApprovalTransaction},clearError(){r.transactionError=void 0},async initializeState(){if(!r.initializing){if(r.initializing=!0,!r.initialized)try{await p.fetchTokens(),r.initialized=!0}catch{r.initialized=!1,T.showError("Failed to initialize swap"),u.goBack()}r.initializing=!1}},async fetchTokens(){var o;const{networkAddress:e}=p.getParams();await p.getNetworkTokenPrice(),await p.getMyTokensWithBalance();const t=(o=r.myTokensWithBalance)==null?void 0:o.find(n=>n.address===e);t&&(r.networkTokenSymbol=t.symbol,p.setSourceToken(t),p.setSourceTokenAmount("0"))},async getTokenList(){var t;const e=(t=h.state.activeCaipNetwork)==null?void 0:t.caipNetworkId;if(!(r.caipNetworkId===e&&r.tokens))try{r.tokensLoading=!0;const o=await ae.getTokenList(e);r.tokens=o,r.caipNetworkId=e,r.popularTokens=o.sort((n,a)=>n.symbol<a.symbol?-1:n.symbol>a.symbol?1:0),r.suggestedTokens=o.filter(n=>!!Me.SWAP_SUGGESTED_TOKENS.includes(n.symbol))}catch{r.tokens=[],r.popularTokens=[],r.suggestedTokens=[]}finally{r.tokensLoading=!1}},async getAddressPrice(e){var d,w;const t=r.tokensPriceMap[e];if(t)return t;const o=await re.fetchTokenPrice({addresses:[e]}),n=(o==null?void 0:o.fungibles)||[],a=[...r.tokens||[],...r.myTokensWithBalance||[]],i=(d=a==null?void 0:a.find(f=>f.address===e))==null?void 0:d.symbol,s=((w=n.find(f=>f.symbol.toLowerCase()===(i==null?void 0:i.toLowerCase())))==null?void 0:w.price)||0,c=parseFloat(s.toString());return r.tokensPriceMap[e]=c,c},async getNetworkTokenPrice(){var a;const{networkAddress:e}=p.getParams(),o=(a=(await re.fetchTokenPrice({addresses:[e]}).catch(()=>(T.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles)==null?void 0:a[0],n=(o==null?void 0:o.price.toString())||"0";r.tokensPriceMap[e]=parseFloat(n),r.networkTokenSymbol=(o==null?void 0:o.symbol)||"",r.networkPrice=n},async getMyTokensWithBalance(e){const t=await Qe.getMyTokensWithBalance(e),o=ae.mapBalancesToSwapTokens(t);o&&(await p.getInitialGasPrice(),p.setBalances(o))},setBalances(e){const{networkAddress:t}=p.getParams(),o=h.state.activeCaipNetwork;if(!o)return;const n=e.find(a=>a.address===t);e.forEach(a=>{r.tokensPriceMap[a.address]=a.price||0}),r.myTokensWithBalance=e.filter(a=>a.address.startsWith(o.caipNetworkId)),r.networkBalanceInUSD=n?S.multiply(n.quantity.numeric,n.price).toString():"0"},async getInitialGasPrice(){var t,o;const e=await ae.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch((o=(t=h.state)==null?void 0:t.activeCaipNetwork)==null?void 0:o.chainNamespace){case O.CHAIN.SOLANA:return r.gasFee=e.standard??"0",r.gasPriceInUSD=S.multiply(e.standard,r.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(r.gasFee),gasPriceInUSD:Number(r.gasPriceInUSD)};case O.CHAIN.EVM:default:const n=e.standard??"0",a=BigInt(n),i=BigInt(De),s=G.getGasPriceInUSD(r.networkPrice,i,a);return r.gasFee=n,r.gasPriceInUSD=s,{gasPrice:a,gasPriceInUSD:s}}},async swapTokens(){var i,s,c;const e=(i=h.getAccountData())==null?void 0:i.address,t=r.sourceToken,o=r.toToken,n=S.bigNumber(r.sourceTokenAmount).gt(0);if(n||p.setToTokenAmount(""),!o||!t||r.loadingPrices||!n||!e)return;r.loadingQuote=!0;const a=S.bigNumber(r.sourceTokenAmount).times(10**t.decimals).round(0);try{const d=await re.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:r.gasFee,amount:a.toString()});r.loadingQuote=!1;const w=(c=(s=d==null?void 0:d.quotes)==null?void 0:s[0])==null?void 0:c.toAmount;if(!w){de.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");return}const f=S.bigNumber(w).div(10**o.decimals).toString();p.setToTokenAmount(f),p.hasInsufficientToken(r.sourceTokenAmount,t.address)?r.inputError="Insufficient balance":(r.inputError=void 0,p.setTransactionDetails())}catch(d){const w=await ae.handleSwapError(d);r.loadingQuote=!1,r.inputError=w||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=p.getParams(),o=r.sourceToken,n=r.toToken;if(!(!e||!t||!o||!n||r.loadingQuote))try{r.loadingBuildTransaction=!0;const a=await ae.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:r.sourceTokenAmount,sourceTokenDecimals:o.decimals});let i;return a?i=await p.createSwapTransaction():i=await p.createAllowanceTransaction(),r.loadingBuildTransaction=!1,r.fetchError=!1,i}catch{u.goBack(),T.showError("Failed to check allowance"),r.loadingBuildTransaction=!1,r.approvalTransaction=void 0,r.swapTransaction=void 0,r.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=p.getParams();if(!(!e||!o)){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const n=await re.generateApproveCalldata({from:t,to:o,userAddress:e}),a=K.getPlainAddress(n.tx.from);if(!a)throw new Error("SwapController:createAllowanceTransaction - address is required");const i={data:n.tx.data,to:a,gasPrice:BigInt(n.tx.eip155.gasPrice),value:BigInt(n.tx.value),toAmount:r.toTokenAmount};return r.swapTransaction=void 0,r.approvalTransaction={data:i.data,to:i.to,gasPrice:i.gasPrice,value:i.value,toAmount:i.toAmount},{data:i.data,to:i.to,gasPrice:i.gasPrice,value:i.value,toAmount:i.toAmount}}catch{u.goBack(),T.showError("Failed to create approval transaction"),r.approvalTransaction=void 0,r.swapTransaction=void 0,r.fetchError=!0;return}}},async createSwapTransaction(){var s;const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=p.getParams(),n=r.sourceToken,a=r.toToken;if(!t||!o||!n||!a)return;const i=(s=q.parseUnits(o,n.decimals))==null?void 0:s.toString();try{const c=await re.generateSwapCalldata({userAddress:t,from:n.address,to:a.address,amount:i,disableEstimate:!0}),d=n.address===e,w=BigInt(c.tx.eip155.gas),f=BigInt(c.tx.eip155.gasPrice),k=K.getPlainAddress(c.tx.to);if(!k)throw new Error("SwapController:createSwapTransaction - address is required");const y={data:c.tx.data,to:k,gas:w,gasPrice:f,value:BigInt(d?i??"0":"0"),toAmount:r.toTokenAmount};return r.gasPriceInUSD=G.getGasPriceInUSD(r.networkPrice,w,f),r.approvalTransaction=void 0,r.swapTransaction=y,y}catch{u.goBack(),T.showError("Failed to create transaction"),r.approvalTransaction=void 0,r.swapTransaction=void 0,r.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){T.showLoading("Approve limit increase in your wallet"),u.replace("SwapPreview")},async sendTransactionForApproval(e){var a,i,s;const{fromAddress:t,isAuthConnector:o}=p.getParams();r.loadingApprovalTransaction=!0;const n="Approve limit increase in your wallet";o?u.pushTransactionStack({onSuccess:p.onEmbeddedWalletApprovalSuccess}):T.showLoading(n);try{await q.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:O.CHAIN.EVM}),await p.swapTokens(),await p.getTransaction(),r.approvalTransaction=void 0,r.loadingApprovalTransaction=!1}catch(c){const d=c;r.transactionError=d==null?void 0:d.displayMessage,r.loadingApprovalTransaction=!1,T.showError((d==null?void 0:d.displayMessage)||"Transaction error"),W.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:(d==null?void 0:d.displayMessage)||(d==null?void 0:d.message)||"Unknown",network:((a=h.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||"",swapFromToken:((i=p.state.sourceToken)==null?void 0:i.symbol)||"",swapToToken:((s=p.state.toToken)==null?void 0:s.symbol)||"",swapFromAmount:p.state.sourceTokenAmount||"",swapToAmount:p.state.toTokenAmount||"",isSmartAccount:ce(O.CHAIN.EVM)===le.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){var s,c,d,w,f,k,y,b,R,F,D,ne;if(!e)return;const{fromAddress:t,toTokenAmount:o,isAuthConnector:n}=p.getParams();r.loadingTransaction=!0;const a=`Swapping ${(s=r.sourceToken)==null?void 0:s.symbol} to ${S.formatNumberToLocalString(o,3)} ${(c=r.toToken)==null?void 0:c.symbol}`,i=`Swapped ${(d=r.sourceToken)==null?void 0:d.symbol} to ${S.formatNumberToLocalString(o,3)} ${(w=r.toToken)==null?void 0:w.symbol}`;n?u.pushTransactionStack({onSuccess(){u.replace("Account"),T.showLoading(a),ke.resetState()}}):T.showLoading("Confirm transaction in your wallet");try{const oe=[(f=r.sourceToken)==null?void 0:f.address,(k=r.toToken)==null?void 0:k.address].join(","),A=await q.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:O.CHAIN.EVM});return r.loadingTransaction=!1,T.showSuccess(i),W.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:((y=h.state.activeCaipNetwork)==null?void 0:y.caipNetworkId)||"",swapFromToken:((b=p.state.sourceToken)==null?void 0:b.symbol)||"",swapToToken:((R=p.state.toToken)==null?void 0:R.symbol)||"",swapFromAmount:p.state.sourceTokenAmount||"",swapToAmount:p.state.toTokenAmount||"",isSmartAccount:ce(O.CHAIN.EVM)===le.ACCOUNT_TYPES.SMART_ACCOUNT}}),ke.resetState(),n||u.replace("Account"),ke.getMyTokensWithBalance(oe),A}catch(oe){const A=oe;r.transactionError=A==null?void 0:A.displayMessage,r.loadingTransaction=!1,T.showError((A==null?void 0:A.displayMessage)||"Transaction error"),W.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:(A==null?void 0:A.displayMessage)||(A==null?void 0:A.message)||"Unknown",network:((F=h.state.activeCaipNetwork)==null?void 0:F.caipNetworkId)||"",swapFromToken:((D=p.state.sourceToken)==null?void 0:D.symbol)||"",swapToToken:((ne=p.state.toToken)==null?void 0:ne.symbol)||"",swapFromAmount:p.state.sourceTokenAmount||"",swapToAmount:p.state.toTokenAmount||"",isSmartAccount:ce(O.CHAIN.EVM)===le.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(e,t){return G.isInsufficientSourceTokenForSwap(e,t,r.myTokensWithBalance)},setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=p.getParams();!e||!t||(r.gasPriceInUSD=G.getGasPriceInUSD(r.networkPrice,BigInt(r.gasFee),BigInt(De)),r.priceImpact=G.getPriceImpact({sourceTokenAmount:r.sourceTokenAmount,sourceTokenPriceInUSD:r.sourceTokenPriceInUSD,toTokenPriceInUSD:r.toTokenPriceInUSD,toTokenAmount:r.toTokenAmount}),r.maxSlippage=G.getMaxSlippage(r.slippage,r.toTokenAmount),r.providerFee=G.getProviderFee(r.sourceTokenAmount))}},p=Ee(ke),U=Pe({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),nt={state:U,subscribe(e){return Le(U,()=>e(U))},subscribeKey(e,t){return We(U,e,t)},showTooltip({message:e,triggerRect:t,variant:o}){U.open=!0,U.message=e,U.triggerRect=t,U.variant=o},hide(){U.open=!1,U.message="",U.triggerRect={width:0,height:0,top:0,left:0}}},se=Ee(nt);let J=null;const M={getSIWX(){return v.state.siwx},async initializeIfEnabled(e=h.getActiveCaipAddress()){var i,s,c;const t=v.state.siwx;if(!(t&&e))return;const[o,n,a]=e.split(":");if(h.checkIfSupportedNetwork(o,`${o}:${n}`))try{if((i=v.state.remoteFeatures)!=null&&i.emailCapture){const w=(s=h.getAccountData(o))==null?void 0:s.user;await x.open({view:"DataCapture",data:{email:(w==null?void 0:w.email)??void 0}});return}if(J&&await J,(await t.getSessions(`${o}:${n}`,a)).length)return;await x.open({view:"SIWXSignMessage"})}catch(d){console.error("SIWXUtil:initializeIfEnabled",d),W.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties(d)}),await((c=q._getClient())==null?void 0:c.disconnect().catch(console.error)),u.reset("Connect"),T.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){const e=v.state.siwx,t=K.getPlainAddress(h.getActiveCaipAddress()),o=ve(),n=q._getClient();if(!e)throw new Error("SIWX is not enabled");if(!t)throw new Error("No ActiveCaipAddress found");if(!o)throw new Error("No ActiveCaipNetwork or client found");if(!n)throw new Error("No ConnectionController client found");try{const a=await e.createMessage({chainId:o.caipNetworkId,accountAddress:t}),i=a.toString();pe.getConnectorId(o.chainNamespace)===O.CONNECTOR_ID.AUTH&&u.pushTransactionStack({});const c=await n.signMessage(i);await e.addSession({data:a,message:i,signature:c}),h.setLastConnectedSIWECaipNetwork(o),x.close(),W.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(a){(!x.state.open||u.state.view==="ApproveTransaction")&&await x.open({view:"SIWXSignMessage"}),T.showError("Error signing message"),W.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties(a)}),console.error("SWIXUtil:requestSignMessage",a)}},async cancelSignMessage(){var e;try{const t=this.getSIWX();if((e=t==null?void 0:t.getRequired)==null?void 0:e.call(t)){const n=h.getLastConnectedSIWECaipNetwork();if(n){const a=await(t==null?void 0:t.getSessions(n==null?void 0:n.caipNetworkId,K.getPlainAddress(h.getActiveCaipAddress())||""));a&&a.length>0?await h.switchActiveNetwork(n):await q.disconnect()}else await q.disconnect()}else x.close();x.close(),W.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(t){console.error("SIWXUtil:cancelSignMessage",t)}},async getAllSessions(){const e=this.getSIWX(),t=h.getAllRequestedCaipNetworks(),o=[];return await Promise.all(t.map(async n=>{const a=await(e==null?void 0:e.getSessions(n.caipNetworkId,K.getPlainAddress(h.getActiveCaipAddress())||""));a&&o.push(...a)})),o},async getSessions(e){const t=v.state.siwx;let o=e==null?void 0:e.address;if(!o){const a=h.getActiveCaipAddress();o=K.getPlainAddress(a)}let n=e==null?void 0:e.caipNetworkId;if(!n){const a=h.getActiveCaipNetwork();n=a==null?void 0:a.caipNetworkId}return t&&o&&n?t.getSessions(n,o):[]},async isSIWXCloseDisabled(){var t;const e=this.getSIWX();if(e){const o=u.state.view==="ApproveTransaction",n=u.state.view==="SIWXSignMessage";if(o||n)return((t=e.getRequired)==null?void 0:t.call(e))&&(await this.getSessions()).length===0}return!1},async authConnectorAuthenticate({authConnector:e,chainId:t,socialUri:o,preferredAccountType:n,chainNamespace:a}){var k;const i=M.getSIWX(),s=ve();if(!i||!a.includes(O.CHAIN.EVM)||(k=v.state.remoteFeatures)!=null&&k.emailCapture){const y=await e.connect({chainId:t,socialUri:o,preferredAccountType:n});return{address:y.address,chainId:y.chainId,accounts:y.accounts}}const c=`${a}:${t}`,d=await i.createMessage({chainId:c,accountAddress:"<<AccountAddress>>"}),w={accountAddress:d.accountAddress,chainId:d.chainId,domain:d.domain,uri:d.uri,version:d.version,nonce:d.nonce,notBefore:d.notBefore,statement:d.statement,resources:d.resources,requestId:d.requestId,issuedAt:d.issuedAt,expirationTime:d.expirationTime,serializedMessage:d.toString()},f=await e.connect({chainId:t,socialUri:o,siwxMessage:w,preferredAccountType:n});return w.accountAddress=f.address,w.serializedMessage=f.message||"",f.signature&&f.message&&await M.addEmbeddedWalletSession(w,f.message,f.signature),h.setLastConnectedSIWECaipNetwork(s),{address:f.address,chainId:f.chainId,accounts:f.accounts}},async addEmbeddedWalletSession(e,t,o){if(J)return J;const n=M.getSIWX();return n?(J=n.addSession({data:e,message:t,signature:o}).finally(()=>{J=null}),J):Promise.resolve()},async universalProviderAuthenticate({universalProvider:e,chains:t,methods:o}){var w,f,k;const n=M.getSIWX(),a=ve(),i=new Set(t.map(y=>y.split(":")[0]));if(!n||i.size!==1||!i.has("eip155"))return!1;const s=await n.createMessage({chainId:((w=ve())==null?void 0:w.caipNetworkId)||"",accountAddress:""}),c=await e.authenticate({nonce:s.nonce,domain:s.domain,uri:s.uri,exp:s.expirationTime,iat:s.issuedAt,nbf:s.notBefore,requestId:s.requestId,version:s.version,resources:s.resources,statement:s.statement,chainId:s.chainId,methods:o,chains:[s.chainId,...t.filter(y=>y!==s.chainId)]});T.showLoading("Authenticating...",{autoClose:!1});const d={...c.session.peer.metadata,name:c.session.peer.metadata.name,icon:(f=c.session.peer.metadata.icons)==null?void 0:f[0],type:"WALLET_CONNECT"};if(h.setAccountProp("connectedWalletInfo",d,Array.from(i)[0]),(k=c==null?void 0:c.auths)!=null&&k.length){const y=c.auths.map(b=>{const R=e.client.formatAuthMessage({request:b.p,iss:b.p.iss});return{data:{...b.p,accountAddress:b.p.iss.split(":").slice(-1).join(""),chainId:b.p.iss.split(":").slice(2,4).join(":"),uri:b.p.aud,version:b.p.version||s.version,expirationTime:b.p.exp,issuedAt:b.p.iat,notBefore:b.p.nbf},message:R,signature:b.s.s,cacao:b}});try{await n.setSessions(y),a&&h.setLastConnectedSIWECaipNetwork(a),W.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:M.getSIWXEventProperties()})}catch(b){throw console.error("SIWX:universalProviderAuth - failed to set sessions",b),W.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:M.getSIWXEventProperties(b)}),await e.disconnect().catch(console.error),b}finally{T.hide()}}return!0},getSIWXEventProperties(e){var o;const t=h.state.activeChain;if(!t)throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");return{network:((o=h.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||"",isSmartAccount:ce(t)===le.ACCOUNT_TYPES.SMART_ACCOUNT,message:e?K.parseError(e):void 0}},async clearSessions(){const e=this.getSIWX();e&&await e.setSessions([])}},Xe={isUnsupportedChainView(){return u.state.view==="UnsupportedChain"||u.state.view==="SwitchNetwork"&&u.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){x.shake();return}if(await M.isSIWXCloseDisabled()){x.shake();return}(u.state.view==="DataCapture"||u.state.view==="DataCaptureOtpConfirm")&&q.disconnect(),x.close()}},at=N`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var rt=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let Ie=class extends P{render(){return l`<slot></slot>`}};Ie.styles=[ge,at];Ie=rt([I("wui-card")],Ie);const st=N`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var Ne=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};const ct={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let we=class extends P{constructor(){super(...arguments),this.message="",this.type="info"}render(){return l`
      <wui-flex
        data-type=${L(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${ct[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){de.close()}};we.styles=[ge,st];Ne([m()],we.prototype,"message",void 0);Ne([m()],we.prototype,"type",void 0);we=Ne([I("wui-alertbar")],we);const lt=N`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var Ke=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};const dt={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let Se=class extends P{constructor(){super(),this.unsubscribe=[],this.open=de.state.open,this.onOpen(!0),this.unsubscribe.push(de.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:o}=de.state,n=dt[o];return l`
      <wui-alertbar
        message=${t}
        backgroundColor=${n==null?void 0:n.backgroundColor}
        iconColor=${n==null?void 0:n.iconColor}
        icon=${n==null?void 0:n.icon}
        type=${o}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Se.styles=lt;Ke([g()],Se.prototype,"open",void 0);Se=Ke([I("w3m-alertbar")],Se);const ut=N`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Q=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let H=class extends P{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return l`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${L(this.iconSize)}></wui-icon>
    </button>`}};H.styles=[ge,je,ut];Q([m()],H.prototype,"icon",void 0);Q([m()],H.prototype,"variant",void 0);Q([m()],H.prototype,"type",void 0);Q([m()],H.prototype,"size",void 0);Q([m()],H.prototype,"iconSize",void 0);Q([m({type:Boolean})],H.prototype,"fullWidth",void 0);Q([m({type:Boolean})],H.prototype,"disabled",void 0);H=Q([I("wui-icon-button")],H);const pt=N`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var ie=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};const wt={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ht={lg:"lg",md:"md",sm:"sm"};let Y=class extends P{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return l`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const t=wt[this.size];return this.text?l`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return l`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const t=ht[this.size];return l` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};Y.styles=[ge,je,pt];ie([m()],Y.prototype,"imageSrc",void 0);ie([m()],Y.prototype,"text",void 0);ie([m()],Y.prototype,"size",void 0);ie([m()],Y.prototype,"type",void 0);ie([m({type:Boolean})],Y.prototype,"disabled",void 0);Y=ie([I("wui-select")],Y);const mt=N`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Z=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};const ft=["SmartSessionList"],gt={PayWithExchange:Te.tokens.theme.foregroundPrimary};function Be(){var d,w,f,k,y,b,R,F;const e=(w=(d=u.state.data)==null?void 0:d.connector)==null?void 0:w.name,t=(k=(f=u.state.data)==null?void 0:f.wallet)==null?void 0:k.name,o=(b=(y=u.state.data)==null?void 0:y.network)==null?void 0:b.name,n=t??e,a=pe.getConnectors(),i=a.length===1&&((R=a[0])==null?void 0:R.id)==="w3m-email",s=(F=h.getAccountData())==null?void 0:F.socialProvider,c=s?s.charAt(0).toUpperCase()+s.slice(1):"Connect Social";return{Connect:`Connect ${i?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:n?`Get ${n}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:o??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:c,ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset"}}let j=class extends P{constructor(){super(),this.unsubscribe=[],this.heading=Be()[u.state.view],this.network=h.state.activeCaipNetwork,this.networkImage=Ae.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.state.view,this.viewDirection="",this.unsubscribe.push(Ze.subscribeNetworkImages(()=>{this.networkImage=Ae.getNetworkImage(this.network)}),u.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.heading=Be()[t]},ee.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),h.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=Ae.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=gt[u.state.view]??Te.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),l`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){W.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.push("WhatIsAWallet")}async onClose(){await Xe.safeClose()}rightHeaderTemplate(){var o,n,a;const t=(a=(n=(o=v)==null?void 0:o.state)==null?void 0:n.features)==null?void 0:a.smartSessions;return u.state.view!=="Account"||!t?this.closeButtonTemplate():l`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>u.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return l`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){const t=ft.includes(this.view);return l`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${t?l`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var w;const{view:t}=u.state,o=t==="Connect",n=v.state.enableEmbedded,a=t==="ApproveTransaction",i=t==="ConnectingSiwe",s=t==="Account",c=v.state.enableNetworkSwitch,d=a||i||o&&n;return s&&c?l`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${L((w=this.network)==null?void 0:w.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${L(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?l`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:l`<wui-icon-button
      data-hidden=${!o}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(W.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.push("Networks"))}isAllowedNetworkSwitch(){const t=h.getAllRequestedCaipNetworks(),o=t?t.length>1:!1,n=t==null?void 0:t.find(({id:a})=>{var i;return a===((i=this.network)==null?void 0:i.id)});return o||!n}onViewChange(){const{history:t}=u.state;let o=ee.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(o=ee.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=o}async onHistoryChange(){var n;const{history:t}=u.state,o=(n=this.shadowRoot)==null?void 0:n.querySelector("#dynamic");t.length>1&&!this.showBack&&o?(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&o&&(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.goBack()}};j.styles=mt;Z([g()],j.prototype,"heading",void 0);Z([g()],j.prototype,"network",void 0);Z([g()],j.prototype,"networkImage",void 0);Z([g()],j.prototype,"showBack",void 0);Z([g()],j.prototype,"prevHistoryLength",void 0);Z([g()],j.prototype,"view",void 0);Z([g()],j.prototype,"viewDirection",void 0);j=Z([I("w3m-header")],j);const bt=N`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var Re=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let he=class extends P{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return l`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){const t={success:"success",error:"error",warning:"warning",info:"default"},o={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};return this.variant==="loading"?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:l`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${o[this.variant]}
    ></wui-icon-box>`}};he.styles=[ge,bt];Re([m()],he.prototype,"message",void 0);Re([m()],he.prototype,"variant",void 0);he=Re([I("wui-snackbar")],he);const vt=He`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Ge=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let xe=class extends P{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=T.state.open,this.unsubscribe.push(T.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:o}=T.state;return l` <wui-snackbar message=${t} variant=${o}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),T.state.autoClose&&(this.timeout=setTimeout(()=>T.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};xe.styles=vt;Ge([g()],xe.prototype,"open",void 0);xe=Ge([I("w3m-snackbar")],xe);const yt=N`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var be=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let te=class extends P{constructor(){super(),this.unsubscribe=[],this.open=se.state.open,this.message=se.state.message,this.triggerRect=se.state.triggerRect,this.variant=se.state.variant,this.unsubscribe.push(se.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,o=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${o}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,l`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};te.styles=[yt];be([g()],te.prototype,"open",void 0);be([g()],te.prototype,"message",void 0);be([g()],te.prototype,"triggerRect",void 0);be([g()],te.prototype,"variant",void 0);te=be([I("w3m-tooltip")],te);const ue={getTabsByNamespace(e){var o;return!!e&&e===O.CHAIN.EVM?((o=v.state.remoteFeatures)==null?void 0:o.activity)===!1?ee.ACCOUNT_TABS.filter(n=>n.label!=="Activity"):ee.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){var t;const e=u.state.view;if(ee.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:o,privacyPolicyUrl:n}=v.state,a=(t=v.state.features)==null?void 0:t.legalCheckbox;return!(!o&&!n||a)}return ee.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}},kt=N`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var qe=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let Ce=class extends P{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=v.state.remoteFeatures,this.unsubscribe.push(v.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var i;const{termsConditionsUrl:t,privacyPolicyUrl:o}=v.state,n=(i=v.state.features)==null?void 0:i.legalCheckbox;return!t&&!o||n?l`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:l`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:o}=v.state;return t&&o?"and":""}termsTemplate(){const{termsConditionsUrl:t}=v.state;return t?l`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:t}=v.state;return t?l`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){var o;return(o=this.remoteFeatures)!=null&&o.reownBranding?t?l`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:l`<wui-ux-by-reown></wui-ux-by-reown>`:null}};Ce.styles=[kt];qe([g()],Ce.prototype,"remoteFeatures",void 0);Ce=qe([I("w3m-legal-footer")],Ce);const Tt=He``;var St=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let $e=class extends P{render(){const{termsConditionsUrl:t,privacyPolicyUrl:o}=v.state;return!t&&!o?null:l`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return l` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){W.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:ce(h.state.activeChain)===le.ACCOUNT_TYPES.SMART_ACCOUNT}}),u.push("WhatIsABuy")}};$e.styles=[Tt];$e=St([I("w3m-onramp-providers-footer")],$e);const xt=N`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var Oe=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let me=class extends P{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=u.state.view}firstUpdated(){this.status=ue.hasFooter()?"show":"hide",this.unsubscribe.push(u.subscribeKey("view",t=>{this.view=t,this.status=ue.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(t=>{for(const o of t)if(o.target===this.getWrapper()){const n=`${o.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",n)}}),this.resizeObserver.observe(this.getWrapper())}render(){return l`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return ue.hasFooter()?l` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return l`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return l`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return l` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){W.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),u.push("WhatIsANetwork")}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.container")}};me.styles=[xt];Oe([g()],me.prototype,"status",void 0);Oe([g()],me.prototype,"view",void 0);me=Oe([I("w3m-footer")],me);const Ct=N`
  :host {
    display: block;
    width: inherit;
  }
`;var _e=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let fe=class extends P{constructor(){super(),this.unsubscribe=[],this.viewState=u.state.view,this.history=u.state.history.join(","),this.unsubscribe.push(u.subscribeKey("view",()=>{this.history=u.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return l`${this.templatePageContainer()}`}templatePageContainer(){return l`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=u.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(t){switch(t){case"AccountSettings":return l`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return l`<w3m-account-view></w3m-account-view>`;case"AllWallets":return l`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return l`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return l`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return l`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return l`<w3m-connect-view></w3m-connect-view>`;case"Create":return l`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return l`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return l`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return l`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return l`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return l`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return l`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return l`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return l`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return l`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return l`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return l`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return l`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return l`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return l`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return l`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return l`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return l`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return l`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return l`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return l`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return l`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return l`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return l`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return l`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return l`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return l`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return l`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return l`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return l`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return l`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return l`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return l`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return l`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return l`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return l`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return l`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return l`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return l`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return l`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return l`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return l`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return l`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return l`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return l`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return l`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return l`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return l`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return l`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return l`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return l`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return l`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;default:return l`<w3m-connect-view></w3m-connect-view>`}}};fe.styles=[Ct];_e([g()],fe.prototype,"viewState",void 0);_e([g()],fe.prototype,"history",void 0);fe=_e([I("w3m-router")],fe);const At=N`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var V=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};const Ue="scroll-lock",It={PayWithExchange:"0",PayWithExchangeSelectAsset:"0"};class z extends P{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=v.state.enableEmbedded,this.open=x.state.open,this.caipAddress=h.state.activeCaipAddress,this.caipNetwork=h.state.activeCaipNetwork,this.shake=x.state.shake,this.filterByNamespace=pe.state.filterByNamespace,this.padding=Te.spacing[1],this.mobileFullScreen=v.state.enableMobileFullScreen,this.initializeTheming(),ye.prefetchAnalyticsConfig(),this.unsubscribe.push(x.subscribeKey("open",t=>t?this.onOpen():this.onClose()),x.subscribeKey("shake",t=>this.shake=t),h.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),h.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),v.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),pe.subscribeKey("filterByNamespace",t=>{var o;this.filterByNamespace!==t&&!((o=h.getAccountData(t))!=null&&o.caipAddress)&&(ye.fetchRecommendedWallets(),this.filterByNamespace=t)}),u.subscribeKey("view",()=>{this.dataset.border=ue.hasFooter()?"true":"false",this.padding=It[u.state.view]??Te.spacing[1]}))}firstUpdated(){if(this.dataset.border=ue.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){x.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?l`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?l`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return l` <wui-card
      shake="${this.shake}"
      data-embedded="${L(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){if(t.target===t.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await Xe.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:o}=Je.state,n=Ve.getColorTheme(o);tt(t,n)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),T.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=Ue,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${Ue}"]`);t&&t.remove()}onAddKeyboardListener(){var o;this.abortController=new AbortController;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",n=>{if(n.key==="Escape")this.handleClose();else if(n.key==="Tab"){const{tagName:a}=n.target;a&&!a.includes("W3M-")&&!a.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const o=h.state.isSwitchingNamespace,n=u.state.view==="ProfileWallets";t?await this.onConnected({caipAddress:t,isSwitchingNamespace:o,isInProfileView:n}):!o&&!this.enableEmbedded&&!n&&x.close(),await M.initializeIfEnabled(t),this.caipAddress=t,h.setIsSwitchingNamespace(!1)}async onConnected(t){if(t.isInProfileView)return;const{chainNamespace:o,chainId:n,address:a}=et.parseCaipAddress(t.caipAddress),i=`${o}:${n}`,s=!K.getPlainAddress(this.caipAddress),c=await M.getSessions({address:a,caipNetworkId:i}),d=M.getSIWX()?c.some(k=>k.data.accountAddress===a):!0,w=t.isSwitchingNamespace&&d&&!this.enableEmbedded,f=this.enableEmbedded&&s;w?u.goBack():f&&x.close()}onNewNetwork(t){var ne,oe,A;const o=this.caipNetwork,n=(ne=o==null?void 0:o.caipNetworkId)==null?void 0:ne.toString(),a=o==null?void 0:o.chainNamespace,i=(oe=t==null?void 0:t.caipNetworkId)==null?void 0:oe.toString(),s=t==null?void 0:t.chainNamespace,c=n!==i,w=c&&!(a!==s),f=(o==null?void 0:o.name)===O.UNSUPPORTED_NETWORK_NAME,k=u.state.view==="ConnectingExternal",y=u.state.view==="ProfileWallets",b=!((A=h.getAccountData(t==null?void 0:t.chainNamespace))!=null&&A.caipAddress),R=u.state.view==="UnsupportedChain",F=x.state.open;let D=!1;this.enableEmbedded&&u.state.view==="SwitchNetwork"&&(D=!0),c&&p.resetState(),F&&!k&&!y&&(b?c&&(D=!0):(R||w&&!f)&&(D=!0)),D&&u.state.view!=="SIWXSignMessage"&&u.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(ye.prefetch(),ye.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}z.styles=At;V([m({type:Boolean})],z.prototype,"enableEmbedded",void 0);V([g()],z.prototype,"open",void 0);V([g()],z.prototype,"caipAddress",void 0);V([g()],z.prototype,"caipNetwork",void 0);V([g()],z.prototype,"shake",void 0);V([g()],z.prototype,"filterByNamespace",void 0);V([g()],z.prototype,"padding",void 0);V([g()],z.prototype,"mobileFullScreen",void 0);let ze=class extends z{};ze=V([I("w3m-modal")],ze);let Fe=class extends z{};Fe=V([I("appkit-modal")],Fe);const $t=N`
  :host {
    width: 100%;
  }
`;var E=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let C=class extends P{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(t){super.updated(t),(t.has("name")||t.has("imageSrc")||t.has("walletRank"))&&(this.hasImpressionSent=!1),t.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&W.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.state.view,displayIndex:this.displayIndex}))}render(){return l`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${L(this.imageSrc)}
        name=${this.name}
        size=${L(this.size)}
        tagLabel=${L(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `}};C.styles=$t;E([m({type:Array})],C.prototype,"walletImages",void 0);E([m()],C.prototype,"imageSrc",void 0);E([m()],C.prototype,"name",void 0);E([m()],C.prototype,"size",void 0);E([m()],C.prototype,"tagLabel",void 0);E([m()],C.prototype,"tagVariant",void 0);E([m()],C.prototype,"walletIcon",void 0);E([m()],C.prototype,"tabIdx",void 0);E([m({type:Boolean})],C.prototype,"disabled",void 0);E([m({type:Boolean})],C.prototype,"showAllWallets",void 0);E([m({type:Boolean})],C.prototype,"loading",void 0);E([m({type:String})],C.prototype,"loadingSpinnerColor",void 0);E([m()],C.prototype,"rdnsId",void 0);E([m()],C.prototype,"displayIndex",void 0);E([m()],C.prototype,"walletRank",void 0);C=E([I("w3m-list-wallet")],C);const Pt=N`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var X=globalThis&&globalThis.__decorate||function(e,t,o,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};const Et=60;let _=class extends P{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=v.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(t){if(t.has("history")){const o=this.history;this.historyState!==""&&this.historyState!==o&&this.onViewChange(o)}t.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),t.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var t;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(o=>{var n;for(const a of o)if(a.target===this.getWrapper()){let i=a.contentRect.height;const s=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){const c=((n=window.visualViewport)==null?void 0:n.height)||window.innerHeight,d=this.getHeaderHeight();i=c-d-s,this.style.setProperty("--local-border-bottom-radius","0px")}else i=i+s,this.style.setProperty("--local-border-bottom-radius",s?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${i}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),(t=window.visualViewport)==null||t.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var o;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),(o=window.visualViewport)==null||o.removeEventListener("resize",this.onViewportResize)}render(){return l`
      <div class="container" data-mobile-fullscreen="${L(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${L(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(t){const o=t.split(",").filter(Boolean),n=this.historyState.split(",").filter(Boolean),a=n.length,i=o.length,s=o[o.length-1]||"",c=Ve.cssDurationToNumber(this.transitionDuration);let d="";i>a?d="next":i<a?d="prev":i===a&&o[i-1]!==n[a-1]&&(d="next"),this.viewDirection=`${d}-${s}`,setTimeout(()=>{var w;this.historyState=t,(w=this.setView)==null||w.call(this,s)},c),setTimeout(()=>{this.viewDirection=""},c*2)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.page")}updateContainerHeight(){var a;const t=this.getWrapper();if(!t)return;const o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let n=0;if(this.mobileFullScreen){const i=((a=window.visualViewport)==null?void 0:a.height)||window.innerHeight,s=this.getHeaderHeight();n=i-s-o,this.style.setProperty("--local-border-bottom-radius","0px")}else n=t.getBoundingClientRect().height+o,this.style.setProperty("--local-border-bottom-radius",o?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${n}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${n}px`}getHeaderHeight(){return Et}};_.styles=[Pt];X([m({type:String})],_.prototype,"transitionDuration",void 0);X([m({type:String})],_.prototype,"transitionFunction",void 0);X([m({type:String})],_.prototype,"history",void 0);X([m({type:String})],_.prototype,"view",void 0);X([m({attribute:!1})],_.prototype,"setView",void 0);X([g()],_.prototype,"viewDirection",void 0);X([g()],_.prototype,"historyState",void 0);X([g()],_.prototype,"previousHeight",void 0);X([g()],_.prototype,"mobileFullScreen",void 0);_=X([I("w3m-router-container")],_);export{Fe as AppKitModal,C as W3mListWallet,ze as W3mModal,z as W3mModalBase,_ as W3mRouterContainer};
