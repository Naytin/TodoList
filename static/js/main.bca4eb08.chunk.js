(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{128:function(t,e,a){},129:function(t,e,a){},161:function(t,e,a){"use strict";a.r(e);var n,i,s=a(2),o=a(0),d=a.n(o),c=a(9),r=a.n(c),l=(a(128),a(129),a(205)),u=a(206),j=a(207),f=a(208),b=a(198),p=a(163),O=a(201),h=a(209),m=a(210),g=a(110),x=a.n(g),y=a(13),v=a(20),C=a(87),I=a.n(C).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a409a2ec-60ad-4ff6-9051-8f6025edc2fd"}}),k=function(t){return I.get("todo-lists/".concat(t,"/tasks"))},w=function(t,e){return I.post("todo-lists/".concat(t,"/tasks"),{title:e})},A=function(t,e){return I.delete("todo-lists/".concat(e,"/tasks/").concat(t))},S=function(t,e,a){return I.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},T=function(){return I.get("todo-lists")},L=function(t){return I.post("todo-lists",{title:t})},D=function(t){return I.delete("todo-lists/".concat(t))},E=function(t,e){return I.put("todo-lists/".concat(t),{title:e})},N=function(t){return I.post("auth/login",t)},F=function(){return I.delete("auth/login")},P=function(){return I.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var z=function(t,e){t.messages.length?e(K({error:t.messages[0]})):e(K({error:"Some error occurred"})),e(J({status:"failed"}))},R=function(t,e){e(K({error:t.message})),e(J({status:"failed"}))},_=a(29),B=Object(_.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedIn:function(t,e){t.isLoggedIn=e.payload.value}}}),M=B.reducer,U=B.actions.setIsLoggedIn,q=Object(_.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setIsInitialized:function(t,e){t.isInitialized=e.payload.value}}}),G=q.reducer,H=q.actions,J=H.setAppStatusAC,K=H.setAppErrorAC,Z=H.setIsInitialized,V=Object(_.b)({name:"todolist",initialState:[],reducers:{setTodolistsAC:function(t,e){return e.payload.todos.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all",entityStatus:"idle"})}))},addTodolistAC:function(t,e){t.push(Object(v.a)(Object(v.a)({},e.payload.todo),{},{filter:"all",entityStatus:"idle"}))},removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistID}));-1!==a&&t.splice(a,1)},changeFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.entityStatus}}}),Y=V.reducer,$=V.actions,Q=$.setTodolistsAC,W=$.addTodolistAC,X=$.removeTodolistAC,tt=$.changeFilterAC,et=$.changeTitleAC,at=$.changeTodolistEntityStatusAC,nt=a(202),it=a(162),st=a(46),ot=a(211),dt=a(199),ct=d.a.memo((function(t){var e=t.addItem,a=t.disabled,n=void 0!==a&&a,i=Object(o.useState)(null),d=Object(st.a)(i,2),c=d[0],r=d[1],l=Object(o.useState)(""),u=Object(st.a)(l,2),j=u[0],f=u[1],p=function(){""!==j.trim()?(e(j.trim()),f("")):r("Title is required")};return Object(s.jsxs)("div",{children:[Object(s.jsx)(ot.a,{value:j,disabled:n,onChange:function(t){f(t.currentTarget.value)},onKeyPress:function(t){null!==c&&r(null),"Enter"===t.key&&p()},error:!!c,label:j,helperText:c,variant:"outlined",className:""}),Object(s.jsx)(b.a,{size:"small",color:"primary",onClick:p,disabled:n,children:Object(s.jsx)(dt.a,{})})]})})),rt=a(200),lt=d.a.memo((function(t){var e=t.value,a=t.onChange,n=t.disabled,i=void 0!==n&&n,c=d.a.useState(!1),r=Object(st.a)(c,2),l=r[0],u=r[1],j=Object(o.useState)(e),f=Object(st.a)(j,2),b=f[0],p=f[1];return l?Object(s.jsx)(ot.a,{variant:"outlined",value:b,onChange:function(t){p(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&(u(!1),a(b))},autoFocus:!0,onBlur:function(){u(!1),a(b)}}):Object(s.jsx)("span",{onDoubleClick:function(){i||(u(!0),p(e))},children:b})})),ut=a(213),jt={1:[{id:"1",title:"CSS",status:n.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"},{id:"2",title:"JS",status:n.Completed,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"},{id:"3",title:"REACT",status:n.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"}],2:[{id:"1",title:"book",status:n.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"},{id:"2",title:"book2",status:n.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"},{id:"3",title:"book3",status:n.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"}]},ft=Object(_.b)({name:"tasks",initialState:jt,reducers:{setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(v.a)(Object(v.a)({},a[n]),e.payload.model))},changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n].entityStatus=e.payload.entityStatus)}},extraReducers:function(t){t.addCase(W,(function(t,e){t[e.payload.todo.id]=[]})),t.addCase(X,(function(t,e){delete t[e.payload.todolistID]})),t.addCase(Q,(function(t,e){e.payload.todos.forEach((function(e){t[e.id]=[]}))}))}}),bt=ft.reducer,pt=ft.actions,Ot=pt.setTasksAC,ht=pt.addTaskAC,mt=pt.removeTaskAC,gt=pt.updateTaskAC,xt=pt.changeTaskEntityStatusAC,yt=function(t,e,a){return function(n,i){var s=i().tasks[e].find((function(e){return e.id===t}));if(s){var o=Object(v.a)({title:s.title,description:s.description,status:s.status,priority:s.priority,startDate:s.startDate,deadline:s.deadline},a);n(J({status:"loading"})),n(xt({taskId:t,todolistId:e,entityStatus:"loading"})),S(e,t,o).then((function(i){if(0===i.data.resultCode){var s=gt({taskId:t,model:a,todolistId:e});n(s),n(J({status:"succeeded"})),n(xt({taskId:t,todolistId:e,entityStatus:"succeeded"}))}else z(i.data,n)})).catch((function(t){R(t,n)}))}else console.warn("task not found in the state")}},vt=d.a.memo((function(t){var e=t.todolistId,a=t.task,i=Object(y.b)(),d=Object(o.useCallback)((function(){i(function(t,e){return function(a){a(J({status:"loading"})),a(xt({taskId:t,todolistId:e,entityStatus:"loading"})),A(t,e).then((function(n){if(0===n.data.resultCode){var i=mt({taskId:t,todolistId:e});a(i),a(J({status:"succeeded"}))}else z(n.data,a)})).catch((function(t){R(t,a)}))}}(a.id,e))}),[a.id,e]),c=Object(o.useCallback)((function(t){var s=t.currentTarget.checked?n.Completed:n.New;i(yt(a.id,e,{status:s}))}),[a.id,e]),r=Object(o.useCallback)((function(t){i(yt(a.id,e,{title:t}))}),[a.id,e]),l="loading"===a.entityStatus;return Object(s.jsxs)("div",{className:a.status===n.Completed?"task__wrapper is-done":"task__wrapper",children:[Object(s.jsx)(ut.a,{color:"primary",onChange:c,checked:a.status===n.Completed,disabled:l}),Object(s.jsx)(lt,{value:a.title,onChange:r,disabled:l}),Object(s.jsx)(b.a,{onClick:d,disabled:l,children:Object(s.jsx)(rt.a,{})})]})})),Ct=d.a.memo((function(t){var e=Object(y.c)((function(t){return t.auth.isLoggedIn})),a=Object(y.b)();Object(o.useEffect)((function(){var n;e&&a((n=t.todolistId,function(t){t(J({status:"loading"})),k(n).then((function(e){var a=e.data.items,i=Ot({tasks:a,todolistId:n});t(i),t(J({status:"succeeded"}))})).catch((function(e){R(e,t)}))}))}),[]);var i=Object(o.useCallback)((function(e){a(function(t,e){return function(a){a(J({status:"loading"})),w(e,t).then((function(t){if(0===t.data.resultCode){var e=ht({task:t.data.data.item});a(e),a(J({status:"succeeded"}))}else z(t.data,a)})).catch((function(t){R(t,a)}))}}(e.trim(),t.todolistId))}),[a]),d=Object(o.useCallback)((function(e){var n,i;a((n=t.todolistId,i=e,function(t){t(J({status:"loading"})),t(at({id:n,entityStatus:"loading"})),E(n,i).then((function(e){if(0===e.data.resultCode){var a=et({id:n,title:i});t(a),t(J({status:"succeeded"})),t(at({id:n,entityStatus:"succeeded"}))}else z(e.data,t)})).catch((function(e){R(e,t)}))}))}),[a,t.todolistId]),c=Object(o.useCallback)((function(t,e){a(tt({filter:t,id:e}))}),[a]),r=Object(o.useCallback)((function(t){var e;a((e=t,function(t){t(J({status:"loading"})),t(at({id:e,entityStatus:"loading"})),D(e).then((function(a){if(0===a.data.resultCode){var n=X({todolistID:e});t(n),t(J({status:"succeeded"}))}else z(a.data,t)})).catch((function(e){R(e,t)}))}))}),[]),l=Object(o.useCallback)((function(){c("all",t.todolistId)}),[]),u=Object(o.useCallback)((function(){c("active",t.todolistId)}),[]),j=Object(o.useCallback)((function(){c("completed",t.todolistId)}),[]),f=t.tasks,p=f;"active"===t.filter&&(p=f.filter((function(t){return t.status===n.New}))),"completed"===t.filter&&(p=f.filter((function(t){return t.status===n.Completed})));var h=p.map((function(e){return Object(s.jsx)(vt,{task:e,todolistId:t.todolistId},e.id)})),m="loading"===t.todolist.entityStatus;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"title__wrapper",children:[Object(s.jsx)(lt,{value:t.title,onChange:d,disabled:m}),Object(s.jsx)(b.a,{onClick:function(){return r(t.todolistId)},disabled:m,children:Object(s.jsx)(rt.a,{})})]}),Object(s.jsx)(ct,{addItem:i,disabled:m}),Object(s.jsx)("div",{children:h}),Object(s.jsxs)("div",{children:[Object(s.jsx)(O.a,{variant:"outlined",color:"all"===t.filter?"secondary":"primary",size:"small",onClick:l,children:"All"}),Object(s.jsx)(O.a,{variant:"outlined",color:"active"===t.filter?"secondary":"primary",size:"small",onClick:u,children:"Active"}),Object(s.jsx)(O.a,{variant:"outlined",color:"completed"===t.filter?"secondary":"primary",size:"small",onClick:j,children:"Completed"})]})]})})),It=a(15),kt=function(){var t=Object(y.c)((function(t){return t.auth.isLoggedIn})),e=Object(y.c)((function(t){return t.todolists})),a=Object(y.c)((function(t){return t.tasks})),n=Object(y.b)();Object(o.useEffect)((function(){t&&n((function(t){t(J({status:"loading"})),T().then((function(e){t(Q({todos:e.data})),t(J({status:"succeeded"}))})).catch((function(e){R(e,t)}))}))}),[]);var i=Object(o.useCallback)((function(t){n(function(t){return function(e){try{e(J({status:"loading"})),L(t).then((function(t){0===t.data.resultCode?(e(W({todo:t.data.data.item})),e(J({status:"succeeded"}))):z(t.data,e)})).catch((function(t){R(t,e)}))}catch(a){throw new Error(a)}}}(t))}),[]);return t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(nt.a,{container:!0,style:{padding:"20px"},justify:"center",alignItems:"center",direction:"column",children:[Object(s.jsx)("div",{style:{marginRight:"20px"},children:"Add new task"}),Object(s.jsx)(ct,{addItem:i})]}),Object(s.jsx)(nt.a,{container:!0,spacing:3,justify:"space-around",children:e.map((function(t){var e=a[t.id];return Object(s.jsx)(nt.a,{item:!0,style:{padding:"20px"},children:Object(s.jsx)(it.a,{style:{padding:"10px"},children:Object(s.jsx)(Ct,{todolist:t,title:t.title,tasks:e,filter:t.filter,todolistId:t.id},t.id)})},t.id)}))})]}):Object(s.jsx)(It.a,{to:"/login"})},wt=a(216),At=a(212);function St(t){return Object(s.jsx)(At.a,Object(v.a)({elevation:6,variant:"filled"},t))}function Tt(){var t=Object(y.c)((function(t){return t.app.error})),e=Object(y.b)(),a=function(t,a){"clickaway"!==a&&e(K({error:null}))};return Object(s.jsx)(wt.a,{open:null!==t,autoHideDuration:4e3,onClose:a,children:Object(s.jsx)(St,{onClose:a,severity:"error",children:t})})}var Lt=a(52),Dt=a(196),Et=a(197),Nt=a(203),Ft=a(204),Pt=a(111),zt=function(){var t=Object(y.c)((function(t){return t.auth.isLoggedIn})),e=Object(y.b)(),a=Object(Pt.a)({initialValues:{email:"free@samuraijs.com",password:"free",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="password must be more than 3 character"):e.password="Required",e},onSubmit:function(t){var n;e((n=t,function(t){t(J({status:"loading"})),N(n).then((function(e){0===e.data.resultCode?(t(J({status:"succeeded"})),t(U({value:!0}))):z(e.data,t)})).catch((function(e){R(e,t)}))})),a.resetForm()}});return t?Object(s.jsx)(It.a,{to:"/"}):Object(s.jsx)(nt.a,{container:!0,justify:"center",children:Object(s.jsx)(nt.a,{item:!0,xs:10,children:Object(s.jsx)("form",{onSubmit:a.handleSubmit,style:{textAlign:"center",marginTop:"50px"},children:Object(s.jsxs)(Dt.a,{children:[Object(s.jsxs)(Et.a,{children:[Object(s.jsxs)("p",{children:["To log in get registered",Object(s.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(s.jsx)("p",{children:"or use common test account credentials:"}),Object(s.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(s.jsx)("p",{children:"Password: free"})]}),Object(s.jsxs)(Nt.a,{children:[Object(s.jsx)(ot.a,Object(v.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(s.jsx)("div",{style:{color:"red"},children:a.errors.email}):null,Object(s.jsx)(ot.a,Object(v.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?Object(s.jsx)("div",{style:{color:"red"},children:a.errors.password}):null,Object(s.jsx)(Ft.a,{label:"Remember me",control:Object(s.jsx)(ut.a,Object(v.a)({},a.getFieldProps("rememberMe")))}),Object(s.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},Rt=Object(l.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));var _t=function(){var t=Object(y.b)(),e=Object(y.c)((function(t){return t.auth.isLoggedIn})),a=Object(y.c)((function(t){return t.app.isInitialized})),n=Object(y.c)((function(t){return t.app.status})),i=Rt(),d=Object(It.g)(),c=Object(o.useCallback)((function(){t((function(t){t(J({status:"loading"})),F().then((function(e){0===e.data.resultCode?(t(J({status:"succeeded"})),t(U({value:!1}))):z(e.data,t)})).catch((function(e){R(e,t)}))}))}),[]);return Object(o.useEffect)((function(){t((function(t){P().then((function(e){0===e.data.resultCode?t(U({value:!0})):z(e.data,t),t(Z({value:!0}))})).catch((function(e){R(e,t)}))}))}),[]),a?Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(Tt,{}),Object(s.jsx)(j.a,{position:"static",children:Object(s.jsxs)(f.a,{children:[Object(s.jsx)(b.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"menu",children:Object(s.jsx)(x.a,{})}),Object(s.jsx)(p.a,{variant:"h6",className:i.title,children:"My TODO"}),e?Object(s.jsx)(O.a,{color:"inherit",onClick:c,children:"Log out"}):Object(s.jsx)(O.a,{color:"inherit",onClick:function(){return d.push("/login")},children:"Login"})]})}),"loading"===n&&Object(s.jsx)(h.a,{color:"primary"}),Object(s.jsx)(m.a,{fixed:!0,children:Object(s.jsx)(Lt.a,{children:Object(s.jsxs)(It.d,{children:[Object(s.jsx)(It.b,{exact:!0,path:"/",render:function(){return Object(s.jsx)(kt,{})}}),Object(s.jsx)(It.b,{path:"/login",render:function(){return Object(s.jsx)(zt,{})}}),Object(s.jsx)(It.b,{path:"/404",render:function(){return Object(s.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(s.jsx)(It.a,{from:"*",to:"/404"})]})})})]}):Object(s.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(s.jsx)(u.a,{})})},Bt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,217)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;a(t),n(t),i(t),s(t),o(t)}))},Mt=a(53),Ut=a(47),qt=Object(Mt.b)({tasks:bt,todolists:Y,app:G,auth:M}),Gt=Object(_.a)({reducer:qt,middleware:function(t){return t().prepend(Ut.a)}});window.store=Gt,r.a.render(Object(s.jsx)(y.a,{store:Gt,children:Object(s.jsx)(_t,{})}),document.getElementById("root")),Bt()}},[[161,1,2]]]);
//# sourceMappingURL=main.bca4eb08.chunk.js.map