import{S as s,i as t,s as e,e as n,c as a,a as c,d as i,b as o,f as l,F as r,Y as u,a5 as f,a7 as d,k as h,j as p,o as $,n as v,K as w,R as E,p as m,E as x,a8 as b,y as g,v as k,w as y,U as S,a9 as D}from"../../chunks/vendor-d81b028b.js";function T(s){let t;return{c(){t=n("div"),this.h()},l(s){t=a(s,"DIV",{class:!0}),c(t).forEach(i),this.h()},h(){o(t,"class","markdown prose prose-xl")},m(e,n){l(e,t,n),t.innerHTML=s[0]},p(s,[e]){1&e&&(t.innerHTML=s[0])},i:r,o:r,d(s){s&&i(t)}}}function z(s,t,e){let n,{content:a=""}=t;return s.$$set=s=>{"content"in s&&e(1,a=s.content)},s.$$.update=()=>{2&s.$$.dirty&&e(0,n=u(a))},[n,a]}class I extends s{constructor(s){super(),t(this,s,z,T,e,{content:1})}}function K(s){let t,e,r,u,D,T,z,K,L;function R(t){s[3](t)}let V={};return void 0!==s[0]&&(V.content=s[0]),D=new I({props:V}),f.push((()=>d(D,"content",R))),{c(){t=n("div"),e=n("textarea"),r=h(),u=n("div"),p(D.$$.fragment),this.h()},l(s){t=a(s,"DIV",{class:!0});var n=c(t);e=a(n,"TEXTAREA",{class:!0,name:!0,id:!0,cols:!0,rows:!0}),c(e).forEach(i),r=$(n),u=a(n,"DIV",{class:!0});var o=c(u);v(D.$$.fragment,o),o.forEach(i),n.forEach(i),this.h()},h(){o(e,"class","flex-1"),o(e,"name","content"),o(e,"id",""),o(e,"cols","30"),o(e,"rows","10"),o(u,"class","flex-1"),o(t,"class","flex w-full")},m(n,a){l(n,t,a),w(t,e),E(e,s[0]),w(t,r),w(t,u),m(D,u,null),z=!0,K||(L=[x(e,"keydown",s[1]),x(e,"input",s[2])],K=!0)},p(s,[t]){1&t&&E(e,s[0]);const n={};!T&&1&t&&(T=!0,n.content=s[0],b((()=>T=!1))),D.$set(n)},i(s){z||(g(D.$$.fragment,s),z=!0)},o(s){k(D.$$.fragment,s),z=!1},d(s){s&&i(t),y(D),K=!1,S(L)}}}function L(s,t,e){let n;var a=new RegExp("d(b+)d","g").exec("cdbbdbsbz");return console.log(a),[n,async function(s){if(s.ctrlKey&&"."===s.key){s.preventDefault();const{selectionStart:t,selectionEnd:a,value:c}=this,i=c.slice(t,a),o=/[a-z]\w+/g.test(i)?`![link](${i})`:a;e(0,n=c.slice(0,t)+o+c.slice(a)),await D(),this.selectionStart=t,this.selectionEnd=a}if(s.ctrlKey&&"/"===s.key){s.preventDefault();const{selectionStart:t,selectionEnd:a,value:c}=this,i=c.slice(t,a),o=/[a-z]\w+/g.test(i)?`[link](${i})`:a;e(0,n=c.slice(0,t)+o+c.slice(a)),await D(),this.selectionStart=t,this.selectionEnd=a}if("Tab"===s.key){s.preventDefault();const{selectionStart:t,selectionEnd:a,value:c}=this,i=c.slice(t,a),o=/[a-z]/.test(i)?i.toUpperCase():i.toLowerCase();e(0,n=c.slice(0,t)+o+c.slice(a)),await D(),this.selectionStart=t,this.selectionEnd=a}},function(){n=this.value,e(0,n)},function(s){n=s,e(0,n)}]}class R extends s{constructor(s){super(),t(this,s,L,K,e,{})}}export{R as default};
