import{c as w,S as q,i as R,s as $,O as m,j as b,y as u,R as y,x as f,g as k,m as C,M as l,N as _,P as N,Q as d,U as P,T as h,n as O}from"../chunks/Component.KKE8dHOw.js";import"../chunks/index.3EbCJjBI.js";import{p as S}from"../chunks/stores.rZ5UBh91.js";import{d as p}from"../chunks/Dashboard.9OZUXCTU.js";const j=!0,v=j;function E(s,t){let o={...s.params};return t&&(o={...Object.fromEntries(s.url.searchParams),...o}),o}function g(s){let t,o,a;var r=p.adminConfig.theme.dashboard;function n(e,i){return{props:{dashboard:p,crud:e[3],operation:e[2],requestParameters:e[1]}}}return r&&(t=l(r,n(s))),{c(){t&&_(t.$$.fragment),o=m()},l(e){t&&N(t.$$.fragment,e),o=m()},m(e,i){t&&d(t,e,i),b(e,o,i),a=!0},p(e,i){if(r!==(r=p.adminConfig.theme.dashboard)){if(t){P();const c=t;u(c.$$.fragment,1,0,()=>{h(c,1)}),y()}r?(t=l(r,n(e)),_(t.$$.fragment),f(t.$$.fragment,1),d(t,o.parentNode,o)):t=null}else if(r){const c={};i&8&&(c.crud=e[3]),i&4&&(c.operation=e[2]),i&2&&(c.requestParameters=e[1]),t.$set(c)}},i(e){a||(t&&f(t.$$.fragment,e),a=!0)},o(e){t&&u(t.$$.fragment,e),a=!1},d(e){e&&k(o),t&&h(t,e)}}}function B(s){let t=s[0],o,a,r=g(s);return{c(){r.c(),o=m()},l(n){r.l(n),o=m()},m(n,e){r.m(n,e),b(n,o,e),a=!0},p(n,[e]){e&1&&$(t,t=n[0])?(P(),u(r,1,1,O),y(),r=g(n),r.c(),f(r,1),r.m(o.parentNode,o)):r.p(n,e)},i(n){a||(f(r),a=!0)},o(n){u(r),a=!1},d(n){n&&k(o),r.d(n)}}}function M(s,t,o){let a,r,n,e;return C(s,S,i=>o(0,e=i)),s.$$.update=()=>{s.$$.dirty&1&&o(3,a=e.params.crud),s.$$.dirty&1&&o(2,r=e.params.operation),s.$$.dirty&1&&o(1,n=E(e,v))},[e,n,r,a]}class Q extends q{constructor(t){super(),R(this,t,M,B,$,{})}}w(Q,{},[],[],!0);export{Q as component};
