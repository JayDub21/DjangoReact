(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(24),r=n.n(c),o=n(19),i=n(20),l=n(21),d=n(23),j=n(55),u=n(10),b=n(9),h=n(27),m=n(52),O=n(18),p="CREATE_USER_SUBMITTED",x="CREATE_USER_SUCCESS",f="CREATE_USER_ERROR",g="SET_TOKEN",v="SET_CURRENT_USER",N="UNSET_CURRENT_USER",y={usernameError:"",passwordError:"",isSubimtted:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{usernameError:"",passwordError:"",isSubimtted:!0};case f:var n={usernameError:"",passwordError:"",isSubimtted:!1};return t.errorData.hasOwnProperty("username")&&(n.usernameError=t.errorData.username),t.errorData.hasOwnProperty("password")&&(n.passwordError=t.errorData.password),n;case x:return{usernameError:"",passwordError:"",isSubimtted:!1};default:return e}},S=n(5),E={isAuthenticated:!1,user:{},token:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(S.a)(Object(S.a)({},e),{},{isAuthenticated:!0,token:t.payload});case v:return Object(S.a)(Object(S.a)({},e),{},{user:t.payload});case N:return E;default:return e}},k=function(e){return Object(h.b)({router:Object(O.b)(e),createUser:w,auth:C})},A=n(15),U=n.n(A),R=n(6),P=n(12),T=function(e){"undefined"!==typeof e&&e?U.a.defaults.headers.common.Authorization="Token "+e:delete U.a.defaults.headers.common.Authorization},_=function(e){e.response?P.toast.error(JSON.stringify(e.response.data)):e.message?P.toast.error(JSON.stringify(e.message)):P.toast.error(JSON.stringify(e))},F=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},D=function(e){return function(t){U.a.get("/api/v1/users/me/").then((function(n){var a={username:n.data.username,email:n.data.email};t(I(a,e))})).catch((function(e){t(J()),_(e)}))}},I=function(e,t){return function(n){localStorage.setItem("user",JSON.stringify(e)),n({type:v,payload:e}),console.log("set user"+t),""!==t&&(n(Object(R.d)(t)),console.log("redirectTo: ",t))}},L=function(e){return function(t){T(e),localStorage.setItem("token",e),t({type:g,payload:e})}},J=function(){return function(e){T(""),localStorage.removeItem("token"),localStorage.removeItem("user"),e({type:N})}},q=n(0),M=function(e){var t=e.children,n=e.initialState,a=void 0===n?{}:n,s=Object(b.a)(),c=[j.a,Object(m.a)(s)],r=Object(h.c)(k(s),a,h.a.apply(void 0,c));if(F(localStorage.getItem("token"))||r.dispatch(L(localStorage.getItem("token"))),!F(localStorage.getItem("user"))){var o=JSON.parse(localStorage.getItem("user"));r.dispatch(I(o,""))}return Object(q.jsx)(u.a,{store:r,children:Object(q.jsx)(O.a,{history:s,children:t})})},B=n(4);function z(e){var t=function(t){Object(l.a)(a,t);var n=Object(d.a)(a);function a(e){var t;return Object(o.a)(this,a),(t=n.call(this,e)).checkAuth(),t}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.checkAuth()}},{key:"checkAuth",value:function(){if(!this.props.isAuthenticated){var e=this.props.location.pathname;this.props.dispatch(Object(R.d)("/login?next=".concat(e)))}}},{key:"render",value:function(){return Object(q.jsx)("div",{children:!0===this.props.isAuthenticated?Object(q.jsx)(e,Object(S.a)({},this.props)):null})}}]),a}(s.a.Component);return Object(u.c)((function(e){return{isAuthenticated:e.auth.isAuthenticated,token:e.auth.token}}))(t)}var H=function(){return Object(q.jsxs)("div",{className:"container-fluid",children:[Object(q.jsx)("h1",{children:"404 Not Found"}),Object(q.jsx)("p",{children:"The link you requested does not exist on this website."})]})},K=n(17),G=n(7),Q=Object(u.c)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){U.a.post("/api/v1/token/logout/").then((function(t){e(J()),e(Object(R.d)("/")),P.toast.success("Logout successful.")})).catch((function(t){e(J()),_(t)}))}}})(Object(B.g)((function(e){var t=e.logout,n=e.auth,s=Object(a.useState)(!1),c=Object(K.a)(s,2),r=c[0],o=c[1],i=function(){t(),o(!0)};return Object(q.jsxs)(a.Fragment,{children:[Object(q.jsx)("nav",{className:"navbar navbar-expand-lg",children:Object(q.jsxs)("div",{className:"container-fluid",children:[Object(q.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(q.jsx)("span",{className:"navbar-toggler-icon"})}),Object(q.jsxs)("div",{className:"collapse navbar-collapse",children:[Object(q.jsx)("h1",{children:"DjangoReact"}),Object(q.jsx)("ul",{className:"navbar-nav ms-auto",id:"navItems",children:n.isAuthenticated?Object(q.jsxs)(a.Fragment,{children:[Object(q.jsx)("li",{className:"nav-item m-1",children:Object(q.jsx)(G.a,{className:"nav-link",to:"/",children:"Dashboard"})}),Object(q.jsx)("li",{className:"nav-item m-1",children:Object(q.jsx)(G.a,{className:"nav-link",to:"/login",onClick:i,children:"Logout"})})]}):Object(q.jsx)(a.Fragment,{children:Object(q.jsx)("li",{className:"nav-item m-1",children:Object(q.jsx)(G.a,{className:"nav-link",to:"/login",children:"Login"})})})})]})]})}),r?Object(q.jsx)(B.a,{to:"/"}):Object(q.jsx)(a.Fragment,{})]})}))),V=Object(u.c)(null,{getCurrentUser:D})((function(e){var t=e.getCurrentUser,n=e.children;return Object(a.useEffect)((function(){t()}),[t]),Object(q.jsxs)("div",{children:[Object(q.jsx)(Q,{}),n]})})),W=n(102),X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(q.jsxs)(W.a,{children:[Object(q.jsx)("h1",{children:"Home"}),Object(q.jsx)("p",{children:Object(q.jsx)(G.a,{to:"/login/",children:"Login"})}),Object(q.jsx)("p",{children:Object(q.jsx)(G.a,{to:"/signup",children:"Sign up"})}),Object(q.jsx)("p",{children:Object(q.jsx)(G.a,{to:"/dashboard",children:"Dashboard"})})]})}}]),n}(a.Component),Y=X,Z=n(22),$=Object(u.c)((function(e){return{createUser:e.createUser}}),{signup:function(e){return function(t){t({type:p}),U.a.post("/api/v1/users/",e).then((function(n){P.toast.success("Account for "+e.username+" created successfully. Please login."),t({type:x})})).catch((function(e){e.resposne?(P.toast.error(JSON.stringify(e.response.data)),t({type:f,errorData:e.response.data})):e.message?P.toast.error(JSON.stringify(e.message)):P.toast.error(JSON.stringify(e))}))}}})(Object(B.g)((function(e){var t=e.signup,n=e.isAuthenticated,s=Object(a.useState)(!1),c=Object(K.a)(s,2),r=c[0],o=c[1],i=Object(a.useState)({username:"",password:"",re_password:""}),l=Object(K.a)(i,2),d=l[0],j=l[1],u=d.username,b=d.password,h=d.re_password,m=function(e){return j(Object(S.a)(Object(S.a)({},d),{},Object(Z.a)({},e.target.name,e.target.value)))};return n?Object(q.jsx)(B.a,{to:"/"}):r?Object(q.jsx)(B.a,{to:"/login"}):Object(q.jsxs)("div",{className:"container-fluid",id:"acctAppForm",children:[Object(q.jsx)("br",{}),Object(q.jsx)("h2",{children:"Signup:"}),Object(q.jsx)("hr",{}),Object(q.jsx)("br",{}),Object(q.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),b===h?(t(u,b),console.log(t),o(!0)):alert("Passwords Must Match")}(e)},children:[Object(q.jsx)("div",{className:"row g-2",children:Object(q.jsx)("div",{className:"col-md-6",children:Object(q.jsxs)("div",{className:"form-floating mb-3",children:[Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Username*",name:"username",value:u,onChange:function(e){return m(e)},required:!0}),Object(q.jsx)("label",{htmlFor:"floatingUsername",children:"Username"})]})})}),Object(q.jsx)("div",{className:"row g-2",children:Object(q.jsx)("div",{className:"col-md-6",children:Object(q.jsxs)("div",{className:"form-floating mb-3",children:[Object(q.jsx)("input",{className:"form-control",type:"password",id:"floatingPassword",placeholder:"Password",name:"password",value:b,onChange:function(e){return m(e)},required:!0}),Object(q.jsx)("label",{htmlFor:"floatingPassword",children:"Password"})]})})}),Object(q.jsx)("div",{className:"row g-2",children:Object(q.jsx)("div",{className:"col-md-6",children:Object(q.jsxs)("div",{className:"form-floating mb-3",children:[Object(q.jsx)("input",{className:"form-control",type:"password",id:"floatingRePassword",placeholder:"Confirm Password",name:"re_password",value:h,onChange:function(e){return m(e)},required:!0}),Object(q.jsx)("label",{htmlFor:"floatingRePassword",children:"Confirm Password"})]})})}),Object(q.jsx)("br",{}),Object(q.jsx)("div",{className:"col-12",children:Object(q.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit Application"})})]}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{}),Object(q.jsx)("div",{className:"row g-2 justify-content-center",children:Object(q.jsx)("div",{className:"col-sm-7",children:Object(q.jsxs)("div",{className:"card",children:[Object(q.jsx)("div",{className:"card-header text-white text-center",id:"confidential",children:Object(q.jsx)("h5",{children:"Password Requirements:"})}),Object(q.jsx)("div",{className:"card-body",children:Object(q.jsx)("p",{className:"card-text",children:Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:"Must contain at least 9 characters (uppercase, lowercase, number and special character)"}),Object(q.jsx)("li",{children:"Cannot contain any portion of the account holder\u2019s:"}),Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:"Name"}),Object(q.jsx)("li",{children:"Email Address"})]}),Object(q.jsx)("li",{children:'Cannot be a "common" password'}),Object(q.jsx)("li",{children:"Cannot be only numbers"})]})})})]})})}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{})]})}))),ee=Object(u.c)((function(e){return{auth:e.auth}}),{login:function(e,t){return function(n){U.a.post("/api/v1/token/login/",e).then((function(e){var a=e.data.auth_token;T(a),n(L(a)),n(D(t))})).catch((function(e){n(J()),_(e)})),console.log("userData: ",e)}}})(Object(B.g)((function(e){var t=e.login,n=Object(a.useState)({username:"",password:""}),s=Object(K.a)(n,2),c=s[0],r=s[1],o=c.username,i=c.password,l=function(e){return r(Object(S.a)(Object(S.a)({},c),{},Object(Z.a)({},e.target.name,e.target.value)))};return Object(q.jsx)("div",{className:"container-fluid outerMargin",children:Object(q.jsx)("div",{className:"row",children:Object(q.jsxs)("div",{className:"col-md-5",children:[Object(q.jsx)("h2",{children:"Login"}),Object(q.jsx)("hr",{}),Object(q.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(c,"/dashboard"),console.log("userData: ",c)}(e)},children:[Object(q.jsxs)("div",{className:"form-floating mb-3",children:[Object(q.jsx)("input",{type:"username",className:"form-control",placeholder:"username",id:"floatingusername",name:"username",value:o,onChange:function(e){return l(e)},required:!0}),Object(q.jsx)("label",{htmlFor:"floatingInput",children:"username"})]}),Object(q.jsxs)("div",{className:"form-floating mb-3",children:[Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"password",id:"floatingPassword",name:"password",value:i,onChange:function(e){return l(e)},required:!0}),Object(q.jsx)("label",{htmlFor:"floatingPassword",children:"Password"})]}),Object(q.jsxs)("div",{className:"col-12",children:[Object(q.jsx)("button",{type:"submit",className:"btn btn-success m-1",children:"Login"}),Object(q.jsx)(G.a,{className:"btn btn-primary m-1",to:"/reset-password",children:"Forgot Password"}),Object(q.jsx)(G.a,{className:"btn btn-primary",to:"/signup",children:"Create Account"})]})]})]})})})}))),te=function(e){var t=e.isAuthenticated,n=e.user;return t?Object(q.jsxs)("div",{className:"contaner-fluid",id:"dashboardContainer",children:[Object(q.jsx)("br",{}),Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"col-md-8",id:"myAccount",children:Object(q.jsxs)("div",{className:"card text-center text-white",id:"accountCard",children:[Object(q.jsx)("div",{className:"card-header",id:"my-account",children:Object(q.jsx)("h4",{className:"card-title",children:"My Account Information"})}),Object(q.jsx)("div",{className:"card-body",children:Object(q.jsx)("table",{className:"table table-sm",children:Object(q.jsxs)("tbody",{children:[Object(q.jsxs)("tr",{className:"h5",children:[Object(q.jsx)("th",{className:"pt-2 pb-3 pl-1",children:"User"}),Object(q.jsx)("th",{className:"pt-2 pb-3 pl-1",children:"Email"}),Object(q.jsx)("th",{className:"pt-2 pb-3 pl-1",children:"Last Login"})]}),Object(q.jsxs)("tr",{className:"h6",children:[Object(q.jsxs)("td",{className:"pt-3 pb-3 pl-1",children:[null===n||void 0===n?void 0:n.first_name," ",null===n||void 0===n?void 0:n.last_name]}),Object(q.jsx)("td",{className:"pt-3 pb-3 pl-1",children:null===n||void 0===n?void 0:n.email}),Object(q.jsx)("td",{className:"pt-3 pb-3 pl-1",children:null===n||void 0===n?void 0:n.last_login})]})]})})})]})})})]}):Object(q.jsx)(B.a,{to:"/login"})};U.a.defaults.baseURL="http://127.0.0.1:8000";var ne=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(q.jsx)("div",{children:Object(q.jsxs)(M,{children:[Object(q.jsx)(P.ToastContainer,{position:"bottom-center"}),Object(q.jsx)(V,{children:Object(q.jsxs)(B.d,{children:[Object(q.jsx)(B.b,{path:"/signup",component:$}),Object(q.jsx)(B.b,{path:"/login",component:ee}),Object(q.jsx)(B.b,{path:"/dashboard",component:z(te)}),Object(q.jsx)(B.b,{exact:!0,path:"/",component:Y}),Object(q.jsx)(B.b,{component:H})]})})]})})}}]),n}(a.Component),ae=ne,se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};n(98),n(99);r.a.render(Object(q.jsx)(s.a.StrictMode,{children:Object(q.jsx)(ae,{})}),document.getElementById("root")),se()}},[[100,1,2]]]);
//# sourceMappingURL=main.74bea04f.chunk.js.map