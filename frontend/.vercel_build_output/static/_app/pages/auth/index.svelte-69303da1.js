import{S as s,i as e,s as t,l as n,f as a,v as r,x as l,y as o,d as c,G as i,u as f,j as u,n as m,p as d,F as h,w as p,e as g,t as v,k as $,c as b,a as j,g as k,o as w,K as E,h as x,b as y,W as N}from"../../chunks/vendor-d81b028b.js";import{L}from"../../chunks/Login-ded450de.js";import{u as z}from"../../chunks/Env-edee670d.js";function B(s,e,t){const n=s.slice();return n[1]=e[t],n}function D(s){let e,t;return e=new L({}),{c(){u(e.$$.fragment)},l(s){m(e.$$.fragment,s)},m(s,n){d(e,s,n),t=!0},p:h,i(s){t||(o(e.$$.fragment,s),t=!0)},o(s){r(e.$$.fragment,s),t=!1},d(s){p(e,s)}}}function F(s){let e,t,n,r,l,o,i=s[0].username+"",f=s[0].displayName+"",u=s[0].profile.split(","),m=[];for(let a=0;a<u.length;a+=1)m[a]=G(B(s,u,a));return{c(){e=g("div"),t=g("h1"),n=v(i),r=$(),l=v(f),o=$();for(let s=0;s<m.length;s+=1)m[s].c();this.h()},l(s){e=b(s,"DIV",{class:!0});var a=j(e);t=b(a,"H1",{});var u=j(t);n=k(u,i),u.forEach(c),r=w(a),l=k(a,f),o=w(a);for(let e=0;e<m.length;e+=1)m[e].l(a);a.forEach(c),this.h()},h(){y(e,"class","animate container  transition-all grid place-items-center shadow-md  w-full svelte-cizn6n")},m(s,c){a(s,e,c),E(e,t),E(t,n),E(e,r),E(e,l),E(e,o);for(let t=0;t<m.length;t+=1)m[t].m(e,null)},p(s,t){if(1&t&&i!==(i=s[0].username+"")&&x(n,i),1&t&&f!==(f=s[0].displayName+"")&&x(l,f),1&t){let n;for(u=s[0].profile.split(","),n=0;n<u.length;n+=1){const a=B(s,u,n);m[n]?m[n].p(a,t):(m[n]=G(a),m[n].c(),m[n].m(e,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=u.length}},i:h,o:h,d(s){s&&c(e),N(m,s)}}}function G(s){let e,t,n,r,l=s[1]+"";return{c(){e=g("p"),t=v(l),n=$(),r=g("br")},l(s){e=b(s,"P",{});var a=j(e);t=k(a,l),a.forEach(c),n=w(s),r=b(s,"BR",{})},m(s,l){a(s,e,l),E(e,t),a(s,n,l),a(s,r,l)},p(s,e){1&e&&l!==(l=s[1]+"")&&x(t,l)},d(s){s&&c(e),s&&c(n),s&&c(r)}}}function H(s){let e,t,i,u;const m=[F,D],d=[];function h(s,e){return s[0]?0:1}return e=h(s),t=d[e]=m[e](s),{c(){t.c(),i=n()},l(s){t.l(s),i=n()},m(s,t){d[e].m(s,t),a(s,i,t),u=!0},p(s,[n]){let a=e;e=h(s),e===a?d[e].p(s,n):(f(),r(d[a],1,1,(()=>{d[a]=null})),l(),t=d[e],t?t.p(s,n):(t=d[e]=m[e](s),t.c()),o(t,1),t.m(i.parentNode,i))},i(s){u||(o(t),u=!0)},o(s){r(t),u=!1},d(s){d[e].d(s),s&&c(i)}}}function I(s,e,t){let n;return i(s,z,(s=>t(0,n=s))),[n]}class K extends s{constructor(s){super(),e(this,s,I,H,t,{})}}export{K as default};