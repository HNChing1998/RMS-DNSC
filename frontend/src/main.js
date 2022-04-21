import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueRouter from 'vue-router'
import SignUp from './components/SignUp.vue'
import LoginForm from './components/LoginForm.vue'
import index from './components/index.vue'
import LoginFormUser from './components/LoginFormUser.vue'
import SignUpUser from './components/SignUpUser.vue'
import LoginFormAdmin from './components/LoginFormAdmin.vue'
import SignUpAdmin from './components/SignUpAdmin.vue'

Vue.use(VueRouter);
const router= new VueRouter({
  mode:'history',
  routes: [
    {path: "/SignUp", name: "SignUp", component: SignUp},
    {path: "/LoginForm", name:"LoginForm", component: LoginForm},
    {path: "/index", name:"Index", component: index},
    {path: "/LoginFormUser", name:"LoginFormUser", component: LoginFormUser},
    {path: "/SignUpUser", name: "SignUpUser", component: SignUpUser},
    {path: "/LoginFormAdmin", name:"LoginFormAdmin", component: LoginFormAdmin},
    {path: "/SignUpAdmin", name: "SignUpAdmin", component: SignUpAdmin},

  ]
})


Vue.config.productionTip = false



new Vue({
router: router,
  render: h => h(App),
}).$mount('#app')
