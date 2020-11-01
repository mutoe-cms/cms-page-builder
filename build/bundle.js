var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function m(){return f("")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e,n){e in t?t[e]=n:h(t,e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let v;function y(t){v=t}function x(){if(!v)throw new Error("Function called outside component initialization");return v}function w(){const t=x();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,i)}))}}}const k=[],T=[],_=[],L=[],j=Promise.resolve();let E=!1;function M(t){_.push(t)}let S=!1;const A=new Set;function C(){if(!S){S=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];y(e),H(e.$$)}for(y(null),k.length=0;T.length;)T.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];A.has(e)||(A.add(e),e())}_.length=0}while(k.length);for(;L.length;)L.pop()();E=!1,S=!1,A.clear()}}function H(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const N=new Set;let O;function q(){O={r:0,c:[],p:O}}function I(){O.r||i(O.c),O=O.p}function z(t,e){t&&t.i&&(N.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),O.c.push((()=>{N.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function G(t,e){D(t,1,1,(()=>{e.delete(t.key)}))}function J(t,e){const n={},o={},i={$$scope:1};let s=t.length;for(;s--;){const c=t[s],r=e[s];if(r){for(const t in c)t in r||(o[t]=1);for(const t in r)i[t]||(n[t]=r[t],i[t]=1);t[s]=r}else for(const t in c)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function P(t){return"object"==typeof t&&null!==t?t:{}}function B(t){t&&t.c()}function F(t,e,o){const{fragment:c,on_mount:r,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,o),M((()=>{const e=r.map(n).filter(s);l?l.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(M)}function Y(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(k.push(t),E||(E=!0,j.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,n,s,c,r,l,u=[-1]){const d=v;y(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let m=!1;if(p.ctx=s?s(e,f,((t,n,...o)=>{const i=o.length?o[0]:n;return p.ctx&&r(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),m&&Z(e,t)),n})):[],p.update(),m=!0,i(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();n.intro&&z(e.$$.fragment),F(e,n.target,n.anchor),C()}y(d)}class Q{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const R={id:"",sections:[{id:"section1",type:"full-width",module:{type:"full-width-header",title:"Lorem ipsum",subTitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aut debitis dicta exercitationem expedita laudantium magni modi molestiae necessitatibus nisi nobis non, praesentium reiciendis, repellat suscipit ut velit voluptas.",button1:{text:"Goto"},button2:{text:"Link",link:"https://google.com"},style:{backgroundColor:"#7ebec5"}}},{id:"section2",type:"full-width",module:{type:"full-width-header",title:"Lorem ipsum",subTitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aut debitis dicta exercitationem expedita laudantium magni modi molestiae necessitatibus nisi nobis non, praesentium reiciendis, repellat suscipit ut velit voluptas.",button1:{text:"Goto"},button2:{text:"Link",link:"https://google.com"},style:{backgroundColor:"#c4a000"}}},{id:"section3",type:"full-width",module:{type:"full-width-header",title:"Lorem ipsum",subTitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aut debitis dicta exercitationem expedita laudantium magni modi molestiae necessitatibus nisi nobis non, praesentium reiciendis, repellat suscipit ut velit voluptas.",button1:{text:"Goto"},button2:{text:"Link",link:"https://google.com"},style:{backgroundColor:"#6c2eb9"}}}]},U=[];function V(e,n=t){let o;const i=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!U.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),U.push(n,e)}if(t){for(let t=0;t<U.length;t+=2)U[t][0](U[t+1]);U.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,r=t){const l=[c,r];return i.push(l),1===i.length&&(o=n(s)||t),c(e),()=>{const t=i.indexOf(l);-1!==t&&i.splice(t,1),0===i.length&&(o(),o=null)}}}}const W=V(null),X=V(null),tt=V({section:null,isTop:!0}),et=V(null);function nt(t={}){return Object.entries(t).map((([t,e])=>`${t=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()))}: ${e}`)).join("; ")}function ot(t,e){let n=null,o=!0;return function(){if(o)return t.apply(this,arguments),void(o=!1);n||(n=setTimeout((()=>{clearTimeout(n),n=null,t.apply(this,arguments)}),e))}}function it(e){let n,o,s,c,r,f,m,$,b,v,y,x,w,k,T,_,L,j,E;return{c(){n=d("div"),o=d("div"),s=p(),c=d("div"),r=d("button"),r.innerHTML='<ion-icon name="move-sharp"></ion-icon>',f=p(),m=d("button"),m.innerHTML='<ion-icon name="settings-sharp"></ion-icon>',$=p(),b=d("button"),b.innerHTML='<ion-icon name="duplicate-sharp"></ion-icon>',v=p(),y=d("button"),y.innerHTML='<ion-icon name="trash-sharp"></ion-icon>',x=p(),w=d("button"),w.innerHTML='<ion-icon name="add-sharp"></ion-icon>',T=p(),_=d("div"),h(o,"class","border svelte-1gs7caj"),h(r,"class","move svelte-1gs7caj"),h(r,"draggable","true"),h(m,"class","settings svelte-1gs7caj"),h(b,"class","duplicate svelte-1gs7caj"),h(y,"class","delete svelte-1gs7caj"),h(c,"class","section-menu svelte-1gs7caj"),h(w,"class","add-section svelte-1gs7caj"),h(n,"class","section-operator svelte-1gs7caj"),h(n,"style",k=nt(e[0])),h(_,"class","drag-over-placeholder svelte-1gs7caj"),h(_,"style",L=nt({...e[1],height:st+"px"}))},m(t,i){u(t,n,i),l(n,o),l(n,s),l(n,c),l(c,r),l(c,f),l(c,m),l(c,$),l(c,b),l(c,v),l(c,y),l(n,x),l(n,w),u(t,T,i),u(t,_,i),j||(E=[g(r,"dragend",e[5]),g(r,"dragstart",e[4]),g(b,"click",e[2]),g(y,"click",e[3])],j=!0)},p(t,[e]){1&e&&k!==(k=nt(t[0]))&&h(n,"style",k),2&e&&L!==(L=nt({...t[1],height:st+"px"}))&&h(_,"style",L)},i:t,o:t,d(t){t&&a(n),t&&a(T),t&&a(_),j=!1,i(E)}}}const st=48;function ct(t,e,n){let o,i;r(t,X,(t=>n(6,o=t))),r(t,W,(t=>n(7,i=t)));var s=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,s){function c(t){try{l(o.next(t))}catch(t){s(t)}}function r(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,r)}l((o=o.apply(t,e||[])).next())}))};let c={top:"0",height:"0",opacity:"0"},l={top:"0",opacity:"0"};W.subscribe((t=>{if(!t||o)return n(0,c={});n(1,l={});const e=document.querySelector("#section-"+t.id);n(0,c={top:e.offsetTop+"px",height:e.offsetHeight+"px",opacity:e?"1":"0"})})),tt.subscribe((({section:t,isTop:e})=>{if(!t||!o)return n(1,l={});const i=document.querySelector("#section-"+t.id);let s=i.offsetTop;e||(s+=i.offsetHeight-st),n(1,l={top:s+"px",opacity:"1"})}));const u=w();return[c,l,function(){et.update((t=>{const e=t.sections.findIndex((t=>t.id===(null==i?void 0:i.id)));if(-1===e)return t;let n=(o=t.sections[e],JSON.parse(JSON.stringify(o)));var o;return n.id=Math.abs(Math.sin((new Date).getTime())).toString(36).slice(2),t.sections.splice(e,0,n),t}))},function(){et.update((t=>{const e=t.sections.findIndex((t=>t.id===(null==i?void 0:i.id)));return-1===e||(t.sections.splice(e,1),n(0,c={})),t}))},function(t){return s(this,void 0,void 0,(function*(){let e=document.querySelector("#section-"+(null==i?void 0:i.id));t.dataTransfer.setDragImage(e,0,0),setTimeout((()=>{u("dragstart",i)}))}))},function(){u("dragend")}]}class rt extends Q{constructor(t){super(),K(this,t,ct,it,c,{})}}function lt(t){let e,n,o,i;return{c(){e=d("button"),n=f(t[0]),o=p(),i=d("ion-icon"),$(i,"name","chevron-forward-outline"),$(i,"class","svelte-gx52e0"),h(e,"class","button svelte-gx52e0")},m(t,s){u(t,e,s),l(e,n),l(e,o),l(e,i)},p(t,e){1&e&&b(n,t[0])},d(t){t&&a(e)}}}function ut(t){let e,n,o,i;return{c(){e=d("a"),n=f(t[0]),o=p(),i=d("ion-icon"),$(i,"name","chevron-forward-outline"),$(i,"class","svelte-gx52e0"),h(e,"class","button svelte-gx52e0"),h(e,"href",t[1])},m(t,s){u(t,e,s),l(e,n),l(e,o),l(e,i)},p(t,o){1&o&&b(n,t[0]),2&o&&h(e,"href",t[1])},d(t){t&&a(e)}}}function at(e){let n;function o(t,e){return t[1]?ut:lt}let i=o(e),s=i(e);return{c(){s.c(),n=m()},m(t,e){s.m(t,e),u(t,n,e)},p(t,[e]){i===(i=o(t))&&s?s.p(t,e):(s.d(1),s=i(t),s&&(s.c(),s.m(n.parentNode,n)))},i:t,o:t,d(t){s.d(t),t&&a(n)}}}function dt(t,e,n){let{text:o}=e,{link:i}=e;return t.$$set=t=>{"text"in t&&n(0,o=t.text),"link"in t&&n(1,i=t.link)},[o,i]}class ft extends Q{constructor(t){super(),K(this,t,dt,at,c,{text:0,link:1})}}function pt(t){let e,n,o=t[0].title+"";return{c(){e=d("h2"),n=f(o),h(e,"class","svelte-1mkvvzv")},m(t,o){u(t,e,o),l(e,n)},p(t,e){1&e&&o!==(o=t[0].title+"")&&b(n,o)},d(t){t&&a(e)}}}function mt(t){let e,n,o=t[0].subTitle+"";return{c(){e=d("h3"),n=f(o)},m(t,o){u(t,e,o),l(e,n)},p(t,e){1&e&&o!==(o=t[0].subTitle+"")&&b(n,o)},d(t){t&&a(e)}}}function gt(t){let e,n,o=t[0].body+"";return{c(){e=d("div"),n=f(o),h(e,"class","body svelte-1mkvvzv")},m(t,o){u(t,e,o),l(e,n)},p(t,e){1&e&&o!==(o=t[0].body+"")&&b(n,o)},d(t){t&&a(e)}}}function ht(t){let n,o;const i=[t[0].button1];let s={};for(let t=0;t<i.length;t+=1)s=e(s,i[t]);return n=new ft({props:s}),{c(){B(n.$$.fragment)},m(t,e){F(n,t,e),o=!0},p(t,e){const o=1&e?J(i,[P(t[0].button1)]):{};n.$set(o)},i(t){o||(z(n.$$.fragment,t),o=!0)},o(t){D(n.$$.fragment,t),o=!1},d(t){Y(n,t)}}}function $t(t){let n,o;const i=[t[0].button2];let s={};for(let t=0;t<i.length;t+=1)s=e(s,i[t]);return n=new ft({props:s}),{c(){B(n.$$.fragment)},m(t,e){F(n,t,e),o=!0},p(t,e){const o=1&e?J(i,[P(t[0].button2)]):{};n.$set(o)},i(t){o||(z(n.$$.fragment,t),o=!0)},o(t){D(n.$$.fragment,t),o=!1},d(t){Y(n,t)}}}function bt(t){let e,n,o,i,s,c,r,f,m=t[0].title&&pt(t),g=t[0].subTitle&&mt(t),$=t[0].body&&gt(t),b=t[0].button1&&ht(t),v=t[0].button2&&$t(t);return{c(){e=d("div"),n=d("div"),m&&m.c(),o=p(),g&&g.c(),i=p(),$&&$.c(),s=p(),b&&b.c(),c=p(),v&&v.c(),h(n,"class","full-width-container"),h(e,"class","full-width-header svelte-1mkvvzv"),h(e,"style",r=nt(t[0].style))},m(t,r){u(t,e,r),l(e,n),m&&m.m(n,null),l(n,o),g&&g.m(n,null),l(n,i),$&&$.m(n,null),l(n,s),b&&b.m(n,null),l(n,c),v&&v.m(n,null),f=!0},p(t,[l]){t[0].title?m?m.p(t,l):(m=pt(t),m.c(),m.m(n,o)):m&&(m.d(1),m=null),t[0].subTitle?g?g.p(t,l):(g=mt(t),g.c(),g.m(n,i)):g&&(g.d(1),g=null),t[0].body?$?$.p(t,l):($=gt(t),$.c(),$.m(n,s)):$&&($.d(1),$=null),t[0].button1?b?(b.p(t,l),1&l&&z(b,1)):(b=ht(t),b.c(),z(b,1),b.m(n,c)):b&&(q(),D(b,1,1,(()=>{b=null})),I()),t[0].button2?v?(v.p(t,l),1&l&&z(v,1)):(v=$t(t),v.c(),z(v,1),v.m(n,null)):v&&(q(),D(v,1,1,(()=>{v=null})),I()),(!f||1&l&&r!==(r=nt(t[0].style)))&&h(e,"style",r)},i(t){f||(z(b),z(v),f=!0)},o(t){D(b),D(v),f=!1},d(t){t&&a(e),m&&m.d(),g&&g.d(),$&&$.d(),b&&b.d(),v&&v.d()}}}function vt(t,e,n){let{module:o}=e;return t.$$set=t=>{"module"in t&&n(0,o=t.module)},[o]}class yt extends Q{constructor(t){super(),K(this,t,vt,bt,c,{module:0})}}function xt(e){let n,o,i,s,c,r="full-width-header"===e[1].type&&function(e){let n,o;return n=new yt({props:{module:e[1]}}),{c(){B(n.$$.fragment)},m(t,e){F(n,t,e),o=!0},p:t,i(t){o||(z(n.$$.fragment,t),o=!0)},o(t){D(n.$$.fragment,t),o=!1},d(t){Y(n,t)}}}(e);return{c(){n=d("section"),r&&r.c(),h(n,"id",o="section-"+e[0].id)},m(t,o){u(t,n,o),r&&r.m(n,null),i=!0,s||(c=g(n,"mouseenter",e[2]),s=!0)},p(t,[e]){"full-width-header"===t[1].type&&r.p(t,e),(!i||1&e&&o!==(o="section-"+t[0].id))&&h(n,"id",o)},i(t){i||(z(r),i=!0)},o(t){D(r),i=!1},d(t){t&&a(n),r&&r.d(),s=!1,c()}}}function wt(t,e,n){let{section:o}=e;const i=o.module;return t.$$set=t=>{"section"in t&&n(0,o=t.section)},[o,i,function(){W.set(o)}]}class kt extends Q{constructor(t){super(),K(this,t,wt,xt,c,{section:0})}}function Tt(t,e,n){const o=t.slice();return o[6]=e[n],o}function _t(t){let e,n;return e=new kt({props:{section:t[6]}}),{c(){B(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.section=t[6]),e.$set(o)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Lt(t,e){let n,o,i,s="full-width"===e[6].type&&_t(e);return{key:t,first:null,c(){n=m(),s&&s.c(),o=m(),this.first=n},m(t,e){u(t,n,e),s&&s.m(t,e),u(t,o,e),i=!0},p(t,e){"full-width"===t[6].type?s?(s.p(t,e),1&e&&z(s,1)):(s=_t(t),s.c(),z(s,1),s.m(o.parentNode,o)):s&&(q(),D(s,1,1,(()=>{s=null})),I())},i(t){i||(z(s),i=!0)},o(t){D(s),i=!1},d(t){t&&a(n),s&&s.d(t),t&&a(o)}}}function jt(t){let e,n,o,s,c,r,f,m=[],$=new Map,b=t[0].sections;const v=t=>t[6].id;for(let e=0;e<b.length;e+=1){let n=Tt(t,b,e),o=v(n);$.set(o,m[e]=Lt(o,n))}return s=new rt({}),s.$on("dragend",t[2]),s.$on("dragstart",t[1]),{c(){e=d("div"),n=d("div");for(let t=0;t<m.length;t+=1)m[t].c();o=p(),B(s.$$.fragment),h(n,"class","section-container"),h(e,"class","page-builder svelte-vq2kbi")},m(i,a){u(i,e,a),l(e,n);for(let t=0;t<m.length;t+=1)m[t].m(n,null);l(e,o),F(s,e,null),c=!0,r||(f=[g(n,"dragenter",Et),g(n,"dragleave",Mt),g(n,"dragover",ot(t[3],100)),g(n,"drop",St)],r=!0)},p(t,[e]){if(1&e){const o=t[0].sections;q(),m=function(t,e,n,o,i,s,c,r,l,u,a,d){let f=t.length,p=s.length,m=f;const g={};for(;m--;)g[t[m].key]=m;const h=[],$=new Map,b=new Map;for(m=p;m--;){const t=d(i,s,m),r=n(t);let l=c.get(r);l?o&&l.p(t,e):(l=u(r,t),l.c()),$.set(r,h[m]=l),r in g&&b.set(r,Math.abs(m-g[r]))}const v=new Set,y=new Set;function x(t){z(t,1),t.m(r,a),c.set(t.key,t),a=t.first,p--}for(;f&&p;){const e=h[p-1],n=t[f-1],o=e.key,i=n.key;e===n?(a=e.first,f--,p--):$.has(i)?!c.has(o)||v.has(o)?x(e):y.has(i)?f--:b.get(o)>b.get(i)?(y.add(o),x(e)):(v.add(i),f--):(l(n,c),f--)}for(;f--;){const e=t[f];$.has(e.key)||l(e,c)}for(;p;)x(h[p-1]);return h}(m,e,v,1,t,o,$,n,G,Lt,null,Tt),I()}},i(t){if(!c){for(let t=0;t<b.length;t+=1)z(m[t]);z(s.$$.fragment,t),c=!0}},o(t){for(let t=0;t<m.length;t+=1)D(m[t]);D(s.$$.fragment,t),c=!1},d(t){t&&a(e);for(let t=0;t<m.length;t+=1)m[t].d();Y(s),r=!1,i(f)}}}function Et(t){console.log(t)}function Mt(t){console.log(t)}function St(t){console.log(t)}function At(t,e,n){let o,i,s;var c;return r(t,et,(t=>n(0,o=t))),r(t,tt,(t=>n(4,i=t))),r(t,X,(t=>n(5,s=t))),et.set(R),c=()=>{document.addEventListener("dragover",(t=>{t.preventDefault()}))},x().$$.on_mount.push(c),[o,function(t){const e=o.sections.findIndex((e=>e===t.detail));X.set(o.sections[e]),W.set(null),et.update((t=>(t.sections.splice(e,1),t)))},function(t){t.preventDefault();let e=o.sections.findIndex((t=>t.id===i.section.id));i.isTop||(e+=1),et.update((t=>(t.sections.splice(e,0,s),t))),X.set(null)},function(t){var e,n;const i=null===(e=t.target)||void 0===e?void 0:e.closest("section"),s=i.offsetTop+i.offsetHeight/2,c=t.clientY<s,r=null==i?void 0:i.id.replace(/^section-/,""),l=null!==(n=o.sections.find((t=>t.id===r)))&&void 0!==n?n:null;tt.set({section:l,isTop:c})}]}class Ct extends Q{constructor(t){super(),K(this,t,At,jt,c,{})}}function Ht(e){let n,o;return n=new Ct({}),{c(){B(n.$$.fragment)},m(t,e){F(n,t,e),o=!0},p:t,i(t){o||(z(n.$$.fragment,t),o=!0)},o(t){D(n.$$.fragment,t),o=!1},d(t){Y(n,t)}}}return new class extends Q{constructor(t){super(),K(this,t,null,Ht,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
