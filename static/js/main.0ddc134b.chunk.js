(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{278:function(e,t,a){},280:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(109),c=a.n(r),u=a(7),i=a(3),o=a(76),s=a(111),h=(a(311),a(432)),m=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)(function(){fetch("http://localhost:8004/lectureCollection/").then(function(e){return e.json()}).then(function(e){return c(e)})},[]),console.log("lectures",r);var u=Object(n.useState)(""),m=Object(i.a)(u,2),b=(m[0],m[1],Object(n.useState)("")),d=Object(i.a)(b,2),E=d[0],f=d[1],p=r.filter(function(e){return e.lectureID.includes(E)}),C=E.length>0;return l.a.createElement("div",null,l.a.createElement("h1",null,"View Lecture"),l.a.createElement(h.a,{type:"text",fullWidth:!0,className:"searchBar",onChange:function(e){f(e.target.value)},value:E,placeholder:"Search by ID"}),C&&l.a.createElement("button",{onClick:function(){f("")}},"Clear"),p.map(function(e){return l.a.createElement(o.a,{className:"card",key:e.id},l.a.createElement(o.a.Body,null,l.a.createElement(o.a.Subtitle,null,l.a.createElement("p",null,e.lectureID),l.a.createElement("p",{className:"editID"},"EditID: ",e.id)),l.a.createElement(s.a,null,l.a.createElement(s.a.Item,{eventKey:"0"},l.a.createElement(s.a.Header,null,e.lectureTitle),l.a.createElement(s.a.Body,null,e.lectureContent)))))}))},b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){fetch("http://localhost:8004/lectureCollection").then(function(e){return e.json()}).then(function(e){return r(e)})},[]),l.a.createElement("div",null,l.a.createElement(m,{lectures:a}))},d=function(){return l.a.createElement("div",null,l.a.createElement(b,null))},E=a(428),f=a(429),p=a(427),C=a(426),g=a(431),v=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)("Choose wisely"),s=Object(i.a)(u,2),h=s[0],m=s[1];console.log("quizzes quiz ",e.quiz);var b=e.quiz.correctAnswer;return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(o.a.Body,null,l.a.createElement(o.a.Title,null,e.quiz.quizQuestion),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m(r===b?"Correct!":"Try Again")}},l.a.createElement(E.a,null,l.a.createElement(f.a,{row:!0,onChange:function(e){c(e.target.value)}},l.a.createElement(p.a,{control:l.a.createElement(C.a,null),value:e.quiz.potentialAnswers[0],label:e.quiz.potentialAnswers[0]}),l.a.createElement(p.a,{control:l.a.createElement(C.a,null),value:e.quiz.potentialAnswers[1],label:e.quiz.potentialAnswers[1]}),l.a.createElement(p.a,{control:l.a.createElement(C.a,null),value:e.quiz.potentialAnswers[2],label:e.quiz.potentialAnswers[2]}),l.a.createElement(p.a,{control:l.a.createElement(C.a,null),value:e.quiz.potentialAnswers[3],label:e.quiz.potentialAnswers[3]})),l.a.createElement(g.a,{type:"submit"},"Submit"))),l.a.createElement("p",null,h))))},j=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(0),o=Object(i.a)(u,2),s=o[0],h=o[1],m=Object(n.useState)(r[0]),b=Object(i.a)(m,2),d=b[0],E=b[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),C=p[0],g=p[1];Object(n.useEffect)(function(){fetch("http://localhost:8001/quizCollection").then(function(e){return e.json()}).then(function(e){return c(e)})},[]);var j=function(e){"start"==e.target.name?(g(!0),h(0),E(r[s])):"next"==e.target.name?(h(s+1),E(r[s])):"previous"==e.target.name&&(h(s-1),E(r[s]))};return l.a.createElement("div",null,C&&l.a.createElement(v,{quiz:d}),!C&&l.a.createElement("button",{name:"start",onClick:j},"Start"),C&&l.a.createElement("button",{name:"previous",onClick:j},"Previous"),C&&l.a.createElement("button",{name:"next",onClick:j},"Next"))},O=a(31),w=a(24),S=a(35),z=a(22),y=a(36),A=(a(325),l.a.Component,function(){return l.a.createElement("div",null,l.a.createElement(j,null))}),I=a(34),D=a(424),q=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(S.a)(this,Object(z.a)(t).call(this,e))).state={quizID:"",quizQuestion:"",potentialAnswers:[],correctAnswer:"",indexOfCorrectAnswer:0,ans0:"",ans1:"",ans2:"",ans3:""},a.handleQuizIDChange=a.handleQuizIDChange.bind(Object(I.a)(Object(I.a)(a))),a.handleQuizQuestionChange=a.handleQuizQuestionChange.bind(Object(I.a)(Object(I.a)(a))),a.handlePotentialAnswer0Change=a.handlePotentialAnswer0Change.bind(Object(I.a)(Object(I.a)(a))),a.handlePotentialAnswer1Change=a.handlePotentialAnswer1Change.bind(Object(I.a)(Object(I.a)(a))),a.handlePotentialAnswer2Change=a.handlePotentialAnswer2Change.bind(Object(I.a)(Object(I.a)(a))),a.handlePotentialAnswer3Change=a.handlePotentialAnswer3Change.bind(Object(I.a)(Object(I.a)(a))),a.handleRadioChange=a.handleRadioChange.bind(Object(I.a)(Object(I.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(I.a)(Object(I.a)(a))),a}return Object(y.a)(t,e),Object(w.a)(t,[{key:"handleQuizIDChange",value:function(e){this.setState(function(){return{quizID:e.target.value}})}},{key:"handleQuizQuestionChange",value:function(e){this.setState(function(){return{quizQuestion:e.target.value}})}},{key:"handlePotentialAnswer0Change",value:function(e){this.setState(function(){return{ans0:e.target.value}})}},{key:"handlePotentialAnswer1Change",value:function(e){this.setState(function(){return{ans1:e.target.value}})}},{key:"handlePotentialAnswer2Change",value:function(e){this.setState(function(){return{ans2:e.target.value}})}},{key:"handlePotentialAnswer3Change",value:function(e){this.setState(function(){return{ans3:e.target.value}})}},{key:"handleRadioChange",value:function(e){this.setState(function(){return{correctAnswer:e.target.value}}),console.log(this.state.correctAnswer)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.potentialAnswers.push(this.state.ans0),this.state.potentialAnswers.push(this.state.ans1),this.state.potentialAnswers.push(this.state.ans2),this.state.potentialAnswers.push(this.state.ans3);var t=this.state.quizID,a=this.state.quizQuestion,n=this.state.potentialAnswers,l=this.state.correctAnswer,r=this.state.indexOfCorrectAnswer;fetch("http://localhost:8001/quizCollection",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({quizID:t,quizQuestion:a,potentialAnswers:n,correctAnswer:l,indexOfCorrectanswer:r})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},l.a.createElement(D.a,{label:"Quiz ID",onChange:this.handleQuizIDChange}),l.a.createElement(D.a,{label:"Quiz Question",multiline:!0,rows:4,fullWidth:!0,onChange:this.handleQuizQuestionChange}),l.a.createElement(f.a,{onChange:this.handleRadioChange},l.a.createElement(D.a,{placeholder:"Answer0",onChange:this.handlePotentialAnswer0Change}),l.a.createElement(p.a,{control:l.a.createElement(C.a,null),value:this.state.ans0,label:this.state.ans0,name:"radio"}),l.a.createElement(D.a,{placeholder:"Answer1",onChange:this.handlePotentialAnswer1Change}),l.a.createElement("br",null),l.a.createElement(p.a,{control:l.a.createElement(C.a,null),value:this.state.ans1,label:this.state.ans1,name:"radio"}),l.a.createElement(D.a,{placeholder:"Answer2",onChange:this.handlePotentialAnswer2Change}),l.a.createElement("br",null),l.a.createElement(p.a,{control:l.a.createElement(C.a,null),value:this.state.ans2,label:this.state.ans2,name:"radio"}),l.a.createElement(D.a,{placeholder:"Answer3",onChange:this.handlePotentialAnswer3Change}),l.a.createElement("br",null),l.a.createElement(p.a,{control:l.a.createElement(C.a,null),value:this.state.ans3,label:this.state.ans3,name:"radio"})),l.a.createElement(g.a,{type:"submit"},"Save")))}}]),t}(l.a.Component),Q=a(124),k=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(S.a)(this,Object(z.a)(t).call(this,e))).state={lectureID:"",lectureTitle:"",lectureContent:""},a.handleTitleChange=a.handleTitleChange.bind(Object(I.a)(Object(I.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(I.a)(Object(I.a)(a))),a.handleContentChange=a.handleContentChange.bind(Object(I.a)(Object(I.a)(a))),a.handleLectureIDChange=a.handleLectureIDChange.bind(Object(I.a)(Object(I.a)(a))),a}return Object(y.a)(t,e),Object(w.a)(t,[{key:"handleLectureIDChange",value:function(e){this.setState(function(){return{lectureID:e.target.value}})}},{key:"handleTitleChange",value:function(e){this.setState(function(){return{lectureTitle:e.target.value}})}},{key:"handleContentChange",value:function(e){this.setState(function(){return{lectureContent:e.target.value}})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.lectureID,a=this.state.lectureTitle,n=this.state.lectureContent;fetch("http://localhost:8004/lectureCollection",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({lectureID:t,lectureTitle:a,lectureContent:n})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit,className:"lecture-form"},l.a.createElement(D.a,{label:"Lecture ID",onChange:this.handleLectureIDChange}),l.a.createElement("br",null),l.a.createElement(D.a,{label:"Lecture Title",fullWidth:!0,onChange:this.handleTitleChange}),l.a.createElement("br",null),l.a.createElement(D.a,{label:"Lecture Content",multiline:!0,fullWidth:!0,rows:10,onChange:this.handleContentChange}),l.a.createElement(Q.a,{className:"btn btn-primary",type:"submit"},"Save Lecture")))}}]),t}(l.a.Component),P=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Home Page"))};a(16),a(149),a(278);var T=a(150),L=a(291),N=a(151),x=a(60);a(280);function B(){return l.a.createElement(N.a,{className:"navbar"},l.a.createElement(T.a,null,l.a.createElement(L.a,null,l.a.createElement(L.a.Link,{href:"/home"},"Home"),l.a.createElement(x.a,{title:"Lecture"},l.a.createElement(x.a.Item,{href:"/lectures-create"},"New Lecture"),l.a.createElement(x.a.Item,{href:"/lectures-display"},"View Lectures"),l.a.createElement(x.a.Item,{href:"/lectures-edit"},"Edit Lectures")),l.a.createElement(x.a,{title:"Quiz"},l.a.createElement(x.a.Item,{href:"/quizzes-create"},"New Quiz"),l.a.createElement(x.a.Item,{href:"/quizzes-display"},"View Quizzes"),l.a.createElement(x.a.Item,{href:"/quizzes-all-display"},"View All Quizzes")))))}var J=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)(function(){fetch("http://localhost:8003/lectureCollection").then(function(e){return e.json()}).then(function(e){return c(e)})},[]);console.log("wantedID ",e.wantedID);var u={};console.log(r);for(var o=0;o<r.length;o++)"day1"==r[o].lectureID&&(u=r[o]);return console.log(u),console.log(u.lectureTitle),l.a.createElement("div",null,l.a.createElement("h1",null,u.lectureTitle),l.a.createElement("p",null,u.lectureContent))},R=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)(function(){fetch("http://localhost:8004/lectureCollection").then(function(e){return e.json()}).then(function(e){return c(e)})},[]);var u=Object(n.useState)(""),o=Object(i.a)(u,2),s=(o[0],o[1],Object(n.useState)("")),h=Object(i.a)(s,2),m=h[0],b=h[1],d=Object(n.useState)(""),E=Object(i.a)(d,2),f=E[0],p=E[1],C=Object(n.useState)(""),g=Object(i.a)(C,2),v=g[0],j=g[1],O=Object(n.useState)(""),w=Object(i.a)(O,2),S=w[0],z=(w[1],Object(n.useState)([])),y=Object(i.a)(z,2),A=y[0],I=y[1],D=Object(n.useState)({}),q=Object(i.a)(D,2),Q=(q[0],q[1]),k=S.length>0,P=Object(n.useState)(""),T=Object(i.a)(P,2),L=(T[0],T[1],function(e){j(e.target.value)});return l.a.createElement("div",null,l.a.createElement("h1",null,"Edit Lecture"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("wantedID ",v);var t=r.filter(function(e){return e.lectureID.includes(v)});console.log("temp ",t),I(t),Q(A[0])}},l.a.createElement("input",{type:"text",onChange:L,placeholder:"Search by ID",value:v}),l.a.createElement("button",null,"Submit")),k&&l.a.createElement("button",{onClick:function(e){e.preventDefault(),j("")}},"Clear"),A.map(function(e){return l.a.createElement("div",null,l.a.createElement("input",{value:e.lectureID,onChange:L}),l.a.createElement("h2",null,e.lectureID),l.a.createElement("h2",null,e.lectureTitle),l.a.createElement("p",null,e.lectureContent))}),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=A[0].id,a=A[0].lectureID;console.log("editID",a);var n=m,l=f;fetch("http://localhost:8004/lectureCollection/"+t,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({lectureID:a,lectureTitle:n,lectureContent:l})})}},l.a.createElement("input",{type:"text",onChange:function(e){b(e.target.value)},placeholder:"Edit Title"}),l.a.createElement("br",null),l.a.createElement("textarea",{type:"text",onChange:function(e){p(e.target.value)},placeholder:"Edit Content"}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Save Edit"),l.a.createElement("br",null)))},V=(a(289),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){fetch("http://localhost:8001/quizCollection").then(function(e){return e.json()}).then(function(e){return r(e)})},[]),l.a.createElement("div",null,a.map(function(e){return l.a.createElement(v,{quiz:e})}))});var W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(B,null)),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/home",element:l.a.createElement(P,null)}),l.a.createElement(u.a,{path:"/lectures-create",element:l.a.createElement(k,null)}),l.a.createElement(u.a,{path:"/lectures-display",element:l.a.createElement(d,null)}),l.a.createElement(u.a,{path:"/lectures-edit",element:l.a.createElement(R,null)}),l.a.createElement(u.a,{path:"/quizzes-create",element:l.a.createElement(q,null)}),l.a.createElement(u.a,{path:"/quizzes-display",element:l.a.createElement(A,null)}),l.a.createElement(u.a,{path:"/quizzes-all-display",element:l.a.createElement(V,null)}),l.a.createElement(u.a,{path:"/single-lecture-display",element:l.a.createElement(J,null)}," ")))},H=a(146);a(286);c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H.a,null,l.a.createElement(W,null))))},304:function(e,t,a){e.exports=a(288)},311:function(e,t,a){}},[[304,2,1]]]);
//# sourceMappingURL=main.0ddc134b.chunk.js.map