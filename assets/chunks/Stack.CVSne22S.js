import{d as I,a as h,c as P,C as f,o as d,b as g,H as V,w as S,F as $,D as O,g as R,l as T,O as _,_ as D}from"./framework.BboaNvjl.js";const F=["src"],N=I({__name:"Stack",props:{isMini:Boolean},setup(r){const y=r,b=h(Array.from({length:7}).map((e,s)=>({url:`/images/template/resource/swipe${s+1}.jpg`,id:s+1}))),m=h("0px"),x=document.getElementById("VPContent");new ResizeObserver(e=>{for(let s of e)m.value=s.contentRect.height+"px"}).observe(x);const z=P(()=>{if(y.isMini)return{padding:0,height:"100%",width:"100%"}}),p={opacityStep:.33,scaleStep:.2,sideSlides:2},v=(e,s)=>{const t=p.scaleStep,i=e.slides.length,n=Math.max(Math.min(p.sideSlides,3),1),M={1:2,2:1,3:.2}[n];for(let a=0;a<e.slides.length;a+=1){const l=e.slides[a],c=e.slides[a].progress,o=Math.abs(c);let u=1;o>1&&(u=(o-1)*.3*M+1);const w=`${c*u*50}%`,B=1-o*t,C=i-Math.abs(Math.round(c)),E=`translateX(${w}) scale(${B})`;l.style.transform=E,l.style.zIndex=C,l.style.opacity=o>n+1?0:1}},k=(e,s)=>{e.slides.forEach(t=>{t.style.transitionDuration=`${s}ms`})};return(e,s)=>{const t=f("z-swiper-item"),i=f("z-swiper");return d(),g("div",{class:"zebra-template-component-stack",style:_({height:m.value,...z.value})},[V(i,{enabled:!r.isMini,grabCursor:"",loop:"",watchSlidesProgress:"",slidesPerView:"2",centeredSlides:"",onSetTranslate:v,onSetTransition:k},{default:S(()=>[(d(!0),g($,null,O(b.value,n=>(d(),R(t,{key:n.id},{default:S(()=>[T("img",{src:n.url,style:_({borderRadius:r.isMini?"4px":"20px"})},null,12,F)]),_:2},1024))),128))]),_:1},8,["enabled"])],4)}}}),H=D(N,[["__scopeId","data-v-60935f4b"]]);export{H as default};