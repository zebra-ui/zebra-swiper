import{E as z}from"./effect-panorama.DBUhi5uy.js";import{d as x,a,c as r,C as m,o as n,b as u,H as E,w as d,F as B,D as C,g as M,O as o,l as P,_ as k}from"./framework.BboaNvjl.js";import"./theme.D5Hi98B-.js";const O=["src"],R=x({__name:"Panorama",props:{isMini:Boolean},setup(t){const p=[z],f=t,h=a(Array.from({length:10}).map((s,e)=>({url:`/images/template/resource/swipe${e+1}.jpg`,id:e+1}))),i=a("0px"),c=a(0),_=document.getElementById("VPContent");new ResizeObserver(s=>{for(let e of s)c.value=e.contentRect.width,i.value=e.contentRect.height+"px"}).observe(_);const v=r(()=>c.value<=768),g=r(()=>{if(f.isMini)return{padding:0,height:"100%",width:"100%"}}),w=r(()=>({depth:200,rotate:40,stretch:1}));return(s,e)=>{const b=m("z-swiper-item"),y=m("z-swiper");return n(),u("div",{class:"zebra-template-component-panorama",style:o({height:i.value,...g.value})},[E(y,{enabled:!t.isMini,grabCursor:"",loop:"",slidesPerView:"auto",centeredSlides:"",effect:"panorama",customEffect:w.value,modules:p},{default:d(()=>[(n(!0),u(B,null,C(h.value,l=>(n(),M(b,{key:l.id,style:o({width:t.isMini?"60px":v.value?"50%":"30%"})},{default:d(()=>[P("img",{src:l.url,style:o({borderRadius:t.isMini?"4px":"20px"})},null,12,O)]),_:2},1032,["style"]))),128))]),_:1},8,["enabled","customEffect"])],4)}}}),I=k(R,[["__scopeId","data-v-d485ea93"]]);export{I as default};