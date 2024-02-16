import{r,p as x,j as s,H as h,T as m,L as c,R as l,B as d}from"./index-SMcEeSU_.js";import{u as o}from"./userApiService-tE94rsL4.js";function f(){var t;const[e,n]=r.useState(),{id:i}=x();return r.useEffect(()=>{(async()=>{if(i)try{const a=await o.getUser(i);n(a.data)}catch{console.error("Something went wrong")}})()},[i]),e?s.jsxs(s.Fragment,{children:[s.jsxs(h,{children:[s.jsx("title",{children:"ユーザー情報"}),s.jsx("meta",{name:"description",content:"ユーザー情報"})]}),s.jsx("div",{className:"",children:s.jsxs("section",{className:"",children:[s.jsx(m,{children:"ユーザー情報"}),s.jsx("div",{className:"text-right mt-2",children:s.jsx(c,{to:l.USER.EDIT.replace(":id",e.userId.toString()),children:s.jsx(d,{children:"編集"})})}),s.jsx("div",{className:"bg-white py-6 border mt-2",children:s.jsx("div",{className:"",children:s.jsx("div",{className:"col-xs-12 text-center",children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"w-1/3 text-right pr-4 font-bold",children:"ユーザーID"}),s.jsx("div",{className:"",children:e==null?void 0:e.userId})]}),s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"w-1/3 text-right pr-4 font-bold",children:"ユーザー名"}),s.jsx("div",{className:"",children:e==null?void 0:e.userName})]}),s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"w-1/3 text-right pr-4 font-bold",children:"ユーザーグループ"}),s.jsx("div",{className:"",children:(t=e==null?void 0:e.group)==null?void 0:t.userGroupName})]}),s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"w-1/3 text-right pr-4 font-bold",children:"メールアドレス"}),s.jsx("div",{className:"",children:e==null?void 0:e.userEmailAddress})]}),s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"w-1/3 text-right pr-4 font-bold",children:"ユーザー有効期限"}),s.jsxs("div",{className:"",children:[e==null?void 0:e.userStartDate,"~",e==null?void 0:e.userEndDate]})]}),s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"w-1/3 text-right pr-4 font-bold",children:"ユーザーロック"}),s.jsx("div",{className:"",children:(e==null?void 0:e.userLockoutFlg)===0?"利用可能":"ユーザーロック中のため利用不可"})]})]})})})}),s.jsx("div",{className:"text-center mt-4",children:s.jsx(c,{to:l.USER.LIST,children:s.jsx(d,{variant:"light",children:"戻る"})})})]})})]}):s.jsx("div",{})}export{f as UserDetail};