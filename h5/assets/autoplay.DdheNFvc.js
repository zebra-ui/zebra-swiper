import{y as e}from"./index-Cfs_Z2UQ.js";function a({swiper:a,extendParams:t,on:n,emit:i,params:o}){var r,l;let s,u;a.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,d,y,m,v,c,g,T,b=(null==(r=null==o?void 0:o.autoplay)?void 0:r.delay)||3e3,f=(null==(l=null==o?void 0:o.autoplay)?void 0:l.delay)||3e3,w=(new Date).getTime();function E(e){var t;a&&!a.destroyed&&a.wrapperEl&&e.target===a.wrapperEl&&(a.wrapperEl.removeEventListener("transitionend",E),T||(null==(t=e.detail)?void 0:t.bySwiperTouchMove)||F())}const L=()=>{if(a.destroyed||!a.autoplay.running)return;a.autoplay.paused?d=!0:d&&(f=p,d=!1);const e=a.autoplay.paused?p:w+f-(new Date).getTime();a.autoplay.timeLeft=e,i("autoplayTimeLeft",e,e/b),u=requestAnimationFrame((()=>{L()}))},O=e=>{var t,n,o;if(a.destroyed||!a.autoplay.running)return;cancelAnimationFrame(Number(u)),L();let r=void 0===e?null==(t=a.params.autoplay)?void 0:t.delay:e;b=null==(n=a.params.autoplay)?void 0:n.delay,f=null==(o=a.params.autoplay)?void 0:o.delay;const l=(()=>{var e;let t;if(t=a.virtual&&"object"==typeof a.params.virtual&&(null==(e=a.params.virtual)?void 0:e.enabled)?a.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:a.slides[a.activeIndex],t)return parseInt(t.getAttribute("data-swiper-autoplay")||"",10)})();!Number.isNaN(l)&&l&&l>0&&void 0===e&&(r=l,b=l,f=l),p=r||0;const{speed:d}=a.params,y=()=>{var e,t,n;a&&!a.destroyed&&((null==(e=a.params.autoplay)?void 0:e.reverseDirection)?!a.isBeginning||a.params.loop||a.params.rewind?(a.slidePrev(d,!0,!0),i("autoplay")):(null==(t=a.params.autoplay)?void 0:t.stopOnLastSlide)||(a.slideTo(a.slides.length-1,d,!0,!0),i("autoplay")):!a.isEnd||a.params.loop||a.params.rewind?(a.slideNext(d,!0,!0),i("autoplay")):(null==(n=a.params.autoplay)?void 0:n.stopOnLastSlide)||(a.slideTo(0,d,!0,!0),i("autoplay")),a.params.cssMode&&(w=(new Date).getTime(),requestAnimationFrame((()=>{O()}))))};return r&&r>0?(clearTimeout(s),s=setTimeout((()=>{y()}),r)):requestAnimationFrame((()=>{y()})),r},S=()=>(w=(new Date).getTime(),a.autoplay.running=!0,O(),i("autoplayStart"),!0),M=()=>(a.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(Number(u)),i("autoplayStop"),!0),D=(e,t)=>{var n,o;if(a.destroyed||!a.autoplay.running)return;clearTimeout(s),e||(g=!0);const r=()=>{var e;i("autoplayPause"),(null==(e=a.params.autoplay)?void 0:e.waitForTransition)?a.wrapperEl.addEventListener("transitionend",E):F()};if(a.autoplay.paused=!0,t)return c&&(p=null==(n=a.params.autoplay)?void 0:n.delay),c=!1,void r();const l=p||(null==(o=a.params.autoplay)?void 0:o.delay);p=l-((new Date).getTime()-w),a.isEnd&&p<0&&!a.params.loop||(p<0&&(p=0),r())},F=()=>{a.isEnd&&p<0&&!a.params.loop||a.destroyed||!a.autoplay.running||(w=(new Date).getTime(),g?(g=!1,O(p)):O(),a.autoplay.paused=!1,i("autoplayResume"))},h=()=>{if(a.destroyed||!a.autoplay.running)return;const{document:e}=window;"hidden"===e.visibilityState&&(g=!0,D(!0)),"visible"===e.visibilityState&&F()},A=e=>{"mouse"===e.pointerType&&(g=!0,T=!0,a.animating||a.autoplay.paused||D(!0))},I=e=>{"mouse"===e.pointerType&&(T=!1,a.autoplay.paused&&F())};n("init",(()=>{var t;(null==(t=a.params.autoplay)?void 0:t.enabled)&&((()=>{var t;(null==(t=a.params.autoplay)?void 0:t.pauseOnMouseEnter)&&e()&&(a.el.addEventListener("pointerenter",A),a.el.addEventListener("pointerleave",I))})(),document.addEventListener("visibilitychange",h),S())})),n("destroy",(()=>{a.el&&"string"!=typeof a.el&&e()&&(a.el.removeEventListener("pointerenter",A),a.el.removeEventListener("pointerleave",I)),document.removeEventListener("visibilitychange",h),a.autoplay.running&&M()})),n("_freeModeStaticRelease",(()=>{(m||g)&&F()})),n("_freeModeNoMomentumRelease",(()=>{var e;(null==(e=a.params.autoplay)?void 0:e.disableOnInteraction)?M():D(!0,!0)})),n("beforeTransitionStart",((e,t,n)=>{var i;!a.destroyed&&a.autoplay.running&&(n||!(null==(i=a.params.autoplay)?void 0:i.disableOnInteraction)?D(!0,!0):M())})),n("sliderFirstMove",(()=>{var e;!a.destroyed&&a.autoplay.running&&((null==(e=a.params.autoplay)?void 0:e.disableOnInteraction)?M():(y=!0,m=!1,g=!1,v=setTimeout((()=>{g=!0,m=!0,D(!0)}),200)))})),n("touchEnd",(()=>{var e;if(!a.destroyed&&a.autoplay.running&&y){if(clearTimeout(v),clearTimeout(s),null==(e=a.params.autoplay)?void 0:e.disableOnInteraction)return m=!1,void(y=!1);m&&a.params.cssMode&&F(),m=!1,y=!1}})),n("slideChange",(()=>{!a.destroyed&&a.autoplay.running&&(c=!0)})),Object.assign(a.autoplay,{start:S,stop:M,pause:D,resume:F})}export{a as A};