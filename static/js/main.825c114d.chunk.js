(this["webpackJsonptodolist-v2"]=this["webpackJsonptodolist-v2"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),o=c(7),a=c.n(o),i=(c(12),c(4)),r=c(2),l=c(0),j=function(e){var t=e.props,c=t[0].todos,s=t[0].setTodos;return Object(l.jsx)("div",{className:"list",children:c.map((function(e){return Object(l.jsxs)("div",{className:e.completed?"todo completed":"todo",children:[Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("p",{className:"title",children:e.name}),Object(l.jsx)("p",{className:"content",children:e.text})]}),Object(l.jsx)("button",{onClick:function(){return function(e){var t=Object(i.a)(c).filter((function(t){return t.id!==e}));s(t)}(e.id)}}),Object(l.jsx)("input",{type:"checkbox",onChange:function(){return function(e){var t=Object(i.a)(c).map((function(t){return t.id===e&&(t.completed=!t.completed),t}));s(t)}(e.id)}})]},e.id)}))})},d=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)(""),a=Object(r.a)(o,2),d=a[0],u=a[1],b=Object(s.useState)([]),O=Object(r.a)(b,2),x=O[0],p=O[1],h=Object(s.useState)(!1),f=Object(r.a)(h,2),m=f[0],v=f[1],N=Object(s.useState)(!1),g=Object(r.a)(N,2),S=g[0],C=g[1],y=Object(s.useState)(!1),T=Object(r.a)(y,2),k=T[0],J=T[1];Object(s.useEffect)((function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&w[0].setTodos(t)}),[]),Object(s.useEffect)((function(){var e=JSON.stringify(x);localStorage.setItem("todos",e)}),[x]);var w=[{todoValue:c,todos:x,textContent:d,setTextContent:u,setTodos:p,setTodoValue:n}],D=function(){J(!k)};return Object(l.jsxs)("div",{className:"todolist",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"TodoList"}),Object(l.jsx)("button",{onClick:D,children:"Create"})]}),k&&Object(l.jsx)("div",{className:"focus",children:Object(l.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),c.length<5)v(!0);else if(d.length<15)C(!0),v(!1);else{var t={id:(new Date).getTime(),name:c,text:d,completed:!1};p(Object(i.a)(x).concat(t)),n(""),u(""),C(!1),v(!1)}}(e)},children:[Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("button",{onClick:D,children:"X"}),Object(l.jsx)("input",{style:{border:m?"1px solid red":"1px solid #8884ff"},onChange:function(e){n(e.target.value)},type:"text",value:c,placeholder:"Title",className:"title"}),m&&Object(l.jsx)("p",{className:"titleContent",children:"Min 5 charachters"}),Object(l.jsx)("textarea",{style:{border:S?"1px solid red":"1px solid #8884ff"},onChange:function(e){u(e.target.value)},type:"text",value:d,placeholder:"Description"}),S&&Object(l.jsx)("p",{className:"content",children:"Min 15 charachters"})]}),Object(l.jsx)("input",{type:"submit",value:""})]})}),Object(l.jsx)("ul",{children:Object(l.jsx)(j,{props:w})})]})};var u=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("div",{className:"purple"}),Object(l.jsx)(d,{})]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.825c114d.chunk.js.map