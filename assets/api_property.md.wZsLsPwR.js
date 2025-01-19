import{a as B,b as k,l as i,f as t,H as a,w as l,C as F,o as r,t as w,F as g,D as u,g as y}from"./chunks/framework.BboaNvjl.js";const C={id:"activeindex",tabindex:"-1"},D={style:{padding:"20px"}},I={id:"realindex",tabindex:"-1"},S={style:{padding:"20px"}},A={id:"animating",tabindex:"-1"},P={id:"clickedindex",tabindex:"-1"},z={id:"isbeginning",tabindex:"-1"},N={id:"isend",tabindex:"-1"},T={id:"progress",tabindex:"-1"},M={id:"translate",tabindex:"-1"},R={id:"width",tabindex:"-1"},O={id:"height",tabindex:"-1"},V={id:"by-onswiper",tabindex:"-1"},j={style:{padding:"20px"}},L=JSON.parse('{"title":"Swiper 实例属性","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api/property.md","filePath":"api/property.md"}'),G={name:"api/property.md"},W=Object.assign(G,{setup(H){const d=B(Array.from({length:5}).map((b,s)=>({text:`Slide ${s+1}`,id:s+1}))),n=B({}),m=B(null),x=(b,s)=>{n.value[s]=b};return(b,s)=>{const v=F("Badge"),h=F("DemoItem"),p=F("z-swiper-item"),E=F("z-swiper"),o=F("DemoBlock"),f=F("DemoOprate");return r(),k("div",null,[s[62]||(s[62]=i("h1",{id:"swiper-实例属性",tabindex:"-1"},[t("Swiper 实例属性 "),i("a",{class:"header-anchor",href:"#swiper-实例属性","aria-label":'Permalink to "Swiper 实例属性"'},"​")],-1)),i("h2",C,[s[20]||(s[20]=t("activeIndex ")),a(v,{type:"warning",text:"只读"}),s[21]||(s[21]=t()),s[22]||(s[22]=i("a",{class:"header-anchor",href:"#activeindex","aria-label":'Permalink to "activeIndex <Badge type="warning" text="只读" />"'},"​",-1))]),s[63]||(s[63]=i("p",null,"swiper中当前活动的下标。",-1)),a(o,{expanded:""},{code:l(()=>s[23]||(s[23]=[i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," grabCursor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-for"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item in list"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :key"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.id"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :text"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.text"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[i("div",D,w(n.value.activeIndex&&n.value.activeIndex.activeIndex)+" 滑动轮播观察下标变化 ",1),a(E,{grabCursor:"",onSwiper:s[0]||(s[0]=e=>x(e,"activeIndex"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",I,[s[24]||(s[24]=t("realIndex ")),a(v,{type:"warning",text:"只读"}),s[25]||(s[25]=t()),s[26]||(s[26]=i("a",{class:"header-anchor",href:"#realindex","aria-label":'Permalink to "realIndex <Badge type="warning" text="只读" />"'},"​",-1))]),s[64]||(s[64]=i("p",null,[t("swiper当前活动item的真实下标。在"),i("code",null,"loop"),t("与"),i("code",null,"virtual"),t("中使用。")],-1)),a(o,{expanded:""},{default:l(()=>[i("div",S," ActiveIndex:"+w(n.value.realIndex&&n.value.realIndex.activeIndex)+" RealIndex:"+w(n.value.realIndex&&n.value.realIndex.realIndex)+" 滑动轮播观察下标变化及区别 ",1),a(E,{grabCursor:"",loop:"",onSwiper:s[1]||(s[1]=e=>x(e,"realIndex"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),s[65]||(s[65]=i("h2",{id:"allowslidenext",tabindex:"-1"},[t("allowSlideNext "),i("a",{class:"header-anchor",href:"#allowslidenext","aria-label":'Permalink to "allowSlideNext"'},"​")],-1)),s[66]||(s[66]=i("p",null,"是否允许切换swiper到下一个item",-1)),a(o,{expanded:""},{operate:l(()=>[a(f,{onClick:s[2]||(s[2]=()=>n.value.allowSlideNext.allowSlideNext=!1)},{default:l(()=>s[27]||(s[27]=[t("设置allowSlideNext为false")])),_:1}),a(f,{type:"primary",onClick:s[3]||(s[3]=()=>n.value.allowSlideNext.allowSlideNext=!0)},{default:l(()=>s[28]||(s[28]=[t("设置allowSlideNext为true")])),_:1})]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[4]||(s[4]=e=>x(e,"allowSlideNext"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),s[67]||(s[67]=i("h2",{id:"allowslideprev",tabindex:"-1"},[t("allowSlidePrev "),i("a",{class:"header-anchor",href:"#allowslideprev","aria-label":'Permalink to "allowSlidePrev"'},"​")],-1)),s[68]||(s[68]=i("p",null,"是否允许切换swiper到上一个item",-1)),a(o,{expanded:""},{operate:l(()=>[a(f,{onClick:s[5]||(s[5]=()=>n.value.allowSlidePrev.allowSlidePrev=!1)},{default:l(()=>s[29]||(s[29]=[t("设置allowSlidePrev为false")])),_:1}),a(f,{type:"primary",onClick:s[6]||(s[6]=()=>n.value.allowSlidePrev.allowSlidePrev=!0)},{default:l(()=>s[30]||(s[30]=[t("设置allowSlidePrev为true")])),_:1})]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[7]||(s[7]=e=>x(e,"allowSlidePrev"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),s[69]||(s[69]=i("h2",{id:"allowtouchmove",tabindex:"-1"},[t("allowTouchMove "),i("a",{class:"header-anchor",href:"#allowtouchmove","aria-label":'Permalink to "allowTouchMove"'},"​")],-1)),s[70]||(s[70]=i("p",null,"是否允许通过触摸切换swiper",-1)),a(o,{expanded:""},{operate:l(()=>[a(f,{onClick:s[8]||(s[8]=()=>n.value.allowTouchMove.allowTouchMove=!1)},{default:l(()=>s[31]||(s[31]=[t("设置allowTouchMove为false")])),_:1}),a(f,{type:"primary",onClick:s[9]||(s[9]=()=>n.value.allowTouchMove.allowTouchMove=!0)},{default:l(()=>s[32]||(s[32]=[t("设置allowTouchMove为true")])),_:1})]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[10]||(s[10]=e=>x(e,"allowTouchMove"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",A,[s[33]||(s[33]=t("animating ")),a(v,{type:"warning",text:"只读"}),s[34]||(s[34]=t()),s[35]||(s[35]=i("a",{class:"header-anchor",href:"#animating","aria-label":'Permalink to "animating <Badge type="warning" text="只读" />"'},"​",-1))]),s[71]||(s[71]=i("p",null,"动画状态",-1)),a(o,{expanded:""},{operate:l(()=>[t(w(n.value.animating&&n.value.animating.animating),1)]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[11]||(s[11]=e=>x(e,"animating"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",P,[s[36]||(s[36]=t("clickedIndex ")),a(v,{type:"warning",text:"只读"}),s[37]||(s[37]=t()),s[38]||(s[38]=i("a",{class:"header-anchor",href:"#clickedindex","aria-label":'Permalink to "clickedIndex <Badge type="warning" text="只读" />"'},"​",-1))]),s[72]||(s[72]=i("p",null,"swiper最后一次点击的下标",-1)),a(o,{expanded:""},{operate:l(()=>[t(w(n.value.clickedIndex&&n.value.clickedIndex.clickedIndex),1)]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[12]||(s[12]=e=>x(e,"clickedIndex"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",z,[s[39]||(s[39]=t("isBeginning ")),a(v,{type:"warning",text:"只读"}),s[40]||(s[40]=t()),s[41]||(s[41]=i("a",{class:"header-anchor",href:"#isbeginning","aria-label":'Permalink to "isBeginning <Badge type="warning" text="只读" />"'},"​",-1))]),s[73]||(s[73]=i("p",null,"swiper是否位于最开始的位置",-1)),a(o,{expanded:""},{operate:l(()=>[t(w(n.value.isBeginning&&n.value.isBeginning.isBeginning),1)]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[13]||(s[13]=e=>x(e,"isBeginning"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",N,[s[42]||(s[42]=t("isEnd ")),a(v,{type:"warning",text:"只读"}),s[43]||(s[43]=t()),s[44]||(s[44]=i("a",{class:"header-anchor",href:"#isend","aria-label":'Permalink to "isEnd <Badge type="warning" text="只读" />"'},"​",-1))]),s[74]||(s[74]=i("p",null,"swiper是否位于末尾",-1)),a(o,{expanded:""},{operate:l(()=>[t(w(n.value.isEnd&&n.value.isEnd.isEnd),1)]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[14]||(s[14]=e=>x(e,"isEnd"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",T,[s[45]||(s[45]=t("progress ")),a(v,{type:"warning",text:"只读"}),s[46]||(s[46]=t()),s[47]||(s[47]=i("a",{class:"header-anchor",href:"#progress","aria-label":'Permalink to "progress <Badge type="warning" text="只读" />"'},"​",-1))]),s[75]||(s[75]=i("p",null,"swiper的进度 0-1",-1)),a(o,{expanded:""},{operate:l(()=>[t(w(n.value.progress&&n.value.progress.progress),1)]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[15]||(s[15]=e=>x(e,"progress"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",M,[s[48]||(s[48]=t("translate ")),a(v,{type:"warning",text:"只读"}),s[49]||(s[49]=t()),s[50]||(s[50]=i("a",{class:"header-anchor",href:"#translate","aria-label":'Permalink to "translate <Badge type="warning" text="只读" />"'},"​",-1))]),s[76]||(s[76]=i("p",null,"当前的translate值",-1)),a(o,{expanded:""},{operate:l(()=>[t(w(n.value.translate&&n.value.translate.translate),1)]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[16]||(s[16]=e=>x(e,"translate"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",R,[s[51]||(s[51]=t("width ")),a(v,{type:"warning",text:"只读"}),s[52]||(s[52]=t()),s[53]||(s[53]=i("a",{class:"header-anchor",href:"#width","aria-label":'Permalink to "width <Badge type="warning" text="只读" />"'},"​",-1))]),s[77]||(s[77]=i("p",null,"swiper的宽度",-1)),a(o,{expanded:""},{operate:l(()=>[t(w(n.value.width&&n.value.width.width),1)]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[17]||(s[17]=e=>x(e,"width"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),i("h2",O,[s[54]||(s[54]=t("height ")),a(v,{type:"warning",text:"只读"}),s[55]||(s[55]=t()),s[56]||(s[56]=i("a",{class:"header-anchor",href:"#height","aria-label":'Permalink to "height <Badge type="warning" text="只读" />"'},"​",-1))]),s[78]||(s[78]=i("p",null,"swiper的高度",-1)),a(o,{expanded:""},{operate:l(()=>[t(w(n.value.height&&n.value.height.height),1)]),default:l(()=>[a(E,{grabCursor:"",onSwiper:s[18]||(s[18]=e=>x(e,"height"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),s[79]||(s[79]=i("h2",{id:"get-swiper-instance",tabindex:"-1"},[t("在页面中获取swiper实例 "),i("a",{class:"header-anchor",href:"#get-swiper-instance","aria-label":'Permalink to "在页面中获取swiper实例 {#get-swiper-instance}"'},"​")],-1)),i("h3",V,[s[57]||(s[57]=t("通过swiper挂载完成后的回调 ")),a(v,{type:"tip",text:"推荐"}),s[58]||(s[58]=t()),s[59]||(s[59]=i("a",{class:"header-anchor",href:"#by-onswiper","aria-label":'Permalink to "通过swiper挂载完成后的回调 <Badge type="tip" text="推荐" /> {#by-onswiper}"'},"​",-1))]),s[80]||(s[80]=i("p",null,"文档中所有获取实例都使用此方法。",-1)),a(o,{expanded:""},{code:l(()=>s[60]||(s[60]=[i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," grabCursor"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," @swiper"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"onSwiper"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-for"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item in list"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :key"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.id"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :text"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.text"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   ref")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),t(`
`),i("span",{class:"line"}),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," onSwiper"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"swiper"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"swiper实例:"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",swiper)")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[i("div",j,w(n.value.activeIndexInstance&&n.value.activeIndexInstance.activeIndex)+" 滑动轮播观察下标变化 ",1),a(E,{grabCursor:"",onSwiper:s[19]||(s[19]=e=>x(e,"activeIndexInstance"))},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1})]),_:1}),s[81]||(s[81]=i("h3",{id:"by-ref",tabindex:"-1"},[t("通过ref "),i("a",{class:"header-anchor",href:"#by-ref","aria-label":'Permalink to "通过ref {#by-ref}"'},"​")],-1)),s[82]||(s[82]=i("p",null,[t("通过访问"),i("code",null,"z-swiper"),t("组件中的"),i("code",null,"swiper"),t("属性。")],-1)),s[83]||(s[83]=i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},"WARNING"),i("p",null,"swiper挂载完成后才可访问swiper实例。")],-1)),a(o,{expanded:""},{operate:l(()=>[t(w(m.value&&m.value.swiper.activeIndex),1)]),code:l(()=>s[61]||(s[61]=[i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"swiperByRef"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," grabCursor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-for"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item in list"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :key"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.id"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :text"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.text"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   ref")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," swiperByRef"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") ")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[a(E,{ref_key:"swiperByRef",ref:m,grabCursor:""},{default:l(()=>[(r(!0),k(g,null,u(d.value,e=>(r(),y(p,{key:e.id},{default:l(()=>[a(h,{text:e.text},null,8,["text"])]),_:2},1024))),128))]),_:1},512)]),_:1})])}}});export{L as __pageData,W as default};