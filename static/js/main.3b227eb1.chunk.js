(this["webpackJsonppubg-score"]=this["webpackJsonppubg-score"]||[]).push([[0],{26:function(e,a,t){e.exports=t(44)},31:function(e,a,t){},32:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(23),r=t.n(l),o=(t(31),t(7)),m=t(5),i=(t(32),t(17)),s=t(16),u=t(13),d=t.n(u);t(33);d.a.initializeApp({apiKey:"AIzaSyDqTHY4zj2afSxGaPt_z9k2Rcs9YcsubcE",authDomain:"pubgscorecompute.firebaseapp.com",databaseURL:"https://pubgscorecompute.firebaseio.com",projectId:"pubgscorecompute",storageBucket:"pubgscorecompute.appspot.com",messagingSenderId:"449947130172",appId:"1:449947130172:web:6a4ad66df450343642e639",measurementId:"G-SR0L6FPTYS"});var p=d.a.firestore();t(37);function f(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(1),o=Object(s.a)(r,2),m=o[0],u=o[1];Object(n.useEffect)((function(){p.collection("TeamName").get().then((function(e){e.forEach((function(e){var a=e.data();a.firstName,a.secondName;l((function(e){return[].concat(Object(i.a)(e),[a.firstName])})),l((function(e){return[].concat(Object(i.a)(e),[a.secondName])}))}))}))}),[]);var d=function(e){var a=document.querySelector("#pushData"),t=a.playerName.value,n=a.playerKill.value,c=a.restPlayerKill.value,l=0,r=0;t==e.data().firstName?(l=parseInt(n),""!==e.data().secondName&&(r=parseInt(c))):(""!==e.data().secondName&&(r=parseInt(n)),l=parseInt(c));var o,i,s,d=(o=m,i=l+r,s=e.data().score,[0,250,240,235,230,225,220,215,210,205,200,195,190,185,180,175][parseInt(o)]+4*parseInt(i)+parseInt(s));p.collection("TeamName").doc(e.id).update({firstKill:l+e.data().firstKill,secondKill:r+e.data().secondKill,score:d});u(m%9+1),a.playerName.value="",a.playerKill.value="",a.restPlayerKill.value=""};return c.a.createElement("ul",{id:"fillOut"},c.a.createElement("li",null,c.a.createElement("form",{id:"pushData"},c.a.createElement("span",null,"Rank: ",m),c.a.createElement("input",{list:"playerName",name:"playerName"}),c.a.createElement("datalist",{id:"playerName",placeholder:"Your name.."},t.map((function(e){return c.a.createElement("option",null,e)}))),c.a.createElement("input",{name:"playerKill",placeholder:"First kill.."}),c.a.createElement("input",{name:"restPlayerKill",placeholder:"Second kill.."}),c.a.createElement("button",{onClick:function(e){e.preventDefault();var a=document.querySelector("#pushData").playerName.value;p.collection("TeamName").get().then((function(e){e.forEach((function(e){a!=e.data().firstName&&a!=e.data().secondName||d(e)}))}))}},"Submit"))))}t(38);var N=function(){var e=0;Object(n.useEffect)((function(){a()}));var a=function(){p.collection("TeamName").orderBy("score","desc").onSnapshot((function(e){e.docChanges().forEach((function(e){console.log(e.doc.data(),e.type),"added"!=e.type&&"modified"!=e.type||t(e.doc)}))}))},t=function(a){e++;var t=document.querySelector("#team"),n=document.createElement("li"),c=document.createElement("span"),l=document.createElement("span"),r=document.createElement("div"),o=document.createElement("span"),m=document.createElement("span"),i=document.createElement("div"),s=document.createElement("span"),u=document.createElement("span"),d=document.createElement("span");r.className="name",i.className="kill",o.className="rank",o.className="firstName",m.className="secondName",s.className="firstKill",u.className="secondKill",d.className="score",n.setAttribute("data-id",a.id),c.textContent=e,l.textContent=a.id,o.textContent=a.data().firstName,m.textContent=a.data().secondName,s.textContent=a.data().firstKill,u.textContent=a.data().secondKill,d.textContent=a.data().score,r.appendChild(o),r.appendChild(m),i.appendChild(s),i.appendChild(u),n.appendChild(c),n.appendChild(l),n.appendChild(r),n.appendChild(i),n.appendChild(d),null!==t&&t.appendChild(n)};return c.a.createElement("div",{className:"showScore"},c.a.createElement("ul",{id:"team"},c.a.createElement("li",{className:"head"},c.a.createElement("span",null,"Rank"),c.a.createElement("span",null,"Team"),c.a.createElement("span",null,"Name"),c.a.createElement("span",null,"Kill"),c.a.createElement("span",null,"Score"))))};function E(){return c.a.createElement("form",{id:"create-form"},c.a.createElement("input",{placeholder:"teamName",name:"teamName"}),c.a.createElement("input",{placeholder:"firstName",name:"firstName"}),c.a.createElement("input",{placeholder:"secondName",name:"secondName"}),c.a.createElement("button",{onClick:function(e){e.preventDefault();var a=document.querySelector("#create-form"),t=a.teamName.value,n=a.firstName.value,c=a.secondName.value;p.collection("TeamName").doc(t).set({firstName:n,secondName:c,firstKill:0,secondKill:0,score:0}),a.teamName.value="",a.firstName.value="",a.secondName.value=""}},"Create"))}t(39);function h(){return c.a.createElement("div",{className:"navBar"},c.a.createElement(o.b,{to:"/",className:"navBar-Link"},"Fill Out"),c.a.createElement(o.b,{to:"/Edit",className:"navBar-Link"},"Show Score"),c.a.createElement(o.b,{to:"/Create",className:"navBar-Link"},"Create"))}var v=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(m.a,{path:"/",exact:!0,component:f}),c.a.createElement(m.a,{path:"/Edit",component:N}),c.a.createElement(m.a,{path:"/Create",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.3b227eb1.chunk.js.map