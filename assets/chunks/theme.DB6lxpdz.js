const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPAlgoliaSearchBox.BCcl3tG7.js","assets/chunks/framework.7O7GUAKA.js","assets/chunks/index.BnaqaqCJ.js"])))=>i.map(i=>d[i]);
import{r as he,c as F,a as W,d as D,o as m,b as k,e as w,n as ee,f as ce,t as X,g as O,w as S,h as A,T as Xe,_ as H,u as Ct,i as Tt,j as Pt,k as Je,l as b,m as y,p as $e,q as We,s as ve,v as De,x as me,y as Be,z as Qe,A as Et,B as Mt,C as ae,F as J,D as oe,E as vt,G as Oe,H as M,I as ue,J as ht,K as Ne,L as pe,M as He,N as It,O as ze,P as Vt,Q as Ve,R as gt,S as je,U as At,V as Dt,W as bt,X as yt,Y as kt,Z as Bt,$ as Ot,a0 as Fe,a1 as Nt,a2 as Ht,a3 as jt,a4 as Ft,a5 as qt,a6 as Rt}from"./framework.7O7GUAKA.js";const we=(e="")=>e.trim().split(" ").filter(t=>!!t.trim()),xl=e=>{const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})},Gt=(e,t=0)=>setTimeout(e,t),Ge=()=>Date.now(),Ut=e=>{let t;return I()&&(window.getComputedStyle&&(t=window.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style)),t},Wt=(e,t)=>{if(!e)return null;const s=e.match(/translate3d\(([^,]+),([^,]+),([^,]+)\)/);if(!s)return null;const o={x:1,y:2,z:3}[t.toLowerCase()];return o?parseFloat(s[o].trim()):null},Zt=(e,t,s,i)=>{if(Math.abs(t-e)>100&&i<50||i>=s)return Math.round(t);const o=t-e,n=Math.max(0,Math.min(1,i/s)),r=n*(2-n),l=Math.round(e+o*r);return o>0?Math.min(l,t):Math.max(l,t)},zl=(e,t="x",s)=>{let i,o,n;if(I()){const r=Ut(e);window.WebKitCSSMatrix?(o=(r==null?void 0:r.transform)||(r==null?void 0:r.webkitTransform),o.split(",").length>6&&(o=o.split(", ").map(l=>l.replace(",",".")).join(", ")),n=new window.WebKitCSSMatrix(o==="none"?"":o)):(n=(r==null?void 0:r.MozTransform)||(r==null?void 0:r.OTransform)||(r==null?void 0:r.MsTransform)||(r==null?void 0:r.msTransform)||(r==null?void 0:r.transform)||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),t==="x"&&(window.WebKitCSSMatrix?o=n.m41:i.length===16?o=parseFloat(i[12]):o=parseFloat(i[4])),t==="y"&&(window.WebKitCSSMatrix?o=n.m42:i.length===16?o=parseFloat(i[13]):o=parseFloat(i[5]))}else o=Zt(s.touchEventsData.currentTranslate,s.translate,s.params.speed,Date.now()-s.touchEventsData.lastClickTime);return o||0},Ce=e=>typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object",Yt=e=>I()?typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11):!1,dt=(...e)=>{const t=Object(e[0]),s=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const o=e[i];if(o!=null&&!Yt(o)){const n=Object.keys(Object(o)).filter(r=>s.indexOf(r)<0);for(let r=0,l=n.length;r<l;r+=1){const a=n[r],c=Object.getOwnPropertyDescriptor(o,a);c!==void 0&&c.enumerable&&(Ce(t[a])&&Ce(o[a])?o[a].__swiper__?t[a]=o[a]:dt(t[a],o[a]):!Ce(t[a])&&Ce(o[a])?(t[a]={},o[a].__swiper__?t[a]=o[a]:dt(t[a],o[a])):t[a]=o[a])}}}return t},Kt=(e,t,s)=>{e.style.setProperty(t,s)},Ll=({swiper:e,targetPosition:t,side:s})=>{if(I()){const i=-e.translate;let o=null,n;const r=e.params.speed;e.wrapperEl.style.scrollSnapType="none",window.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",a=(p,u)=>l==="next"&&p>=u||l==="prev"&&p<=u,c=()=>{n=new Date().getTime(),o===null&&(o=n);const p=Math.max(Math.min((n-o)/r,1),0),u=.5-Math.cos(p*Math.PI)/2;let v=i+u*(t-i);if(a(v,t)&&(v=t),e.wrapperEl.scrollTo({[s]:v}),a(v,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:v})}),window.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=window.requestAnimationFrame(c)};c()}},Se=e=>I()&&(e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform"))||e,et=(e,t="")=>{if(I()){const s=[...e.children];return e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),t?s.filter(i=>i.matches(t)):s}return e&&e.children||[]},Xt=(e,t)=>e&&e.children.filter(s=>s.swiperItemIndex.value==t)||[],Cl=(e,t)=>{if(I()){const s=t.contains(e);return!s&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):s}return!0},Tl=e=>{try{console.warn(e);return}catch{}},ge=(e,t=[])=>{if(I()){const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:we(t)),s}},Jt=e=>{if(I()){const t=e.getBoundingClientRect(),s=document.body,i=e.clientTop||s.clientTop||0,o=e.clientLeft||s.clientLeft||0,n=e===window?window.scrollY:e.scrollTop,r=e===window?window.scrollX:e.scrollLeft;return{top:t.top+n-i,left:t.left+r-o}}},Pl=(e,t,s)=>{if(I()){const i=[];for(;e.previousElementSibling;){const o=e.previousElementSibling;t?o.matches(t)&&i.push(o):i.push(o),e=o}return i}else return s?s.children.filter((i,o)=>o<s.children.indexOf(e)).reverse():e.childrenList.filter((i,o)=>o<e.childrenList.indexOf(e)).reverse()},El=(e,t,s)=>{if(I()){const i=[];for(;e.nextElementSibling;){const o=e.nextElementSibling;t?o.matches(t)&&i.push(o):i.push(o),e=o}return i}else return s?s.children.filter((i,o)=>o>s.children.indexOf(e)):e.childrenList.filter((i,o)=>o>e.childrenList.indexOf(e))},Ml=(e,t)=>I()?window.getComputedStyle(e,null).getPropertyValue(t):e.style.getPropertyValue(t),ut=(e,t)=>{if(I()){let s=e,i;if(s){for(i=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(i+=1);return i}}else if(e)return t?t.children.indexOf(e):e.childrenList.indexOf(e)},Qt=(e,t)=>{if(I()){const s=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&s.push(i):s.push(i),i=i.parentElement;return s}},Pe=(e,t)=>{if(I()){let s=function(i){i.target===e&&(t.call(e,i),e.removeEventListener("transitionend",s))};t&&e.addEventListener("transitionend",s)}else{let s=function(o){o.target.id.toString().replace(i,"")===`${e.uid}`&&(t.call(e,o),e.removeEventListener("transitionend",s.bind(this),"fireCallBack"))};const i=new RegExp(`[${["swiperWrapper","swiperItem"].join("")}]`,"g");t&&e.addEventListener("transitionend",s.bind(void 0),"fireCallBack")}},es=(e,t,s)=>I()?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(window.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(window.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.style[t],ie=e=>(Array.isArray(e)?e:[e]).filter(t=>!!t),tt=e=>t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t,I=()=>!0,Il=e=>I()?{windowWidth:e.clientWidth,windowHeight:e.clientHeight}:uni.getWindowInfo(),Vl=(e,t)=>new Promise((s,i)=>{I()||uni.createSelectorQuery().in(e.proxy).select(t).boundingClientRect(n=>{n&&n.width?s(n):console.warn(`[ZebraSwiper] ${t}:获取swiper节点信息失败`)}).exec()}),Al=(e,t)=>({touchstart:["touchstart","touchStart","onTouchstart"],touchmove:["touchmove","touchMove","onTouchmove"],touchend:["touchend","touchEnd","onTouchend"],touchcancel:["touchcancel","touchCancel","onTouchcancel"]})[e].includes(t),mt=e=>{setTimeout(()=>{e()},16)},Le=e=>{const{effect:t,swiper:s,on:i,setTranslate:o,setTransition:n,overwriteParams:r,perspective:l,recreateShadows:a,getEffectParams:c}=e;i("beforeInit",()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const u=r?r():{};Object.assign(s.params,u),Object.assign(s.originalParams,u)}),i("setTranslate",()=>{s.params.effect===t&&o()}),i("setTransition",(u,v)=>{s.params.effect===t&&n(v)}),i("transitionEnd",()=>{if(s.params.effect===t&&a){if(!c||!c().slideShadows)return;s.slides.forEach(u=>{I()?u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>v.remove()):u.clearShadow()}),a()}});let p;i("virtualUpdate",()=>{s.params.effect===t&&(s.slides.length||(p=!0),requestAnimationFrame(()=>{p&&s.slides&&s.slides.length&&(o(),p=!1)}))})};function ts({swiper:e,extendParams:t,on:s,emit:i,params:o}){var Q,Y;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,r,l=((Q=o==null?void 0:o.autoplay)==null?void 0:Q.delay)||3e3,a=((Y=o==null?void 0:o.autoplay)==null?void 0:Y.delay)||3e3,c,p=new Date().getTime(),u,v,f,h,g,_,d;function $(N){var te;if(!(!e||e.destroyed||!e.wrapperEl)){if(I()){if(N.target!==e.wrapperEl)return;e.wrapperEl.removeEventListener("transitionend",$)}else{if(N.target.id!==`swiperWrapper${e.adapterEl.uid}`)return;e.wrapperEl.removeEventListener("transitionend",$,"onTransitionEnd")}d||(te=N.detail)!=null&&te.bySwiperTouchMove||B()}}const z=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(a=c,u=!1);const N=e.autoplay.paused?c:p+a-new Date().getTime();e.autoplay.timeLeft=N,i("autoplayTimeLeft",N,N/l),I()?r=requestAnimationFrame(()=>{z()}):r=mt(()=>{z()})},T=()=>{var te;let N;if(e.virtual&&typeof e.params.virtual=="object"&&((te=e.params.virtual)!=null&&te.enabled)?N=e.slides.filter(ne=>ne.classList.contains("swiper-slide-active"))[0]:N=e.slides[e.activeIndex],!!N)return parseInt(N.getAttribute("data-swiper-autoplay")||"",10)},E=N=>{var ke,_e,U;if(e.destroyed||!e.autoplay.running)return;I()&&cancelAnimationFrame(Number(r)),z();let te=typeof N>"u"?(ke=e.params.autoplay)==null?void 0:ke.delay:N;l=(_e=e.params.autoplay)==null?void 0:_e.delay,a=(U=e.params.autoplay)==null?void 0:U.delay;const ne=T();!Number.isNaN(ne)&&ne&&ne>0&&typeof N>"u"&&(te=ne,l=ne,a=ne),c=te||0;const{speed:de}=e.params,ye=()=>{var se,re,ct;!e||e.destroyed||((se=e.params.autoplay)!=null&&se.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(de,!0,!0),i("autoplay")):(re=e.params.autoplay)!=null&&re.stopOnLastSlide||(e.slideTo(e.slides.length-1,de,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(de,!0,!0),i("autoplay")):(ct=e.params.autoplay)!=null&&ct.stopOnLastSlide||(e.slideTo(0,de,!0,!0),i("autoplay")),e.params.cssMode&&(p=new Date().getTime(),I()?requestAnimationFrame(()=>{E()}):mt(()=>{E()})))};return te&&te>0?(clearTimeout(n),n=setTimeout(()=>{ye()},te)):requestAnimationFrame(()=>{ye()}),te},q=()=>(p=new Date().getTime(),e.autoplay.running=!0,E(),i("autoplayStart"),!0),R=()=>(e.autoplay.running=!1,clearTimeout(n),I()&&cancelAnimationFrame(Number(r)),i("autoplayStop"),!0),Z=(N,te)=>{var ye,ke;if(e.destroyed||!e.autoplay.running)return;clearTimeout(n),N||(_=!0);const ne=()=>{var _e;i("autoplayPause"),(_e=e.params.autoplay)!=null&&_e.waitForTransition?I()?e.wrapperEl.addEventListener("transitionend",$):e.wrapperEl.addEventListener("transitionend",$.bind(this),"onTransitionEnd"):B()};if(e.autoplay.paused=!0,te){g&&(c=(ye=e.params.autoplay)==null?void 0:ye.delay),g=!1,ne();return}c=(c||((ke=e.params.autoplay)==null?void 0:ke.delay))-(new Date().getTime()-p),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),ne())},B=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),_?(_=!1,E(c)):E(),e.autoplay.paused=!1,i("autoplayResume"))},j=()=>{if(e.destroyed||!e.autoplay.running)return;const{document:N}=window;N.visibilityState==="hidden"&&(_=!0,Z(!0)),N.visibilityState==="visible"&&B()},L=N=>{N.pointerType==="mouse"&&(_=!0,d=!0,!(e.animating||e.autoplay.paused)&&Z(!0))},P=N=>{N.pointerType==="mouse"&&(d=!1,e.autoplay.paused&&B())},x=()=>{var N;(N=e.params.autoplay)!=null&&N.pauseOnMouseEnter&&I()&&(e.el.addEventListener("pointerenter",L),e.el.addEventListener("pointerleave",P))},C=()=>{e.el&&typeof e.el!="string"&&I()&&(e.el.removeEventListener("pointerenter",L),e.el.removeEventListener("pointerleave",P))},V=()=>{I()&&document.addEventListener("visibilitychange",j)},G=()=>{I()&&document.removeEventListener("visibilitychange",j)};s("init",()=>{var N;(N=e.params.autoplay)!=null&&N.enabled&&(x(),V(),q())}),s("destroy",()=>{C(),G(),e.autoplay.running&&R()}),s("_freeModeStaticRelease",()=>{(f||_)&&B()}),s("_freeModeNoMomentumRelease",()=>{var N;(N=e.params.autoplay)!=null&&N.disableOnInteraction?R():Z(!0,!0)}),s("beforeTransitionStart",(N,te,ne)=>{var de;e.destroyed||!e.autoplay.running||(ne||!((de=e.params.autoplay)!=null&&de.disableOnInteraction)?Z(!0,!0):R())}),s("sliderFirstMove",()=>{var N;if(!(e.destroyed||!e.autoplay.running)){if((N=e.params.autoplay)!=null&&N.disableOnInteraction){R();return}v=!0,f=!1,_=!1,h=setTimeout(()=>{_=!0,f=!0,Z(!0)},200)}}),s("touchEnd",()=>{var N;if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(h),clearTimeout(n),(N=e.params.autoplay)!=null&&N.disableOnInteraction){f=!1,v=!1;return}f&&e.params.cssMode&&B(),f=!1,v=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(g=!0)}),Object.assign(e.autoplay,{start:q,stop:R,pause:Z,resume:B})}const xe=(e="")=>`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`,st=(e,t,s,i)=>(I()&&e.params.createElements&&Object.keys(i).forEach(o=>{if(!s[o]&&s.auto===!0){let n=et(e.el,`.${i[o]}`)[0];n||(n=ge("div",i[o]),n.className=i[o],e.el.append(n)),s[o]=n,t[o]=n}}),s),pt=e=>typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__,ss=(e,t)=>{const s=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>s.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:pt(t[i])&&pt(e[i])&&Object.keys(t[i]).length>0?t[i].__swiper__?e[i]=t[i]:ss(e[i],t[i]):e[i]=t[i]})},Dl=(e={})=>e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u",Bl=(e={})=>e.pagination&&typeof e.pagination.el>"u",Ol=(e={})=>e.scrollbar&&typeof e.scrollbar.el>"u",Nl=(e="")=>{const t=e.split(" ").map(i=>i.trim()).filter(i=>!!i),s=[];return t.forEach(i=>{s.indexOf(i)<0&&s.push(i)}),s.join(" ")},Hl=(e="")=>e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper",jl=(e,t,s)=>{if(!e||typeof e!="object")return e;const i={};for(const o in e)i[o]=_t(e[o],t,s);return i},_t=(e,t,s)=>{if(typeof e=="number")return t==="px"?`${e}px`:e;if(typeof e!="string")return e;if(!isNaN(Number(e)))return t==="px"?`${e}px`:Number(e);const i=/^-?\d+\.?\d*rpx$/,o=/^-?\d+\.?\d*px$/,n=/^-?\d+\.?\d*%$/,r=parseFloat(e);if(i.test(e)){const l=uni.upx2px(r);return t==="px"?`${l}px`:l}if(o.test(e))return t==="px"?e:r;if(n.test(e)){if(!s)return e;const l=r/100*s;return t==="px"?`${l}px`:l}return e},Fl=(e,t)=>{const s=t.map(o=>e[o]),i=e.filter((o,n)=>!t.includes(n));return[...s.reverse(),...i]},ql=(e,t)=>(t.map(i=>e[i]).forEach(i=>{const o=e.indexOf(i);o>-1&&(e.splice(o,1),e.unshift(i))}),e),Rl=(e,t)=>{const s=t.map(o=>e[o]);return[...e.filter((o,n)=>!t.includes(n)),...s]},Gl=(e,t)=>{const s=t.map(i=>e[i]);return s.forEach(i=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}),e.push(...s),e},Ul=(e,t,s=[])=>!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((i,o)=>{const n=t[o];if(s.length>0)return s.every(a=>i[a]===n[a]);const r=Object.keys(i),l=Object.keys(n);return r.length!==l.length?!1:r.every(a=>i[a]===n[a])});class Te{constructor(t=""){this._classes=new Set(t.split(" ").filter(Boolean))}get value(){return Array.from(this._classes).join(" ")}set value(t){this._classes=new Set(t.split(" ").filter(Boolean))}contains(t){return this._classes.has(t)}containsMultiple(t){return t.split(".").filter(Boolean).every(i=>this.contains(i))}add(...t){t.forEach(s=>this._classes.add(s))}remove(...t){t.forEach(s=>this._classes.delete(s))}toggle(t){this.contains(t)?this.remove(t):this.add(t)}}class os{constructor(){this._styles={},this._listeners=new Set,this._initializeProperties()}_initializeProperties(){["width","height","top","left","right","bottom","margin","padding","position","marginLeft","marginRight","marginTop","marginBottom","display","visibility","opacity","zIndex","overflow","color","backgroundColor","background","border","borderRadius","boxShadow","fontSize","fontFamily","fontWeight","textAlign","transform","transition","animation","transitionDelay","transitionDuration","transformOrigin"].forEach(s=>{Object.defineProperty(this,s,{get:()=>this.getPropertyValue(s),set:i=>this.setProperty(s,i)})})}setProperty(t,s){const i=this._styles[t];return this._styles[t]=this._processValue(t,s),this._notifyListeners({type:"change",property:t,value:s,oldValue:i}),this}getPropertyValue(t){return String(this._styles[t]||"")}removeProperty(t){const s=this._styles[t];return delete this._styles[t],this._notifyListeners({type:"remove",property:t,oldValue:s}),s}_processValue(t,s){if(["width","height","top","left","right","bottom","margin","padding","fontSize"].includes(t)){if(typeof s=="number")return`${s}px`;if(typeof s=="string"&&/^-?\d*\.?\d+(px|em|rem|%|vh|vw)$/.test(s))return s;if(Number(s)===0||s==="0")return"0"}return s}addListener(t){return this._listeners.add(t),this}removeListener(t){return this._listeners.delete(t),this}_notifyListeners(t){this._listeners.forEach(s=>s(t))}setStyles(t){return Object.entries(t).forEach(([s,i])=>{this.setProperty(s,i)}),this}getAllStyles(){return{...this._styles}}toCssText(){return Object.entries(this._styles).map(([t,s])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${s}`).join("; ")}fromCssText(t){return t.split(";").filter(s=>s.trim()).forEach(s=>{const[i,o]=s.split(":").map(r=>r.trim()),n=i.replace(/-([a-z])/g,r=>r[1].toUpperCase());this.setProperty(n,o)}),this}reset(){return this._styles={},this._notifyListeners({type:"reset",oldStyles:this._styles}),this}}function is(e=""){const t=he(new Te(e)),s=F(()=>t.value),i=t.value;return{classList:t,classNames:s,className:i}}function as(e={}){const t=new os,s=W(t.getAllStyles());return t.setStyles(e),t.addListener(()=>{s.value=t.getAllStyles()}),{style:t,styles:s}}function Wl({swiper:e,extendParams:t,on:s,emit:i}){const o="swiper-pagination";t({pagination:{el:null,bulletElement:"span",bulletSize:8,clickable:!1,hideOnClick:!1,renderBullet:void 0,renderProgressbar:void 0,renderFraction:void 0,renderCustom:void 0,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let n=0,r=0;function l(){var d;return!((d=e.params.pagination)!=null&&d.el)||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function a(d,$,z){const T=e.params.pagination;if(d){if(I())d=d[`${$==="prev"?"previous":"next"}ElementSibling`];else{if(!z)return;const E=z.findIndex(q=>q===d);d=z[$==="prev"?E-1:E+1]}if(d){d.classList.add(`${T.bulletActiveClass}-${$}`);const E=d[`${$==="prev"?"previous":"next"}ElementSibling`];E&&E.classList.add(`${T.bulletActiveClass}-${$}-${$}`)}}}function c(d,$,z){if(d=d%z,$=$%z,$===d+1)return"next";if($===d-1)return"previous"}function p(d,$){let z=0;if(I()){const T=d.target.closest(xe(e.params.pagination.bulletClass));if(!T)return;d.preventDefault(),z=ut(T)*e.params.slidesPerGroup}else z=$;if(e.params.loop){if(e.realIndex===z)return;const T=c(e.realIndex,z,e.slides.length);T==="next"?e.slideNext():T==="previous"?e.slidePrev():e.slideToLoop(z)}else e.slideTo(z)}function u(){var Z;if(l())return;const d=e.params.pagination,{rtl:$}=e;if(l())return;const z=ie(e.pagination.el);let T,E;const q=e.virtual&&typeof e.params.virtual=="object"&&((Z=e.params.virtual)!=null&&Z.enabled)?e.virtual.slides.length:e.slides.length,R=e.params.loop?Math.ceil(q/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,T=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(T=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,T=e.activeIndex||0),d.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const{bullets:B}=e.pagination;let j,L,P;if(d.dynamicBullets&&(I()?n=es(B[0],e.isHorizontal()?"width":"height"):n=_t(d.bulletSize,"number")+8,z.forEach(x=>{x.style[e.isHorizontal()?"width":"height"]=`${n*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&E!==void 0&&(r+=T-(E||0),r>d.dynamicMainBullets-1?r=d.dynamicMainBullets-1:r<0&&(r=0)),j=Math.max(T-r,0),L=j+(Math.min(B.length,d.dynamicMainBullets)-1),P=(L+j)/2),B.forEach(x=>{const C=["","-next","-next-next","-prev","-prev-prev","-main"].map(V=>`${d.bulletActiveClass}${V}`).map(V=>typeof V=="string"&&V.includes(" ")?V.split(" "):V).flat();x.classList.remove(...C)}),z.length>1)B.forEach(x=>{const C=ut(x);C===T&&x.classList.add(...d.bulletActiveClass.split(" ")),d.dynamicBullets&&(C>=j&&C<=L&&x.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),C===j&&a(x,"prev"),C===L&&a(x,"next"))});else{const x=B[T];if(x&&x.classList.add(...d.bulletActiveClass.split(" ")),e.isElement&&B.forEach((C,V)=>{C.setAttribute("part",V===T?"bullet-active":"bullet")}),d.dynamicBullets){const C=B[j],V=B[L];for(let G=j;G<=L;G+=1)B[G]&&B[G].classList.add(...`${d.bulletActiveClass}-main`.split(" "));a(C,"prev",B),a(V,"next",B)}}if(d.dynamicBullets){const x=Math.min(B.length,d.dynamicMainBullets+4),C=(n*x-n)/2-P*n,V=$?"right":"left";B.forEach(G=>{G.style[e.isHorizontal()?V:"top"]=`${C}px`})}}z.forEach((B,j)=>{if(d.type==="fraction"&&(I()?(B.querySelectorAll(xe(d.currentClass)).forEach(L=>{L.textContent=d.formatFractionCurrent(T+1)}),B.querySelectorAll(xe(d.totalClass)).forEach(L=>{L.textContent=d.formatFractionTotal(R)})):(B.paginationData.fractions.current.content=d.formatFractionCurrent(T+1),B.paginationData.fractions.total.content=d.formatFractionTotal(R))),d.type==="progressbar"){let L;d.progressbarOpposite?L=e.isHorizontal()?"vertical":"horizontal":L=e.isHorizontal()?"horizontal":"vertical";const P=(T+1)/R;let x=1,C=1;L==="horizontal"?x=P:C=P,I()?B.querySelectorAll(xe(d.progressbarFillClass)).forEach(V=>{V.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${C})`,V.style.transitionDuration=`${e.params.speed}ms`}):B.paginationData.progressbar.style={transform:`translate3d(0,0,0) scaleX(${x}) scaleY(${C})`,transitionDuration:`${e.params.speed}ms`}}d.type==="custom"&&d.renderCustom?(B.innerHTML=d.renderCustom(e,T+1,R),j===0&&i("paginationRender",B)):(j===0&&i("paginationRender",B),i("paginationUpdate",B)),e.params.watchOverflow&&e.enabled&&B.classList[e.isLocked?"add":"remove"](d.lockClass)})}function v(){var Z,B;const d=e.params.pagination;if(l())return;const $=e.virtual&&typeof e.params.virtual=="object"&&((Z=e.params.virtual)!=null&&Z.enabled)?e.virtual.slides.length:e.grid&&((B=e.params.grid)!=null&&B.rows)&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let{el:z}=e.pagination;z=ie(z);let T="";const E=[],q={current:{classList:"",content:""},total:{classList:"",content:""}},R={classList:""};if(d.type==="bullets"){let j=e.params.loop?Math.ceil($/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&j>$&&(j=$);for(let L=0;L<j;L+=1)d.renderBullet?T+=d.renderBullet.call(e,L,d.bulletClass):(T+=`<${d.bulletElement} ${e.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`,I()||E.push({classList:he(new Te(d.bulletClass)),style:he({})}))}d.type==="fraction"&&(d.renderFraction?T=d.renderFraction.call(e,d.currentClass,d.totalClass):(T=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`,I()||(q.current.classList=he(new Te(d.currentClass)),q.total.classList=he(new Te(d.totalClass))))),d.type==="progressbar"&&(d.renderProgressbar?T=d.renderProgressbar.call(e,d.progressbarFillClass):(T=`<span class="${d.progressbarFillClass}"></span>`,I()||(R.classList=he(new Te(d.progressbarFillClass))))),e.pagination.bullets=[],z.forEach(j=>{d.type!=="custom"&&(j.innerHTML=T||""),d.type==="bullets"&&(I()?e.pagination.bullets.push(...j.querySelectorAll(xe(d.bulletClass))):(e.pagination.bullets.push(...E),j.paginationData.bullets.push(...E))),d.type==="fraction"&&!I()&&(j.paginationData.fractions=q),d.type==="progressbar"&&!I()&&(j.paginationData.progressbar=R)}),d.type!=="custom"&&i("paginationRender",z[0])}function f(){e.params.pagination=st(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const d=e.params.pagination;if(!d.el)return;let $=null;typeof d.el=="string"&&e.isElement&&I()&&($=e.el.querySelector(d.el)),!$&&typeof d.el=="string"&&I()&&($=Array.from(document.querySelectorAll(d.el))),$||($=d.el),!(!$||$.length===0)&&(e.params.uniqueNavElements&&typeof d.el=="string"&&Array.isArray($)&&$.length>1&&I()&&($=Array.from(e.el.querySelectorAll(d.el)),$.length>1&&($=$.filter(z=>Qt(z,".swiper")[0]===e.el)[0])),Array.isArray($)&&$.length===1&&($=$[0]),Object.assign(e.pagination,{el:$}),$=ie($),$.forEach(z=>{d.type==="bullets"&&d.clickable&&z.classList.add(...(d.clickableClass||"").split(" ")),z.classList.add(d.modifierClass+d.type),z.classList.add(e.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(z.classList.add(`${d.modifierClass}${d.type}-dynamic`),r=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&z.classList.add(d.progressbarOppositeClass),d.clickable&&(I()?z.addEventListener("click",p):z.addEventListener("click",p.bind(this),"onClick")),e.enabled||z.classList.add(d.lockClass)}))}function h(){const d=e.params.pagination;if(l())return;let{el:$}=e.pagination;$&&($=ie($),$.forEach(z=>{z.classList.remove(d.hiddenClass),z.classList.remove(d.modifierClass+d.type),z.classList.remove(e.isHorizontal()?d.horizontalClass:d.verticalClass),d.clickable&&(z.classList.remove(...(d.clickableClass||"").split(" ")),I()?z.removeEventListener("click",p):z.removeEventListener("click",p.bind(this),"onClick"))})),e.pagination.bullets&&e.pagination.bullets.forEach(z=>z.classList.remove(...(d.bulletActiveClass||"").split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const d=e.params.pagination;let{el:$}=e.pagination;$=ie($),$.forEach(z=>{z.classList.remove(d.horizontalClass,d.verticalClass),z.classList.add(e.isHorizontal()?d.horizontalClass:d.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?_():(f(),v(),u())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),s("snapIndexChange",()=>{u()}),s("snapGridLengthChange",()=>{v(),u()}),s("destroy",()=>{h()}),s("enable disable",()=>{let{el:d}=e.pagination;d&&(d=ie(d),d.forEach($=>$.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{u()}),s("click",(d,$)=>{var E,q;const z=$.target,T=ie(e.pagination.el);if(I()){if((E=e.params.pagination)!=null&&E.el&&e.params.pagination.hideOnClick&&T&&T.length>0&&!z.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&z===e.navigation.nextEl||e.navigation.prevEl&&z===e.navigation.prevEl))return;const R=T[0].classList.contains(e.params.pagination.hiddenClass);i(R===!0?"paginationShow":"paginationHide"),T.forEach(Z=>Z.classList.toggle(e.params.pagination.hiddenClass))}}else if((q=e.params.pagination)!=null&&q.el&&e.params.pagination.hideOnClick&&T&&T.length>0){if(e.navigation&&(e.navigation.nextEl&&z===e.navigation.nextEl||e.navigation.prevEl&&z===e.navigation.prevEl))return;const R=T[0].classList.contains(e.params.pagination.hiddenClass);i(R===!0?"paginationShow":"paginationHide"),T.forEach(Z=>Z.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:d}=e.pagination;d&&(d=ie(d),d.forEach($=>$.classList.remove(e.params.pagination.paginationDisabledClass))),f(),v(),u()},_=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:d}=e.pagination;d&&(d=ie(d),d.forEach($=>$.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:g,disable:_,render:v,update:u,init:f,destroy:h})}function Zl({swiper:e,extendParams:t,on:s,emit:i}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function o(f){let h=null;return f&&typeof f=="string"&&e.isElement&&(h=e.el.querySelector(f)||e.hostEl.querySelector(f),h)?h:(f&&(typeof f=="string"&&(h=Array.from(document.querySelectorAll(f))),e.params.uniqueNavElements&&typeof f=="string"&&Array.isArray(h)&&h.length>1&&e.el.querySelectorAll(f).length===1?h=e.el.querySelector(f):Array.isArray(h)&&h.length===1&&(h=h[0])),f&&!h?f:h)}function n(f,h){const g=e.params.navigation;f=ie(f),f.forEach(_=>{_&&(_.classList[h?"add":"remove"](...g.disabledClass.split(" ")),_.tagName==="BUTTON"&&(_.disabled=h),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](g.lockClass))})}function r(){const{nextEl:f,prevEl:h}=e.navigation;if(e.params.loop){n(h,!1),n(f,!1);return}n(h,e.isBeginning&&!e.params.rewind),n(f,e.isEnd&&!e.params.rewind)}function l(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function a(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function c(){const f=e.params.navigation;if(I()&&(e.params.navigation=st(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"})),!(f.nextEl||f.prevEl))return;let h=o(f.nextEl),g=o(f.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:g}),h=ie(h),g=ie(g);const _=(d,$)=>{d&&(I()?d.addEventListener("click",$==="next"?a:l):d.addEventListener("click",$==="next"?a.bind(this):l.bind(this),"onClick")),!e.enabled&&d&&d.classList.add(...f.lockClass.split(" "))};h.forEach(d=>_(d,"next")),g.forEach(d=>_(d,"prev"))}function p(){let{nextEl:f,prevEl:h}=e.navigation;f=ie(f),h=ie(h);const g=(_,d)=>{I()?_.removeEventListener("click",d==="next"?a:l):_.removeEventListener("click",d==="next"?a.bind(this):l.bind(this),"onClick"),_.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(_=>g(_,"next")),h.forEach(_=>g(_,"prev"))}s("init",()=>{e.params.navigation.enabled===!1?v():(c(),r())}),s("toEdge fromEdge lock unlock",()=>{r()}),s("destroy",()=>{p()}),s("enable disable",()=>{let{nextEl:f,prevEl:h}=e.navigation;if(f=ie(f),h=ie(h),e.enabled){r();return}[...f,...h].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),s("click",(f,h)=>{let{nextEl:g,prevEl:_}=e.navigation;g=ie(g),_=ie(_);const d=h.target;let $=_.includes(d)||g.includes(d);if(e.isElement&&!$){const z=h.path||h.composedPath&&h.composedPath();z&&($=!!z.find(T=>g.includes(T)||_.includes(T)))}if(e.params.navigation.hideOnClick&&!$){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===d||e.pagination.el.contains(d)))return;let z;g.length?z=g[0].classList.contains(e.params.navigation.hiddenClass):_.length&&(z=_[0].classList.contains(e.params.navigation.hiddenClass)),i(z===!0?"navigationShow":"navigationHide"),[...g,..._].filter(T=>!!T).forEach(T=>T.classList.toggle(e.params.navigation.hiddenClass))}});const u=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),r()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(e.navigation,{enable:u,disable:v,update:r,init:c,destroy:p})}function Yl({swiper:e,extendParams:t,on:s,emit:i}){let o=!1,n=null,r=null,l,a,c,p;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function u(){var N;if(!((N=e.params.scrollbar)!=null&&N.el)||!e.scrollbar.el)return;const{scrollbar:L,rtlTranslate:P}=e,{dragEl:x,el:C}=L,V=e.params.scrollbar,G=e.params.loop?e.progressLoop:e.progress;let Q=a,Y=(c-a)*G;P?(Y=-Y,Y>0?(Q=a-Y,Y=0):-Y+a>c&&(Q=c+Y)):Y<0?(Q=a+Y,Y=0):Y+a>c&&(Q=c-Y),e.isHorizontal()?(x.style.transform=`translate3d(${Y}px, 0, 0)`,x.style.width=`${Q}px`):(x.style.transform=`translate3d(0px, ${Y}px, 0)`,x.style.height=`${Q}px`),V.hide&&(clearTimeout(n),C.style.opacity="1",n=setTimeout(()=>{C.style.opacity="0",C.style.transitionDuration="400ms"},1e3))}function v(L){var P;!((P=e.params.scrollbar)!=null&&P.el)||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${L}ms`)}function f(){var C;if(!((C=e.params.scrollbar)!=null&&C.el)||!e.scrollbar.el)return;const{scrollbar:L}=e,{dragEl:P,el:x}=L;P.style.width="",P.style.height="",I()?c=e.isHorizontal()?x.offsetWidth:x.offsetHeight:c=e.isHorizontal()?e.width:e.height,p=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?a=c*p:a=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?P.style.width=`${a}px`:P.style.height=`${a}px`,p>=1?x.style.display="none":x.style.display="",e.params.scrollbar.hide&&(x.style.opacity="0"),e.params.watchOverflow&&e.enabled&&L.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function h(L){return I()?e.isHorizontal()?L.clientX:L.clientY:e.isHorizontal()?L.touches[0].clientX:L.touches[0].clientY}function g(L){const{scrollbar:P,rtlTranslate:x}=e,{el:C}=P;let V;if(I())V=(h(L)-Jt(C)[e.isHorizontal()?"left":"top"]-(l!==null?l:a/2))/(c-a);else{const Q=C.scrollbarRect.left||0;V=(h(L)-Q-(l!==null?l:a/2))/(c-a)}V=Math.max(Math.min(V,1),0),x&&(V=1-V);const G=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*V;e.updateProgress(G),e.setTranslate(G),e.updateActiveIndex(),e.updateSlidesClasses()}function _(L,P,x){return P>x&&([P,x]=[x,P]),L>=P&&L<=x}function d(L){const P=e.params.scrollbar,{scrollbar:x,wrapperEl:C}=e,{el:V,dragEl:G}=x;if(o=!0,I())l=L.target===G?h(L)-L.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,L.preventDefault(),L.stopPropagation();else{const Q=e.isHorizontal()?"x":"y",Y=Wt(V.dragElRef.style.transform,Q);_(h(L),Y,Y+a)?l=h(L)-Y:l=null}C.style.transitionDuration="100ms",G.style.transitionDuration="100ms",g(L),clearTimeout(r),V.style.transitionDuration="0ms",P.hide&&(V.style.opacity="1"),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),i("scrollbarDragStart",L)}function $(L){const{scrollbar:P,wrapperEl:x}=e,{el:C,dragEl:V}=P;o&&(L.preventDefault?L.preventDefault():L.returnValue=!1,g(L),x.style.transitionDuration="0ms",C.style.transitionDuration="0ms",V.style.transitionDuration="0ms",i("scrollbarDragMove",L))}function z(L){const P=e.params.scrollbar,{scrollbar:x,wrapperEl:C}=e,{el:V}=x;o&&(o=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",C.style.transitionDuration=""),P.hide&&(clearTimeout(r),r=setTimeout(()=>{V.style.opacity="0",V.style.transitionDuration="400ms"},1e3)),i("scrollbarDragEnd",L),P.snapOnRelease&&e.slideToClosest())}function T(L){const{scrollbar:P,params:x}=e,{el:C}=P;if(!C)return;const V=C,G=x.passiveListeners?{passive:!1,capture:!1}:!1,Q=x.passiveListeners?{passive:!0,capture:!1}:!1;if(!V)return;const Y=L==="on"?"addEventListener":"removeEventListener";I()?(V[Y]("pointerdown",d,G),document[Y]("pointermove",$,G),document[Y]("pointerup",z,Q)):(V[Y]("touchstart",d.bind(this),"touchstart"),V[Y]("touchmove",$.bind(this),"touchmove"),V[Y]("touchend",z.bind(this),"touchend"))}function E(){var L;!((L=e.params.scrollbar)!=null&&L.el)||!e.scrollbar.el||T("on")}function q(){var L;!((L=e.params.scrollbar)!=null&&L.el)||!e.scrollbar.el||T("off")}function R(){const{scrollbar:L,el:P}=e;e.params.scrollbar=st(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const x=e.params.scrollbar;if(!x.el)return;let C=null;if(typeof x.el=="string"&&e.isElement&&(C=e.el.querySelector(x.el)),!C&&typeof x.el=="string"){if(C=document.querySelectorAll(x.el)[0],!C)return}else C||(C=x.el);e.params.uniqueNavElements&&typeof x.el=="string"&&C.length>1&&P.querySelectorAll(x.el).length===1&&(C=P.querySelector(x.el)),C.length>0&&(C=C[0]),C==null||C.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass);let V;C&&(I()?(V=C.querySelector(xe(e.params.scrollbar.dragClass)),V||(V=ge("div",e.params.scrollbar.dragClass),C.append(V))):V=C.dragElRef),Object.assign(L,{el:C,dragEl:V}),x.draggable&&E(),C&&C.classList[e.enabled?"remove":"add"](...we(e.params.scrollbar.lockClass))}function Z(){const L=e.params.scrollbar,{el:P}=e.scrollbar;P&&P.classList.remove(...we(e.isHorizontal()?L.horizontalClass:L.verticalClass)),q()}s("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const L=e.params.scrollbar;let{el:P}=e.scrollbar;P=ie(P),P.forEach(x=>{x.classList.remove(L.horizontalClass,L.verticalClass),x.classList.add(e.isHorizontal()?L.horizontalClass:L.verticalClass)})}),s("init",()=>{e.params.scrollbar.enabled===!1?j():(R(),f(),u())}),s("update resize observerUpdate lock unlock changeDirection",()=>{f()}),s("setTranslate",()=>{u()}),s("setTransition",(L,P)=>{v(P)}),s("enable disable",()=>{const{el:L}=e.scrollbar;L&&L.classList[e.enabled?"remove":"add"](...we(e.params.scrollbar.lockClass))}),s("destroy",()=>{Z()});const B=()=>{e.el.classList.remove(...we(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...we(e.params.scrollbar.scrollbarDisabledClass)),R(),f(),u()},j=()=>{e.el.classList.add(...we(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...we(e.params.scrollbar.scrollbarDisabledClass)),Z()};Object.assign(e.scrollbar,{enable:B,disable:j,updateSize:f,setTranslate:u,init:R,destroy:Z})}function Kl({swiper:e,extendParams:t,on:s}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,o=!1;e.thumbs={swiper:null};function n(){const a=e.thumbs.swiper;if(!a||a.destroyed)return;const{clickedIndex:c,clickedSlide:p}=a;if(p&&p.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof c>"u"||c===null)return;let u;a.params.loop?u=parseInt(a.clickedSlide.getAttribute("data-swiper-slide-index")||"0",10):u=c,e.params.loop?e.slideToLoop(u):e.slideTo(u)}function r(){var p,u;const a=e.params.thumbs;if(i)return!1;i=!0;const c=e.constructor;if(a.swiper instanceof c)e.thumbs.swiper=a.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(Ce(a.swiper)){const v=Object.assign({},a.swiper);Object.assign(v,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new c(v),o=!0}return(p=e.thumbs.swiper)==null||p.el.classList.add(e.params.thumbs.thumbsContainerClass),(u=e.thumbs.swiper)==null||u.on("tap",n),!0}function l(a){const c=e.thumbs.swiper;if(!c||c.destroyed)return;const p=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():c.params.slidesPerView;let u=1;const v=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(u=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),c.slides.forEach(g=>g.classList.remove(v)),c.params.loop||c.params.virtual&&typeof c.params.virtual=="object"&&c.params.virtual.enabled)for(let g=0;g<u;g+=1)I()?et(c.slidesEl,`[data-swiper-slide-index="${e.realIndex+g}"]`).forEach(_=>{_.classList.add(v)}):Xt(c.slidesEl,e.realIndex+g,`[data-swiper-slide-index="${e.realIndex+g}"]`).forEach(_=>{_.classList.add(v)});else for(let g=0;g<u;g+=1)c.slides[e.realIndex+g]&&c.slides[e.realIndex+g].classList.add(v);const f=e.params.thumbs.autoScrollOffset,h=f&&!c.params.loop;if(e.realIndex!==c.realIndex||h){const g=c.activeIndex;let _,d;if(c.params.loop){const $=c.slides.filter(z=>z.getAttribute("data-swiper-slide-index")===String(e.realIndex))[0];_=c.slides.indexOf($),d=e.activeIndex>e.previousIndex?"next":"prev"}else _=e.realIndex,d=_>e.previousIndex?"next":"prev";h&&(_+=d==="next"?f:-1*f),c.visibleSlidesIndexes&&c.visibleSlidesIndexes.indexOf(_)<0&&(c.params.centeredSlides?_>g?_=_-Math.floor(p/2)+1:_=_+Math.floor(p/2)-1:_>g&&c.params.slidesPerGroup===1&&(_=_-p+1),c.slideTo(_,a?0:void 0))}}s("beforeInit",()=>{const{thumbs:a}=e.params;if(!(!a||!a.swiper))if(I()&&(typeof a.swiper=="string"||a.swiper instanceof HTMLElement)){const c=()=>{const u=typeof a.swiper=="string"?document.querySelector(a.swiper):a.swiper;if(u&&u.swiper)a.swiper=u.swiper,r(),l(!0);else if(u){const v=`${e.params.eventsPrefix}init`,f=h=>{a.swiper=h.detail[0],u.removeEventListener(v,f),r(),l(!0),a.swiper.update(),e.update()};u.addEventListener(v,f)}return u},p=()=>{if(e.destroyed)return;c()||requestAnimationFrame(p)};requestAnimationFrame(p)}else r(),l(!0)}),s("slideChange update resize observerUpdate",()=>{l()}),s("setTransition",(a,c)=>{const p=e.thumbs.swiper;!p||p.destroyed||p.setTransition(c)}),s("beforeDestroy",()=>{const a=e.thumbs.swiper;!a||a.destroyed||o&&a.destroy()}),Object.assign(e.thumbs,{init:r,update:l})}const Ee=(e,t)=>{const s=Se(t);return s!==t&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s},qe=({swiper:e,duration:t,transformElements:s,allSlides:i})=>{const{activeIndex:o}=e,n=r=>r.parentElement?r.parentElement:e.slides.filter(a=>a.shadowRoot&&a.shadowRoot===r.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let r=!1,l;i?l=s:l=s.filter(a=>{const c=a.classList.contains("swiper-slide-transform")?n(a):a;return e.getSlideIndex(c)===o}),l.forEach(a=>{Pe(a,()=>{if(r||!e||e.destroyed)return;r=!0,e.animating=!1;const c=I()?new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0}):{bubbles:!0,cancelable:!0,target:{id:a==null?void 0:a.uid}};e.wrapperEl.dispatchEvent(c)})})}};function Xl({swiper:e,extendParams:t,on:s}){t({fadeEffect:{crossFade:!1}}),Le({effect:"fade",swiper:e,on:s,setTranslate:()=>{var l;const{slides:n}=e,r=e.params.fadeEffect;for(let a=0;a<n.length;a+=1){const c=e.slides[a];let u=-c.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let v=0;e.isHorizontal()||(v=u,u=0);const f=(l=e.params.fadeEffect)!=null&&l.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),h=Ee(r,c);h.style.opacity=String(f),h.style.transform=`translate3d(${u}px, ${v}px, 0px)`}},setTransition:n=>{const r=e.slides.map(l=>Se(l));r.forEach(l=>{l.style.transitionDuration=`${n}ms`}),qe({swiper:e,duration:n,transformElements:r,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const le=(e,t,s)=>{const i=`swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,o=Se(t);let n;return I()?(n=o.querySelector(`.${i.split(" ").join(".")}`),n||(n=ge("div",i.split(" ")),o.append(n))):(n=o.getShadowList().find(r=>r.classList.containsMultiple(`.${i.split(" ").join(".")}`)),n||(n={...is(i),...as()},o.addShadowItem(n))),n};function ns({swiper:e,extendParams:t,on:s}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(l,a,c)=>{if(I()){let p=c?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),u=c?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");p||(p=ge("div",`swiper-slide-shadow-cube swiper-slide-shadow-${c?"left":"top"}`.split(" ")),l.append(p)),u||(u=ge("div",`swiper-slide-shadow-cube swiper-slide-shadow-${c?"right":"bottom"}`.split(" ")),l.append(u)),p&&(p.style.opacity=String(Math.max(-a,0))),u&&(u.style.opacity=String(Math.max(a,0)))}else{let p=c?l.getShadowByClass("swiper-slide-shadow-left"):l.getShadowByClass("swiper-slide-shadow-top"),u=c?l.getShadowByClass("swiper-slide-shadow-right"):l.getShadowByClass("swiper-slide-shadow-bottom");p||(p=le("cube",l,c?"left":"top")),u||(u=le("cube",l,c?"right":"bottom")),p&&(p.style.opacity=String(Math.max(-a,0))),u&&(u.style.opacity=String(Math.max(a,0)))}};Le({effect:"cube",swiper:e,on:s,setTranslate:()=>{var q;const{el:l,wrapperEl:a,slides:c,width:p,height:u,rtlTranslate:v,size:f,browser:h}=e;if(!a)return;const g=tt(e),_=e.params.cubeEffect,d=e.isHorizontal(),$=e.virtual&&typeof e.params.virtual=="object"&&((q=e.params.virtual)==null?void 0:q.enabled);let z=0,T=null;_.shadow&&(I()?d?(T=a.querySelector(".swiper-cube-shadow"),T||(T=ge("div","swiper-cube-shadow"),a.append(T)),T.style.height=`${p}px`):(T=l.querySelector(".swiper-cube-shadow"),T||(T=ge("div","swiper-cube-shadow"),l.append(T))):(e.wrapperEl.swiperShadowRef.value.classList.add("swiper-cube-shadow"),T=e.wrapperEl.swiperShadowRef.value,d&&(T.style.height=`${p}px`)));for(let R=0;R<c.length;R+=1){const Z=c[R];let B=R;$&&(B=parseInt(Z.getAttribute("data-swiper-slide-index")||"0",10));let j=B*90,L=Math.floor(j/360);v&&(j=-j,L=Math.floor(-j/360));const P=Math.max(Math.min(Z.progress,1),-1);let x=0,C=0,V=0;B%4===0?(x=-L*4*f,V=0):(B-1)%4===0?(x=0,V=-L*4*f):(B-2)%4===0?(x=f+L*4*f,V=f):(B-3)%4===0&&(x=-f,V=3*f+f*4*L),v&&(x=-x),d||(C=x,x=0);const G=`rotateX(${g(d?0:-j)}deg) rotateY(${g(d?j:0)}deg) translate3d(${x}px, ${C}px, ${V}px)`;P<=1&&P>-1&&(z=B*90+P*90,v&&(z=-B*90-P*90)),Z.style.transform=G,_.slideShadows&&i(Z,P,d)}if(a.style.transformOrigin=`50% 50% -${f/2}px`,a.style["-webkit-transform-origin"]=`50% 50% -${f/2}px`,_.shadow&&T)if(d)T.style.transform=`translate3d(0px, ${p/2+_.shadowOffset}px, ${-p/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${_.shadowScale})`;else{const R=Math.abs(z)-Math.floor(Math.abs(z)/90)*90,Z=1.5-(Math.sin(R*2*Math.PI/360)/2+Math.cos(R*2*Math.PI/360)/2),B=_.shadowScale,j=_.shadowScale/Z,L=_.shadowOffset;T.style.transform=`scale3d(${B}, 1, ${j}) translate3d(0px, ${u/2+L}px, ${-u/2/j}px) rotateX(-89.99deg)`}const E=(h.isSafari||h.isWebView)&&h.needPerspectiveFix?-f/2:0;a.style.transform=`translate3d(0px,0,${E}px) rotateX(${g(e.isHorizontal()?0:z)}deg) rotateY(${g(e.isHorizontal()?-z:0)}deg)`,a.style.setProperty("--swiper-cube-translate-z",`${E}px`)},setTransition:l=>{var p;const{el:a,slides:c}=e;if(c.forEach(u=>{u.style.transitionDuration=`${l}ms`,I()?u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>{v.style.transitionDuration=`${l}ms`}):u.getShadowList().forEach(v=>{v.style.transitionDuration=`${l}ms`})}),(p=e.params.cubeEffect)!=null&&p.shadow&&!e.isHorizontal())if(I()){const u=a.querySelector(".swiper-cube-shadow");u&&(u.style.transitionDuration=`${l}ms`)}else{const u=e.wrapperEl.swiperShadowRef.value;u&&(u.style.transitionDuration=`${l}ms`)}},recreateShadows:()=>{const l=e.isHorizontal();e.slides.forEach(a=>{const c=Math.max(Math.min(a.progress,1),-1);i(a,c,l)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function rs({swiper:e,extendParams:t,on:s}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Le({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:n,height:r,slides:l,slidesSizesGrid:a}=e,c=e.params.coverflowEffect,p=e.isHorizontal(),u=e.translate,v=p?-u+n/2:-u+r/2,f=p?c.rotate:-c.rotate,h=c.depth,g=tt(e);for(let _=0;_<l.length;_+=1){const d=l[_],$=a[_],z=d.swiperSlideOffset,T=(v-z-$/2)/$,E=typeof c.modifier=="function"?c.modifier(T):T*c.modifier;let q=p?f*E:0,R=p?0:f*E,Z=-h*Math.abs(E);const{stretch:B}=c,j=typeof B=="string"&&B.indexOf("%")!==-1?parseFloat(B)/100*$:B;let L=p?0:Number(j)*E,P=p?Number(j)*E:0,x=1-(1-c.scale)*Math.abs(E);Math.abs(P)<.001&&(P=0),Math.abs(L)<.001&&(L=0),Math.abs(Z)<.001&&(Z=0),Math.abs(q)<.001&&(q=0),Math.abs(R)<.001&&(R=0),Math.abs(x)<.001&&(x=0);const C=`translate3d(${P}px,${L}px,${Z}px)  
         rotateX(${g(R)}deg) rotateY(${g(q)}deg) scale(${x})`,V=Ee(c,d);if(V.style.transform=C,d.style.zIndex=String(-Math.abs(Math.round(E))+1),c.slideShadows)if(I()){let G=p?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),Q=p?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");G||(G=le("coverflow",d,p?"left":"top")),Q||(Q=le("coverflow",d,p?"right":"bottom")),G&&(G.style.opacity=String(E>0?E:0)),Q&&(Q.style.opacity=String(-E>0?-E:0))}else{let G=p?d.getShadowByClass("swiper-slide-shadow-left"):d.getShadowByClass("swiper-slide-shadow-top"),Q=p?d.getShadowByClass("swiper-slide-shadow-right"):d.getShadowByClass("swiper-slide-shadow-bottom");G||(G=le("coverflow",d,p?"left":"top")),Q||(Q=le("coverflow",d,p?"right":"bottom")),G&&(G.style.opacity=String(E>0?E:0)),Q&&(Q.style.opacity=String(-E>0?-E:0))}}},setTransition:n=>{e.slides.map(l=>Se(l)).forEach(l=>{l.style.transitionDuration=`${n}ms`,I()?l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>{a.style.transitionDuration=`${n}ms`}):l.getShadowList().forEach(a=>{a.style.transitionDuration=`${n}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function ls({swiper:e,extendParams:t,on:s}){t({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(l,a)=>{if(I()){let c=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),p=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");c||(c=le("flip",l,e.isHorizontal()?"left":"top")),p||(p=le("flip",l,e.isHorizontal()?"right":"bottom")),c&&(c.style.opacity=String(Math.max(-a,0))),p&&(p.style.opacity=String(Math.max(a,0)))}else{let c=e.isHorizontal()?l.getShadowByClass("swiper-slide-shadow-left"):l.getShadowByClass("swiper-slide-shadow-top"),p=e.isHorizontal()?l.getShadowByClass("swiper-slide-shadow-right"):l.getShadowByClass("swiper-slide-shadow-bottom");c||(c=le("flip",l,e.isHorizontal()?"left":"top")),p||(p=le("flip",l,e.isHorizontal()?"right":"bottom")),c&&(c.style.opacity=String(Math.max(-a,0))),p&&(p.style.opacity=String(Math.max(a,0)))}};Le({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:l,rtlTranslate:a}=e,c=e.params.flipEffect,p=tt(e);for(let u=0;u<l.length;u+=1){const v=l[u],{progress:f}=v,h=c.limitRotation?Math.max(Math.min(f,1),-1):f,g=v.swiperSlideOffset;let d=-180*h,$=0,z=e.params.cssMode?-g-e.translate:-g,T=0;e.isHorizontal()?a&&(d=-d):(T=z,z=0,$=-d,d=0),v.style.zIndex=String(-Math.abs(Math.round(f))+l.length),c.slideShadows&&i(v,h);const E=`translate3d(${z}px, ${T}px, 0px) rotateX(${p($)}deg) rotateY(${p(d)}deg)`,q=Ee(c,v);q.style.transform=E}},setTransition:l=>{const a=e.slides.map(c=>Se(c));a.forEach(c=>{c.style.transitionDuration=`${l}ms`,I()?c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>{p.style.transitionDuration=`${l}ms`}):c.getShadowList().forEach(p=>{p.style.transitionDuration=`${l}ms`})}),qe({swiper:e,duration:l,transformElements:a})},recreateShadows:()=>{e.slides.forEach(l=>{var p;const{progress:a}=l,c=(p=e.params.flipEffect)!=null&&p.limitRotation?Math.max(Math.min(a,1),-1):a;i(l,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Jl({swiper:e,extendParams:t,on:s}){t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),Le({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:n,activeIndex:r,rtlTranslate:l}=e,a=e.params.cardsEffect,{startTranslate:c,isTouched:p}=e.touchEventsData,u=l?-e.translate:e.translate;for(let v=0;v<n.length;v+=1){const f=n[v],h=f.progress,g=Math.min(Math.max(h,-4),4);let _=f.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(_-=n[0].swiperSlideOffset);let d=e.params.cssMode?-_-e.translate:-_,$=0;const z=-100*Math.abs(g);let T=1,E=-a.perSlideRotate*g,q=a.perSlideOffset-Math.abs(g)*.75;const R=e.virtual&&e.params.virtual.enabled?e.virtual.from+v:v,Z=(R===r||R===r-1)&&g>0&&g<1&&(p||e.params.cssMode)&&u<c,B=(R===r||R===r+1)&&g<0&&g>-1&&(p||e.params.cssMode)&&u>c;if(Z||B){const x=(1-Math.abs((Math.abs(g)-.5)/.5))**.5;E+=-28*g*x,T+=-.5*x,q+=96*x,$=`${-25*x*Math.abs(g)}%`}if(g<0?d=`calc(${d}px ${l?"-":"+"} (${q*Math.abs(g)}%))`:g>0?d=`calc(${d}px ${l?"-":"+"} (-${q*Math.abs(g)}%))`:d=`${d}px`,!e.isHorizontal()){const x=$;$=d,d=x}const j=g<0?`${1+(1-T)*g}`:`${1-(1-T)*g}`,L=`translate3d(${d}, ${$}, ${z}px) rotateZ(${a.rotate?l?-E:E:0}deg) scale(${j})`;if(a.slideShadows)if(I()){let x=f.querySelector(".swiper-slide-shadow");x||(x=le("cards",f)),x&&(x.style.opacity=String(Math.min(Math.max((Math.abs(g)-.5)/.5,0),1)))}else{let x=f.getShadowByClass("swiper-slide-shadow");x||(x=le("cards",f)),x&&(x.style.opacity=String(Math.min(Math.max((Math.abs(g)-.5)/.5,0),1)))}f.style.zIndex=String(-Math.abs(Math.round(h))+n.length);const P=Ee(a,f);P.style.transform=L}},setTransition:n=>{const r=e.slides.map(l=>Se(l));r.forEach(l=>{l.style.transitionDuration=`${n}ms`,I()?l.querySelectorAll(".swiper-slide-shadow").forEach(a=>{a.style.transitionDuration=`${n}ms`}):l.getShadowList().forEach(a=>{a.style.transitionDuration=`${n}ms`})}),qe({swiper:e,duration:n,transformElements:r})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function cs({swiper:e,extendParams:t,on:s}){t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=r=>typeof r=="string"?r:`${r}px`;Le({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:r,wrapperEl:l,slidesSizesGrid:a}=e,c=e.params.creativeEffect,{progressMultiplier:p}=c,u=e.params.centeredSlides;if(u){const v=a[0]/2-(e.params.slidesOffsetBefore||0)||0;l.style.transform=`translateX(calc(50% - ${v}px))`}for(let v=0;v<r.length;v+=1){const f=r[v],h=f.progress,g=Math.min(Math.max(h,-c.limitProgress),c.limitProgress);let _=g;u||(_=Math.min(Math.max(f.originalProgress,-c.limitProgress),c.limitProgress));const d=f.swiperSlideOffset,$=[e.params.cssMode?-d-e.translate:-d,0,0],z=[0,0,0];let T=!1;e.isHorizontal()||($[1]=$[0],$[0]=0);let E={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};g<0?(E=c.next,T=!0):g>0&&(E=c.prev,T=!0),$.forEach((P,x)=>{$[x]=`calc(${P}px + (${i(E.translate[x])} * ${Math.abs(g*p)}))`}),z.forEach((P,x)=>{z[x]=E.rotate[x]*Math.abs(g*p)}),f.style.zIndex=String(-Math.abs(Math.round(h))+r.length);const q=$.join(", "),R=`rotateX(${z[0]}deg) rotateY(${z[1]}deg) rotateZ(${z[2]}deg)`,Z=_<0?`scale(${1+(1-E.scale)*_*p})`:`scale(${1-(1-E.scale)*_*p})`,B=_<0?1+(1-E.opacity)*_*p:1-(1-E.opacity)*_*p,j=`translate3d(${q}) ${R} ${Z}`;if(T&&E.shadow||!T)if(I()){let P=f.querySelector(".swiper-slide-shadow");if(!P&&E.shadow&&(P=le("creative",f)),P){const x=c.shadowPerProgress?g*(1/c.limitProgress):g;P.style.opacity=String(Math.min(Math.max(Math.abs(x),0),1))}}else{let P=f.getShadowByClass("swiper-slide-shadow");if(!P&&E.shadow&&(P=le("creative",f)),P){const x=c.shadowPerProgress?g*(1/c.limitProgress):g;P.style.opacity=String(Math.min(Math.max(Math.abs(x),0),1))}}const L=Ee(c,f);L.style.transform=j,L.style.opacity=String(B),E.origin&&(L.style.transformOrigin=E.origin)}},setTransition:r=>{const l=e.slides.map(a=>Se(a));l.forEach(a=>{a.style.transitionDuration=`${r}ms`,I()?a.querySelectorAll(".swiper-slide-shadow").forEach(c=>{c.style.transitionDuration=`${r}ms`}):a.getShadowList().forEach(c=>{c.style.transitionDuration=`${r}ms`})}),qe({swiper:e,duration:r,transformElements:l,allSlides:!0})},perspective:()=>{var r;return!!((r=e.params.creativeEffect)!=null&&r.perspective)},overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Ql({swiper:e,extendParams:t,emit:s,once:i}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function o(){if(e.params.cssMode)return;const l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function n(){if(e.params.cssMode)return;const{touchEventsData:l,touches:a}=e;l.velocities.length===0&&l.velocities.push({position:a[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:a[e.isHorizontal()?"currentX":"currentY"],time:Ge()})}function r({currentPos:l}){var g,_,d,$,z,T,E,q,R,Z,B,j,L;if(e.params.cssMode)return;const{params:a,wrapperEl:c,rtlTranslate:p,snapGrid:u,touchEventsData:v}=e,h=Ge()-v.touchStartTime;if(l<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(l>-e.maxTranslate()){e.slides.length<u.length?e.slideTo(u.length-1):e.slideTo(e.slides.length-1);return}if((g=a.freeMode)!=null&&g.momentum){if(v.velocities.length>1){const N=v.velocities.pop(),te=v.velocities.pop();if(!N||!te)return;const ne=N.position-te.position,de=N.time-te.time;e.velocity=ne/de,e.velocity/=2,Math.abs(e.velocity)<((_=a.freeMode)==null?void 0:_.minimumVelocity)&&(e.velocity=0),(de>150||Ge()-N.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=(d=a.freeMode)==null?void 0:d.momentumVelocityRatio,v.velocities.length=0;let P=1e3*(($=a.freeMode)==null?void 0:$.momentumRatio);const x=e.velocity*P;let C=e.translate+x;p&&(C=-C);let V=!1,G;const Q=Math.abs(e.velocity)*20*((z=a.freeMode)==null?void 0:z.momentumBounceRatio);let Y;if(C<e.maxTranslate())(T=a.freeMode)!=null&&T.momentumBounce?(C+e.maxTranslate()<-Q&&(C=e.maxTranslate()-Q),G=e.maxTranslate(),V=!0,v.allowMomentumBounce=!0):C=e.maxTranslate(),a.loop&&a.centeredSlides&&(Y=!0);else if(C>e.minTranslate())(E=a.freeMode)!=null&&E.momentumBounce?(C-e.minTranslate()>Q&&(C=e.minTranslate()+Q),G=e.minTranslate(),V=!0,v.allowMomentumBounce=!0):C=e.minTranslate(),a.loop&&a.centeredSlides&&(Y=!0);else if((q=a.freeMode)!=null&&q.sticky){let N;for(let te=0;te<u.length;te+=1)if(u[te]>-C){N=te;break}Math.abs(u[N]-C)<Math.abs(u[N-1]-C)||e.swipeDirection==="next"?C=u[N]:C=u[N-1],C=-C}if(Y&&i("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(p?P=Math.abs((-C-e.translate)/e.velocity):P=Math.abs((C-e.translate)/e.velocity),(R=a.freeMode)!=null&&R.sticky){const N=Math.abs((p?-C:C)-e.translate),te=e.slidesSizesGrid[e.activeIndex];N<te?P=a.speed:N<2*te?P=a.speed*1.5:P=a.speed*2.5}}else if((Z=a.freeMode)!=null&&Z.sticky){e.slideToClosest();return}(B=a.freeMode)!=null&&B.momentumBounce&&V?(e.updateProgress(G),e.setTransition(P),e.setTranslate(C),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Pe(c,()=>{!e||e.destroyed||!v.allowMomentumBounce||(s("momentumBounce"),e.setTransition(a.speed),setTimeout(()=>{e.setTranslate(G),Pe(c,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(C),e.setTransition(P),e.setTranslate(C),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Pe(c,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(C),e.updateActiveIndex(),e.updateSlidesClasses()}else if((j=a.freeMode)!=null&&j.sticky){e.slideToClosest();return}else a.freeMode&&s("_freeModeNoMomentumRelease");(!((L=a.freeMode)!=null&&L.momentum)||h>=a.longSwipesMs)&&(s("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:o,onTouchMove:n,onTouchEnd:r}})}function ec({swiper:e,extendParams:t,on:s}){t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function i(a,c){const p=function(){let h,g,_;return(d,$)=>{for(g=-1,h=d.length;h-g>1;)_=h+g>>1,d[_]<=$?g=_:h=_;return h}}();this.x=a,this.y=c,this.lastIndex=a.length-1;let u,v;return this.interpolate=function(h){return h?(v=p(this.x,h),u=v-1,(h-this.x[u])*(this.y[v]-this.y[u])/(this.x[v]-this.x[u])+this.y[u]):0},this}function o(a){e.controller.spline=e.params.loop?new i(e.slidesGrid,a.slidesGrid):new i(e.snapGrid,a.snapGrid)}function n(a,c){const p=e.controller.control;let u,v;const f=e.constructor;function h(g){var d,$;if(g.destroyed)return;const _=e.rtlTranslate?-e.translate:e.translate;((d=e.params.controller)==null?void 0:d.by)==="slide"&&(o(g),v=-e.controller.spline.interpolate(-_)),(!v||(($=e.params.controller)==null?void 0:$.by)==="container")&&(u=(g.maxTranslate()-g.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(u)||!Number.isFinite(u))&&(u=1),v=(_-e.minTranslate())*u+g.minTranslate()),e.params.controller.inverse&&(v=g.maxTranslate()-v),g.updateProgress(v),g.setTranslate(v,e),g.updateActiveIndex(),g.updateSlidesClasses()}if(Array.isArray(p))for(let g=0;g<p.length;g+=1)p[g]!==c&&p[g]instanceof f&&h(p[g]);else p instanceof f&&c!==p&&h(p)}function r(a,c){const p=e.constructor,u=e.controller.control;let v;function f(h){h.destroyed||(h.setTransition(a,e),a!==0&&(h.transitionStart(),h.params.autoHeight&&Gt(()=>{h.updateAutoHeight()}),Pe(h.wrapperEl,()=>{u&&h.transitionEnd()})))}if(Array.isArray(u))for(v=0;v<u.length;v+=1)u[v]!==c&&u[v]instanceof p&&f(u[v]);else u instanceof p&&c!==u&&f(u)}function l(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}s("beforeInit",()=>{var a,c,p;if(typeof window<"u"&&I()&&(typeof((a=e.params.controller)==null?void 0:a.control)=="string"||((c=e.params.controller)==null?void 0:c.control)instanceof HTMLElement)){document.querySelectorAll(e.params.controller.control).forEach(v=>{if(e.controller.control||(e.controller.control=[]),v.swiper)e.controller.control.push(v.swiper);else{const f=h=>{e.controller.control.push(h.detail[0]),e.update(),v.removeEventListener(`${e.params.eventsPrefix}init`,f)};v.addEventListener(`${e.params.eventsPrefix}init`,f)}});return}e.controller.control=(p=e.params.controller)==null?void 0:p.control}),s("update",()=>{l()}),s("resize",()=>{l()}),s("observerUpdate",()=>{l()}),s("setTranslate",(a,c,p)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(c,p)}),s("setTransition",(a,c,p)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(c,p)}),Object.assign(e.controller,{setTranslate:n,setTransition:r})}function tc({swiper:e,extendParams:t,on:s,emit:i}){t({virtual:{enabled:!1,slides:[],data:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let o;e.virtual={cache:{},from:void 0,to:void 0,slides:[],data:[],offset:0,slidesGrid:[]};function n(u,v){const f=e.params.virtual;if(f.cache&&e.virtual.cache[v])return e.virtual.cache[v];let h;if(f.renderSlide){if(h=f.renderSlide.call(e,u,v),typeof h=="string"){const g=document.createElement("div");g.innerHTML=h,h=g.children[0]}}else e.isElement?h=ge("swiper-slide"):h=ge("div",e.params.slideClass);return h.setAttribute("data-swiper-slide-index",String(v)),f.renderSlide||(h.innerHTML=u),f.cache&&(e.virtual.cache[v]=h),h}function r(u,v){var ye,ke,_e;const{slidesPerView:f,slidesPerGroup:h,centeredSlides:g,loop:_,initialSlide:d}=e.params;if(v&&!_&&d>0)return;const{addSlidesBefore:$,addSlidesAfter:z}=e.params.virtual,{from:T,to:E,slides:q,slidesGrid:R,offset:Z,data:B}=e.virtual;e.params.cssMode||e.updateActiveIndex();const j=e.activeIndex||0;let L;e.rtlTranslate?L="right":L=e.isHorizontal()?"left":"top";let P,x;g?(P=Math.floor(f/2)+h+z,x=Math.floor(f/2)+h+$):(P=f+h-1+z,x=(_?f:h)+$);let C=j-x,V=j+P;_||(C=Math.max(C,0),V=Math.min(V,q.length-1));let G=(e.slidesGrid[C]||0)-(e.slidesGrid[0]||0);_&&j>=x?(C-=x,g||(G+=e.slidesGrid[0])):_&&j<x&&(C=-x,g&&(G+=e.slidesGrid[0])),Object.assign(e.virtual,{from:C,to:V,offset:G,slidesGrid:e.slidesGrid,slidesBefore:x,slidesAfter:P});function Q(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),i("virtualUpdate")}if(T===C&&E===V&&!u){e.slidesGrid!==R&&G!==Z&&e.slides.forEach(U=>{U.style[L]=`${G-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),i("virtualUpdate");return}if((ye=e.params.virtual)!=null&&ye.renderExternal){(ke=e.params.virtual.renderExternal)==null||ke.call(e,{offset:G,from:C,to:V,slides:function(){const se=[];for(let re=C;re<=V;re+=1)se.push(q[re]);return se}(),data:function(){const se=[];for(let re=C;re<=V;re+=1)se.push(B[re]);return se}()}),(_e=e.params.virtual)!=null&&_e.renderExternalUpdate?Q():i("virtualUpdate");return}const Y=[],N=[],te=U=>{let se=U;return U<0?se=q.length+U:se>=q.length&&(se=se-q.length),se};if(u)e.slides.filter(U=>U.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(U=>{U.remove()});else for(let U=T;U<=E;U+=1)if(U<C||U>V){const se=te(U);e.slides.filter(re=>re.matches(`.${e.params.slideClass}[data-swiper-slide-index="${se}"], swiper-slide[data-swiper-slide-index="${se}"]`)).forEach(re=>{re.remove()})}const ne=_?-q.length:0,de=_?q.length*2:q.length;for(let U=ne;U<de;U+=1)if(U>=C&&U<=V){const se=te(U);typeof E>"u"||u?N.push(se):(U>E&&N.push(se),U<T&&Y.push(se))}if(N.forEach(U=>{e.slidesEl.append(n(q[U],U))}),_)for(let U=Y.length-1;U>=0;U-=1){const se=Y[U];e.slidesEl.prepend(n(q[se],se))}else Y.sort((U,se)=>se-U),Y.forEach(U=>{e.slidesEl.prepend(n(q[U],U))});et(e.slidesEl,".swiper-slide, swiper-slide").forEach(U=>{U.style[L]=`${G-Math.abs(e.cssOverflowAdjustment())}px`}),Q()}function l(u){if(typeof u=="object"&&"length"in u)for(let v=0;v<u.length;v+=1)u[v]&&e.virtual.slides.push(u[v]);else e.virtual.slides.push(u);r(!0)}function a(u){const{activeIndex:v}=e;let f=v+1,h=1;if(Array.isArray(u)){for(let g=0;g<u.length;g+=1)u[g]&&e.virtual.slides.unshift(u[g]);f=v+u.length,h=u.length}else e.virtual.slides.unshift(u);if(e.params.virtual.cache){const{cache:g}=e.virtual,_={};Object.keys(g).forEach(d=>{const $=g[d],z=$.getAttribute("data-swiper-slide-index");z&&$.setAttribute("data-swiper-slide-index",String(Number(z)+h)),_[Number(d)+h]=$}),e.virtual.cache=_}r(!0),e.slideTo(f,0)}function c(u){if(typeof u>"u"||u===null)return;let{activeIndex:v}=e;if(Array.isArray(u))for(let f=u.length-1;f>=0;f-=1)e.params.virtual.cache&&(delete e.virtual.cache[u[f]],Object.keys(e.virtual.cache).forEach(h=>{h>slidesIndexes&&(e.virtual.cache[h-1]=e.virtual.cache[h],e.virtual.cache[h-1].setAttribute("data-swiper-slide-index",h-1),delete e.virtual.cache[h])})),e.virtual.slides.splice(u[f],1),u[f]<v&&(v-=1),v=Math.max(v,0);else e.params.virtual.cache&&(delete e.virtual.cache[u],Object.keys(e.virtual.cache).forEach(f=>{f>slidesIndexes&&(e.virtual.cache[f-1]=e.virtual.cache[f],e.virtual.cache[f-1].setAttribute("data-swiper-slide-index",f-1),delete e.virtual.cache[f])})),e.virtual.slides.splice(u,1),u<v&&(v-=1),v=Math.max(v,0);r(!0),e.slideTo(v,0)}function p(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),r(!0),e.slideTo(0,0)}s("beforeInit",()=>{var v;if(!e.params.virtual.enabled)return;let u;if(typeof((v=e.passedParams.virtual)==null?void 0:v.slides)>"u"){const f=Array.from(e.slidesEl.children).filter(h=>I()?h.matches(`.${e.params.slideClass}, swiper-slide`):h);f&&f.length&&(u=!0,f.forEach((h,g)=>{h.setAttribute("data-swiper-slide-index",String(g)),e.virtual.cache[g]=h,I()&&h.remove()}))}u||(e.virtual.slides=e.params.virtual.slides||[]),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,r(!1,!0)}),s("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(o),o=setTimeout(()=>{r()},100)):r())}),s("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&Kt(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:l,prependSlide:a,removeSlide:c,removeAllSlides:p,update:r})}const ds=D({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,s)=>(m(),k("span",{class:ee(["VPBadge",t.type])},[w(t.$slots,"default",{},()=>[ce(X(t.text),1)])],2))}}),us={key:0,class:"VPBackdrop"},ms=D({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,s)=>(m(),O(Xe,{name:"fade"},{default:S(()=>[t.show?(m(),k("div",us)):A("",!0)]),_:1}))}}),ps=H(ms,[["__scopeId","data-v-b647b0e2"]]),K=Ct;function fs(e,t){let s,i=!1;return()=>{s&&clearTimeout(s),i?s=setTimeout(e,t):(e(),(i=!0)&&setTimeout(()=>i=!1,t))}}function Ze(e){return/^\//.test(e)?e:`/${e}`}function ot(e){const{pathname:t,search:s,hash:i,protocol:o}=new URL(e,"http://a.com");if(Tt(e)||e.startsWith("#")||!o.startsWith("http")||!Pt(t))return e;const{site:n}=K(),r=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,n.value.cleanUrls?"":".html")}${s}${i}`);return Je(r)}function Me({correspondingLink:e=!1}={}){const{site:t,localeIndex:s,page:i,theme:o,hash:n}=K(),r=F(()=>{var a,c;return{label:(a=t.value.locales[s.value])==null?void 0:a.label,link:((c=t.value.locales[s.value])==null?void 0:c.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:F(()=>Object.entries(t.value.locales).flatMap(([a,c])=>r.value.label===c.label?[]:{text:c.label,link:vs(c.link||(a==="root"?"/":`/${a}/`),o.value.i18nRouting!==!1&&e,i.value.relativePath.slice(r.value.link.length-1),!t.value.cleanUrls)+n.value})),currentLang:r}}function vs(e,t,s,i){return t?e.replace(/\/$/,"")+Ze(s.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,i?".html":"")):e}const hs={class:"NotFound"},gs={class:"code"},bs={class:"title"},ys={class:"quote"},ks={class:"action"},_s=["href","aria-label"],ws=D({__name:"NotFound",setup(e){const{theme:t}=K(),{currentLang:s}=Me();return(i,o)=>{var n,r,l,a,c;return m(),k("div",hs,[b("p",gs,X(((n=y(t).notFound)==null?void 0:n.code)??"404"),1),b("h1",bs,X(((r=y(t).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=b("div",{class:"divider"},null,-1)),b("blockquote",ys,X(((l=y(t).notFound)==null?void 0:l.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),b("div",ks,[b("a",{class:"link",href:y(Je)(y(s).link),"aria-label":((a=y(t).notFound)==null?void 0:a.linkLabel)??"go to home"},X(((c=y(t).notFound)==null?void 0:c.linkText)??"Take me home"),9,_s)])])}}}),$s=H(ws,[["__scopeId","data-v-263fd53c"]]);function wt(e,t){if(Array.isArray(e))return Ie(e);if(e==null)return[];t=Ze(t);const s=Object.keys(e).sort((o,n)=>n.split("/").length-o.split("/").length).find(o=>t.startsWith(Ze(o))),i=s?e[s]:[];return Array.isArray(i)?Ie(i):Ie(i.items,i.base)}function Ss(e){const t=[];let s=0;for(const i in e){const o=e[i];if(o.items){s=t.push(o);continue}t[s]||t.push({items:[]}),t[s].items.push(o)}return t}function xs(e){const t=[];function s(i){for(const o of i)o.text&&o.link&&t.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&s(o.items)}return s(e),t}function Ye(e,t){return Array.isArray(t)?t.some(s=>Ye(e,s)):$e(e,t.link)?!0:t.items?Ye(e,t.items):!1}function Ie(e,t){return[...e].map(s=>{const i={...s},o=i.base||t;return o&&i.link&&(i.link=o+i.link),i.items&&(i.items=Ie(i.items,o)),i})}function be(){const{frontmatter:e,page:t,theme:s}=K(),i=We("(min-width: 960px)"),o=W(!1),n=F(()=>{const g=s.value.sidebar,_=t.value.relativePath;return g?wt(g,_):[]}),r=W(n.value);ve(n,(g,_)=>{JSON.stringify(g)!==JSON.stringify(_)&&(r.value=n.value)});const l=F(()=>e.value.sidebar!==!1&&r.value.length>0&&e.value.layout!=="home"),a=F(()=>c?e.value.aside==null?s.value.aside==="left":e.value.aside==="left":!1),c=F(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:s.value.aside!==!1),p=F(()=>l.value&&i.value),u=F(()=>l.value?Ss(r.value):[]);function v(){o.value=!0}function f(){o.value=!1}function h(){o.value?f():v()}return{isOpen:o,sidebar:r,sidebarGroups:u,hasSidebar:l,hasAside:c,leftAside:a,isSidebarEnabled:p,open:v,close:f,toggle:h}}function zs(e,t){let s;De(()=>{s=e.value?document.activeElement:void 0}),me(()=>{window.addEventListener("keyup",i)}),Be(()=>{window.removeEventListener("keyup",i)});function i(o){o.key==="Escape"&&e.value&&(t(),s==null||s.focus())}}function Ls(e){const{page:t,hash:s}=K(),i=W(!1),o=F(()=>e.value.collapsed!=null),n=F(()=>!!e.value.link),r=W(!1),l=()=>{r.value=$e(t.value.relativePath,e.value.link)};ve([t,e,s],l),me(l);const a=F(()=>r.value?!0:e.value.items?Ye(t.value.relativePath,e.value.items):!1),c=F(()=>!!(e.value.items&&e.value.items.length));De(()=>{i.value=!!(o.value&&e.value.collapsed)}),Qe(()=>{(r.value||a.value)&&(i.value=!1)});function p(){o.value&&(i.value=!i.value)}return{collapsed:i,collapsible:o,isLink:n,isActiveLink:r,hasActiveLink:a,hasChildren:c,toggle:p}}function Cs(){const{hasSidebar:e}=be(),t=We("(min-width: 960px)"),s=We("(min-width: 1280px)");return{isAsideEnabled:F(()=>!s.value&&!t.value?!1:e.value?s.value:t.value)}}const Ke=[];function $t(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function it(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(s=>s.id&&s.hasChildNodes()).map(s=>{const i=Number(s.tagName[1]);return{element:s,title:Ts(s),link:"#"+s.id,level:i}});return Ps(t,e)}function Ts(e){let t="";for(const s of e.childNodes)if(s.nodeType===1){if(s.classList.contains("VPBadge")||s.classList.contains("header-anchor")||s.classList.contains("ignore-header"))continue;t+=s.textContent}else s.nodeType===3&&(t+=s.textContent);return t.trim()}function Ps(e,t){if(t===!1)return[];const s=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[i,o]=typeof s=="number"?[s,s]:s==="deep"?[2,6]:s;return Is(e,i,o)}function Es(e,t){const{isAsideEnabled:s}=Cs(),i=fs(n,100);let o=null;me(()=>{requestAnimationFrame(n),window.addEventListener("scroll",i)}),Et(()=>{r(location.hash)}),Be(()=>{window.removeEventListener("scroll",i)});function n(){if(!s.value)return;const l=window.scrollY,a=window.innerHeight,c=document.body.offsetHeight,p=Math.abs(l+a-c)<1,u=Ke.map(({element:f,link:h})=>({link:h,top:Ms(f)})).filter(({top:f})=>!Number.isNaN(f)).sort((f,h)=>f.top-h.top);if(!u.length){r(null);return}if(l<1){r(null);return}if(p){r(u[u.length-1].link);return}let v=null;for(const{link:f,top:h}of u){if(h>l+Mt()+4)break;v=f}r(v)}function r(l){o&&o.classList.remove("active"),l==null?o=null:o=e.value.querySelector(`a[href="${decodeURIComponent(l)}"]`);const a=o;a?(a.classList.add("active"),t.value.style.top=a.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Ms(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function Is(e,t,s){Ke.length=0;const i=[],o=[];return e.forEach(n=>{const r={...n,children:[]};let l=o[o.length-1];for(;l&&l.level>=r.level;)o.pop(),l=o[o.length-1];if(r.element.classList.contains("ignore-header")||l&&"shouldIgnore"in l){o.push({level:r.level,shouldIgnore:!0});return}r.level>s||r.level<t||(Ke.push({element:r.element,link:r.link}),l?l.children.push(r):i.push(r),o.push(r))}),i}const Vs=["href","title"],As=D({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:s}){const i=s.href.split("#")[1],o=document.getElementById(decodeURIComponent(i));o==null||o.focus({preventScroll:!0})}return(s,i)=>{const o=ae("VPDocOutlineItem",!0);return m(),k("ul",{class:ee(["VPDocOutlineItem",s.root?"root":"nested"])},[(m(!0),k(J,null,oe(s.headers,({children:n,link:r,title:l})=>(m(),k("li",null,[b("a",{class:"outline-link",href:r,onClick:t,title:l},X(l),9,Vs),n!=null&&n.length?(m(),O(o,{key:0,headers:n},null,8,["headers"])):A("",!0)]))),256))],2)}}}),St=H(As,[["__scopeId","data-v-a2eac1ef"]]),Ds={class:"content"},Bs={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Os=D({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:s}=K(),i=vt([]);Oe(()=>{i.value=it(t.value.outline??s.value.outline)});const o=W(),n=W();return Es(o,n),(r,l)=>(m(),k("nav",{"aria-labelledby":"doc-outline-aria-label",class:ee(["VPDocAsideOutline",{"has-outline":i.value.length>0}]),ref_key:"container",ref:o},[b("div",Ds,[b("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),b("div",Bs,X(y($t)(y(s))),1),M(St,{headers:i.value,root:!0},null,8,["headers"])])],2))}}),Ns=H(Os,[["__scopeId","data-v-55034d9f"]]),Hs={class:"VPDocAsideCarbonAds"},js=D({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(s,i)=>(m(),k("div",Hs,[M(y(t),{"carbon-ads":s.carbonAds},null,8,["carbon-ads"])]))}}),Fs={class:"VPDocAside"},qs=D({__name:"VPDocAside",setup(e){const{theme:t}=K();return(s,i)=>(m(),k("div",Fs,[w(s.$slots,"aside-top",{},void 0,!0),w(s.$slots,"aside-outline-before",{},void 0,!0),M(Ns),w(s.$slots,"aside-outline-after",{},void 0,!0),i[0]||(i[0]=b("div",{class:"spacer"},null,-1)),w(s.$slots,"aside-ads-before",{},void 0,!0),y(t).carbonAds?(m(),O(js,{key:0,"carbon-ads":y(t).carbonAds},null,8,["carbon-ads"])):A("",!0),w(s.$slots,"aside-ads-after",{},void 0,!0),w(s.$slots,"aside-bottom",{},void 0,!0)]))}}),Rs=H(qs,[["__scopeId","data-v-eaa7b1b4"]]);function Gs(){const{theme:e,page:t}=K();return F(()=>{const{text:s="Edit this page",pattern:i=""}=e.value.editLink||{};let o;return typeof i=="function"?o=i(t.value):o=i.replace(/:path/g,t.value.filePath),{url:o,text:s}})}function Us(){const{page:e,theme:t,frontmatter:s}=K();return F(()=>{var c,p,u,v,f,h,g,_;const i=wt(t.value.sidebar,e.value.relativePath),o=xs(i),n=Ws(o,d=>d.link.replace(/[?#].*$/,"")),r=n.findIndex(d=>$e(e.value.relativePath,d.link)),l=((c=t.value.docFooter)==null?void 0:c.prev)===!1&&!s.value.prev||s.value.prev===!1,a=((p=t.value.docFooter)==null?void 0:p.next)===!1&&!s.value.next||s.value.next===!1;return{prev:l?void 0:{text:(typeof s.value.prev=="string"?s.value.prev:typeof s.value.prev=="object"?s.value.prev.text:void 0)??((u=n[r-1])==null?void 0:u.docFooterText)??((v=n[r-1])==null?void 0:v.text),link:(typeof s.value.prev=="object"?s.value.prev.link:void 0)??((f=n[r-1])==null?void 0:f.link)},next:a?void 0:{text:(typeof s.value.next=="string"?s.value.next:typeof s.value.next=="object"?s.value.next.text:void 0)??((h=n[r+1])==null?void 0:h.docFooterText)??((g=n[r+1])==null?void 0:g.text),link:(typeof s.value.next=="object"?s.value.next.link:void 0)??((_=n[r+1])==null?void 0:_.link)}}})}function Ws(e,t){const s=new Set;return e.filter(i=>{const o=t(i);return s.has(o)?!1:s.add(o)})}const fe=D({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,s=F(()=>t.tag??(t.href?"a":"span")),i=F(()=>t.href&&ht.test(t.href)||t.target==="_blank");return(o,n)=>(m(),O(ue(s.value),{class:ee(["VPLink",{link:o.href,"vp-external-link-icon":i.value,"no-icon":o.noIcon}]),href:o.href?y(ot)(o.href):void 0,target:o.target??(i.value?"_blank":void 0),rel:o.rel??(i.value?"noreferrer":void 0)},{default:S(()=>[w(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Zs={class:"VPLastUpdated"},Ys=["datetime"],Ks=D({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:s,lang:i}=K(),o=F(()=>new Date(s.value.lastUpdated)),n=F(()=>o.value.toISOString()),r=W("");return me(()=>{De(()=>{var l,a,c;r.value=new Intl.DateTimeFormat((a=(l=t.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&a.forceLocale?i.value:void 0,((c=t.value.lastUpdated)==null?void 0:c.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,a)=>{var c;return m(),k("p",Zs,[ce(X(((c=y(t).lastUpdated)==null?void 0:c.text)||y(t).lastUpdatedText||"Last updated")+": ",1),b("time",{datetime:n.value},X(r.value),9,Ys)])}}}),Xs=H(Ks,[["__scopeId","data-v-ce1f4d9c"]]),Js={key:0,class:"VPDocFooter"},Qs={key:0,class:"edit-info"},eo={key:0,class:"edit-link"},to={key:1,class:"last-updated"},so={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},oo={class:"pager"},io=["innerHTML"],ao=["innerHTML"],no={class:"pager"},ro=["innerHTML"],lo=["innerHTML"],co=D({__name:"VPDocFooter",setup(e){const{theme:t,page:s,frontmatter:i}=K(),o=Gs(),n=Us(),r=F(()=>t.value.editLink&&i.value.editLink!==!1),l=F(()=>s.value.lastUpdated),a=F(()=>r.value||l.value||n.value.prev||n.value.next);return(c,p)=>{var u,v,f,h;return a.value?(m(),k("footer",Js,[w(c.$slots,"doc-footer-before",{},void 0,!0),r.value||l.value?(m(),k("div",Qs,[r.value?(m(),k("div",eo,[M(fe,{class:"edit-link-button",href:y(o).url,"no-icon":!0},{default:S(()=>[p[0]||(p[0]=b("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),ce(" "+X(y(o).text),1)]),_:1},8,["href"])])):A("",!0),l.value?(m(),k("div",to,[M(Xs)])):A("",!0)])):A("",!0),(u=y(n).prev)!=null&&u.link||(v=y(n).next)!=null&&v.link?(m(),k("nav",so,[p[1]||(p[1]=b("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),b("div",oo,[(f=y(n).prev)!=null&&f.link?(m(),O(fe,{key:0,class:"pager-link prev",href:y(n).prev.link},{default:S(()=>{var g;return[b("span",{class:"desc",innerHTML:((g=y(t).docFooter)==null?void 0:g.prev)||"Previous page"},null,8,io),b("span",{class:"title",innerHTML:y(n).prev.text},null,8,ao)]}),_:1},8,["href"])):A("",!0)]),b("div",no,[(h=y(n).next)!=null&&h.link?(m(),O(fe,{key:0,class:"pager-link next",href:y(n).next.link},{default:S(()=>{var g;return[b("span",{class:"desc",innerHTML:((g=y(t).docFooter)==null?void 0:g.next)||"Next page"},null,8,ro),b("span",{class:"title",innerHTML:y(n).next.text},null,8,lo)]}),_:1},8,["href"])):A("",!0)])])):A("",!0)])):A("",!0)}}}),uo=H(co,[["__scopeId","data-v-2e0b1e71"]]),mo={class:"container"},po={class:"aside-container"},fo={class:"aside-content"},vo={class:"content"},ho={class:"content-container"},go={class:"main"},bo=D({__name:"VPDoc",setup(e){const{theme:t}=K(),s=Ne(),{hasSidebar:i,hasAside:o,leftAside:n}=be(),r=F(()=>s.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(l,a)=>{const c=ae("Content");return m(),k("div",{class:ee(["VPDoc",{"has-sidebar":y(i),"has-aside":y(o)}])},[w(l.$slots,"doc-top",{},void 0,!0),b("div",mo,[y(o)?(m(),k("div",{key:0,class:ee(["aside",{"left-aside":y(n)}])},[a[0]||(a[0]=b("div",{class:"aside-curtain"},null,-1)),b("div",po,[b("div",fo,[M(Rs,null,{"aside-top":S(()=>[w(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":S(()=>[w(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":S(()=>[w(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":S(()=>[w(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":S(()=>[w(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":S(()=>[w(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):A("",!0),b("div",vo,[b("div",ho,[w(l.$slots,"doc-before",{},void 0,!0),b("main",go,[M(c,{class:ee(["vp-doc",[r.value,y(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),M(uo,null,{"doc-footer-before":S(()=>[w(l.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),w(l.$slots,"doc-after",{},void 0,!0)])])]),w(l.$slots,"doc-bottom",{},void 0,!0)],2)}}}),yo=H(bo,[["__scopeId","data-v-6b398dac"]]),ko=D({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,s=F(()=>t.href&&ht.test(t.href)),i=F(()=>t.tag||(t.href?"a":"button"));return(o,n)=>(m(),O(ue(i.value),{class:ee(["VPButton",[o.size,o.theme]]),href:o.href?y(ot)(o.href):void 0,target:t.target??(s.value?"_blank":void 0),rel:t.rel??(s.value?"noreferrer":void 0)},{default:S(()=>[ce(X(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),_o=H(ko,[["__scopeId","data-v-8c30cf50"]]),wo=["src","alt"],$o=D({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,s)=>{const i=ae("VPImage",!0);return t.image?(m(),k(J,{key:0},[typeof t.image=="string"||"src"in t.image?(m(),k("img",pe({key:0,class:"VPImage"},typeof t.image=="string"?t.$attrs:{...t.image,...t.$attrs},{src:y(Je)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,wo)):(m(),k(J,{key:1},[M(i,pe({class:"dark",image:t.image.dark,alt:t.image.alt},t.$attrs),null,16,["image","alt"]),M(i,pe({class:"light",image:t.image.light,alt:t.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):A("",!0)}}}),Ae=H($o,[["__scopeId","data-v-b0f7ff75"]]),So={class:"container"},xo={class:"main"},zo={key:0,class:"name"},Lo=["innerHTML"],Co=["innerHTML"],To=["innerHTML"],Po={key:0,class:"actions"},Eo={key:0,class:"image"},Mo={class:"image-container"},Io=D({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=He("hero-image-slot-exists");return(s,i)=>(m(),k("div",{class:ee(["VPHero",{"has-image":s.image||y(t)}])},[b("div",So,[b("div",xo,[w(s.$slots,"home-hero-info-before",{},void 0,!0),w(s.$slots,"home-hero-info",{},()=>[s.name?(m(),k("h1",zo,[b("span",{innerHTML:s.name,class:"clip"},null,8,Lo)])):A("",!0),s.text?(m(),k("p",{key:1,innerHTML:s.text,class:"text"},null,8,Co)):A("",!0),s.tagline?(m(),k("p",{key:2,innerHTML:s.tagline,class:"tagline"},null,8,To)):A("",!0)],!0),w(s.$slots,"home-hero-info-after",{},void 0,!0),s.actions?(m(),k("div",Po,[(m(!0),k(J,null,oe(s.actions,o=>(m(),k("div",{key:o.link,class:"action"},[M(_o,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):A("",!0),w(s.$slots,"home-hero-actions-after",{},void 0,!0)]),s.image||y(t)?(m(),k("div",Eo,[b("div",Mo,[i[0]||(i[0]=b("div",{class:"image-bg"},null,-1)),w(s.$slots,"home-hero-image",{},()=>[s.image?(m(),O(Ae,{key:0,class:"image-src",image:s.image},null,8,["image"])):A("",!0)],!0)])])):A("",!0)])],2))}}),Vo=H(Io,[["__scopeId","data-v-287ea985"]]),Ao=D({__name:"VPHomeHero",setup(e){const{frontmatter:t}=K();return(s,i)=>y(t).hero?(m(),O(Vo,{key:0,class:"VPHomeHero",name:y(t).hero.name,text:y(t).hero.text,tagline:y(t).hero.tagline,image:y(t).hero.image,actions:y(t).hero.actions},{"home-hero-info-before":S(()=>[w(s.$slots,"home-hero-info-before")]),"home-hero-info":S(()=>[w(s.$slots,"home-hero-info")]),"home-hero-info-after":S(()=>[w(s.$slots,"home-hero-info-after")]),"home-hero-actions-after":S(()=>[w(s.$slots,"home-hero-actions-after")]),"home-hero-image":S(()=>[w(s.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):A("",!0)}}),Do={class:"box"},Bo={key:0,class:"icon"},Oo=["innerHTML"],No=["innerHTML"],Ho=["innerHTML"],jo={key:4,class:"link-text"},Fo={class:"link-text-value"},qo=D({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,s)=>(m(),O(fe,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:S(()=>[b("article",Do,[typeof t.icon=="object"&&t.icon.wrap?(m(),k("div",Bo,[M(Ae,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(m(),O(Ae,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(m(),k("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Oo)):A("",!0),b("h2",{class:"title",innerHTML:t.title},null,8,No),t.details?(m(),k("p",{key:3,class:"details",innerHTML:t.details},null,8,Ho)):A("",!0),t.linkText?(m(),k("div",jo,[b("p",Fo,[ce(X(t.linkText)+" ",1),s[0]||(s[0]=b("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):A("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ro=H(qo,[["__scopeId","data-v-f07f3991"]]),Go={key:0,class:"VPFeatures"},Uo={class:"container"},Wo={class:"items"},Zo=D({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,s=F(()=>{const i=t.features.length;if(i){if(i===2)return"grid-2";if(i===3)return"grid-3";if(i%3===0)return"grid-6";if(i>3)return"grid-4"}else return});return(i,o)=>i.features?(m(),k("div",Go,[b("div",Uo,[b("div",Wo,[(m(!0),k(J,null,oe(i.features,n=>(m(),k("div",{key:n.title,class:ee(["item",[s.value]])},[M(Ro,{icon:n.icon,title:n.title,details:n.details,link:n.link,"link-text":n.linkText,rel:n.rel,target:n.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):A("",!0)}}),Yo=H(Zo,[["__scopeId","data-v-62eea3f9"]]),Ko=D({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=K();return(s,i)=>y(t).features?(m(),O(Yo,{key:0,class:"VPHomeFeatures",features:y(t).features},null,8,["features"])):A("",!0)}}),Xo=D({__name:"VPHomeContent",setup(e){const{width:t}=It({initialWidth:0,includeScrollbar:!1});return(s,i)=>(m(),k("div",{class:"vp-doc container",style:ze(y(t)?{"--vp-offset":`calc(50% - ${y(t)/2}px)`}:{})},[w(s.$slots,"default",{},void 0,!0)],4))}}),Jo=H(Xo,[["__scopeId","data-v-ed8e7474"]]),Qo={class:"VPHome"},ei=D({__name:"VPHome",setup(e){const{frontmatter:t}=K();return(s,i)=>{const o=ae("Content");return m(),k("div",Qo,[w(s.$slots,"home-hero-before",{},void 0,!0),M(Ao,null,{"home-hero-info-before":S(()=>[w(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":S(()=>[w(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":S(()=>[w(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":S(()=>[w(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":S(()=>[w(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),w(s.$slots,"home-hero-after",{},void 0,!0),w(s.$slots,"home-features-before",{},void 0,!0),M(Ko),w(s.$slots,"home-features-after",{},void 0,!0),y(t).markdownStyles!==!1?(m(),O(Jo,{key:0},{default:S(()=>[M(o)]),_:1})):(m(),O(o,{key:1}))])}}}),ti=H(ei,[["__scopeId","data-v-cbb2c945"]]),si={},oi={class:"VPPage"};function ii(e,t){const s=ae("Content");return m(),k("div",oi,[w(e.$slots,"page-top"),M(s),w(e.$slots,"page-bottom")])}const ai=H(si,[["render",ii]]),ni=D({__name:"VPContent",setup(e){const{page:t,frontmatter:s}=K(),{hasSidebar:i}=be();return(o,n)=>(m(),k("div",{class:ee(["VPContent",{"has-sidebar":y(i),"is-home":y(s).layout==="home"}]),id:"VPContent"},[y(t).isNotFound?w(o.$slots,"not-found",{key:0},()=>[M($s)],!0):y(s).layout==="page"?(m(),O(ai,{key:1},{"page-top":S(()=>[w(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":S(()=>[w(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):y(s).layout==="home"?(m(),O(ti,{key:2},{"home-hero-before":S(()=>[w(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":S(()=>[w(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":S(()=>[w(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":S(()=>[w(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":S(()=>[w(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":S(()=>[w(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":S(()=>[w(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":S(()=>[w(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":S(()=>[w(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):y(s).layout&&y(s).layout!=="doc"?(m(),O(ue(y(s).layout),{key:3})):(m(),O(yo,{key:4},{"doc-top":S(()=>[w(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":S(()=>[w(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":S(()=>[w(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":S(()=>[w(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":S(()=>[w(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":S(()=>[w(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":S(()=>[w(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":S(()=>[w(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":S(()=>[w(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":S(()=>[w(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":S(()=>[w(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ri=H(ni,[["__scopeId","data-v-6949aa7e"]]),li={class:"container"},ci=["innerHTML"],di=["innerHTML"],ui=D({__name:"VPFooter",setup(e){const{theme:t,frontmatter:s}=K(),{hasSidebar:i}=be();return(o,n)=>y(t).footer&&y(s).footer!==!1?(m(),k("footer",{key:0,class:ee(["VPFooter",{"has-sidebar":y(i)}])},[b("div",li,[y(t).footer.message?(m(),k("p",{key:0,class:"message",innerHTML:y(t).footer.message},null,8,ci)):A("",!0),y(t).footer.copyright?(m(),k("p",{key:1,class:"copyright",innerHTML:y(t).footer.copyright},null,8,di)):A("",!0)])],2)):A("",!0)}}),mi=H(ui,[["__scopeId","data-v-87ccf596"]]);function pi(){const{theme:e,frontmatter:t}=K(),s=vt([]),i=F(()=>s.value.length>0);return Oe(()=>{s.value=it(t.value.outline??e.value.outline)}),{headers:s,hasLocalNav:i}}const fi={class:"menu-text"},vi={class:"header"},hi={class:"outline"},gi=D({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:s}=K(),i=W(!1),o=W(0),n=W(),r=W();function l(u){var v;(v=n.value)!=null&&v.contains(u.target)||(i.value=!1)}ve(i,u=>{if(u){document.addEventListener("click",l);return}document.removeEventListener("click",l)}),Vt("Escape",()=>{i.value=!1}),Oe(()=>{i.value=!1});function a(){i.value=!i.value,o.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function c(u){u.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),Ve(()=>{i.value=!1}))}function p(){i.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(u,v)=>(m(),k("div",{class:"VPLocalNavOutlineDropdown",style:ze({"--vp-vh":o.value+"px"}),ref_key:"main",ref:n},[u.headers.length>0?(m(),k("button",{key:0,onClick:a,class:ee({open:i.value})},[b("span",fi,X(y($t)(y(s))),1),v[0]||(v[0]=b("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(m(),k("button",{key:1,onClick:p},X(y(s).returnToTopLabel||"Return to top"),1)),M(Xe,{name:"flyout"},{default:S(()=>[i.value?(m(),k("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:c},[b("div",vi,[b("a",{class:"top-link",href:"#",onClick:p},X(y(s).returnToTopLabel||"Return to top"),1)]),b("div",hi,[M(St,{headers:u.headers},null,8,["headers"])])],512)):A("",!0)]),_:1})],4))}}),bi=H(gi,[["__scopeId","data-v-1eefe958"]]),yi={class:"container"},ki=["aria-expanded"],_i={class:"menu-text"},wi=D({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:s}=K(),{hasSidebar:i}=be(),{headers:o}=pi(),{y:n}=gt(),r=W(0);me(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Oe(()=>{o.value=it(s.value.outline??t.value.outline)});const l=F(()=>o.value.length===0),a=F(()=>l.value&&!i.value),c=F(()=>({VPLocalNav:!0,"has-sidebar":i.value,empty:l.value,fixed:a.value}));return(p,u)=>y(s).layout!=="home"&&(!a.value||y(n)>=r.value)?(m(),k("div",{key:0,class:ee(c.value)},[b("div",yi,[y(i)?(m(),k("button",{key:0,class:"menu","aria-expanded":p.open,"aria-controls":"VPSidebarNav",onClick:u[0]||(u[0]=v=>p.$emit("open-menu"))},[u[1]||(u[1]=b("span",{class:"vpi-align-left menu-icon"},null,-1)),b("span",_i,X(y(t).sidebarMenuLabel||"Menu"),1)],8,ki)):A("",!0),M(bi,{headers:y(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):A("",!0)}}),$i=H(wi,[["__scopeId","data-v-a588c27c"]]);function Si(){const e=W(!1);function t(){e.value=!0,window.addEventListener("resize",o)}function s(){e.value=!1,window.removeEventListener("resize",o)}function i(){e.value?s():t()}function o(){window.outerWidth>=768&&s()}const n=Ne();return ve(()=>n.path,s),{isScreenOpen:e,openScreen:t,closeScreen:s,toggleScreen:i}}const xi={},zi={class:"VPSwitch",type:"button",role:"switch"},Li={class:"check"},Ci={key:0,class:"icon"};function Ti(e,t){return m(),k("button",zi,[b("span",Li,[e.$slots.default?(m(),k("span",Ci,[w(e.$slots,"default",{},void 0,!0)])):A("",!0)])])}const Pi=H(xi,[["render",Ti],["__scopeId","data-v-3f9f265f"]]),Ei=D({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:s}=K(),i=He("toggle-appearance",()=>{t.value=!t.value}),o=W("");return Qe(()=>{o.value=t.value?s.value.lightModeSwitchTitle||"Switch to light theme":s.value.darkModeSwitchTitle||"Switch to dark theme"}),(n,r)=>(m(),O(Pi,{title:o.value,class:"VPSwitchAppearance","aria-checked":y(t),onClick:y(i)},{default:S(()=>r[0]||(r[0]=[b("span",{class:"vpi-sun sun"},null,-1),b("span",{class:"vpi-moon moon"},null,-1)])),_:1},8,["title","aria-checked","onClick"]))}}),at=H(Ei,[["__scopeId","data-v-9abd478a"]]),Mi={key:0,class:"VPNavBarAppearance"},Ii=D({__name:"VPNavBarAppearance",setup(e){const{site:t}=K();return(s,i)=>y(t).appearance&&y(t).appearance!=="force-dark"&&y(t).appearance!=="force-auto"?(m(),k("div",Mi,[M(at)])):A("",!0)}}),Vi=H(Ii,[["__scopeId","data-v-20bcf285"]]),nt=W();let xt=!1,Ue=0;function Ai(e){const t=W(!1);if(je){!xt&&Di(),Ue++;const s=ve(nt,i=>{var o,n,r;i===e.el.value||(o=e.el.value)!=null&&o.contains(i)?(t.value=!0,(n=e.onFocus)==null||n.call(e)):(t.value=!1,(r=e.onBlur)==null||r.call(e))});Be(()=>{s(),Ue--,Ue||Bi()})}return At(t)}function Di(){document.addEventListener("focusin",zt),xt=!0,nt.value=document.activeElement}function Bi(){document.removeEventListener("focusin",zt)}function zt(){nt.value=document.activeElement}const Oi={class:"VPMenuLink"},Ni=["innerHTML"],Hi=D({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=K();return(s,i)=>(m(),k("div",Oi,[M(fe,{class:ee({active:y($e)(y(t).relativePath,s.item.activeMatch||s.item.link,!!s.item.activeMatch)}),href:s.item.link,target:s.item.target,rel:s.item.rel,"no-icon":s.item.noIcon},{default:S(()=>[b("span",{innerHTML:s.item.text},null,8,Ni)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Re=H(Hi,[["__scopeId","data-v-f5db19c3"]]),ji={class:"VPMenuGroup"},Fi={key:0,class:"title"},qi=D({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,s)=>(m(),k("div",ji,[t.text?(m(),k("p",Fi,X(t.text),1)):A("",!0),(m(!0),k(J,null,oe(t.items,i=>(m(),k(J,null,["link"in i?(m(),O(Re,{key:0,item:i},null,8,["item"])):A("",!0)],64))),256))]))}}),Ri=H(qi,[["__scopeId","data-v-2e45306a"]]),Gi={class:"VPMenu"},Ui={key:0,class:"items"},Wi=D({__name:"VPMenu",props:{items:{}},setup(e){return(t,s)=>(m(),k("div",Gi,[t.items?(m(),k("div",Ui,[(m(!0),k(J,null,oe(t.items,i=>(m(),k(J,{key:JSON.stringify(i)},["link"in i?(m(),O(Re,{key:0,item:i},null,8,["item"])):"component"in i?(m(),O(ue(i.component),pe({key:1,ref_for:!0},i.props),null,16)):(m(),O(Ri,{key:2,text:i.text,items:i.items},null,8,["text","items"]))],64))),128))])):A("",!0),w(t.$slots,"default",{},void 0,!0)]))}}),Zi=H(Wi,[["__scopeId","data-v-2ec6a944"]]),Yi=["aria-expanded","aria-label"],Ki={key:0,class:"text"},Xi=["innerHTML"],Ji={key:1,class:"vpi-more-horizontal icon"},Qi={class:"menu"},ea=D({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=W(!1),s=W();Ai({el:s,onBlur:i});function i(){t.value=!1}return(o,n)=>(m(),k("div",{class:"VPFlyout",ref_key:"el",ref:s,onMouseenter:n[1]||(n[1]=r=>t.value=!0),onMouseleave:n[2]||(n[2]=r=>t.value=!1)},[b("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":o.label,onClick:n[0]||(n[0]=r=>t.value=!t.value)},[o.button||o.icon?(m(),k("span",Ki,[o.icon?(m(),k("span",{key:0,class:ee([o.icon,"option-icon"])},null,2)):A("",!0),o.button?(m(),k("span",{key:1,innerHTML:o.button},null,8,Xi)):A("",!0),n[3]||(n[3]=b("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(m(),k("span",Ji))],8,Yi),b("div",Qi,[M(Zi,{items:o.items},{default:S(()=>[w(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),rt=H(ea,[["__scopeId","data-v-08bfcee2"]]),ta=["href","aria-label","innerHTML"],sa=D({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,s=W();me(async()=>{var n;await Ve();const o=(n=s.value)==null?void 0:n.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const i=F(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(o,n)=>(m(),k("a",{ref_key:"el",ref:s,class:"VPSocialLink no-icon",href:o.link,"aria-label":o.ariaLabel??(typeof o.icon=="string"?o.icon:""),target:"_blank",rel:"noopener",innerHTML:i.value},null,8,ta))}}),oa=H(sa,[["__scopeId","data-v-5e6ed859"]]),ia={class:"VPSocialLinks"},aa=D({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,s)=>(m(),k("div",ia,[(m(!0),k(J,null,oe(t.links,({link:i,icon:o,ariaLabel:n})=>(m(),O(oa,{key:i,icon:o,link:i,ariaLabel:n},null,8,["icon","link","ariaLabel"]))),128))]))}}),lt=H(aa,[["__scopeId","data-v-2baa5e24"]]),na={key:0,class:"group translations"},ra={class:"trans-title"},la={key:1,class:"group"},ca={class:"item appearance"},da={class:"label"},ua={class:"appearance-action"},ma={key:2,class:"group"},pa={class:"item social-links"},fa=D({__name:"VPNavBarExtra",setup(e){const{site:t,theme:s}=K(),{localeLinks:i,currentLang:o}=Me({correspondingLink:!0}),n=F(()=>i.value.length&&o.value.label||t.value.appearance||s.value.socialLinks);return(r,l)=>n.value?(m(),O(rt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:S(()=>[y(i).length&&y(o).label?(m(),k("div",na,[b("p",ra,X(y(o).label),1),(m(!0),k(J,null,oe(y(i),a=>(m(),O(Re,{key:a.link,item:a},null,8,["item"]))),128))])):A("",!0),y(t).appearance&&y(t).appearance!=="force-dark"&&y(t).appearance!=="force-auto"?(m(),k("div",la,[b("div",ca,[b("p",da,X(y(s).darkModeSwitchLabel||"Appearance"),1),b("div",ua,[M(at)])])])):A("",!0),y(s).socialLinks?(m(),k("div",ma,[b("div",pa,[M(lt,{class:"social-links-list",links:y(s).socialLinks},null,8,["links"])])])):A("",!0)]),_:1})):A("",!0)}}),va=H(fa,[["__scopeId","data-v-19354c07"]]),ha=["aria-expanded"],ga=D({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,s)=>(m(),k("button",{type:"button",class:ee(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:s[0]||(s[0]=i=>t.$emit("click"))},s[1]||(s[1]=[b("span",{class:"container"},[b("span",{class:"top"}),b("span",{class:"middle"}),b("span",{class:"bottom"})],-1)]),10,ha))}}),ba=H(ga,[["__scopeId","data-v-29142655"]]),ya=["innerHTML"],ka=D({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=K();return(s,i)=>(m(),O(fe,{class:ee({VPNavBarMenuLink:!0,active:y($e)(y(t).relativePath,s.item.activeMatch||s.item.link,!!s.item.activeMatch)}),href:s.item.link,target:s.item.target,rel:s.item.rel,"no-icon":s.item.noIcon,tabindex:"0"},{default:S(()=>[b("span",{innerHTML:s.item.text},null,8,ya)]),_:1},8,["class","href","target","rel","no-icon"]))}}),_a=H(ka,[["__scopeId","data-v-c080a026"]]),wa=D({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:s}=K(),i=n=>"component"in n?!1:"link"in n?$e(s.value.relativePath,n.link,!!t.item.activeMatch):n.items.some(i),o=F(()=>i(t.item));return(n,r)=>(m(),O(rt,{class:ee({VPNavBarMenuGroup:!0,active:y($e)(y(s).relativePath,n.item.activeMatch,!!n.item.activeMatch)||o.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),$a={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Sa=D({__name:"VPNavBarMenu",setup(e){const{theme:t}=K();return(s,i)=>y(t).nav?(m(),k("nav",$a,[i[0]||(i[0]=b("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(m(!0),k(J,null,oe(y(t).nav,o=>(m(),k(J,{key:JSON.stringify(o)},["link"in o?(m(),O(_a,{key:0,item:o},null,8,["item"])):"component"in o?(m(),O(ue(o.component),pe({key:1,ref_for:!0},o.props),null,16)):(m(),O(wa,{key:2,item:o},null,8,["item"]))],64))),128))])):A("",!0)}}),xa=H(Sa,[["__scopeId","data-v-23de4d95"]]);function za(e){const{localeIndex:t,theme:s}=K();function i(o){var h,g,_;const n=o.split("."),r=(h=s.value.search)==null?void 0:h.options,l=r&&typeof r=="object",a=l&&((_=(g=r.locales)==null?void 0:g[t.value])==null?void 0:_.translations)||null,c=l&&r.translations||null;let p=a,u=c,v=e;const f=n.pop();for(const d of n){let $=null;const z=v==null?void 0:v[d];z&&($=v=z);const T=u==null?void 0:u[d];T&&($=u=T);const E=p==null?void 0:p[d];E&&($=p=E),z||(v=$),T||(u=$),E||(p=$)}return(p==null?void 0:p[f])??(u==null?void 0:u[f])??(v==null?void 0:v[f])??""}return i}const La=["aria-label"],Ca={class:"DocSearch-Button-Container"},Ta={class:"DocSearch-Button-Placeholder"},ft=D({__name:"VPNavBarSearchButton",setup(e){const s=za({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(i,o)=>(m(),k("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":y(s)("button.buttonAriaLabel")},[b("span",Ca,[o[0]||(o[0]=b("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),b("span",Ta,X(y(s)("button.buttonText")),1)]),o[1]||(o[1]=b("span",{class:"DocSearch-Button-Keys"},[b("kbd",{class:"DocSearch-Button-Key"}),b("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,La))}}),Pa={class:"VPNavBarSearch"},Ea={id:"local-search"},Ma={key:1,id:"docsearch"},Ia=D({__name:"VPNavBarSearch",setup(e){const t=()=>null,s=Dt(()=>bt(()=>import("./VPAlgoliaSearchBox.BCcl3tG7.js"),__vite__mapDeps([0,1]))),{theme:i}=K(),o=W(!1),n=W(!1),r=()=>{const v="VPAlgoliaPreconnect";(window.requestIdleCallback||setTimeout)(()=>{var g;const h=document.createElement("link");h.id=v,h.rel="preconnect",h.href=`https://${(((g=i.value.search)==null?void 0:g.options)??i.value.algolia).appId}-dsn.algolia.net`,h.crossOrigin="",document.head.appendChild(h)})};me(()=>{r();const v=h=>{(h.key.toLowerCase()==="k"&&(h.metaKey||h.ctrlKey)||!c(h)&&h.key==="/")&&(h.preventDefault(),l(),f())},f=()=>{window.removeEventListener("keydown",v)};window.addEventListener("keydown",v),Be(f)});function l(){o.value||(o.value=!0,setTimeout(a,16))}function a(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||a()},16)}function c(v){const f=v.target,h=f.tagName;return f.isContentEditable||h==="INPUT"||h==="SELECT"||h==="TEXTAREA"}const p=W(!1),u="algolia";return(v,f)=>{var h;return m(),k("div",Pa,[y(u)==="local"?(m(),k(J,{key:0},[p.value?(m(),O(y(t),{key:0,onClose:f[0]||(f[0]=g=>p.value=!1)})):A("",!0),b("div",Ea,[M(ft,{onClick:f[1]||(f[1]=g=>p.value=!0)})])],64)):y(u)==="algolia"?(m(),k(J,{key:1},[o.value?(m(),O(y(s),{key:0,algolia:((h=y(i).search)==null?void 0:h.options)??y(i).algolia,onVnodeBeforeMount:f[2]||(f[2]=g=>n.value=!0)},null,8,["algolia"])):A("",!0),n.value?A("",!0):(m(),k("div",Ma,[M(ft,{onClick:l})]))],64)):A("",!0)])}}}),Va=D({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=K();return(s,i)=>y(t).socialLinks?(m(),O(lt,{key:0,class:"VPNavBarSocialLinks",links:y(t).socialLinks},null,8,["links"])):A("",!0)}}),Aa=H(Va,[["__scopeId","data-v-9157fd3e"]]),Da=["href","rel","target"],Ba=["innerHTML"],Oa={key:2},Na=D({__name:"VPNavBarTitle",setup(e){const{site:t,theme:s}=K(),{hasSidebar:i}=be(),{currentLang:o}=Me(),n=F(()=>{var a;return typeof s.value.logoLink=="string"?s.value.logoLink:(a=s.value.logoLink)==null?void 0:a.link}),r=F(()=>{var a;return typeof s.value.logoLink=="string"||(a=s.value.logoLink)==null?void 0:a.rel}),l=F(()=>{var a;return typeof s.value.logoLink=="string"||(a=s.value.logoLink)==null?void 0:a.target});return(a,c)=>(m(),k("div",{class:ee(["VPNavBarTitle",{"has-sidebar":y(i)}])},[b("a",{class:"title",href:n.value??y(ot)(y(o).link),rel:r.value,target:l.value},[w(a.$slots,"nav-bar-title-before",{},void 0,!0),y(s).logo?(m(),O(Ae,{key:0,class:"logo",image:y(s).logo},null,8,["image"])):A("",!0),y(s).siteTitle?(m(),k("span",{key:1,innerHTML:y(s).siteTitle},null,8,Ba)):y(s).siteTitle===void 0?(m(),k("span",Oa,X(y(t).title),1)):A("",!0),w(a.$slots,"nav-bar-title-after",{},void 0,!0)],8,Da)],2))}}),Ha=H(Na,[["__scopeId","data-v-08ac0f9e"]]),ja={class:"items"},Fa={class:"title"},qa=D({__name:"VPNavBarTranslations",setup(e){const{theme:t}=K(),{localeLinks:s,currentLang:i}=Me({correspondingLink:!0});return(o,n)=>y(s).length&&y(i).label?(m(),O(rt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:y(t).langMenuLabel||"Change language"},{default:S(()=>[b("div",ja,[b("p",Fa,X(y(i).label),1),(m(!0),k(J,null,oe(y(s),r=>(m(),O(Re,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):A("",!0)}}),Ra=H(qa,[["__scopeId","data-v-23ba6a69"]]),Ga={class:"wrapper"},Ua={class:"container"},Wa={class:"title"},Za={class:"content"},Ya={class:"content-body"},Ka=D({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:s}=gt(),{hasSidebar:i}=be(),{frontmatter:o}=K(),n=W({});return Qe(()=>{n.value={"has-sidebar":i.value,home:o.value.layout==="home",top:s.value===0,"screen-open":t.isScreenOpen}}),(r,l)=>(m(),k("div",{class:ee(["VPNavBar",n.value])},[b("div",Ga,[b("div",Ua,[b("div",Wa,[M(Ha,null,{"nav-bar-title-before":S(()=>[w(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":S(()=>[w(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),b("div",Za,[b("div",Ya,[w(r.$slots,"nav-bar-content-before",{},void 0,!0),M(Ia,{class:"search"}),M(xa,{class:"menu"}),M(Ra,{class:"translations"}),M(Vi,{class:"appearance"}),M(Aa,{class:"social-links"}),M(va,{class:"extra"}),w(r.$slots,"nav-bar-content-after",{},void 0,!0),M(ba,{class:"hamburger",active:r.isScreenOpen,onClick:l[0]||(l[0]=a=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),l[1]||(l[1]=b("div",{class:"divider"},[b("div",{class:"divider-line"})],-1))],2))}}),Xa=H(Ka,[["__scopeId","data-v-e4ca7055"]]),Ja={key:0,class:"VPNavScreenAppearance"},Qa={class:"text"},en=D({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:s}=K();return(i,o)=>y(t).appearance&&y(t).appearance!=="force-dark"&&y(t).appearance!=="force-auto"?(m(),k("div",Ja,[b("p",Qa,X(y(s).darkModeSwitchLabel||"Appearance"),1),M(at)])):A("",!0)}}),tn=H(en,[["__scopeId","data-v-90af9a35"]]),sn=["innerHTML"],on=D({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=He("close-screen");return(s,i)=>(m(),O(fe,{class:"VPNavScreenMenuLink",href:s.item.link,target:s.item.target,rel:s.item.rel,"no-icon":s.item.noIcon,onClick:y(t)},{default:S(()=>[b("span",{innerHTML:s.item.text},null,8,sn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),an=H(on,[["__scopeId","data-v-f9a6b651"]]),nn=["innerHTML"],rn=D({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=He("close-screen");return(s,i)=>(m(),O(fe,{class:"VPNavScreenMenuGroupLink",href:s.item.link,target:s.item.target,rel:s.item.rel,"no-icon":s.item.noIcon,onClick:y(t)},{default:S(()=>[b("span",{innerHTML:s.item.text},null,8,nn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Lt=H(rn,[["__scopeId","data-v-e03d7d08"]]),ln={class:"VPNavScreenMenuGroupSection"},cn={key:0,class:"title"},dn=D({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,s)=>(m(),k("div",ln,[t.text?(m(),k("p",cn,X(t.text),1)):A("",!0),(m(!0),k(J,null,oe(t.items,i=>(m(),O(Lt,{key:i.text,item:i},null,8,["item"]))),128))]))}}),un=H(dn,[["__scopeId","data-v-fdd54012"]]),mn=["aria-controls","aria-expanded"],pn=["innerHTML"],fn=["id"],vn={key:0,class:"item"},hn={key:1,class:"item"},gn={key:2,class:"group"},bn=D({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,s=W(!1),i=F(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function o(){s.value=!s.value}return(n,r)=>(m(),k("div",{class:ee(["VPNavScreenMenuGroup",{open:s.value}])},[b("button",{class:"button","aria-controls":i.value,"aria-expanded":s.value,onClick:o},[b("span",{class:"button-text",innerHTML:n.text},null,8,pn),r[0]||(r[0]=b("span",{class:"vpi-plus button-icon"},null,-1))],8,mn),b("div",{id:i.value,class:"items"},[(m(!0),k(J,null,oe(n.items,l=>(m(),k(J,{key:JSON.stringify(l)},["link"in l?(m(),k("div",vn,[M(Lt,{item:l},null,8,["item"])])):"component"in l?(m(),k("div",hn,[(m(),O(ue(l.component),pe({ref_for:!0},l.props,{"screen-menu":""}),null,16))])):(m(),k("div",gn,[M(un,{text:l.text,items:l.items},null,8,["text","items"])]))],64))),128))],8,fn)],2))}}),yn=H(bn,[["__scopeId","data-v-4fab4037"]]),kn={key:0,class:"VPNavScreenMenu"},_n=D({__name:"VPNavScreenMenu",setup(e){const{theme:t}=K();return(s,i)=>y(t).nav?(m(),k("nav",kn,[(m(!0),k(J,null,oe(y(t).nav,o=>(m(),k(J,{key:JSON.stringify(o)},["link"in o?(m(),O(an,{key:0,item:o},null,8,["item"])):"component"in o?(m(),O(ue(o.component),pe({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(m(),O(yn,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):A("",!0)}}),wn=D({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=K();return(s,i)=>y(t).socialLinks?(m(),O(lt,{key:0,class:"VPNavScreenSocialLinks",links:y(t).socialLinks},null,8,["links"])):A("",!0)}}),$n={class:"list"},Sn=D({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:s}=Me({correspondingLink:!0}),i=W(!1);function o(){i.value=!i.value}return(n,r)=>y(t).length&&y(s).label?(m(),k("div",{key:0,class:ee(["VPNavScreenTranslations",{open:i.value}])},[b("button",{class:"title",onClick:o},[r[0]||(r[0]=b("span",{class:"vpi-languages icon lang"},null,-1)),ce(" "+X(y(s).label)+" ",1),r[1]||(r[1]=b("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),b("ul",$n,[(m(!0),k(J,null,oe(y(t),l=>(m(),k("li",{key:l.link,class:"item"},[M(fe,{class:"link",href:l.link},{default:S(()=>[ce(X(l.text),1)]),_:2},1032,["href"])]))),128))])],2)):A("",!0)}}),xn=H(Sn,[["__scopeId","data-v-2016c158"]]),zn={class:"container"},Ln=D({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=W(null),s=yt(je?document.body:null);return(i,o)=>(m(),O(Xe,{name:"fade",onEnter:o[0]||(o[0]=n=>s.value=!0),onAfterLeave:o[1]||(o[1]=n=>s.value=!1)},{default:S(()=>[i.open?(m(),k("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[b("div",zn,[w(i.$slots,"nav-screen-content-before",{},void 0,!0),M(_n,{class:"menu"}),M(xn,{class:"translations"}),M(tn,{class:"appearance"}),M(wn,{class:"social-links"}),w(i.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):A("",!0)]),_:3}))}}),Cn=H(Ln,[["__scopeId","data-v-9fded8ff"]]),Tn={key:0,class:"VPNav"},Pn=D({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:s,toggleScreen:i}=Si(),{frontmatter:o}=K(),n=F(()=>o.value.navbar!==!1);return kt("close-screen",s),De(()=>{je&&document.documentElement.classList.toggle("hide-nav",!n.value)}),(r,l)=>n.value?(m(),k("header",Tn,[M(Xa,{"is-screen-open":y(t),onToggleScreen:y(i)},{"nav-bar-title-before":S(()=>[w(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":S(()=>[w(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":S(()=>[w(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":S(()=>[w(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),M(Cn,{open:y(t)},{"nav-screen-content-before":S(()=>[w(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":S(()=>[w(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):A("",!0)}}),En=H(Pn,[["__scopeId","data-v-c0bcc968"]]),Mn=["role","tabindex"],In={key:1,class:"items"},Vn=D({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:s,collapsible:i,isLink:o,isActiveLink:n,hasActiveLink:r,hasChildren:l,toggle:a}=Ls(F(()=>t.item)),c=F(()=>l.value?"section":"div"),p=F(()=>o.value?"a":"div"),u=F(()=>l.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),v=F(()=>o.value?void 0:"button"),f=F(()=>[[`level-${t.depth}`],{collapsible:i.value},{collapsed:s.value},{"is-link":o.value},{"is-active":n.value},{"has-active":r.value}]);function h(_){"key"in _&&_.key!=="Enter"||!t.item.link&&a()}function g(){t.item.link&&a()}return(_,d)=>{const $=ae("VPSidebarItem",!0);return m(),O(ue(c.value),{class:ee(["VPSidebarItem",f.value])},{default:S(()=>[_.item.text?(m(),k("div",pe({key:0,class:"item",role:v.value},Bt(_.item.items?{click:h,keydown:h}:{},!0),{tabindex:_.item.items&&0}),[d[1]||(d[1]=b("div",{class:"indicator"},null,-1)),_.item.link?(m(),O(fe,{key:0,tag:p.value,class:"link",href:_.item.link,rel:_.item.rel,target:_.item.target},{default:S(()=>[(m(),O(ue(u.value),{class:"text",innerHTML:_.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(m(),O(ue(u.value),{key:1,class:"text",innerHTML:_.item.text},null,8,["innerHTML"])),_.item.collapsed!=null&&_.item.items&&_.item.items.length?(m(),k("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:g,onKeydown:Ot(g,["enter"]),tabindex:"0"},d[0]||(d[0]=[b("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):A("",!0)],16,Mn)):A("",!0),_.item.items&&_.item.items.length?(m(),k("div",In,[_.depth<5?(m(!0),k(J,{key:0},oe(_.item.items,z=>(m(),O($,{key:z.text,item:z,depth:_.depth+1},null,8,["item","depth"]))),128)):A("",!0)])):A("",!0)]),_:1},8,["class"])}}}),An=H(Vn,[["__scopeId","data-v-4e6b587d"]]),Dn=D({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=W(!0);let s=null;return me(()=>{s=setTimeout(()=>{s=null,t.value=!1},300)}),Fe(()=>{s!=null&&(clearTimeout(s),s=null)}),(i,o)=>(m(!0),k(J,null,oe(i.items,n=>(m(),k("div",{key:n.text,class:ee(["group",{"no-transition":t.value}])},[M(An,{item:n,depth:0},null,8,["item"])],2))),128))}}),Bn=H(Dn,[["__scopeId","data-v-1b2ade85"]]),On={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Nn=D({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:s}=be(),i=e,o=W(null),n=yt(je?document.body:null);ve([i,o],()=>{var l;i.open?(n.value=!0,(l=o.value)==null||l.focus()):n.value=!1},{immediate:!0,flush:"post"});const r=W(0);return ve(t,()=>{r.value+=1},{deep:!0}),(l,a)=>y(s)?(m(),k("aside",{key:0,class:ee(["VPSidebar",{open:l.open}]),ref_key:"navEl",ref:o,onClick:a[0]||(a[0]=Nt(()=>{},["stop"]))},[a[2]||(a[2]=b("div",{class:"curtain"},null,-1)),b("nav",On,[a[1]||(a[1]=b("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),w(l.$slots,"sidebar-nav-before",{},void 0,!0),(m(),O(Bn,{items:y(t),key:r.value},null,8,["items"])),w(l.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):A("",!0)}}),Hn=H(Nn,[["__scopeId","data-v-d275b84f"]]),jn=D({__name:"VPSkipLink",setup(e){const t=Ne(),s=W();ve(()=>t.path,()=>s.value.focus());function i({target:o}){const n=document.getElementById(decodeURIComponent(o.hash).slice(1));if(n){const r=()=>{n.removeAttribute("tabindex"),n.removeEventListener("blur",r)};n.setAttribute("tabindex","-1"),n.addEventListener("blur",r),n.focus(),window.scrollTo(0,0)}}return(o,n)=>(m(),k(J,null,[b("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),b("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:i}," Skip to content ")],64))}}),Fn=H(jn,[["__scopeId","data-v-1500b763"]]),qn=D({__name:"Layout",setup(e){const{isOpen:t,open:s,close:i}=be(),o=Ne();ve(()=>o.path,i),zs(t,i);const{frontmatter:n}=K(),r=Ht(),l=F(()=>!!r["home-hero-image"]);return kt("hero-image-slot-exists",l),(a,c)=>{const p=ae("Content");return y(n).layout!==!1?(m(),k("div",{key:0,class:ee(["Layout",y(n).pageClass])},[w(a.$slots,"layout-top",{},void 0,!0),M(Fn),M(ps,{class:"backdrop",show:y(t),onClick:y(i)},null,8,["show","onClick"]),M(En,null,{"nav-bar-title-before":S(()=>[w(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":S(()=>[w(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":S(()=>[w(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":S(()=>[w(a.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":S(()=>[w(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":S(()=>[w(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),M($i,{open:y(t),onOpenMenu:y(s)},null,8,["open","onOpenMenu"]),M(Hn,{open:y(t)},{"sidebar-nav-before":S(()=>[w(a.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":S(()=>[w(a.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),M(ri,null,{"page-top":S(()=>[w(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":S(()=>[w(a.$slots,"page-bottom",{},void 0,!0)]),"not-found":S(()=>[w(a.$slots,"not-found",{},void 0,!0)]),"home-hero-before":S(()=>[w(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":S(()=>[w(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":S(()=>[w(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":S(()=>[w(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":S(()=>[w(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":S(()=>[w(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":S(()=>[w(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":S(()=>[w(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":S(()=>[w(a.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":S(()=>[w(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":S(()=>[w(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":S(()=>[w(a.$slots,"doc-after",{},void 0,!0)]),"doc-top":S(()=>[w(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":S(()=>[w(a.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":S(()=>[w(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":S(()=>[w(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":S(()=>[w(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":S(()=>[w(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":S(()=>[w(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":S(()=>[w(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),M(mi),w(a.$slots,"layout-bottom",{},void 0,!0)],2)):(m(),O(p,{key:1}))}}}),Rn=H(qn,[["__scopeId","data-v-8c9249ff"]]),Gn={Layout:Rn,enhanceApp:({app:e})=>{e.component("Badge",ds)}},Un={class:"content"},Wn={class:"expand-code-content"},Zn=D({__name:"index",props:{title:{default:void 0},expanded:{type:Boolean,default:!0}},setup(e){const s=W(e.expanded);return(i,o)=>{const n=ae("ClientOnly"),r=ae("DemoCardExpand"),l=ae("DemoCard");return m(),O(l,{elevation:!1,bordered:"",block:"","no-padding":"","footer-align":"left"},jt({operate:S(()=>[b("div",{class:ee({"block-operate":i.$slots.operate})},[w(i.$slots,"operate")],2)]),content:S(()=>[b("div",Un,[M(n,null,{default:S(()=>[w(i.$slots,"default")]),_:3})])]),_:2},[i.$slots.code?{name:"footer",fn:S(()=>[b("button",{class:ee(["block-button",{"block-button-show":s.value}]),onClick:o[0]||(o[0]=a=>s.value=!s.value)},[o[2]||(o[2]=b("span",{class:"button-left"},[b("svg",{width:"1.3em",height:"1.3em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[b("path",{d:"M17.25 6.75L22.5 12L17.25 17.25M6.75 17.25L1.5 12L6.75 6.75M14.25 3.75L9.75 20.25",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),ce(" View Code ")],-1)),(m(),k("svg",{class:ee([{"button-icon-rotate":!s.value},"button-icon"]),width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o[1]||(o[1]=[b("path",{d:"M4.5 15.75L12 8.25L19.5 15.75",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]),2))],2),M(r,null,{default:S(()=>[Ft(b("div",null,[b("div",Wn,[w(i.$slots,"code")])],512),[[qt,s.value]])]),_:3})]),key:"0"}:void 0]),1024)}}}),Yn={},Kn={class:"zebra-card"},Xn={class:"card-operate"},Jn={class:"card-content"},Qn={key:0,class:"zebra-card__footer"};function er(e,t){return m(),k("div",Kn,[b("div",Xn,[w(e.$slots,"operate",{},void 0,!0)]),b("div",Jn,[w(e.$slots,"content",{},void 0,!0)]),e.$slots.footer?(m(),k("div",Qn,[w(e.$slots,"footer",{},void 0,!0)])):A("",!0)])}const tr=H(Yn,[["render",er],["__scopeId","data-v-6d22e63c"]]),sr=D({__name:"expand",setup(e){function t(o){const n=getComputedStyle(o).width;o.style.width=n,o.style.position="absolute",o.style.visibility="hidden",o.style.height="auto",o.style.top="bottom";const r=getComputedStyle(o).height;o.style.width="",o.style.position="",o.style.visibility="",o.style.height="0px",getComputedStyle(o).height,Ve(()=>{o.style.height=r})}function s(o){o.style.height="auto"}function i(o){const n=getComputedStyle(o).height;o.style.height=n,getComputedStyle(o).height,Ve(()=>{o.style.height="0px"})}return(o,n)=>(m(),O(Rt,{class:"zebra-transition-expand",name:"zebra-expand",tag:"div",onEnter:n[0]||(n[0]=r=>t(r)),onAfterEnter:n[1]||(n[1]=r=>s(r)),onLeave:n[2]||(n[2]=r=>i(r))},{default:S(()=>[w(o.$slots,"default")]),_:3}))}}),or=D({__name:"index",props:{text:String,width:{type:String,default:"100%"},height:{type:String,default:"200px"}},setup(e){const t=e,s=F(()=>({width:t.width,height:t.height,backgroundColor:i()})),i=()=>{const o="0123456789ABCDEF";let n="#";for(let r=0;r<6;r++)n+=o[Math.floor(Math.random()*16)];return n};return(o,n)=>(m(),k("div",{class:"swiper-item-content",style:ze(s.value)},X(e.text),5))}}),ir=H(or,[["__scopeId","data-v-6f9df261"]]),ar={class:"zebra-conponent-info"},nr={class:"info-item"},rr={class:"item-value"},lr={class:"info-item"},cr={class:"item-value"},dr={key:0,class:"info-item"},ur=D({__name:"info",props:{type:{type:String},value:[String,Number],options:{type:Array,default:()=>[]}},setup(e){const t=e;return(s,i)=>(m(),k("div",ar,[b("div",nr,[i[0]||(i[0]=b("div",{class:"item-text"},"类型",-1)),b("div",rr,X(t.type),1)]),b("div",lr,[i[1]||(i[1]=b("div",{class:"item-text"},"默认值",-1)),b("div",cr,X(t.value),1)]),t.options.length?(m(),k("div",dr,[i[2]||(i[2]=b("div",{class:"item-text"},"可选项",-1)),(m(!0),k(J,null,oe(t.options,(o,n)=>(m(),k("div",{class:"item-value",key:n},X(o),1))),128))])):A("",!0)]))}}),mr=H(ur,[["__scopeId","data-v-b971a2d4"]]),pr=["disabled"],fr={key:0,class:"demo-button__loading"},vr={key:1,class:"demo-button__icon"},hr={class:"demo-button__content"},gr=D({__name:"index",props:{type:{default:"default"},size:{default:"default"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const s=e,i=t,o=n=>{s.disabled||s.loading||i("click",n)};return(n,r)=>(m(),k("button",{class:ee(["demo-button",`demo-button--${n.type}`,`demo-button--${n.size}`,{"is-disabled":n.disabled,"is-loading":n.loading}]),disabled:n.disabled||n.loading,onClick:o},[n.loading?(m(),k("span",fr,r[0]||(r[0]=[b("span",{class:"demo-button__loading-indicator"},null,-1)]))):A("",!0),n.icon&&!n.loading?(m(),k("span",vr,[w(n.$slots,"icon",{},void 0,!0)])):A("",!0),b("span",hr,[w(n.$slots,"default",{},void 0,!0)])],10,pr))}}),br=H(gr,[["__scopeId","data-v-122fccc4"]]),yr={class:"z-animated-text"},kr={class:"z-animated-text__last-word-inner"},_r={class:"z-animated-text__last-word-inner-text"},wr=D({inheritAttrs:!1,__name:"text",props:{text:{},lastWord:{},delay:{default:0},direction:{default:"up"},tag:{default:"span"},wordDelay:{default:75},columnGap:{default:.5},rowGap:{default:0},duration:{default:2e3},once:{type:Boolean,default:!0}},setup(e){const t=F(()=>e.text.split(" ")),s=F(()=>t.value.length),i=W(!1),o=W(!1),n=F(()=>i.value?`zebra-animate-slide-${e.direction}-blur`:"zebra-invisible"),r=W();let l=null;me(()=>{o.value=!0,l=new IntersectionObserver(([c])=>{i.value=c.isIntersecting,e.once&&r.value&&(l==null||l.unobserve(r.value))}),a(()=>r.value,c=>{l==null||l.observe(c)})}),Fe(()=>l==null?void 0:l.disconnect());function a(c,p,u){const v={maxAttempts:20,interval:100,...u};let f=0;function h(){const g=c();g!=null?v.expectedValue!==void 0&&g!==v.expectedValue?f<v.maxAttempts&&(f++,setTimeout(h,v.interval)):p(g):f<v.maxAttempts&&(f++,setTimeout(h,v.interval))}h()}return(c,p)=>(m(),k("div",yr,[o.value?(m(),O(ue(c.tag),pe({key:0,ref_key:"element",ref:r},c.$attrs,{class:"z-animated-text__root",style:{columnGap:`${c.columnGap}rem`,rowGap:`${c.rowGap}rem`}}),{default:S(()=>[(m(!0),k(J,null,oe(t.value,(u,v)=>(m(),k("span",{key:u+v,class:"z-animated-text__word"},[b("span",{class:ee(["z-animated-text__word-inner",n.value]),style:ze({animationDelay:`${c.delay+v*(c.wordDelay??150)}ms`,animationDuration:`${c.duration}ms`})},X(u),7)]))),128)),c.lastWord?(m(),k("span",{key:0,class:ee(["z-animated-text__last-word",n.value]),style:ze({animationDelay:`${c.delay+s.value*(c.wordDelay??150)}ms`,animationDuration:`${c.duration}ms`})},[b("span",kr,[p[0]||(p[0]=b("span",{class:"z-animated-text__last-word-inner-gradient"},null,-1)),b("span",_r,X(c.lastWord),1)])],6)):A("",!0)]),_:1},16,["style"])):(m(),O(ue(c.tag),pe({key:1},c.$attrs,{class:"zebra-invisible zebra-inline-flex"}),{default:S(()=>[ce(X(c.text)+" ",1),c.lastWord?(m(),k(J,{key:0},[ce(X(c.lastWord),1)],64)):A("",!0)]),_:1},16))]))}}),$r=H(wr,[["__scopeId","data-v-bc41c864"]]),Sr=D({__name:"element",props:{direction:{default:"up"},delay:{default:0},duration:{default:2e3},once:{type:Boolean,default:!0}},setup(e){const t=F(()=>`animate-slide-${e.direction}-blur`),s=W();let i=null;return me(()=>{i=new IntersectionObserver(([o])=>{o.isIntersecting?(o.target.classList.remove("--invisible"),o.target.classList.add(t.value),e.once===!0&&(i==null||i.unobserve(o.target))):e.once===!1&&(o.target.classList.add("--invisible"),o.target.classList.remove(t.value))}),s.value&&i.observe(s.value)}),Fe(()=>i==null?void 0:i.disconnect()),(o,n)=>(m(),k("div",{ref_key:"element",ref:s,class:"z-animated-element --invisible",style:ze({animationDuration:`${o.duration}ms`,animationDelay:`${o.delay}ms`})},[w(o.$slots,"default",{},void 0,!0)],4))}}),xr=H(Sr,[["__scopeId","data-v-604b1639"]]),zr=D({__name:"counter",props:{count:{},duration:{default:1e3},prefix:{default:void 0},suffix:{default:void 0},delay:{default:100},once:{type:Boolean,default:!0}},setup(e){function t(){return typeof document<"u"}const s=e,i=W(0),o=W(null);function n(){return!t()||!window.requestAnimationFrame?c=>(setTimeout(c,1e3/60),0):window.requestAnimationFrame.bind(window)}function r(c,p,u,v){const f=n();if(!t()){i.value=p;return}i.value=c,setTimeout(()=>{const h=performance.now(),g=(_=performance.now())=>{const d=_-h,$=Math.min(d/u,1),z=T=>T*(2-T);i.value=Math.round(c+(p-c)*z($)),$<1&&f(g)};f(g)},v)}function l(c,p){r(c,p,s.duration,s.delay)}let a=null;return me(()=>{s.once||(a=new IntersectionObserver(([c])=>{c.isIntersecting&&(l(0,s.count),s.once&&(a==null||a.unobserve(c.target)))}),o.value&&a.observe(o.value))}),Fe(()=>a==null?void 0:a.disconnect()),ve(()=>s.count,(c,p)=>{if(c===p)return;l(p??0,c)},{immediate:!0}),(c,p)=>(m(),k("span",{ref_key:"elementRef",ref:o,class:"z-animated-counter"},[w(c.$slots,"prefix",{},()=>[ce(X(c.prefix),1)],!0),ce(X(i.value),1),w(c.$slots,"suffix",{},()=>[ce(X(c.suffix),1)],!0)],512))}}),Lr=H(zr,[["__scopeId","data-v-4c49ab2a"]]),Cr={class:"zebra-card-show"},Tr={class:"show-item"},Pr={class:"show-item"},Er={class:"show-item"},Mr={class:"show-item"},Ir={class:"show-item"},Vr={class:"show-item"},Ar=D({__name:"index",setup(e){const t=W([ns,cs,ts,rs,ls]),s=W(Array.from({length:5}).map((r,l)=>({text:`Slide ${l+1}`,id:l+1}))),i=he({prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}),o=he({prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}}),n=he({prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}});return(r,l)=>{const a=ae("DemoItem"),c=ae("z-swiper-item"),p=ae("z-swiper");return m(),k("div",Cr,[b("div",Tr,[M(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"cube",modules:t.value,"custom-style":{height:"200px",width:"80%"}},{default:S(()=>[(m(!0),k(J,null,oe(s.value,u=>(m(),O(c,{key:u.id},{default:S(()=>[M(a,{class:"demo-item",text:u.text,height:"100%"},null,8,["text"])]),_:2},1024))),128))]),_:1},8,["modules"])]),b("div",Pr,[M(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"creative",modules:t.value,creativeEffect:i,"custom-style":{height:"200px",width:"80%"}},{default:S(()=>[(m(!0),k(J,null,oe(s.value,u=>(m(),O(c,{key:u.id},{default:S(()=>[M(a,{class:"demo-item",text:u.text,height:"100%"},null,8,["text"])]),_:2},1024))),128))]),_:1},8,["modules","creativeEffect"])]),b("div",Er,[M(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"creative",modules:t.value,creativeEffect:o,"custom-style":{height:"200px",width:"80%"}},{default:S(()=>[(m(!0),k(J,null,oe(s.value,u=>(m(),O(c,{key:u.id},{default:S(()=>[M(a,{class:"demo-item",text:u.text,height:"100%"},null,8,["text"])]),_:2},1024))),128))]),_:1},8,["modules","creativeEffect"])]),b("div",Mr,[M(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"creative",modules:t.value,creativeEffect:n,"custom-style":{height:"200px",width:"80%"}},{default:S(()=>[(m(!0),k(J,null,oe(s.value,u=>(m(),O(c,{key:u.id},{default:S(()=>[M(a,{class:"demo-item",text:u.text,height:"100%"},null,8,["text"])]),_:2},1024))),128))]),_:1},8,["modules","creativeEffect"])]),b("div",Ir,[M(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"coverflow",modules:t.value,"custom-style":{height:"200px",width:"80%"}},{default:S(()=>[(m(!0),k(J,null,oe(s.value,u=>(m(),O(c,{key:u.id},{default:S(()=>[M(a,{class:"demo-item",text:u.text,height:"100%"},null,8,["text"])]),_:2},1024))),128))]),_:1},8,["modules"])]),b("div",Vr,[M(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"flip",modules:t.value,"custom-style":{height:"200px",width:"80%"}},{default:S(()=>[(m(!0),k(J,null,oe(s.value,u=>(m(),O(c,{key:u.id},{default:S(()=>[M(a,{class:"demo-item",text:u.text,height:"100%"},null,8,["text"])]),_:2},1024))),128))]),_:1},8,["modules"])])])}}}),Dr={class:"zebra-card-home"},Br={id:"hero",class:"z-container"},Or={class:"title"},Nr={class:"animate-oprate"},Hr={key:0,class:"oprate-content content-right",href:"https://github.com/zebra-ui/zebra-swiper",target:"blank"},jr={key:0,class:"animate-button"},Fr={width:"1em",height:"1em",class:"content-svg",style:{"margin-left":"10px"},viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},qr=D({__name:"index",setup(e){async function t(){try{const i=await fetch("https://ungh.cc/repos/zebra-ui/zebra-swiper");if(!i.ok)throw new Error(`HTTP error status: ${i.status}`);return(await i.json()).repo.stars}catch(i){return console.error("Erreur lors de la récupération des données:",i),null}}const s=W(0);return t().then(i=>{s.value=i}),(i,o)=>{const n=ae("AnimatedText"),r=ae("AnimatedCounter"),l=ae("AnimatedElement"),a=ae("DemoShow"),c=ae("ClientOnly");return m(),k("div",Dr,[b("section",Br,[b("div",Or,[M(n,{text:"A 3D carousel component library based on vue, customizing the carousel style you like",direction:"down",delay:0,tag:"h2",class:"text-top",duration:2e3,"column-gap":.2}),M(n,{text:"Carousel styles with rich effects for","last-word":"Vue & Uniapp",direction:"down",delay:500,tag:"h1",class:"text-bottom"})]),M(l,{delay:1e3},{default:S(()=>[b("div",Nr,[o[2]||(o[2]=b("a",{class:"oprate-content",href:"/guide/introduce"},[b("svg",{width:"1em",height:"1em",class:"content-svg",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[b("path",{d:"M5.25 5.65273C5.25 4.79705 6.1674 4.25462 6.91716 4.66698L18.4577 11.0143C19.2349 11.4417 19.2349 12.5584 18.4577 12.9858L6.91716 19.3331C6.1674 19.7455 5.25 19.203 5.25 18.3474V5.65273Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),ce(" Get Started ")],-1)),s.value?(m(),k("a",Hr,[s.value?(m(),k("div",jr,[o[1]||(o[1]=b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",class:"content-svg",viewBox:"0 0 1024 1024",fill:"currentColor"},[b("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",transform:"scale(64)",fill:"currentColor"})],-1)),M(r,{delay:1250,count:s.value,class:"content-svg",style:{"margin-left":"10px"}},null,8,["count"]),(m(),k("svg",Fr,o[0]||(o[0]=[b("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z","clip-rule":"evenodd"},null,-1)])))])):A("",!0)])):A("",!0)])]),_:1}),M(l,{delay:1250},{default:S(()=>o[3]||(o[3]=[b("div",{class:"button-group"},[b("a",{class:"button-group-item",href:"/api/components"},"Components"),b("a",{class:"button-group-item",href:"/api/property"},"Propertys"),b("a",{class:"button-group-item",href:"/api/methods"},"Methods"),b("a",{class:"button-group-item",href:"/api/events"},"Events")],-1)])),_:1}),M(l,{delay:1500},{default:S(()=>[M(c,null,{default:S(()=>[M(a)]),_:1})]),_:1})])])}}}),Rr=H(qr,[["__scopeId","data-v-0ed9d8f4"]]),Gr=`
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
<\/script>
<style lang="scss">
@use "@zebra-ui/swiper/index";
@use "@zebra-ui/swiper/modules/pagination/pagination";
@use "@zebra-ui/swiper/modules/navigation/navigation";
@use "@zebra-ui/swiper/modules/scrollbar/scrollbar";
@use "@zebra-ui/swiper/modules/effect-fade/effect-fade";
@use "@zebra-ui/swiper/modules/effect-flip/effect-flip";
@use "@zebra-ui/swiper/modules/effect-cards/effect-cards";
@use "@zebra-ui/swiper/modules/effect-cube/effect-cube";
@use "@zebra-ui/swiper/modules/effect-creative/effect-creative";
@use "@zebra-ui/swiper/modules/virtual/virtual";

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

page {
  background-color: #e4ebf5;
}

.demo-swiper {
  padding-bottom: 16rpx;
}
</style>
      `,Ur=`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
      var coverSupport =
        "CSS" in window &&
        typeof CSS.supports === "function" &&
        (CSS.supports("top: env(a)") || CSS.supports("top: constant(a)"));
      document.write(
        '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' +
          (coverSupport ? ", viewport-fit=cover" : "") +
          '" />'
      );
    <\/script>
    <title></title>
    <!--preload-links-->
    <!--app-context-->
  </head>
  <body>
    <div id="app"><!--app-html--></div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>
          `,Wr=e=>({name:`zebra-swiper-${e}`,license:"MIT",scripts:{dev:"uni"},dependencies:{"@dcloudio/uni-app":"3.0.0-4030620241128001","@dcloudio/uni-app-harmony":"3.0.0-4030620241128001","@dcloudio/uni-app-plus":"3.0.0-4030620241128001","@dcloudio/uni-components":"3.0.0-4030620241128001","@dcloudio/uni-h5":"3.0.0-4030620241128001","@dcloudio/uni-mp-alipay":"3.0.0-4030620241128001","@dcloudio/uni-mp-baidu":"3.0.0-4030620241128001","@dcloudio/uni-mp-jd":"3.0.0-4030620241128001","@dcloudio/uni-mp-kuaishou":"3.0.0-4030620241128001","@dcloudio/uni-mp-lark":"3.0.0-4030620241128001","@dcloudio/uni-mp-qq":"3.0.0-4030620241128001","@dcloudio/uni-mp-toutiao":"3.0.0-4030620241128001","@dcloudio/uni-mp-weixin":"3.0.0-4030620241128001","@dcloudio/uni-mp-xhs":"3.0.0-4030620241128001","@dcloudio/uni-quickapp-webview":"3.0.0-4030620241128001",vue:"^3.4.21","vue-i18n":"^9.1.9","@zebra-ui/swiper":"3.0.0"},devDependencies:{"@dcloudio/types":"^3.4.8","@dcloudio/uni-automator":"3.0.0-4030620241128001","@dcloudio/uni-cli-shared":"3.0.0-4030620241128001","@dcloudio/uni-stacktracey":"3.0.0-4030620241128001","@dcloudio/vite-plugin-uni":"3.0.0-4030620241128001","@vue/tsconfig":"^0.1.3","@vue/runtime-core":"^3.4.21",typescript:"^4.9.4",vite:"5.2.8","vue-tsc":"^1.0.24",sass:"^1.83.0"}}),Zr=`
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
  plugins: [uni()]
})
        `,Yr=`
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "zebra-swiper"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "zebra-swiper",
    "navigationBarBackgroundColor": "#e4ebf5",
    "backgroundColor": "#e4ebf5"
  }
}
`,Kr=`
import { createSSRApp } from 'vue'
import App from './App.vue'
import DemoBlock from '@/components/DemoBlock/DemoBlock.vue'
import DemoItem from '@/components/DemoItem/DemoItem.vue'
import ZSwiper from '@zebra-ui/swiper/components/z-swiper/z-swiper.vue'
import ZSwiperItem from '@zebra-ui/swiper/components/z-swiper-item/z-swiper-item.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('DemoBlock', DemoBlock)
  app.component('DemoItem', DemoItem)
  app.component('ZSwiper', ZSwiper)
  app.component('ZSwiperItem', ZSwiperItem)
  return {
    app
  }
}
`,Xr=`
{
  "name": "",
  "appid": "",
  "description": "",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3,
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "modules": {},
    "distribute": {
      "android": {},
      "ios": {},
      "sdkConfigs": {}
    }
  },
  "quickapp": {},
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false
    },
    "usingComponents": true
  },
  "mp-alipay": {
    "usingComponents": true
  },
  "mp-baidu": {
    "usingComponents": true
  },
  "mp-toutiao": {
    "usingComponents": true
  },
  "uniStatistics": {
    "enable": false
  },
  "vueVersion": "3"
}
`,Jr=`
<template>
  <view class="zebra-doc-demo-block">
    <view v-if="props.title" class="zebra-doc-demo-block__title">{{
      props.title
    }}</view>
    <view v-if="props.card" class="zebra-doc-demo-block__card">
      <slot />
    </view>
    <slot v-else />
  </view>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Boolean,
    default: true
  },
  title: String
})
<\/script>

<style lang="scss">
.zebra-doc-demo-block {
  margin: 30rpx;
  overflow: hidden;
  background: #e4ebf5;
  border-radius: 10rpx;
  box-shadow:
    10rpx 10rpx 20rpx #cbd1da,
    -10rpx -10rpx 20rpx #fdffff;

  &__title {
    padding: 30rpx;
    margin: 0;
    font-size: 28rpx;
    font-weight: normal;
    line-height: 32rpx;
    color: rgb(69 90 100 / 60%);
    border-bottom: 2rpx solid #f7f8fa;
  }

  &__card {
    padding: 30rpx;
  }

  &__title + &__card {
    margin-top: 0;
  }
}
</style>

`,Qr=`
<template>
  <view class="item" :style="[getStyle()]">
    {{ item.text }}
  </view>
</template>

<script setup>
const props = defineProps({
  item: {
    type: [Object, String],
    default: () => {}
  },
  height: {
    type: String,
    default: '300rpx'
  },
  customStyle: {
    type: Object,
    default: () => {}
  }
})

const getStyle = () => {
  return {
    background: props.item.background,
    height: props.height,
    ...props.customStyle
  }
}
<\/script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
}
</style>
`,el=`
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default [
  {
    id: generateUUID(),
    background: '#213DD3',
    text: 'slide1'
  },
  {
    id: generateUUID(),
    background: '#7ED321',
    text: 'slide2'
  },
  {
    id: generateUUID(),
    background: '#D32160',
    text: 'slide3'
  },
  {
    id: generateUUID(),
    background: '#D36021',
    text: 'slide4'
  },
  {
    id: generateUUID(),
    background: '#50E3C2',
    text: 'slide5'
  }
]
`,tl=`
import { ZSwiper, ZSwiperItem } from '@zebra-ui/swiper'

declare module 'vue' {
  export interface GlobalComponents {
    ZSwiper: typeof ZSwiper
    ZSwiperItem: typeof ZSwiperItem
  }
}
`,sl=`
<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper autoplay :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="时间间隔">
      <z-swiper :autoplay="{ delay: 1000 }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动停止">
      <z-swiper :autoplay="{ stopOnLastSlide: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="loopList" autoplay loop :modules="modules">
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反向">
      <z-swiper :autoplay="{ reverseDirection: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autoplay } from '@zebra-ui/swiper/modules'
import type { SwiperModule } from '@zebra-ui/swiper/types/shared'
import data from '../../common/js/data.js'
const list = ref([...data])
const loopList = ref([...data])
const modules = ref<SwiperModule[]>([Autoplay])
<\/script>
`,ol=`
<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper>
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="监听事件">
      <z-swiper @slide-change="onChange">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper :custom-style="{ height: '300rpx' }" direction="vertical">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="切换速度">
      <z-swiper :speed="3000">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="禁用">
      <z-swiper :enabled="false">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="高度自适应">
      <z-swiper auto-height>
        <z-swiper-item>
          <demo-item :item="list[0]" height="200rpx"></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item :item="list[1]" height="400rpx"></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item :item="list[2]" height="500rpx"></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item :item="list[3]" height="300rpx"></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item :item="list[4]" height="100rpx"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="嵌套轮播">
      <z-swiper>
        <z-swiper-item>
          <demo-item
            :item="{ text: 'Parent1' }"
            :custom-style="{ background: '#1b2b33' }"
          ></demo-item>
        </z-swiper-item>
        <z-swiper-item>
          <z-swiper nested :resistanceRatio="0">
            <z-swiper-item v-for="item in list" :key="item.id">
              <demo-item :item="item"></demo-item>
            </z-swiper-item>
          </z-swiper>
        </z-swiper-item>
        <z-swiper-item>
          <demo-item
            :item="{ text: 'Parent2' }"
            :custom-style="{ background: '#0b2b33' }"
          ></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../common/js/data.js'
const list = ref(data)
const onChange = (swiper) => {
  uni.showToast({
    title: '当前 swiper 索引：' + swiper.activeIndex,
    icon: 'none'
  })
}
<\/script>
`,il=`
<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-卡片">
      <z-swiper
        effect="cards"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="关闭旋转">
      <z-swiper
        effect="cards"
        :cardsEffect="{ rotate: false }"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="偏移距离">
      <z-swiper
        effect="cards"
        :cardsEffect="{ perSlideOffset: 12 }"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="旋转角度">
      <z-swiper
        effect="cards"
        :cardsEffect="{ perSlideRotate: 10 }"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-model:list="loopList"
        loop
        effect="cards"
        :modules="modules"
        :custom-style="{ width: '500rpx' }"
      >
        <z-swiper-item
          v-for="item in loopList"
          :key="item.id"
          :custom-style="itemCustomStyle"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { EffectCards } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCards])
const itemCustomStyle = {
  'border-radius': '24rpx'
}
const list = ref([...data])
const loopList = ref([...data])
<\/script>
`,al=`
<template>
  <view class="demo-swiper">
    <demo-block title="数量">
      <z-swiper :slidesPerView="2">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自适应">
      <z-swiper slidesPerView="auto" centeredSlides :spaceBetween="14">
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="{ width: '500rpx' }"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="居中">
      <z-swiper :slidesPerView="2" centeredSlides>
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="贴合边缘">
      <z-swiper :slidesPerView="3" centeredSlides centeredSlidesBounds>
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="分组">
      <z-swiper :slidesPerView="3" :slidesPerGroup="3">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="距离">
      <z-swiper :slidesPerView="3" :spaceBetween="20">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-model:list="loopList"
        loop
        slidesPerView="auto"
        centeredSlides
        :spaceBetween="14"
      >
        <z-swiper-item
          v-for="(item, index) in loopList"
          :key="item.id"
          :custom-style="{ width: '500rpx' }"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../common/js/data.js'
const list = ref([...data])
const loopList = ref([...data])
<\/script>
`,nl=`
<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper
        :modules="modules"
        :controller="{ control: swiperInstance['control'] }"
      >
        <z-swiper-item v-for="item in list1" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :modules="modules"
        @swiper="onSwiper($event, 'control')"
      >
        <z-swiper-item v-for="item in list2" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反向">
      <z-swiper
        :modules="modules"
        :controller="{ control: swiperInstance['inverse'], inverse: true }"
      >
        <z-swiper-item v-for="item in list1Inverse" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :modules="modules"
        @swiper="onSwiper($event, 'inverse')"
      >
        <z-swiper-item v-for="item in list2Inverse" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="双向控制">
      <z-swiper
        :modules="modules"
        :controller="{ control: swiperInstance['example2'] }"
        @swiper="onSwiper($event, 'example1')"
      >
        <z-swiper-item v-for="item in list1" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :modules="modules"
        :controller="{ control: swiperInstance['example1'] }"
        @swiper="onSwiper($event, 'example2')"
      >
        <z-swiper-item v-for="item in list1" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { Controller } from '@zebra-ui/swiper/modules'
import type { SwiperInterface } from '@zebra-ui/swiper/types'
const list1 = ref([...data])
const list2 = ref([...data])
const list1Inverse = ref([...data])
const list2Inverse = ref([...data])

const modules = ref([Controller])

const swiperInstance = ref({})

const onSwiper = (swiper: SwiperInterface, name: string) => {
  swiperInstance.value[name] = swiper
}
<\/script>
`,rl=`
<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-3D流">
      <z-swiper effect="coverflow" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="搭配轮播块">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title=" Z 轴偏移深度">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :coverflowEffect="{ depth: 300 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="旋转角度">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :coverflowEffect="{ rotate: 10 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="缩放">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :coverflowEffect="{ scale: 0.5 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="拉伸距离">
      <z-swiper
        effect="coverflow"
        centeredSlides
        :slidesPerView="2"
        :coverflowEffect="{ stretch: 20 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-model:list="loopList"
        loop
        centeredSlides
        effect="coverflow"
        :slidesPerView="3"
        :modules="modules"
      >
        <z-swiper-item v-for="(item, index) in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EffectCoverflow } from '@zebra-ui/swiper/modules'

import data from '../../common/js/data.js'

const modules = ref([EffectCoverflow])

const list = ref([...data])
const loopList = ref([...data])
<\/script>
`,ll=`
<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-创意性">
      <z-swiper effect="creative" :creativeEffect="options1" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options2"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options3"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options4"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options5"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        effect="creative"
        :creativeEffect="options6"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { EffectCreative } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCreative])
const options1 = {
  prev: {
    shadow: true,
    translate: [0, 0, -400]
  },
  next: {
    translate: ['100%', 0, 0]
  }
}
const options2 = {
  prev: {
    shadow: true,
    translate: ['-120%', 0, -500]
  },
  next: {
    shadow: true,
    translate: ['120%', 0, -500]
  }
}
const options3 = {
  prev: {
    shadow: true,
    translate: ['-20%', 0, -1]
  },
  next: {
    translate: ['100%', 0, 0]
  }
}

const options4 = {
  prev: {
    shadow: true,
    translate: [0, 0, -800],
    rotate: [180, 0, 0]
  },
  next: {
    shadow: true,
    translate: [0, 0, -800],
    rotate: [-180, 0, 0]
  }
}

const options5 = {
  prev: {
    shadow: true,
    translate: ['-125%', 0, -800],
    rotate: [0, 0, -90]
  },
  next: {
    shadow: true,
    translate: ['125%', 0, -800],
    rotate: [0, 0, 90]
  }
}

const options6 = {
  prev: {
    shadow: true,
    origin: 'left center',
    translate: ['-5%', 0, -200],
    rotate: [0, 100, 0]
  },
  next: {
    origin: 'right center',
    translate: ['5%', 0, -200],
    rotate: [0, -100, 0]
  }
}
const list = ref([...data])
<\/script>
`,cl=`
<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-方块">
      <z-swiper effect="cube" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="阴影偏离">
      <z-swiper
        effect="cube"
        :cubeEffect="{ shadowOffset: 0 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="阴影缩放">
      <z-swiper
        effect="cube"
        :cubeEffect="{ shadowScale: 0.3 }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="loopList" loop effect="cube" :modules="modules">
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { EffectCube } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCube])
const list = ref([...data])
const loopList = ref([...data])
<\/script>
`,dl=`
<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-淡入">
      <z-swiper effect="fade" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="交叉淡入淡出">
      <z-swiper
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="loopList" loop effect="fade" :modules="modules">
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { EffectFade } from '@zebra-ui/swiper/modules'

const modules = ref([EffectFade])
const list = ref([...data])
const loopList = ref([...data])
<\/script>
`,ul=`
<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-3D翻转">
      <z-swiper effect="flip" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper
        :custom-style="{ height: '300rpx' }"
        direction="vertical"
        effect="flip"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="loopList" loop effect="flip" :modules="modules">
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { EffectFlip } from '@zebra-ui/swiper/modules'

const modules = ref([EffectFlip])
const list = ref([...data])
const loopList = ref([...data])
<\/script>
`,ml=`
<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper freeMode :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="关闭惯性">
      <z-swiper :freeMode="{ momentum: false }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反弹强度">
      <z-swiper :freeMode="{ momentumBounceRatio: 5 }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="释放后滑动距离">
      <z-swiper :freeMode="{ momentumRatio: 5 }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="释放后滑动速度">
      <z-swiper :freeMode="{ momentumVelocityRatio: 5 }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="贴合边缘">
      <z-swiper :freeMode="{ sticky: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FreeMode } from '@zebra-ui/swiper/modules'
import data from '../../common/js/data.js'
const list = ref([...data])
const modules = ref([FreeMode])
<\/script>

`,pl=`
<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper v-model:list="list" loop>
        <z-swiper-item v-for="(item, index) in list" :key="index">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动播放">
      <z-swiper v-model:list="listAutoplay" loop autoplay :modules="modules">
        <z-swiper-item v-for="item in listAutoplay" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autoplay } from '@zebra-ui/swiper/modules'
import data from '../../common/js/data.js'
const modules = ref([Autoplay])
const list = ref([...data])
const listAutoplay = ref([...data])
<\/script>
`,fl=`
<template>
  <view class="demo-switcher">
    <demo-block title="基础用法">
      <z-swiper navigation :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="点击后隐藏">
      <z-swiper :navigation="{ hideOnClick: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="插槽自定义">
      <z-swiper navigation :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #navigation-prev>
          <view class="custom-switcher"> prev </view>
        </template>
        <template #navigation-next>
          <view class="custom-switcher"> next </view>
        </template>
      </z-swiper>
    </demo-block>
    <demo-block title="完全自定义">
      <z-swiper v-model:list="loopList" loop @swiper="onSwiper">
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <view class="custom-switcher-group">
        <button
          type="primary"
          size="mini"
          class="custom-switcher-group-button"
          @click="prev()"
        >
          prev
        </button>
        <button
          type="primary"
          size="mini"
          class="custom-switcher-group-button"
          @click="next()"
        >
          next
        </button>
      </view>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { Navigation } from '@zebra-ui/swiper/modules'
const list = ref([...data])
const loopList = ref([...data])
const swiperInstance = ref(null)
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}
const prev = () => {
  swiperInstance.value.slidePrev()
}
const next = () => {
  swiperInstance.value.slideNext()
}
const modules = ref([Navigation])
<\/script>

<style scoped lang="scss">
.demo-switcher {
  .image {
    width: 100%;
    height: 300rpx;
  }

  .custom-switcher {
    display: flex;
    align-items: center;
  }

  .custom-switcher-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20rpx;
  }
}
</style>
`,vl=`
<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper pagination :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper v-model:list="listLoop" loop pagination :modules="modules">
        <z-swiper-item v-for="item in listLoop" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="分式类型">
      <z-swiper :pagination="{ type: 'fraction' }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="进度条类型">
      <z-swiper :pagination="{ type: 'progressbar' }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反方向进度条">
      <z-swiper
        :pagination="{ type: 'progressbar', progressbarOpposite: true }"
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="动态分页器">
      <z-swiper :pagination="{ dynamicBullets: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="点击切换">
      <z-swiper :pagination="{ clickable: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="点击隐藏">
      <z-swiper :pagination="{ hideOnClick: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自定义">
      <z-swiper
        :pagination="{ type: 'custom' }"
        :modules="modules"
        @swiper="onSwiper($event, 'custom1')"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #pagination>
          <view class="custom-indicator">
            <view class="custom-indicator-text">
              {{
                swiperInstance['custom1'] &&
                swiperInstance['custom1'].activeIndex + 1
              }}/{{ list.length }}
            </view>
          </view>
        </template>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :pagination="{ type: 'custom' }"
        :modules="modules"
        @swiper="onSwiper($event, 'custom2')"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #pagination>
          <view class="custom-indicator-list">
            <view
              v-for="(item, index) in list"
              :key="item.id"
              class="custom-indicator-list-item"
              :class="{
                'custom-indicator-list-item-active':
                  index ==
                  (swiperInstance['custom2'] &&
                    swiperInstance['custom2'].activeIndex)
              }"
              @click="
                swiperInstance['custom2'] &&
                swiperInstance['custom2'].slideTo(index, 300, false)
              "
            >
              {{ index + 1 }}
            </view>
          </view>
        </template>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :pagination="{ type: 'custom' }"
        :modules="modules"
        @swiper="onSwiper($event, 'custom3')"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #pagination>
          <view class="custom-indicator-list1">
            <view
              v-for="(item, index) in list"
              :key="index"
              class="custom-indicator-list-item1"
              :class="{
                'custom-indicator-list-item1-active':
                  index ==
                  (swiperInstance['custom3'] &&
                    swiperInstance['custom3'].activeIndex)
              }"
            >
            </view>
          </view>
        </template>
      </z-swiper>
      <z-swiper
        :custom-style="{ 'margin-top': '20rpx' }"
        :pagination="{ type: 'custom' }"
        :modules="modules"
        @swiper="onSwiper($event, 'custom4')"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
        <template #pagination>
          <view class="custom-indicator-list2">
            <template v-for="(item, index) in list" :key="item.id">
              <view
                v-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex) -
                    2
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-prev-prev"
              >
              </view>
              <view
                v-else-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex) -
                    1
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-prev"
              >
              </view>
              <view
                v-else-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex)
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-active"
              >
              </view>
              <view
                v-else-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex) +
                    1
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-next"
              >
              </view>
              <view
                v-else-if="
                  index ==
                  (swiperInstance['custom4'] &&
                    swiperInstance['custom4'].activeIndex) +
                    2
                "
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-next-next"
              >
              </view>
            </template>
          </view>
        </template>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from '@zebra-ui/swiper/modules'
import type { SwiperInterface } from '@zebra-ui/swiper/types'
import data from '../../common/js/data.js'
const modules = ref([Pagination])
const list = ref([...data])
const listLoop = ref([...data])
const swiperInstance = ref({})
const onSwiper = (swiper: SwiperInterface, name: string) => {
  swiperInstance.value[name] = swiper
}
<\/script>

<style scoped lang="scss">
.demo-swiper {
  .custom-indicator {
    display: flex;
    justify-content: flex-end;
    margin-right: 30rpx;

    .custom-indicator-text {
      padding: 4rpx 10rpx;
      font-size: 24rpx;
      color: #fff;
      background: rgb(0 0 0 / 10%);
    }
  }

  .custom-indicator-list {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .custom-indicator-list-item {
      width: 40rpx;
      height: 40rpx;
      margin: 0 8rpx;
      font-size: 24rpx;
      line-height: 40rpx;
      color: #000;
      text-align: center;
      background: rgb(0 0 0 / 20%);
      border-radius: 50%;
      opacity: 1;

      &-active {
        color: #fff;
        background: #007aff;
      }
    }
  }

  .custom-indicator-list1 {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .custom-indicator-list-item1 {
      width: 20rpx;
      height: 10rpx;
      margin: 0 5rpx;
      background-color: #e8f5ff;
      border-radius: 5rpx;
      opacity: 1;
      transition:
        opacity 0.3s,
        background-color 0.3s,
        width 0.3s;

      &-active {
        width: 35rpx;
        background-color: #3eb2f3;
      }
    }
  }

  .custom-indicator-list2 {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .custom-indicator-list2-bullet {
      position: relative;
      width: 16rpx;
      height: 16rpx;
      margin: 0 8rpx;
      background-color: #e8f5ff;
      border-radius: 2rpx;
      opacity: 1;
      transition:
        0.2s width,
        0.2s height,
        0.2s background-color,
        0.2s opacity,
        0.2s transform;

      &-active {
        background-color: #3eb2f3;
        opacity: 1;
        transform: scale(1);
      }

      &-prev {
        transform: scale(0.66);
      }

      &-prev-prev {
        transform: scale(0.33);
      }

      &-next {
        transform: scale(0.66);
      }

      &-next-next {
        transform: scale(0.33);
      }
    }
  }
}
</style>
`,hl=`
<template>
  <view class="demo-swiper" style="--swiper-scrollbar-size: 20rpx">
    <demo-block title="基础用法">
      <z-swiper scrollbar :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper
        direction="vertical"
        :custom-style="{ height: '300rpx' }"
        scrollbar
        :modules="modules"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动隐藏">
      <z-swiper :scrollbar="{ hide: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="可拖动">
      <z-swiper :scrollbar="{ draggable: true }" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { Scrollbar } from '@zebra-ui/swiper/modules'
const modules = ref([Scrollbar])
const list = ref([...data])
<\/script>
`,gl=`
<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper
        v-if="!!swiperInstance['thumbs']"
        :modules="modules"
        :thumbs="{ swiper: swiperInstance['thumbs'] }"
      >
        <z-swiper-item v-for="item in list" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <view class="thumb-swiper">
        <z-swiper
          :custom-style="{ height: '100rpx' }"
          :modules="modules"
          watch-slides-progress
          :spaceBetween="10"
          :slidesPerView="4"
          freeMode
          @swiper="onSwiper($event, 'thumbs')"
        >
          <z-swiper-item v-for="item in list" :key="item.id">
            <demo-item :item="item" height="100rpx"></demo-item>
          </z-swiper-item>
        </z-swiper>
      </view>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-if="!!swiperInstance['thumbsLoop']"
        v-model:list="loopList"
        loop
        :modules="modules"
        :thumbs="{ swiper: swiperInstance['thumbsLoop'] }"
      >
        <z-swiper-item v-for="item in loopList" :key="item.id">
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
      <view class="thumb-swiper">
        <z-swiper
          v-model:list="loopListThumbs"
          loop
          :custom-style="{ height: '100rpx' }"
          :modules="modules"
          watch-slides-progress
          :spaceBetween="10"
          :slidesPerView="4"
          freeMode
          @swiper="onSwiper($event, 'thumbsLoop')"
        >
          <z-swiper-item v-for="item in loopListThumbs" :key="item.id">
            <demo-item :item="item" height="100rpx"></demo-item>
          </z-swiper-item>
        </z-swiper>
      </view>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '../../common/js/data.js'
import { Thumb } from '@zebra-ui/swiper/modules'
import type { SwiperInterface } from '@zebra-ui/swiper/types'

const modules = ref([Thumb])
const list = ref([...data])
const loopList = ref([...data])
const loopListThumbs = ref([...data])

const swiperInstance = ref({})

const onSwiper = (swiper: SwiperInterface, name: string) => {
  swiperInstance.value[name] = swiper
}
<\/script>

<style lang="scss">
.thumb-swiper {
  margin-top: 10px;

  .swiper-slide {
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`,bl=`
<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper
        v-model:list="list"
        virtual
        :modules="modules"
        :virtualList="virtualList"
      >
        <z-swiper-item
          v-for="(item, index) in list"
          :key="index"
          :virtualIndex="item.virtualIndex"
          :custom-style="item.props.style"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-model:list="loopList"
        loop
        virtual
        :modules="modules"
        :virtualList="virtualListLoop"
      >
        <z-swiper-item
          v-for="(item, index) in loopList"
          :key="index"
          :virtualIndex="item.virtualIndex"
          :custom-style="item.props.style"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Virtual } from '@zebra-ui/swiper/modules'

const modules = ref([Virtual])
const colorList = [
  '#7ED321',
  '#2183D3',
  '#2128D3',
  '#431058',
  '#1E835A',
  '#B1397B',
  '#B36021'
]
const list = ref([])
const loopList = ref([])

const virtualList = ref(
  Array.from({
    length: 1000
  }).map((item, index) => {
    const randomValue = Math.floor(Math.random() * 7)
    return {
      id: generateUUID(),
      background: colorList[randomValue],
      text: \`slide\${index}\`
    }
  })
)
const virtualListLoop = ref(
  Array.from({
    length: 1000
  }).map((item, index) => {
    const randomValue = Math.floor(Math.random() * 7)
    return {
      id: generateUUID(),
      background: colorList[randomValue],
      text: \`slide\${index}\`
    }
  })
)

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
<\/script>
`,yl={"sandbox.config.json":{content:{infiniteLoopProtection:!0,hardReloadOnChange:!1,view:"browser",container:{node:"18"}}}};function kl(e,t){return{"package.json":{content:Wr(t)},"src/components/DemoBlock/DemoBlock.vue":{content:Jr},"src/components/DemoItem/DemoItem.vue":{content:Qr},"src/common/js/data.js":{content:el},"src/App.vue":{content:Gr},"src/pages.json":{content:Yr},"src/main.js":{content:Kr},"src/pages/index/index.vue":{content:e},"src/manifest.json":{content:Xr},"src/global.d.ts":{content:tl},"index.html":{content:Ur},"vite.config.js":{content:Zr},...yl}}function _l(e){return new Promise(t=>{const i=kl({base:ol,cards:il,carousel:al,controller:nl,coverflow:rl,creative:ll,cube:cl,fade:dl,flip:ul,freemode:ml,loop:pl,navigation:fl,pagination:vl,scrollbar:hl,thumbs:gl,virtual:bl,autoplay:sl}[e],e);fetch("https://codesandbox.io/api/v1/sandboxes/define?environment=server&json=1",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({files:i})}).then(o=>o.json()).then(({sandbox_id:o})=>{t(`https://codesandbox.io/p/sandbox/${o}?file=/src/pages/index/index.vue`)})})}const wl=["src","title"],$l={__name:"index",props:{page:String},setup(e){const t=e,s=W("");return _l(t.page).then(i=>{s.value=i}),(i,o)=>(m(),k("iframe",{src:s.value,style:{width:"100%",height:"calc(100vh - var(--vp-nav-height))",border:"0","border-radius":"4px",overflow:"hidden"},allowFullScreen:"",title:`zebra-swiper-${e.page}`,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"},null,8,wl))}},sc={extends:Gn,async enhanceApp(e){const{app:t}=e;t.component("DemoBlock",Zn),t.component("DemoCard",tr),t.component("DemoCardExpand",sr),t.component("DemoItem",ir),t.component("ComponentInfo",mr),t.component("DemoOprate",br),t.component("AnimatedText",$r),t.component("AnimatedElement",xr),t.component("AnimatedCounter",Lr),t.component("DemoShow",Ar),t.component("DemoHome",Rr),t.component("CodeSandbox",$l);{const s=await bt(()=>import("./index.BnaqaqCJ.js"),__vite__mapDeps([2,1]));t.use(s.default)}}};export{Rl as $,ts as A,Tl as B,ec as C,ge as D,Jl as E,Al as F,Cl as G,Ge as H,dt as I,ut as J,xl as K,is as L,Te as M,Zl as N,_t as O,Wl as P,Vl as Q,sc as R,Yl as S,Kl as T,as as U,tc as V,Nl as W,Hl as X,Ul as Y,Fl as Z,ql as _,rs as a,Gl as a0,jl as a1,K as a2,cs as b,ns as c,Xl as d,Le as e,ls as f,Ql as g,ss as h,pt as i,Bl as j,Ol as k,I as l,Qt as m,Dl as n,Il as o,Ml as p,et as q,es as r,Kt as s,El as t,Pl as u,Xt as v,zl as w,Ll as x,mt as y,Gt as z};
