import{S as s,i as t,s as o,e as n,c as a,a as e,d as r,f as c,E as l,F as i,G as u,H as f,I as h,t as p,k as m,j as d,g as $,o as v,n as E,J as g,b as y,K as b,p as w,v as I,x as N,y as O,w as A,B as k,u as x,L as j,h as B,M as L,N as P,O as S,P as C}from"../chunks/vendor-d81b028b.js";import{A as T,u as R,j as H}from"../chunks/Env-edee670d.js";import{p as V}from"../chunks/postStore-07a2a32d.js";import{L as D}from"../chunks/Login-ded450de.js";import{g as U}from"../chunks/navigation-2ffed81e.js";import"../chunks/singletons-12a22614.js";function G(s){let t,o,u;return{c(){t=n("ion-searchbar")},l(s){t=a(s,"ION-SEARCHBAR",{}),e(t).forEach(r)},m(n,a){c(n,t,a),o||(u=l(t,"input",s[2]),o=!0)},p:i,i:i,o:i,d(s){s&&r(t),o=!1,u()}}}function K(s,t,o){let n;u(s,V,(s=>o(3,n=s)));let{posts:a}=t,e="";const r=new f(a,{keys:["title","content"]});return s.$$set=s=>{"posts"in s&&o(1,a=s.posts)},s.$$.update=()=>{3&s.$$.dirty&&h(V,n=e?r.search(e).map((s=>s.item)):a,n)},[e,a,s=>o(0,e=s.target.value)]}class M extends s{constructor(s){super(),t(this,s,K,G,o,{posts:1})}}function X(s){let t,o,i,u,f,h,d,E,w,I,N,O,A,k,x,L,P,S=s[1].username+"";return{c(){t=n("div"),o=n("a"),i=p("สร้าง"),u=m(),f=n("a"),h=n("ion-chip"),d=n("ion-avatar"),E=n("img"),I=m(),N=n("span"),O=p(S),A=m(),k=n("button"),x=p("🔓"),this.h()},l(s){t=a(s,"DIV",{class:!0});var n=e(t);o=a(n,"A",{href:!0,class:!0});var c=e(o);i=$(c,"สร้าง"),c.forEach(r),u=v(n),f=a(n,"A",{href:!0});var l=e(f);h=a(l,"ION-CHIP",{color:!0,mode:!0,outline:!0});var p=e(h);d=a(p,"ION-AVATAR",{});var m=e(d);E=a(m,"IMG",{src:!0}),m.forEach(r),p.forEach(r),I=v(l),N=a(l,"SPAN",{class:!0});var g=e(N);O=$(g,S),g.forEach(r),l.forEach(r),n.forEach(r),A=v(s),k=a(s,"BUTTON",{});var y=e(k);x=$(y,"🔓"),y.forEach(r),this.h()},h(){y(o,"href","/blog/new"),y(o,"class","font-mono no-underline mr-3"),j(E.src,w=s[1].photoURL)||y(E,"src",w),g(h,"color","tertiary"),g(h,"mode","ios"),g(h,"outline","true"),y(N,"class","font-mono text-gray-500"),y(f,"href","/auth"),y(t,"class","md:flex md:flex-cols")},m(n,a){c(n,t,a),b(t,o),b(o,i),b(t,u),b(t,f),b(f,h),b(h,d),b(d,E),b(f,I),b(f,N),b(N,O),c(n,A,a),c(n,k,a),b(k,x),L||(P=l(k,"click",s[2]),L=!0)},p(s,t){2&t&&!j(E.src,w=s[1].photoURL)&&y(E,"src",w),2&t&&S!==(S=s[1].username+"")&&B(O,S)},d(s){s&&r(t),s&&r(A),s&&r(k),L=!1,P()}}}function z(s){let t,o;return{c(){t=n("a"),o=p("ลงชื่อเข้าใช้"),this.h()},l(s){t=a(s,"A",{href:!0,class:!0});var n=e(t);o=$(n,"ลงชื่อเข้าใช้"),n.forEach(r),this.h()},h(){y(t,"href","/auth"),y(t,"class","font-mono no-underline")},m(s,n){c(s,t,n),b(t,o)},p:i,d(s){s&&r(t)}}}function F(s){let t,o;return t=new D({}),{c(){d(t.$$.fragment)},l(s){E(t.$$.fragment,s)},m(s,n){w(t,s,n),o=!0},p:i,i(s){o||(O(t.$$.fragment,s),o=!0)},o(s){I(t.$$.fragment,s),o=!1},d(s){A(t,s)}}}function J(s){let t;const o=s[5].default,n=L(o,s,s[4],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),t=!0},p(s,a){n&&n.p&&(!t||16&a)&&P(n,o,s,s[4],t?C(o,s[4],a,null):S(s[4]),null)},i(s){t||(O(n,s),t=!0)},o(s){I(n,s),t=!1},d(s){n&&n.d(s)}}}function Y(s){let t,o,i,u,f,h,k,j,B,L,P,S,C,T,R,H,V,D,U,G;function K(s,t){return s[1]?X:z}P=new M({props:{posts:s[0]}});let Y=K(s),q=Y(s);const Q=[J,F],W=[];function Z(s,t){return s[1]?0:1}return H=Z(s),V=W[H]=Q[H](s),{c(){t=n("body"),o=n("nav"),i=n("div"),u=n("a"),f=n("ion-chip"),h=n("ion-label"),k=p("PBOX"),j=m(),B=n("ion-icon"),L=m(),d(P.$$.fragment),S=m(),C=n("section"),q.c(),T=m(),R=n("ion-content"),V.c(),this.h()},l(s){t=a(s,"BODY",{});var n=e(t);o=a(n,"NAV",{class:!0});var c=e(o);i=a(c,"DIV",{class:!0});var l=e(i);u=a(l,"A",{href:!0,class:!0});var p=e(u);f=a(p,"ION-CHIP",{color:!0,mode:!0,outline:!0});var m=e(f);h=a(m,"ION-LABEL",{});var d=e(h);k=$(d,"PBOX"),d.forEach(r),j=v(m),B=a(m,"ION-ICON",{name:!0}),e(B).forEach(r),m.forEach(r),p.forEach(r),L=v(l),E(P.$$.fragment,l),S=v(l),C=a(l,"SECTION",{});var g=e(C);q.l(g),g.forEach(r),l.forEach(r),c.forEach(r),T=v(n),R=a(n,"ION-CONTENT",{});var y=e(R);V.l(y),y.forEach(r),n.forEach(r),this.h()},h(){g(B,"name","cube"),g(f,"color","tertiary"),g(f,"mode","ios"),g(f,"outline","true"),y(u,"href","/"),y(u,"class","font-bold no-underline"),y(i,"class","flex items-center justify-between mx-auto"),y(o,"class","bg-white border-b border-gray-500 py-6 px-4 w-full")},m(n,a){c(n,t,a),b(t,o),b(o,i),b(i,u),b(u,f),b(f,h),b(h,k),b(f,j),b(f,B),b(i,L),w(P,i,null),b(i,S),b(i,C),q.m(C,null),b(t,T),b(t,R),W[H].m(R,null),D=!0,U||(G=l(window,"keydown",s[3]),U=!0)},p(s,[t]){const o={};1&t&&(o.posts=s[0]),P.$set(o),Y===(Y=K(s))&&q?q.p(s,t):(q.d(1),q=Y(s),q&&(q.c(),q.m(C,null)));let n=H;H=Z(s),H===n?W[H].p(s,t):(x(),I(W[n],1,1,(()=>{W[n]=null})),N(),V=W[H],V?V.p(s,t):(V=W[H]=Q[H](s),V.c()),O(V,1),V.m(R,null))},i(s){D||(O(P.$$.fragment,s),O(V),D=!0)},o(s){I(P.$$.fragment,s),I(V),D=!1},d(s){s&&r(t),A(P),q.d(),W[H].d(),U=!1,G()}}}var q=function(s,t,o,n){return new(o||(o=Promise))((function(a,e){function r(s){try{l(n.next(s))}catch(t){e(t)}}function c(s){try{l(n.throw(s))}catch(t){e(t)}}function l(s){var t;s.done?a(s.value):(t=s.value,t instanceof o?t:new o((function(s){s(t)}))).then(r,c)}l((n=n.apply(s,t||[])).next())}))};const Q=({fetch:s})=>q(void 0,void 0,void 0,(function*(){const t=yield s("/posts");return{props:{posts:yield t.json()}}}));function W(s,t,o){let n,a;u(s,R,(s=>o(1,n=s))),u(s,H,(s=>o(7,a=s)));let{$$slots:e={},$$scope:r}=t,{posts:c=[]}=t;return k((async()=>{if(!localStorage.getItem("token"))return{props:{user:null}};const s=await fetch(T+"/auth/me",{headers:{Authorization:"Bearer "+a}});s.ok&&h(R,n=await s.json(),n)})),s.$$set=s=>{"posts"in s&&o(0,c=s.posts),"$$scope"in s&&o(4,r=s.$$scope)},[c,n,async function(){h(R,n=null,n)},function(s){"Slash"===s.code&&s.ctrlKey&&U("/cube")},r,e]}class Z extends s{constructor(s){super(),t(this,s,W,Y,o,{posts:0})}}export{Z as default,Q as load};
