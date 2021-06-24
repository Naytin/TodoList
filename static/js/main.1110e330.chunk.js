(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{133:function(t,e,n){},134:function(t,e,n){},167:function(t,e,n){"use strict";n.r(e);var a,i,c=n(2),r=n(0),o=n.n(r),s=n(10),d=n.n(s),l=(n(133),n(134),n(211)),u=n(212),j=n(213),b=n(204),O=n(169),f=n(207),p=n(214),h=n(215),m=n(114),g=n.n(m),I=n(15),x=n(70),v=n.n(x),T=n(90),S=n(62),y=n(8),k=n(91),E=n.n(k).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a409a2ec-60ad-4ff6-9051-8f6025edc2fd"}}),C=function(t){return E.get("todo-lists/".concat(t,"/tasks"))},w=function(t,e){return E.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e){return E.delete("todo-lists/".concat(e,"/tasks/").concat(t))},A=function(t,e,n){return E.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},L=function(){return E.get("todo-lists")},N=function(t){return E.post("todo-lists",{title:t})},_=function(t){return E.delete("todo-lists/".concat(t))},P=function(t,e){return E.put("todo-lists/".concat(t),{title:e})},R=function(t){return E.post("auth/login",t)},G=function(){return E.delete("auth/login")},F=function(){return E.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var K=function(t,e){t.messages.length?e(B(t.messages[0])):e(B("Some error occurred")),e(V("failed"))},U=function(t,e){e(B(t.message)),e(V("failed"))},H={isLoggedIn:!1},M=function(t){return{type:"login/SET_IS_LOGGED_IN",value:t}},z={status:"succeeded",error:null,isInitialized:!1},V=function(t){return{type:"APP/SET-STATUS",status:t}},B=function(t){return{type:"APP/SET-ERROR",error:t}},Y=[{id:"1",addedDate:"",order:0,title:"React",filter:"all",entityStatus:"idle"},{id:"2",addedDate:"",order:0,title:"React",filter:"all",entityStatus:"idle"}],Z=function(t,e){return{type:"CHANGE-TODOLIST-ENTITY-STATUS",id:t,entityStatus:e}},q=n(208),J=n(168),X=n(47),$=n(216),Q=n(205),W=o.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n,i=Object(r.useState)(null),o=Object(X.a)(i,2),s=o[0],d=o[1],l=Object(r.useState)(""),u=Object(X.a)(l,2),j=u[0],O=u[1],f=function(){""!==j.trim()?(e(j.trim()),O("")):d("Title is required")};return Object(c.jsxs)("div",{children:[Object(c.jsx)($.a,{value:j,disabled:a,onChange:function(t){O(t.currentTarget.value)},onKeyPress:function(t){null!==s&&d(null),"Enter"===t.key&&f()},error:!!s,label:j,helperText:s,variant:"outlined",className:""}),Object(c.jsx)(b.a,{size:"small",color:"primary",onClick:f,disabled:a,children:Object(c.jsx)(Q.a,{})})]})})),tt=n(206),et=o.a.memo((function(t){var e=t.value,n=t.onChange,a=t.disabled,i=void 0!==a&&a,s=o.a.useState(!1),d=Object(X.a)(s,2),l=d[0],u=d[1],j=Object(r.useState)(e),b=Object(X.a)(j,2),O=b[0],f=b[1];return l?Object(c.jsx)($.a,{variant:"outlined",value:O,onChange:function(t){f(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&(u(!1),n(O))},autoFocus:!0,onBlur:function(){u(!1),n(O)}}):Object(c.jsx)("span",{onDoubleClick:function(){i||(u(!0),f(e))},children:O})})),nt=n(218),at=n(31),it={1:[{id:"1",title:"CSS",status:a.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"},{id:"2",title:"JS",status:a.Completed,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"},{id:"3",title:"REACT",status:a.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"}],2:[{id:"1",title:"book",status:a.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"},{id:"2",title:"book2",status:a.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"},{id:"3",title:"book3",status:a.New,todoListId:"todolistId1",description:"",startDate:"",deadline:"",addedDate:"",order:0,priority:i.Low,entityStatus:"succeeded"}]},ct=function(t,e,n){return{type:"CHANGE-TASK-ENTITY-STATUS",taskId:t,todolistId:e,entityStatus:n}},rt=function(t,e,n){return function(a,i){var c=i().tasks[e].find((function(e){return e.id===t}));if(c){var r=Object(y.a)({title:c.title,description:c.description,status:c.status,priority:c.priority,startDate:c.startDate,deadline:c.deadline},n);a(V("loading")),a(ct(t,e,"loading")),A(e,t,r).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE_TASK",taskId:t,model:e,todolistId:n}}(t,n,e);a(c),a(V("succeeded")),a(ct(t,e,"succeeded"))}else K(i.data,a)})).catch((function(t){U(t,a)}))}else console.warn("task not found in the state")}},ot=o.a.memo((function(t){var e=t.todolistId,n=t.task,i=Object(I.b)(),o=Object(r.useCallback)((function(){i(function(t,e){return function(n){n(V("loading")),n(ct(t,e,"loading")),D(t,e).then((function(a){if(0===a.data.resultCode){var i=function(t,e){return{type:"REMOVE_TASK",taskId:t,todolistId:e}}(t,e);n(i),n(V("succeeded"))}else K(a.data,n)})).catch((function(t){U(t,n)}))}}(n.id,e))}),[n.id,e]),s=Object(r.useCallback)((function(t){var c=t.currentTarget.checked?a.Completed:a.New;i(rt(n.id,e,{status:c}))}),[n.id,e]),d=Object(r.useCallback)((function(t){i(rt(n.id,e,{title:t}))}),[n.id,e]),l="loading"===n.entityStatus;return Object(c.jsxs)("div",{className:n.status===a.Completed?"task__wrapper is-done":"task__wrapper",children:[Object(c.jsx)(nt.a,{color:"primary",onChange:s,checked:n.status===a.Completed,disabled:l}),Object(c.jsx)(et,{value:n.title,onChange:d,disabled:l}),Object(c.jsx)(b.a,{onClick:o,disabled:l,children:Object(c.jsx)(tt.a,{})})]})})),st=o.a.memo((function(t){var e=Object(I.b)();Object(r.useEffect)((function(){var n;e((n=t.todolistId,function(t){t(V("loading")),C(n).then((function(e){var a=function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,n);t(a),t(V("succeeded"))})).catch((function(e){U(e,t)}))}))}),[]);var n=Object(r.useCallback)((function(n){e(function(t,e){return function(n){n(V("loading")),w(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD_TASK",task:t.data.data.item};n(e),n(V("succeeded"))}else K(t.data,n)})).catch((function(t){U(t,n)}))}}(n.trim(),t.todolistId))}),[e]),i=Object(r.useCallback)((function(n){var a,i;e((a=t.todolistId,i=n,function(t){t(V("loading")),t(Z(a,"loading")),P(a,i).then((function(e){if(0===e.data.resultCode){var n=function(t,e){return{type:"CHANGE-TITLE",id:t,title:e}}(a,i);t(n),t(V("succeeded")),t(Z(a,"succeeded"))}else K(e.data,t)})).catch((function(e){U(e,t)}))}))}),[e,t.todolistId]),o=Object(r.useCallback)((function(t,n){e({type:"CHANGE-FILTER",filter:t,id:n})}),[e]),s=Object(r.useCallback)((function(t){var n;e((n=t,function(t){t(V("loading")),t(Z(n,"loading")),_(n).then((function(e){0===e.data.resultCode?(t({type:"REMOVE-TODOLIST",id:n}),t(V("succeeded"))):K(e.data,t)})).catch((function(e){U(e,t)}))}))}),[]),d=Object(r.useCallback)((function(){o("all",t.todolistId)}),[]),l=Object(r.useCallback)((function(){o("active",t.todolistId)}),[]),u=Object(r.useCallback)((function(){o("completed",t.todolistId)}),[]),j=t.tasks,O=j;"active"===t.filter&&(O=j.filter((function(t){return t.status===a.New}))),"completed"===t.filter&&(O=j.filter((function(t){return t.status===a.Completed})));var p=O.map((function(e){return Object(c.jsx)(ot,{task:e,todolistId:t.todolistId},e.id)})),h="loading"===t.todolist.entityStatus;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"title__wrapper",children:[Object(c.jsx)(et,{value:t.title,onChange:i,disabled:h}),Object(c.jsx)(b.a,{onClick:function(){return s(t.todolistId)},disabled:h,children:Object(c.jsx)(tt.a,{})})]}),Object(c.jsx)(W,{addItem:n,disabled:h}),Object(c.jsx)("div",{children:p}),Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{variant:"outlined",color:"all"===t.filter?"secondary":"primary",size:"small",onClick:d,children:"All"}),Object(c.jsx)(f.a,{variant:"outlined",color:"active"===t.filter?"secondary":"primary",size:"small",onClick:l,children:"Active"}),Object(c.jsx)(f.a,{variant:"outlined",color:"completed"===t.filter?"secondary":"primary",size:"small",onClick:u,children:"Completed"})]})]})})),dt=n(16),lt=function(){var t=Object(I.c)((function(t){return t.auth.isLoggedIn})),e=Object(I.c)((function(t){return t.todolists})),n=Object(I.c)((function(t){return t.tasks})),a=Object(I.b)();Object(r.useEffect)((function(){t&&a((function(t){t(V("loading")),L().then((function(e){t({type:"SET-TODOS",todos:e.data}),t(V("succeeded"))})).catch((function(e){U(e,t)}))}))}),[]);var i=Object(r.useCallback)((function(t){a(function(t){return function(){var e=Object(T.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(V("loading")),e.next=4,N(t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TODOLIST",todo:t.data.data.item};n(e),n(V("succeeded"))}else K(t.data,n)})).catch((function(t){U(t,n)}));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}(t))}),[]);return t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(q.a,{container:!0,style:{padding:"20px"},justify:"center",alignItems:"center",direction:"column",children:[Object(c.jsx)("div",{style:{marginRight:"20px"},children:"Add new task"}),Object(c.jsx)(W,{addItem:i})]}),Object(c.jsx)(q.a,{container:!0,spacing:3,justify:"space-around",children:e.map((function(t){var e=n[t.id];return Object(c.jsx)(q.a,{item:!0,wrap:"wrap",style:{padding:"20px"},children:Object(c.jsx)(J.a,{style:{padding:"10px"},children:Object(c.jsx)(st,{todolist:t,title:t.title,tasks:e,filter:t.filter,todolistId:t.id},t.id)})},t.id)}))})]}):Object(c.jsx)(dt.a,{to:"/login"})},ut=n(221),jt=n(217);function bt(t){return Object(c.jsx)(jt.a,Object(y.a)({elevation:6,variant:"filled"},t))}function Ot(){var t=Object(I.c)((function(t){return t.app.error})),e=Object(I.b)(),n=function(t,n){"clickaway"!==n&&e(B(null))};return Object(c.jsx)(ut.a,{open:null!==t,autoHideDuration:4e3,onClose:n,children:Object(c.jsx)(bt,{onClose:n,severity:"error",children:t})})}var ft=n(53),pt=n(202),ht=n(203),mt=n(209),gt=n(210),It=n(116),xt=function(){var t=Object(I.c)((function(t){return t.auth.isLoggedIn})),e=Object(I.b)(),n=Object(It.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="password must be more than 3 character"):e.password="Required",e},onSubmit:function(t){var a;e((a=t,function(t){t(V("loading")),R(a).then((function(e){0===e.data.resultCode?(t(V("succeeded")),t(M(!0))):K(e.data,t)})).catch((function(e){U(e,t)}))})),n.resetForm()}});return t?Object(c.jsx)(dt.a,{to:"/"}):Object(c.jsx)(q.a,{container:!0,justify:"center",children:Object(c.jsx)(q.a,{item:!0,xs:4,children:Object(c.jsx)("form",{onSubmit:n.handleSubmit,style:{textAlign:"center",marginTop:"50px"},children:Object(c.jsxs)(pt.a,{children:[Object(c.jsxs)(ht.a,{children:[Object(c.jsxs)("p",{children:["To log in get registered",Object(c.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(c.jsx)("p",{children:"or use common test account credentials:"}),Object(c.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(c.jsx)("p",{children:"Password: free"})]}),Object(c.jsxs)(mt.a,{children:[Object(c.jsx)($.a,Object(y.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?Object(c.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(c.jsx)($.a,Object(y.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?Object(c.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(c.jsx)(gt.a,{label:"Remember me",control:Object(c.jsx)(nt.a,Object(y.a)({},n.getFieldProps("rememberMe")))}),Object(c.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},vt=Object(l.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));var Tt=function(){var t=Object(I.b)(),e=Object(I.c)((function(t){return t.auth.isLoggedIn})),n=(Object(I.c)((function(t){return t.app.isInitialized})),Object(I.c)((function(t){return t.app.status}))),a=vt(),i=Object(dt.g)(),o=Object(r.useCallback)((function(){t((function(t){t(V("loading")),G().then((function(e){0===e.data.resultCode?(t(V("succeeded")),t(M(!1))):K(e.data,t)})).catch((function(e){U(e,t)}))}))}),[]);return Object(r.useEffect)((function(){t((function(t){t(V("loading")),F().then((function(e){0===e.data.resultCode?(t({type:"APP/IS_INITIALIZED",value:!0}),t(M(!0)),t(V("succeeded"))):K(e.data,t)})).catch((function(e){U(e,t)}))}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(Ot,{}),Object(c.jsx)(u.a,{position:"static",children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(b.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",children:Object(c.jsx)(g.a,{})}),Object(c.jsx)(O.a,{variant:"h6",className:a.title,children:"My TODO"}),e?Object(c.jsx)(f.a,{color:"inherit",onClick:o,children:"Log out"}):Object(c.jsx)(f.a,{color:"inherit",onClick:function(){return i.push("/login")},children:"Login"})]})}),"loading"===n&&Object(c.jsx)(p.a,{color:"primary"}),Object(c.jsx)(h.a,{fixed:!0,children:Object(c.jsx)(ft.a,{children:Object(c.jsxs)(dt.d,{children:[Object(c.jsx)(dt.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(lt,{})}}),Object(c.jsx)(dt.b,{path:"/login",render:function(){return Object(c.jsx)(xt,{})}}),Object(c.jsx)(dt.b,{path:"/404",render:function(){return Object(c.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(c.jsx)(dt.a,{from:"*",to:"/404"})]})})})]})},St=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,222)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),c(t),r(t)}))},yt=n(45),kt=n(115),Et=Object(yt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TASKS":return Object(y.a)(Object(y.a)({},t),{},Object(at.a)({},e.todolistId,e.tasks));case"ADD_TASK":return Object(y.a)(Object(y.a)({},t),{},Object(at.a)({},e.task.todoListId,[e.task].concat(Object(S.a)(t[e.task.todoListId]))));case"REMOVE_TASK":return Object(y.a)(Object(y.a)({},t),{},Object(at.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"UPDATE_TASK":return Object(y.a)(Object(y.a)({},t),{},Object(at.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(y.a)(Object(y.a)({},t),e.model):t}))));case"CHANGE-TASK-ENTITY-STATUS":return Object(y.a)(Object(y.a)({},t),{},Object(at.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(y.a)(Object(y.a)({},t),{},{entityStatus:e.entityStatus}):t}))));case"SET-TODOS":var n=Object(y.a)({},t);return e.todos.forEach((function(t){n[t.id]=[]})),n;case"ADD-TODOLIST":return Object(y.a)(Object(y.a)({},t),{},Object(at.a)({},e.todo.id,[]));case"REMOVE-TODOLIST":var a=Object(y.a)({},t);return delete a[e.id],a;default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TODOS":return e.todos.map((function(t){return Object(y.a)(Object(y.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"ADD-TODOLIST":return[Object(y.a)(Object(y.a)({},e.todo),{},{filter:"all",entityStatus:"idle"})].concat(Object(S.a)(t));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"CHANGE-FILTER":return t.map((function(t){return t.id===e.id?Object(y.a)(Object(y.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TITLE":return t.map((function(t){return t.id===e.id?Object(y.a)(Object(y.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(y.a)(Object(y.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(y.a)(Object(y.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(y.a)(Object(y.a)({},t),{},{error:e.error});case"APP/IS_INITIALIZED":return Object(y.a)(Object(y.a)({},t),{},{isInitialized:e.value});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET_IS_LOGGED_IN":return Object(y.a)(Object(y.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),Ct="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose,wt=Object(yt.d)(Et,Ct(Object(yt.a)(kt.a)));window.store=wt,d.a.render(Object(c.jsx)(I.a,{store:wt,children:Object(c.jsx)(Tt,{})}),document.getElementById("root")),St()}},[[167,1,2]]]);
//# sourceMappingURL=main.1110e330.chunk.js.map