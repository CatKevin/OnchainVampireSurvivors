import{G as me,I as we,p as _,J as k,i as $,x as p,o as ve,n as g,K as be}from"./core-492edf9c.js";import{_ as c}from"./index-1fde6c79.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:we},$e=(e=xe,t,r)=>{const{kind:n,metadata:a}=r;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,h,e)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(n==="setter"){const{name:o}=r;return function(l){const h=this[o];t.call(this,l),this.requestUpdate(o,h,e)}}throw Error("Unsupported decorator location: "+n)};function s(e){return(t,r)=>typeof r=="object"?$e(e,t,r):((n,a,i)=>{const o=a.hasOwnProperty(i);return a.constructor.createProperty(i,n),o?Object.getOwnPropertyDescriptor(a,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(e){return s({...e,state:!0,attribute:!1})}const ye={black:"#202020",white:"#FFFFFF",white010:"rgba(255, 255, 255, 0.1)",accent010:"rgba(9, 136, 240, 0.1)",accent020:"rgba(9, 136, 240, 0.2)",accent030:"rgba(9, 136, 240, 0.3)",accent040:"rgba(9, 136, 240, 0.4)",accent050:"rgba(9, 136, 240, 0.5)",accent060:"rgba(9, 136, 240, 0.6)",accent070:"rgba(9, 136, 240, 0.7)",accent080:"rgba(9, 136, 240, 0.8)",accent090:"rgba(9, 136, 240, 0.9)",accent100:"rgba(9, 136, 240, 1.0)",accentSecondary010:"rgba(199, 185, 148, 0.1)",accentSecondary020:"rgba(199, 185, 148, 0.2)",accentSecondary030:"rgba(199, 185, 148, 0.3)",accentSecondary040:"rgba(199, 185, 148, 0.4)",accentSecondary050:"rgba(199, 185, 148, 0.5)",accentSecondary060:"rgba(199, 185, 148, 0.6)",accentSecondary070:"rgba(199, 185, 148, 0.7)",accentSecondary080:"rgba(199, 185, 148, 0.8)",accentSecondary090:"rgba(199, 185, 148, 0.9)",accentSecondary100:"rgba(199, 185, 148, 1.0)",productWalletKit:"#FFB800",productAppKit:"#FF573B",productCloud:"#0988F0",productDocumentation:"#008847",neutrals050:"#F6F6F6",neutrals100:"#F3F3F3",neutrals200:"#E9E9E9",neutrals300:"#D0D0D0",neutrals400:"#BBB",neutrals500:"#9A9A9A",neutrals600:"#6C6C6C",neutrals700:"#4F4F4F",neutrals800:"#363636",neutrals900:"#2A2A2A",neutrals1000:"#252525",semanticSuccess010:"rgba(48, 164, 107, 0.1)",semanticSuccess020:"rgba(48, 164, 107, 0.2)",semanticSuccess030:"rgba(48, 164, 107, 0.3)",semanticSuccess040:"rgba(48, 164, 107, 0.4)",semanticSuccess050:"rgba(48, 164, 107, 0.5)",semanticSuccess060:"rgba(48, 164, 107, 0.6)",semanticSuccess070:"rgba(48, 164, 107, 0.7)",semanticSuccess080:"rgba(48, 164, 107, 0.8)",semanticSuccess090:"rgba(48, 164, 107, 0.9)",semanticSuccess100:"rgba(48, 164, 107, 1.0)",semanticError010:"rgba(223, 74, 52, 0.1)",semanticError020:"rgba(223, 74, 52, 0.2)",semanticError030:"rgba(223, 74, 52, 0.3)",semanticError040:"rgba(223, 74, 52, 0.4)",semanticError050:"rgba(223, 74, 52, 0.5)",semanticError060:"rgba(223, 74, 52, 0.6)",semanticError070:"rgba(223, 74, 52, 0.7)",semanticError080:"rgba(223, 74, 52, 0.8)",semanticError090:"rgba(223, 74, 52, 0.9)",semanticError100:"rgba(223, 74, 52, 1.0)",semanticWarning010:"rgba(243, 161, 63, 0.1)",semanticWarning020:"rgba(243, 161, 63, 0.2)",semanticWarning030:"rgba(243, 161, 63, 0.3)",semanticWarning040:"rgba(243, 161, 63, 0.4)",semanticWarning050:"rgba(243, 161, 63, 0.5)",semanticWarning060:"rgba(243, 161, 63, 0.6)",semanticWarning070:"rgba(243, 161, 63, 0.7)",semanticWarning080:"rgba(243, 161, 63, 0.8)",semanticWarning090:"rgba(243, 161, 63, 0.9)",semanticWarning100:"rgba(243, 161, 63, 1.0)"},q={core:{backgroundAccentPrimary:"#0988F0",backgroundAccentCertified:"#C7B994",backgroundWalletKit:"#FFB800",backgroundAppKit:"#FF573B",backgroundCloud:"#0988F0",backgroundDocumentation:"#008847",backgroundSuccess:"rgba(48, 164, 107, 0.20)",backgroundError:"rgba(223, 74, 52, 0.20)",backgroundWarning:"rgba(243, 161, 63, 0.20)",textAccentPrimary:"#0988F0",textAccentCertified:"#C7B994",textWalletKit:"#FFB800",textAppKit:"#FF573B",textCloud:"#0988F0",textDocumentation:"#008847",textSuccess:"#30A46B",textError:"#DF4A34",textWarning:"#F3A13F",borderAccentPrimary:"#0988F0",borderSecondary:"#C7B994",borderSuccess:"#30A46B",borderError:"#DF4A34",borderWarning:"#F3A13F",foregroundAccent010:"rgba(9, 136, 240, 0.1)",foregroundAccent020:"rgba(9, 136, 240, 0.2)",foregroundAccent040:"rgba(9, 136, 240, 0.4)",foregroundAccent060:"rgba(9, 136, 240, 0.6)",foregroundSecondary020:"rgba(199, 185, 148, 0.2)",foregroundSecondary040:"rgba(199, 185, 148, 0.4)",foregroundSecondary060:"rgba(199, 185, 148, 0.6)",iconAccentPrimary:"#0988F0",iconAccentCertified:"#C7B994",iconSuccess:"#30A46B",iconError:"#DF4A34",iconWarning:"#F3A13F",glass010:"rgba(255, 255, 255, 0.1)",zIndex:"9999"},dark:{overlay:"rgba(0, 0, 0, 0.50)",backgroundPrimary:"#202020",backgroundInvert:"#FFFFFF",textPrimary:"#FFFFFF",textSecondary:"#9A9A9A",textTertiary:"#BBBBBB",textInvert:"#202020",borderPrimary:"#2A2A2A",borderPrimaryDark:"#363636",borderSecondary:"#4F4F4F",foregroundPrimary:"#252525",foregroundSecondary:"#2A2A2A",foregroundTertiary:"#363636",iconDefault:"#9A9A9A",iconInverse:"#FFFFFF"},light:{overlay:"rgba(230 , 230, 230, 0.5)",backgroundPrimary:"#FFFFFF",borderPrimaryDark:"#E9E9E9",backgroundInvert:"#202020",textPrimary:"#202020",textSecondary:"#9A9A9A",textTertiary:"#6C6C6C",textInvert:"#FFFFFF",borderPrimary:"#E9E9E9",borderSecondary:"#D0D0D0",foregroundPrimary:"#F3F3F3",foregroundSecondary:"#E9E9E9",foregroundTertiary:"#D0D0D0",iconDefault:"#9A9A9A",iconInverse:"#202020"}},Ce={1:"4px",2:"8px",10:"10px",3:"12px",4:"16px",6:"24px",5:"20px",8:"32px",16:"64px",20:"80px",32:"128px",64:"256px",128:"512px",round:"9999px"},_e={0:"0px","01":"2px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",14:"56px",16:"64px",20:"80px",32:"128px",64:"256px"},ke={regular:"KHTeka",mono:"KHTekaMono"},Se={regular:"400",medium:"500"},Le={h1:"50px",h2:"44px",h3:"38px",h4:"32px",h5:"26px",h6:"20px",large:"16px",medium:"14px",small:"12px"},Pe={"h1-regular-mono":{lineHeight:"50px",letterSpacing:"-3px"},"h1-regular":{lineHeight:"50px",letterSpacing:"-1px"},"h1-medium":{lineHeight:"50px",letterSpacing:"-0.84px"},"h2-regular-mono":{lineHeight:"44px",letterSpacing:"-2.64px"},"h2-regular":{lineHeight:"44px",letterSpacing:"-0.88px"},"h2-medium":{lineHeight:"44px",letterSpacing:"-0.88px"},"h3-regular-mono":{lineHeight:"38px",letterSpacing:"-2.28px"},"h3-regular":{lineHeight:"38px",letterSpacing:"-0.76px"},"h3-medium":{lineHeight:"38px",letterSpacing:"-0.76px"},"h4-regular-mono":{lineHeight:"32px",letterSpacing:"-1.92px"},"h4-regular":{lineHeight:"32px",letterSpacing:"-0.32px"},"h4-medium":{lineHeight:"32px",letterSpacing:"-0.32px"},"h5-regular-mono":{lineHeight:"26px",letterSpacing:"-1.56px"},"h5-regular":{lineHeight:"26px",letterSpacing:"-0.26px"},"h5-medium":{lineHeight:"26px",letterSpacing:"-0.26px"},"h6-regular-mono":{lineHeight:"20px",letterSpacing:"-1.2px"},"h6-regular":{lineHeight:"20px",letterSpacing:"-0.6px"},"h6-medium":{lineHeight:"20px",letterSpacing:"-0.6px"},"lg-regular-mono":{lineHeight:"16px",letterSpacing:"-0.96px"},"lg-regular":{lineHeight:"18px",letterSpacing:"-0.16px"},"lg-medium":{lineHeight:"18px",letterSpacing:"-0.16px"},"md-regular-mono":{lineHeight:"14px",letterSpacing:"-0.84px"},"md-regular":{lineHeight:"16px",letterSpacing:"-0.14px"},"md-medium":{lineHeight:"16px",letterSpacing:"-0.14px"},"sm-regular-mono":{lineHeight:"12px",letterSpacing:"-0.72px"},"sm-regular":{lineHeight:"14px",letterSpacing:"-0.12px"},"sm-medium":{lineHeight:"14px",letterSpacing:"-0.12px"}},Ae={"ease-out-power-2":"cubic-bezier(0.23, 0.09, 0.08, 1.13)","ease-out-power-1":"cubic-bezier(0.12, 0.04, 0.2, 1.06)","ease-in-power-2":"cubic-bezier(0.92, -0.13, 0.77, 0.91)","ease-in-power-1":"cubic-bezier(0.88, -0.06, 0.8, 0.96)","ease-inout-power-2":"cubic-bezier(0.77, 0.09, 0.23, 1.13)","ease-inout-power-1":"cubic-bezier(0.88, 0.04, 0.12, 1.06)"},Ee={xl:"400ms",lg:"200ms",md:"125ms",sm:"75ms"},re={colors:ye,fontFamily:ke,fontWeight:Se,textSize:Le,typography:Pe,tokens:{core:q.core,theme:q.dark},borderRadius:Ce,spacing:_e,durations:Ee,easings:Ae},le="--apkt",P={createCSSVariables(e){const t={},r={};function n(i,o,l=""){for(const[h,d]of Object.entries(i)){const f=l?`${l}-${h}`:h;d&&typeof d=="object"&&Object.keys(d).length?(o[h]={},n(d,o[h],f)):typeof d=="string"&&(o[h]=`${le}-${f}`)}}function a(i,o){for(const[l,h]of Object.entries(i))h&&typeof h=="object"?(o[l]={},a(h,o[l])):typeof h=="string"&&(o[l]=`var(${h})`)}return n(e,t),a(t,r),{cssVariables:t,cssVariablesVarPrefix:r}},assignCSSVariables(e,t){const r={};function n(a,i,o){for(const[l,h]of Object.entries(a)){const d=o?`${o}-${l}`:l,f=i[l];h&&typeof h=="object"?n(h,f,d):typeof f=="string"&&(r[`${le}-${d}`]=f)}}return n(e,t),r},createRootStyles(e,t){const r={...re,tokens:{...re.tokens,theme:e==="light"?q.light:q.dark}},{cssVariables:n}=P.createCSSVariables(r),a=P.assignCSSVariables(n,r),i=P.generateW3MVariables(t),o=P.generateW3MOverrides(t),l=P.generateScaledVariables(t),h=P.generateBaseVariables(a),d={...a,...h,...i,...o,...l},f=P.applyColorMixToVariables(t,d),U={...d,...f};return`:root {${Object.entries(U).map(([ue,fe])=>`${ue}:${fe.replace("/[:;{}</>]/g","")};`).join("")}}`},generateW3MVariables(e){if(!e)return{};const t={};return t["--w3m-font-family"]=e["--w3m-font-family"]||"KHTeka",t["--w3m-accent"]=e["--w3m-accent"]||"#0988F0",t["--w3m-color-mix"]=e["--w3m-color-mix"]||"#000",t["--w3m-color-mix-strength"]=`${e["--w3m-color-mix-strength"]||0}%`,t["--w3m-font-size-master"]=e["--w3m-font-size-master"]||"10px",t["--w3m-border-radius-master"]=e["--w3m-border-radius-master"]||"4px",t},generateW3MOverrides(e){if(!e)return{};const t={};if(e["--w3m-accent"]){const r=e["--w3m-accent"];t["--apkt-tokens-core-iconAccentPrimary"]=r,t["--apkt-tokens-core-borderAccentPrimary"]=r,t["--apkt-tokens-core-textAccentPrimary"]=r,t["--apkt-tokens-core-backgroundAccentPrimary"]=r}return e["--w3m-font-family"]&&(t["--apkt-fontFamily-regular"]=e["--w3m-font-family"]),e["--w3m-z-index"]&&(t["--apkt-tokens-core-zIndex"]=`${e["--w3m-z-index"]}`),t},generateScaledVariables(e){if(!e)return{};const t={};if(e["--w3m-font-size-master"]){const r=parseFloat(e["--w3m-font-size-master"].replace("px",""));t["--apkt-textSize-h1"]=`${Number(r)*5}px`,t["--apkt-textSize-h2"]=`${Number(r)*4.4}px`,t["--apkt-textSize-h3"]=`${Number(r)*3.8}px`,t["--apkt-textSize-h4"]=`${Number(r)*3.2}px`,t["--apkt-textSize-h5"]=`${Number(r)*2.6}px`,t["--apkt-textSize-h6"]=`${Number(r)*2}px`,t["--apkt-textSize-large"]=`${Number(r)*1.6}px`,t["--apkt-textSize-medium"]=`${Number(r)*1.4}px`,t["--apkt-textSize-small"]=`${Number(r)*1.2}px`}if(e["--w3m-border-radius-master"]){const r=parseFloat(e["--w3m-border-radius-master"].replace("px",""));t["--apkt-borderRadius-1"]=`${Number(r)}px`,t["--apkt-borderRadius-2"]=`${Number(r)*2}px`,t["--apkt-borderRadius-3"]=`${Number(r)*3}px`,t["--apkt-borderRadius-4"]=`${Number(r)*4}px`,t["--apkt-borderRadius-5"]=`${Number(r)*5}px`,t["--apkt-borderRadius-6"]=`${Number(r)*6}px`,t["--apkt-borderRadius-8"]=`${Number(r)*8}px`,t["--apkt-borderRadius-16"]=`${Number(r)*16}px`,t["--apkt-borderRadius-20"]=`${Number(r)*20}px`,t["--apkt-borderRadius-32"]=`${Number(r)*32}px`,t["--apkt-borderRadius-64"]=`${Number(r)*64}px`,t["--apkt-borderRadius-128"]=`${Number(r)*128}px`}return t},generateColorMixCSS(e,t){if(!(e!=null&&e["--w3m-color-mix"])||!e["--w3m-color-mix-strength"])return"";const r=e["--w3m-color-mix"],n=e["--w3m-color-mix-strength"];if(!n||n===0)return"";const a=Object.keys(t||{}).filter(o=>{const l=o.includes("-tokens-core-background")||o.includes("-tokens-core-text")||o.includes("-tokens-core-border")||o.includes("-tokens-core-foreground")||o.includes("-tokens-core-icon")||o.includes("-tokens-theme-background")||o.includes("-tokens-theme-text")||o.includes("-tokens-theme-border")||o.includes("-tokens-theme-foreground")||o.includes("-tokens-theme-icon"),h=o.includes("-borderRadius-")||o.includes("-spacing-")||o.includes("-textSize-")||o.includes("-fontFamily-")||o.includes("-fontWeight-")||o.includes("-typography-")||o.includes("-duration-")||o.includes("-ease-")||o.includes("-path-")||o.includes("-width-")||o.includes("-height-")||o.includes("-visual-size-")||o.includes("-modal-width")||o.includes("-cover");return l&&!h});return a.length===0?"":` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${a.map(o=>{const l=(t==null?void 0:t[o])||"";return l.includes("color-mix")||l.startsWith("#")||l.startsWith("rgb")?`${o}: color-mix(in srgb, ${r} ${n}%, ${l});`:`${o}: color-mix(in srgb, ${r} ${n}%, var(${o}-base, ${l}));`}).join("")}
      }
    }`},generateBaseVariables(e){const t={},r=e["--apkt-tokens-theme-backgroundPrimary"];r&&(t["--apkt-tokens-theme-backgroundPrimary-base"]=r);const n=e["--apkt-tokens-core-backgroundAccentPrimary"];return n&&(t["--apkt-tokens-core-backgroundAccentPrimary-base"]=n),t},applyColorMixToVariables(e,t){const r={};if(t!=null&&t["--apkt-tokens-theme-backgroundPrimary"]&&(r["--apkt-tokens-theme-backgroundPrimary"]="var(--apkt-tokens-theme-backgroundPrimary-base)"),t!=null&&t["--apkt-tokens-core-backgroundAccentPrimary"]&&(r["--apkt-tokens-core-backgroundAccentPrimary"]="var(--apkt-tokens-core-backgroundAccentPrimary-base)"),!(e!=null&&e["--w3m-color-mix"])||!e["--w3m-color-mix-strength"])return r;const n=e["--w3m-color-mix"],a=e["--w3m-color-mix-strength"];if(!a||a===0)return r;const i=Object.keys(t||{}).filter(o=>{const l=o.includes("-tokens-core-background")||o.includes("-tokens-core-text")||o.includes("-tokens-core-border")||o.includes("-tokens-core-foreground")||o.includes("-tokens-core-icon")||o.includes("-tokens-theme-background")||o.includes("-tokens-theme-text")||o.includes("-tokens-theme-border")||o.includes("-tokens-theme-foreground")||o.includes("-tokens-theme-icon")||o.includes("-tokens-theme-overlay"),h=o.includes("-borderRadius-")||o.includes("-spacing-")||o.includes("-textSize-")||o.includes("-fontFamily-")||o.includes("-fontWeight-")||o.includes("-typography-")||o.includes("-duration-")||o.includes("-ease-")||o.includes("-path-")||o.includes("-width-")||o.includes("-height-")||o.includes("-visual-size-")||o.includes("-modal-width")||o.includes("-cover");return l&&!h});return i.length===0||i.forEach(o=>{const l=(t==null?void 0:t[o])||"";o.endsWith("-base")||(o==="--apkt-tokens-theme-backgroundPrimary"||o==="--apkt-tokens-core-backgroundAccentPrimary"?r[o]=`color-mix(in srgb, ${n} ${a}%, var(${o}-base))`:l.includes("color-mix")||l.startsWith("#")||l.startsWith("rgb")?r[o]=`color-mix(in srgb, ${n} ${a}%, ${l})`:r[o]=`color-mix(in srgb, ${n} ${a}%, var(${o}-base, ${l}))`)}),r}},{cssVariablesVarPrefix:u}=P.createCSSVariables(re);function E(e,...t){return _(e,...t.map(r=>typeof r=="function"?k(r(u)):k(r)))}let M,Q,F,D,oe;const L={"KHTeka-500-woff2":"https://fonts.reown.com/KHTeka-Medium.woff2","KHTeka-400-woff2":"https://fonts.reown.com/KHTeka-Regular.woff2","KHTeka-300-woff2":"https://fonts.reown.com/KHTeka-Light.woff2","KHTekaMono-400-woff2":"https://fonts.reown.com/KHTekaMono-Regular.woff2","KHTeka-500-woff":"https://fonts.reown.com/KHTeka-Light.woff","KHTeka-400-woff":"https://fonts.reown.com/KHTeka-Regular.woff","KHTeka-300-woff":"https://fonts.reown.com/KHTeka-Light.woff","KHTekaMono-400-woff":"https://fonts.reown.com/KHTekaMono-Regular.woff"};function ie(e,t="dark"){M&&document.head.removeChild(M),M=document.createElement("style"),M.textContent=P.createRootStyles(t,e),document.head.appendChild(M)}function Rt(e,t="dark"){if(oe=e,Q=document.createElement("style"),F=document.createElement("style"),D=document.createElement("style"),Q.textContent=ee(e).core.cssText,F.textContent=ee(e).dark.cssText,D.textContent=ee(e).light.cssText,document.head.appendChild(Q),document.head.appendChild(F),document.head.appendChild(D),ie(e,t),se(t),!(e!=null&&e["--w3m-font-family"]))for(const[r,n]of Object.entries(L)){const a=document.createElement("link");a.rel="preload",a.href=n,a.as="font",a.type=r.includes("woff2")?"font/woff2":"font/woff",a.crossOrigin="anonymous",document.head.appendChild(a)}se(t)}function se(e="dark"){F&&D&&M&&(e==="light"?(ie(oe,e),F.removeAttribute("media"),D.media="enabled"):(ie(oe,e),D.removeAttribute("media"),F.media="enabled"))}function ee(e){const t=!!(e!=null&&e["--w3m-font-family"]);return{core:_`
      ${t?_``:_`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${k(L["KHTeka-400-woff2"])}) format('woff2'),
                url(${k(L["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${k(L["KHTeka-300-woff2"])}) format('woff2'),
                url(${k(L["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${k(L["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${k(L["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${k(L["KHTeka-400-woff2"])}) format('woff2'),
                url(${k(L["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

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
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,dark:_`
      :root {
      }
    `,light:_`
      :root {
      }
    `}}const y=_`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`,X=_`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,G=".",T={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--apkt-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--apkt-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},formatCurrency(e=0,t={}){const r=Number(e);return isNaN(r)?"$0.00":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2,...t}).format(r)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:r,truncate:n}){return e.length<=t+r?e:n==="end"?`${e.substring(0,t)}...`:n==="start"?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`},generateAvatarColors(e){const r=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),n=this.hexToRgb(r),a=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),o=100-3*Number(a==null?void 0:a.replace("px","")),l=`${o}% ${o}% at 65% 40%`,h=[];for(let d=0;d<5;d+=1){const f=this.tintColor(n,.15*d);h.push(`rgb(${f[0]}, ${f[1]}, ${f[2]})`)}return`
    --local-color-1: ${h[0]};
    --local-color-2: ${h[1]};
    --local-color-3: ${h[2]};
    --local-color-4: ${h[3]};
    --local-color-5: ${h[4]};
    --local-radial-circle: ${l}
   `},hexToRgb(e){const t=parseInt(e,16),r=t>>16&255,n=t>>8&255,a=t&255;return[r,n,a]},tintColor(e,t){const[r,n,a]=e,i=Math.round(r+(255-r)*t),o=Math.round(n+(255-n)*t),l=Math.round(a+(255-a)*t);return[i,o,l]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){var t;return e||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?(t=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&t.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,r){return e.toString().length>=t?Number(e).toFixed(r):e},cssDurationToNumber(e){return e.endsWith("s")?Number(e.replace("s",""))*1e3:e.endsWith("ms")?Number(e.replace("ms","")):0},maskInput({value:e,decimals:t,integers:r}){if(e=e.replace(",","."),e===G)return`0${G}`;const[n="",a]=e.split(G).map(f=>f.replace(/[^0-9]/gu,"")),i=r?n.substring(0,r):n,o=i.length===2?String(Number(i)):i,l=typeof t=="number"?a==null?void 0:a.substring(0,t):a,h=typeof t!="number"||t>0;return(typeof l=="string"&&h?[o,l].join(G):o)??""},capitalize(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}};function Te(e,t){const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(a){customElements.get(e)||customElements.define(e,a)}}}function He(e,t){return customElements.get(e)||customElements.define(e,t),t}function C(e){return function(r){return typeof r=="function"?He(e,r):Te(e,r)}}const ze=_`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var v=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let m=class extends ${render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&T.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&T.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&T.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&T.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&T.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&T.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&T.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&T.getSpacingStyles(this.margin,3)};
      width: ${this.width};
    `,p`<slot></slot>`}};m.styles=[y,ze];v([s()],m.prototype,"flexDirection",void 0);v([s()],m.prototype,"flexWrap",void 0);v([s()],m.prototype,"flexBasis",void 0);v([s()],m.prototype,"flexGrow",void 0);v([s()],m.prototype,"flexShrink",void 0);v([s()],m.prototype,"alignItems",void 0);v([s()],m.prototype,"justifyContent",void 0);v([s()],m.prototype,"columnGap",void 0);v([s()],m.prototype,"rowGap",void 0);v([s()],m.prototype,"gap",void 0);v([s()],m.prototype,"padding",void 0);v([s()],m.prototype,"margin",void 0);v([s()],m.prototype,"width",void 0);m=v([C("wui-flex")],m);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=e=>e??ve;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=Symbol.for(""),Re=e=>{if((e==null?void 0:e.r)===de)return e==null?void 0:e._$litStatic$},Ie=e=>({_$litStatic$:e,r:de}),ce=new Map,Oe=e=>(t,...r)=>{const n=r.length;let a,i;const o=[],l=[];let h,d=0,f=!1;for(;d<n;){for(h=t[d];d<n&&(i=r[d],(a=Re(i))!==void 0);)h+=a+t[++d],f=!0;d!==n&&l.push(i),o.push(h),d++}if(d===n&&o.push(t[n]),f){const U=o.join("$$lit$$");(t=ce.get(U))===void 0&&(o.raw=o,ce.set(U,t=o)),r=l}return e(t,...r)},he=Oe(p),Me=g`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_87_33)">
    <path d="M23.9367 2.29447e-07H6.05917C5.26333 -0.000218805 4.47526 0.156384 3.73997 0.46086C3.00469 0.765337 2.33661 1.21172 1.77391 1.7745C1.21121 2.33727 0.764917 3.00542 0.460542 3.74074C0.156167 4.47607 -0.000327963 5.26417 5.16031e-07 6.06V23.9433C4.48257e-07 24.7389 0.156744 25.5267 0.461276 26.2617C0.765808 26.9967 1.21216 27.6645 1.77484 28.2269C2.33752 28.7894 3.0055 29.2355 3.74061 29.5397C4.47573 29.8439 5.26358 30.0003 6.05917 30H23.9417C25.5486 29.9996 27.0895 29.3609 28.2257 28.2245C29.3618 27.0881 30 25.5469 30 23.94V6.06C29.9993 4.45241 29.3602 2.91091 28.2232 1.77449C27.0861 0.638064 25.5443 -0.000220881 23.9367 2.29447e-07Z" fill="url(#paint0_linear_87_33)"/>
    <path d="M14.8708 6.89259L15.4783 5.84259C15.5679 5.68703 15.6873 5.55064 15.8296 5.44122C15.9719 5.3318 16.1344 5.25148 16.3078 5.20486C16.4812 5.15824 16.662 5.14622 16.8401 5.1695C17.0181 5.19277 17.1898 5.25088 17.3453 5.34051C17.5009 5.43013 17.6373 5.54952 17.7467 5.69186C17.8561 5.83419 17.9364 5.99669 17.9831 6.17006C18.0297 6.34344 18.0417 6.5243 18.0184 6.70232C17.9952 6.88034 17.9371 7.05203 17.8474 7.20759L11.9949 17.3401H16.2283C17.5999 17.3401 18.3691 18.9526 17.7724 20.0701H5.36159C5.18215 20.0707 5.00436 20.0359 4.83845 19.9675C4.67254 19.8992 4.5218 19.7986 4.39492 19.6718C4.26803 19.5449 4.16751 19.3941 4.09915 19.2282C4.03079 19.0623 3.99593 18.8845 3.99659 18.7051C3.99659 17.9476 4.60492 17.3401 5.36159 17.3401H8.84159L13.2958 9.61926L11.9041 7.20426C11.738 6.89096 11.7 6.52543 11.7982 6.18469C11.8963 5.84395 12.1229 5.5546 12.4301 5.37763C12.7374 5.20065 13.1014 5.14987 13.4454 5.23599C13.7893 5.3221 14.0864 5.53838 14.2741 5.83926L14.8708 6.89259ZM9.60659 21.4759L8.29409 23.7526C8.20446 23.9082 8.08506 24.0446 7.94271 24.1541C7.80035 24.2636 7.63783 24.344 7.46441 24.3906C7.291 24.4373 7.11009 24.4493 6.93202 24.4261C6.75395 24.4028 6.58221 24.3447 6.42659 24.2551C6.27097 24.1655 6.13454 24.0461 6.02506 23.9037C5.91559 23.7613 5.83523 23.5988 5.78857 23.4254C5.74191 23.252 5.72986 23.0711 5.75311 22.893C5.77637 22.715 5.83446 22.5432 5.92409 22.3876L6.89909 20.7001C8.00159 20.3584 8.89742 20.6209 9.60659 21.4759ZM20.9066 17.3476H24.4583C25.2158 17.3476 25.8233 17.9551 25.8233 18.7126C25.8233 19.4701 25.2149 20.0776 24.4583 20.0776H22.4858L23.8166 22.3876C24.1916 23.0443 23.9708 23.8726 23.3149 24.2551C23.0006 24.4359 22.6274 24.4845 22.2772 24.3903C21.927 24.2961 21.6286 24.0667 21.4474 23.7526C19.2058 19.8643 17.5216 16.9534 16.4041 15.0151C15.2608 13.0426 16.0783 11.0626 16.8841 10.3909C17.7799 11.9293 19.1191 14.2501 20.9074 17.3476H20.9066Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_87_33" x1="15" y1="2.29447e-07" x2="15" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB"/>
      <stop offset="1" stop-color="#2072F3"/>
    </linearGradient>
    <clipPath id="clip0_87_33">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Fe=g`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,De=g`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,Be=g`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M14.9978 7.80003H27.4668C26.2032 5.61107 24.3857 3.79333 22.1968 2.52955C20.008 1.26577 17.525 0.600485 14.9975 0.600586C12.47 0.600687 9.98712 1.26617 7.79838 2.53012C5.60964 3.79408 3.79221 5.61197 2.52881 7.80103L8.76281 18.599L8.76881 18.598C8.13412 17.5044 7.79906 16.2628 7.79743 14.9983C7.79579 13.7339 8.12764 12.4914 8.7595 11.3961C9.39136 10.3008 10.3009 9.39159 11.3963 8.76005C12.4918 8.12851 13.7344 7.79702 14.9988 7.79903L14.9978 7.80003Z" fill="url(#paint0_linear_87_32)"/>
<path d="M21.237 18.5981L15.003 29.3961C17.5305 29.3961 20.0134 28.7308 22.2022 27.467C24.391 26.2032 26.2086 24.3854 27.4721 22.1965C28.7356 20.0075 29.4006 17.5245 29.4003 14.997C29.3999 12.4695 28.7342 9.9867 27.47 7.7981H15.002L15 7.8041C16.2642 7.80168 17.5067 8.13257 18.6022 8.76342C19.6977 9.39428 20.6076 10.3028 21.2401 11.3974C21.8726 12.492 22.2053 13.734 22.2048 14.9982C22.2042 16.2623 21.8704 17.504 21.237 18.5981Z" fill="url(#paint1_linear_87_32)"/>
<path d="M8.76502 18.601L2.53102 7.80298C1.26664 9.99172 0.600848 12.4748 0.600586 15.0025C0.600324 17.5302 1.2656 20.0134 2.52953 22.2024C3.79345 24.3914 5.61145 26.209 7.80071 27.4725C9.98998 28.736 12.4733 29.4008 15.001 29.4L21.236 18.602L21.232 18.598C20.6022 19.6941 19.6944 20.6049 18.6003 21.2383C17.5062 21.8717 16.2644 22.2055 15.0002 22.2059C13.7359 22.2063 12.4939 21.8733 11.3994 21.2406C10.3049 20.6079 9.39657 19.6977 8.76602 18.602L8.76502 18.601Z" fill="url(#paint2_linear_87_32)"/>
<path d="M14.9998 22.2C16.9094 22.2 18.7407 21.4415 20.091 20.0912C21.4412 18.741 22.1998 16.9096 22.1998 15C22.1998 13.0905 21.4412 11.2591 20.091 9.90888C18.7407 8.55862 16.9094 7.80005 14.9998 7.80005C13.0902 7.80005 11.2589 8.55862 9.90864 9.90888C8.55837 11.2591 7.7998 13.0905 7.7998 15C7.7998 16.9096 8.55837 18.741 9.90864 20.0912C11.2589 21.4415 13.0902 22.2 14.9998 22.2Z" fill="white"/>
<path d="M14.9998 20.7C16.5115 20.7 17.9614 20.0995 19.0303 19.0306C20.0993 17.9616 20.6998 16.5118 20.6998 15C20.6998 13.4883 20.0993 12.0385 19.0303 10.9695C17.9614 9.90058 16.5115 9.30005 14.9998 9.30005C13.4881 9.30005 12.0383 9.90058 10.9693 10.9695C9.90034 12.0385 9.2998 13.4883 9.2998 15C9.2998 16.5118 9.90034 17.9616 10.9693 19.0306C12.0383 20.0995 13.4881 20.7 14.9998 20.7Z" fill="#1A73E8"/>
<defs>
  <linearGradient id="paint0_linear_87_32" x1="3.29381" y1="2.99503" x2="38.0998" y2="2.99503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D93025"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="paint1_linear_87_32" x1="17.953" y1="29.1431" x2="34.194" y2="-0.298904" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FCC934"/>
    <stop offset="1" stop-color="#FBBC04"/>
  </linearGradient>
  <linearGradient id="paint2_linear_87_32" x1="22.873" y1="28.2" x2="6.63202" y2="-1.24102" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1E8E3E"/>
    <stop offset="1" stop-color="#34A853"/>
  </linearGradient>
</defs>
</svg>`,Ve=g` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Ze=g`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,We=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,je=g`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Ke=g`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ne=g`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,Ue=g`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ge=g`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,qe=g` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,Ye=g`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 5.83334C11.6666 2.61168 14.2783 0 17.5 0H25.8334C29.055 0 31.6666 2.61168 31.6666 5.83334V14.1666C31.6666 17.3883 29.055 20 25.8334 20H17.5C14.2783 20 11.6666 17.3883 11.6666 14.1666V5.83334Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M19.5068 13.7499L22.4309 5.83331H23.2895L20.3654 13.7499H19.5068Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M0 5.41666C0 2.42513 2.42513 0 5.41666 0C8.40821 0 10.8334 2.42513 10.8334 5.41666V14.5833C10.8334 17.5748 8.40821 20 5.41666 20C2.42513 20 0 17.5748 0 14.5833V5.41666Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M4.89581 12.4997V11.458H5.93747V12.4997H4.89581Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M32.5 10C32.5 4.47715 36.6896 0 41.8578 0H65.6422C70.8104 0 75 4.47715 75 10C75 15.5229 70.8104 20 65.6422 20H41.8578C36.6896 20 32.5 15.5229 32.5 10Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M61.7108 12.4475V7.82751H62.5266V8.52418C62.8199 8.01084 63.4157 7.70834 64.0757 7.70834C65.0749 7.70834 65.7715 8.34084 65.7715 9.56918V12.4475H64.9649V9.61503C64.9649 8.80831 64.5066 8.38668 63.8374 8.38668C63.1132 8.38668 62.5266 8.9642 62.5266 9.78001V12.4475H61.7108Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M56.5671 12.4475L55.7147 7.82748H56.4846L57.0896 11.6409L57.8871 9.12916H58.6479L59.4363 11.6134L60.0505 7.82748H60.8204L59.9679 12.4475H59.0513L58.2721 10.0458L57.4838 12.4475H56.5671Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M52.9636 12.5666C51.5611 12.5666 50.7361 11.5217 50.7361 10.1375C50.7361 8.76254 51.5611 7.70834 52.9636 7.70834C54.3661 7.70834 55.1911 8.76254 55.1911 10.1375C55.1911 11.5217 54.3661 12.5666 52.9636 12.5666ZM52.9636 11.8883C53.9719 11.8883 54.357 11.0266 54.357 10.1283C54.357 9.23914 53.9719 8.38668 52.9636 8.38668C51.9552 8.38668 51.5702 9.23914 51.5702 10.1283C51.5702 11.0266 51.9552 11.8883 52.9636 11.8883Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M47.8507 12.5666C46.494 12.5666 45.6415 11.5308 45.6415 10.1375C45.6415 8.75337 46.494 7.70834 47.8507 7.70834C48.9965 7.70834 50.0048 8.35917 49.8948 10.3483H46.4756C46.5398 11.2009 46.934 11.8975 47.8507 11.8975C48.4648 11.8975 48.8681 11.5217 49.0057 11.0908H49.8123C49.684 11.8609 48.9598 12.5666 47.8507 12.5666ZM46.494 9.73416H49.1065C49.0423 8.80831 48.6114 8.37751 47.8507 8.37751C47.0165 8.37751 46.604 8.98254 46.494 9.73416Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M41.7284 12.4475V7.82748H42.5625V8.60665C42.8559 8.09332 43.3601 7.82748 43.8825 7.82748H44.9917V8.60665H43.8184C43.0851 8.60665 42.5625 9.08331 42.5625 10.0092V12.4475H41.7284Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>

`,Xe=g`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,Je=g`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,Qe=g`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,et=g`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,tt=g`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,rt=g`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,ot=g`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,it=g`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,nt=g`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,pe=g`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,at=_`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    height: inherit;
    width: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var j=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const lt={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmark:"ph-check",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",reown:"",solana:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:"",wallet:""},st={"ph-arrow-circle-down":()=>c(()=>import("./PhArrowCircleDown-b4d1b9f0.js"),["assets/PhArrowCircleDown-b4d1b9f0.js","assets/property-70d704fc.js"]),"ph-arrow-clockwise":()=>c(()=>import("./PhArrowClockwise-35e72491.js"),["assets/PhArrowClockwise-35e72491.js","assets/property-70d704fc.js"]),"ph-arrow-down":()=>c(()=>import("./PhArrowDown-57c22b7e.js"),["assets/PhArrowDown-57c22b7e.js","assets/property-70d704fc.js"]),"ph-arrow-left":()=>c(()=>import("./PhArrowLeft-f48f6a32.js"),["assets/PhArrowLeft-f48f6a32.js","assets/property-70d704fc.js"]),"ph-arrow-right":()=>c(()=>import("./PhArrowRight-86fee956.js"),["assets/PhArrowRight-86fee956.js","assets/property-70d704fc.js"]),"ph-arrow-square-out":()=>c(()=>import("./PhArrowSquareOut-7b8bc76d.js"),["assets/PhArrowSquareOut-7b8bc76d.js","assets/property-70d704fc.js"]),"ph-arrows-down-up":()=>c(()=>import("./PhArrowsDownUp-336a1435.js"),["assets/PhArrowsDownUp-336a1435.js","assets/property-70d704fc.js"]),"ph-arrows-left-right":()=>c(()=>import("./PhArrowsLeftRight-fbdccc02.js"),["assets/PhArrowsLeftRight-fbdccc02.js","assets/property-70d704fc.js"]),"ph-arrow-up":()=>c(()=>import("./PhArrowUp-cb14a0b1.js"),["assets/PhArrowUp-cb14a0b1.js","assets/property-70d704fc.js"]),"ph-arrow-up-right":()=>c(()=>import("./PhArrowUpRight-72a93a0e.js"),["assets/PhArrowUpRight-72a93a0e.js","assets/property-70d704fc.js"]),"ph-arrows-clockwise":()=>c(()=>import("./PhArrowsClockwise-ecc02e05.js"),["assets/PhArrowsClockwise-ecc02e05.js","assets/property-70d704fc.js"]),"ph-bank":()=>c(()=>import("./PhBank-31d2eba3.js"),["assets/PhBank-31d2eba3.js","assets/property-70d704fc.js"]),"ph-browser":()=>c(()=>import("./PhBrowser-90d21d12.js"),["assets/PhBrowser-90d21d12.js","assets/property-70d704fc.js"]),"ph-caret-down":()=>c(()=>import("./PhCaretDown-3aabbdc5.js"),["assets/PhCaretDown-3aabbdc5.js","assets/property-70d704fc.js"]),"ph-caret-left":()=>c(()=>import("./PhCaretLeft-282326ec.js"),["assets/PhCaretLeft-282326ec.js","assets/property-70d704fc.js"]),"ph-caret-right":()=>c(()=>import("./PhCaretRight-7b09ae84.js"),["assets/PhCaretRight-7b09ae84.js","assets/property-70d704fc.js"]),"ph-caret-up":()=>c(()=>import("./PhCaretUp-e4584d94.js"),["assets/PhCaretUp-e4584d94.js","assets/property-70d704fc.js"]),"ph-check":()=>c(()=>import("./PhCheck-5730aae2.js"),["assets/PhCheck-5730aae2.js","assets/property-70d704fc.js"]),"ph-circle-half":()=>c(()=>import("./PhCircleHalf-7d16bc06.js"),["assets/PhCircleHalf-7d16bc06.js","assets/property-70d704fc.js"]),"ph-clock":()=>c(()=>import("./PhClock-8b060e99.js"),["assets/PhClock-8b060e99.js","assets/property-70d704fc.js"]),"ph-compass":()=>c(()=>import("./PhCompass-45d3bde6.js"),["assets/PhCompass-45d3bde6.js","assets/property-70d704fc.js"]),"ph-copy":()=>c(()=>import("./PhCopy-f77992ef.js"),["assets/PhCopy-f77992ef.js","assets/property-70d704fc.js"]),"ph-credit-card":()=>c(()=>import("./PhCreditCard-c353277e.js"),["assets/PhCreditCard-c353277e.js","assets/property-70d704fc.js"]),"ph-currency-dollar":()=>c(()=>import("./PhCurrencyDollar-510272c7.js"),["assets/PhCurrencyDollar-510272c7.js","assets/property-70d704fc.js"]),"ph-desktop":()=>c(()=>import("./PhDesktop-49e8128e.js"),["assets/PhDesktop-49e8128e.js","assets/property-70d704fc.js"]),"ph-device-mobile":()=>c(()=>import("./PhDeviceMobile-cfdf19ef.js"),["assets/PhDeviceMobile-cfdf19ef.js","assets/property-70d704fc.js"]),"ph-dots-three":()=>c(()=>import("./PhDotsThree-69a484e4.js"),["assets/PhDotsThree-69a484e4.js","assets/property-70d704fc.js"]),"ph-vault":()=>c(()=>import("./PhVault-ed94ef20.js"),["assets/PhVault-ed94ef20.js","assets/property-70d704fc.js"]),"ph-envelope":()=>c(()=>import("./PhEnvelope-fc3dd2a0.js"),["assets/PhEnvelope-fc3dd2a0.js","assets/property-70d704fc.js"]),"ph-funnel-simple":()=>c(()=>import("./PhFunnelSimple-5abe9858.js"),["assets/PhFunnelSimple-5abe9858.js","assets/property-70d704fc.js"]),"ph-globe":()=>c(()=>import("./PhGlobe-a1b4ca91.js"),["assets/PhGlobe-a1b4ca91.js","assets/property-70d704fc.js"]),"ph-identification-card":()=>c(()=>import("./PhIdentificationCard-80541484.js"),["assets/PhIdentificationCard-80541484.js","assets/property-70d704fc.js"]),"ph-image":()=>c(()=>import("./PhImage-6bbac6b7.js"),["assets/PhImage-6bbac6b7.js","assets/property-70d704fc.js"]),"ph-info":()=>c(()=>import("./PhInfo-3481abef.js"),["assets/PhInfo-3481abef.js","assets/property-70d704fc.js"]),"ph-lightbulb":()=>c(()=>import("./PhLightbulb-26b52ed2.js"),["assets/PhLightbulb-26b52ed2.js","assets/property-70d704fc.js"]),"ph-magnifying-glass":()=>c(()=>import("./PhMagnifyingGlass-4dfb76cc.js"),["assets/PhMagnifyingGlass-4dfb76cc.js","assets/property-70d704fc.js"]),"ph-paper-plane-right":()=>c(()=>import("./PhPaperPlaneRight-e6cf54ef.js"),["assets/PhPaperPlaneRight-e6cf54ef.js","assets/property-70d704fc.js"]),"ph-plus":()=>c(()=>import("./PhPlus-f5753116.js"),["assets/PhPlus-f5753116.js","assets/property-70d704fc.js"]),"ph-power":()=>c(()=>import("./PhPower-8bf5c9c7.js"),["assets/PhPower-8bf5c9c7.js","assets/property-70d704fc.js"]),"ph-puzzle-piece":()=>c(()=>import("./PhPuzzlePiece-93f1c92b.js"),["assets/PhPuzzlePiece-93f1c92b.js","assets/property-70d704fc.js"]),"ph-qr-code":()=>c(()=>import("./PhQrCode-03aa9f8a.js"),["assets/PhQrCode-03aa9f8a.js","assets/property-70d704fc.js"]),"ph-question":()=>c(()=>import("./PhQuestion-6c2bd1ad.js"),["assets/PhQuestion-6c2bd1ad.js","assets/property-70d704fc.js"]),"ph-question-circle":()=>c(()=>import("./PhQuestionMark-820f14af.js"),["assets/PhQuestionMark-820f14af.js","assets/property-70d704fc.js"]),"ph-seal-check":()=>c(()=>import("./PhSealCheck-137e0b1b.js"),["assets/PhSealCheck-137e0b1b.js","assets/property-70d704fc.js"]),"ph-sign-out":()=>c(()=>import("./PhSignOut-ed65c268.js"),["assets/PhSignOut-ed65c268.js","assets/property-70d704fc.js"]),"ph-spinner":()=>c(()=>import("./PhSpinner-19f53f69.js"),["assets/PhSpinner-19f53f69.js","assets/property-70d704fc.js"]),"ph-trash":()=>c(()=>import("./PhTrash-acb3ad59.js"),["assets/PhTrash-acb3ad59.js","assets/property-70d704fc.js"]),"ph-user":()=>c(()=>import("./PhUser-92aa32ba.js"),["assets/PhUser-92aa32ba.js","assets/property-70d704fc.js"]),"ph-warning":()=>c(()=>import("./PhWarning-b2396b99.js"),["assets/PhWarning-b2396b99.js","assets/property-70d704fc.js"]),"ph-warning-circle":()=>c(()=>import("./PhWarningCircle-0f363973.js"),["assets/PhWarningCircle-0f363973.js","assets/property-70d704fc.js"]),"ph-x":()=>c(()=>import("./PhX-522d79dd.js"),["assets/PhX-522d79dd.js","assets/property-70d704fc.js"])},ct={appStore:Me,apple:Fe,bitcoin:De,chromeStore:Be,cursor:Ve,discord:Ze,ethereum:We,etherscan:je,facebook:Ke,farcaster:Ne,github:Ue,google:Ge,playStore:qe,reown:Ye,solana:Xe,telegram:Je,twitch:Qe,twitter:pe,twitterIcon:et,walletConnect:rt,walletConnectInvert:ot,walletConnectBrown:nt,walletConnectLightBrown:it,x:pe,wallet:tt},ht={"accent-primary":u.tokens.core.iconAccentPrimary,"accent-certified":u.tokens.core.iconAccentCertified,default:u.tokens.theme.iconDefault,success:u.tokens.core.iconSuccess,error:u.tokens.core.iconError,warning:u.tokens.core.iconWarning,inverse:u.tokens.theme.iconInverse};let z=class extends ${constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){const t={xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"};this.style.cssText=`
      --local-width: ${this.size==="inherit"?"inherit":`var(--apkt-spacing-${t[this.size]})`};
      --local-color: ${this.color==="inherit"?"inherit":ht[this.color]}
    `;const r=lt[this.name];if(r&&r!==""){const n=st[r];n&&n();const a=Ie(r);return he`<${a} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${a}>`}return ct[this.name]||he``}};z.styles=[y,at];j([s()],z.prototype,"size",void 0);j([s()],z.prototype,"name",void 0);j([s()],z.prototype,"weight",void 0);j([s()],z.prototype,"color",void 0);z=j([C("wui-icon")],z);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dt=e=>(...t)=>({_$litDirective$:e,values:t});class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=dt(class extends gt{constructor(e){var t;if(super(e),e.type!==pt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,a;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const o=!!t[i];o===this.st.has(i)||(a=this.nt)!=null&&a.has(i)||(o?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return be}}),ft=E`
  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* -- Headings --------------------------------------------------- */
  .wui-font-h1-regular-mono {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-md-regular {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`;var V=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const mt={primary:u.tokens.theme.textPrimary,secondary:u.tokens.theme.textSecondary,tertiary:u.tokens.theme.textTertiary,invert:u.tokens.theme.textInvert,error:u.tokens.core.textError,warning:u.tokens.core.textWarning,"accent-primary":u.tokens.core.textAccentPrimary};let H=class extends ${constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0,this.display="inline-flex"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      display: ${this.display};
      --local-align: ${this.align};
      --local-color: ${this.color==="inherit"?"inherit":mt[this.color??"primary"]};
      `,p`<slot class=${ut(t)}></slot>`}};H.styles=[y,ft];V([s()],H.prototype,"variant",void 0);V([s()],H.prototype,"color",void 0);V([s()],H.prototype,"align",void 0);V([s()],H.prototype,"lineClamp",void 0);V([s()],H.prototype,"display",void 0);H=V([C("wui-text")],H);const wt=E`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var K=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let R=class extends ${constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,p`
      <wui-icon size=${Z(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};R.styles=[y,X,wt];K([s()],R.prototype,"icon",void 0);K([s()],R.prototype,"size",void 0);K([s()],R.prototype,"padding",void 0);K([s()],R.prototype,"color",void 0);R=K([C("wui-icon-box")],R);const vt=E`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var S=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let x=class extends ${constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const t={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?p`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?p`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:p`<img src=${Z(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};x.styles=[y,vt];S([s()],x.prototype,"src",void 0);S([s()],x.prototype,"logo",void 0);S([s()],x.prototype,"icon",void 0);S([s()],x.prototype,"iconColor",void 0);S([s()],x.prototype,"alt",void 0);S([s()],x.prototype,"size",void 0);S([s({type:Boolean})],x.prototype,"boxed",void 0);S([s({type:Boolean})],x.prototype,"rounded",void 0);S([s({type:Boolean})],x.prototype,"fullSize",void 0);x=S([C("wui-image")],x);const bt=E`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var O=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let A=class extends ${constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return this.size==="lg"?t="4":this.size==="md"?t="2":this.size==="sm"&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),p`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?p`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?p`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:p`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};A.styles=[y,bt];O([s()],A.prototype,"size",void 0);O([s()],A.prototype,"name",void 0);O([s()],A.prototype,"imageSrc",void 0);O([s()],A.prototype,"walletIcon",void 0);O([s({type:Boolean})],A.prototype,"installed",void 0);O([s()],A.prototype,"badgeSize",void 0);A=O([C("wui-wallet-image")],A);const xt=E`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var ge=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const te=4;let Y=class extends ${constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<te;return p`${this.walletImages.slice(0,te).map(({src:r,walletName:n})=>p`
          <wui-wallet-image
            size="sm"
            imageSrc=${r}
            name=${Z(n)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(te-this.walletImages.length)].map(()=>p` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};Y.styles=[y,xt];ge([s({type:Array})],Y.prototype,"walletImages",void 0);Y=ge([C("wui-all-wallets-image")],Y);const $t=E`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var J=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let B=class extends ${constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"md-medium":"sm-medium",r=this.size==="md"?"md":"sm";return p`
      ${this.icon?p`<wui-icon size=${r} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${t}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};B.styles=[y,$t];J([s()],B.prototype,"variant",void 0);J([s()],B.prototype,"size",void 0);J([s()],B.prototype,"icon",void 0);B=J([C("wui-tag")],B);const yt=E`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }
`;var b=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let w=class extends ${constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,p`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${Z(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?p` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?p` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?p`<wui-wallet-image
        size=${Z(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?p`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?p`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?p`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};w.styles=[y,X,yt];b([s({type:Array})],w.prototype,"walletImages",void 0);b([s()],w.prototype,"imageSrc",void 0);b([s()],w.prototype,"name",void 0);b([s()],w.prototype,"size",void 0);b([s()],w.prototype,"tagLabel",void 0);b([s()],w.prototype,"tagVariant",void 0);b([s()],w.prototype,"walletIcon",void 0);b([s()],w.prototype,"tabIdx",void 0);b([s({type:Boolean})],w.prototype,"disabled",void 0);b([s({type:Boolean})],w.prototype,"showAllWallets",void 0);b([s({type:Boolean})],w.prototype,"loading",void 0);b([s({type:String})],w.prototype,"loadingSpinnerColor",void 0);w=b([C("wui-list-wallet")],w);const Ct=_`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var ae=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let W=class extends ${constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const t={primary:u.tokens.theme.textPrimary,secondary:u.tokens.theme.textSecondary,tertiary:u.tokens.theme.textTertiary,invert:u.tokens.theme.textInvert,error:u.tokens.core.textError,warning:u.tokens.core.textWarning,"accent-primary":u.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${this.color==="inherit"?"inherit":t[this.color]};
      `,this.dataset.size=this.size,p`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};W.styles=[y,Ct];ae([s()],W.prototype,"color",void 0);ae([s()],W.prototype,"size",void 0);W=ae([C("wui-loading-spinner")],W);const _t=E`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var N=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const kt={sm:"sm-medium",md:"md-medium"},St={accent:"accent-primary",secondary:"secondary"};let I=class extends ${constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return p`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${St[this.variant]}
          variant=${kt[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?p`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};I.styles=[y,X,_t];N([s()],I.prototype,"size",void 0);N([s({type:Boolean})],I.prototype,"disabled",void 0);N([s()],I.prototype,"variant",void 0);N([s()],I.prototype,"icon",void 0);I=N([C("wui-link")],I);const Lt="https://reown.com",Pt=E`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var At=globalThis&&globalThis.__decorate||function(e,t,r,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let ne=class extends ${render(){return p`
      <a
        data-testid="ux-branding-reown"
        href=${Lt}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};ne.styles=[y,X,Pt];ne=At([C("wui-ux-by-reown")],ne);export{T as U,E as a,y as b,C as c,dt as d,X as e,Rt as f,gt as i,s as n,Z as o,zt as r,pt as t,u as v};
