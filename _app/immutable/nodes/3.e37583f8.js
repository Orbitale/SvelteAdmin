import{c as P,S as q,i as R,s as b,e as m,d as g,g as u,h as k,j as p,k as y,K as S,z as f,A as l,B as j,C as _,x as w,D as d,J as v}from"../chunks/Component.12b5a4ab.js";import"../chunks/index.0fe306af.js";import{t as h,a as B}from"../chunks/Dashboard.124ec73e.js";import{p as C}from"../chunks/stores.bcc8df40.js";const E=!0,N=E;function O(a,t){let o={...a.params};return t&&(o={...Object.fromEntries(a.url.searchParams),...o}),o}function $(a){let t,o,n;var r=h.dashboard;function s(e,i){return{props:{dashboard:B,crud:e[3],operation:e[2],requestParameters:e[1]}}}return r&&(t=f(r,s(a))),{c(){t&&l(t.$$.fragment),o=m()},l(e){t&&j(t.$$.fragment,e),o=m()},m(e,i){t&&_(t,e,i),g(e,o,i),n=!0},p(e,i){if(r!==(r=h.dashboard)){if(t){w();const c=t;u(c.$$.fragment,1,0,()=>{d(c,1)}),k()}r?(t=f(r,s(e)),l(t.$$.fragment),p(t.$$.fragment,1),_(t,o.parentNode,o)):t=null}else if(r){const c={};i&8&&(c.crud=e[3]),i&4&&(c.operation=e[2]),i&2&&(c.requestParameters=e[1]),t.$set(c)}},i(e){n||(t&&p(t.$$.fragment,e),n=!0)},o(e){t&&u(t.$$.fragment,e),n=!1},d(e){e&&y(o),t&&d(t,e)}}}function z(a){let t=a[0],o,n,r=$(a);return{c(){r.c(),o=m()},l(s){r.l(s),o=m()},m(s,e){r.m(s,e),g(s,o,e),n=!0},p(s,[e]){e&1&&b(t,t=s[0])?(w(),u(r,1,1,v),k(),r=$(s),r.c(),p(r,1),r.m(o.parentNode,o)):r.p(s,e)},i(s){n||(p(r),n=!0)},o(s){u(r),n=!1},d(s){s&&y(o),r.d(s)}}}function A(a,t,o){let n,r,s,e;return S(a,C,i=>o(0,e=i)),a.$$.update=()=>{a.$$.dirty&1&&o(3,n=e.params.crud),a.$$.dirty&1&&o(2,r=e.params.operation),a.$$.dirty&1&&o(1,s=O(e,N))},[e,s,r,n]}class D extends q{constructor(t){super(),R(this,t,A,z,b,{})}}P(D,{},[],[],!0);export{D as component};
