(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(14),a=n.n(c),s=n(0),i=function(){return Object(s.jsx)("h2",{children:"Expense Tracker"})},o=n(11),u=n.n(o),l=n(21),j=n(10),d=n(73),b=n(8),O=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(b.a)(Object(b.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!=t.payload})),error:null});case"ADD_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:[].concat(Object(d.a)(e.transactions),[t.payload]),error:null});case"TRANSACTION_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.payload});case"SET_TRANSACTION_KEY":return Object(b.a)(Object(b.a)({},e),{},{transaction_key:t.payload});default:return e}},p=n(22),x=n.n(p),h={transactions:[],error:null,loading:!0,transaction_key:""},m=Object(r.createContext)(h),f=function(e){var t=e.children,n=Object(r.useReducer)(O,h),c=Object(j.a)(n,2),a=c[0],i=c[1];function o(){return(o=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/transactions");case 3:t=e.sent,i({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"trans-key":n}},e.prev=1,e.next=4,x.a.delete("/transactions/".concat(t),r);case 4:i({type:"DELETE_TRANSACTION",payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function b(){return(b=Object(l.a)(u.a.mark((function e(t,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json","trans-key":n}},e.prev=1,e.next=4,x.a.post("/transactions",t,r);case 4:c=e.sent,i({type:"ADD_TRANSACTION",payload:c.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(s.jsx)(m.Provider,{value:{error:a.error,loading:a.loading,transactions:a.transactions,transaction_key:a.transaction_key,deleteTransaction:function(e,t){return d.apply(this,arguments)},addTransaction:function(e,t){return b.apply(this,arguments)},getTransactions:function(){return o.apply(this,arguments)},setTransactionKey:function(e){i({type:"SET_TRANSACTION_KEY",payload:e})}},children:t})},v=function(){var e=Object(r.useContext)(m).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Current Balance"}),Object(s.jsxs)("h1",{id:"balance",children:["\u20b9",e]})]})};function y(e){var t=e.toFixed(2).split(".");return"\u20b9 "+t[0].split("").reverse().reduce((function(e,t,n,r){return"-"===t?e:t+(!n||n%3?"":",")+e}),"")+"."+t[1]}var T=function(){var e=Object(r.useContext)(m).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Total Income"}),Object(s.jsx)("p",{id:"money-plus",className:"money plus",children:y(t)})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Total Expense"}),Object(s.jsx)("p",{id:"money-minus",className:"money minus",children:y(n)})]})]})};function N(e){var t=e.toFixed(2).split(".");return"\u20b9 "+t[0].split("").reverse().reduce((function(e,t,n,r){return"-"===t?e:t+(!n||n%3?"":",")+e}),"")+"."+t[1]}var A=function(){var e=Object(r.useContext)(m).transactions,t=e.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return"Seldon"===e.user_name})).map((function(e){return e.amount})),c=e.filter((function(e){return"Lester"===e.user_name})).map((function(e){return e.amount})),a=(t/2).toFixed(2),i=n.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),o=-1*n.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0),u=i-o-a,l=c.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),j=-1*c.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0),d=l-j-a;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Total Income Seldon"}),Object(s.jsx)("p",{id:"money-plus",className:"money plus",children:N(i)})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Total Expense Seldon"}),Object(s.jsx)("p",{id:"money-minus",className:"money minus",children:N(o)})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h4",{children:["To Be ",u<0?"Credited":"Debited"]}),Object(s.jsx)("p",{id:"money-minus",className:u<0?"money plus":"money minus",children:N(u)})]})]}),Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Total Income Lester"}),Object(s.jsx)("p",{id:"money-plus",className:"money plus",children:N(l)})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Total Expense Lester"}),Object(s.jsx)("p",{id:"money-minus",className:"money minus",children:N(j)})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h4",{children:["To Be ",d<0?"Credited":"Debited"]}),Object(s.jsx)("p",{id:"money-minus",className:d<0?"money plus":"money minus",children:N(d)})]})]})]})},C=n(20),_=n.n(C),E=function(e){var t=e.transaction,n=Object(r.useContext)(m),c=n.deleteTransaction,a=n.transaction_key,i=t.amount<0?"-":"+";return Object(s.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[_()(t.date).format("DD-MM-YYYY")," \xa0 \xa0",t.description,"(",t.user_name,") ",Object(s.jsxs)("span",{children:[i,"\u20b9",Math.abs(t.amount)]}),Object(s.jsx)("button",{className:"delete-btn",onClick:function(){return c(t._id,a)},children:"x"})]})},S=function(){var e,t=Object(r.useContext)(m),n=t.transactions,c=t.getTransactions,a=t.error;return Object(r.useEffect)((function(){c()}),[]),e=a?Object(s.jsx)("div",{className:"alert alert-error",children:Object(s.jsxs)("p",{children:["Error Message:",a]})}):Object(s.jsx)("div",{}),Object(s.jsxs)("div",{children:[e,Object(s.jsx)("h3",{children:"History"}),Object(s.jsx)("ul",{className:"list",children:n.map((function(e){return Object(s.jsx)(E,{transaction:e},e._id)}))})]})},R=n(70),k=n.n(R),g=(n(99),function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),i=Object(j.a)(a,2),o=i[0],u=i[1],l=Object(r.useState)(new Date),d=Object(j.a)(l,2),b=d[0],O=d[1],p=Object(r.useState)(""),x=Object(j.a)(p,2),h=x[0],f=x[1],v=Object(r.useContext)(m),y=v.addTransaction,T=v.transaction_key,N=v.setTransactionKey;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Add new transaction"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={description:n,amount:+o,user_name:h,date:_()(b).format("YYYY-MM-DD[T00:00:00.000Z]")};y(t,T)},children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"text",children:"Description"}),Object(s.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(s.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(s.jsx)("input",{type:"number",value:o,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"transactionDate",children:"Transaction Date"}),Object(s.jsx)("br",{}),Object(s.jsx)(k.a,{dateFormat:"dd-M-yyyy",selected:b,onChange:function(e){return O(e)}})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"transactionDate",children:"Transaction User"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"select",children:Object(s.jsxs)("select",{value:h,onChange:function(e){return f(e.target.value)},children:[Object(s.jsx)("option",{value:""}),Object(s.jsx)("option",{value:"Seldon",children:"Seldon"}),Object(s.jsx)("option",{value:"Lester",children:"Lester"})]})})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"trans_key",children:"Transaction Key"}),Object(s.jsx)("input",{type:"text",onChange:function(e){return N(e.target.value)},placeholder:"Enter text..."})]}),Object(s.jsx)("button",{className:"btn",children:"Add transaction"})]})]})});n(185);var D=function(){return Object(s.jsxs)(f,{children:[Object(s.jsx)(i,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(v,{}),Object(s.jsx)(T,{}),Object(s.jsx)(A,{}),Object(s.jsx)(S,{}),Object(s.jsx)(g,{})]})]})};a.a.render(Object(s.jsx)(D,{}),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.e3f77913.chunk.js.map