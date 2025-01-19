import{d as v}from"./chunks/theme.D5Hi98B-.js";import{a as k,b as p,a8 as C,H as t,w as e,l as s,f as a,C as l,o as n,F as y,D as u,g as m}from"./chunks/framework.BboaNvjl.js";const B={id:"crossfade",tabindex:"-1"},w=JSON.parse('{"title":"淡入淡出","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"modules/fade.md","filePath":"modules/fade.md"}'),D={name:"modules/fade.md"},q=Object.assign(D,{setup(A){const d=k(Array.from({length:5}).map((F,i)=>({text:`Slide ${i+1}`,id:i+1}))),r=k([v]);return k({}),(F,i)=>{const E=l("DemoItem"),o=l("z-swiper-item"),g=l("z-swiper"),c=l("DemoBlock"),f=l("Badge"),b=l("ComponentInfo");return n(),p("div",null,[i[5]||(i[5]=C(`<h1 id="淡入淡出" tabindex="-1">淡入淡出 <a class="header-anchor" href="#淡入淡出" aria-label="Permalink to &quot;淡入淡出&quot;">​</a></h1><p>幻灯片之间以淡入淡出的方式过渡。与传统的滑动效果不同，fade 提供了一种更柔和的视觉体验。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>v3版本不再默认引入所有<code>modules</code>，这意味着在使用modules中的模块时，都需要手动引入。</p><p>同时部分<code>modules</code>的<code>css</code>也需手动引入。需要注意的是，将<code>style</code>设置为<code>scoped</code>会导致样式失效。推荐全局引入所需要的模块样式。参考：<a href="/guide/faq.html#modules-not-working">引入样式</a></p><p>具体可查看<a href="/guide/migrate.html#migrate-modules-import">模块化按需引入</a></p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NIXDI" id="tab-Wg7Jifu" checked><label data-title="npm" for="tab-Wg7Jifu">npm</label><input type="radio" name="group-NIXDI" id="tab-KXA_Yr1"><label data-title="uni_modules" for="tab-KXA_Yr1">uni_modules</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { EffectFade } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@zebra-ui/swiper/modules&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> modules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([EffectFade])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { EffectFade } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/uni_modules/zebra-swiper/modules&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> modules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([EffectFade])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-oWLvK" id="tab-BRj41gJ" checked><label data-title="npm" for="tab-BRj41gJ">npm</label><input type="radio" name="group-oWLvK" id="tab-OJQ6J6m"><label data-title="uni_modules" for="tab-OJQ6J6m">uni_modules</label></div><div class="blocks"><div class="language-css vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lang=&quot;scss&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;@zebra-ui/swiper/modules/effect-fade/effect-fade.scss&quot;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lang=&quot;scss&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;@/uni_modules/zebra-swiper/modules/effect-fade/effect-fade.scss&quot;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`,7)),t(c,{expanded:""},{code:e(()=>i[0]||(i[0]=[s("div",{class:"language-html vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki shiki-themes github-light github-dark has-diff vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," grabCursor"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," effect"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"fade"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :modules"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"modules"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-for"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item in list"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :key"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.id"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),s("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :text"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.text"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:e(()=>[t(g,{grabCursor:"",effect:"fade",modules:r.value},{default:e(()=>[(n(!0),p(y,null,u(d.value,h=>(n(),m(o,{key:h.id},{default:e(()=>[t(E,{text:h.text},null,8,["text"])]),_:2},1024))),128))]),_:1},8,["modules"])]),_:1}),i[6]||(i[6]=s("h2",{id:"配置",tabindex:"-1"},[a("配置 "),s("a",{class:"header-anchor",href:"#配置","aria-label":'Permalink to "配置"'},"​")],-1)),s("h3",B,[i[1]||(i[1]=a("crossFade ")),t(f,{type:"tip",text:"推荐开启"}),i[2]||(i[2]=a()),i[3]||(i[3]=s("a",{class:"header-anchor",href:"#crossfade","aria-label":'Permalink to "crossFade <Badge type="tip" text="推荐开启" />"'},"​",-1))]),i[7]||(i[7]=s("ul",null,[s("li",null,[s("p",null,"交叉淡入淡出：当 crossFade 设置为 true 时，当前幻灯片淡出和下一张幻灯片淡入的过程是同时进行的。这会使过渡更平滑和自然。")]),s("li",null,[s("p",null,"非交叉淡入淡出：当 crossFade 设置为 false 时，当前幻灯片会完全淡出后，下一张幻灯片才开始淡入。")])],-1)),t(b,{type:"boolean",value:"false"}),t(c,{expanded:""},{code:e(()=>i[4]||(i[4]=[s("div",{class:"language-html vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  grabCursor")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  effect"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"fade"')]),a(`
`),s("span",{class:"line highlighted"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  :fadeEffect"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"{crossFade:true}"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  :modules"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"modules"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-for"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item in list"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :key"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.id"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),s("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :text"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"item.text"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"DemoItem"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper-item"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"z-swiper"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:e(()=>[t(g,{grabCursor:"",effect:"fade",fadeEffect:{crossFade:!0},modules:r.value},{default:e(()=>[(n(!0),p(y,null,u(d.value,h=>(n(),m(o,{key:h.id},{default:e(()=>[t(E,{text:h.text},null,8,["text"])]),_:2},1024))),128))]),_:1},8,["modules"])]),_:1})])}}});export{w as __pageData,q as default};
