(this["webpackJsonppros-cons"]=this["webpackJsonppros-cons"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var r=n(10),s=n.n(r),c=n(16),o=n(1),a=(n(0),n(6)),i=n.n(a),u=(n(26),n(27),n(4)),p=n(18),l=n.n(p),d=n(19),j=n.n(d),b="RESET_STATE",h="FILTER_LIST",O="EDIT_ITEM",f=function(t){var e=t.title,n=t.data,r=Object(u.b)();return Object(o.jsxs)("div",{className:"list",children:[Object(o.jsx)("div",{className:"title",children:e}),Object(o.jsx)("div",{className:"content",children:n.map((function(t,e){return Object(o.jsxs)("div",{className:"note",children:[Object(o.jsxs)("span",{children:[++e,"."]}),Object(o.jsx)(j.a,{className:"editableContent",html:t.text,disabled:!1,onChange:function(s){return function(t,e,s,c){var o=t.target.value;""===o&&e!==n.length?(r({type:O,text:o,id:s}),r({type:h,id:s})):""!==o&&e===n.length?(r({type:O,text:o,id:s}),r({type:b,text:"",itemType:c})):r({type:O,text:o,id:s})}(s,e,t.id,t.type)}})]},e)}))})]})};var x,v=function(t){var e=t.isCorrectVersion,n=Object(u.c)((function(t){return t.prosCons}),l.a);return e?Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"mainTitle",children:"Should I eat at McDonalds?"}),Object(o.jsx)(f,{title:"PROS",data:n.filter((function(t){return"pros"===t.type}))}),Object(o.jsx)(f,{title:"CONS",data:n.filter((function(t){return"cons"===t.type}))})]})}):Object(o.jsxs)("div",{className:"unsupportedBrowser",children:["You are using a browser version that we do not support. Please use the last version of\xa0",Object(o.jsx)("a",{href:"https://www.google.com/intl/en/chrome/",children:"Chrome"}),":"]})},m=n(2),y=n(3),C=n(14),T=n(5),w=n(7),g=n.n(w),E=function(t,e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return e.hasOwnProperty(r.type)?e[r.type](n,r):n}},N={prosCons:[{id:g()(),text:"",type:"pros"},{id:g()(),text:"",type:"cons"}]},S=E(N,(x={},Object(m.a)(x,"RESET_STATE",(function(){return N})),Object(m.a)(x,b,(function(t,e){var n=Object(C.a)(t.prosCons);return n.push({id:g()(),text:e.text,type:e.itemType}),Object(y.a)(Object(y.a)({},t),{},{prosCons:n})})),Object(m.a)(x,h,(function(t,e){var n=t.prosCons.filter((function(t){return t.id!==e.id}));return Object(y.a)(Object(y.a)({},t),{},{prosCons:n})})),Object(m.a)(x,O,(function(t,e){var n=Object(C.a)(t.prosCons);return n.find((function(t){return t.id===e.id})).text=e.text,Object(y.a)(Object(y.a)({},t),{},{prosCons:n})})),x)),I=Object(T.c)(S,Object(T.b)()),R=n(13),_=function(){var t=Object(c.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://omahaproxy.appspot.com/all.json");case 2:return e=t.sent,t.next=5,e.text();case 5:return n=t.sent,t.abrupt("return",n.includes(R.fullBrowserVersion));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i.a.render(Object(o.jsx)(u.a,{store:I,children:Object(o.jsx)(v,{isCorrectVersion:R.isChrome&&_()})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ce44f951.chunk.js.map