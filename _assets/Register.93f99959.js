import{r as e,I as s,A as a,B as r,d as o,n as l,k as t,a as n,s as u,b as i,e as m,f as c,y as d,F as f,m as p,x as g,q as v,v as b,o as w,h,g as x}from"./index.2b52b6ce.js";var y=o({name:"RegisterPage",setup(){const{updateUser:o}=u.user,i=l(null),m=t({username:"",email:"",password:""}),c=l({});return{formRef:i,form:m,register:async()=>{if(!i.value?.checkValidity())return;const l=await async function(o){const l=await e.checkablePost("/users",{user:o}),t=s(l);return t.isOk()?a(t.value.user):r(t.value)}(m);l.isOk()?(o(l.value),await n("global-feed")):c.value=await l.value.getErrors()},errors:c}}});const k={class:"auth-page"},q={class:"container page"},U={class:"row"},V={class:"col-md-6 offset-md-3 col-xs-12"},P=c("h1",{class:"text-xs-center"}," Sign up ",-1),R={class:"text-xs-center"},S=x(" Have an account? "),A={class:"error-messages"},E={class:"form-group"},L={class:"form-group"},O={class:"form-group"};y.render=function(e,s,a,r,o,l){const t=i("AppLink");return w(),m("div",k,[c("div",q,[c("div",U,[c("div",V,[P,c("p",R,[c(t,{name:"login"},{default:d((()=>[S])),_:1})]),c("ul",A,[(w(!0),m(f,null,p(e.errors,((e,s)=>(w(),m("li",{key:s},h(s)+" "+h(e[0]),1)))),128))]),c("form",{ref:"formRef",onSubmit:s[4]||(s[4]=g(((...s)=>e.register(...s)),["prevent"]))},[c("fieldset",E,[v(c("input",{"onUpdate:modelValue":s[1]||(s[1]=s=>e.form.username=s),class:"form-control form-control-lg",type:"text",required:"",placeholder:"Your Name"},null,512),[[b,e.form.username]])]),c("fieldset",L,[v(c("input",{"onUpdate:modelValue":s[2]||(s[2]=s=>e.form.email=s),class:"form-control form-control-lg",type:"email",required:"",placeholder:"Email"},null,512),[[b,e.form.email]])]),c("fieldset",O,[v(c("input",{"onUpdate:modelValue":s[3]||(s[3]=s=>e.form.password=s),class:"form-control form-control-lg",type:"password",minLength:8,required:"",placeholder:"Password"},null,512),[[b,e.form.password]])]),c("button",{type:"submit",class:"btn btn-lg btn-primary pull-xs-right",disabled:!(e.form.email&&e.form.username&&e.form.password)}," Sign up ",8,["disabled"])],544)])])])])};export default y;
