(this["webpackJsonpreact-memory-card"]=this["webpackJsonpreact-memory-card"]||[]).push([[0],{39:function(n,t,e){},59:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e.n(c),a=e(25),o=e.n(a),u=(e(39),e(6)),s=e.n(u),f=e(7),d=e(4),b=e(2),j=e(3);function x(){var n=Object(b.a)(["\n  min-width: 100vw;\n  min-height: 100vh;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  background: var(--primary);\n"]);return x=function(){return n},n}function p(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--secondary);\n  color: var(--primary-text);\n"]);return p=function(){return n},n}var l=j.b.div(p()),m=j.b.div(x()),h=e.p+"static/media/eevee-logo.d4558f95.png";function O(){var n=Object(b.a)(["\n  width: 80px;\n  height: 80px;\n  padding: 4px;\n  min-height: 50px;\n  min-width: 50px;\n"]);return O=function(){return n},n}var v=j.b.div(O());function g(){return Object(r.jsx)(v,{children:Object(r.jsx)("img",{src:h,alt:"Poke Logo"})})}function w(){var n=Object(b.a)(["\n  height: 24px;\n  width: 1px;\n  background-color: white;\n  margin: 0 10px;\n"]);return w=function(){return n},n}function k(){var n=Object(b.a)(["\n  color: rgb(255 152 152);\n"]);return k=function(){return n},n}function y(){var n=Object(b.a)(["\n  color: rgb(188 255 152);\n  padding: 5px;\n  font-size: 20px;\n\n  @media (min-width: 576px) {\n    font-size: 24px;\n  }\n"]);return y=function(){return n},n}function C(){var n=Object(b.a)(["\n  padding: 5px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return C=function(){return n},n}var z=j.b.div(C()),S=j.b.p(y()),P=Object(j.b)(S)(k()),M=j.b.div(w());function B(n){var t=n.score,e=n.bestScore;return Object(r.jsxs)(z,{children:[Object(r.jsxs)(S,{children:["Score: ",t]}),Object(r.jsx)(M,{}),Object(r.jsxs)(P,{children:["Best: ",e]})]})}function E(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  min-height: 60px;\n  background-color: var(--primary);\n\n  h1 {\n    font-size: 28px;\n  }\n"]);return E=function(){return n},n}var G=j.b.header(E());function I(n){var t=n.score,e=n.bestScore;return Object(r.jsxs)(G,{children:[Object(r.jsx)(g,{}),Object(r.jsx)("h1",{children:"PokeMemory!"}),Object(r.jsx)(B,{score:t,bestScore:e})]})}function L(){var n=Object(b.a)(["\n  width: 100%;\n  background-color: #333;\n  height: 1px;\n"]);return L=function(){return n},n}function N(){var n=Object(b.a)(["\n      animation: "," ","ms 1;\n    "]);return N=function(){return n},n}function J(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 5px;\n  min-width: 60px;\n  position: relative;\n\n  border-radius: 5px;\n  border: 3px solid rgb(43 56 41);\n  background-color: rgb(64 81 62);\n  box-shadow: 0px 1px 4px #585858;\n  transition: all 200ms;\n\n  overflow: hidden;\n  cursor: pointer;\n\n  ","\n\n  img {\n    width: 200px;\n    height: 200px;\n  }\n\n  h3 {\n    font-size: 24px;\n    padding: 0 5px;\n    user-select: none;\n  }\n\n  img {\n    width: 100px;\n    height: 100px;\n  }\n\n  h3 {\n    font-size: 16px;\n  }\n\n  @media (min-width: 992px) {\n    img {\n      min-width: 160px;\n      min-height: 160px;\n    }\n\n    h3 {\n      font-size: 20px;\n    }\n\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n\n  @media (min-width: 576px) {\n    img {\n      width: 120px;\n      height: 120px;\n    }\n  }\n"]);return J=function(){return n},n}function T(){var n=Object(b.a)(["\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"]);return T=function(){return n},n}var _=Object(j.c)(T()),q=j.b.div(J(),(function(n){return n.animation&&Object(j.a)(N(),_,400)})),A=j.b.div(L());function D(n){var t=Object(c.useState)(),e=Object(d.a)(t,2),i=e[0],a=e[1],o=n.card,u=n.alt,s=void 0===u?o.name:u,f=n.onCardClick,b=n.animate,j=o.name,x=o.src,p=o.id;return Object(c.useEffect)((function(){a(!0);var n=setTimeout((function(){a(!1)}),400);return function(){clearTimeout(n)}}),[b]),Object(r.jsxs)(q,{onClick:function(){return f(p)},animation:i,children:[Object(r.jsx)("img",{src:x,alt:s,draggable:"false"}),Object(r.jsx)(A,{}),Object(r.jsx)("h3",{children:j})]})}function F(){var n=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 1rem;\n"]);return F=function(){return n},n}function H(){var n=Object(b.a)(["\n  flex: 1 1 auto;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return H=function(){return n},n}var K=j.b.main(H()),Q=j.b.div(F());function R(n){var t=n.cards,e=n.onCardClick,i=Object(c.useState)(),a=Object(d.a)(i,2),o=a[0],u=a[1];Object(c.useEffect)((function(){}),[o]);var s=function(n){u((function(n){return!n})),e(n)};return Object(r.jsx)(K,{children:Object(r.jsx)(Q,{children:t&&t.map((function(n){return Object(r.jsx)(D,{card:n,onCardClick:s,animate:o},n.id)}))})})}var U=e.p+"static/media/pikaSpinner.20e5d35b.svg";function V(){var n=Object(b.a)(["\n  img {\n    width: 60px;\n    animation: "," 500ms linear infinite;\n  }\n\n  p {\n    font-size: 20px;\n    text-align: center;\n    animation: "," 500ms alternate infinite;\n  }\n\n  @media (min-width: 576px) {\n    img {\n      width: 100px;\n    }\n\n    p {\n      font-size: 28px;\n    }\n  }\n\n  z-index: 2021;\n"]);return V=function(){return n},n}function W(){var n=Object(b.a)(["\n  from {\n    transform: scale(1);\n  }\n\n  to {\n    transform: scale(1.2);\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(b.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return X=function(){return n},n}var Y=Object(j.c)(X()),Z=Object(j.c)(W()),$=Object(j.b)(m)(V(),Y,Z);function nn(n){var t=n.text;return n.show&&Object(r.jsxs)($,{children:[Object(r.jsx)("img",{src:U,alt:"spinner"}),t&&Object(r.jsx)("p",{children:t})]})}function tn(){var n=Object(b.a)(["\n  margin-top: 20px;\n  color: var(--primary-text);\n  background-color: var(--secondary);\n  padding: 5px 12px;\n  font-size: 18px;\n  border: 0;\n  border-radius: 4px;\n\n  :hover {\n    background-color: rgb(70 77 90);\n  }\n\n  @media (min-width: 576px) {\n    font-size: 24px;\n  }\n"]);return tn=function(){return n},n}function en(){var n=Object(b.a)(["\n  p {\n    font-size: 20px;\n    text-align: center;\n  }\n\n  h2 {\n    font-size: 28px;\n  }\n\n  @media (min-width: 576px) {\n    p {\n      font-size: 30px;\n    }\n\n    h2 {\n      font-size: 44px;\n    }\n  }\n\n  z-index: 2021;\n"]);return en=function(){return n},n}var rn=Object(j.b)(m)(en()),cn=j.b.button(tn());function an(n){var t=n.score,e=n.onNewGameClick;return n.show&&Object(r.jsxs)(rn,{children:[Object(r.jsx)("h2",{children:"Game Over!"}),Object(r.jsxs)("p",{children:["Congratulations your Score is ",t]}),Object(r.jsx)(cn,{onClick:e,children:"New Game"})]})}function on(){var n=Object(b.a)(["\n  margin-top: 1rem;\n  text-decoration: underline;\n  text-align: center;\n  font-size: 20px;\n\n  @media (min-width: 576px) {\n    font-size: 24px;\n  }\n"]);return on=function(){return n},n}var un=j.b.h2(on());function sn(n){var t=n.text;return Object(r.jsx)(un,{children:t})}var fn=e(9),dn=new(e(32).a),bn=function(n){return Promise.all(n.map((function(n){var t=n.src;return new Promise((function(n){var e=new Image;e.src=t,e.onload=function(){return n(t)}}))})))},jn=function(n){for(var t,e,r=Object(fn.a)(n),c=r.length,i=[],a=0;a<c;a+=1)e=r.length,t=Math.floor(Math.random()*e),i=[].concat(Object(fn.a)(i),Object(fn.a)(r.splice(t,1)));return i},xn=function(n){var t=function(n,t){return[t,n+t]}(n,function(n){return Math.floor(Math.random()*(897-n+2))+1}(n)),e=Object(d.a)(t,2);return function(n){return Promise.all(n.map((function(n){return dn.getPokemonByName(n)})))}(function(n,t){for(var e=[],r=n;r<t;r++)e.push(r);return e}(e[0],e[1]))},pn={getCardsBriefInfo:function(){var n=Object(f.a)(s.a.mark((function n(t){var e,r,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,xn(t);case 2:return e=n.sent,r=e.map((function(n){return{id:n.id,name:n.name,src:n.sprites.other["official-artwork"].front_default}})),n.next=6,bn(r);case 6:return c=jn(r),n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),shuffleCards:jn},ln=e(33),mn={cardsCount:4,nr:1},hn=function(){var n=Object(c.useState)(!0),t=Object(d.a)(n,2),e=t[0],r=t[1],i=Object(c.useState)(!1),a=Object(d.a)(i,2),o=a[0],u=a[1],b=function(){var n=Object(c.useState)([]),t=Object(d.a)(n,2),e=t[0],r=t[1];return[function(n){return!!e.find((function(t){return t===n}))},function(n){r((function(t){var e=Object(fn.a)(t);return e.push(n),e}))},function(n){return e.length===n-1},function(){r([])}]}(),j=Object(d.a)(b,4),x=j[0],p=j[1],l=j[2],m=j[3],h=function(){var n=Object(c.useState)(null),t=Object(d.a)(n,2),e=t[0],r=t[1];return[e,function(){r((function(n){return pn.shuffleCards(n)}))},function(){var n=Object(f.a)(s.a.mark((function n(t){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,pn.getCardsBriefInfo(t);case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()]}(),O=Object(d.a)(h,3),v=O[0],g=O[1],w=O[2],k=function(){var n=Object(c.useState)(mn),t=Object(d.a)(n,2),e=t[0],r=t[1];return[e,function(){r((function(n){return{cardsCount:n.cardsCount<12?n.cardsCount+2:12,nr:n.nr+1}}))},function(){r(Object(ln.a)({},mn))}]}(),y=Object(d.a)(k,3),C=y[0],z=y[1],S=y[2],P=function(){var n=Object(c.useState)(0),t=Object(d.a)(n,2),e=t[0],r=t[1],i=Object(c.useState)(0),a=Object(d.a)(i,2),o=a[0],u=a[1];return[e,o,function(n){r((function(t){var e=t+n;return e>o&&u(e),e}))},function(){r(0)}]}(),M=Object(d.a)(P,4),B=M[0],E=M[1],G=M[2],I=M[3];return[C,e,o,v,B,E,function(){var n=Object(f.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w(C.cardsCount);case 2:r(!1);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),function(n){x(n)?u(!0):(p(n),G(1),l(C.cardsCount)?(m(),r(!0),z()):g())},function(){u(!1),r(!0),m(),I(),S()}]};function On(){var n=hn(),t=Object(d.a)(n,9),e=t[0],i=t[1],a=t[2],o=t[3],u=t[4],b=t[5],j=t[6],x=t[7],p=t[8];return Object(c.useEffect)(Object(f.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j();case 2:case"end":return n.stop()}}),n)}))),[e]),Object(r.jsxs)(l,{children:[Object(r.jsx)(nn,{text:"Loading Lvl ".concat(e.nr),show:i}),Object(r.jsx)(an,{score:u,onNewGameClick:p,show:a}),Object(r.jsx)(I,{score:u,bestScore:b}),Object(r.jsx)(sn,{text:"Choose your next Pokemon! Lvl ".concat(e.nr)}),Object(r.jsx)(R,{cards:o,onCardClick:x})]})}o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(On,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.9195959e.chunk.js.map