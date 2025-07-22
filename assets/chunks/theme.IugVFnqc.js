const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPAlgoliaSearchBox.DGpy5-Kl.js","assets/chunks/framework.BboaNvjl.js","assets/chunks/Stack.CVSne22S.js","assets/chunks/Panorama.DZRf9kl6.js","assets/chunks/effect-panorama.Bi4467sI.js","assets/chunks/Circular.Bp51bQkP.js","assets/chunks/Fanshaped.CpPUomeQ.js","assets/chunks/Poster.Cweu69nQ.js","assets/chunks/index.Xd_q-H-a.js"])))=>i.map(i=>d[i]);
import{r as ke,c as W,a as Y,d as O,o as m,b as _,e as S,n as se,f as de,t as J,g as j,w as z,h as H,T as st,_ as F,u as Mt,i as It,j as At,k as ot,l as g,m as w,p as xe,q as Je,s as _e,v as je,x as he,y as Re,z as it,A as Vt,B as Dt,C as ne,F as Q,D as ie,E as bt,G as qe,H as V,I as me,J as yt,K as Ge,L as be,M as Ue,N as Ot,O as $e,P as Bt,Q as He,R as _t,S as Ye,U as Nt,V as ge,W as ve,X as kt,Y as wt,Z as Ht,$ as Ft,a0 as Ie,a1 as jt,a2 as Rt,a3 as qt,a4 as Gt,a5 as Ut,a6 as Yt,a7 as Wt}from"./framework.BboaNvjl.js";const ze=(e="")=>e.trim().split(" ").filter(t=>!!t.trim()),Hc=e=>{const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})},Xt=(e,t=0)=>setTimeout(e,t),Ze=()=>Date.now(),Zt=e=>{let t;return A()&&(window.getComputedStyle&&(t=window.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style)),t},Kt=(e,t)=>{if(!e)return null;const s=e.match(/translate3d\(([^,]+),([^,]+),([^,]+)\)/);if(!s)return null;const o={x:1,y:2,z:3}[t.toLowerCase()];return o?parseFloat(s[o].trim()):null},Jt=(e,t,s,i)=>{if(Math.abs(t-e)>100&&i<50||i>=s)return Math.round(t);const o=t-e,n=Math.max(0,Math.min(1,i/s)),r=n*(2-n),l=Math.round(e+o*r);return o>0?Math.min(l,t):Math.max(l,t)},Fc=(e,t="x",s)=>{let i,o,n;if(A()){const r=Zt(e);window.WebKitCSSMatrix?(o=(r==null?void 0:r.transform)||(r==null?void 0:r.webkitTransform),o.split(",").length>6&&(o=o.split(", ").map(l=>l.replace(",",".")).join(", ")),n=new window.WebKitCSSMatrix(o==="none"?"":o)):(n=(r==null?void 0:r.MozTransform)||(r==null?void 0:r.OTransform)||(r==null?void 0:r.MsTransform)||(r==null?void 0:r.msTransform)||(r==null?void 0:r.transform)||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),t==="x"&&(window.WebKitCSSMatrix?o=n.m41:i.length===16?o=parseFloat(i[12]):o=parseFloat(i[4])),t==="y"&&(window.WebKitCSSMatrix?o=n.m42:i.length===16?o=parseFloat(i[13]):o=parseFloat(i[5]))}else o=Jt(s.touchEventsData.currentTranslate,s.translate,s.params.speed,Date.now()-s.touchEventsData.lastClickTime);return o||0},Ee=e=>typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object",Qt=e=>A()?typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11):!1,ft=(...e)=>{const t=Object(e[0]),s=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const o=e[i];if(o!=null&&!Qt(o)){const n=Object.keys(Object(o)).filter(r=>s.indexOf(r)<0);for(let r=0,l=n.length;r<l;r+=1){const a=n[r],c=Object.getOwnPropertyDescriptor(o,a);c!==void 0&&c.enumerable&&(Ee(t[a])&&Ee(o[a])?o[a].__swiper__?t[a]=o[a]:ft(t[a],o[a]):!Ee(t[a])&&Ee(o[a])?(t[a]={},o[a].__swiper__?t[a]=o[a]:ft(t[a],o[a])):t[a]=o[a])}}}return t},es=(e,t,s)=>{e.style.setProperty(t,s)},jc=({swiper:e,targetPosition:t,side:s})=>{if(A()){const i=-e.translate;let o=null,n;const r=e.params.speed;e.wrapperEl.style.scrollSnapType="none",window.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",a=(p,u)=>l==="next"&&p>=u||l==="prev"&&p<=u,c=()=>{n=new Date().getTime(),o===null&&(o=n);const p=Math.max(Math.min((n-o)/r,1),0),u=.5-Math.cos(p*Math.PI)/2;let v=i+u*(t-i);if(a(v,t)&&(v=t),e.wrapperEl.scrollTo({[s]:v}),a(v,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:v})}),window.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=window.requestAnimationFrame(c)};c()}},Le=e=>A()&&(e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform"))||e,at=(e,t="")=>{if(A()){const s=[...e.children];return e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),t?s.filter(i=>i.matches(t)):s}return e&&e.children||[]},ts=(e,t)=>e&&e.children.filter(s=>s.swiperItemIndex.value==t)||[],Rc=(e,t)=>{if(A()){const s=t.contains(e);return!s&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):s}return!0},qc=e=>{try{console.warn(e);return}catch{}},we=(e,t=[])=>{if(A()){const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:ze(t)),s}},ss=e=>{if(A()){const t=e.getBoundingClientRect(),s=document.body,i=e.clientTop||s.clientTop||0,o=e.clientLeft||s.clientLeft||0,n=e===window?window.scrollY:e.scrollTop,r=e===window?window.scrollX:e.scrollLeft;return{top:t.top+n-i,left:t.left+r-o}}},Gc=(e,t,s)=>{if(A()){const i=[];for(;e.previousElementSibling;){const o=e.previousElementSibling;t?o.matches(t)&&i.push(o):i.push(o),e=o}return i}else return s?s.children.filter((i,o)=>o<s.children.indexOf(e)).reverse():e.childrenList.filter((i,o)=>o<e.childrenList.indexOf(e)).reverse()},Uc=(e,t,s)=>{if(A()){const i=[];for(;e.nextElementSibling;){const o=e.nextElementSibling;t?o.matches(t)&&i.push(o):i.push(o),e=o}return i}else return s?s.children.filter((i,o)=>o>s.children.indexOf(e)):e.childrenList.filter((i,o)=>o>e.childrenList.indexOf(e))},Yc=(e,t)=>A()?window.getComputedStyle(e,null).getPropertyValue(t):e.style.getPropertyValue(t),vt=(e,t)=>{if(A()){let s=e,i;if(s){for(i=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(i+=1);return i}}else if(e)return t?t.children.indexOf(e):e.childrenList.indexOf(e)},os=(e,t)=>{if(A()){const s=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&s.push(i):s.push(i),i=i.parentElement;return s}},Me=(e,t)=>{if(A()){let s=function(i){i.target===e&&(t.call(e,i),e.removeEventListener("transitionend",s))};t&&e.addEventListener("transitionend",s)}else{let s=function(o){o.target.id.toString().replace(i,"")===`${e.uid}`&&(t.call(e,o),e.removeEventListener("transitionend",s.bind(this),"fireCallBack"))};const i=new RegExp(`[${["swiperWrapper","swiperItem"].join("")}]`,"g");t&&e.addEventListener("transitionend",s.bind(void 0),"fireCallBack")}},is=(e,t,s)=>A()?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(window.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(window.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.style[t],re=e=>(Array.isArray(e)?e:[e]).filter(t=>!!t),nt=e=>t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t,A=()=>!0,Wc=e=>A()?{windowWidth:e.clientWidth,windowHeight:e.clientHeight}:uni.getWindowInfo(),Xc=(e,t)=>new Promise((s,i)=>{A()||uni.createSelectorQuery().in(e.proxy).select(t).boundingClientRect(n=>{n&&n.width?s(n):console.warn(`[ZebraSwiper] ${t}:获取swiper节点信息失败`)}).exec()}),Zc=(e,t)=>({touchstart:["touchstart","touchStart","onTouchstart"],touchmove:["touchmove","touchMove","onTouchmove"],touchend:["touchend","touchEnd","onTouchend"],touchcancel:["touchcancel","touchCancel","onTouchcancel"]})[e].includes(t),Be=e=>{setTimeout(()=>{e()},16)},Ce=e=>{const{effect:t,swiper:s,on:i,setTranslate:o,setTransition:n,overwriteParams:r,perspective:l,recreateShadows:a,getEffectParams:c}=e;i("beforeInit",()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const u=r?r():{};Object.assign(s.params,u),Object.assign(s.originalParams,u)}),i("setTranslate",()=>{s.params.effect===t&&o()}),i("setTransition",(u,v)=>{s.params.effect===t&&n(v)}),i("transitionEnd",()=>{if(s.params.effect===t&&a){if(!c||!c().slideShadows)return;s.slides.forEach(u=>{A()?u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>v.remove()):u.clearShadow()}),a()}});let p;i("virtualUpdate",()=>{s.params.effect===t&&(s.slides.length||(p=!0),A()?requestAnimationFrame(()=>{p&&s.slides&&s.slides.length&&(o(),p=!1)}):Be(()=>{p&&s.slides&&s.slides.length&&(o(),p=!1)}))})};function $t({swiper:e,extendParams:t,on:s,emit:i,params:o}){var Z,X;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,r,l=((Z=o==null?void 0:o.autoplay)==null?void 0:Z.delay)||3e3,a=((X=o==null?void 0:o.autoplay)==null?void 0:X.delay)||3e3,c,p=new Date().getTime(),u,v,f,h,b,k,d;function $(D){var q;if(!(!e||e.destroyed||!e.wrapperEl)){if(A()){if(D.target!==e.wrapperEl)return;e.wrapperEl.removeEventListener("transitionend",$)}else{if(D.target.id!==`swiperWrapper${e.adapterEl.uid}`)return;e.wrapperEl.removeEventListener("transitionend",$,"onTransitionEnd")}d||(q=D.detail)!=null&&q.bySwiperTouchMove||I()}}const C=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(a=c,u=!1);const D=e.autoplay.paused?c:p+a-new Date().getTime();e.autoplay.timeLeft=D,i("autoplayTimeLeft",D,D/l),A()?r=requestAnimationFrame(()=>{C()}):r=Be(()=>{C()})},P=()=>{var q;let D;if(e.virtual&&typeof e.params.virtual=="object"&&((q=e.params.virtual)!=null&&q.enabled)?D=e.slides.filter(te=>te.classList.contains("swiper-slide-active"))[0]:D=e.slides[e.activeIndex],!!D)return parseInt(D.getAttribute("data-swiper-autoplay")||"",10)},L=D=>{var pe,fe,K;if(e.destroyed||!e.autoplay.running)return;A()&&cancelAnimationFrame(Number(r)),C();let q=typeof D>"u"?(pe=e.params.autoplay)==null?void 0:pe.delay:D;l=(fe=e.params.autoplay)==null?void 0:fe.delay,a=(K=e.params.autoplay)==null?void 0:K.delay;const te=P();!Number.isNaN(te)&&te&&te>0&&typeof D>"u"&&(q=te,l=te,a=te),c=q||0;const{speed:ae}=e.params,le=()=>{var oe,ce,De;!e||e.destroyed||((oe=e.params.autoplay)!=null&&oe.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(ae,!0,!0),i("autoplay")):(ce=e.params.autoplay)!=null&&ce.stopOnLastSlide||(e.slideTo(e.slides.length-1,ae,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(ae,!0,!0),i("autoplay")):(De=e.params.autoplay)!=null&&De.stopOnLastSlide||(e.slideTo(0,ae,!0,!0),i("autoplay")),e.params.cssMode&&(p=new Date().getTime(),A()?requestAnimationFrame(()=>{L()}):Be(()=>{L()})))};return q&&q>0?(clearTimeout(n),n=setTimeout(()=>{le()},q)):A()?requestAnimationFrame(()=>{le()}):Be(()=>{le()}),q},B=()=>(p=new Date().getTime(),e.autoplay.running=!0,L(),i("autoplayStart"),!0),N=()=>(e.autoplay.running=!1,clearTimeout(n),A()&&cancelAnimationFrame(Number(r)),i("autoplayStop"),!0),U=(D,q)=>{var le,pe;if(e.destroyed||!e.autoplay.running)return;clearTimeout(n),D||(k=!0);const te=()=>{var fe;i("autoplayPause"),(fe=e.params.autoplay)!=null&&fe.waitForTransition?A()?e.wrapperEl.addEventListener("transitionend",$):e.wrapperEl.addEventListener("transitionend",$.bind(this),"onTransitionEnd"):I()};if(e.autoplay.paused=!0,q){b&&(c=(le=e.params.autoplay)==null?void 0:le.delay),b=!1,te();return}c=(c||((pe=e.params.autoplay)==null?void 0:pe.delay))-(new Date().getTime()-p),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),te())},I=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),k?(k=!1,L(c)):L(),e.autoplay.paused=!1,i("autoplayResume"))},G=()=>{if(e.destroyed||!e.autoplay.running)return;const{document:D}=window;D.visibilityState==="hidden"&&(k=!0,U(!0)),D.visibilityState==="visible"&&I()},T=D=>{D.pointerType==="mouse"&&(k=!0,d=!0,!(e.animating||e.autoplay.paused)&&U(!0))},M=D=>{D.pointerType==="mouse"&&(d=!1,e.autoplay.paused&&I())},x=()=>{var D;(D=e.params.autoplay)!=null&&D.pauseOnMouseEnter&&A()&&(e.el.addEventListener("pointerenter",T),e.el.addEventListener("pointerleave",M))},y=()=>{e.el&&typeof e.el!="string"&&A()&&(e.el.removeEventListener("pointerenter",T),e.el.removeEventListener("pointerleave",M))},E=()=>{A()&&document.addEventListener("visibilitychange",G)},R=()=>{A()&&document.removeEventListener("visibilitychange",G)};s("init",()=>{var D;(D=e.params.autoplay)!=null&&D.enabled&&(x(),E(),B())}),s("destroy",()=>{y(),R(),e.autoplay.running&&N()}),s("_freeModeStaticRelease",()=>{(f||k)&&I()}),s("_freeModeNoMomentumRelease",()=>{var D;(D=e.params.autoplay)!=null&&D.disableOnInteraction?N():U(!0,!0)}),s("beforeTransitionStart",(D,q,te)=>{var ae;e.destroyed||!e.autoplay.running||(te||!((ae=e.params.autoplay)!=null&&ae.disableOnInteraction)?U(!0,!0):N())}),s("sliderFirstMove",()=>{var D;if(!(e.destroyed||!e.autoplay.running)){if((D=e.params.autoplay)!=null&&D.disableOnInteraction){N();return}v=!0,f=!1,k=!1,h=setTimeout(()=>{k=!0,f=!0,U(!0)},200)}}),s("touchEnd",()=>{var D;if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(h),clearTimeout(n),(D=e.params.autoplay)!=null&&D.disableOnInteraction){f=!1,v=!1;return}f&&e.params.cssMode&&I(),f=!1,v=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(b=!0)}),Object.assign(e.autoplay,{start:B,stop:N,pause:U,resume:I})}const Te=(e="")=>`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`,rt=(e,t,s,i)=>(A()&&e.params.createElements&&Object.keys(i).forEach(o=>{if(!s[o]&&s.auto===!0){let n=at(e.el,`.${i[o]}`)[0];n||(n=we("div",i[o]),n.className=i[o],e.el.append(n)),s[o]=n,t[o]=n}}),s),ht=e=>typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__,as=(e,t)=>{const s=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>s.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:ht(t[i])&&ht(e[i])&&Object.keys(t[i]).length>0?t[i].__swiper__?e[i]=t[i]:as(e[i],t[i]):e[i]=t[i]})},Kc=(e={})=>e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u",Jc=(e={})=>e.pagination&&typeof e.pagination.el>"u",Qc=(e={})=>e.scrollbar&&typeof e.scrollbar.el>"u",ed=(e="")=>{const t=e.split(" ").map(i=>i.trim()).filter(i=>!!i),s=[];return t.forEach(i=>{s.indexOf(i)<0&&s.push(i)}),s.join(" ")},td=(e="")=>e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper",sd=(e,t,s)=>{if(!e||typeof e!="object")return e;const i={};for(const o in e)i[o]=St(e[o],t,s);return i},St=(e,t,s)=>{if(typeof e=="number")return t==="px"?`${e}px`:e;if(typeof e!="string")return e;if(!isNaN(Number(e)))return t==="px"?`${e}px`:Number(e);const i=/^-?\d+\.?\d*rpx$/,o=/^-?\d+\.?\d*px$/,n=/^-?\d+\.?\d*%$/,r=parseFloat(e);if(i.test(e)){const l=uni.upx2px(r);return t==="px"?`${l}px`:l}if(o.test(e))return t==="px"?e:r;if(n.test(e)){if(!s)return e;const l=r/100*s;return t==="px"?`${l}px`:l}return e},od=(e,t)=>{const s=t.map(o=>e[o]),i=e.filter((o,n)=>!t.includes(n));return[...s.reverse(),...i]},id=(e,t)=>(t.map(i=>e[i]).forEach(i=>{const o=e.indexOf(i);o>-1&&(e.splice(o,1),e.unshift(i))}),e),ad=(e,t)=>{const s=t.map(o=>e[o]);return[...e.filter((o,n)=>!t.includes(n)),...s]},nd=(e,t)=>{const s=t.map(i=>e[i]);return s.forEach(i=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}),e.push(...s),e},rd=(e,t,s=[])=>!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((i,o)=>{const n=t[o];if(s.length>0)return s.every(a=>i[a]===n[a]);const r=Object.keys(i),l=Object.keys(n);return r.length!==l.length?!1:r.every(a=>i[a]===n[a])});class Pe{constructor(t=""){this._classes=new Set(t.split(" ").filter(Boolean))}get value(){return Array.from(this._classes).join(" ")}set value(t){this._classes=new Set(t.split(" ").filter(Boolean))}contains(t){return this._classes.has(t)}containsMultiple(t){return t.split(".").filter(Boolean).every(i=>this.contains(i))}add(...t){t.forEach(s=>this._classes.add(s))}remove(...t){t.forEach(s=>this._classes.delete(s))}toggle(t){this.contains(t)?this.remove(t):this.add(t)}}class ns{constructor(){this._styles={},this._listeners=new Set,this._initializeProperties()}_initializeProperties(){["width","height","top","left","right","bottom","margin","padding","position","marginLeft","marginRight","marginTop","marginBottom","display","visibility","opacity","zIndex","overflow","color","backgroundColor","background","border","borderRadius","boxShadow","fontSize","fontFamily","fontWeight","textAlign","transform","transition","animation","transitionDelay","transitionDuration","transformOrigin"].forEach(s=>{Object.defineProperty(this,s,{get:()=>this.getPropertyValue(s),set:i=>this.setProperty(s,i)})})}setProperty(t,s){const i=this._styles[t];return this._styles[t]=this._processValue(t,s),this._notifyListeners({type:"change",property:t,value:s,oldValue:i}),this}getPropertyValue(t){return String(this._styles[t]||"")}removeProperty(t){const s=this._styles[t];return delete this._styles[t],this._notifyListeners({type:"remove",property:t,oldValue:s}),s}_processValue(t,s){if(["width","height","top","left","right","bottom","margin","padding","fontSize"].includes(t)){if(typeof s=="number")return`${s}px`;if(typeof s=="string"&&/^-?\d*\.?\d+(px|em|rem|%|vh|vw)$/.test(s))return s;if(Number(s)===0||s==="0")return"0"}return s}addListener(t){return this._listeners.add(t),this}removeListener(t){return this._listeners.delete(t),this}_notifyListeners(t){this._listeners.forEach(s=>s(t))}setStyles(t){return Object.entries(t).forEach(([s,i])=>{this.setProperty(s,i)}),this}getAllStyles(){return{...this._styles}}toCssText(){return Object.entries(this._styles).map(([t,s])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${s}`).join("; ")}fromCssText(t){return t.split(";").filter(s=>s.trim()).forEach(s=>{const[i,o]=s.split(":").map(r=>r.trim()),n=i.replace(/-([a-z])/g,r=>r[1].toUpperCase());this.setProperty(n,o)}),this}reset(){return this._styles={},this._notifyListeners({type:"reset",oldStyles:this._styles}),this}}function rs(e=""){const t=ke(new Pe(e)),s=W(()=>t.value),i=t.value;return{classList:t,classNames:s,className:i}}function ls(e={}){const t=new ns,s=Y(t.getAllStyles());return t.setStyles(e),t.addListener(()=>{s.value=t.getAllStyles()}),{style:t,styles:s}}function ld({swiper:e,extendParams:t,on:s,emit:i}){const o="swiper-pagination";t({pagination:{el:null,bulletElement:"span",bulletSize:8,clickable:!1,hideOnClick:!1,renderBullet:void 0,renderProgressbar:void 0,renderFraction:void 0,renderCustom:void 0,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let n=0,r=0;function l(){var d;return!((d=e.params.pagination)!=null&&d.el)||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function a(d,$,C){const P=e.params.pagination;if(d){if(A())d=d[`${$==="prev"?"previous":"next"}ElementSibling`];else{if(!C)return;const L=C.findIndex(B=>B===d);d=C[$==="prev"?L-1:L+1]}if(d){d.classList.add(`${P.bulletActiveClass}-${$}`);const L=d[`${$==="prev"?"previous":"next"}ElementSibling`];L&&L.classList.add(`${P.bulletActiveClass}-${$}-${$}`)}}}function c(d,$,C){if(d=d%C,$=$%C,$===d+1)return"next";if($===d-1)return"previous"}function p(d,$){let C=0;if(A()){const P=d.target.closest(Te(e.params.pagination.bulletClass));if(!P)return;d.preventDefault(),C=vt(P)*e.params.slidesPerGroup}else C=$;if(e.params.loop){if(e.realIndex===C)return;const P=c(e.realIndex,C,e.slides.length);P==="next"?e.slideNext():P==="previous"?e.slidePrev():e.slideToLoop(C)}else e.slideTo(C)}function u(){var U;if(l())return;const d=e.params.pagination,{rtl:$}=e;if(l())return;const C=re(e.pagination.el);let P,L;const B=e.virtual&&typeof e.params.virtual=="object"&&((U=e.params.virtual)!=null&&U.enabled)?e.virtual.slides.length:e.slides.length,N=e.params.loop?Math.ceil(B/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(L=e.previousRealIndex||0,P=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(P=e.snapIndex,L=e.previousSnapIndex):(L=e.previousIndex||0,P=e.activeIndex||0),d.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const{bullets:I}=e.pagination;let G,T,M;if(d.dynamicBullets&&(A()?n=is(I[0],e.isHorizontal()?"width":"height"):n=St(d.bulletSize,"number")+8,C.forEach(x=>{x.style[e.isHorizontal()?"width":"height"]=`${n*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&L!==void 0&&(r+=P-(L||0),r>d.dynamicMainBullets-1?r=d.dynamicMainBullets-1:r<0&&(r=0)),G=Math.max(P-r,0),T=G+(Math.min(I.length,d.dynamicMainBullets)-1),M=(T+G)/2),I.forEach(x=>{const y=["","-next","-next-next","-prev","-prev-prev","-main"].map(E=>`${d.bulletActiveClass}${E}`).map(E=>typeof E=="string"&&E.includes(" ")?E.split(" "):E).flat();x.classList.remove(...y)}),C.length>1)I.forEach(x=>{const y=vt(x);y===P&&x.classList.add(...d.bulletActiveClass.split(" ")),d.dynamicBullets&&(y>=G&&y<=T&&x.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),y===G&&a(x,"prev"),y===T&&a(x,"next"))});else{const x=I[P];if(x&&x.classList.add(...d.bulletActiveClass.split(" ")),e.isElement&&I.forEach((y,E)=>{y.setAttribute("part",E===P?"bullet-active":"bullet")}),d.dynamicBullets){const y=I[G],E=I[T];for(let R=G;R<=T;R+=1)I[R]&&I[R].classList.add(...`${d.bulletActiveClass}-main`.split(" "));a(y,"prev",I),a(E,"next",I)}}if(d.dynamicBullets){const x=Math.min(I.length,d.dynamicMainBullets+4),y=(n*x-n)/2-M*n,E=$?"right":"left";I.forEach(R=>{R.style[e.isHorizontal()?E:"top"]=`${y}px`})}}C.forEach((I,G)=>{if(d.type==="fraction"&&(A()?(I.querySelectorAll(Te(d.currentClass)).forEach(T=>{T.textContent=d.formatFractionCurrent(P+1)}),I.querySelectorAll(Te(d.totalClass)).forEach(T=>{T.textContent=d.formatFractionTotal(N)})):(I.paginationData.fractions.current.content=d.formatFractionCurrent(P+1),I.paginationData.fractions.total.content=d.formatFractionTotal(N))),d.type==="progressbar"){let T;d.progressbarOpposite?T=e.isHorizontal()?"vertical":"horizontal":T=e.isHorizontal()?"horizontal":"vertical";const M=(P+1)/N;let x=1,y=1;T==="horizontal"?x=M:y=M,A()?I.querySelectorAll(Te(d.progressbarFillClass)).forEach(E=>{E.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${y})`,E.style.transitionDuration=`${e.params.speed}ms`}):I.paginationData.progressbar.style={transform:`translate3d(0,0,0) scaleX(${x}) scaleY(${y})`,transitionDuration:`${e.params.speed}ms`}}d.type==="custom"&&d.renderCustom?(I.innerHTML=d.renderCustom(e,P+1,N),G===0&&i("paginationRender",I)):(G===0&&i("paginationRender",I),i("paginationUpdate",I)),e.params.watchOverflow&&e.enabled&&I.classList[e.isLocked?"add":"remove"](d.lockClass)})}function v(){var U,I;const d=e.params.pagination;if(l())return;const $=e.virtual&&typeof e.params.virtual=="object"&&((U=e.params.virtual)!=null&&U.enabled)?e.virtual.slides.length:e.grid&&((I=e.params.grid)!=null&&I.rows)&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let{el:C}=e.pagination;C=re(C);let P="";const L=[],B={current:{classList:"",content:""},total:{classList:"",content:""}},N={classList:""};if(d.type==="bullets"){let G=e.params.loop?Math.ceil($/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&G>$&&(G=$);for(let T=0;T<G;T+=1)d.renderBullet?P+=d.renderBullet.call(e,T,d.bulletClass):(P+=`<${d.bulletElement} ${e.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`,A()||L.push({classList:ke(new Pe(d.bulletClass)),style:ke({})}))}d.type==="fraction"&&(d.renderFraction?P=d.renderFraction.call(e,d.currentClass,d.totalClass):(P=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`,A()||(B.current.classList=ke(new Pe(d.currentClass)),B.total.classList=ke(new Pe(d.totalClass))))),d.type==="progressbar"&&(d.renderProgressbar?P=d.renderProgressbar.call(e,d.progressbarFillClass):(P=`<span class="${d.progressbarFillClass}"></span>`,A()||(N.classList=ke(new Pe(d.progressbarFillClass))))),e.pagination.bullets=[],C.forEach(G=>{d.type!=="custom"&&(G.innerHTML=P||""),d.type==="bullets"&&(A()?e.pagination.bullets.push(...G.querySelectorAll(Te(d.bulletClass))):(e.pagination.bullets.push(...L),G.paginationData.bullets.push(...L))),d.type==="fraction"&&!A()&&(G.paginationData.fractions=B),d.type==="progressbar"&&!A()&&(G.paginationData.progressbar=N)}),d.type!=="custom"&&i("paginationRender",C[0])}function f(){e.params.pagination=rt(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const d=e.params.pagination;if(!d.el)return;let $=null;typeof d.el=="string"&&e.isElement&&A()&&($=e.el.querySelector(d.el)),!$&&typeof d.el=="string"&&A()&&($=Array.from(document.querySelectorAll(d.el))),$||($=d.el),!(!$||$.length===0)&&(e.params.uniqueNavElements&&typeof d.el=="string"&&Array.isArray($)&&$.length>1&&A()&&($=Array.from(e.el.querySelectorAll(d.el)),$.length>1&&($=$.filter(C=>os(C,".swiper")[0]===e.el)[0])),Array.isArray($)&&$.length===1&&($=$[0]),Object.assign(e.pagination,{el:$}),$=re($),$.forEach(C=>{d.type==="bullets"&&d.clickable&&C.classList.add(...(d.clickableClass||"").split(" ")),C.classList.add(d.modifierClass+d.type),C.classList.add(e.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(C.classList.add(`${d.modifierClass}${d.type}-dynamic`),r=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&C.classList.add(d.progressbarOppositeClass),d.clickable&&(A()?C.addEventListener("click",p):C.addEventListener("click",p.bind(this),"onClick")),e.enabled||C.classList.add(d.lockClass)}))}function h(){const d=e.params.pagination;if(l())return;let{el:$}=e.pagination;$&&($=re($),$.forEach(C=>{C.classList.remove(d.hiddenClass),C.classList.remove(d.modifierClass+d.type),C.classList.remove(e.isHorizontal()?d.horizontalClass:d.verticalClass),d.clickable&&(C.classList.remove(...(d.clickableClass||"").split(" ")),A()?C.removeEventListener("click",p):C.removeEventListener("click",p.bind(this),"onClick"))})),e.pagination.bullets&&e.pagination.bullets.forEach(C=>C.classList.remove(...(d.bulletActiveClass||"").split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const d=e.params.pagination;let{el:$}=e.pagination;$=re($),$.forEach(C=>{C.classList.remove(d.horizontalClass,d.verticalClass),C.classList.add(e.isHorizontal()?d.horizontalClass:d.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?k():(f(),v(),u())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),s("snapIndexChange",()=>{u()}),s("snapGridLengthChange",()=>{v(),u()}),s("destroy",()=>{h()}),s("enable disable",()=>{let{el:d}=e.pagination;d&&(d=re(d),d.forEach($=>$.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{u()}),s("click",(d,$)=>{var L,B;const C=$.target,P=re(e.pagination.el);if(A()){if((L=e.params.pagination)!=null&&L.el&&e.params.pagination.hideOnClick&&P&&P.length>0&&!C.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&C===e.navigation.nextEl||e.navigation.prevEl&&C===e.navigation.prevEl))return;const N=P[0].classList.contains(e.params.pagination.hiddenClass);i(N===!0?"paginationShow":"paginationHide"),P.forEach(U=>U.classList.toggle(e.params.pagination.hiddenClass))}}else if((B=e.params.pagination)!=null&&B.el&&e.params.pagination.hideOnClick&&P&&P.length>0){if(e.navigation&&(e.navigation.nextEl&&C===e.navigation.nextEl||e.navigation.prevEl&&C===e.navigation.prevEl))return;const N=P[0].classList.contains(e.params.pagination.hiddenClass);i(N===!0?"paginationShow":"paginationHide"),P.forEach(U=>U.classList.toggle(e.params.pagination.hiddenClass))}});const b=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:d}=e.pagination;d&&(d=re(d),d.forEach($=>$.classList.remove(e.params.pagination.paginationDisabledClass))),f(),v(),u()},k=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:d}=e.pagination;d&&(d=re(d),d.forEach($=>$.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:b,disable:k,render:v,update:u,init:f,destroy:h})}function cd({swiper:e,extendParams:t,on:s,emit:i}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function o(f){let h=null;return f&&typeof f=="string"&&e.isElement&&(h=e.el.querySelector(f)||e.hostEl.querySelector(f),h)?h:(f&&(typeof f=="string"&&(h=Array.from(document.querySelectorAll(f))),e.params.uniqueNavElements&&typeof f=="string"&&Array.isArray(h)&&h.length>1&&e.el.querySelectorAll(f).length===1?h=e.el.querySelector(f):Array.isArray(h)&&h.length===1&&(h=h[0])),f&&!h?f:h)}function n(f,h){const b=e.params.navigation;f=re(f),f.forEach(k=>{k&&(k.classList[h?"add":"remove"](...b.disabledClass.split(" ")),k.tagName==="BUTTON"&&(k.disabled=h),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](b.lockClass))})}function r(){const{nextEl:f,prevEl:h}=e.navigation;if(e.params.loop){n(h,!1),n(f,!1);return}n(h,e.isBeginning&&!e.params.rewind),n(f,e.isEnd&&!e.params.rewind)}function l(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function a(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function c(){const f=e.params.navigation;if(A()&&(e.params.navigation=rt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"})),!(f.nextEl||f.prevEl))return;let h=o(f.nextEl),b=o(f.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:b}),h=re(h),b=re(b);const k=(d,$)=>{d&&(A()?d.addEventListener("click",$==="next"?a:l):d.addEventListener("click",$==="next"?a.bind(this):l.bind(this),"onClick")),!e.enabled&&d&&d.classList.add(...f.lockClass.split(" "))};h.forEach(d=>k(d,"next")),b.forEach(d=>k(d,"prev"))}function p(){let{nextEl:f,prevEl:h}=e.navigation;f=re(f),h=re(h);const b=(k,d)=>{A()?k.removeEventListener("click",d==="next"?a:l):k.removeEventListener("click",d==="next"?a.bind(this):l.bind(this),"onClick"),k.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(k=>b(k,"next")),h.forEach(k=>b(k,"prev"))}s("init",()=>{e.params.navigation.enabled===!1?v():(c(),r())}),s("toEdge fromEdge lock unlock",()=>{r()}),s("destroy",()=>{p()}),s("enable disable",()=>{let{nextEl:f,prevEl:h}=e.navigation;if(f=re(f),h=re(h),e.enabled){r();return}[...f,...h].filter(b=>!!b).forEach(b=>b.classList.add(e.params.navigation.lockClass))}),s("click",(f,h)=>{let{nextEl:b,prevEl:k}=e.navigation;b=re(b),k=re(k);const d=h.target;let $=k.includes(d)||b.includes(d);if(e.isElement&&!$){const C=h.path||h.composedPath&&h.composedPath();C&&($=!!C.find(P=>b.includes(P)||k.includes(P)))}if(e.params.navigation.hideOnClick&&!$){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===d||e.pagination.el.contains(d)))return;let C;b.length?C=b[0].classList.contains(e.params.navigation.hiddenClass):k.length&&(C=k[0].classList.contains(e.params.navigation.hiddenClass)),i(C===!0?"navigationShow":"navigationHide"),[...b,...k].filter(P=>!!P).forEach(P=>P.classList.toggle(e.params.navigation.hiddenClass))}});const u=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),r()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(e.navigation,{enable:u,disable:v,update:r,init:c,destroy:p})}function dd({swiper:e,extendParams:t,on:s,emit:i}){let o=!1,n=null,r=null,l,a,c,p;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function u(){var D;if(!((D=e.params.scrollbar)!=null&&D.el)||!e.scrollbar.el)return;const{scrollbar:T,rtlTranslate:M}=e,{dragEl:x,el:y}=T,E=e.params.scrollbar,R=e.params.loop?e.progressLoop:e.progress;let Z=a,X=(c-a)*R;M?(X=-X,X>0?(Z=a-X,X=0):-X+a>c&&(Z=c+X)):X<0?(Z=a+X,X=0):X+a>c&&(Z=c-X),e.isHorizontal()?(x.style.transform=`translate3d(${X}px, 0, 0)`,x.style.width=`${Z}px`):(x.style.transform=`translate3d(0px, ${X}px, 0)`,x.style.height=`${Z}px`),E.hide&&(clearTimeout(n),y.style.opacity="1",n=setTimeout(()=>{y.style.opacity="0",y.style.transitionDuration="400ms"},1e3))}function v(T){var M;!((M=e.params.scrollbar)!=null&&M.el)||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${T}ms`)}function f(){var y;if(!((y=e.params.scrollbar)!=null&&y.el)||!e.scrollbar.el)return;const{scrollbar:T}=e,{dragEl:M,el:x}=T;M.style.width="",M.style.height="",A()?c=e.isHorizontal()?x.offsetWidth:x.offsetHeight:c=e.isHorizontal()?e.width:e.height,p=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?a=c*p:a=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?M.style.width=`${a}px`:M.style.height=`${a}px`,p>=1?x.style.display="none":x.style.display="",e.params.scrollbar.hide&&(x.style.opacity="0"),e.params.watchOverflow&&e.enabled&&T.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function h(T){return A()?e.isHorizontal()?T.clientX:T.clientY:e.isHorizontal()?T.touches[0].clientX:T.touches[0].clientY}function b(T){const{scrollbar:M,rtlTranslate:x}=e,{el:y}=M;let E;if(A())E=(h(T)-ss(y)[e.isHorizontal()?"left":"top"]-(l!==null?l:a/2))/(c-a);else{const Z=y.scrollbarRect.left||0;E=(h(T)-Z-(l!==null?l:a/2))/(c-a)}E=Math.max(Math.min(E,1),0),x&&(E=1-E);const R=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*E;e.updateProgress(R),e.setTranslate(R),e.updateActiveIndex(),e.updateSlidesClasses()}function k(T,M,x){return M>x&&([M,x]=[x,M]),T>=M&&T<=x}function d(T){const M=e.params.scrollbar,{scrollbar:x,wrapperEl:y}=e,{el:E,dragEl:R}=x;if(o=!0,A())l=T.target===R?h(T)-T.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,T.preventDefault(),T.stopPropagation();else{const Z=e.isHorizontal()?"x":"y",X=Kt(E.dragElRef.style.transform,Z);k(h(T),X,X+a)?l=h(T)-X:l=null}y.style.transitionDuration="100ms",R.style.transitionDuration="100ms",b(T),clearTimeout(r),E.style.transitionDuration="0ms",M.hide&&(E.style.opacity="1"),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),i("scrollbarDragStart",T)}function $(T){const{scrollbar:M,wrapperEl:x}=e,{el:y,dragEl:E}=M;o&&(T.preventDefault?T.preventDefault():T.returnValue=!1,b(T),x.style.transitionDuration="0ms",y.style.transitionDuration="0ms",E.style.transitionDuration="0ms",i("scrollbarDragMove",T))}function C(T){const M=e.params.scrollbar,{scrollbar:x,wrapperEl:y}=e,{el:E}=x;o&&(o=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",y.style.transitionDuration=""),M.hide&&(clearTimeout(r),r=setTimeout(()=>{E.style.opacity="0",E.style.transitionDuration="400ms"},1e3)),i("scrollbarDragEnd",T),M.snapOnRelease&&e.slideToClosest())}function P(T){const{scrollbar:M,params:x}=e,{el:y}=M;if(!y)return;const E=y,R=x.passiveListeners?{passive:!1,capture:!1}:!1,Z=x.passiveListeners?{passive:!0,capture:!1}:!1;if(!E)return;const X=T==="on"?"addEventListener":"removeEventListener";A()?(E[X]("pointerdown",d,R),document[X]("pointermove",$,R),document[X]("pointerup",C,Z)):(E[X]("touchstart",d.bind(this),"touchstart"),E[X]("touchmove",$.bind(this),"touchmove"),E[X]("touchend",C.bind(this),"touchend"))}function L(){var T;!((T=e.params.scrollbar)!=null&&T.el)||!e.scrollbar.el||P("on")}function B(){var T;!((T=e.params.scrollbar)!=null&&T.el)||!e.scrollbar.el||P("off")}function N(){const{scrollbar:T,el:M}=e;e.params.scrollbar=rt(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const x=e.params.scrollbar;if(!x.el)return;let y=null;if(typeof x.el=="string"&&e.isElement&&(y=e.el.querySelector(x.el)),!y&&typeof x.el=="string"){if(y=document.querySelectorAll(x.el)[0],!y)return}else y||(y=x.el);e.params.uniqueNavElements&&typeof x.el=="string"&&y.length>1&&M.querySelectorAll(x.el).length===1&&(y=M.querySelector(x.el)),y.length>0&&(y=y[0]),y==null||y.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass);let E;y&&(A()?(E=y.querySelector(Te(e.params.scrollbar.dragClass)),E||(E=we("div",e.params.scrollbar.dragClass),y.append(E))):E=y.dragElRef),Object.assign(T,{el:y,dragEl:E}),x.draggable&&L(),y&&y.classList[e.enabled?"remove":"add"](...ze(e.params.scrollbar.lockClass))}function U(){const T=e.params.scrollbar,{el:M}=e.scrollbar;M&&M.classList.remove(...ze(e.isHorizontal()?T.horizontalClass:T.verticalClass)),B()}s("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const T=e.params.scrollbar;let{el:M}=e.scrollbar;M=re(M),M.forEach(x=>{x.classList.remove(T.horizontalClass,T.verticalClass),x.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass)})}),s("init",()=>{e.params.scrollbar.enabled===!1?G():(N(),f(),u())}),s("update resize observerUpdate lock unlock changeDirection",()=>{f()}),s("setTranslate",()=>{u()}),s("setTransition",(T,M)=>{v(M)}),s("enable disable",()=>{const{el:T}=e.scrollbar;T&&T.classList[e.enabled?"remove":"add"](...ze(e.params.scrollbar.lockClass))}),s("destroy",()=>{U()});const I=()=>{e.el.classList.remove(...ze(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...ze(e.params.scrollbar.scrollbarDisabledClass)),N(),f(),u()},G=()=>{e.el.classList.add(...ze(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...ze(e.params.scrollbar.scrollbarDisabledClass)),U()};Object.assign(e.scrollbar,{enable:I,disable:G,updateSize:f,setTranslate:u,init:N,destroy:U})}function ud({swiper:e,extendParams:t,on:s}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,o=!1;e.thumbs={swiper:null};function n(){const a=e.thumbs.swiper;if(!a||a.destroyed)return;const{clickedIndex:c,clickedSlide:p}=a;if(p&&p.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof c>"u"||c===null)return;let u;a.params.loop?u=parseInt(a.clickedSlide.getAttribute("data-swiper-slide-index")||"0",10):u=c,e.params.loop?e.slideToLoop(u):e.slideTo(u)}function r(){var p,u;const a=e.params.thumbs;if(i)return!1;i=!0;const c=e.constructor;if(a.swiper instanceof c)e.thumbs.swiper=a.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(Ee(a.swiper)){const v=Object.assign({},a.swiper);Object.assign(v,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new c(v),o=!0}return(p=e.thumbs.swiper)==null||p.el.classList.add(e.params.thumbs.thumbsContainerClass),(u=e.thumbs.swiper)==null||u.on("tap",n),!0}function l(a){const c=e.thumbs.swiper;if(!c||c.destroyed)return;const p=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():c.params.slidesPerView;let u=1;const v=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(u=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),c.slides.forEach(b=>b.classList.remove(v)),c.params.loop||c.params.virtual&&typeof c.params.virtual=="object"&&c.params.virtual.enabled)for(let b=0;b<u;b+=1)A()?at(c.slidesEl,`[data-swiper-slide-index="${e.realIndex+b}"]`).forEach(k=>{k.classList.add(v)}):ts(c.slidesEl,e.realIndex+b,`[data-swiper-slide-index="${e.realIndex+b}"]`).forEach(k=>{k.classList.add(v)});else for(let b=0;b<u;b+=1)c.slides[e.realIndex+b]&&c.slides[e.realIndex+b].classList.add(v);const f=e.params.thumbs.autoScrollOffset,h=f&&!c.params.loop;if(e.realIndex!==c.realIndex||h){const b=c.activeIndex;let k,d;if(c.params.loop){const $=c.slides.filter(C=>C.getAttribute("data-swiper-slide-index")===String(e.realIndex))[0];k=c.slides.indexOf($),d=e.activeIndex>e.previousIndex?"next":"prev"}else k=e.realIndex,d=k>e.previousIndex?"next":"prev";h&&(k+=d==="next"?f:-1*f),c.visibleSlidesIndexes&&c.visibleSlidesIndexes.indexOf(k)<0&&(c.params.centeredSlides?k>b?k=k-Math.floor(p/2)+1:k=k+Math.floor(p/2)-1:k>b&&c.params.slidesPerGroup===1&&(k=k-p+1),c.slideTo(k,a?0:void 0))}}s("beforeInit",()=>{const{thumbs:a}=e.params;if(!(!a||!a.swiper))if(A()&&(typeof a.swiper=="string"||a.swiper instanceof HTMLElement)){const c=()=>{const u=typeof a.swiper=="string"?document.querySelector(a.swiper):a.swiper;if(u&&u.swiper)a.swiper=u.swiper,r(),l(!0);else if(u){const v=`${e.params.eventsPrefix}init`,f=h=>{a.swiper=h.detail[0],u.removeEventListener(v,f),r(),l(!0),a.swiper.update(),e.update()};u.addEventListener(v,f)}return u},p=()=>{if(e.destroyed)return;c()||requestAnimationFrame(p)};requestAnimationFrame(p)}else r(),l(!0)}),s("slideChange update resize observerUpdate",()=>{l()}),s("setTransition",(a,c)=>{const p=e.thumbs.swiper;!p||p.destroyed||p.setTransition(c)}),s("beforeDestroy",()=>{const a=e.thumbs.swiper;!a||a.destroyed||o&&a.destroy()}),Object.assign(e.thumbs,{init:r,update:l})}const Ae=(e,t)=>{const s=Le(t);return s!==t&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s},We=({swiper:e,duration:t,transformElements:s,allSlides:i})=>{const{activeIndex:o}=e,n=r=>r.parentElement?r.parentElement:e.slides.filter(a=>a.shadowRoot&&a.shadowRoot===r.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let r=!1,l;i?l=s:l=s.filter(a=>{const c=a.classList.contains("swiper-slide-transform")?n(a):a;return e.getSlideIndex(c)===o}),l.forEach(a=>{Me(a,()=>{var p;if(r||!e||e.destroyed)return;r=!0,e.animating=!1;const c=A()?new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0}):{bubbles:!0,cancelable:!0,target:{id:`swiperWrapper${(p=e.adapterEl)==null?void 0:p.uid}`}};e.wrapperEl.dispatchEvent(c)})})}};function md({swiper:e,extendParams:t,on:s}){t({fadeEffect:{crossFade:!1}}),Ce({effect:"fade",swiper:e,on:s,setTranslate:()=>{var l;const{slides:n}=e,r=e.params.fadeEffect;for(let a=0;a<n.length;a+=1){const c=e.slides[a];let u=-c.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let v=0;e.isHorizontal()||(v=u,u=0);const f=(l=e.params.fadeEffect)!=null&&l.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),h=Ae(r,c);h.style.opacity=String(f),h.style.transform=`translate3d(${u}px, ${v}px, 0px)`}},setTransition:n=>{const r=e.slides.map(l=>Le(l));r.forEach(l=>{l.style.transitionDuration=`${n}ms`}),We({swiper:e,duration:n,transformElements:r,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const ue=(e,t,s)=>{const i=`swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,o=Le(t);let n;return A()?(n=o.querySelector(`.${i.split(" ").join(".")}`),n||(n=we("div",i.split(" ")),o.append(n))):(n=o.getShadowList().find(r=>r.classList.containsMultiple(`.${i.split(" ").join(".")}`)),n||(n={...rs(i),...ls()},o.addShadowItem(n))),n};function cs({swiper:e,extendParams:t,on:s}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(l,a,c)=>{if(A()){let p=c?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),u=c?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");p||(p=we("div",`swiper-slide-shadow-cube swiper-slide-shadow-${c?"left":"top"}`.split(" ")),l.append(p)),u||(u=we("div",`swiper-slide-shadow-cube swiper-slide-shadow-${c?"right":"bottom"}`.split(" ")),l.append(u)),p&&(p.style.opacity=String(Math.max(-a,0))),u&&(u.style.opacity=String(Math.max(a,0)))}else{let p=c?l.getShadowByClass("swiper-slide-shadow-left"):l.getShadowByClass("swiper-slide-shadow-top"),u=c?l.getShadowByClass("swiper-slide-shadow-right"):l.getShadowByClass("swiper-slide-shadow-bottom");p||(p=ue("cube",l,c?"left":"top")),u||(u=ue("cube",l,c?"right":"bottom")),p&&(p.style.opacity=String(Math.max(-a,0))),u&&(u.style.opacity=String(Math.max(a,0)))}};Ce({effect:"cube",swiper:e,on:s,setTranslate:()=>{var B;const{el:l,wrapperEl:a,slides:c,width:p,height:u,rtlTranslate:v,size:f,browser:h}=e;if(!a)return;const b=nt(e),k=e.params.cubeEffect,d=e.isHorizontal(),$=e.virtual&&typeof e.params.virtual=="object"&&((B=e.params.virtual)==null?void 0:B.enabled);let C=0,P=null;k.shadow&&(A()?d?(P=a.querySelector(".swiper-cube-shadow"),P||(P=we("div","swiper-cube-shadow"),a.append(P)),P.style.height=`${p}px`):(P=l.querySelector(".swiper-cube-shadow"),P||(P=we("div","swiper-cube-shadow"),l.append(P))):(e.wrapperEl.swiperShadowRef.value.classList.add("swiper-cube-shadow"),P=e.wrapperEl.swiperShadowRef.value,d&&(P.style.height=`${p}px`)));for(let N=0;N<c.length;N+=1){const U=c[N];let I=N;$&&(I=parseInt(U.getAttribute("data-swiper-slide-index")||"0",10));let G=I*90,T=Math.floor(G/360);v&&(G=-G,T=Math.floor(-G/360));const M=Math.max(Math.min(U.progress,1),-1);let x=0,y=0,E=0;I%4===0?(x=-T*4*f,E=0):(I-1)%4===0?(x=0,E=-T*4*f):(I-2)%4===0?(x=f+T*4*f,E=f):(I-3)%4===0&&(x=-f,E=3*f+f*4*T),v&&(x=-x),d||(y=x,x=0);const R=`rotateX(${b(d?0:-G)}deg) rotateY(${b(d?G:0)}deg) translate3d(${x}px, ${y}px, ${E}px)`;M<=1&&M>-1&&(C=I*90+M*90,v&&(C=-I*90-M*90)),U.style.transform=R,k.slideShadows&&i(U,M,d)}if(a.style.transformOrigin=`50% 50% -${f/2}px`,a.style["-webkit-transform-origin"]=`50% 50% -${f/2}px`,k.shadow&&P)if(d)P.style.transform=`translate3d(0px, ${p/2+k.shadowOffset}px, ${-p/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${k.shadowScale})`;else{const N=Math.abs(C)-Math.floor(Math.abs(C)/90)*90,U=1.5-(Math.sin(N*2*Math.PI/360)/2+Math.cos(N*2*Math.PI/360)/2),I=k.shadowScale,G=k.shadowScale/U,T=k.shadowOffset;P.style.transform=`scale3d(${I}, 1, ${G}) translate3d(0px, ${u/2+T}px, ${-u/2/G}px) rotateX(-89.99deg)`}const L=(h.isSafari||h.isWebView)&&h.needPerspectiveFix?-f/2:0;a.style.transform=`translate3d(0px,0,${L}px) rotateX(${b(e.isHorizontal()?0:C)}deg) rotateY(${b(e.isHorizontal()?-C:0)}deg)`,a.style.setProperty("--swiper-cube-translate-z",`${L}px`)},setTransition:l=>{var p;const{el:a,slides:c}=e;if(c.forEach(u=>{u.style.transitionDuration=`${l}ms`,A()?u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>{v.style.transitionDuration=`${l}ms`}):u.getShadowList().forEach(v=>{v.style.transitionDuration=`${l}ms`})}),(p=e.params.cubeEffect)!=null&&p.shadow&&!e.isHorizontal())if(A()){const u=a.querySelector(".swiper-cube-shadow");u&&(u.style.transitionDuration=`${l}ms`)}else{const u=e.wrapperEl.swiperShadowRef.value;u&&(u.style.transitionDuration=`${l}ms`)}},recreateShadows:()=>{const l=e.isHorizontal();e.slides.forEach(a=>{const c=Math.max(Math.min(a.progress,1),-1);i(a,c,l)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function ds({swiper:e,extendParams:t,on:s}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Ce({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:n,height:r,slides:l,slidesSizesGrid:a}=e,c=e.params.coverflowEffect,p=e.isHorizontal(),u=e.translate,v=p?-u+n/2:-u+r/2,f=p?c.rotate:-c.rotate,h=c.depth,b=nt(e);for(let k=0;k<l.length;k+=1){const d=l[k],$=a[k],C=d.swiperSlideOffset,P=(v-C-$/2)/$,L=typeof c.modifier=="function"?c.modifier(P):P*c.modifier;let B=p?f*L:0,N=p?0:f*L,U=-h*Math.abs(L);const{stretch:I}=c,G=typeof I=="string"&&I.indexOf("%")!==-1?parseFloat(I)/100*$:I;let T=p?0:Number(G)*L,M=p?Number(G)*L:0,x=1-(1-c.scale)*Math.abs(L);Math.abs(M)<.001&&(M=0),Math.abs(T)<.001&&(T=0),Math.abs(U)<.001&&(U=0),Math.abs(B)<.001&&(B=0),Math.abs(N)<.001&&(N=0),Math.abs(x)<.001&&(x=0);const y=`translate3d(${M}px,${T}px,${U}px)  
         rotateX(${b(N)}deg) rotateY(${b(B)}deg) scale(${x})`,E=Ae(c,d);if(E.style.transform=y,d.style.zIndex=String(-Math.abs(Math.round(L))+1),c.slideShadows)if(A()){let R=p?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),Z=p?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");R||(R=ue("coverflow",d,p?"left":"top")),Z||(Z=ue("coverflow",d,p?"right":"bottom")),R&&(R.style.opacity=String(L>0?L:0)),Z&&(Z.style.opacity=String(-L>0?-L:0))}else{let R=p?d.getShadowByClass("swiper-slide-shadow-left"):d.getShadowByClass("swiper-slide-shadow-top"),Z=p?d.getShadowByClass("swiper-slide-shadow-right"):d.getShadowByClass("swiper-slide-shadow-bottom");R||(R=ue("coverflow",d,p?"left":"top")),Z||(Z=ue("coverflow",d,p?"right":"bottom")),R&&(R.style.opacity=String(L>0?L:0)),Z&&(Z.style.opacity=String(-L>0?-L:0))}}},setTransition:n=>{e.slides.map(l=>Le(l)).forEach(l=>{l.style.transitionDuration=`${n}ms`,A()?l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>{a.style.transitionDuration=`${n}ms`}):l.getShadowList().forEach(a=>{a.style.transitionDuration=`${n}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function us({swiper:e,extendParams:t,on:s}){t({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(l,a)=>{if(A()){let c=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),p=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");c||(c=ue("flip",l,e.isHorizontal()?"left":"top")),p||(p=ue("flip",l,e.isHorizontal()?"right":"bottom")),c&&(c.style.opacity=String(Math.max(-a,0))),p&&(p.style.opacity=String(Math.max(a,0)))}else{let c=e.isHorizontal()?l.getShadowByClass("swiper-slide-shadow-left"):l.getShadowByClass("swiper-slide-shadow-top"),p=e.isHorizontal()?l.getShadowByClass("swiper-slide-shadow-right"):l.getShadowByClass("swiper-slide-shadow-bottom");c||(c=ue("flip",l,e.isHorizontal()?"left":"top")),p||(p=ue("flip",l,e.isHorizontal()?"right":"bottom")),c&&(c.style.opacity=String(Math.max(-a,0))),p&&(p.style.opacity=String(Math.max(a,0)))}};Ce({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:l,rtlTranslate:a}=e,c=e.params.flipEffect,p=nt(e);for(let u=0;u<l.length;u+=1){const v=l[u],{progress:f}=v,h=c.limitRotation?Math.max(Math.min(f,1),-1):f,b=v.swiperSlideOffset;let d=-180*h,$=0,C=e.params.cssMode?-b-e.translate:-b,P=0;e.isHorizontal()?a&&(d=-d):(P=C,C=0,$=-d,d=0),v.style.zIndex=String(-Math.abs(Math.round(f))+l.length),c.slideShadows&&i(v,h);const L=`translate3d(${C}px, ${P}px, 0px) rotateX(${p($)}deg) rotateY(${p(d)}deg)`,B=Ae(c,v);B.style.transform=L}},setTransition:l=>{const a=e.slides.map(c=>Le(c));a.forEach(c=>{c.style.transitionDuration=`${l}ms`,A()?c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>{p.style.transitionDuration=`${l}ms`}):c.getShadowList().forEach(p=>{p.style.transitionDuration=`${l}ms`})}),We({swiper:e,duration:l,transformElements:a})},recreateShadows:()=>{e.slides.forEach(l=>{var p;const{progress:a}=l,c=(p=e.params.flipEffect)!=null&&p.limitRotation?Math.max(Math.min(a,1),-1):a;i(l,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function pd({swiper:e,extendParams:t,on:s}){t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),Ce({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:n,activeIndex:r,rtlTranslate:l}=e,a=e.params.cardsEffect,{startTranslate:c,isTouched:p}=e.touchEventsData,u=l?-e.translate:e.translate;for(let v=0;v<n.length;v+=1){const f=n[v],h=f.progress,b=Math.min(Math.max(h,-4),4);let k=f.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(k-=n[0].swiperSlideOffset);let d=e.params.cssMode?-k-e.translate:-k,$=0;const C=-100*Math.abs(b);let P=1,L=-a.perSlideRotate*b,B=a.perSlideOffset-Math.abs(b)*.75;const N=e.virtual&&e.params.virtual.enabled?e.virtual.from+v:v,U=(N===r||N===r-1)&&b>0&&b<1&&(p||e.params.cssMode)&&u<c,I=(N===r||N===r+1)&&b<0&&b>-1&&(p||e.params.cssMode)&&u>c;if(U||I){const x=(1-Math.abs((Math.abs(b)-.5)/.5))**.5;L+=-28*b*x,P+=-.5*x,B+=96*x,$=`${-25*x*Math.abs(b)}%`}if(b<0?d=`calc(${d}px ${l?"-":"+"} (${B*Math.abs(b)}%))`:b>0?d=`calc(${d}px ${l?"-":"+"} (-${B*Math.abs(b)}%))`:d=`${d}px`,!e.isHorizontal()){const x=$;$=d,d=x}const G=b<0?`${1+(1-P)*b}`:`${1-(1-P)*b}`,T=`translate3d(${d}, ${$}, ${C}px) rotateZ(${a.rotate?l?-L:L:0}deg) scale(${G})`;if(a.slideShadows)if(A()){let x=f.querySelector(".swiper-slide-shadow");x||(x=ue("cards",f)),x&&(x.style.opacity=String(Math.min(Math.max((Math.abs(b)-.5)/.5,0),1)))}else{let x=f.getShadowByClass("swiper-slide-shadow");x||(x=ue("cards",f)),x&&(x.style.opacity=String(Math.min(Math.max((Math.abs(b)-.5)/.5,0),1)))}f.style.zIndex=String(-Math.abs(Math.round(h))+n.length);const M=Ae(a,f);M.style.transform=T}},setTransition:n=>{const r=e.slides.map(l=>Le(l));r.forEach(l=>{l.style.transitionDuration=`${n}ms`,A()?l.querySelectorAll(".swiper-slide-shadow").forEach(a=>{a.style.transitionDuration=`${n}ms`}):l.getShadowList().forEach(a=>{a.style.transitionDuration=`${n}ms`})}),We({swiper:e,duration:n,transformElements:r})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function ms({swiper:e,extendParams:t,on:s}){t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=r=>typeof r=="string"?r:`${r}px`;Ce({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:r,wrapperEl:l,slidesSizesGrid:a}=e,c=e.params.creativeEffect,{progressMultiplier:p}=c,u=e.params.centeredSlides;if(u){const v=a[0]/2-(e.params.slidesOffsetBefore||0)||0;l.style.transform=`translateX(calc(50% - ${v}px))`}for(let v=0;v<r.length;v+=1){const f=r[v],h=f.progress,b=Math.min(Math.max(h,-c.limitProgress),c.limitProgress);let k=b;u||(k=Math.min(Math.max(f.originalProgress,-c.limitProgress),c.limitProgress));const d=f.swiperSlideOffset,$=[e.params.cssMode?-d-e.translate:-d,0,0],C=[0,0,0];let P=!1;e.isHorizontal()||($[1]=$[0],$[0]=0);let L={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};b<0?(L=c.next,P=!0):b>0&&(L=c.prev,P=!0),$.forEach((M,x)=>{$[x]=`calc(${M}px + (${i(L.translate[x])} * ${Math.abs(b*p)}))`}),C.forEach((M,x)=>{C[x]=L.rotate[x]*Math.abs(b*p)}),f.style.zIndex=String(-Math.abs(Math.round(h))+r.length);const B=$.join(", "),N=`rotateX(${C[0]}deg) rotateY(${C[1]}deg) rotateZ(${C[2]}deg)`,U=k<0?`scale(${1+(1-L.scale)*k*p})`:`scale(${1-(1-L.scale)*k*p})`,I=k<0?1+(1-L.opacity)*k*p:1-(1-L.opacity)*k*p,G=`translate3d(${B}) ${N} ${U}`;if(P&&L.shadow||!P)if(A()){let M=f.querySelector(".swiper-slide-shadow");if(!M&&L.shadow&&(M=ue("creative",f)),M){const x=c.shadowPerProgress?b*(1/c.limitProgress):b;M.style.opacity=String(Math.min(Math.max(Math.abs(x),0),1))}}else{let M=f.getShadowByClass("swiper-slide-shadow");if(!M&&L.shadow&&(M=ue("creative",f)),M){const x=c.shadowPerProgress?b*(1/c.limitProgress):b;M.style.opacity=String(Math.min(Math.max(Math.abs(x),0),1))}}const T=Ae(c,f);T.style.transform=G,T.style.opacity=String(I),L.origin&&(T.style.transformOrigin=L.origin)}},setTransition:r=>{const l=e.slides.map(a=>Le(a));l.forEach(a=>{a.style.transitionDuration=`${r}ms`,A()?a.querySelectorAll(".swiper-slide-shadow").forEach(c=>{c.style.transitionDuration=`${r}ms`}):a.getShadowList().forEach(c=>{c.style.transitionDuration=`${r}ms`})}),We({swiper:e,duration:r,transformElements:l,allSlides:!0})},perspective:()=>{var r;return!!((r=e.params.creativeEffect)!=null&&r.perspective)},overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function fd({swiper:e,extendParams:t,emit:s,once:i}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function o(){if(e.params.cssMode)return;const l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function n(){if(e.params.cssMode)return;const{touchEventsData:l,touches:a}=e;l.velocities.length===0&&l.velocities.push({position:a[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:a[e.isHorizontal()?"currentX":"currentY"],time:Ze()})}function r({currentPos:l}){var b,k,d,$,C,P,L,B,N,U,I,G,T;if(e.params.cssMode)return;const{params:a,wrapperEl:c,rtlTranslate:p,snapGrid:u,touchEventsData:v}=e,h=Ze()-v.touchStartTime;if(l<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(l>-e.maxTranslate()){e.slides.length<u.length?e.slideTo(u.length-1):e.slideTo(e.slides.length-1);return}if((b=a.freeMode)!=null&&b.momentum){if(v.velocities.length>1){const D=v.velocities.pop(),q=v.velocities.pop();if(!D||!q)return;const te=D.position-q.position,ae=D.time-q.time;e.velocity=te/ae,e.velocity/=2,Math.abs(e.velocity)<((k=a.freeMode)==null?void 0:k.minimumVelocity)&&(e.velocity=0),(ae>150||Ze()-D.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=(d=a.freeMode)==null?void 0:d.momentumVelocityRatio,v.velocities.length=0;let M=1e3*(($=a.freeMode)==null?void 0:$.momentumRatio);const x=e.velocity*M;let y=e.translate+x;p&&(y=-y);let E=!1,R;const Z=Math.abs(e.velocity)*20*((C=a.freeMode)==null?void 0:C.momentumBounceRatio);let X;if(y<e.maxTranslate())(P=a.freeMode)!=null&&P.momentumBounce?(y+e.maxTranslate()<-Z&&(y=e.maxTranslate()-Z),R=e.maxTranslate(),E=!0,v.allowMomentumBounce=!0):y=e.maxTranslate(),a.loop&&a.centeredSlides&&(X=!0);else if(y>e.minTranslate())(L=a.freeMode)!=null&&L.momentumBounce?(y-e.minTranslate()>Z&&(y=e.minTranslate()+Z),R=e.minTranslate(),E=!0,v.allowMomentumBounce=!0):y=e.minTranslate(),a.loop&&a.centeredSlides&&(X=!0);else if((B=a.freeMode)!=null&&B.sticky){let D;for(let q=0;q<u.length;q+=1)if(u[q]>-y){D=q;break}Math.abs(u[D]-y)<Math.abs(u[D-1]-y)||e.swipeDirection==="next"?y=u[D]:y=u[D-1],y=-y}if(X&&i("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(p?M=Math.abs((-y-e.translate)/e.velocity):M=Math.abs((y-e.translate)/e.velocity),(N=a.freeMode)!=null&&N.sticky){const D=Math.abs((p?-y:y)-e.translate),q=e.slidesSizesGrid[e.activeIndex];D<q?M=a.speed:D<2*q?M=a.speed*1.5:M=a.speed*2.5}}else if((U=a.freeMode)!=null&&U.sticky){e.slideToClosest();return}(I=a.freeMode)!=null&&I.momentumBounce&&E?(e.updateProgress(R),e.setTransition(M),e.setTranslate(y),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Me(c,()=>{!e||e.destroyed||!v.allowMomentumBounce||(s("momentumBounce"),e.setTransition(a.speed),setTimeout(()=>{e.setTranslate(R),Me(c,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(y),e.setTransition(M),e.setTranslate(y),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Me(c,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(y),e.updateActiveIndex(),e.updateSlidesClasses()}else if((G=a.freeMode)!=null&&G.sticky){e.slideToClosest();return}else a.freeMode&&s("_freeModeNoMomentumRelease");(!((T=a.freeMode)!=null&&T.momentum)||h>=a.longSwipesMs)&&(s("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:o,onTouchMove:n,onTouchEnd:r}})}function vd({swiper:e,extendParams:t,on:s}){t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function i(a,c){const p=function(){let h,b,k;return(d,$)=>{for(b=-1,h=d.length;h-b>1;)k=h+b>>1,d[k]<=$?b=k:h=k;return h}}();this.x=a,this.y=c,this.lastIndex=a.length-1;let u,v;return this.interpolate=function(h){return h?(v=p(this.x,h),u=v-1,(h-this.x[u])*(this.y[v]-this.y[u])/(this.x[v]-this.x[u])+this.y[u]):0},this}function o(a){e.controller.spline=e.params.loop?new i(e.slidesGrid,a.slidesGrid):new i(e.snapGrid,a.snapGrid)}function n(a,c){const p=e.controller.control;let u,v;const f=e.constructor;function h(b){var d,$;if(b.destroyed)return;const k=e.rtlTranslate?-e.translate:e.translate;((d=e.params.controller)==null?void 0:d.by)==="slide"&&(o(b),v=-e.controller.spline.interpolate(-k)),(!v||(($=e.params.controller)==null?void 0:$.by)==="container")&&(u=(b.maxTranslate()-b.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(u)||!Number.isFinite(u))&&(u=1),v=(k-e.minTranslate())*u+b.minTranslate()),e.params.controller.inverse&&(v=b.maxTranslate()-v),b.updateProgress(v),b.setTranslate(v,e),b.updateActiveIndex(),b.updateSlidesClasses()}if(Array.isArray(p))for(let b=0;b<p.length;b+=1)p[b]!==c&&p[b]instanceof f&&h(p[b]);else p instanceof f&&c!==p&&h(p)}function r(a,c){const p=e.constructor,u=e.controller.control;let v;function f(h){h.destroyed||(h.setTransition(a,e),a!==0&&(h.transitionStart(),h.params.autoHeight&&Xt(()=>{h.updateAutoHeight()}),Me(h.wrapperEl,()=>{u&&h.transitionEnd()})))}if(Array.isArray(u))for(v=0;v<u.length;v+=1)u[v]!==c&&u[v]instanceof p&&f(u[v]);else u instanceof p&&c!==u&&f(u)}function l(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}s("beforeInit",()=>{var a,c,p;if(typeof window<"u"&&A()&&(typeof((a=e.params.controller)==null?void 0:a.control)=="string"||((c=e.params.controller)==null?void 0:c.control)instanceof HTMLElement)){document.querySelectorAll(e.params.controller.control).forEach(v=>{if(e.controller.control||(e.controller.control=[]),v.swiper)e.controller.control.push(v.swiper);else{const f=h=>{e.controller.control.push(h.detail[0]),e.update(),v.removeEventListener(`${e.params.eventsPrefix}init`,f)};v.addEventListener(`${e.params.eventsPrefix}init`,f)}});return}e.controller.control=(p=e.params.controller)==null?void 0:p.control}),s("update",()=>{l()}),s("resize",()=>{l()}),s("observerUpdate",()=>{l()}),s("setTranslate",(a,c,p)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(c,p)}),s("setTransition",(a,c,p)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(c,p)}),Object.assign(e.controller,{setTranslate:n,setTransition:r})}function hd({swiper:e,extendParams:t,on:s,emit:i}){t({virtual:{enabled:!1,slides:[],data:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let o;e.virtual={cache:{},from:void 0,to:void 0,slides:[],data:[],offset:0,slidesGrid:[]};function n(u,v){const f=e.params.virtual;if(f.cache&&e.virtual.cache[v])return e.virtual.cache[v];let h;if(f.renderSlide){if(h=f.renderSlide.call(e,u,v),typeof h=="string"){const b=document.createElement("div");b.innerHTML=h,h=b.children[0]}}else e.isElement?h=we("swiper-slide"):h=we("div",e.params.slideClass);return h.setAttribute("data-swiper-slide-index",String(v)),f.renderSlide||(h.innerHTML=u),f.cache&&(e.virtual.cache[v]=h),h}function r(u,v){var le,pe,fe;const{slidesPerView:f,slidesPerGroup:h,centeredSlides:b,loop:k,initialSlide:d}=e.params;if(v&&!k&&d>0)return;const{addSlidesBefore:$,addSlidesAfter:C}=e.params.virtual,{from:P,to:L,slides:B,slidesGrid:N,offset:U,data:I}=e.virtual;e.params.cssMode||e.updateActiveIndex();const G=e.activeIndex||0;let T;e.rtlTranslate?T="right":T=e.isHorizontal()?"left":"top";let M,x;b?(M=Math.floor(f/2)+h+C,x=Math.floor(f/2)+h+$):(M=f+h-1+C,x=(k?f:h)+$);let y=G-x,E=G+M;k||(y=Math.max(y,0),E=Math.min(E,B.length-1));let R=(e.slidesGrid[y]||0)-(e.slidesGrid[0]||0);k&&G>=x?(y-=x,b||(R+=e.slidesGrid[0])):k&&G<x&&(y=-x,b&&(R+=e.slidesGrid[0])),Object.assign(e.virtual,{from:y,to:E,offset:R,slidesGrid:e.slidesGrid,slidesBefore:x,slidesAfter:M});function Z(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),i("virtualUpdate")}if(P===y&&L===E&&!u){e.slidesGrid!==N&&R!==U&&e.slides.forEach(K=>{K.style[T]=`${R-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),i("virtualUpdate");return}if((le=e.params.virtual)!=null&&le.renderExternal){(pe=e.params.virtual.renderExternal)==null||pe.call(e,{offset:R,from:y,to:E,slides:function(){const oe=[];for(let ce=y;ce<=E;ce+=1)oe.push(B[ce]);return oe}(),data:function(){const oe=[];for(let ce=y;ce<=E;ce+=1)oe.push(I[ce]);return oe}()}),(fe=e.params.virtual)!=null&&fe.renderExternalUpdate?Z():i("virtualUpdate");return}const X=[],D=[],q=K=>{let oe=K;return K<0?oe=B.length+K:oe>=B.length&&(oe=oe-B.length),oe};if(u)e.slides.filter(K=>K.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(K=>{K.remove()});else for(let K=P;K<=L;K+=1)if(K<y||K>E){const oe=q(K);e.slides.filter(ce=>ce.matches(`.${e.params.slideClass}[data-swiper-slide-index="${oe}"], swiper-slide[data-swiper-slide-index="${oe}"]`)).forEach(ce=>{ce.remove()})}const te=k?-B.length:0,ae=k?B.length*2:B.length;for(let K=te;K<ae;K+=1)if(K>=y&&K<=E){const oe=q(K);typeof L>"u"||u?D.push(oe):(K>L&&D.push(oe),K<P&&X.push(oe))}if(D.forEach(K=>{e.slidesEl.append(n(B[K],K))}),k)for(let K=X.length-1;K>=0;K-=1){const oe=X[K];e.slidesEl.prepend(n(B[oe],oe))}else X.sort((K,oe)=>oe-K),X.forEach(K=>{e.slidesEl.prepend(n(B[K],K))});at(e.slidesEl,".swiper-slide, swiper-slide").forEach(K=>{K.style[T]=`${R-Math.abs(e.cssOverflowAdjustment())}px`}),Z()}function l(u){if(typeof u=="object"&&"length"in u)for(let v=0;v<u.length;v+=1)u[v]&&e.virtual.slides.push(u[v]);else e.virtual.slides.push(u);r(!0)}function a(u){const{activeIndex:v}=e;let f=v+1,h=1;if(Array.isArray(u)){for(let b=0;b<u.length;b+=1)u[b]&&e.virtual.slides.unshift(u[b]);f=v+u.length,h=u.length}else e.virtual.slides.unshift(u);if(e.params.virtual.cache){const{cache:b}=e.virtual,k={};Object.keys(b).forEach(d=>{const $=b[d],C=$.getAttribute("data-swiper-slide-index");C&&$.setAttribute("data-swiper-slide-index",String(Number(C)+h)),k[Number(d)+h]=$}),e.virtual.cache=k}r(!0),e.slideTo(f,0)}function c(u){if(typeof u>"u"||u===null)return;let{activeIndex:v}=e;if(Array.isArray(u))for(let f=u.length-1;f>=0;f-=1)e.params.virtual.cache&&(delete e.virtual.cache[u[f]],Object.keys(e.virtual.cache).forEach(h=>{h>slidesIndexes&&(e.virtual.cache[h-1]=e.virtual.cache[h],e.virtual.cache[h-1].setAttribute("data-swiper-slide-index",h-1),delete e.virtual.cache[h])})),e.virtual.slides.splice(u[f],1),u[f]<v&&(v-=1),v=Math.max(v,0);else e.params.virtual.cache&&(delete e.virtual.cache[u],Object.keys(e.virtual.cache).forEach(f=>{f>slidesIndexes&&(e.virtual.cache[f-1]=e.virtual.cache[f],e.virtual.cache[f-1].setAttribute("data-swiper-slide-index",f-1),delete e.virtual.cache[f])})),e.virtual.slides.splice(u,1),u<v&&(v-=1),v=Math.max(v,0);r(!0),e.slideTo(v,0)}function p(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),r(!0),e.slideTo(0,0)}s("beforeInit",()=>{var v;if(!e.params.virtual.enabled)return;let u;if(typeof((v=e.passedParams.virtual)==null?void 0:v.slides)>"u"){const f=Array.from(e.slidesEl.children).filter(h=>A()?h.matches(`.${e.params.slideClass}, swiper-slide`):h);f&&f.length&&(u=!0,f.forEach((h,b)=>{h.setAttribute("data-swiper-slide-index",String(b)),e.virtual.cache[b]=h,A()&&h.remove()}))}u||(e.virtual.slides=e.params.virtual.slides||[]),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,r(!1,!0)}),s("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(o),o=setTimeout(()=>{r()},100)):r())}),s("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&es(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:l,prependSlide:a,removeSlide:c,removeAllSlides:p,update:r})}const ps=O({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,s)=>(m(),_("span",{class:se(["VPBadge",t.type])},[S(t.$slots,"default",{},()=>[de(J(t.text),1)])],2))}}),fs={key:0,class:"VPBackdrop"},vs=O({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,s)=>(m(),j(st,{name:"fade"},{default:z(()=>[t.show?(m(),_("div",fs)):H("",!0)]),_:1}))}}),hs=F(vs,[["__scopeId","data-v-b647b0e2"]]),ee=Mt;function gs(e,t){let s,i=!1;return()=>{s&&clearTimeout(s),i?s=setTimeout(e,t):(e(),(i=!0)&&setTimeout(()=>i=!1,t))}}function Qe(e){return/^\//.test(e)?e:`/${e}`}function lt(e){const{pathname:t,search:s,hash:i,protocol:o}=new URL(e,"http://a.com");if(It(e)||e.startsWith("#")||!o.startsWith("http")||!At(t))return e;const{site:n}=ee(),r=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,n.value.cleanUrls?"":".html")}${s}${i}`);return ot(r)}function Ve({correspondingLink:e=!1}={}){const{site:t,localeIndex:s,page:i,theme:o,hash:n}=ee(),r=W(()=>{var a,c;return{label:(a=t.value.locales[s.value])==null?void 0:a.label,link:((c=t.value.locales[s.value])==null?void 0:c.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:W(()=>Object.entries(t.value.locales).flatMap(([a,c])=>r.value.label===c.label?[]:{text:c.label,link:bs(c.link||(a==="root"?"/":`/${a}/`),o.value.i18nRouting!==!1&&e,i.value.relativePath.slice(r.value.link.length-1),!t.value.cleanUrls)+n.value})),currentLang:r}}function bs(e,t,s,i){return t?e.replace(/\/$/,"")+Qe(s.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,i?".html":"")):e}const ys={class:"NotFound"},_s={class:"code"},ks={class:"title"},ws={class:"quote"},$s={class:"action"},Ss=["href","aria-label"],zs=O({__name:"NotFound",setup(e){const{theme:t}=ee(),{currentLang:s}=Ve();return(i,o)=>{var n,r,l,a,c;return m(),_("div",ys,[g("p",_s,J(((n=w(t).notFound)==null?void 0:n.code)??"404"),1),g("h1",ks,J(((r=w(t).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=g("div",{class:"divider"},null,-1)),g("blockquote",ws,J(((l=w(t).notFound)==null?void 0:l.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),g("div",$s,[g("a",{class:"link",href:w(ot)(w(s).link),"aria-label":((a=w(t).notFound)==null?void 0:a.linkLabel)??"go to home"},J(((c=w(t).notFound)==null?void 0:c.linkText)??"Take me home"),9,Ss)])])}}}),xs=F(zs,[["__scopeId","data-v-263fd53c"]]);function zt(e,t){if(Array.isArray(e))return Ne(e);if(e==null)return[];t=Qe(t);const s=Object.keys(e).sort((o,n)=>n.split("/").length-o.split("/").length).find(o=>t.startsWith(Qe(o))),i=s?e[s]:[];return Array.isArray(i)?Ne(i):Ne(i.items,i.base)}function Ls(e){const t=[];let s=0;for(const i in e){const o=e[i];if(o.items){s=t.push(o);continue}t[s]||t.push({items:[]}),t[s].items.push(o)}return t}function Ts(e){const t=[];function s(i){for(const o of i)o.text&&o.link&&t.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&s(o.items)}return s(e),t}function et(e,t){return Array.isArray(t)?t.some(s=>et(e,s)):xe(e,t.link)?!0:t.items?et(e,t.items):!1}function Ne(e,t){return[...e].map(s=>{const i={...s},o=i.base||t;return o&&i.link&&(i.link=o+i.link),i.items&&(i.items=Ne(i.items,o)),i})}function Se(){const{frontmatter:e,page:t,theme:s}=ee(),i=Je("(min-width: 960px)"),o=Y(!1),n=W(()=>{const b=s.value.sidebar,k=t.value.relativePath;return b?zt(b,k):[]}),r=Y(n.value);_e(n,(b,k)=>{JSON.stringify(b)!==JSON.stringify(k)&&(r.value=n.value)});const l=W(()=>e.value.sidebar!==!1&&r.value.length>0&&e.value.layout!=="home"),a=W(()=>c?e.value.aside==null?s.value.aside==="left":e.value.aside==="left":!1),c=W(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:s.value.aside!==!1),p=W(()=>l.value&&i.value),u=W(()=>l.value?Ls(r.value):[]);function v(){o.value=!0}function f(){o.value=!1}function h(){o.value?f():v()}return{isOpen:o,sidebar:r,sidebarGroups:u,hasSidebar:l,hasAside:c,leftAside:a,isSidebarEnabled:p,open:v,close:f,toggle:h}}function Cs(e,t){let s;je(()=>{s=e.value?document.activeElement:void 0}),he(()=>{window.addEventListener("keyup",i)}),Re(()=>{window.removeEventListener("keyup",i)});function i(o){o.key==="Escape"&&e.value&&(t(),s==null||s.focus())}}function Es(e){const{page:t,hash:s}=ee(),i=Y(!1),o=W(()=>e.value.collapsed!=null),n=W(()=>!!e.value.link),r=Y(!1),l=()=>{r.value=xe(t.value.relativePath,e.value.link)};_e([t,e,s],l),he(l);const a=W(()=>r.value?!0:e.value.items?et(t.value.relativePath,e.value.items):!1),c=W(()=>!!(e.value.items&&e.value.items.length));je(()=>{i.value=!!(o.value&&e.value.collapsed)}),it(()=>{(r.value||a.value)&&(i.value=!1)});function p(){o.value&&(i.value=!i.value)}return{collapsed:i,collapsible:o,isLink:n,isActiveLink:r,hasActiveLink:a,hasChildren:c,toggle:p}}function Ps(){const{hasSidebar:e}=Se(),t=Je("(min-width: 960px)"),s=Je("(min-width: 1280px)");return{isAsideEnabled:W(()=>!s.value&&!t.value?!1:e.value?s.value:t.value)}}const tt=[];function xt(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function ct(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(s=>s.id&&s.hasChildNodes()).map(s=>{const i=Number(s.tagName[1]);return{element:s,title:Ms(s),link:"#"+s.id,level:i}});return Is(t,e)}function Ms(e){let t="";for(const s of e.childNodes)if(s.nodeType===1){if(s.classList.contains("VPBadge")||s.classList.contains("header-anchor")||s.classList.contains("ignore-header"))continue;t+=s.textContent}else s.nodeType===3&&(t+=s.textContent);return t.trim()}function Is(e,t){if(t===!1)return[];const s=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[i,o]=typeof s=="number"?[s,s]:s==="deep"?[2,6]:s;return Ds(e,i,o)}function As(e,t){const{isAsideEnabled:s}=Ps(),i=gs(n,100);let o=null;he(()=>{requestAnimationFrame(n),window.addEventListener("scroll",i)}),Vt(()=>{r(location.hash)}),Re(()=>{window.removeEventListener("scroll",i)});function n(){if(!s.value)return;const l=window.scrollY,a=window.innerHeight,c=document.body.offsetHeight,p=Math.abs(l+a-c)<1,u=tt.map(({element:f,link:h})=>({link:h,top:Vs(f)})).filter(({top:f})=>!Number.isNaN(f)).sort((f,h)=>f.top-h.top);if(!u.length){r(null);return}if(l<1){r(null);return}if(p){r(u[u.length-1].link);return}let v=null;for(const{link:f,top:h}of u){if(h>l+Dt()+4)break;v=f}r(v)}function r(l){o&&o.classList.remove("active"),l==null?o=null:o=e.value.querySelector(`a[href="${decodeURIComponent(l)}"]`);const a=o;a?(a.classList.add("active"),t.value.style.top=a.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Vs(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function Ds(e,t,s){tt.length=0;const i=[],o=[];return e.forEach(n=>{const r={...n,children:[]};let l=o[o.length-1];for(;l&&l.level>=r.level;)o.pop(),l=o[o.length-1];if(r.element.classList.contains("ignore-header")||l&&"shouldIgnore"in l){o.push({level:r.level,shouldIgnore:!0});return}r.level>s||r.level<t||(tt.push({element:r.element,link:r.link}),l?l.children.push(r):i.push(r),o.push(r))}),i}const Os=["href","title"],Bs=O({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:s}){const i=s.href.split("#")[1],o=document.getElementById(decodeURIComponent(i));o==null||o.focus({preventScroll:!0})}return(s,i)=>{const o=ne("VPDocOutlineItem",!0);return m(),_("ul",{class:se(["VPDocOutlineItem",s.root?"root":"nested"])},[(m(!0),_(Q,null,ie(s.headers,({children:n,link:r,title:l})=>(m(),_("li",null,[g("a",{class:"outline-link",href:r,onClick:t,title:l},J(l),9,Os),n!=null&&n.length?(m(),j(o,{key:0,headers:n},null,8,["headers"])):H("",!0)]))),256))],2)}}}),Lt=F(Bs,[["__scopeId","data-v-a2eac1ef"]]),Ns={class:"content"},Hs={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Fs=O({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:s}=ee(),i=bt([]);qe(()=>{i.value=ct(t.value.outline??s.value.outline)});const o=Y(),n=Y();return As(o,n),(r,l)=>(m(),_("nav",{"aria-labelledby":"doc-outline-aria-label",class:se(["VPDocAsideOutline",{"has-outline":i.value.length>0}]),ref_key:"container",ref:o},[g("div",Ns,[g("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),g("div",Hs,J(w(xt)(w(s))),1),V(Lt,{headers:i.value,root:!0},null,8,["headers"])])],2))}}),js=F(Fs,[["__scopeId","data-v-55034d9f"]]),Rs={class:"VPDocAsideCarbonAds"},qs=O({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(s,i)=>(m(),_("div",Rs,[V(w(t),{"carbon-ads":s.carbonAds},null,8,["carbon-ads"])]))}}),Gs={class:"VPDocAside"},Us=O({__name:"VPDocAside",setup(e){const{theme:t}=ee();return(s,i)=>(m(),_("div",Gs,[S(s.$slots,"aside-top",{},void 0,!0),S(s.$slots,"aside-outline-before",{},void 0,!0),V(js),S(s.$slots,"aside-outline-after",{},void 0,!0),i[0]||(i[0]=g("div",{class:"spacer"},null,-1)),S(s.$slots,"aside-ads-before",{},void 0,!0),w(t).carbonAds?(m(),j(qs,{key:0,"carbon-ads":w(t).carbonAds},null,8,["carbon-ads"])):H("",!0),S(s.$slots,"aside-ads-after",{},void 0,!0),S(s.$slots,"aside-bottom",{},void 0,!0)]))}}),Ys=F(Us,[["__scopeId","data-v-eaa7b1b4"]]);function Ws(){const{theme:e,page:t}=ee();return W(()=>{const{text:s="Edit this page",pattern:i=""}=e.value.editLink||{};let o;return typeof i=="function"?o=i(t.value):o=i.replace(/:path/g,t.value.filePath),{url:o,text:s}})}function Xs(){const{page:e,theme:t,frontmatter:s}=ee();return W(()=>{var c,p,u,v,f,h,b,k;const i=zt(t.value.sidebar,e.value.relativePath),o=Ts(i),n=Zs(o,d=>d.link.replace(/[?#].*$/,"")),r=n.findIndex(d=>xe(e.value.relativePath,d.link)),l=((c=t.value.docFooter)==null?void 0:c.prev)===!1&&!s.value.prev||s.value.prev===!1,a=((p=t.value.docFooter)==null?void 0:p.next)===!1&&!s.value.next||s.value.next===!1;return{prev:l?void 0:{text:(typeof s.value.prev=="string"?s.value.prev:typeof s.value.prev=="object"?s.value.prev.text:void 0)??((u=n[r-1])==null?void 0:u.docFooterText)??((v=n[r-1])==null?void 0:v.text),link:(typeof s.value.prev=="object"?s.value.prev.link:void 0)??((f=n[r-1])==null?void 0:f.link)},next:a?void 0:{text:(typeof s.value.next=="string"?s.value.next:typeof s.value.next=="object"?s.value.next.text:void 0)??((h=n[r+1])==null?void 0:h.docFooterText)??((b=n[r+1])==null?void 0:b.text),link:(typeof s.value.next=="object"?s.value.next.link:void 0)??((k=n[r+1])==null?void 0:k.link)}}})}function Zs(e,t){const s=new Set;return e.filter(i=>{const o=t(i);return s.has(o)?!1:s.add(o)})}const ye=O({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,s=W(()=>t.tag??(t.href?"a":"span")),i=W(()=>t.href&&yt.test(t.href)||t.target==="_blank");return(o,n)=>(m(),j(me(s.value),{class:se(["VPLink",{link:o.href,"vp-external-link-icon":i.value,"no-icon":o.noIcon}]),href:o.href?w(lt)(o.href):void 0,target:o.target??(i.value?"_blank":void 0),rel:o.rel??(i.value?"noreferrer":void 0)},{default:z(()=>[S(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ks={class:"VPLastUpdated"},Js=["datetime"],Qs=O({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:s,lang:i}=ee(),o=W(()=>new Date(s.value.lastUpdated)),n=W(()=>o.value.toISOString()),r=Y("");return he(()=>{je(()=>{var l,a,c;r.value=new Intl.DateTimeFormat((a=(l=t.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&a.forceLocale?i.value:void 0,((c=t.value.lastUpdated)==null?void 0:c.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,a)=>{var c;return m(),_("p",Ks,[de(J(((c=w(t).lastUpdated)==null?void 0:c.text)||w(t).lastUpdatedText||"Last updated")+": ",1),g("time",{datetime:n.value},J(r.value),9,Js)])}}}),eo=F(Qs,[["__scopeId","data-v-ce1f4d9c"]]),to={key:0,class:"VPDocFooter"},so={key:0,class:"edit-info"},oo={key:0,class:"edit-link"},io={key:1,class:"last-updated"},ao={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},no={class:"pager"},ro=["innerHTML"],lo=["innerHTML"],co={class:"pager"},uo=["innerHTML"],mo=["innerHTML"],po=O({__name:"VPDocFooter",setup(e){const{theme:t,page:s,frontmatter:i}=ee(),o=Ws(),n=Xs(),r=W(()=>t.value.editLink&&i.value.editLink!==!1),l=W(()=>s.value.lastUpdated),a=W(()=>r.value||l.value||n.value.prev||n.value.next);return(c,p)=>{var u,v,f,h;return a.value?(m(),_("footer",to,[S(c.$slots,"doc-footer-before",{},void 0,!0),r.value||l.value?(m(),_("div",so,[r.value?(m(),_("div",oo,[V(ye,{class:"edit-link-button",href:w(o).url,"no-icon":!0},{default:z(()=>[p[0]||(p[0]=g("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),de(" "+J(w(o).text),1)]),_:1},8,["href"])])):H("",!0),l.value?(m(),_("div",io,[V(eo)])):H("",!0)])):H("",!0),(u=w(n).prev)!=null&&u.link||(v=w(n).next)!=null&&v.link?(m(),_("nav",ao,[p[1]||(p[1]=g("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),g("div",no,[(f=w(n).prev)!=null&&f.link?(m(),j(ye,{key:0,class:"pager-link prev",href:w(n).prev.link},{default:z(()=>{var b;return[g("span",{class:"desc",innerHTML:((b=w(t).docFooter)==null?void 0:b.prev)||"Previous page"},null,8,ro),g("span",{class:"title",innerHTML:w(n).prev.text},null,8,lo)]}),_:1},8,["href"])):H("",!0)]),g("div",co,[(h=w(n).next)!=null&&h.link?(m(),j(ye,{key:0,class:"pager-link next",href:w(n).next.link},{default:z(()=>{var b;return[g("span",{class:"desc",innerHTML:((b=w(t).docFooter)==null?void 0:b.next)||"Next page"},null,8,uo),g("span",{class:"title",innerHTML:w(n).next.text},null,8,mo)]}),_:1},8,["href"])):H("",!0)])])):H("",!0)])):H("",!0)}}}),fo=F(po,[["__scopeId","data-v-2e0b1e71"]]),vo={class:"container"},ho={class:"aside-container"},go={class:"aside-content"},bo={class:"content"},yo={class:"content-container"},_o={class:"main"},ko=O({__name:"VPDoc",setup(e){const{theme:t}=ee(),s=Ge(),{hasSidebar:i,hasAside:o,leftAside:n}=Se(),r=W(()=>s.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(l,a)=>{const c=ne("Content");return m(),_("div",{class:se(["VPDoc",{"has-sidebar":w(i),"has-aside":w(o)}])},[S(l.$slots,"doc-top",{},void 0,!0),g("div",vo,[w(o)?(m(),_("div",{key:0,class:se(["aside",{"left-aside":w(n)}])},[a[0]||(a[0]=g("div",{class:"aside-curtain"},null,-1)),g("div",ho,[g("div",go,[V(Ys,null,{"aside-top":z(()=>[S(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":z(()=>[S(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":z(()=>[S(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":z(()=>[S(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":z(()=>[S(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":z(()=>[S(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):H("",!0),g("div",bo,[g("div",yo,[S(l.$slots,"doc-before",{},void 0,!0),g("main",_o,[V(c,{class:se(["vp-doc",[r.value,w(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),V(fo,null,{"doc-footer-before":z(()=>[S(l.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),S(l.$slots,"doc-after",{},void 0,!0)])])]),S(l.$slots,"doc-bottom",{},void 0,!0)],2)}}}),wo=F(ko,[["__scopeId","data-v-6b398dac"]]),$o=O({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,s=W(()=>t.href&&yt.test(t.href)),i=W(()=>t.tag||(t.href?"a":"button"));return(o,n)=>(m(),j(me(i.value),{class:se(["VPButton",[o.size,o.theme]]),href:o.href?w(lt)(o.href):void 0,target:t.target??(s.value?"_blank":void 0),rel:t.rel??(s.value?"noreferrer":void 0)},{default:z(()=>[de(J(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),So=F($o,[["__scopeId","data-v-8c30cf50"]]),zo=["src","alt"],xo=O({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,s)=>{const i=ne("VPImage",!0);return t.image?(m(),_(Q,{key:0},[typeof t.image=="string"||"src"in t.image?(m(),_("img",be({key:0,class:"VPImage"},typeof t.image=="string"?t.$attrs:{...t.image,...t.$attrs},{src:w(ot)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,zo)):(m(),_(Q,{key:1},[V(i,be({class:"dark",image:t.image.dark,alt:t.image.alt},t.$attrs),null,16,["image","alt"]),V(i,be({class:"light",image:t.image.light,alt:t.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):H("",!0)}}}),Fe=F(xo,[["__scopeId","data-v-b0f7ff75"]]),Lo={class:"container"},To={class:"main"},Co={key:0,class:"name"},Eo=["innerHTML"],Po=["innerHTML"],Mo=["innerHTML"],Io={key:0,class:"actions"},Ao={key:0,class:"image"},Vo={class:"image-container"},Do=O({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=Ue("hero-image-slot-exists");return(s,i)=>(m(),_("div",{class:se(["VPHero",{"has-image":s.image||w(t)}])},[g("div",Lo,[g("div",To,[S(s.$slots,"home-hero-info-before",{},void 0,!0),S(s.$slots,"home-hero-info",{},()=>[s.name?(m(),_("h1",Co,[g("span",{innerHTML:s.name,class:"clip"},null,8,Eo)])):H("",!0),s.text?(m(),_("p",{key:1,innerHTML:s.text,class:"text"},null,8,Po)):H("",!0),s.tagline?(m(),_("p",{key:2,innerHTML:s.tagline,class:"tagline"},null,8,Mo)):H("",!0)],!0),S(s.$slots,"home-hero-info-after",{},void 0,!0),s.actions?(m(),_("div",Io,[(m(!0),_(Q,null,ie(s.actions,o=>(m(),_("div",{key:o.link,class:"action"},[V(So,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):H("",!0),S(s.$slots,"home-hero-actions-after",{},void 0,!0)]),s.image||w(t)?(m(),_("div",Ao,[g("div",Vo,[i[0]||(i[0]=g("div",{class:"image-bg"},null,-1)),S(s.$slots,"home-hero-image",{},()=>[s.image?(m(),j(Fe,{key:0,class:"image-src",image:s.image},null,8,["image"])):H("",!0)],!0)])])):H("",!0)])],2))}}),Oo=F(Do,[["__scopeId","data-v-287ea985"]]),Bo=O({__name:"VPHomeHero",setup(e){const{frontmatter:t}=ee();return(s,i)=>w(t).hero?(m(),j(Oo,{key:0,class:"VPHomeHero",name:w(t).hero.name,text:w(t).hero.text,tagline:w(t).hero.tagline,image:w(t).hero.image,actions:w(t).hero.actions},{"home-hero-info-before":z(()=>[S(s.$slots,"home-hero-info-before")]),"home-hero-info":z(()=>[S(s.$slots,"home-hero-info")]),"home-hero-info-after":z(()=>[S(s.$slots,"home-hero-info-after")]),"home-hero-actions-after":z(()=>[S(s.$slots,"home-hero-actions-after")]),"home-hero-image":z(()=>[S(s.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):H("",!0)}}),No={class:"box"},Ho={key:0,class:"icon"},Fo=["innerHTML"],jo=["innerHTML"],Ro=["innerHTML"],qo={key:4,class:"link-text"},Go={class:"link-text-value"},Uo=O({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,s)=>(m(),j(ye,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:z(()=>[g("article",No,[typeof t.icon=="object"&&t.icon.wrap?(m(),_("div",Ho,[V(Fe,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(m(),j(Fe,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(m(),_("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Fo)):H("",!0),g("h2",{class:"title",innerHTML:t.title},null,8,jo),t.details?(m(),_("p",{key:3,class:"details",innerHTML:t.details},null,8,Ro)):H("",!0),t.linkText?(m(),_("div",qo,[g("p",Go,[de(J(t.linkText)+" ",1),s[0]||(s[0]=g("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):H("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Yo=F(Uo,[["__scopeId","data-v-f07f3991"]]),Wo={key:0,class:"VPFeatures"},Xo={class:"container"},Zo={class:"items"},Ko=O({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,s=W(()=>{const i=t.features.length;if(i){if(i===2)return"grid-2";if(i===3)return"grid-3";if(i%3===0)return"grid-6";if(i>3)return"grid-4"}else return});return(i,o)=>i.features?(m(),_("div",Wo,[g("div",Xo,[g("div",Zo,[(m(!0),_(Q,null,ie(i.features,n=>(m(),_("div",{key:n.title,class:se(["item",[s.value]])},[V(Yo,{icon:n.icon,title:n.title,details:n.details,link:n.link,"link-text":n.linkText,rel:n.rel,target:n.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):H("",!0)}}),Jo=F(Ko,[["__scopeId","data-v-62eea3f9"]]),Qo=O({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=ee();return(s,i)=>w(t).features?(m(),j(Jo,{key:0,class:"VPHomeFeatures",features:w(t).features},null,8,["features"])):H("",!0)}}),ei=O({__name:"VPHomeContent",setup(e){const{width:t}=Ot({initialWidth:0,includeScrollbar:!1});return(s,i)=>(m(),_("div",{class:"vp-doc container",style:$e(w(t)?{"--vp-offset":`calc(50% - ${w(t)/2}px)`}:{})},[S(s.$slots,"default",{},void 0,!0)],4))}}),ti=F(ei,[["__scopeId","data-v-ed8e7474"]]),si={class:"VPHome"},oi=O({__name:"VPHome",setup(e){const{frontmatter:t}=ee();return(s,i)=>{const o=ne("Content");return m(),_("div",si,[S(s.$slots,"home-hero-before",{},void 0,!0),V(Bo,null,{"home-hero-info-before":z(()=>[S(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":z(()=>[S(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":z(()=>[S(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":z(()=>[S(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":z(()=>[S(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),S(s.$slots,"home-hero-after",{},void 0,!0),S(s.$slots,"home-features-before",{},void 0,!0),V(Qo),S(s.$slots,"home-features-after",{},void 0,!0),w(t).markdownStyles!==!1?(m(),j(ti,{key:0},{default:z(()=>[V(o)]),_:1})):(m(),j(o,{key:1}))])}}}),ii=F(oi,[["__scopeId","data-v-cbb2c945"]]),ai={},ni={class:"VPPage"};function ri(e,t){const s=ne("Content");return m(),_("div",ni,[S(e.$slots,"page-top"),V(s),S(e.$slots,"page-bottom")])}const li=F(ai,[["render",ri]]),ci=O({__name:"VPContent",setup(e){const{page:t,frontmatter:s}=ee(),{hasSidebar:i}=Se();return(o,n)=>(m(),_("div",{class:se(["VPContent",{"has-sidebar":w(i),"is-home":w(s).layout==="home"}]),id:"VPContent"},[w(t).isNotFound?S(o.$slots,"not-found",{key:0},()=>[V(xs)],!0):w(s).layout==="page"?(m(),j(li,{key:1},{"page-top":z(()=>[S(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":z(()=>[S(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):w(s).layout==="home"?(m(),j(ii,{key:2},{"home-hero-before":z(()=>[S(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":z(()=>[S(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":z(()=>[S(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":z(()=>[S(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":z(()=>[S(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":z(()=>[S(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":z(()=>[S(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":z(()=>[S(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":z(()=>[S(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):w(s).layout&&w(s).layout!=="doc"?(m(),j(me(w(s).layout),{key:3})):(m(),j(wo,{key:4},{"doc-top":z(()=>[S(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":z(()=>[S(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":z(()=>[S(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":z(()=>[S(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":z(()=>[S(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":z(()=>[S(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":z(()=>[S(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":z(()=>[S(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":z(()=>[S(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":z(()=>[S(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":z(()=>[S(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),di=F(ci,[["__scopeId","data-v-6949aa7e"]]),ui={class:"container"},mi=["innerHTML"],pi=["innerHTML"],fi=O({__name:"VPFooter",setup(e){const{theme:t,frontmatter:s}=ee(),{hasSidebar:i}=Se();return(o,n)=>w(t).footer&&w(s).footer!==!1?(m(),_("footer",{key:0,class:se(["VPFooter",{"has-sidebar":w(i)}])},[g("div",ui,[w(t).footer.message?(m(),_("p",{key:0,class:"message",innerHTML:w(t).footer.message},null,8,mi)):H("",!0),w(t).footer.copyright?(m(),_("p",{key:1,class:"copyright",innerHTML:w(t).footer.copyright},null,8,pi)):H("",!0)])],2)):H("",!0)}}),vi=F(fi,[["__scopeId","data-v-87ccf596"]]);function hi(){const{theme:e,frontmatter:t}=ee(),s=bt([]),i=W(()=>s.value.length>0);return qe(()=>{s.value=ct(t.value.outline??e.value.outline)}),{headers:s,hasLocalNav:i}}const gi={class:"menu-text"},bi={class:"header"},yi={class:"outline"},_i=O({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:s}=ee(),i=Y(!1),o=Y(0),n=Y(),r=Y();function l(u){var v;(v=n.value)!=null&&v.contains(u.target)||(i.value=!1)}_e(i,u=>{if(u){document.addEventListener("click",l);return}document.removeEventListener("click",l)}),Bt("Escape",()=>{i.value=!1}),qe(()=>{i.value=!1});function a(){i.value=!i.value,o.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function c(u){u.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),He(()=>{i.value=!1}))}function p(){i.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(u,v)=>(m(),_("div",{class:"VPLocalNavOutlineDropdown",style:$e({"--vp-vh":o.value+"px"}),ref_key:"main",ref:n},[u.headers.length>0?(m(),_("button",{key:0,onClick:a,class:se({open:i.value})},[g("span",gi,J(w(xt)(w(s))),1),v[0]||(v[0]=g("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(m(),_("button",{key:1,onClick:p},J(w(s).returnToTopLabel||"Return to top"),1)),V(st,{name:"flyout"},{default:z(()=>[i.value?(m(),_("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:c},[g("div",bi,[g("a",{class:"top-link",href:"#",onClick:p},J(w(s).returnToTopLabel||"Return to top"),1)]),g("div",yi,[V(Lt,{headers:u.headers},null,8,["headers"])])],512)):H("",!0)]),_:1})],4))}}),ki=F(_i,[["__scopeId","data-v-1eefe958"]]),wi={class:"container"},$i=["aria-expanded"],Si={class:"menu-text"},zi=O({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:s}=ee(),{hasSidebar:i}=Se(),{headers:o}=hi(),{y:n}=_t(),r=Y(0);he(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),qe(()=>{o.value=ct(s.value.outline??t.value.outline)});const l=W(()=>o.value.length===0),a=W(()=>l.value&&!i.value),c=W(()=>({VPLocalNav:!0,"has-sidebar":i.value,empty:l.value,fixed:a.value}));return(p,u)=>w(s).layout!=="home"&&(!a.value||w(n)>=r.value)?(m(),_("div",{key:0,class:se(c.value)},[g("div",wi,[w(i)?(m(),_("button",{key:0,class:"menu","aria-expanded":p.open,"aria-controls":"VPSidebarNav",onClick:u[0]||(u[0]=v=>p.$emit("open-menu"))},[u[1]||(u[1]=g("span",{class:"vpi-align-left menu-icon"},null,-1)),g("span",Si,J(w(t).sidebarMenuLabel||"Menu"),1)],8,$i)):H("",!0),V(ki,{headers:w(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):H("",!0)}}),xi=F(zi,[["__scopeId","data-v-a588c27c"]]);function Li(){const e=Y(!1);function t(){e.value=!0,window.addEventListener("resize",o)}function s(){e.value=!1,window.removeEventListener("resize",o)}function i(){e.value?s():t()}function o(){window.outerWidth>=768&&s()}const n=Ge();return _e(()=>n.path,s),{isScreenOpen:e,openScreen:t,closeScreen:s,toggleScreen:i}}const Ti={},Ci={class:"VPSwitch",type:"button",role:"switch"},Ei={class:"check"},Pi={key:0,class:"icon"};function Mi(e,t){return m(),_("button",Ci,[g("span",Ei,[e.$slots.default?(m(),_("span",Pi,[S(e.$slots,"default",{},void 0,!0)])):H("",!0)])])}const Ii=F(Ti,[["render",Mi],["__scopeId","data-v-3f9f265f"]]),Ai=O({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:s}=ee(),i=Ue("toggle-appearance",()=>{t.value=!t.value}),o=Y("");return it(()=>{o.value=t.value?s.value.lightModeSwitchTitle||"Switch to light theme":s.value.darkModeSwitchTitle||"Switch to dark theme"}),(n,r)=>(m(),j(Ii,{title:o.value,class:"VPSwitchAppearance","aria-checked":w(t),onClick:w(i)},{default:z(()=>r[0]||(r[0]=[g("span",{class:"vpi-sun sun"},null,-1),g("span",{class:"vpi-moon moon"},null,-1)])),_:1},8,["title","aria-checked","onClick"]))}}),dt=F(Ai,[["__scopeId","data-v-9abd478a"]]),Vi={key:0,class:"VPNavBarAppearance"},Di=O({__name:"VPNavBarAppearance",setup(e){const{site:t}=ee();return(s,i)=>w(t).appearance&&w(t).appearance!=="force-dark"&&w(t).appearance!=="force-auto"?(m(),_("div",Vi,[V(dt)])):H("",!0)}}),Oi=F(Di,[["__scopeId","data-v-20bcf285"]]),ut=Y();let Tt=!1,Ke=0;function Bi(e){const t=Y(!1);if(Ye){!Tt&&Ni(),Ke++;const s=_e(ut,i=>{var o,n,r;i===e.el.value||(o=e.el.value)!=null&&o.contains(i)?(t.value=!0,(n=e.onFocus)==null||n.call(e)):(t.value=!1,(r=e.onBlur)==null||r.call(e))});Re(()=>{s(),Ke--,Ke||Hi()})}return Nt(t)}function Ni(){document.addEventListener("focusin",Ct),Tt=!0,ut.value=document.activeElement}function Hi(){document.removeEventListener("focusin",Ct)}function Ct(){ut.value=document.activeElement}const Fi={class:"VPMenuLink"},ji=["innerHTML"],Ri=O({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=ee();return(s,i)=>(m(),_("div",Fi,[V(ye,{class:se({active:w(xe)(w(t).relativePath,s.item.activeMatch||s.item.link,!!s.item.activeMatch)}),href:s.item.link,target:s.item.target,rel:s.item.rel,"no-icon":s.item.noIcon},{default:z(()=>[g("span",{innerHTML:s.item.text},null,8,ji)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Xe=F(Ri,[["__scopeId","data-v-f5db19c3"]]),qi={class:"VPMenuGroup"},Gi={key:0,class:"title"},Ui=O({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,s)=>(m(),_("div",qi,[t.text?(m(),_("p",Gi,J(t.text),1)):H("",!0),(m(!0),_(Q,null,ie(t.items,i=>(m(),_(Q,null,["link"in i?(m(),j(Xe,{key:0,item:i},null,8,["item"])):H("",!0)],64))),256))]))}}),Yi=F(Ui,[["__scopeId","data-v-2e45306a"]]),Wi={class:"VPMenu"},Xi={key:0,class:"items"},Zi=O({__name:"VPMenu",props:{items:{}},setup(e){return(t,s)=>(m(),_("div",Wi,[t.items?(m(),_("div",Xi,[(m(!0),_(Q,null,ie(t.items,i=>(m(),_(Q,{key:JSON.stringify(i)},["link"in i?(m(),j(Xe,{key:0,item:i},null,8,["item"])):"component"in i?(m(),j(me(i.component),be({key:1,ref_for:!0},i.props),null,16)):(m(),j(Yi,{key:2,text:i.text,items:i.items},null,8,["text","items"]))],64))),128))])):H("",!0),S(t.$slots,"default",{},void 0,!0)]))}}),Ki=F(Zi,[["__scopeId","data-v-2ec6a944"]]),Ji=["aria-expanded","aria-label"],Qi={key:0,class:"text"},ea=["innerHTML"],ta={key:1,class:"vpi-more-horizontal icon"},sa={class:"menu"},oa=O({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=Y(!1),s=Y();Bi({el:s,onBlur:i});function i(){t.value=!1}return(o,n)=>(m(),_("div",{class:"VPFlyout",ref_key:"el",ref:s,onMouseenter:n[1]||(n[1]=r=>t.value=!0),onMouseleave:n[2]||(n[2]=r=>t.value=!1)},[g("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":o.label,onClick:n[0]||(n[0]=r=>t.value=!t.value)},[o.button||o.icon?(m(),_("span",Qi,[o.icon?(m(),_("span",{key:0,class:se([o.icon,"option-icon"])},null,2)):H("",!0),o.button?(m(),_("span",{key:1,innerHTML:o.button},null,8,ea)):H("",!0),n[3]||(n[3]=g("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(m(),_("span",ta))],8,Ji),g("div",sa,[V(Ki,{items:o.items},{default:z(()=>[S(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),mt=F(oa,[["__scopeId","data-v-08bfcee2"]]),ia=["href","aria-label","innerHTML"],aa=O({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,s=Y();he(async()=>{var n;await He();const o=(n=s.value)==null?void 0:n.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const i=W(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(o,n)=>(m(),_("a",{ref_key:"el",ref:s,class:"VPSocialLink no-icon",href:o.link,"aria-label":o.ariaLabel??(typeof o.icon=="string"?o.icon:""),target:"_blank",rel:"noopener",innerHTML:i.value},null,8,ia))}}),na=F(aa,[["__scopeId","data-v-5e6ed859"]]),ra={class:"VPSocialLinks"},la=O({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,s)=>(m(),_("div",ra,[(m(!0),_(Q,null,ie(t.links,({link:i,icon:o,ariaLabel:n})=>(m(),j(na,{key:i,icon:o,link:i,ariaLabel:n},null,8,["icon","link","ariaLabel"]))),128))]))}}),pt=F(la,[["__scopeId","data-v-2baa5e24"]]),ca={key:0,class:"group translations"},da={class:"trans-title"},ua={key:1,class:"group"},ma={class:"item appearance"},pa={class:"label"},fa={class:"appearance-action"},va={key:2,class:"group"},ha={class:"item social-links"},ga=O({__name:"VPNavBarExtra",setup(e){const{site:t,theme:s}=ee(),{localeLinks:i,currentLang:o}=Ve({correspondingLink:!0}),n=W(()=>i.value.length&&o.value.label||t.value.appearance||s.value.socialLinks);return(r,l)=>n.value?(m(),j(mt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:z(()=>[w(i).length&&w(o).label?(m(),_("div",ca,[g("p",da,J(w(o).label),1),(m(!0),_(Q,null,ie(w(i),a=>(m(),j(Xe,{key:a.link,item:a},null,8,["item"]))),128))])):H("",!0),w(t).appearance&&w(t).appearance!=="force-dark"&&w(t).appearance!=="force-auto"?(m(),_("div",ua,[g("div",ma,[g("p",pa,J(w(s).darkModeSwitchLabel||"Appearance"),1),g("div",fa,[V(dt)])])])):H("",!0),w(s).socialLinks?(m(),_("div",va,[g("div",ha,[V(pt,{class:"social-links-list",links:w(s).socialLinks},null,8,["links"])])])):H("",!0)]),_:1})):H("",!0)}}),ba=F(ga,[["__scopeId","data-v-19354c07"]]),ya=["aria-expanded"],_a=O({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,s)=>(m(),_("button",{type:"button",class:se(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:s[0]||(s[0]=i=>t.$emit("click"))},s[1]||(s[1]=[g("span",{class:"container"},[g("span",{class:"top"}),g("span",{class:"middle"}),g("span",{class:"bottom"})],-1)]),10,ya))}}),ka=F(_a,[["__scopeId","data-v-29142655"]]),wa=["innerHTML"],$a=O({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=ee();return(s,i)=>(m(),j(ye,{class:se({VPNavBarMenuLink:!0,active:w(xe)(w(t).relativePath,s.item.activeMatch||s.item.link,!!s.item.activeMatch)}),href:s.item.link,target:s.item.target,rel:s.item.rel,"no-icon":s.item.noIcon,tabindex:"0"},{default:z(()=>[g("span",{innerHTML:s.item.text},null,8,wa)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Sa=F($a,[["__scopeId","data-v-c080a026"]]),za=O({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:s}=ee(),i=n=>"component"in n?!1:"link"in n?xe(s.value.relativePath,n.link,!!t.item.activeMatch):n.items.some(i),o=W(()=>i(t.item));return(n,r)=>(m(),j(mt,{class:se({VPNavBarMenuGroup:!0,active:w(xe)(w(s).relativePath,n.item.activeMatch,!!n.item.activeMatch)||o.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),xa={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},La=O({__name:"VPNavBarMenu",setup(e){const{theme:t}=ee();return(s,i)=>w(t).nav?(m(),_("nav",xa,[i[0]||(i[0]=g("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(m(!0),_(Q,null,ie(w(t).nav,o=>(m(),_(Q,{key:JSON.stringify(o)},["link"in o?(m(),j(Sa,{key:0,item:o},null,8,["item"])):"component"in o?(m(),j(me(o.component),be({key:1,ref_for:!0},o.props),null,16)):(m(),j(za,{key:2,item:o},null,8,["item"]))],64))),128))])):H("",!0)}}),Ta=F(La,[["__scopeId","data-v-23de4d95"]]);function Ca(e){const{localeIndex:t,theme:s}=ee();function i(o){var h,b,k;const n=o.split("."),r=(h=s.value.search)==null?void 0:h.options,l=r&&typeof r=="object",a=l&&((k=(b=r.locales)==null?void 0:b[t.value])==null?void 0:k.translations)||null,c=l&&r.translations||null;let p=a,u=c,v=e;const f=n.pop();for(const d of n){let $=null;const C=v==null?void 0:v[d];C&&($=v=C);const P=u==null?void 0:u[d];P&&($=u=P);const L=p==null?void 0:p[d];L&&($=p=L),C||(v=$),P||(u=$),L||(p=$)}return(p==null?void 0:p[f])??(u==null?void 0:u[f])??(v==null?void 0:v[f])??""}return i}const Ea=["aria-label"],Pa={class:"DocSearch-Button-Container"},Ma={class:"DocSearch-Button-Placeholder"},gt=O({__name:"VPNavBarSearchButton",setup(e){const s=Ca({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(i,o)=>(m(),_("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":w(s)("button.buttonAriaLabel")},[g("span",Pa,[o[0]||(o[0]=g("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),g("span",Ma,J(w(s)("button.buttonText")),1)]),o[1]||(o[1]=g("span",{class:"DocSearch-Button-Keys"},[g("kbd",{class:"DocSearch-Button-Key"}),g("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Ea))}}),Ia={class:"VPNavBarSearch"},Aa={id:"local-search"},Va={key:1,id:"docsearch"},Da=O({__name:"VPNavBarSearch",setup(e){const t=()=>null,s=ge(()=>ve(()=>import("./VPAlgoliaSearchBox.DGpy5-Kl.js"),__vite__mapDeps([0,1]))),{theme:i}=ee(),o=Y(!1),n=Y(!1),r=()=>{const v="VPAlgoliaPreconnect";(window.requestIdleCallback||setTimeout)(()=>{var b;const h=document.createElement("link");h.id=v,h.rel="preconnect",h.href=`https://${(((b=i.value.search)==null?void 0:b.options)??i.value.algolia).appId}-dsn.algolia.net`,h.crossOrigin="",document.head.appendChild(h)})};he(()=>{r();const v=h=>{(h.key.toLowerCase()==="k"&&(h.metaKey||h.ctrlKey)||!c(h)&&h.key==="/")&&(h.preventDefault(),l(),f())},f=()=>{window.removeEventListener("keydown",v)};window.addEventListener("keydown",v),Re(f)});function l(){o.value||(o.value=!0,setTimeout(a,16))}function a(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||a()},16)}function c(v){const f=v.target,h=f.tagName;return f.isContentEditable||h==="INPUT"||h==="SELECT"||h==="TEXTAREA"}const p=Y(!1),u="algolia";return(v,f)=>{var h;return m(),_("div",Ia,[w(u)==="local"?(m(),_(Q,{key:0},[p.value?(m(),j(w(t),{key:0,onClose:f[0]||(f[0]=b=>p.value=!1)})):H("",!0),g("div",Aa,[V(gt,{onClick:f[1]||(f[1]=b=>p.value=!0)})])],64)):w(u)==="algolia"?(m(),_(Q,{key:1},[o.value?(m(),j(w(s),{key:0,algolia:((h=w(i).search)==null?void 0:h.options)??w(i).algolia,onVnodeBeforeMount:f[2]||(f[2]=b=>n.value=!0)},null,8,["algolia"])):H("",!0),n.value?H("",!0):(m(),_("div",Va,[V(gt,{onClick:l})]))],64)):H("",!0)])}}}),Oa=O({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=ee();return(s,i)=>w(t).socialLinks?(m(),j(pt,{key:0,class:"VPNavBarSocialLinks",links:w(t).socialLinks},null,8,["links"])):H("",!0)}}),Ba=F(Oa,[["__scopeId","data-v-9157fd3e"]]),Na=["href","rel","target"],Ha=["innerHTML"],Fa={key:2},ja=O({__name:"VPNavBarTitle",setup(e){const{site:t,theme:s}=ee(),{hasSidebar:i}=Se(),{currentLang:o}=Ve(),n=W(()=>{var a;return typeof s.value.logoLink=="string"?s.value.logoLink:(a=s.value.logoLink)==null?void 0:a.link}),r=W(()=>{var a;return typeof s.value.logoLink=="string"||(a=s.value.logoLink)==null?void 0:a.rel}),l=W(()=>{var a;return typeof s.value.logoLink=="string"||(a=s.value.logoLink)==null?void 0:a.target});return(a,c)=>(m(),_("div",{class:se(["VPNavBarTitle",{"has-sidebar":w(i)}])},[g("a",{class:"title",href:n.value??w(lt)(w(o).link),rel:r.value,target:l.value},[S(a.$slots,"nav-bar-title-before",{},void 0,!0),w(s).logo?(m(),j(Fe,{key:0,class:"logo",image:w(s).logo},null,8,["image"])):H("",!0),w(s).siteTitle?(m(),_("span",{key:1,innerHTML:w(s).siteTitle},null,8,Ha)):w(s).siteTitle===void 0?(m(),_("span",Fa,J(w(t).title),1)):H("",!0),S(a.$slots,"nav-bar-title-after",{},void 0,!0)],8,Na)],2))}}),Ra=F(ja,[["__scopeId","data-v-08ac0f9e"]]),qa={class:"items"},Ga={class:"title"},Ua=O({__name:"VPNavBarTranslations",setup(e){const{theme:t}=ee(),{localeLinks:s,currentLang:i}=Ve({correspondingLink:!0});return(o,n)=>w(s).length&&w(i).label?(m(),j(mt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:w(t).langMenuLabel||"Change language"},{default:z(()=>[g("div",qa,[g("p",Ga,J(w(i).label),1),(m(!0),_(Q,null,ie(w(s),r=>(m(),j(Xe,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):H("",!0)}}),Ya=F(Ua,[["__scopeId","data-v-23ba6a69"]]),Wa={class:"wrapper"},Xa={class:"container"},Za={class:"title"},Ka={class:"content"},Ja={class:"content-body"},Qa=O({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:s}=_t(),{hasSidebar:i}=Se(),{frontmatter:o}=ee(),n=Y({});return it(()=>{n.value={"has-sidebar":i.value,home:o.value.layout==="home",top:s.value===0,"screen-open":t.isScreenOpen}}),(r,l)=>(m(),_("div",{class:se(["VPNavBar",n.value])},[g("div",Wa,[g("div",Xa,[g("div",Za,[V(Ra,null,{"nav-bar-title-before":z(()=>[S(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":z(()=>[S(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),g("div",Ka,[g("div",Ja,[S(r.$slots,"nav-bar-content-before",{},void 0,!0),V(Da,{class:"search"}),V(Ta,{class:"menu"}),V(Ya,{class:"translations"}),V(Oi,{class:"appearance"}),V(Ba,{class:"social-links"}),V(ba,{class:"extra"}),S(r.$slots,"nav-bar-content-after",{},void 0,!0),V(ka,{class:"hamburger",active:r.isScreenOpen,onClick:l[0]||(l[0]=a=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),l[1]||(l[1]=g("div",{class:"divider"},[g("div",{class:"divider-line"})],-1))],2))}}),en=F(Qa,[["__scopeId","data-v-e4ca7055"]]),tn={key:0,class:"VPNavScreenAppearance"},sn={class:"text"},on=O({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:s}=ee();return(i,o)=>w(t).appearance&&w(t).appearance!=="force-dark"&&w(t).appearance!=="force-auto"?(m(),_("div",tn,[g("p",sn,J(w(s).darkModeSwitchLabel||"Appearance"),1),V(dt)])):H("",!0)}}),an=F(on,[["__scopeId","data-v-90af9a35"]]),nn=["innerHTML"],rn=O({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=Ue("close-screen");return(s,i)=>(m(),j(ye,{class:"VPNavScreenMenuLink",href:s.item.link,target:s.item.target,rel:s.item.rel,"no-icon":s.item.noIcon,onClick:w(t)},{default:z(()=>[g("span",{innerHTML:s.item.text},null,8,nn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),ln=F(rn,[["__scopeId","data-v-f9a6b651"]]),cn=["innerHTML"],dn=O({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=Ue("close-screen");return(s,i)=>(m(),j(ye,{class:"VPNavScreenMenuGroupLink",href:s.item.link,target:s.item.target,rel:s.item.rel,"no-icon":s.item.noIcon,onClick:w(t)},{default:z(()=>[g("span",{innerHTML:s.item.text},null,8,cn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Et=F(dn,[["__scopeId","data-v-e03d7d08"]]),un={class:"VPNavScreenMenuGroupSection"},mn={key:0,class:"title"},pn=O({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,s)=>(m(),_("div",un,[t.text?(m(),_("p",mn,J(t.text),1)):H("",!0),(m(!0),_(Q,null,ie(t.items,i=>(m(),j(Et,{key:i.text,item:i},null,8,["item"]))),128))]))}}),fn=F(pn,[["__scopeId","data-v-fdd54012"]]),vn=["aria-controls","aria-expanded"],hn=["innerHTML"],gn=["id"],bn={key:0,class:"item"},yn={key:1,class:"item"},_n={key:2,class:"group"},kn=O({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,s=Y(!1),i=W(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function o(){s.value=!s.value}return(n,r)=>(m(),_("div",{class:se(["VPNavScreenMenuGroup",{open:s.value}])},[g("button",{class:"button","aria-controls":i.value,"aria-expanded":s.value,onClick:o},[g("span",{class:"button-text",innerHTML:n.text},null,8,hn),r[0]||(r[0]=g("span",{class:"vpi-plus button-icon"},null,-1))],8,vn),g("div",{id:i.value,class:"items"},[(m(!0),_(Q,null,ie(n.items,l=>(m(),_(Q,{key:JSON.stringify(l)},["link"in l?(m(),_("div",bn,[V(Et,{item:l},null,8,["item"])])):"component"in l?(m(),_("div",yn,[(m(),j(me(l.component),be({ref_for:!0},l.props,{"screen-menu":""}),null,16))])):(m(),_("div",_n,[V(fn,{text:l.text,items:l.items},null,8,["text","items"])]))],64))),128))],8,gn)],2))}}),wn=F(kn,[["__scopeId","data-v-4fab4037"]]),$n={key:0,class:"VPNavScreenMenu"},Sn=O({__name:"VPNavScreenMenu",setup(e){const{theme:t}=ee();return(s,i)=>w(t).nav?(m(),_("nav",$n,[(m(!0),_(Q,null,ie(w(t).nav,o=>(m(),_(Q,{key:JSON.stringify(o)},["link"in o?(m(),j(ln,{key:0,item:o},null,8,["item"])):"component"in o?(m(),j(me(o.component),be({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(m(),j(wn,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):H("",!0)}}),zn=O({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=ee();return(s,i)=>w(t).socialLinks?(m(),j(pt,{key:0,class:"VPNavScreenSocialLinks",links:w(t).socialLinks},null,8,["links"])):H("",!0)}}),xn={class:"list"},Ln=O({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:s}=Ve({correspondingLink:!0}),i=Y(!1);function o(){i.value=!i.value}return(n,r)=>w(t).length&&w(s).label?(m(),_("div",{key:0,class:se(["VPNavScreenTranslations",{open:i.value}])},[g("button",{class:"title",onClick:o},[r[0]||(r[0]=g("span",{class:"vpi-languages icon lang"},null,-1)),de(" "+J(w(s).label)+" ",1),r[1]||(r[1]=g("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),g("ul",xn,[(m(!0),_(Q,null,ie(w(t),l=>(m(),_("li",{key:l.link,class:"item"},[V(ye,{class:"link",href:l.link},{default:z(()=>[de(J(l.text),1)]),_:2},1032,["href"])]))),128))])],2)):H("",!0)}}),Tn=F(Ln,[["__scopeId","data-v-2016c158"]]),Cn={class:"container"},En=O({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=Y(null),s=kt(Ye?document.body:null);return(i,o)=>(m(),j(st,{name:"fade",onEnter:o[0]||(o[0]=n=>s.value=!0),onAfterLeave:o[1]||(o[1]=n=>s.value=!1)},{default:z(()=>[i.open?(m(),_("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[g("div",Cn,[S(i.$slots,"nav-screen-content-before",{},void 0,!0),V(Sn,{class:"menu"}),V(Tn,{class:"translations"}),V(an,{class:"appearance"}),V(zn,{class:"social-links"}),S(i.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):H("",!0)]),_:3}))}}),Pn=F(En,[["__scopeId","data-v-9fded8ff"]]),Mn={key:0,class:"VPNav"},In=O({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:s,toggleScreen:i}=Li(),{frontmatter:o}=ee(),n=W(()=>o.value.navbar!==!1);return wt("close-screen",s),je(()=>{Ye&&document.documentElement.classList.toggle("hide-nav",!n.value)}),(r,l)=>n.value?(m(),_("header",Mn,[V(en,{"is-screen-open":w(t),onToggleScreen:w(i)},{"nav-bar-title-before":z(()=>[S(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":z(()=>[S(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":z(()=>[S(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":z(()=>[S(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),V(Pn,{open:w(t)},{"nav-screen-content-before":z(()=>[S(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":z(()=>[S(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):H("",!0)}}),An=F(In,[["__scopeId","data-v-c0bcc968"]]),Vn=["role","tabindex"],Dn={key:1,class:"items"},On=O({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:s,collapsible:i,isLink:o,isActiveLink:n,hasActiveLink:r,hasChildren:l,toggle:a}=Es(W(()=>t.item)),c=W(()=>l.value?"section":"div"),p=W(()=>o.value?"a":"div"),u=W(()=>l.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),v=W(()=>o.value?void 0:"button"),f=W(()=>[[`level-${t.depth}`],{collapsible:i.value},{collapsed:s.value},{"is-link":o.value},{"is-active":n.value},{"has-active":r.value}]);function h(k){"key"in k&&k.key!=="Enter"||!t.item.link&&a()}function b(){t.item.link&&a()}return(k,d)=>{const $=ne("VPSidebarItem",!0);return m(),j(me(c.value),{class:se(["VPSidebarItem",f.value])},{default:z(()=>[k.item.text?(m(),_("div",be({key:0,class:"item",role:v.value},Ht(k.item.items?{click:h,keydown:h}:{},!0),{tabindex:k.item.items&&0}),[d[1]||(d[1]=g("div",{class:"indicator"},null,-1)),k.item.link?(m(),j(ye,{key:0,tag:p.value,class:"link",href:k.item.link,rel:k.item.rel,target:k.item.target},{default:z(()=>[(m(),j(me(u.value),{class:"text",innerHTML:k.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(m(),j(me(u.value),{key:1,class:"text",innerHTML:k.item.text},null,8,["innerHTML"])),k.item.collapsed!=null&&k.item.items&&k.item.items.length?(m(),_("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:b,onKeydown:Ft(b,["enter"]),tabindex:"0"},d[0]||(d[0]=[g("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):H("",!0)],16,Vn)):H("",!0),k.item.items&&k.item.items.length?(m(),_("div",Dn,[k.depth<5?(m(!0),_(Q,{key:0},ie(k.item.items,C=>(m(),j($,{key:C.text,item:C,depth:k.depth+1},null,8,["item","depth"]))),128)):H("",!0)])):H("",!0)]),_:1},8,["class"])}}}),Bn=F(On,[["__scopeId","data-v-4e6b587d"]]),Nn=O({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=Y(!0);let s=null;return he(()=>{s=setTimeout(()=>{s=null,t.value=!1},300)}),Ie(()=>{s!=null&&(clearTimeout(s),s=null)}),(i,o)=>(m(!0),_(Q,null,ie(i.items,n=>(m(),_("div",{key:n.text,class:se(["group",{"no-transition":t.value}])},[V(Bn,{item:n,depth:0},null,8,["item"])],2))),128))}}),Hn=F(Nn,[["__scopeId","data-v-1b2ade85"]]),Fn={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},jn=O({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:s}=Se(),i=e,o=Y(null),n=kt(Ye?document.body:null);_e([i,o],()=>{var l;i.open?(n.value=!0,(l=o.value)==null||l.focus()):n.value=!1},{immediate:!0,flush:"post"});const r=Y(0);return _e(t,()=>{r.value+=1},{deep:!0}),(l,a)=>w(s)?(m(),_("aside",{key:0,class:se(["VPSidebar",{open:l.open}]),ref_key:"navEl",ref:o,onClick:a[0]||(a[0]=jt(()=>{},["stop"]))},[a[2]||(a[2]=g("div",{class:"curtain"},null,-1)),g("nav",Fn,[a[1]||(a[1]=g("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),S(l.$slots,"sidebar-nav-before",{},void 0,!0),(m(),j(Hn,{items:w(t),key:r.value},null,8,["items"])),S(l.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):H("",!0)}}),Rn=F(jn,[["__scopeId","data-v-d275b84f"]]),qn=O({__name:"VPSkipLink",setup(e){const t=Ge(),s=Y();_e(()=>t.path,()=>s.value.focus());function i({target:o}){const n=document.getElementById(decodeURIComponent(o.hash).slice(1));if(n){const r=()=>{n.removeAttribute("tabindex"),n.removeEventListener("blur",r)};n.setAttribute("tabindex","-1"),n.addEventListener("blur",r),n.focus(),window.scrollTo(0,0)}}return(o,n)=>(m(),_(Q,null,[g("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),g("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:i}," Skip to content ")],64))}}),Gn=F(qn,[["__scopeId","data-v-1500b763"]]),Un=O({__name:"Layout",setup(e){const{isOpen:t,open:s,close:i}=Se(),o=Ge();_e(()=>o.path,i),Cs(t,i);const{frontmatter:n}=ee(),r=Rt(),l=W(()=>!!r["home-hero-image"]);return wt("hero-image-slot-exists",l),(a,c)=>{const p=ne("Content");return w(n).layout!==!1?(m(),_("div",{key:0,class:se(["Layout",w(n).pageClass])},[S(a.$slots,"layout-top",{},void 0,!0),V(Gn),V(hs,{class:"backdrop",show:w(t),onClick:w(i)},null,8,["show","onClick"]),V(An,null,{"nav-bar-title-before":z(()=>[S(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":z(()=>[S(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":z(()=>[S(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":z(()=>[S(a.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":z(()=>[S(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":z(()=>[S(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),V(xi,{open:w(t),onOpenMenu:w(s)},null,8,["open","onOpenMenu"]),V(Rn,{open:w(t)},{"sidebar-nav-before":z(()=>[S(a.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":z(()=>[S(a.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),V(di,null,{"page-top":z(()=>[S(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":z(()=>[S(a.$slots,"page-bottom",{},void 0,!0)]),"not-found":z(()=>[S(a.$slots,"not-found",{},void 0,!0)]),"home-hero-before":z(()=>[S(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":z(()=>[S(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":z(()=>[S(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":z(()=>[S(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":z(()=>[S(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":z(()=>[S(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":z(()=>[S(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":z(()=>[S(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":z(()=>[S(a.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":z(()=>[S(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":z(()=>[S(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":z(()=>[S(a.$slots,"doc-after",{},void 0,!0)]),"doc-top":z(()=>[S(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":z(()=>[S(a.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":z(()=>[S(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":z(()=>[S(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":z(()=>[S(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":z(()=>[S(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":z(()=>[S(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":z(()=>[S(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),V(vi),S(a.$slots,"layout-bottom",{},void 0,!0)],2)):(m(),j(p,{key:1}))}}}),Yn=F(Un,[["__scopeId","data-v-8c9249ff"]]),Wn={Layout:Yn,enhanceApp:({app:e})=>{e.component("Badge",ps)}},Xn={class:"content"},Zn={class:"expand-code-content"},Kn=O({__name:"index",props:{title:{default:void 0},expanded:{type:Boolean,default:!0}},setup(e){const s=Y(e.expanded);return(i,o)=>{const n=ne("ClientOnly"),r=ne("DemoCardExpand"),l=ne("DemoCard");return m(),j(l,{elevation:!1,bordered:"",block:"","no-padding":"","footer-align":"left"},qt({operate:z(()=>[g("div",{class:se({"block-operate":i.$slots.operate})},[S(i.$slots,"operate")],2)]),content:z(()=>[g("div",Xn,[V(n,null,{default:z(()=>[S(i.$slots,"default")]),_:3})])]),_:2},[i.$slots.code?{name:"footer",fn:z(()=>[g("button",{class:se(["block-button",{"block-button-show":s.value}]),onClick:o[0]||(o[0]=a=>s.value=!s.value)},[o[2]||(o[2]=g("span",{class:"button-left"},[g("svg",{width:"1.3em",height:"1.3em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M17.25 6.75L22.5 12L17.25 17.25M6.75 17.25L1.5 12L6.75 6.75M14.25 3.75L9.75 20.25",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),de(" View Code ")],-1)),(m(),_("svg",{class:se([{"button-icon-rotate":!s.value},"button-icon"]),width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o[1]||(o[1]=[g("path",{d:"M4.5 15.75L12 8.25L19.5 15.75",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]),2))],2),V(r,null,{default:z(()=>[Gt(g("div",null,[g("div",Zn,[S(i.$slots,"code")])],512),[[Ut,s.value]])]),_:3})]),key:"0"}:void 0]),1024)}}}),Jn={},Qn={class:"zebra-card"},er={class:"card-operate"},tr={class:"card-content"},sr={key:0,class:"zebra-card__footer"};function or(e,t){return m(),_("div",Qn,[g("div",er,[S(e.$slots,"operate",{},void 0,!0)]),g("div",tr,[S(e.$slots,"content",{},void 0,!0)]),e.$slots.footer?(m(),_("div",sr,[S(e.$slots,"footer",{},void 0,!0)])):H("",!0)])}const ir=F(Jn,[["render",or],["__scopeId","data-v-6d22e63c"]]),ar=O({__name:"expand",setup(e){function t(o){const n=getComputedStyle(o).width;o.style.width=n,o.style.position="absolute",o.style.visibility="hidden",o.style.height="auto",o.style.top="bottom";const r=getComputedStyle(o).height;o.style.width="",o.style.position="",o.style.visibility="",o.style.height="0px",getComputedStyle(o).height,He(()=>{o.style.height=r})}function s(o){o.style.height="auto"}function i(o){const n=getComputedStyle(o).height;o.style.height=n,getComputedStyle(o).height,He(()=>{o.style.height="0px"})}return(o,n)=>(m(),j(Yt,{class:"zebra-transition-expand",name:"zebra-expand",tag:"div",onEnter:n[0]||(n[0]=r=>t(r)),onAfterEnter:n[1]||(n[1]=r=>s(r)),onLeave:n[2]||(n[2]=r=>i(r))},{default:z(()=>[S(o.$slots,"default")]),_:3}))}}),nr=O({__name:"index",props:{text:String,width:{type:String,default:"100%"},height:{type:String,default:"200px"},customStyle:Object},setup(e){const t=e,s=W(()=>({width:t.width,height:t.height,backgroundColor:i(),...t.customStyle})),i=()=>{const o="0123456789ABCDEF";let n="#";for(let r=0;r<6;r++)n+=o[Math.floor(Math.random()*16)];return n};return(o,n)=>(m(),_("div",{class:"swiper-item-content",style:$e(s.value)},J(e.text),5))}}),rr=F(nr,[["__scopeId","data-v-6d9ce8ce"]]),lr={class:"zebra-conponent-info"},cr={class:"info-item"},dr={class:"item-value"},ur={class:"info-item"},mr={class:"item-value"},pr={key:0,class:"info-item"},fr=O({__name:"info",props:{type:{type:String},value:[String,Number],options:{type:Array,default:()=>[]}},setup(e){const t=e;return(s,i)=>(m(),_("div",lr,[g("div",cr,[i[0]||(i[0]=g("div",{class:"item-text"},"类型",-1)),g("div",dr,J(t.type),1)]),g("div",ur,[i[1]||(i[1]=g("div",{class:"item-text"},"默认值",-1)),g("div",mr,J(t.value),1)]),t.options.length?(m(),_("div",pr,[i[2]||(i[2]=g("div",{class:"item-text"},"可选项",-1)),(m(!0),_(Q,null,ie(t.options,(o,n)=>(m(),_("div",{class:"item-value",key:n},J(o),1))),128))])):H("",!0)]))}}),vr=F(fr,[["__scopeId","data-v-b971a2d4"]]),hr=["disabled"],gr={key:0,class:"demo-button__loading"},br={key:1,class:"demo-button__icon"},yr={class:"demo-button__content"},_r=O({__name:"index",props:{type:{default:"default"},size:{default:"default"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const s=e,i=t,o=n=>{s.disabled||s.loading||i("click",n)};return(n,r)=>(m(),_("button",{class:se(["demo-button",`demo-button--${n.type}`,`demo-button--${n.size}`,{"is-disabled":n.disabled,"is-loading":n.loading}]),disabled:n.disabled||n.loading,onClick:o},[n.loading?(m(),_("span",gr,r[0]||(r[0]=[g("span",{class:"demo-button__loading-indicator"},null,-1)]))):H("",!0),n.icon&&!n.loading?(m(),_("span",br,[S(n.$slots,"icon",{},void 0,!0)])):H("",!0),g("span",yr,[S(n.$slots,"default",{},void 0,!0)])],10,hr))}}),kr=F(_r,[["__scopeId","data-v-122fccc4"]]),wr={class:"z-animated-text"},$r={class:"z-animated-text__last-word-inner"},Sr={class:"z-animated-text__last-word-inner-text"},zr=O({inheritAttrs:!1,__name:"text",props:{text:{},lastWord:{},delay:{default:0},direction:{default:"up"},tag:{default:"span"},wordDelay:{default:75},columnGap:{default:.5},rowGap:{default:0},duration:{default:2e3},once:{type:Boolean,default:!0}},setup(e){const t=W(()=>e.text.split(" ")),s=W(()=>t.value.length),i=Y(!1),o=Y(!1),n=W(()=>i.value?`zebra-animate-slide-${e.direction}-blur`:"zebra-invisible"),r=Y();let l=null;he(()=>{o.value=!0,l=new IntersectionObserver(([c])=>{i.value=c.isIntersecting,e.once&&r.value&&(l==null||l.unobserve(r.value))}),a(()=>r.value,c=>{l==null||l.observe(c)})}),Ie(()=>l==null?void 0:l.disconnect());function a(c,p,u){const v={maxAttempts:20,interval:100,...u};let f=0;function h(){const b=c();b!=null?v.expectedValue!==void 0&&b!==v.expectedValue?f<v.maxAttempts&&(f++,setTimeout(h,v.interval)):p(b):f<v.maxAttempts&&(f++,setTimeout(h,v.interval))}h()}return(c,p)=>(m(),_("div",wr,[o.value?(m(),j(me(c.tag),be({key:0,ref_key:"element",ref:r},c.$attrs,{class:"z-animated-text__root",style:{columnGap:`${c.columnGap}rem`,rowGap:`${c.rowGap}rem`}}),{default:z(()=>[(m(!0),_(Q,null,ie(t.value,(u,v)=>(m(),_("span",{key:u+v,class:"z-animated-text__word"},[g("span",{class:se(["z-animated-text__word-inner",n.value]),style:$e({animationDelay:`${c.delay+v*(c.wordDelay??150)}ms`,animationDuration:`${c.duration}ms`})},J(u),7)]))),128)),c.lastWord?(m(),_("span",{key:0,class:se(["z-animated-text__last-word",n.value]),style:$e({animationDelay:`${c.delay+s.value*(c.wordDelay??150)}ms`,animationDuration:`${c.duration}ms`})},[g("span",$r,[p[0]||(p[0]=g("span",{class:"z-animated-text__last-word-inner-gradient"},null,-1)),g("span",Sr,J(c.lastWord),1)])],6)):H("",!0)]),_:1},16,["style"])):(m(),j(me(c.tag),be({key:1},c.$attrs,{class:"zebra-invisible zebra-inline-flex"}),{default:z(()=>[de(J(c.text)+" ",1),c.lastWord?(m(),_(Q,{key:0},[de(J(c.lastWord),1)],64)):H("",!0)]),_:1},16))]))}}),xr=F(zr,[["__scopeId","data-v-bc41c864"]]),Lr=O({__name:"element",props:{direction:{default:"up"},delay:{default:0},duration:{default:2e3},once:{type:Boolean,default:!0}},setup(e){const t=W(()=>`animate-slide-${e.direction}-blur`),s=Y();let i=null;return he(()=>{i=new IntersectionObserver(([o])=>{o.isIntersecting?(o.target.classList.remove("--invisible"),o.target.classList.add(t.value),e.once===!0&&(i==null||i.unobserve(o.target))):e.once===!1&&(o.target.classList.add("--invisible"),o.target.classList.remove(t.value))}),s.value&&i.observe(s.value)}),Ie(()=>i==null?void 0:i.disconnect()),(o,n)=>(m(),_("div",{ref_key:"element",ref:s,class:"z-animated-element --invisible",style:$e({animationDuration:`${o.duration}ms`,animationDelay:`${o.delay}ms`})},[S(o.$slots,"default",{},void 0,!0)],4))}}),Tr=F(Lr,[["__scopeId","data-v-604b1639"]]),Cr=O({__name:"counter",props:{count:{},duration:{default:1e3},prefix:{default:void 0},suffix:{default:void 0},delay:{default:100},once:{type:Boolean,default:!0}},setup(e){function t(){return typeof document<"u"}const s=e,i=Y(0),o=Y(null);function n(){return!t()||!window.requestAnimationFrame?c=>(setTimeout(c,1e3/60),0):window.requestAnimationFrame.bind(window)}function r(c,p,u,v){const f=n();if(!t()){i.value=p;return}i.value=c,setTimeout(()=>{const h=performance.now(),b=(k=performance.now())=>{const d=k-h,$=Math.min(d/u,1),C=P=>P*(2-P);i.value=Math.round(c+(p-c)*C($)),$<1&&f(b)};f(b)},v)}function l(c,p){r(c,p,s.duration,s.delay)}let a=null;return he(()=>{s.once||(a=new IntersectionObserver(([c])=>{c.isIntersecting&&(l(0,s.count),s.once&&(a==null||a.unobserve(c.target)))}),o.value&&a.observe(o.value))}),Ie(()=>a==null?void 0:a.disconnect()),_e(()=>s.count,(c,p)=>{if(c===p)return;l(p??0,c)},{immediate:!0}),(c,p)=>(m(),_("span",{ref_key:"elementRef",ref:o,class:"z-animated-counter"},[S(c.$slots,"prefix",{},()=>[de(J(c.prefix),1)],!0),de(J(i.value),1),S(c.$slots,"suffix",{},()=>[de(J(c.suffix),1)],!0)],512))}}),Er=F(Cr,[["__scopeId","data-v-4c49ab2a"]]),Pr=["src"],Mr={class:"swiper-slicer-image-clones"},Ir=["data-swiper-item-active","data-swiper-item-clone-active"],Ar=["src"],Vr={__name:"Slicer",props:{height:String,width:String},setup(e){const t=e,s=Y(Array.from({length:7}).map((L,B)=>({url:`/images/template/resource/swipe${B+1}.jpg`,id:B+1}))),i=Y([$t]),o=Y(6),n=Y(null);let r=Y(!1);const l=L=>{L.classNames.push("swiper-slicer")},a=L=>{d(),$(L),L.emit("setTranslate",L,L.translate)},c=L=>{n.value=L},p=L=>{d(),$(L)},u=L=>{$(L)},v=(L,B)=>{C(L,B)},f=(L,B)=>{P(L)},h=()=>{r.value=!0},b=()=>{r.value=!1},k=L=>{var B;if(L.target.dataset.swiperItemActive==n.value.activeIndex&&L.target.dataset.swiperItemCloneActive==0){n.value.animating=!1;const N=A()?new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0}):{bubbles:!0,cancelable:!0,target:{id:`swiperWrapper${(B=n.value.adapterEl)==null?void 0:B.uid}`}};n.value.wrapperEl.dispatchEvent(N)}},d=()=>{s.value.forEach(L=>{L.clones=Array.from({length:o.value}).map((B,N)=>(100/o.value,{url:L.url,id:`childIndex${N}`,viewStyle:{},imageStyle:{}}))})},$=L=>{s.value.forEach(B=>{B.clones.forEach((N,U)=>{const I=100/o.value;N.imageStyle.width=`${L.width}px`,N.imageStyle.height=`${L.height}px`,L.params.direction==="horizontal"?(N.viewStyle.height=`${I}%`,N.viewStyle.top=`${I*U}%`,N.imageStyle.top=`-${100*U}%`):(N.viewStyle.width=`${I}%`,N.viewStyle.left=`${I*U}%`,N.imageStyle.left=`-${100*U}%`)})})},C=(L,B)=>{L.slides.forEach(N=>{N.style.transitionDuration=`${B}ms`}),s.value.forEach(N=>{const U=N.clones;U.forEach((I,G)=>{B===0?(I.viewStyle.transitionTimingFunction="ease-out",I.viewStyle.transitionDuration=r.value?"0ms":`${L.params.speed+L.params.speed/(U.length-1)*(U.length-G-1)}ms`):(I.viewStyle.transitionTimingFunction="",I.viewStyle.transitionDuration=`${B+B/(U.length-1)*(U.length-G-1)}ms`)})})},P=L=>{const B=L.params.direction==="vertical"?"Y":"X",N=L.virtual&&L.params.virtual.enabled;L.slides.forEach((U,I)=>{N&&(I=parseInt(U.getAttribute("data-swiper-slide-index"),10)),U.style.transform=`translate${B}(-${I*100}%)`;const G=U.progress;s.value[I]&&s.value[I].clones.forEach(T=>{const M=-G;T.viewStyle.transform=`translate${B}(${M*100}%)`})})};return(L,B)=>{const N=ne("z-swiper-item"),U=ne("z-swiper");return m(),_("div",{class:"zebra-template-component-stack",style:$e({height:t.height,width:"100%"})},[V(U,{grabCursor:"",autoplay:"",rewind:"",speed:1e3,watchSlidesProgress:"",virtualTranslate:"",modules:i.value,"custom-style":{height:t.height,width:t.width},onBeforeInit:l,onInit:a,onSwiper:c,onSlidesLengthChange:p,onResize:u,onSetTransition:v,onSetTranslate:f,onBeforeLoopFix:h,onLoopFix:b},{default:z(()=>[(m(!0),_(Q,null,ie(s.value,(I,G)=>(m(),j(N,{key:I.id},{default:z(()=>[g("image",{class:"swiper-slicer-image",src:I.url,mode:"aspectFill"},null,8,Pr),g("div",Mr,[(m(!0),_(Q,null,ie(I.clones,(T,M)=>(m(),_("div",{class:"swiper-slicer-image-clone",key:T.id,"data-swiper-item-active":G,"data-swiper-item-clone-active":M,style:$e(T.viewStyle),onTransitionend:k},[g("img",{class:"swiper-slicer-image",src:T.url,style:$e(T.imageStyle)},null,12,Ar)],44,Ir))),128))])]),_:2},1024))),128))]),_:1},8,["modules","custom-style"])],4)}}},Dr=F(Vr,[["__scopeId","data-v-da5414ef"]]),Or={class:"zebra-card-show"},Br={class:"show-item"},Nr=["src"],Hr={class:"show-item"},Fr=["src"],jr={class:"show-item"},Rr=["src"],qr={class:"show-item"},Gr=["src"],Ur={class:"show-item"},Yr={class:"show-item"},Wr=["src"],Xr=O({__name:"index",setup(e){const t=Y([cs,ms,$t,ds,us]),s=Y(Array.from({length:5}).map((l,a)=>({url:`/images/template/resource/swipe${Math.floor(Math.random()*10)+1}.jpg`,id:a+1})));function i(){return Array.from({length:5}).map((l,a)=>({url:`/images/template/resource/swipe${Math.floor(Math.random()*10)+1}.jpg`,id:a+1}))}const o=ke({prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}),n=ke({prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}}),r=ke({prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}});return(l,a)=>{const c=ne("z-swiper-item"),p=ne("z-swiper");return m(),_("div",Or,[g("div",Br,[V(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"cube",modules:t.value,"custom-style":{height:"200px",width:"80%"}},{default:z(()=>[(m(!0),_(Q,null,ie(i(),u=>(m(),j(c,{key:u.id},{default:z(()=>[g("img",{src:u.url},null,8,Nr)]),_:2},1024))),128))]),_:1},8,["modules"])]),g("div",Hr,[V(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"creative",modules:t.value,creativeEffect:o,"custom-style":{height:"200px",width:"80%"}},{default:z(()=>[(m(!0),_(Q,null,ie(s.value,u=>(m(),j(c,{key:u.id},{default:z(()=>[g("img",{src:u.url},null,8,Fr)]),_:2},1024))),128))]),_:1},8,["modules","creativeEffect"])]),g("div",jr,[V(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"creative",modules:t.value,creativeEffect:n,"custom-style":{height:"200px",width:"80%"}},{default:z(()=>[(m(!0),_(Q,null,ie(i(),u=>(m(),j(c,{key:u.id},{default:z(()=>[g("img",{src:u.url},null,8,Rr)]),_:2},1024))),128))]),_:1},8,["modules","creativeEffect"])]),g("div",qr,[V(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"creative",modules:t.value,creativeEffect:r,"custom-style":{height:"200px",width:"80%"}},{default:z(()=>[(m(!0),_(Q,null,ie(i(),u=>(m(),j(c,{key:u.id},{default:z(()=>[g("img",{src:u.url},null,8,Gr)]),_:2},1024))),128))]),_:1},8,["modules","creativeEffect"])]),g("div",Ur,[V(Dr,{width:"80%",height:"200px"})]),g("div",Yr,[V(p,{grabCursor:"",loop:"",autoplay:"",speed:1e3,effect:"flip",modules:t.value,"custom-style":{height:"200px",width:"80%"}},{default:z(()=>[(m(!0),_(Q,null,ie(i(),u=>(m(),j(c,{key:u.id},{default:z(()=>[g("img",{src:u.url},null,8,Wr)]),_:2},1024))),128))]),_:1},8,["modules"])])])}}}),Zr={class:"zebra-card-home"},Kr={id:"hero",class:"z-container"},Jr={class:"title"},Qr={class:"animate-oprate"},el={key:0,class:"oprate-content content-right",href:"https://github.com/zebra-ui/zebra-swiper",target:"blank"},tl={key:0,class:"animate-button"},sl={width:"1em",height:"1em",class:"content-svg",style:{"margin-left":"10px"},viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},ol=O({__name:"index",setup(e){async function t(){try{const i=await fetch("https://ungh.cc/repos/zebra-ui/zebra-swiper");if(!i.ok)throw new Error(`HTTP error status: ${i.status}`);return(await i.json()).repo.stars}catch(i){return console.error("Erreur lors de la récupération des données:",i),null}}const s=Y(0);return t().then(i=>{s.value=i}),(i,o)=>{const n=ne("AnimatedText"),r=ne("AnimatedCounter"),l=ne("AnimatedElement"),a=ne("DemoShow"),c=ne("ClientOnly");return m(),_("div",Zr,[g("section",Kr,[g("div",Jr,[V(n,{text:"A 3D carousel component library based on vue, customizing the carousel style you like",direction:"down",delay:0,tag:"h2",class:"text-top",duration:2e3,"column-gap":.2}),V(n,{text:"Carousel styles with rich effects for","last-word":"Vue & Uniapp",direction:"down",delay:500,tag:"h1",class:"text-bottom"})]),V(l,{delay:1e3},{default:z(()=>[g("div",Qr,[o[2]||(o[2]=g("a",{class:"oprate-content",href:"/guide/introduce"},[g("svg",{width:"1em",height:"1em",class:"content-svg",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M5.25 5.65273C5.25 4.79705 6.1674 4.25462 6.91716 4.66698L18.4577 11.0143C19.2349 11.4417 19.2349 12.5584 18.4577 12.9858L6.91716 19.3331C6.1674 19.7455 5.25 19.203 5.25 18.3474V5.65273Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),de(" Get Started ")],-1)),s.value?(m(),_("a",el,[s.value?(m(),_("div",tl,[o[1]||(o[1]=g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",class:"content-svg",viewBox:"0 0 1024 1024",fill:"currentColor"},[g("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",transform:"scale(64)",fill:"currentColor"})],-1)),V(r,{delay:1250,count:s.value,class:"content-svg",style:{"margin-left":"10px"}},null,8,["count"]),(m(),_("svg",sl,o[0]||(o[0]=[g("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z","clip-rule":"evenodd"},null,-1)])))])):H("",!0)])):H("",!0)])]),_:1}),V(l,{delay:1250},{default:z(()=>o[3]||(o[3]=[g("div",{class:"button-group"},[g("a",{class:"button-group-item",href:"/api/components"},"Components"),g("a",{class:"button-group-item",href:"/api/property"},"Propertys"),g("a",{class:"button-group-item",href:"/api/methods"},"Methods"),g("a",{class:"button-group-item",href:"/api/events"},"Events")],-1)])),_:1}),V(l,{delay:1500},{default:z(()=>[V(c,null,{default:z(()=>[V(a)]),_:1})]),_:1})])])}}}),il=F(ol,[["__scopeId","data-v-0ed9d8f4"]]),al=`
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
      `,nl=`
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
          `,rl=e=>({name:`zebra-swiper-${e}`,license:"MIT",scripts:{dev:"uni"},dependencies:{"@dcloudio/uni-app":"3.0.0-4030620241128001","@dcloudio/uni-app-harmony":"3.0.0-4030620241128001","@dcloudio/uni-app-plus":"3.0.0-4030620241128001","@dcloudio/uni-components":"3.0.0-4030620241128001","@dcloudio/uni-h5":"3.0.0-4030620241128001","@dcloudio/uni-mp-alipay":"3.0.0-4030620241128001","@dcloudio/uni-mp-baidu":"3.0.0-4030620241128001","@dcloudio/uni-mp-jd":"3.0.0-4030620241128001","@dcloudio/uni-mp-kuaishou":"3.0.0-4030620241128001","@dcloudio/uni-mp-lark":"3.0.0-4030620241128001","@dcloudio/uni-mp-qq":"3.0.0-4030620241128001","@dcloudio/uni-mp-toutiao":"3.0.0-4030620241128001","@dcloudio/uni-mp-weixin":"3.0.0-4030620241128001","@dcloudio/uni-mp-xhs":"3.0.0-4030620241128001","@dcloudio/uni-quickapp-webview":"3.0.0-4030620241128001",vue:"^3.4.21","vue-i18n":"^9.1.9","@zebra-ui/swiper":"3.0.0"},devDependencies:{"@dcloudio/types":"^3.4.8","@dcloudio/uni-automator":"3.0.0-4030620241128001","@dcloudio/uni-cli-shared":"3.0.0-4030620241128001","@dcloudio/uni-stacktracey":"3.0.0-4030620241128001","@dcloudio/vite-plugin-uni":"3.0.0-4030620241128001","@vue/tsconfig":"^0.1.3","@vue/runtime-core":"^3.4.21",typescript:"^4.9.4",vite:"5.2.8","vue-tsc":"^1.0.24",sass:"^1.83.0"}}),ll=`
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
        `,cl=`
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
`,dl=`
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
`,ul=`
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
`,ml=`
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

`,pl=`
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
`,fl=`
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
`,vl=`
import { ZSwiper, ZSwiperItem } from '@zebra-ui/swiper'

declare module 'vue' {
  export interface GlobalComponents {
    ZSwiper: typeof ZSwiper
    ZSwiperItem: typeof ZSwiperItem
  }
}
`,hl=`
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
`,gl=`
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
`,bl=`
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
`,yl=`
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
`,_l=`
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
`,kl=`
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
`,wl=`
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
`,$l=`
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
`,Sl=`
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
`,zl=`
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
`,xl=`
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

`,Ll=`
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
`,Tl=`
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
`,Cl=`
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
`,El=`
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
`,Pl=`
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
`,Ml=`
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
`,Il={"sandbox.config.json":{content:{infiniteLoopProtection:!0,hardReloadOnChange:!1,view:"browser",container:{node:"18"}}}};function Al(e,t){return{"package.json":{content:rl(t)},"src/components/DemoBlock/DemoBlock.vue":{content:ml},"src/components/DemoItem/DemoItem.vue":{content:pl},"src/common/js/data.js":{content:fl},"src/App.vue":{content:al},"src/pages.json":{content:cl},"src/main.js":{content:dl},"src/pages/index/index.vue":{content:e},"src/manifest.json":{content:ul},"src/global.d.ts":{content:vl},"index.html":{content:nl},"vite.config.js":{content:ll},...Il}}function Vl(e){return new Promise(t=>{const i=Al({base:gl,cards:bl,carousel:yl,controller:_l,coverflow:kl,creative:wl,cube:$l,fade:Sl,flip:zl,freemode:xl,loop:Ll,navigation:Tl,pagination:Cl,scrollbar:El,thumbs:Pl,virtual:Ml,autoplay:hl}[e],e);fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({files:i})}).then(o=>o.json()).then(({sandbox_id:o})=>{t(`https://codesandbox.io/p/sandbox/${o}?file=/src/pages/index/index.vue`)})})}const Dl=["src","title"],Ol={__name:"index",props:{page:String},setup(e){const t=e,s=Y("");return Vl(t.page).then(i=>{s.value=i}),(i,o)=>(m(),_("iframe",{src:s.value,style:{width:"100%",height:"calc(100vh - var(--vp-nav-height))",border:"0","border-radius":"4px",overflow:"hidden"},allowFullScreen:"",title:`zebra-swiper-${e.page}`,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"},null,8,Dl))}},Bl=O({__name:"animate",props:{options:{default:()=>({alwaysActive:!1,activeOffset:20,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:"scroll-y",rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0})}},setup(e){const t=e,s=Y(null),i=Y(null),o=Y(null),n=Y(null),r=Y(null),l=Y(null),a=Y(!1),c=Y(void 0),p=Y(0),u=Y(0);let v,f;const h=[],b=()=>{f=requestAnimationFrame(()=>{h.forEach(y=>{if(typeof y=="function")y();else{const{element:E,prop:R,value:Z}=y;E.style[R]=Z}}),h.splice(0,h.length),b()})},k=(y,E)=>{h.push({element:y,prop:"transitionDuration",value:E})},d=(y,E)=>{h.push({element:y,prop:"transitionTimingFunction",value:E})},$=(y,E)=>{h.push({element:y,prop:"transform",value:E})},C=(y,E)=>{h.push({element:y,prop:"opacity",value:String(E)})},P=()=>{if(!i.value)return;let y=!1;if(!r.value){const E=document.createElement("span");E.classList.add("atropos-shadow"),r.value=E,y=!0}r.value&&($(r.value,`translate3d(0,0,-${t.options.shadowOffset}px) scale(${t.options.shadowScale})`),y&&i.value&&i.value.appendChild(r.value))},L=()=>{if(!n.value)return;let y=!1;if(!l.value){const E=document.createElement("span");E.classList.add("atropos-highlight"),l.value=E,y=!0}l.value&&($(l.value,"translate3d(0,0,0)"),y&&n.value&&n.value.appendChild(l.value))},B=({rotateXPercentage:y=0,rotateYPercentage:E=0,duration:R,opacityOnly:Z,easeOut:X})=>{if(!n.value)return;const D=q=>{if(q.dataset.atroposOpacity&&typeof q.dataset.atroposOpacity=="string")return q.dataset.atroposOpacity.split(";").map(te=>parseFloat(te))};n.value.querySelectorAll("[data-atropos-offset], [data-atropos-opacity]").forEach(q=>{if(!(q instanceof HTMLElement))return;k(q,R||"0"),d(q,X?"ease-out":"");const te=D(q);if(y===0&&E===0)Z||$(q,"translate3d(0, 0, 0)"),te&&C(q,te[0]);else{const ae=parseFloat(q.dataset.atroposOffset||"0")/100;if(!Number.isNaN(ae)&&!Z&&$(q,`translate3d(${-E*-ae}%, ${y*-ae}%, 0)`),te){const[le,pe]=te,fe=Math.max(Math.abs(y),Math.abs(E));C(q,le+(pe-le)*fe/100)}}})},N=(y,E)=>{if(!s.value||!i.value)return;if(typeof y>"u"&&typeof E>"u"){const Oe=s.value.getBoundingClientRect();y=Oe.left+Oe.width/2,E=Oe.top+Oe.height/2}v=s.value.getBoundingClientRect();const{top:R,left:Z,width:X,height:D}=v;let q=0,te=0;const ae=X/2,le=D/2,pe=y-Z,fe=E-R;te=t.options.rotateYMax*(pe-ae)/(X/2)*-1,q=t.options.rotateXMax*(fe-le)/(D/2),q=Math.min(Math.max(-q,-t.options.rotateXMax),t.options.rotateXMax),t.options.rotateXInvert&&(q=-q),te=Math.min(Math.max(-te,-t.options.rotateYMax),t.options.rotateYMax),t.options.rotateYInvert&&(te=-te);const K=q/t.options.rotateXMax*100,oe=te/t.options.rotateYMax*100,ce=oe/100*t.options.stretchX*(t.options.rotateYInvert?-1:1),De=K/100*t.options.stretchY*(t.options.rotateXInvert?-1:1),Pt=Math.max(Math.abs(K),Math.abs(oe))/100*t.options.stretchZ;$(i.value,`translate3d(${ce}%, ${-De}%, ${-Pt}px) rotateX(${q}deg) rotateY(${te}deg)`),l.value&&(k(l.value,`${t.options.duration}ms`),d(l.value,"ease-out"),$(l.value,`translate3d(${-oe*.25}%, ${K*.25}%, 0)`),C(l.value,Math.max(Math.abs(K),Math.abs(oe))/100)),B({rotateXPercentage:K,rotateYPercentage:oe,duration:`${t.options.duration}ms`,easeOut:!0}),typeof t.options.onRotate=="function"&&t.options.onRotate(q,te)},U=()=>{!s.value||!i.value||!o.value||(h.push(()=>{var y;return(y=s.value)==null?void 0:y.classList.add("atropos-active")}),k(i.value,`${t.options.duration}ms`),d(i.value,"ease-out"),$(o.value,`translate3d(0,0, ${t.options.activeOffset}px)`),k(o.value,`${t.options.duration}ms`),d(o.value,"ease-out"),r.value&&(k(r.value,`${t.options.duration}ms`),d(r.value,"ease-out")),a.value=!0)},I=y=>{if(c.value=void 0,!(y.type==="pointerdown"&&y.pointerType==="mouse")&&!(y.type==="pointerenter"&&y.pointerType!=="mouse")){if(y.type==="pointerdown"&&y.preventDefault(),p.value=y.clientX,u.value=y.clientY,t.options.alwaysActive){v=void 0;return}U(),typeof t.options.onEnter=="function"&&t.options.onEnter()}},G=y=>{c.value===!1&&y.cancelable&&y.preventDefault()},T=y=>{var D;if(!t.options.rotate||!a.value)return;if(y.pointerType!=="mouse"){if(!t.options.rotateTouch)return;y.preventDefault()}const{clientX:E,clientY:R}=y,Z=E-p.value,X=R-u.value;if(typeof t.options.rotateTouch=="string"&&(Z!==0||X!==0)&&typeof c.value>"u"){if(Z*Z+X*X>=25){const q=Math.atan2(Math.abs(X),Math.abs(Z))*180/Math.PI;c.value=t.options.rotateTouch==="scroll-y"?q>45:90-q>45}c.value===!1&&((D=s.value)==null||D.classList.add("atropos-rotate-touch"),y.cancelable&&y.preventDefault())}y.pointerType!=="mouse"&&c.value||N(E,R)},M=y=>{var E;if(v=void 0,!!a.value&&!(y&&y.type==="pointerup"&&y.pointerType==="mouse")&&!(y&&y.type==="pointerleave"&&y.pointerType!=="mouse")){if(typeof t.options.rotateTouch=="string"&&c.value&&((E=s.value)==null||E.classList.remove("atropos-rotate-touch")),t.options.alwaysActive){N(),typeof t.options.onRotate=="function"&&t.options.onRotate(0,0),typeof t.options.onLeave=="function"&&t.options.onLeave();return}!s.value||!o.value||!i.value||(h.push(()=>{var R;return(R=s.value)==null?void 0:R.classList.remove("atropos-active")}),k(o.value,`${t.options.duration}ms`),d(o.value,""),$(o.value,"translate3d(0,0, 0)"),r.value&&(k(r.value,`${t.options.duration}ms`),d(r.value,"")),l.value&&(k(l.value,`${t.options.duration}ms`),d(l.value,""),$(l.value,"translate3d(0, 0, 0)"),C(l.value,0)),k(i.value,`${t.options.duration}ms`),d(i.value,""),$(i.value,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),B({duration:`${t.options.duration}ms`}),a.value=!1,typeof t.options.onRotate=="function"&&t.options.onRotate(0,0),typeof t.options.onLeave=="function"&&t.options.onLeave())}},x=y=>{const E=y.target;s.value&&!s.value.contains(E)&&E!==s.value&&a.value&&M()};return he(()=>{var y,E,R,Z,X,D,q,te,ae,le;t.options.shadow&&P(),t.options.highlight&&L(),t.options.rotateTouch&&(typeof t.options.rotateTouch=="string"?(y=s.value)==null||y.classList.add(`atropos-rotate-touch-${t.options.rotateTouch}`):(E=s.value)==null||E.classList.add("atropos-rotate-touch")),(R=s.value)!=null&&R.querySelector("[data-atropos-opacity]")&&B({opacityOnly:!0}),document.addEventListener("click",x),(Z=s.value)==null||Z.addEventListener("pointerdown",I),(X=s.value)==null||X.addEventListener("pointerenter",I),(D=s.value)==null||D.addEventListener("pointermove",T),(q=s.value)==null||q.addEventListener("touchmove",G),(te=s.value)==null||te.addEventListener("pointerleave",M),(ae=s.value)==null||ae.addEventListener("pointerup",M),(le=s.value)==null||le.addEventListener("lostpointercapture",M),b(),t.options.alwaysActive&&(U(),N())}),Ie(()=>{var y,E,R,Z,X,D,q;cancelAnimationFrame(f),document.removeEventListener("click",x),(y=s.value)==null||y.removeEventListener("pointerdown",I),(E=s.value)==null||E.removeEventListener("pointerenter",I),(R=s.value)==null||R.removeEventListener("pointermove",T),(Z=s.value)==null||Z.removeEventListener("touchmove",G),(X=s.value)==null||X.removeEventListener("pointerleave",M),(D=s.value)==null||D.removeEventListener("pointerup",M),(q=s.value)==null||q.removeEventListener("lostpointercapture",M)}),(y,E)=>(m(),_("div",{ref_key:"root",ref:s,class:"atropos"},[g("div",{ref_key:"scaleEl",ref:o,class:"atropos-scale"},[g("div",{ref_key:"rotateEl",ref:i,class:"atropos-rotate"},[g("div",{ref_key:"innerEl",ref:n,class:"atropos-inner"},[S(y.$slots,"default",{},void 0,!0)],512),g("span",{ref_key:"shadowEl",ref:r,class:"atropos-shadow"},null,512)],512)],512)],512))}}),Nl=F(Bl,[["__scopeId","data-v-c9c3ffa3"]]),Hl="/images/template/template-bg.png",Fl={},jl={class:"zebra-background-content"};function Rl(e,t){return m(),_("div",jl,t[0]||(t[0]=[g("img",{"data-atropos-offset":"1",src:Hl,alt:"template-bg"},null,-1)]))}const ql=F(Fl,[["render",Rl],["__scopeId","data-v-732d1356"]]),Gl={class:"zebra-icon-content"},Ul=O({__name:"icon-content",props:{name:String},setup(e){const t=e;return(s,i)=>(m(),_("div",Gl,[g("span",{class:se(`iconfont zebra-template-${t.name}`)},null,2)]))}}),Yl=F(Ul,[["__scopeId","data-v-e7a59da9"]]),Wl={class:"zebra-window-content"},Xl={class:"content-top"},Zl={class:"top-title"},Kl={class:"content-wrapper"},Jl=O({__name:"window-content",props:{name:String},setup(e){const t=e;return(s,i)=>(m(),_("div",Wl,[g("div",Xl,[i[0]||(i[0]=g("div",{class:"top-dot",style:{"background-color":"#ff5e57"}},null,-1)),i[1]||(i[1]=g("div",{class:"top-dot",style:{"background-color":"#ffbb2e"}},null,-1)),i[2]||(i[2]=g("div",{class:"top-dot",style:{"background-color":"#38c149"}},null,-1)),g("div",Zl,J(t.name),1)]),g("div",Kl,[S(s.$slots,"default",{},void 0,!0)])]))}}),Ql=F(Jl,[["__scopeId","data-v-74e9b76b"]]),ec={class:"zebra-content-template"},tc=O({__name:"index",props:{name:String,icon:String},setup(e){const t=e,s={Stack:ge(()=>ve(()=>import("./Stack.CVSne22S.js"),__vite__mapDeps([2,1]))),Panorama:ge(()=>ve(()=>import("./Panorama.DZRf9kl6.js"),__vite__mapDeps([3,4,1]))),Circular:ge(()=>ve(()=>import("./Circular.Bp51bQkP.js"),__vite__mapDeps([5,4,1]))),Fanshaped:ge(()=>ve(()=>import("./Fanshaped.CpPUomeQ.js"),__vite__mapDeps([6,1]))),Poster:ge(()=>ve(()=>import("./Poster.Cweu69nQ.js"),__vite__mapDeps([7,1])))},i=W(()=>s[t.name||"Stack"]);return(o,n)=>{const r=ne("ClientOnly");return m(),_("div",ec,[V(ql),V(Yl,{name:e.icon,class:"template-icon","data-atropos-offset":"8"},null,8,["name"]),V(Ql,{name:e.name,"data-atropos-offset":"4"},{default:z(()=>[V(r,null,{default:z(()=>[(m(),j(me(i.value),{isMini:""}))]),_:1})]),_:1},8,["name"])])}}}),sc=F(tc,[["__scopeId","data-v-a431d14e"]]),oc={class:"zebra-template-card"},ic={class:"card-image"},ac={class:"card-content"},nc={class:"card-title"},rc={class:"card-description"},lc={class:"card-platforms"},cc={class:"integer"},dc={class:"decimal"},uc=O({__name:"card",props:{icon:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},platforms:{type:Array,default:()=>[]},price:{type:[Number,String],default:"Free"},link:{type:String,default:""},name:{type:String,default:"Stack"}},setup(e){const t=e,s=W(()=>{if(t.price==="Free")return"Free";const i=Number(t.price),[o,n]=String(i).split(".");return{integer:o,decimal:n||"00"}});return(i,o)=>(m(),j(Nl,null,{default:z(()=>[g("div",oc,[g("div",ic,[V(sc,{name:e.name,icon:e.icon},null,8,["name","icon"])]),g("div",ac,[g("h3",nc,J(e.title),1),g("p",rc,J(e.description),1),g("div",lc,[(m(!0),_(Q,null,ie(e.platforms,n=>(m(),_("span",{key:n,class:"platform-tag"},J(n),1))),128))])]),g("div",{class:se(["price-tag",{"is-free":e.price==="Free"}])},[e.price==="Free"?(m(),_(Q,{key:0},[de(" Free ")],64)):(m(),_(Q,{key:1},[g("span",cc,"￥"+J(s.value.integer),1),o[0]||(o[0]=g("span",{class:"dot"},".",-1)),g("span",dc,J(s.value.decimal),1)],64))],2)])]),_:1}))}}),mc=F(uc,[["__scopeId","data-v-1162ab5b"]]),pc={class:"zebra-template"},fc={class:"template-container"},vc=O({__name:"index",setup(e){const t=Wt(),s=[{icon:"stack",title:"Stack",description:"堆叠轮播",platforms:["H5","小程序","App"],price:"Free",name:"Stack",link:"/template/detail"},{icon:"panorama",title:"Panorama",description:"全景轮播",platforms:["H5","小程序","App"],price:"Free",name:"Panorama",link:"/template/detail"},{icon:"circular",title:"Circular",description:"环形轮播（反向全景）",platforms:["H5","小程序","App"],price:"Free",name:"Circular",link:"/template/detail"},{icon:"fanshaped",title:"Fanshaped",description:"扇形轮播，基于creative创意性",platforms:["H5","小程序","App"],price:"Free",name:"Fanshaped",link:"/template/detail"},{icon:"poster",title:"Poster",description:"海报卡片堆叠，基于creative创意性",platforms:["H5","小程序","App"],price:"Free",name:"Poster",link:"/template/detail"}],i=o=>{t.go(`${o.link}?name=${o.name}`)};return(o,n)=>(m(),_("div",pc,[g("div",fc,[(m(),_(Q,null,ie(s,(r,l)=>V(mc,be({key:l,ref_for:!0},r,{class:"template-card",onClick:a=>i(r)}),null,16,["onClick"])),64))])]))}}),hc=F(vc,[["__scopeId","data-v-ada5e1e6"]]),gc={class:"zebra-content-detail"},bc=O({__name:"detail",setup(e){const t={Stack:ge(()=>ve(()=>import("./Stack.CVSne22S.js"),__vite__mapDeps([2,1]))),Panorama:ge(()=>ve(()=>import("./Panorama.DZRf9kl6.js"),__vite__mapDeps([3,4,1]))),Circular:ge(()=>ve(()=>import("./Circular.Bp51bQkP.js"),__vite__mapDeps([5,4,1]))),Fanshaped:ge(()=>ve(()=>import("./Fanshaped.CpPUomeQ.js"),__vite__mapDeps([6,1]))),Poster:ge(()=>ve(()=>import("./Poster.Cweu69nQ.js"),__vite__mapDeps([7,1])))},s=new URLSearchParams(typeof window<"u"?window.location.search:""),i=W(()=>s.get("name")||"Stack"),o=W(()=>t[i.value]);return(n,r)=>{const l=ne("ClientOnly");return m(),_("div",gc,[V(l,null,{default:z(()=>[(m(),j(me(o.value)))]),_:1})])}}}),yc=F(bc,[["__scopeId","data-v-bcb89ce0"]]),_c="@zebra-ui/swiper",kc="zebra-swiper",wc="zebra-swiper 3D轮播组件库，基于Vue3+TypeScript重构，从心出发。",$c="3.0.2",Sc="专为多端设计的高性能swiper轮播组件库，支持多种复杂的 3D swiper轮播效果。",zc="index.ts",xc="index.d.ts",Lc=["swiper","zebra","轮播","3D","banner"],Tc="https://github.com/zebra-ui/zebra-swiper",Cc={url:"https://github.com/zebra-ui/zebra-uniapp-swiper/issues"},Ec="https://swiper.zebraui.com",Pc="zebra-ui",Mc="ISC",Ic={access:"public"},Ac={tags:"tags.json",attributes:"attributes.json"},Vc={HBuilderX:"^3.1.0"},Dc={sale:{regular:{price:"0.00"},sourcecode:{price:"0.00"}},contact:{qq:""},declaration:{ads:"无",data:"插件不采集任何数据",permissions:"无"},npmurl:"https://www.npmjs.com/package/@zebra-ui/swiper",type:"component-vue"},Oc={dependencies:[],encrypt:[],platforms:{cloud:{tcb:"y",aliyun:"y",alipay:"n"},client:{Vue:{vue2:"y",vue3:"y"},App:{"app-vue":"y","app-nvue":"n","app-harmony":"u","app-uvue":"u"},"H5-mobile":{Safari:"y","Android Browser":"y","微信浏览器(Android)":"y","QQ浏览器(Android)":"y"},"H5-pc":{Chrome:"y",IE:"y",Edge:"y",Firefox:"y",Safari:"y"},小程序:{微信:"y",阿里:"y",百度:"y",字节跳动:"y",QQ:"y",钉钉:"u",快手:"y",飞书:"y",京东:"u"},快应用:{华为:"y",联盟:"y"}}}},Bc={name:_c,id:kc,displayName:wc,version:$c,description:Sc,main:zc,types:xc,keywords:Lc,repository:Tc,bugs:Cc,homepage:Ec,author:Pc,license:Mc,publishConfig:Ic,vetur:Ac,engines:Vc,dcloudext:Dc,uni_modules:Oc},gd={extends:Wn,async enhanceApp(e){const{app:t}=e;t.component("DemoBlock",Kn),t.component("DemoCard",ir),t.component("DemoCardExpand",ar),t.component("DemoItem",rr),t.component("ComponentInfo",vr),t.component("DemoOprate",kr),t.component("AnimatedText",xr),t.component("AnimatedElement",Tr),t.component("AnimatedCounter",Er),t.component("DemoShow",Xr),t.component("DemoHome",il),t.component("CodeSandbox",Ol),t.component("DemoTemplate",hc),t.component("DemoTemplateDetail",yc);{const s=await ve(()=>import("./index.Xd_q-H-a.js"),__vite__mapDeps([8,1]));t.use(s.default),setTimeout(()=>{const i=document.querySelector(".VPNavBarTitle .title");if(i&&!i.querySelector(".version-tag")){const o=document.createElement("span");o.className="version-tag",o.textContent=`v${Bc.version}`,o.style.fontSize="0.8em",o.style.color="var(--vp-badge-tip-text)",o.style.marginLeft="0.5em",o.style.background="var(--vp-badge-tip-bg)",o.style.padding="0.2em 0.4em",o.style.borderRadius="4px",i.appendChild(o)}},100)}}};export{ad as $,$t as A,qc as B,vd as C,we as D,pd as E,Zc as F,Rc as G,Ze as H,ft as I,vt as J,Hc as K,rs as L,Pe as M,cd as N,St as O,ld as P,Xc as Q,gd as R,dd as S,ud as T,ls as U,hd as V,ed as W,td as X,rd as Y,od as Z,id as _,ds as a,nd as a0,sd as a1,ee as a2,ms as b,cs as c,md as d,us as e,fd as f,Ce as g,as as h,ht as i,Jc as j,Qc as k,A as l,os as m,Kc as n,Wc as o,Yc as p,at as q,is as r,es as s,Uc as t,Gc as u,ts as v,Fc as w,jc as x,Be as y,Xt as z};
