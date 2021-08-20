import{c as e,D as a,u as t,a as n,R as l,C as r,T as o,m as c,b as i,d as s,A as m,e as g,f as d,g as u,h as p,L as f,i as h,j as E,k as v,l as w,n as b,o as y,p as L,q as C,r as k,s as N,I as x,t as S,v as P,w as R,x as j,G as F,y as _,z as U,B as T,E as z,S as B,F as D,H as G,J as I,P as q}from"./vendor.bf7fd4a6.js";const A="https://api.github.com/users/",H=e({name:"gitdata",initialState:{isLoading:!1,user:{},repos:[],following:[],starred:[]},reducers:{fetchUser:(e,a)=>{e.user=a.payload},fetchUserRepos:(e,a)=>{e.repos=a.payload},fetchStarred:(e,a)=>{e.starred=a.payload},fetchFollowing:(e,a)=>{e.following=a.payload},dataLoading:e=>{e.isLoading=!e.isLoading}}}),{fetchUser:J,fetchUserRepos:Q,fetchStarred:V,fetchFollowing:W,dataLoading:K}=H.actions;var M=H.reducer;const O=e=>{const[c,i]=a.exports.useState(""),s=t();n((e=>e.gitdata.isLoading));return l.createElement(r,null,l.createElement("form",{noValidate:!0,onSubmit:a=>{a.preventDefault(),s(K()),fetch(A+c).then((e=>e.json())).then((e=>{console.log(e),s(J(e)),Promise.all([fetch(e.repos_url),fetch(A+c+"/starred"),fetch(A+c+"/following")]).then((e=>Promise.all(e.map((e=>e.json()))))).then((e=>{console.log(e),s(Q(e[0])),s(V(e[1])),s(W(e[2])),s(K())}))})).then((()=>e.history.push("/gitlev/about")))}},l.createElement(o,{variant:"outlined",fullWidth:!0,label:"username",value:c,onChange:e=>i(e.target.value),placeholder:"type in the user name"})))},X=c((e=>({nav:{display:"flex"},appbar:{width:"calc(100% - 200px)",marginLeft:200},drawer:{width:200},drawerPaper:{width:200},content:{width:"100%",padding:e.spacing(3)},toolbar:e.mixins.toolbar,img:{width:"100%",padding:e.spacing(3)},activePath:{background:"#f4f4f4"}}))),Y=({children:e})=>{const a=i(),t=s(),r=X();n((e=>e.gitdata.user));const o=[{name:"root",path:"/gitlev/",icon:l.createElement(w,null)},{name:"about",path:"/gitlev/about",icon:l.createElement(b,null)},{name:"repos",path:"/gitlev/repos",icon:l.createElement(y,null)},{name:"starred",path:"/gitlev/starred",icon:l.createElement(L,null)},{name:"following",path:"/gitlev/following",icon:l.createElement(C,null)}];return l.createElement("div",{className:r.nav},l.createElement(m,{elevation:1,position:"fixed",className:r.appbar},l.createElement(g,null)),l.createElement(d,{className:r.drawer,variant:"permanent",classes:{paper:r.drawerPaper},anchor:"left"},l.createElement(u,{className:r.toolbar,variant:"h5",align:"center"},"Gitlev"),l.createElement(p,null),l.createElement(f,null,o.map((e=>l.createElement(h,{className:t.pathname===e.path?r.activePath:null,button:!0,onClick:()=>a.push(e.path),key:e.name},l.createElement(E,null,e.icon),l.createElement(v,{primary:e.name})))))),l.createElement("main",{className:r.content},l.createElement("div",{className:r.toolbar}),e))},Z=c((e=>({root:{margin:e.spacing(2)},chip:e=>{if(e.language){if("python"==e.language.toLowerCase())return{backgroundColor:"#3f51b5",color:"#fff"};if("javascript"==e.language.toLowerCase())return{backgroundColor:"#fdd835",color:"#fff"};if("c"==e.language.toLowerCase())return{backgroundColor:"#e91e63",color:"#fff"};if("c++"==e.language.toLowerCase())return{backgroundColor:"#9c27b0",color:"#fff"};if("html"==e.language.toLowerCase())return{backgroundColor:"#2196f3",color:"#fff"};if("ruby"==e.language.toLowerCase())return{backgroundColor:"#f50057",color:"#fff"};if("typescript"==e.language.toLowerCase())return{backgroundColor:"#0d47a1",color:"#fff"};if("css"==e.language.toLowerCase())return{backgroundColor:"#009688",color:"#fff"}}}}))),$=({repo:e})=>{const a=Z(e);return l.createElement(k,{variant:"outlined",className:a.root},l.createElement(N,{disableTypography:!0,action:l.createElement(x,{onClick:()=>window.open(e.html_url,"_blank")},l.createElement(S,null)),title:l.createElement(u,{variant:"h6"},e.name),subheader:l.createElement(u,{variant:"body2"},e.description)}),l.createElement(P,null,e.language?l.createElement(R,{className:a.chip,size:"small",className:a.chip,label:e.language}):null))},ee=()=>{const e=n((e=>e.gitdata.repos)),a=n((e=>e.gitdata.isLoading));return l.createElement("div",null,a?l.createElement("p",null,"Loading..."):e.length?e.map((e=>l.createElement($,{repo:e,key:e.id}))):l.createElement("p",null,"No repos to show yet!"))},ae=()=>{const e=n((e=>e.gitdata.starred)),a=n((e=>e.gitdata.isLoading));return l.createElement("div",null,a?l.createElement("p",null,"Loading..."):e.length?e.map((e=>l.createElement($,{repo:e,key:e.id}))):l.createElement("p",null,"No starred to show yet!"))},te=j((e=>({root:{display:"flex",margin:e.spacing(2)},cover:{width:100,height:100,overflow:"hidden",borderRadius:"50%"},image:{width:"100%"},content:{alignSelf:"center",margin:e.spacing(2)},github:{}}))),ne=({user:e})=>{const a=te();return l.createElement(F,{item:!0,xs:12,md:6},l.createElement("div",{className:a.root},l.createElement("div",{className:a.cover},l.createElement("img",{className:a.image,src:e.avatar_url,alt:e.login})),l.createElement("div",{className:a.content},l.createElement(u,null,e.login))))},le=()=>{const e=n((e=>e.gitdata.following)),a=n((e=>e.gitdata.isLoading));return l.createElement(r,null,l.createElement(F,{container:!0},a?l.createElement("p",null,"Loading..."):e.length?e.map((e=>l.createElement(ne,{user:e,key:e.id}))):l.createElement(u,null,"No following to show yet!")))},re=j((e=>({cover:{width:"150px",borderRadius:"50%",overflow:"hidden"},image:{width:"100%"}}))),oe=()=>{const e=n((e=>e.gitdata.user));console.log(e);const a=n((e=>e.gitdata.isLoading)),t=re();return l.createElement(r,null,a?l.createElement("p",null,"Loading..."):e.login?l.createElement(l.Fragment,null,l.createElement("div",{className:t.cover},l.createElement("img",{className:t.image,src:e.avatar_url,alt:e.login})),l.createElement(u,{variant:"h6"},e.name),l.createElement(u,{variant:"body2"},"@",e.login),l.createElement(u,{variant:"caption"},e.bio)):l.createElement("p",null,"not defined"))},ce=_({typography:{fontFamily:'"Quicksand", sans-serif'},palette:{yellowish:{light:U[300],main:U[400],dark:U[500],contrastText:"#fff"}}});function ie(){return console.log(ce),l.createElement(T,{theme:ce},l.createElement(z,null,l.createElement(Y,null,l.createElement(B,null,l.createElement(D,{exact:!0,path:"/gitlev/",component:O}),l.createElement(D,{path:"/gitlev/about",component:oe}),l.createElement(D,{path:"/gitlev/Repos",component:ee}),l.createElement(D,{path:"/gitlev/Starred",component:ae}),l.createElement(D,{path:"/gitlev/following",component:le})))))}var se=G({reducer:{gitdata:M}});I.render(l.createElement(q,{store:se},l.createElement(ie,null)),document.getElementById("root"));
