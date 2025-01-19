import{T as e,H as t,m as o,j as l,k as i,o as s,c as a,w as n,a as u,d,r as m,F as r,i as c}from"./index-Cfs_Z2UQ.js";import{d as f}from"./data.Dw3aG-Oj.js";function v({swiper:o,extendParams:l,emit:i,once:s}){l({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(o,{freeMode:{onTouchStart:function(){if(o.params.cssMode)return;const e=o.getTranslate();o.setTranslate(e),o.setTransition(0),o.touchEventsData.velocities.length=0,o.freeMode.onTouchEnd({currentPos:o.rtl?o.translate:-o.translate})},onTouchMove:function(){if(o.params.cssMode)return;const{touchEventsData:t,touches:l}=o;0===t.velocities.length&&t.velocities.push({position:l[o.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:l[o.isHorizontal()?"currentX":"currentY"],time:e()})},onTouchEnd:function({currentPos:l}){var a,n,u,d,m,r,c,f,v,p,M,T,y;if(o.params.cssMode)return;const{params:h,wrapperEl:_,rtlTranslate:g,snapGrid:x,touchEventsData:k}=o,w=e()-k.touchStartTime;if(l<-o.minTranslate())o.slideTo(o.activeIndex);else if(l>-o.maxTranslate())o.slides.length<x.length?o.slideTo(x.length-1):o.slideTo(o.slides.length-1);else{if(null==(a=h.freeMode)?void 0:a.momentum){if(k.velocities.length>1){const t=k.velocities.pop(),l=k.velocities.pop();if(!t||!l)return;const i=t.position-l.position,s=t.time-l.time;o.velocity=i/s,o.velocity/=2,Math.abs(o.velocity)<(null==(n=h.freeMode)?void 0:n.minimumVelocity)&&(o.velocity=0),(s>150||e()-t.time>300)&&(o.velocity=0)}else o.velocity=0;o.velocity*=null==(u=h.freeMode)?void 0:u.momentumVelocityRatio,k.velocities.length=0;let l=1e3*(null==(d=h.freeMode)?void 0:d.momentumRatio);const a=o.velocity*l;let T=o.translate+a;g&&(T=-T);let y,w=!1;const R=20*Math.abs(o.velocity)*(null==(m=h.freeMode)?void 0:m.momentumBounceRatio);let S;if(T<o.maxTranslate())(null==(r=h.freeMode)?void 0:r.momentumBounce)?(T+o.maxTranslate()<-R&&(T=o.maxTranslate()-R),y=o.maxTranslate(),w=!0,k.allowMomentumBounce=!0):T=o.maxTranslate(),h.loop&&h.centeredSlides&&(S=!0);else if(T>o.minTranslate())(null==(c=h.freeMode)?void 0:c.momentumBounce)?(T-o.minTranslate()>R&&(T=o.minTranslate()+R),y=o.minTranslate(),w=!0,k.allowMomentumBounce=!0):T=o.minTranslate(),h.loop&&h.centeredSlides&&(S=!0);else if(null==(f=h.freeMode)?void 0:f.sticky){let e;for(let t=0;t<x.length;t+=1)if(x[t]>-T){e=t;break}T=Math.abs(x[e]-T)<Math.abs(x[e-1]-T)||"next"===o.swipeDirection?x[e]:x[e-1],T=-T}if(S&&s("transitionEnd",(()=>{o.loopFix()})),0!==o.velocity){if(l=g?Math.abs((-T-o.translate)/o.velocity):Math.abs((T-o.translate)/o.velocity),null==(v=h.freeMode)?void 0:v.sticky){const e=Math.abs((g?-T:T)-o.translate),t=o.slidesSizesGrid[o.activeIndex];l=e<t?h.speed:e<2*t?1.5*h.speed:2.5*h.speed}}else if(null==(p=h.freeMode)?void 0:p.sticky)return void o.slideToClosest();(null==(M=h.freeMode)?void 0:M.momentumBounce)&&w?(o.updateProgress(y),o.setTransition(l),o.setTranslate(T),o.transitionStart(!0,o.swipeDirection),o.animating=!0,t(_,(()=>{o&&!o.destroyed&&k.allowMomentumBounce&&(i("momentumBounce"),o.setTransition(h.speed),setTimeout((()=>{o.setTranslate(y),t(_,(()=>{o&&!o.destroyed&&o.transitionEnd()}))}),0))}))):o.velocity?(i("_freeModeNoMomentumRelease"),o.updateProgress(T),o.setTransition(l),o.setTranslate(T),o.transitionStart(!0,o.swipeDirection),o.animating||(o.animating=!0,t(_,(()=>{o&&!o.destroyed&&o.transitionEnd()})))):o.updateProgress(T),o.updateActiveIndex(),o.updateSlidesClasses()}else{if(null==(T=h.freeMode)?void 0:T.sticky)return void o.slideToClosest();h.freeMode&&i("_freeModeNoMomentumRelease")}(!(null==(y=h.freeMode)?void 0:y.momentum)||w>=h.longSwipesMs)&&(i("_freeModeStaticRelease"),o.updateProgress(),o.updateActiveIndex(),o.updateSlidesClasses())}}}})}const p=o({__name:"index",setup(e){const t=l([...f]),o=l([v]);return(e,l)=>{const f=i("demo-item"),v=i("z-swiper-item"),p=i("z-swiper"),M=i("demo-block"),T=c;return s(),a(T,{class:"demo-swiper"},{default:n((()=>[u(M,{title:"基础用法"},{default:n((()=>[u(p,{freeMode:"",modules:o.value},{default:n((()=>[(s(!0),d(r,null,m(t.value,(e=>(s(),a(v,{key:e.id},{default:n((()=>[u(f,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modules"])])),_:1}),u(M,{title:"关闭惯性"},{default:n((()=>[u(p,{freeMode:{momentum:!1},modules:o.value},{default:n((()=>[(s(!0),d(r,null,m(t.value,(e=>(s(),a(v,{key:e.id},{default:n((()=>[u(f,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modules"])])),_:1}),u(M,{title:"反弹强度"},{default:n((()=>[u(p,{freeMode:{momentumBounceRatio:5},modules:o.value},{default:n((()=>[(s(!0),d(r,null,m(t.value,(e=>(s(),a(v,{key:e.id},{default:n((()=>[u(f,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modules"])])),_:1}),u(M,{title:"释放后滑动距离"},{default:n((()=>[u(p,{freeMode:{momentumRatio:5},modules:o.value},{default:n((()=>[(s(!0),d(r,null,m(t.value,(e=>(s(),a(v,{key:e.id},{default:n((()=>[u(f,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modules"])])),_:1}),u(M,{title:"释放后滑动速度"},{default:n((()=>[u(p,{freeMode:{momentumVelocityRatio:5},modules:o.value},{default:n((()=>[(s(!0),d(r,null,m(t.value,(e=>(s(),a(v,{key:e.id},{default:n((()=>[u(f,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modules"])])),_:1}),u(M,{title:"贴合边缘"},{default:n((()=>[u(p,{freeMode:{sticky:!0},modules:o.value},{default:n((()=>[(s(!0),d(r,null,m(t.value,(e=>(s(),a(v,{key:e.id},{default:n((()=>[u(f,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modules"])])),_:1})])),_:1})}}});export{p as default};
