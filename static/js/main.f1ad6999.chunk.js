(this["webpackJsonptheta-upsilon-fundraisers"]=this["webpackJsonptheta-upsilon-fundraisers"]||[]).push([[0],{72:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),r=a(12),c=a.n(r),i=a(47),l=a(13),o=a(56),s=a(107),d=a(108),j=a(125),b=a(114),u=a(118),m=a(119),h=a(121),x=a(105),f=a(44),O=a.n(f),g=a(109),v=a(127),p=a(126),y=a(112),Q=a(113),B=a(116),P=a(5),E=a(111),W=a(128),Z=a(115),N=a(117),D=a(120),S=a(123),I=a(2);Number.MAX_SAFE_INTEGER;function C(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}var X=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],A=t[1],r=Object(n.useState)([]),c=Object(l.a)(r,2),u=c[0],m=c[1];Object(n.useEffect)((function(){A(!0),O.a.parse("".concat("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2jIahMs8a0-K-ulxb5DYGBEumd7iJQFAVOpFss2wSM4WHSVyaizMyxtWKI_yno4M6kVdrNj5byZnW/pub?gid=0&single=true","&output=csv"),{download:!0,header:!0,complete:function(e){var t=e.data;m(t.map((function(e){return{name:e.name,zeta:e.zeta,amount:parseFloat(e.amount.replace("$","")),date:new Date(e.date)}}))),A(!1)}})}),[]);var h=Object(n.useState)({donationGoal:0,deadline:new Date,title:"",moreInfo:"more info",paypalEmail:"",venmoUser:"",zelleEmail:"",mailCheckAddress:""}),f=Object(l.a)(h,2),B=f[0],P=f[1];console.log({properties:B}),Object(n.useEffect)((function(){A(!0),O.a.parse("".concat("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2jIahMs8a0-K-ulxb5DYGBEumd7iJQFAVOpFss2wSM4WHSVyaizMyxtWKI_yno4M6kVdrNj5byZnW/pub?gid=1502649564&single=true","&output=csv"),{download:!0,header:!0,complete:function(e){var t=e.data;P((function(){var e=t[0];return{donationGoal:parseFloat(e.donationGoal),deadline:new Date(e.deadline),title:e.title,moreInfo:e.moreInfo,paypalEmail:e.paypalEmail,venmoUser:e.venmoUser,zelleEmail:e.zelleEmail,mailCheckAddress:e.mailCheckAddress}})),A(!1)}})}),[]),Object(n.useMemo)((function(){var e,t=Number.MAX_SAFE_INTEGER,a=Number.MIN_SAFE_INTEGER,n=Object(i.a)(u);try{for(n.s();!(e=n.n()).done;){var A=e.value;t=Math.min(t,A.amount),a=Math.max(a,A.amount)}}catch(r){n.e(r)}finally{n.f()}return{min:t,max:a}}),[u]);var N,D=null===u||void 0===u?void 0:u.reduce((function(e,t){return e+t.amount}),0),S=Object(n.useState)(!1),X=Object(l.a)(S,2),k=X[0],J=X[1],z=Object(n.useState)(!1),K=Object(l.a)(z,2),G=K[0],Y=K[1],H=D/B.donationGoal,q=Object(n.useState)(!1),L=Object(l.a)(q,2),R=L[0],F=L[1],U=Object(n.useState)(!0),_=Object(l.a)(U,2);return _[0],_[1],Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{style:{margin:20},children:[Object(I.jsx)(x.a,{}),Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)("img",{src:"data:image/png;base64,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",style:{width:"100%",maxWidth:1e3},alt:"lca logo"}),Object(I.jsx)(o.a,{variant:"h3",children:"Theta Upsilon Zeta"}),Object(I.jsx)(o.a,{variant:"h2",children:B.title}),B.moreInfo&&Object(I.jsx)(v.a,{color:"primary",variant:"outlined",onClick:function(){return J(!0)},style:{marginBottom:15},children:"More Info"}),Object(I.jsx)(v.a,{color:"primary",variant:"contained",style:{fontSize:40,marginBottom:20},onClick:function(){return Y(!0)},children:"Donate Now"}),Object(I.jsx)(s.a,{style:{marginBottom:20,paddingLeft:30,paddingRight:30},children:Object(I.jsxs)(d.a,{children:[Object(I.jsx)(o.a,{variant:"h4",children:Object(I.jsx)("b",{children:"Time Left"})}),Object(I.jsx)(w,{targetDate:B.deadline})]})}),a?Object(I.jsx)(g.a,{size:48}):Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(o.a,{variant:"h1",children:C(D)}),Object(I.jsxs)(o.a,{children:["Raised of ",C(B.donationGoal)]}),Object(I.jsxs)(o.a,{children:["Total Donors: ",null===u||void 0===u?void 0:u.length]}),Object(I.jsx)(W.a,{title:(N=H,parseFloat(String(100*N)).toFixed(2)+"%"),children:Object(I.jsx)(T,{variant:"determinate",value:100*H,style:{width:"100%",marginTop:20,marginBottom:10}})})]})]}),Object(I.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:"Donations"}),a?Object(I.jsx)(E.a,{style:{marginTop:20}}):Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(V,{donations:u})})]}),Object(I.jsx)(j.a,{display:"flex",flexDirection:"row-reverse",children:Object(I.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/19EROMkzdELhWXkjH0ua-lBD-K_WPOKW6ErEsQjC3QHs/edit?gid=0",target:"_blank",rel:"noreferrer",style:{padding:5,textDecoration:"none"},children:"."})}),Object(I.jsx)(M,{showLetter:k,onClose:function(){return J(!1)},moreInfo:B.moreInfo}),Object(I.jsxs)(p.a,{open:G,onClose:function(){return Y(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0,children:[Object(I.jsx)(y.a,{id:"alert-dialog-title",children:"Donate"}),Object(I.jsxs)(Q.a,{style:{padding:20},children:[Object(I.jsxs)(b.a,{container:!0,spacing:2,children:[Object(I.jsx)(b.a,{item:!0,xs:12,children:Object(I.jsx)("a",{style:{textDecoration:"none"},href:"https://www.paypal.com/donate?business=".concat(encodeURI(B.paypalEmail),"&item_name=Donation&currency_code=USD"),target:"_blank",rel:"noreferrer",children:Object(I.jsx)(v.a,{variant:"contained",fullWidth:!0,children:"Paypal"})})}),Object(I.jsx)(b.a,{item:!0,xs:12,children:Object(I.jsx)("a",{style:{textDecoration:"none"},href:"https://venmo.com/".concat(B.venmoUser),target:"_blank",rel:"noreferrer",children:Object(I.jsx)(v.a,{variant:"contained",fullWidth:!0,children:"Venmo"})})}),Object(I.jsx)(b.a,{item:!0,xs:12,children:Object(I.jsx)(v.a,{variant:"contained",fullWidth:!0,onClick:function(){return alert(B.zelleEmail)},children:"Zelle"})}),Object(I.jsx)(b.a,{item:!0,xs:12,children:Object(I.jsx)(v.a,{variant:"contained",fullWidth:!0,onClick:function(){return F((function(e){return!e}))},children:"Cash / Check"})})]}),Object(I.jsxs)(Z.a,{in:R,children:[Object(I.jsx)("div",{style:{height:30}}),Object(I.jsx)(o.a,{variant:"h4",children:"Mailing Information"}),Object(I.jsx)(o.a,{variant:"caption",children:"Please send cash / checks to:"}),Object(I.jsx)("div",{style:{height:10}}),Object(I.jsx)(o.a,{style:{whiteSpace:"pre-line"},children:B.mailCheckAddress})]})]})]})]})},w=function(e){var t=e.targetDate,a=Object(n.useState)(void 0),A=Object(l.a)(a,2),r=A[0],c=A[1];function i(){var e=function(e){var t=(Date.parse(String(new Date(e)))-Date.parse(String(new Date)))/1e3;if(t<=0)return null;var a={years:0,days:0,hours:0,min:0,sec:0,millisec:0};return t>=31557600&&(a.years=Math.floor(t/31557600),t-=365.25*a.years*86400),t>=86400&&(a.days=Math.floor(t/86400),t-=86400*a.days),t>=3600&&(a.hours=Math.floor(t/3600),t-=3600*a.hours),t>=60&&(a.min=Math.floor(t/60),t-=60*a.min),a.sec=t,a}(t);c(e)}return Object(n.useEffect)((function(){i();var e=setInterval((function(){i()}),1e3);return function(){clearInterval(e)}}),[t]),Object(I.jsxs)(b.a,{container:!0,spacing:4,children:[Object(I.jsxs)(b.a,{item:!0,xs:3,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(o.a,{variant:"h3",children:null===r||void 0===r?void 0:r.days}),Object(I.jsx)(o.a,{children:"Days"})]}),Object(I.jsxs)(b.a,{item:!0,xs:3,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(o.a,{variant:"h3",children:null===r||void 0===r?void 0:r.hours}),Object(I.jsx)(o.a,{children:"Hours"})]}),Object(I.jsxs)(b.a,{item:!0,xs:3,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(o.a,{variant:"h3",children:null===r||void 0===r?void 0:r.min}),Object(I.jsx)(o.a,{children:"Minutes"})]}),Object(I.jsxs)(b.a,{item:!0,xs:3,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(o.a,{variant:"h3",children:null===r||void 0===r?void 0:r.sec}),Object(I.jsx)(o.a,{children:"Seconds"})]})]})},T=Object(P.a)((function(e){return{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}}))(E.a),M=function(e){var t=e.showLetter,a=e.moreInfo,n=e.onClose;return Object(I.jsxs)(p.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0,maxWidth:"lg",children:[Object(I.jsx)(y.a,{id:"alert-dialog-title",children:"More Info"}),Object(I.jsx)(Q.a,{children:Object(I.jsx)(B.a,{id:"alert-dialog-description",children:Object(I.jsx)(o.a,{style:{whiteSpace:"pre-line"},children:a})})})]})},V=function(e){var t=e.donations;return Object(I.jsx)(s.a,{style:{height:"100%"},children:Object(I.jsx)(d.a,{children:Object(I.jsxs)(N.a,{children:[Object(I.jsx)(u.a,{children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(D.a,{children:"Date"}),Object(I.jsx)(D.a,{children:"Name"}),Object(I.jsx)(D.a,{children:"Zeta"}),Object(I.jsx)(D.a,{children:"Amount"})]})}),Object(I.jsx)(h.a,{children:t.sort((function(e,t){return t.date.getTime()-e.date.getTime()})).map((function(e){var t=e.date,a=e.name,n=e.zeta,A=e.amount;return Object(I.jsxs)(m.a,{children:[Object(I.jsx)(D.a,{children:Object(S.a)(t,"P")}),Object(I.jsx)(D.a,{children:a}),Object(I.jsx)(D.a,{children:n}),Object(I.jsx)(D.a,{children:C(A)})]},a)}))})]})})})},k=a(53),J=a(129),z=a(122),K=Object(k.a)();K=Object(J.a)(K),c.a.render(Object(I.jsx)(A.a.StrictMode,{children:Object(I.jsx)(z.a,{theme:K,children:Object(I.jsx)(X,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f1ad6999.chunk.js.map