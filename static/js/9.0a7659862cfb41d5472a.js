webpackJsonp([9],{"/Cjd":function(t,e,r){"use strict";r.d(e,"a",function(){return s}),r.d(e,"b",function(){return a});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[t._v("Sign up")]),t._v(" "),r("p",{staticClass:"text-xs-center"},[r("router-link",{attrs:{to:{name:"login"}}},[t._v("\n            Have an account?\n          ")])],1),t._v(" "),t.errors?r("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,s){return r("li",{key:s},[t._v(t._s(s)+" "+t._s(t._f("error")(e)))])})):t._e(),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n            Sign up\n          ")])])])])])])},a=[]},p8AB:function(t,e,r){"use strict";var s=r("NYxO"),a=r("lHQJ"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t};e.a={name:"RwvRegister",data:function(){return{username:"",email:"",password:""}},computed:o({},r.i(s.c)({errors:function(t){return t.auth.errors}})),methods:{onSubmit:function(){var t=this;this.$store.dispatch(a.s,{email:this.email,password:this.password,username:this.username}).then(function(){return t.$router.push({name:"home"})})}}}},tcoL:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("p8AB"),a=r("/Cjd"),o=r("XyMi"),n=r.i(o.a)(s.a,a.a,a.b,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=9.0a7659862cfb41d5472a.js.map